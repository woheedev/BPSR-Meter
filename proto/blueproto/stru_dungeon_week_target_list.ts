/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DungeonTargetProgress } from "./stru_dungeon_target_progress";

export const protobufPackage = "zproto";

export interface DungeonWeekTargetList {
  weekTarget: { [key: number]: DungeonTargetProgress };
  refreshTime: number;
}

export interface DungeonWeekTargetList_WeekTargetEntry {
  key: number;
  value: DungeonTargetProgress | undefined;
}

function createBaseDungeonWeekTargetList(): DungeonWeekTargetList {
  return { weekTarget: {}, refreshTime: 0 };
}

export const DungeonWeekTargetList: MessageFns<DungeonWeekTargetList> = {
  encode(message: DungeonWeekTargetList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.weekTarget).forEach(([key, value]) => {
      DungeonWeekTargetList_WeekTargetEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.refreshTime !== 0) {
      writer.uint32(16).uint32(message.refreshTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonWeekTargetList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonWeekTargetList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = DungeonWeekTargetList_WeekTargetEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.weekTarget[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.refreshTime = reader.uint32();
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

  fromJSON(object: any): DungeonWeekTargetList {
    return {
      weekTarget: isObject(object.weekTarget)
        ? Object.entries(object.weekTarget).reduce<{ [key: number]: DungeonTargetProgress }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = DungeonTargetProgress.fromJSON(value);
          return acc;
        }, {})
        : {},
      refreshTime: isSet(object.refreshTime) ? globalThis.Number(object.refreshTime) : 0,
    };
  },

  toJSON(message: DungeonWeekTargetList): unknown {
    const obj: any = {};
    if (message.weekTarget) {
      const entries = Object.entries(message.weekTarget);
      if (entries.length > 0) {
        obj.weekTarget = {};
        entries.forEach(([k, v]) => {
          obj.weekTarget[k] = DungeonTargetProgress.toJSON(v);
        });
      }
    }
    if (message.refreshTime !== 0) {
      obj.refreshTime = Math.round(message.refreshTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonWeekTargetList>, I>>(base?: I): DungeonWeekTargetList {
    return DungeonWeekTargetList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonWeekTargetList>, I>>(object: I): DungeonWeekTargetList {
    const message = createBaseDungeonWeekTargetList();
    message.weekTarget = Object.entries(object.weekTarget ?? {}).reduce<{ [key: number]: DungeonTargetProgress }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = DungeonTargetProgress.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.refreshTime = object.refreshTime ?? 0;
    return message;
  },
};

function createBaseDungeonWeekTargetList_WeekTargetEntry(): DungeonWeekTargetList_WeekTargetEntry {
  return { key: 0, value: undefined };
}

export const DungeonWeekTargetList_WeekTargetEntry: MessageFns<DungeonWeekTargetList_WeekTargetEntry> = {
  encode(message: DungeonWeekTargetList_WeekTargetEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DungeonTargetProgress.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonWeekTargetList_WeekTargetEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonWeekTargetList_WeekTargetEntry();
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

          message.value = DungeonTargetProgress.decode(reader, reader.uint32());
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

  fromJSON(object: any): DungeonWeekTargetList_WeekTargetEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DungeonTargetProgress.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DungeonWeekTargetList_WeekTargetEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DungeonTargetProgress.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonWeekTargetList_WeekTargetEntry>, I>>(
    base?: I,
  ): DungeonWeekTargetList_WeekTargetEntry {
    return DungeonWeekTargetList_WeekTargetEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonWeekTargetList_WeekTargetEntry>, I>>(
    object: I,
  ): DungeonWeekTargetList_WeekTargetEntry {
    const message = createBaseDungeonWeekTargetList_WeekTargetEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DungeonTargetProgress.fromPartial(object.value)
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
