/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ExchangeData } from "./stru_exchange_data";

export const protobufPackage = "zproto";

export interface ExchangeInfo {
  id: number;
  exchangeData: { [key: number]: ExchangeData };
}

export interface ExchangeInfo_ExchangeDataEntry {
  key: number;
  value: ExchangeData | undefined;
}

function createBaseExchangeInfo(): ExchangeInfo {
  return { id: 0, exchangeData: {} };
}

export const ExchangeInfo: MessageFns<ExchangeInfo> = {
  encode(message: ExchangeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    Object.entries(message.exchangeData).forEach(([key, value]) => {
      ExchangeInfo_ExchangeDataEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = ExchangeInfo_ExchangeDataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.exchangeData[entry2.key] = entry2.value;
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

  fromJSON(object: any): ExchangeInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      exchangeData: isObject(object.exchangeData)
        ? Object.entries(object.exchangeData).reduce<{ [key: number]: ExchangeData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ExchangeData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ExchangeInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.exchangeData) {
      const entries = Object.entries(message.exchangeData);
      if (entries.length > 0) {
        obj.exchangeData = {};
        entries.forEach(([k, v]) => {
          obj.exchangeData[k] = ExchangeData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeInfo>, I>>(base?: I): ExchangeInfo {
    return ExchangeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeInfo>, I>>(object: I): ExchangeInfo {
    const message = createBaseExchangeInfo();
    message.id = object.id ?? 0;
    message.exchangeData = Object.entries(object.exchangeData ?? {}).reduce<{ [key: number]: ExchangeData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ExchangeData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseExchangeInfo_ExchangeDataEntry(): ExchangeInfo_ExchangeDataEntry {
  return { key: 0, value: undefined };
}

export const ExchangeInfo_ExchangeDataEntry: MessageFns<ExchangeInfo_ExchangeDataEntry> = {
  encode(message: ExchangeInfo_ExchangeDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ExchangeData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeInfo_ExchangeDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeInfo_ExchangeDataEntry();
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

          message.value = ExchangeData.decode(reader, reader.uint32());
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

  fromJSON(object: any): ExchangeInfo_ExchangeDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ExchangeData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ExchangeInfo_ExchangeDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ExchangeData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeInfo_ExchangeDataEntry>, I>>(base?: I): ExchangeInfo_ExchangeDataEntry {
    return ExchangeInfo_ExchangeDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeInfo_ExchangeDataEntry>, I>>(
    object: I,
  ): ExchangeInfo_ExchangeDataEntry {
    const message = createBaseExchangeInfo_ExchangeDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ExchangeData.fromPartial(object.value)
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
