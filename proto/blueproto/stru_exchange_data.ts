/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ExchangeData {
  itemConfigId: number;
  unlock: number;
  curExchangeCount: number;
  expireTime: Long;
  lastRefreshTime: Long;
}

function createBaseExchangeData(): ExchangeData {
  return { itemConfigId: 0, unlock: 0, curExchangeCount: 0, expireTime: Long.ZERO, lastRefreshTime: Long.ZERO };
}

export const ExchangeData: MessageFns<ExchangeData> = {
  encode(message: ExchangeData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.itemConfigId !== 0) {
      writer.uint32(8).int32(message.itemConfigId);
    }
    if (message.unlock !== 0) {
      writer.uint32(16).int32(message.unlock);
    }
    if (message.curExchangeCount !== 0) {
      writer.uint32(24).int32(message.curExchangeCount);
    }
    if (!message.expireTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.expireTime.toString());
    }
    if (!message.lastRefreshTime.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.lastRefreshTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ExchangeData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.itemConfigId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.unlock = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.curExchangeCount = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.expireTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.lastRefreshTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): ExchangeData {
    return {
      itemConfigId: isSet(object.itemConfigId) ? globalThis.Number(object.itemConfigId) : 0,
      unlock: isSet(object.unlock) ? globalThis.Number(object.unlock) : 0,
      curExchangeCount: isSet(object.curExchangeCount) ? globalThis.Number(object.curExchangeCount) : 0,
      expireTime: isSet(object.expireTime) ? Long.fromValue(object.expireTime) : Long.ZERO,
      lastRefreshTime: isSet(object.lastRefreshTime) ? Long.fromValue(object.lastRefreshTime) : Long.ZERO,
    };
  },

  toJSON(message: ExchangeData): unknown {
    const obj: any = {};
    if (message.itemConfigId !== 0) {
      obj.itemConfigId = Math.round(message.itemConfigId);
    }
    if (message.unlock !== 0) {
      obj.unlock = Math.round(message.unlock);
    }
    if (message.curExchangeCount !== 0) {
      obj.curExchangeCount = Math.round(message.curExchangeCount);
    }
    if (!message.expireTime.equals(Long.ZERO)) {
      obj.expireTime = (message.expireTime || Long.ZERO).toString();
    }
    if (!message.lastRefreshTime.equals(Long.ZERO)) {
      obj.lastRefreshTime = (message.lastRefreshTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeData>, I>>(base?: I): ExchangeData {
    return ExchangeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExchangeData>, I>>(object: I): ExchangeData {
    const message = createBaseExchangeData();
    message.itemConfigId = object.itemConfigId ?? 0;
    message.unlock = object.unlock ?? 0;
    message.curExchangeCount = object.curExchangeCount ?? 0;
    message.expireTime = (object.expireTime !== undefined && object.expireTime !== null)
      ? Long.fromValue(object.expireTime)
      : Long.ZERO;
    message.lastRefreshTime = (object.lastRefreshTime !== undefined && object.lastRefreshTime !== null)
      ? Long.fromValue(object.lastRefreshTime)
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
