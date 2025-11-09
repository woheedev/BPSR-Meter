/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CompensationRecord } from "./stru_compensation_record";

export const protobufPackage = "zproto";

export interface CompensationSeasonStatistics {
  weekData: { [key: number]: CompensationRecord };
  compensation: { [key: number]: number };
  maxClimbUpLayerId: number;
  raidBossIds: Long[];
  raidBossKillTime: Map<Long, Long>;
}

export interface CompensationSeasonStatistics_WeekDataEntry {
  key: number;
  value: CompensationRecord | undefined;
}

export interface CompensationSeasonStatistics_CompensationEntry {
  key: number;
  value: number;
}

export interface CompensationSeasonStatistics_RaidBossKillTimeEntry {
  key: Long;
  value: Long;
}

function createBaseCompensationSeasonStatistics(): CompensationSeasonStatistics {
  return { weekData: {}, compensation: {}, maxClimbUpLayerId: 0, raidBossIds: [], raidBossKillTime: new Map() };
}

export const CompensationSeasonStatistics: MessageFns<CompensationSeasonStatistics> = {
  encode(message: CompensationSeasonStatistics, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.weekData).forEach(([key, value]) => {
      CompensationSeasonStatistics_WeekDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.compensation).forEach(([key, value]) => {
      CompensationSeasonStatistics_CompensationEntry.encode({ key: key as any, value }, writer.uint32(18).fork())
        .join();
    });
    if (message.maxClimbUpLayerId !== 0) {
      writer.uint32(24).int32(message.maxClimbUpLayerId);
    }
    writer.uint32(34).fork();
    for (const v of message.raidBossIds) {
      writer.int64(v.toString());
    }
    writer.join();
    message.raidBossKillTime.forEach((value, key) => {
      CompensationSeasonStatistics_RaidBossKillTimeEntry.encode({ key: key as any, value }, writer.uint32(42).fork())
        .join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationSeasonStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationSeasonStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = CompensationSeasonStatistics_WeekDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.weekData[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = CompensationSeasonStatistics_CompensationEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.compensation[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.maxClimbUpLayerId = reader.int32();
          continue;
        }
        case 4: {
          if (tag === 32) {
            message.raidBossIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.raidBossIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = CompensationSeasonStatistics_RaidBossKillTimeEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.raidBossKillTime.set(entry5.key, entry5.value);
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

  fromJSON(object: any): CompensationSeasonStatistics {
    return {
      weekData: isObject(object.weekData)
        ? Object.entries(object.weekData).reduce<{ [key: number]: CompensationRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CompensationRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
      compensation: isObject(object.compensation)
        ? Object.entries(object.compensation).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      maxClimbUpLayerId: isSet(object.maxClimbUpLayerId) ? globalThis.Number(object.maxClimbUpLayerId) : 0,
      raidBossIds: globalThis.Array.isArray(object?.raidBossIds)
        ? object.raidBossIds.map((e: any) => Long.fromValue(e))
        : [],
      raidBossKillTime: isObject(object.raidBossKillTime)
        ? Object.entries(object.raidBossKillTime).reduce<Map<Long, Long>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Long.fromValue(value as Long | string));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: CompensationSeasonStatistics): unknown {
    const obj: any = {};
    if (message.weekData) {
      const entries = Object.entries(message.weekData);
      if (entries.length > 0) {
        obj.weekData = {};
        entries.forEach(([k, v]) => {
          obj.weekData[k] = CompensationRecord.toJSON(v);
        });
      }
    }
    if (message.compensation) {
      const entries = Object.entries(message.compensation);
      if (entries.length > 0) {
        obj.compensation = {};
        entries.forEach(([k, v]) => {
          obj.compensation[k] = Math.round(v);
        });
      }
    }
    if (message.maxClimbUpLayerId !== 0) {
      obj.maxClimbUpLayerId = Math.round(message.maxClimbUpLayerId);
    }
    if (message.raidBossIds?.length) {
      obj.raidBossIds = message.raidBossIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.raidBossKillTime?.size) {
      obj.raidBossKillTime = {};
      message.raidBossKillTime.forEach((v, k) => {
        obj.raidBossKillTime[longToNumber(k)] = v.toString();
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationSeasonStatistics>, I>>(base?: I): CompensationSeasonStatistics {
    return CompensationSeasonStatistics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationSeasonStatistics>, I>>(object: I): CompensationSeasonStatistics {
    const message = createBaseCompensationSeasonStatistics();
    message.weekData = Object.entries(object.weekData ?? {}).reduce<{ [key: number]: CompensationRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = CompensationRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.compensation = Object.entries(object.compensation ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.maxClimbUpLayerId = object.maxClimbUpLayerId ?? 0;
    message.raidBossIds = object.raidBossIds?.map((e) => Long.fromValue(e)) || [];
    message.raidBossKillTime = (() => {
      const m = new Map();
      (object.raidBossKillTime as Map<Long, Long> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Long.fromValue(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseCompensationSeasonStatistics_WeekDataEntry(): CompensationSeasonStatistics_WeekDataEntry {
  return { key: 0, value: undefined };
}

export const CompensationSeasonStatistics_WeekDataEntry: MessageFns<CompensationSeasonStatistics_WeekDataEntry> = {
  encode(message: CompensationSeasonStatistics_WeekDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      CompensationRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationSeasonStatistics_WeekDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationSeasonStatistics_WeekDataEntry();
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

          message.value = CompensationRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): CompensationSeasonStatistics_WeekDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CompensationRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CompensationSeasonStatistics_WeekDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CompensationRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationSeasonStatistics_WeekDataEntry>, I>>(
    base?: I,
  ): CompensationSeasonStatistics_WeekDataEntry {
    return CompensationSeasonStatistics_WeekDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationSeasonStatistics_WeekDataEntry>, I>>(
    object: I,
  ): CompensationSeasonStatistics_WeekDataEntry {
    const message = createBaseCompensationSeasonStatistics_WeekDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CompensationRecord.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCompensationSeasonStatistics_CompensationEntry(): CompensationSeasonStatistics_CompensationEntry {
  return { key: 0, value: 0 };
}

export const CompensationSeasonStatistics_CompensationEntry: MessageFns<
  CompensationSeasonStatistics_CompensationEntry
> = {
  encode(
    message: CompensationSeasonStatistics_CompensationEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationSeasonStatistics_CompensationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationSeasonStatistics_CompensationEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
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

  fromJSON(object: any): CompensationSeasonStatistics_CompensationEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: CompensationSeasonStatistics_CompensationEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationSeasonStatistics_CompensationEntry>, I>>(
    base?: I,
  ): CompensationSeasonStatistics_CompensationEntry {
    return CompensationSeasonStatistics_CompensationEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationSeasonStatistics_CompensationEntry>, I>>(
    object: I,
  ): CompensationSeasonStatistics_CompensationEntry {
    const message = createBaseCompensationSeasonStatistics_CompensationEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseCompensationSeasonStatistics_RaidBossKillTimeEntry(): CompensationSeasonStatistics_RaidBossKillTimeEntry {
  return { key: Long.ZERO, value: Long.ZERO };
}

export const CompensationSeasonStatistics_RaidBossKillTimeEntry: MessageFns<
  CompensationSeasonStatistics_RaidBossKillTimeEntry
> = {
  encode(
    message: CompensationSeasonStatistics_RaidBossKillTimeEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationSeasonStatistics_RaidBossKillTimeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationSeasonStatistics_RaidBossKillTimeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): CompensationSeasonStatistics_RaidBossKillTimeEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: CompensationSeasonStatistics_RaidBossKillTimeEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationSeasonStatistics_RaidBossKillTimeEntry>, I>>(
    base?: I,
  ): CompensationSeasonStatistics_RaidBossKillTimeEntry {
    return CompensationSeasonStatistics_RaidBossKillTimeEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationSeasonStatistics_RaidBossKillTimeEntry>, I>>(
    object: I,
  ): CompensationSeasonStatistics_RaidBossKillTimeEntry {
    const message = createBaseCompensationSeasonStatistics_RaidBossKillTimeEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
