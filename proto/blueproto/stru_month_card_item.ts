/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MonthCardItem {
  itemId: number;
  createTime: Long;
}

function createBaseMonthCardItem(): MonthCardItem {
  return { itemId: 0, createTime: Long.ZERO };
}

export const MonthCardItem: MessageFns<MonthCardItem> = {
  encode(message: MonthCardItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.itemId !== 0) {
      writer.uint32(8).int32(message.itemId);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.createTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonthCardItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthCardItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.itemId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.createTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): MonthCardItem {
    return {
      itemId: isSet(object.itemId) ? globalThis.Number(object.itemId) : 0,
      createTime: isSet(object.createTime) ? Long.fromValue(object.createTime) : Long.ZERO,
    };
  },

  toJSON(message: MonthCardItem): unknown {
    const obj: any = {};
    if (message.itemId !== 0) {
      obj.itemId = Math.round(message.itemId);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      obj.createTime = (message.createTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthCardItem>, I>>(base?: I): MonthCardItem {
    return MonthCardItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonthCardItem>, I>>(object: I): MonthCardItem {
    const message = createBaseMonthCardItem();
    message.itemId = object.itemId ?? 0;
    message.createTime = (object.createTime !== undefined && object.createTime !== null)
      ? Long.fromValue(object.createTime)
      : Long.ZERO;
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
