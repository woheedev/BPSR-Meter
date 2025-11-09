/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BuffDBData } from "./stru_buff_d_b_data";

export const protobufPackage = "zproto";

export interface BuffDBInfo {
  maxId: number;
  allBuffDbData: { [key: number]: BuffDBData };
}

export interface BuffDBInfo_AllBuffDbDataEntry {
  key: number;
  value: BuffDBData | undefined;
}

function createBaseBuffDBInfo(): BuffDBInfo {
  return { maxId: 0, allBuffDbData: {} };
}

export const BuffDBInfo: MessageFns<BuffDBInfo> = {
  encode(message: BuffDBInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.maxId !== 0) {
      writer.uint32(8).uint32(message.maxId);
    }
    Object.entries(message.allBuffDbData).forEach(([key, value]) => {
      BuffDBInfo_AllBuffDbDataEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffDBInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffDBInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.maxId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = BuffDBInfo_AllBuffDbDataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.allBuffDbData[entry2.key] = entry2.value;
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

  fromJSON(object: any): BuffDBInfo {
    return {
      maxId: isSet(object.maxId) ? globalThis.Number(object.maxId) : 0,
      allBuffDbData: isObject(object.allBuffDbData)
        ? Object.entries(object.allBuffDbData).reduce<{ [key: number]: BuffDBData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = BuffDBData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: BuffDBInfo): unknown {
    const obj: any = {};
    if (message.maxId !== 0) {
      obj.maxId = Math.round(message.maxId);
    }
    if (message.allBuffDbData) {
      const entries = Object.entries(message.allBuffDbData);
      if (entries.length > 0) {
        obj.allBuffDbData = {};
        entries.forEach(([k, v]) => {
          obj.allBuffDbData[k] = BuffDBData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffDBInfo>, I>>(base?: I): BuffDBInfo {
    return BuffDBInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffDBInfo>, I>>(object: I): BuffDBInfo {
    const message = createBaseBuffDBInfo();
    message.maxId = object.maxId ?? 0;
    message.allBuffDbData = Object.entries(object.allBuffDbData ?? {}).reduce<{ [key: number]: BuffDBData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = BuffDBData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseBuffDBInfo_AllBuffDbDataEntry(): BuffDBInfo_AllBuffDbDataEntry {
  return { key: 0, value: undefined };
}

export const BuffDBInfo_AllBuffDbDataEntry: MessageFns<BuffDBInfo_AllBuffDbDataEntry> = {
  encode(message: BuffDBInfo_AllBuffDbDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      BuffDBData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffDBInfo_AllBuffDbDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffDBInfo_AllBuffDbDataEntry();
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

          message.value = BuffDBData.decode(reader, reader.uint32());
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

  fromJSON(object: any): BuffDBInfo_AllBuffDbDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? BuffDBData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: BuffDBInfo_AllBuffDbDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = BuffDBData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffDBInfo_AllBuffDbDataEntry>, I>>(base?: I): BuffDBInfo_AllBuffDbDataEntry {
    return BuffDBInfo_AllBuffDbDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffDBInfo_AllBuffDbDataEntry>, I>>(
    object: I,
  ): BuffDBInfo_AllBuffDbDataEntry {
    const message = createBaseBuffDBInfo_AllBuffDbDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? BuffDBData.fromPartial(object.value)
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
