/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DungeonEnterLimit } from "./stru_dungeon_enter_limit";
import { DungeonInfo } from "./stru_dungeon_info";
import { DungeonWeekTargetList } from "./stru_dungeon_week_target_list";
import { RaidRecord } from "./stru_raid_record";

export const protobufPackage = "zproto";

export interface DungeonList {
  completeDungeon: { [key: number]: DungeonInfo };
  resetTime: number;
  normalDungeonPassCount: number;
  dungeonEnterLimit: DungeonEnterLimit | undefined;
  weekTarget: DungeonWeekTargetList | undefined;
  isAssist: boolean;
  raidRecordTable: { [key: number]: RaidRecord };
}

export interface DungeonList_CompleteDungeonEntry {
  key: number;
  value: DungeonInfo | undefined;
}

export interface DungeonList_RaidRecordTableEntry {
  key: number;
  value: RaidRecord | undefined;
}

function createBaseDungeonList(): DungeonList {
  return {
    completeDungeon: {},
    resetTime: 0,
    normalDungeonPassCount: 0,
    dungeonEnterLimit: undefined,
    weekTarget: undefined,
    isAssist: false,
    raidRecordTable: {},
  };
}

export const DungeonList: MessageFns<DungeonList> = {
  encode(message: DungeonList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.completeDungeon).forEach(([key, value]) => {
      DungeonList_CompleteDungeonEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.resetTime !== 0) {
      writer.uint32(16).uint32(message.resetTime);
    }
    if (message.normalDungeonPassCount !== 0) {
      writer.uint32(24).uint32(message.normalDungeonPassCount);
    }
    if (message.dungeonEnterLimit !== undefined) {
      DungeonEnterLimit.encode(message.dungeonEnterLimit, writer.uint32(34).fork()).join();
    }
    if (message.weekTarget !== undefined) {
      DungeonWeekTargetList.encode(message.weekTarget, writer.uint32(42).fork()).join();
    }
    if (message.isAssist !== false) {
      writer.uint32(48).bool(message.isAssist);
    }
    Object.entries(message.raidRecordTable).forEach(([key, value]) => {
      DungeonList_RaidRecordTableEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = DungeonList_CompleteDungeonEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.completeDungeon[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.resetTime = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.normalDungeonPassCount = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.dungeonEnterLimit = DungeonEnterLimit.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.weekTarget = DungeonWeekTargetList.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.isAssist = reader.bool();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          const entry7 = DungeonList_RaidRecordTableEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.raidRecordTable[entry7.key] = entry7.value;
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

  fromJSON(object: any): DungeonList {
    return {
      completeDungeon: isObject(object.completeDungeon)
        ? Object.entries(object.completeDungeon).reduce<{ [key: number]: DungeonInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = DungeonInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      resetTime: isSet(object.resetTime) ? globalThis.Number(object.resetTime) : 0,
      normalDungeonPassCount: isSet(object.normalDungeonPassCount)
        ? globalThis.Number(object.normalDungeonPassCount)
        : 0,
      dungeonEnterLimit: isSet(object.dungeonEnterLimit)
        ? DungeonEnterLimit.fromJSON(object.dungeonEnterLimit)
        : undefined,
      weekTarget: isSet(object.weekTarget) ? DungeonWeekTargetList.fromJSON(object.weekTarget) : undefined,
      isAssist: isSet(object.isAssist) ? globalThis.Boolean(object.isAssist) : false,
      raidRecordTable: isObject(object.raidRecordTable)
        ? Object.entries(object.raidRecordTable).reduce<{ [key: number]: RaidRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = RaidRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: DungeonList): unknown {
    const obj: any = {};
    if (message.completeDungeon) {
      const entries = Object.entries(message.completeDungeon);
      if (entries.length > 0) {
        obj.completeDungeon = {};
        entries.forEach(([k, v]) => {
          obj.completeDungeon[k] = DungeonInfo.toJSON(v);
        });
      }
    }
    if (message.resetTime !== 0) {
      obj.resetTime = Math.round(message.resetTime);
    }
    if (message.normalDungeonPassCount !== 0) {
      obj.normalDungeonPassCount = Math.round(message.normalDungeonPassCount);
    }
    if (message.dungeonEnterLimit !== undefined) {
      obj.dungeonEnterLimit = DungeonEnterLimit.toJSON(message.dungeonEnterLimit);
    }
    if (message.weekTarget !== undefined) {
      obj.weekTarget = DungeonWeekTargetList.toJSON(message.weekTarget);
    }
    if (message.isAssist !== false) {
      obj.isAssist = message.isAssist;
    }
    if (message.raidRecordTable) {
      const entries = Object.entries(message.raidRecordTable);
      if (entries.length > 0) {
        obj.raidRecordTable = {};
        entries.forEach(([k, v]) => {
          obj.raidRecordTable[k] = RaidRecord.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonList>, I>>(base?: I): DungeonList {
    return DungeonList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonList>, I>>(object: I): DungeonList {
    const message = createBaseDungeonList();
    message.completeDungeon = Object.entries(object.completeDungeon ?? {}).reduce<{ [key: number]: DungeonInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = DungeonInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.resetTime = object.resetTime ?? 0;
    message.normalDungeonPassCount = object.normalDungeonPassCount ?? 0;
    message.dungeonEnterLimit = (object.dungeonEnterLimit !== undefined && object.dungeonEnterLimit !== null)
      ? DungeonEnterLimit.fromPartial(object.dungeonEnterLimit)
      : undefined;
    message.weekTarget = (object.weekTarget !== undefined && object.weekTarget !== null)
      ? DungeonWeekTargetList.fromPartial(object.weekTarget)
      : undefined;
    message.isAssist = object.isAssist ?? false;
    message.raidRecordTable = Object.entries(object.raidRecordTable ?? {}).reduce<{ [key: number]: RaidRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = RaidRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseDungeonList_CompleteDungeonEntry(): DungeonList_CompleteDungeonEntry {
  return { key: 0, value: undefined };
}

export const DungeonList_CompleteDungeonEntry: MessageFns<DungeonList_CompleteDungeonEntry> = {
  encode(message: DungeonList_CompleteDungeonEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DungeonInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonList_CompleteDungeonEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonList_CompleteDungeonEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = DungeonInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): DungeonList_CompleteDungeonEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DungeonInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DungeonList_CompleteDungeonEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DungeonInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonList_CompleteDungeonEntry>, I>>(
    base?: I,
  ): DungeonList_CompleteDungeonEntry {
    return DungeonList_CompleteDungeonEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonList_CompleteDungeonEntry>, I>>(
    object: I,
  ): DungeonList_CompleteDungeonEntry {
    const message = createBaseDungeonList_CompleteDungeonEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DungeonInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseDungeonList_RaidRecordTableEntry(): DungeonList_RaidRecordTableEntry {
  return { key: 0, value: undefined };
}

export const DungeonList_RaidRecordTableEntry: MessageFns<DungeonList_RaidRecordTableEntry> = {
  encode(message: DungeonList_RaidRecordTableEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      RaidRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonList_RaidRecordTableEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonList_RaidRecordTableEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = RaidRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): DungeonList_RaidRecordTableEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? RaidRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DungeonList_RaidRecordTableEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = RaidRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonList_RaidRecordTableEntry>, I>>(
    base?: I,
  ): DungeonList_RaidRecordTableEntry {
    return DungeonList_RaidRecordTableEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonList_RaidRecordTableEntry>, I>>(
    object: I,
  ): DungeonList_RaidRecordTableEntry {
    const message = createBaseDungeonList_RaidRecordTableEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? RaidRecord.fromPartial(object.value)
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
