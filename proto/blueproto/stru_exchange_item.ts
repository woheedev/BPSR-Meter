/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ExchangeInfo } from "./stru_exchange_info";

export const protobufPackage = "zproto";

export interface ExchangeItem {
  exchangeInfo: { [key: number]: ExchangeInfo };
}

export interface ExchangeItem_ExchangeInfoEntry {
  key: number;
  value: ExchangeInfo | undefined;
}

function createBaseExchangeItem(): ExchangeItem {
  return { exchangeInfo: {} };
}

export const ExchangeItem: MessageFns<ExchangeItem> = {
  encode(message: ExchangeItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.exchangeInfo).forEach(([key, value]) => {
      ExchangeItem_ExchangeInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ExchangeItem_ExchangeInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.exchangeInfo[entry1.key] = entry1.value;
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

  fromJSON(object: any): ExchangeItem {
    return {
      exchangeInfo: isObject(object.exchangeInfo)
        ? Object.entries(object.exchangeInfo).reduce<{ [key: number]: ExchangeInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ExchangeInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ExchangeItem): unknown {
    const obj: any = {};
    if (message.exchangeInfo) {
      const entries = Object.entries(message.exchangeInfo);
      if (entries.length > 0) {
        obj.exchangeInfo = {};
        entries.forEach(([k, v]) => {
          obj.exchangeInfo[k] = ExchangeInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeItem>, I>>(base?: I): ExchangeItem {
    return ExchangeItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeItem>, I>>(object: I): ExchangeItem {
    const message = createBaseExchangeItem();
    message.exchangeInfo = Object.entries(object.exchangeInfo ?? {}).reduce<{ [key: number]: ExchangeInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ExchangeInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseExchangeItem_ExchangeInfoEntry(): ExchangeItem_ExchangeInfoEntry {
  return { key: 0, value: undefined };
}

export const ExchangeItem_ExchangeInfoEntry: MessageFns<ExchangeItem_ExchangeInfoEntry> = {
  encode(message: ExchangeItem_ExchangeInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ExchangeInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeItem_ExchangeInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeItem_ExchangeInfoEntry();
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

          message.value = ExchangeInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): ExchangeItem_ExchangeInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ExchangeInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ExchangeItem_ExchangeInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ExchangeInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeItem_ExchangeInfoEntry>, I>>(base?: I): ExchangeItem_ExchangeInfoEntry {
    return ExchangeItem_ExchangeInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeItem_ExchangeInfoEntry>, I>>(
    object: I,
  ): ExchangeItem_ExchangeInfoEntry {
    const message = createBaseExchangeItem_ExchangeInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ExchangeInfo.fromPartial(object.value)
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
