/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Item } from "./stru_item";

export const protobufPackage = "zproto";

export interface TreasureItem {
  items: Item[];
  type: number;
}

function createBaseTreasureItem(): TreasureItem {
  return { items: [], type: 0 };
}

export const TreasureItem: MessageFns<TreasureItem> = {
  encode(message: TreasureItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TreasureItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasureItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.items.push(Item.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32();
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

  fromJSON(object: any): TreasureItem {
    return {
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      type: isSet(object.type) ? globalThis.Number(object.type) : 0,
    };
  },

  toJSON(message: TreasureItem): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => Item.toJSON(e));
    }
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TreasureItem>, I>>(base?: I): TreasureItem {
    return TreasureItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TreasureItem>, I>>(object: I): TreasureItem {
    const message = createBaseTreasureItem();
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.type = object.type ?? 0;
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
