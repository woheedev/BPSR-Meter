/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CurrencyData } from "./stru_currency_data";

export const protobufPackage = "zproto";

export interface ItemCurrency {
  isInit: boolean;
  currencyDatas: { [key: number]: CurrencyData };
}

export interface ItemCurrency_CurrencyDatasEntry {
  key: number;
  value: CurrencyData | undefined;
}

function createBaseItemCurrency(): ItemCurrency {
  return { isInit: false, currencyDatas: {} };
}

export const ItemCurrency: MessageFns<ItemCurrency> = {
  encode(message: ItemCurrency, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.isInit !== false) {
      writer.uint32(8).bool(message.isInit);
    }
    Object.entries(message.currencyDatas).forEach(([key, value]) => {
      ItemCurrency_CurrencyDatasEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ItemCurrency {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemCurrency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.isInit = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = ItemCurrency_CurrencyDatasEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.currencyDatas[entry2.key] = entry2.value;
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

  fromJSON(object: any): ItemCurrency {
    return {
      isInit: isSet(object.isInit) ? globalThis.Boolean(object.isInit) : false,
      currencyDatas: isObject(object.currencyDatas)
        ? Object.entries(object.currencyDatas).reduce<{ [key: number]: CurrencyData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CurrencyData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ItemCurrency): unknown {
    const obj: any = {};
    if (message.isInit !== false) {
      obj.isInit = message.isInit;
    }
    if (message.currencyDatas) {
      const entries = Object.entries(message.currencyDatas);
      if (entries.length > 0) {
        obj.currencyDatas = {};
        entries.forEach(([k, v]) => {
          obj.currencyDatas[k] = CurrencyData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemCurrency>, I>>(base?: I): ItemCurrency {
    return ItemCurrency.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemCurrency>, I>>(object: I): ItemCurrency {
    const message = createBaseItemCurrency();
    message.isInit = object.isInit ?? false;
    message.currencyDatas = Object.entries(object.currencyDatas ?? {}).reduce<{ [key: number]: CurrencyData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = CurrencyData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseItemCurrency_CurrencyDatasEntry(): ItemCurrency_CurrencyDatasEntry {
  return { key: 0, value: undefined };
}

export const ItemCurrency_CurrencyDatasEntry: MessageFns<ItemCurrency_CurrencyDatasEntry> = {
  encode(message: ItemCurrency_CurrencyDatasEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CurrencyData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ItemCurrency_CurrencyDatasEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemCurrency_CurrencyDatasEntry();
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

          message.value = CurrencyData.decode(reader, reader.uint32());
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

  fromJSON(object: any): ItemCurrency_CurrencyDatasEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CurrencyData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ItemCurrency_CurrencyDatasEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CurrencyData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemCurrency_CurrencyDatasEntry>, I>>(base?: I): ItemCurrency_CurrencyDatasEntry {
    return ItemCurrency_CurrencyDatasEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemCurrency_CurrencyDatasEntry>, I>>(
    object: I,
  ): ItemCurrency_CurrencyDatasEntry {
    const message = createBaseItemCurrency_CurrencyDatasEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CurrencyData.fromPartial(object.value)
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
