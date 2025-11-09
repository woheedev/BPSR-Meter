/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FishRecord } from "./stru_fish_record";

export const protobufPackage = "zproto";

export interface FishSocialData {
  fishRecords: { [key: number]: FishRecord };
}

export interface FishSocialData_FishRecordsEntry {
  key: number;
  value: FishRecord | undefined;
}

function createBaseFishSocialData(): FishSocialData {
  return { fishRecords: {} };
}

export const FishSocialData: MessageFns<FishSocialData> = {
  encode(message: FishSocialData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.fishRecords).forEach(([key, value]) => {
      FishSocialData_FishRecordsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishSocialData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishSocialData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = FishSocialData_FishRecordsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fishRecords[entry1.key] = entry1.value;
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

  fromJSON(object: any): FishSocialData {
    return {
      fishRecords: isObject(object.fishRecords)
        ? Object.entries(object.fishRecords).reduce<{ [key: number]: FishRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FishRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FishSocialData): unknown {
    const obj: any = {};
    if (message.fishRecords) {
      const entries = Object.entries(message.fishRecords);
      if (entries.length > 0) {
        obj.fishRecords = {};
        entries.forEach(([k, v]) => {
          obj.fishRecords[k] = FishRecord.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishSocialData>, I>>(base?: I): FishSocialData {
    return FishSocialData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishSocialData>, I>>(object: I): FishSocialData {
    const message = createBaseFishSocialData();
    message.fishRecords = Object.entries(object.fishRecords ?? {}).reduce<{ [key: number]: FishRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FishRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseFishSocialData_FishRecordsEntry(): FishSocialData_FishRecordsEntry {
  return { key: 0, value: undefined };
}

export const FishSocialData_FishRecordsEntry: MessageFns<FishSocialData_FishRecordsEntry> = {
  encode(message: FishSocialData_FishRecordsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FishRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishSocialData_FishRecordsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishSocialData_FishRecordsEntry();
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

          message.value = FishRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): FishSocialData_FishRecordsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FishRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FishSocialData_FishRecordsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FishRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishSocialData_FishRecordsEntry>, I>>(base?: I): FishSocialData_FishRecordsEntry {
    return FishSocialData_FishRecordsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishSocialData_FishRecordsEntry>, I>>(
    object: I,
  ): FishSocialData_FishRecordsEntry {
    const message = createBaseFishSocialData_FishRecordsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FishRecord.fromPartial(object.value)
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
