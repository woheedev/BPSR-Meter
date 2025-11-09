/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CompensationData } from "./stru_compensation_data";

export const protobufPackage = "zproto";

export interface CompensationRecord {
  compensationData: { [key: number]: CompensationData };
}

export interface CompensationRecord_CompensationDataEntry {
  key: number;
  value: CompensationData | undefined;
}

function createBaseCompensationRecord(): CompensationRecord {
  return { compensationData: {} };
}

export const CompensationRecord: MessageFns<CompensationRecord> = {
  encode(message: CompensationRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.compensationData).forEach(([key, value]) => {
      CompensationRecord_CompensationDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = CompensationRecord_CompensationDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.compensationData[entry1.key] = entry1.value;
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

  fromJSON(object: any): CompensationRecord {
    return {
      compensationData: isObject(object.compensationData)
        ? Object.entries(object.compensationData).reduce<{ [key: number]: CompensationData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CompensationData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CompensationRecord): unknown {
    const obj: any = {};
    if (message.compensationData) {
      const entries = Object.entries(message.compensationData);
      if (entries.length > 0) {
        obj.compensationData = {};
        entries.forEach(([k, v]) => {
          obj.compensationData[k] = CompensationData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationRecord>, I>>(base?: I): CompensationRecord {
    return CompensationRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationRecord>, I>>(object: I): CompensationRecord {
    const message = createBaseCompensationRecord();
    message.compensationData = Object.entries(object.compensationData ?? {}).reduce<
      { [key: number]: CompensationData }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = CompensationData.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCompensationRecord_CompensationDataEntry(): CompensationRecord_CompensationDataEntry {
  return { key: 0, value: undefined };
}

export const CompensationRecord_CompensationDataEntry: MessageFns<CompensationRecord_CompensationDataEntry> = {
  encode(message: CompensationRecord_CompensationDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      CompensationData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationRecord_CompensationDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationRecord_CompensationDataEntry();
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

          message.value = CompensationData.decode(reader, reader.uint32());
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

  fromJSON(object: any): CompensationRecord_CompensationDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CompensationData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CompensationRecord_CompensationDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CompensationData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationRecord_CompensationDataEntry>, I>>(
    base?: I,
  ): CompensationRecord_CompensationDataEntry {
    return CompensationRecord_CompensationDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationRecord_CompensationDataEntry>, I>>(
    object: I,
  ): CompensationRecord_CompensationDataEntry {
    const message = createBaseCompensationRecord_CompensationDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CompensationData.fromPartial(object.value)
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
