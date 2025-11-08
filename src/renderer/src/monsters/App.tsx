import React, { useEffect, useState, useRef } from "react";
import type { ApiResponse } from "@shared/types";
import { translateForLang } from "@shared/utils/translations";
import { useTranslations } from "@shared/hooks/useTranslations";
import { useWindowControls, useSocket } from "@shared/hooks";
import { useWindowResize } from "@shared/hooks/useWindowResize";
import ResizeHandle from "@shared/components/ResizeHandle";
import MonstersHeader from "./MonstersHeader";
import MonsterList from "./MonsterList";
import BossSchedule from "./BossSchedule";
import DamageLogViewer from "./DamageLogViewer";
import { BOSS_SPAWN_CONFIGS } from "./bossSpawnTimes";
import { monsterRespawnTracker } from "./monsterRespawnTracker";
import { electron } from "@shared/utils/electron";
import { getItem, setItem } from "@shared/utils/localStorage";

interface MonsterEntry {
    name?: string | null;
    hp?: number | null;
    max_hp?: number | null;
    monster_id?: number | null;
    last_seen?: number | null;
    position?: { x: number; y: number; z: number } | null;
    distance?: number | null;
    direction?: string | null;
    ttk?: number | null;
}

interface MonsterData extends ApiResponse {
    enemy: Record<string, MonsterEntry>;
}

export default function MonstersApp(): React.JSX.Element {
    const [monsters, setMonsters] = useState<Record<string, MonsterEntry>>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [sortKey, setSortKey] = useState<"id" | "name" | "hp" | "distance">(
        "distance",
    );
    const [sortDesc, setSortDesc] = useState<boolean>(false);
    const [translatedNames, setTranslatedNames] = useState<
        Record<number, string>
    >({});
    const [filterMode, setFilterMode] = useState<"all" | "bosses" | "magical">(
        "all",
    );
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [activeTab, setActiveTab] = useState<"monsters" | "schedule">(
        "monsters",
    );
    const [showLogViewer, setShowLogViewer] = useState<boolean>(false);
    const previousMonstersRef = useRef<Record<string, MonsterEntry>>({});

    const { zoomIn, zoomOut, handleDragStart, handleClose, isLocked } =
        useWindowControls({
            baseWidth: 950,
            baseHeight: 600,
            windowType: "monsters",
        });

    const { handleResizeStart } = useWindowResize("monsters");

    const { t, currentLanguage, translateSkill } = useTranslations();
    const { on } = useSocket();

    useEffect(() => {
        const disableTransparency = getItem("disableTransparency") === "true";
        document.body.style.backgroundColor = disableTransparency
            ? "#000"
            : "transparent";

        const transparencyAmount = getItem("transparencyAmount");
        const amount = transparencyAmount
            ? parseInt(transparencyAmount, 10)
            : 70;
        const opacity = amount / 100;
        document.documentElement.style.setProperty(
            "--transparency-amount",
            opacity.toString(),
        );

        const listener = electron.onTransparencySettingChanged(
            (isDisabled: boolean) => {
                document.body.style.backgroundColor = isDisabled
                    ? "#000"
                    : "transparent";
            },
        );
        return listener;
    }, []);

    useEffect(() => {
        const unsubscribe = electron.onTransparencyAmountChanged(
            (amount: number) => {
                const opacity = amount / 100;
                document.documentElement.style.setProperty(
                    "--transparency-amount",
                    opacity.toString(),
                );
                setItem("transparencyAmount", amount.toString());
            },
        );
        return unsubscribe;
    }, []);

    useEffect(() => {
        const clickthroughEnabled = getItem("clickthroughEnabled") === "true";
        if (clickthroughEnabled) {
            electron.setIgnoreMouseEvents(true, { forward: true });
        }

        const unsubscribe = electron.onClickthroughChanged(
            (enabled: boolean) => {
                electron.setIgnoreMouseEvents(enabled, { forward: true });
                setItem("clickthroughEnabled", enabled.toString());
            },
        );
        return unsubscribe;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (activeTab !== "schedule") return;

        const loadBossNames = async () => {
            try {
                const allBossIds = new Set<number>();
                BOSS_SPAWN_CONFIGS.forEach((config) => {
                    config.monsterIds.forEach((id) =>
                        allBossIds.add(Number(id)),
                    );
                });

                const newNames: Record<number, string> = {};
                for (const mid of allBossIds) {
                    const key = `monsters.${mid}`;
                    const translatedName = await translateForLang(
                        currentLanguage,
                        key,
                        null,
                    );
                    if (translatedName) newNames[mid] = translatedName;
                }

                if (Object.keys(newNames).length > 0) {
                    setTranslatedNames(newNames);
                }
            } catch (e) {
                console.warn("Failed to load boss names:", e);
            }
        };

        loadBossNames();
    }, [activeTab, currentLanguage]);

    useEffect(() => {
        let mounted = true;

        const unsubscribe = on("monsterData", (data: MonsterData) => {
            if (!mounted) return;

            try {
                if (data && data.enemy) {
                    const incoming: Record<string, MonsterEntry> =
                        data.enemy || {};

                    const filtered = Object.fromEntries(
                        Object.entries(incoming).filter(([_id, entry]) => {
                            if (!entry) return false;
                            const hp = entry.hp;
                            if (typeof hp !== "number") return true;
                            return hp >= 0;
                        }),
                    );

                    const previousMonsters = previousMonstersRef.current;
                    for (const [uid, monster] of Object.entries(filtered)) {
                        const previousMonster = previousMonsters[uid];
                        const monsterId = monster.monster_id?.toString();

                        if (monsterId) {
                            if (monster.hp && monster.hp > 0) {
                                if (
                                    !previousMonster ||
                                    previousMonster.hp === 0 ||
                                    previousMonster.hp === null
                                ) {
                                    monsterRespawnTracker.recordRespawn(
                                        uid,
                                        monsterId,
                                    );
                                }
                            } else if (
                                monster.hp === 0 &&
                                previousMonster &&
                                previousMonster.hp &&
                                previousMonster.hp > 0
                            ) {
                                monsterRespawnTracker.recordDeath(
                                    uid,
                                    monsterId,
                                );
                            }
                        }
                    }

                    previousMonstersRef.current = filtered;

                    setMonsters(filtered);

                    (async () => {
                        try {
                            const missingIds = new Set<number>();
                            for (const [id, entry] of Object.entries(
                                filtered,
                            )) {
                                const mid = (entry as any).monster_id;
                                const hasName =
                                    entry &&
                                    entry.name &&
                                    entry.name !== "Unknown";
                                if (!hasName && mid)
                                    missingIds.add(Number(mid));
                            }
                            if (missingIds.size === 0) return;

                            const newNames: Record<number, string> = {};
                            for (const mid of missingIds) {
                                const key = `monsters.${mid}`;
                                const translatedName = await translateForLang(
                                    currentLanguage,
                                    key,
                                    null,
                                );
                                if (translatedName)
                                    newNames[mid] = translatedName;
                            }
                            if (Object.keys(newNames).length > 0) {
                                setTranslatedNames((s) => ({
                                    ...s,
                                    ...newNames,
                                }));
                            }
                        } catch (e) {}
                    })();
                } else {
                    setMonsters({});
                }
                setIsLoading(false);
            } catch (err: any) {
                console.error("Failed to process monster data", err);
                if (mounted) setError(String(err));
            }
        });

        return () => {
            mounted = false;
            if (unsubscribe) unsubscribe();
        };
    }, [on]);

    return (
        <div className="monsters-window pointer-events-auto">
            <ResizeHandle handleResizeStart={handleResizeStart} />

            <MonstersHeader
                onClose={handleClose}
                onDragStart={handleDragStart}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                isLocked={isLocked}
                t={t}
            />

            {/* Tab Navigation */}
            <div className="flex gap-1 p-2 pb-0 mb-2">
                <button
                    onClick={() => setActiveTab("monsters")}
                    className="px-4 py-2 text-sm font-semibold rounded"
                    style={{
                        background:
                            activeTab === "monsters"
                                ? "rgba(52, 152, 219, 0.3)"
                                : "rgba(255,255,255,0.05)",
                        color:
                            activeTab === "monsters"
                                ? "#3498db"
                                : "rgba(255,255,255,0.6)",
                    }}
                >
                    {t("ui.titles.monsterList")}
                </button>
                <button
                    onClick={() => setActiveTab("schedule")}
                    className="px-4 py-2 text-sm font-semibold rounded"
                    style={{
                        background:
                            activeTab === "schedule"
                                ? "rgba(52, 152, 219, 0.3)"
                                : "rgba(255,255,255,0.05)",
                        color:
                            activeTab === "schedule"
                                ? "#3498db"
                                : "rgba(255,255,255,0.6)",
                    }}
                >
                    {t("ui.titles.bossSchedule")}
                </button>
                <button
                    onClick={() => setShowLogViewer(true)}
                    className="px-4 py-2 text-sm font-semibold rounded ml-auto"
                    style={{
                        background: "rgba(155, 89, 182, 0.2)",
                        border: "1px solid rgba(155, 89, 182, 0.4)",
                        color: "#9b59b6",
                    }}
                    title="View Damage Logs"
                >
                    <i
                        className="fa-solid fa-clock-rotate-left"
                        style={{ marginRight: "6px" }}
                    ></i>
                    Logs
                </button>
            </div>

            {isLoading ? (
                <div>{t("ui.messages.loading")}</div>
            ) : error ? (
                <div style={{ color: "#f88" }}>Error: {error}</div>
            ) : activeTab === "monsters" ? (
                <MonsterList
                    monsters={monsters}
                    filterMode={filterMode}
                    setFilterMode={setFilterMode}
                    sortKey={sortKey}
                    setSortKey={setSortKey}
                    sortDesc={sortDesc}
                    setSortDesc={setSortDesc}
                    t={t}
                    translateSkill={translateSkill}
                />
            ) : (
                <BossSchedule translatedNames={translatedNames} />
            )}

            {showLogViewer && (
                <DamageLogViewer
                    onClose={() => setShowLogViewer(false)}
                    t={t}
                    translateSkill={translateSkill}
                />
            )}
        </div>
    );
}
