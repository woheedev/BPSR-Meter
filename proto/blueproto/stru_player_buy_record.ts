/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PlayerBuyRecord {
  count: number;
  buyTimestamp: Long;
}

function createBasePlayerBuyRecord(): PlayerBuyRecord {
  return { count: 0, buyTimestamp: Long.ZERO };
}

export const PlayerBuyRecord: MessageFns<PlayerBuyRecord> = {
  encode(message: PlayerBuyRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    if (!message.buyTimestamp.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.buyTimestamp.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerBuyRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerBuyRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.count = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.buyTimestamp = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): PlayerBuyRecord {
    return {
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      buyTimestamp: isSet(object.buyTimestamp) ? Long.fromValue(object.buyTimestamp) : Long.ZERO,
    };
  },

  toJSON(message: PlayerBuyRecord): unknown {
    const obj: any = {};
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (!message.buyTimestamp.equals(Long.ZERO)) {
      obj.buyTimestamp = (message.buyTimestamp || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerBuyRecord>, I>>(base?: I): PlayerBuyRecord {
    return PlayerBuyRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerBuyRecord>, I>>(object: I): PlayerBuyRecord {
    const message = createBasePlayerBuyRecord();
    message.count = object.count ?? 0;
    message.buyTimestamp = (object.buyTimestamp !== undefined && object.buyTimestamp !== null)
      ? Long.fromValue(object.buyTimestamp)
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
