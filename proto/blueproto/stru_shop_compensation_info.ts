/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ShopCompensationInfo {
  entorStoreNum: Long;
  buyNum: Long;
}

function createBaseShopCompensationInfo(): ShopCompensationInfo {
  return { entorStoreNum: Long.ZERO, buyNum: Long.ZERO };
}

export const ShopCompensationInfo: MessageFns<ShopCompensationInfo> = {
  encode(message: ShopCompensationInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.entorStoreNum.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.entorStoreNum.toString());
    }
    if (!message.buyNum.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.buyNum.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopCompensationInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopCompensationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.entorStoreNum = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.buyNum = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): ShopCompensationInfo {
    return {
      entorStoreNum: isSet(object.entorStoreNum) ? Long.fromValue(object.entorStoreNum) : Long.ZERO,
      buyNum: isSet(object.buyNum) ? Long.fromValue(object.buyNum) : Long.ZERO,
    };
  },

  toJSON(message: ShopCompensationInfo): unknown {
    const obj: any = {};
    if (!message.entorStoreNum.equals(Long.ZERO)) {
      obj.entorStoreNum = (message.entorStoreNum || Long.ZERO).toString();
    }
    if (!message.buyNum.equals(Long.ZERO)) {
      obj.buyNum = (message.buyNum || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopCompensationInfo>, I>>(base?: I): ShopCompensationInfo {
    return ShopCompensationInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopCompensationInfo>, I>>(object: I): ShopCompensationInfo {
    const message = createBaseShopCompensationInfo();
    message.entorStoreNum = (object.entorStoreNum !== undefined && object.entorStoreNum !== null)
      ? Long.fromValue(object.entorStoreNum)
      : Long.ZERO;
    message.buyNum = (object.buyNum !== undefined && object.buyNum !== null)
      ? Long.fromValue(object.buyNum)
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
