import React, { useState } from "react";
import SortDropdown from "./SortDropdown";
import BossDamageBreakdown from "./BossDamageBreakdown";
import { BOSS_MONSTER_IDS, MAGICAL_CREATURE_IDS } from "@shared/constants";
import { formatStat } from "@shared/utils/formatters";
import { getNextSpawnTime, formatTimeUntilSpawn } from "./bossSpawnTimes";
import { monsterRespawnTracker } from "./monsterRespawnTracker";
import { getItem, getJSON, setJSON } from "@shared/utils/localStorage";

function formatTTK(seconds: number): string {
    if (seconds < 60) {
        return `${Math.floor(seconds)}s`;
    } else if (seconds < 3600) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}m ${secs}s`;
    } else {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${mins}m`;
    }
}

function getTTKColor(ttk: number | null | undefined): string {
    if (!ttk) return "rgba(255,255,255,0.4)";
    if (ttk < 30) return "#2ecc71";
    if (ttk < 60) return "#f39c12";
    return "#e74c3c";
}

function getHPColor(hpPercent: number): string {
    if (hpPercent > 50) return "#1db954";
    if (hpPercent > 25) return "#f39c12";
    return "#e74c3c";
}

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

interface MonsterListProps {
    monsters: Record<string, MonsterEntry>;
    filterMode: "all" | "bosses" | "magical";
    setFilterMode: (value: "all" | "bosses" | "magical") => void;
    sortKey: "id" | "name" | "hp" | "distance";
    setSortKey: (value: "id" | "name" | "hp" | "distance") => void;
    sortDesc: boolean;
    setSortDesc: (value: boolean | ((prev: boolean) => boolean)) => void;
    t: (key: string, fallback?: string | null) => string;
    translateSkill: (skillId: number | string) => string;
}

export default function MonsterList({
    monsters,
    filterMode,
    setFilterMode,
    sortKey,
    setSortKey,
    sortDesc,
    setSortDesc,
    t,
    translateSkill,
}: MonsterListProps): React.JSX.Element {
    const [selectedMonster, setSelectedMonster] = useState<{
        id: string;
        name: string;
    } | null>(null);

    const [damageTrackingEnabled, setDamageTrackingEnabled] = useState<
        Record<string, boolean>
    >(() => {
        return getJSON("damageTrackingEnabled") || {};
    });

    const toggleDamageTracking = (monsterId: string) => {
        setDamageTrackingEnabled((prev) => {
            const newSettings = { ...prev, [monsterId]: !prev[monsterId] };
            setJSON("damageTrackingEnabled", newSettings);
            return newSettings;
        });
    };

    const shouldShowDamageBreakdown = (monster: MonsterEntry): boolean => {
        if (
            monster.monster_id &&
            damageTrackingEnabled[String(monster.monster_id)]
        ) {
            return true;
        }

        return false;
    };

    const MERGED_MONSTER_IDS = new Set([
        ...BOSS_MONSTER_IDS,
        ...MAGICAL_CREATURE_IDS,
    ]);

    const filteredAndSortedMonsters = Object.entries(monsters)
        .map(([id, m]) => ({ id, ...m }))
        .filter((m) => {
            if (filterMode === "all") return true;
            if (filterMode === "bosses") {
                return (
                    m.monster_id && BOSS_MONSTER_IDS.has(String(m.monster_id))
                );
            }
            if (filterMode === "magical") {
                return (
                    m.monster_id &&
                    MAGICAL_CREATURE_IDS.has(String(m.monster_id))
                );
            }
            return true;
        })
        .sort((a, b) => {
            if (sortKey === "hp") {
                const ah = a.hp ?? -Infinity;
                const bh = b.hp ?? -Infinity;
                return sortDesc ? bh - ah : ah - bh;
            }
            if (sortKey === "name") {
                const an = (a.name || "").toString();
                const bn = (b.name || "").toString();
                return sortDesc ? bn.localeCompare(an) : an.localeCompare(bn);
            }
            if (sortKey === "distance") {
                const ad = a.distance ?? Infinity;
                const bd = b.distance ?? Infinity;
                return sortDesc ? bd - ad : ad - bd;
            }
            return 0;
        });

    const filteredCount = filteredAndSortedMonsters.length;

    return (
        <div className="monsters-container">
            {selectedMonster && (
                <BossDamageBreakdown
                    monsterId={selectedMonster.id}
                    monsterName={selectedMonster.name}
                    onClose={() => setSelectedMonster(null)}
                    t={t}
                    translateSkill={translateSkill}
                />
            )}

            <div className="flex justify-between items-center mb-2 gap-2">
                <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold">
                        {t("ui.messages.monsters")} ({filteredCount})
                    </div>
                    <div className="flex gap-1">
                        <button
                            onClick={() => setFilterMode("all")}
                            className="text-xs px-2 py-1 rounded"
                            style={{
                                background:
                                    filterMode === "all"
                                        ? "#3498db"
                                        : "rgba(255,255,255,0.1)",
                                color:
                                    filterMode === "all"
                                        ? "#fff"
                                        : "rgba(255,255,255,0.7)",
                            }}
                        >
                            {t("ui.buttons.allMonsters")}
                        </button>
                        <button
                            onClick={() => setFilterMode("bosses")}
                            className="text-xs px-2 py-1 rounded"
                            style={{
                                background:
                                    filterMode === "bosses"
                                        ? "#e74c3c"
                                        : "rgba(255,255,255,0.1)",
                                color:
                                    filterMode === "bosses"
                                        ? "#fff"
                                        : "rgba(255,255,255,0.7)",
                            }}
                        >
                            {t("ui.buttons.bossesOnly")}
                        </button>
                        <button
                            onClick={() => setFilterMode("magical")}
                            className="text-xs px-2 py-1 rounded"
                            style={{
                                background:
                                    filterMode === "magical"
                                        ? "#9b59b6"
                                        : "rgba(255,255,255,0.1)",
                                color:
                                    filterMode === "magical"
                                        ? "#fff"
                                        : "rgba(255,255,255,0.7)",
                            }}
                        >
                            {t("ui.buttons.magicalOnly", "Magical")}
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-xs">{t("ui.buttons.sort")}:</label>
                    <div className="min-w-[140px]">
                        <SortDropdown
                            value={sortKey}
                            onChange={(v) => setSortKey(v as any)}
                        />
                    </div>
                    <button
                        onClick={() => setSortDesc((s) => !s)}
                        className="text-xs px-3 py-1 rounded min-w-[50px] uppercase"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            color: "#fff",
                        }}
                    >
                        {sortDesc ? t("ui.buttons.desc") : t("ui.buttons.asc")}
                    </button>
                </div>
            </div>

            <table className="monsters-table w-full border-collapse">
                <thead>
                    <tr>
                        <th className="text-sm text-left p-1">
                            {t("ui.messages.name")}
                        </th>
                        <th className="text-sm text-center p-1">
                            {t("ui.messages.hp")}
                        </th>
                        <th className="text-sm text-center p-1">
                            {t("ui.messages.direction")}
                        </th>
                        <th className="text-sm text-right p-1 pl-5">
                            {t("ui.messages.distance")}
                        </th>
                        <th className="text-sm text-center p-1 pl-5">
                            {t("ui.messages.ttk", "TTK")}
                        </th>
                        <th className="text-sm text-center p-1 pl-5">
                            {t("ui.messages.nextSpawn")}
                        </th>
                        <th className="text-sm text-center p-1"></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedMonsters.map((m) => {
                        const displayName = `${t(`monsters.${m.monster_id}`, m?.name ?? "Unknown")}`;
                        const pct =
                            m.max_hp && m.hp
                                ? Math.max(0, Math.min(1, m.hp / m.max_hp))
                                : null;
                        const hpPercent = pct !== null ? pct * 100 : 0;
                        const distanceText =
                            m.distance !== null && m.distance !== undefined
                                ? `${m.distance.toFixed(1)}m`
                                : "-";
                        const direction = m.direction ?? "-";

                        let spawnInfo =
                            m.monster_id &&
                            MERGED_MONSTER_IDS.has(String(m.monster_id))
                                ? getNextSpawnTime(String(m.monster_id))
                                : null;

                        let dynamicRespawnTime: number | null = null;
                        if (!spawnInfo && m.monster_id) {
                            const monsterId = String(m.monster_id);
                            if (
                                monsterRespawnTracker.hasRespawnData(monsterId)
                            ) {
                                dynamicRespawnTime =
                                    monsterRespawnTracker.getEstimatedRespawnTime(
                                        m.id,
                                        monsterId,
                                    );
                            }
                        }

                        return (
                            <tr
                                key={m.id}
                                style={{
                                    borderTop:
                                        "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                <td className="p-2">{displayName}</td>
                                <td className="p-2 text-center min-w-[160px]">
                                    {pct === null ? (
                                        "-"
                                    ) : (
                                        <div
                                            className="hp-bar !h-5"
                                            style={{
                                                width: "140px",
                                                margin: "0 auto",
                                            }}
                                        >
                                            <div
                                                className="hp-fill"
                                                style={{
                                                    width: `${hpPercent}%`,
                                                    background:
                                                        getHPColor(hpPercent),
                                                }}
                                            ></div>
                                            <span className="hp-text">
                                                {formatStat(m.hp || 0)}/
                                                {formatStat(m.max_hp || 0)}
                                            </span>
                                        </div>
                                    )}
                                </td>
                                <td
                                    className="p-2 text-center text-xs font-bold"
                                    style={{ color: "#3498db" }}
                                >
                                    {direction}
                                </td>
                                <td className="p-2 text-right text-xs font-mono">
                                    {distanceText}
                                </td>
                                <td
                                    className="p-2 text-center text-xs font-semibold"
                                    style={{
                                        color: getTTKColor(m.ttk),
                                    }}
                                >
                                    {m.ttk !== null && m.ttk !== undefined
                                        ? formatTTK(m.ttk)
                                        : "-"}
                                </td>
                                <td
                                    className="p-2 text-center text-xs"
                                    style={{
                                        color:
                                            spawnInfo &&
                                            spawnInfo.secondsUntil < 300
                                                ? "#e74c3c"
                                                : spawnInfo &&
                                                    spawnInfo.secondsUntil < 900
                                                  ? "#f39c12"
                                                  : dynamicRespawnTime !==
                                                          null &&
                                                      dynamicRespawnTime < 60
                                                    ? "#e74c3c"
                                                    : dynamicRespawnTime !==
                                                            null &&
                                                        dynamicRespawnTime < 180
                                                      ? "#f39c12"
                                                      : "#2ecc71",
                                        fontWeight: 600,
                                    }}
                                >
                                    {spawnInfo ? (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <div>{spawnInfo.time}</div>
                                            <div
                                                style={{
                                                    fontSize: "10px",
                                                    opacity: 0.8,
                                                }}
                                            >
                                                (
                                                {formatTimeUntilSpawn(
                                                    spawnInfo.secondsUntil,
                                                )}
                                                )
                                            </div>
                                        </div>
                                    ) : dynamicRespawnTime !== null ? (
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: "10px",
                                                    opacity: 0.9,
                                                }}
                                            >
                                                ~
                                                {formatTimeUntilSpawn(
                                                    dynamicRespawnTime,
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="p-2 text-center">
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "4px",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {shouldShowDamageBreakdown(m) ? (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedMonster({
                                                            id: m.id,
                                                            name: displayName,
                                                        });
                                                    }}
                                                    style={{
                                                        background:
                                                            "rgba(52, 152, 219, 0.2)",
                                                        border: "1px solid rgba(52, 152, 219, 0.5)",
                                                        color: "#3498db",
                                                        padding: "4px 12px",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        fontSize: "12px",
                                                        fontWeight: 600,
                                                    }}
                                                    title={t(
                                                        "ui.buttons.viewDamage",
                                                        "View Damage",
                                                    )}
                                                >
                                                    <i
                                                        className="fa-solid fa-chart-bar"
                                                        style={{
                                                            marginRight: "4px",
                                                        }}
                                                    ></i>
                                                    {t(
                                                        "ui.buttons.viewDetails",
                                                        "View",
                                                    )}
                                                </button>
                                                {/* Show disable button for all enabled monsters */}
                                                {m.monster_id &&
                                                    damageTrackingEnabled[
                                                        String(m.monster_id)
                                                    ] && (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleDamageTracking(
                                                                    String(
                                                                        m.monster_id,
                                                                    ),
                                                                );
                                                            }}
                                                            style={{
                                                                background:
                                                                    "rgba(231, 76, 60, 0.2)",
                                                                border: "1px solid rgba(231, 76, 60, 0.5)",
                                                                color: "#e74c3c",
                                                                padding:
                                                                    "4px 8px",
                                                                borderRadius:
                                                                    "4px",
                                                                cursor: "pointer",
                                                                fontSize:
                                                                    "12px",
                                                                fontWeight: 600,
                                                            }}
                                                            title="Disable damage tracking for this monster type"
                                                        >
                                                            <i className="fa-solid fa-times"></i>
                                                        </button>
                                                    )}
                                            </>
                                        ) : (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (m.monster_id) {
                                                        toggleDamageTracking(
                                                            String(
                                                                m.monster_id,
                                                            ),
                                                        );
                                                    }
                                                }}
                                                style={{
                                                    background:
                                                        "rgba(149, 165, 166, 0.2)",
                                                    border: "1px solid rgba(149, 165, 166, 0.5)",
                                                    color: "#95a5a6",
                                                    padding: "4px 12px",
                                                    borderRadius: "4px",
                                                    cursor: "pointer",
                                                    fontSize: "12px",
                                                    fontWeight: 600,
                                                }}
                                                title="Enable damage tracking for this monster type"
                                            >
                                                <i
                                                    className="fa-solid fa-chart-bar"
                                                    style={{
                                                        marginRight: "4px",
                                                        opacity: 0.5,
                                                    }}
                                                ></i>
                                                Enable
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {Object.keys(monsters).length === 0 && (
                <div style={{ marginTop: 8 }}>
                    {t("ui.messages.noMonstersFound")}
                </div>
            )}
        </div>
    );
}
