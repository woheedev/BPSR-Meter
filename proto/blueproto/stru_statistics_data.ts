/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { StatRecord } from "./stru_stat_record";

export const protobufPackage = "zproto";

export interface StatisticsData {
  statRecordMap: { [key: number]: StatRecord };
}

export interface StatisticsData_StatRecordMapEntry {
  key: number;
  value: StatRecord | undefined;
}

function createBaseStatisticsData(): StatisticsData {
  return { statRecordMap: {} };
}

export const StatisticsData: MessageFns<StatisticsData> = {
  encode(message: StatisticsData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.statRecordMap).forEach(([key, value]) => {
      StatisticsData_StatRecordMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatisticsData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = StatisticsData_StatRecordMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.statRecordMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): StatisticsData {
    return {
      statRecordMap: isObject(object.statRecordMap)
        ? Object.entries(object.statRecordMap).reduce<{ [key: number]: StatRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = StatRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: StatisticsData): unknown {
    const obj: any = {};
    if (message.statRecordMap) {
      const entries = Object.entries(message.statRecordMap);
      if (entries.length > 0) {
        obj.statRecordMap = {};
        entries.forEach(([k, v]) => {
          obj.statRecordMap[k] = StatRecord.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatisticsData>, I>>(base?: I): StatisticsData {
    return StatisticsData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticsData>, I>>(object: I): StatisticsData {
    const message = createBaseStatisticsData();
    message.statRecordMap = Object.entries(object.statRecordMap ?? {}).reduce<{ [key: number]: StatRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = StatRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseStatisticsData_StatRecordMapEntry(): StatisticsData_StatRecordMapEntry {
  return { key: 0, value: undefined };
}

export const StatisticsData_StatRecordMapEntry: MessageFns<StatisticsData_StatRecordMapEntry> = {
  encode(message: StatisticsData_StatRecordMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      StatRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatisticsData_StatRecordMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsData_StatRecordMapEntry();
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

          message.value = StatRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): StatisticsData_StatRecordMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? StatRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: StatisticsData_StatRecordMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = StatRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatisticsData_StatRecordMapEntry>, I>>(
    base?: I,
  ): StatisticsData_StatRecordMapEntry {
    return StatisticsData_StatRecordMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticsData_StatRecordMapEntry>, I>>(
    object: I,
  ): StatisticsData_StatRecordMapEntry {
    const message = createBaseStatisticsData_StatRecordMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? StatRecord.fromPartial(object.value)
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
