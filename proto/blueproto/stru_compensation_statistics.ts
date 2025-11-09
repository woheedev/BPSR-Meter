/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CompensationSeasonStatistics } from "./stru_compensation_season_statistics";

export const protobufPackage = "zproto";

export interface CompensationStatistics {
  seasonData: { [key: number]: CompensationSeasonStatistics };
  lastSeasonId: number;
  curPoint: Long;
  maxPoint: Long;
  lastWeek: { [key: number]: number };
}

export interface CompensationStatistics_SeasonDataEntry {
  key: number;
  value: CompensationSeasonStatistics | undefined;
}

export interface CompensationStatistics_LastWeekEntry {
  key: number;
  value: number;
}

function createBaseCompensationStatistics(): CompensationStatistics {
  return { seasonData: {}, lastSeasonId: 0, curPoint: Long.ZERO, maxPoint: Long.ZERO, lastWeek: {} };
}

export const CompensationStatistics: MessageFns<CompensationStatistics> = {
  encode(message: CompensationStatistics, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.seasonData).forEach(([key, value]) => {
      CompensationStatistics_SeasonDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.lastSeasonId !== 0) {
      writer.uint32(16).uint32(message.lastSeasonId);
    }
    if (!message.curPoint.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.curPoint.toString());
    }
    if (!message.maxPoint.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.maxPoint.toString());
    }
    Object.entries(message.lastWeek).forEach(([key, value]) => {
      CompensationStatistics_LastWeekEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationStatistics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = CompensationStatistics_SeasonDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.seasonData[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.lastSeasonId = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.curPoint = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.maxPoint = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = CompensationStatistics_LastWeekEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.lastWeek[entry5.key] = entry5.value;
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

  fromJSON(object: any): CompensationStatistics {
    return {
      seasonData: isObject(object.seasonData)
        ? Object.entries(object.seasonData).reduce<{ [key: number]: CompensationSeasonStatistics }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = CompensationSeasonStatistics.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      lastSeasonId: isSet(object.lastSeasonId) ? globalThis.Number(object.lastSeasonId) : 0,
      curPoint: isSet(object.curPoint) ? Long.fromValue(object.curPoint) : Long.ZERO,
      maxPoint: isSet(object.maxPoint) ? Long.fromValue(object.maxPoint) : Long.ZERO,
      lastWeek: isObject(object.lastWeek)
        ? Object.entries(object.lastWeek).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CompensationStatistics): unknown {
    const obj: any = {};
    if (message.seasonData) {
      const entries = Object.entries(message.seasonData);
      if (entries.length > 0) {
        obj.seasonData = {};
        entries.forEach(([k, v]) => {
          obj.seasonData[k] = CompensationSeasonStatistics.toJSON(v);
        });
      }
    }
    if (message.lastSeasonId !== 0) {
      obj.lastSeasonId = Math.round(message.lastSeasonId);
    }
    if (!message.curPoint.equals(Long.ZERO)) {
      obj.curPoint = (message.curPoint || Long.ZERO).toString();
    }
    if (!message.maxPoint.equals(Long.ZERO)) {
      obj.maxPoint = (message.maxPoint || Long.ZERO).toString();
    }
    if (message.lastWeek) {
      const entries = Object.entries(message.lastWeek);
      if (entries.length > 0) {
        obj.lastWeek = {};
        entries.forEach(([k, v]) => {
          obj.lastWeek[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationStatistics>, I>>(base?: I): CompensationStatistics {
    return CompensationStatistics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationStatistics>, I>>(object: I): CompensationStatistics {
    const message = createBaseCompensationStatistics();
    message.seasonData = Object.entries(object.seasonData ?? {}).reduce<
      { [key: number]: CompensationSeasonStatistics }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = CompensationSeasonStatistics.fromPartial(value);
      }
      return acc;
    }, {});
    message.lastSeasonId = object.lastSeasonId ?? 0;
    message.curPoint = (object.curPoint !== undefined && object.curPoint !== null)
      ? Long.fromValue(object.curPoint)
      : Long.ZERO;
    message.maxPoint = (object.maxPoint !== undefined && object.maxPoint !== null)
      ? Long.fromValue(object.maxPoint)
      : Long.ZERO;
    message.lastWeek = Object.entries(object.lastWeek ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCompensationStatistics_SeasonDataEntry(): CompensationStatistics_SeasonDataEntry {
  return { key: 0, value: undefined };
}

export const CompensationStatistics_SeasonDataEntry: MessageFns<CompensationStatistics_SeasonDataEntry> = {
  encode(message: CompensationStatistics_SeasonDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      CompensationSeasonStatistics.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationStatistics_SeasonDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationStatistics_SeasonDataEntry();
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

          message.value = CompensationSeasonStatistics.decode(reader, reader.uint32());
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

  fromJSON(object: any): CompensationStatistics_SeasonDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CompensationSeasonStatistics.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CompensationStatistics_SeasonDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CompensationSeasonStatistics.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationStatistics_SeasonDataEntry>, I>>(
    base?: I,
  ): CompensationStatistics_SeasonDataEntry {
    return CompensationStatistics_SeasonDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationStatistics_SeasonDataEntry>, I>>(
    object: I,
  ): CompensationStatistics_SeasonDataEntry {
    const message = createBaseCompensationStatistics_SeasonDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CompensationSeasonStatistics.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCompensationStatistics_LastWeekEntry(): CompensationStatistics_LastWeekEntry {
  return { key: 0, value: 0 };
}

export const CompensationStatistics_LastWeekEntry: MessageFns<CompensationStatistics_LastWeekEntry> = {
  encode(message: CompensationStatistics_LastWeekEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationStatistics_LastWeekEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationStatistics_LastWeekEntry();
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

  fromJSON(object: any): CompensationStatistics_LastWeekEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: CompensationStatistics_LastWeekEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationStatistics_LastWeekEntry>, I>>(
    base?: I,
  ): CompensationStatistics_LastWeekEntry {
    return CompensationStatistics_LastWeekEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationStatistics_LastWeekEntry>, I>>(
    object: I,
  ): CompensationStatistics_LastWeekEntry {
    const message = createBaseCompensationStatistics_LastWeekEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
