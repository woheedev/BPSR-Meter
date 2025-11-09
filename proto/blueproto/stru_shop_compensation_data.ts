/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ShopCompensationInfo } from "./stru_shop_compensation_info";

export const protobufPackage = "zproto";

export interface ShopCompensationData {
  items: { [key: number]: ShopCompensationInfo };
}

export interface ShopCompensationData_ItemsEntry {
  key: number;
  value: ShopCompensationInfo | undefined;
}

function createBaseShopCompensationData(): ShopCompensationData {
  return { items: {} };
}

export const ShopCompensationData: MessageFns<ShopCompensationData> = {
  encode(message: ShopCompensationData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.items).forEach(([key, value]) => {
      ShopCompensationData_ItemsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopCompensationData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopCompensationData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ShopCompensationData_ItemsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.items[entry1.key] = entry1.value;
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

  fromJSON(object: any): ShopCompensationData {
    return {
      items: isObject(object.items)
        ? Object.entries(object.items).reduce<{ [key: number]: ShopCompensationInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ShopCompensationInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ShopCompensationData): unknown {
    const obj: any = {};
    if (message.items) {
      const entries = Object.entries(message.items);
      if (entries.length > 0) {
        obj.items = {};
        entries.forEach(([k, v]) => {
          obj.items[k] = ShopCompensationInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopCompensationData>, I>>(base?: I): ShopCompensationData {
    return ShopCompensationData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopCompensationData>, I>>(object: I): ShopCompensationData {
    const message = createBaseShopCompensationData();
    message.items = Object.entries(object.items ?? {}).reduce<{ [key: number]: ShopCompensationInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ShopCompensationInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseShopCompensationData_ItemsEntry(): ShopCompensationData_ItemsEntry {
  return { key: 0, value: undefined };
}

export const ShopCompensationData_ItemsEntry: MessageFns<ShopCompensationData_ItemsEntry> = {
  encode(message: ShopCompensationData_ItemsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      ShopCompensationInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopCompensationData_ItemsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopCompensationData_ItemsEntry();
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

          message.value = ShopCompensationInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShopCompensationData_ItemsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ShopCompensationInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShopCompensationData_ItemsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ShopCompensationInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopCompensationData_ItemsEntry>, I>>(base?: I): ShopCompensationData_ItemsEntry {
    return ShopCompensationData_ItemsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopCompensationData_ItemsEntry>, I>>(
    object: I,
  ): ShopCompensationData_ItemsEntry {
    const message = createBaseShopCompensationData_ItemsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ShopCompensationInfo.fromPartial(object.value)
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
