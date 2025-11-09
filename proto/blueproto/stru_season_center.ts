/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BattlePass } from "./stru_battle_pass";
import { SeasonBpQuestList } from "./stru_season_bp_quest_list";
import { SeasonCenterHistory } from "./stru_season_center_history";

export const protobufPackage = "zproto";

export interface SeasonCenter {
  seasonId: number;
  battlePass: BattlePass | undefined;
  bpQuestList: SeasonBpQuestList | undefined;
  seasonHistory: { [key: number]: SeasonCenterHistory };
}

export interface SeasonCenter_SeasonHistoryEntry {
  key: number;
  value: SeasonCenterHistory | undefined;
}

function createBaseSeasonCenter(): SeasonCenter {
  return { seasonId: 0, battlePass: undefined, bpQuestList: undefined, seasonHistory: {} };
}

export const SeasonCenter: MessageFns<SeasonCenter> = {
  encode(message: SeasonCenter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.seasonId !== 0) {
      writer.uint32(8).int32(message.seasonId);
    }
    if (message.battlePass !== undefined) {
      BattlePass.encode(message.battlePass, writer.uint32(18).fork()).join();
    }
    if (message.bpQuestList !== undefined) {
      SeasonBpQuestList.encode(message.bpQuestList, writer.uint32(26).fork()).join();
    }
    Object.entries(message.seasonHistory).forEach(([key, value]) => {
      SeasonCenter_SeasonHistoryEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonCenter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonCenter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.seasonId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.battlePass = BattlePass.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.bpQuestList = SeasonBpQuestList.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = SeasonCenter_SeasonHistoryEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.seasonHistory[entry4.key] = entry4.value;
          }
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SeasonCenter {
    return {
      seasonId: isSet(object.seasonId) ? globalThis.Number(object.seasonId) : 0,
      battlePass: isSet(object.battlePass) ? BattlePass.fromJSON(object.battlePass) : undefined,
      bpQuestList: isSet(object.bpQuestList) ? SeasonBpQuestList.fromJSON(object.bpQuestList) : undefined,
      seasonHistory: isObject(object.seasonHistory)
        ? Object.entries(object.seasonHistory).reduce<{ [key: number]: SeasonCenterHistory }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SeasonCenterHistory.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SeasonCenter): unknown {
    const obj: any = {};
    if (message.seasonId !== 0) {
      obj.seasonId = Math.round(message.seasonId);
    }
    if (message.battlePass !== undefined) {
      obj.battlePass = BattlePass.toJSON(message.battlePass);
    }
    if (message.bpQuestList !== undefined) {
      obj.bpQuestList = SeasonBpQuestList.toJSON(message.bpQuestList);
    }
    if (message.seasonHistory) {
      const entries = Object.entries(message.seasonHistory);
      if (entries.length > 0) {
        obj.seasonHistory = {};
        entries.forEach(([k, v]) => {
          obj.seasonHistory[k] = SeasonCenterHistory.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonCenter>, I>>(base?: I): SeasonCenter {
    return SeasonCenter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonCenter>, I>>(object: I): SeasonCenter {
    const message = createBaseSeasonCenter();
    message.seasonId = object.seasonId ?? 0;
    message.battlePass = (object.battlePass !== undefined && object.battlePass !== null)
      ? BattlePass.fromPartial(object.battlePass)
      : undefined;
    message.bpQuestList = (object.bpQuestList !== undefined && object.bpQuestList !== null)
      ? SeasonBpQuestList.fromPartial(object.bpQuestList)
      : undefined;
    message.seasonHistory = Object.entries(object.seasonHistory ?? {}).reduce<{ [key: number]: SeasonCenterHistory }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = SeasonCenterHistory.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSeasonCenter_SeasonHistoryEntry(): SeasonCenter_SeasonHistoryEntry {
  return { key: 0, value: undefined };
}

export const SeasonCenter_SeasonHistoryEntry: MessageFns<SeasonCenter_SeasonHistoryEntry> = {
  encode(message: SeasonCenter_SeasonHistoryEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      SeasonCenterHistory.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonCenter_SeasonHistoryEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonCenter_SeasonHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = SeasonCenterHistory.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SeasonCenter_SeasonHistoryEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonCenterHistory.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonCenter_SeasonHistoryEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonCenterHistory.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonCenter_SeasonHistoryEntry>, I>>(base?: I): SeasonCenter_SeasonHistoryEntry {
    return SeasonCenter_SeasonHistoryEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonCenter_SeasonHistoryEntry>, I>>(
    object: I,
  ): SeasonCenter_SeasonHistoryEntry {
    const message = createBaseSeasonCenter_SeasonHistoryEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonCenterHistory.fromPartial(object.value)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
