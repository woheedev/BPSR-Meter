/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface NewbieData {
  totalOnlineTime: Long;
  isNewbie: boolean;
  isCancelNewbie: boolean;
}

function createBaseNewbieData(): NewbieData {
  return { totalOnlineTime: Long.ZERO, isNewbie: false, isCancelNewbie: false };
}

export const NewbieData: MessageFns<NewbieData> = {
  encode(message: NewbieData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.totalOnlineTime.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.totalOnlineTime.toString());
    }
    if (message.isNewbie !== false) {
      writer.uint32(16).bool(message.isNewbie);
    }
    if (message.isCancelNewbie !== false) {
      writer.uint32(24).bool(message.isCancelNewbie);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NewbieData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewbieData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.totalOnlineTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isNewbie = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.isCancelNewbie = reader.bool();
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

  fromJSON(object: any): NewbieData {
    return {
      totalOnlineTime: isSet(object.totalOnlineTime) ? Long.fromValue(object.totalOnlineTime) : Long.ZERO,
      isNewbie: isSet(object.isNewbie) ? globalThis.Boolean(object.isNewbie) : false,
      isCancelNewbie: isSet(object.isCancelNewbie) ? globalThis.Boolean(object.isCancelNewbie) : false,
    };
  },

  toJSON(message: NewbieData): unknown {
    const obj: any = {};
    if (!message.totalOnlineTime.equals(Long.ZERO)) {
      obj.totalOnlineTime = (message.totalOnlineTime || Long.ZERO).toString();
    }
    if (message.isNewbie !== false) {
      obj.isNewbie = message.isNewbie;
    }
    if (message.isCancelNewbie !== false) {
      obj.isCancelNewbie = message.isCancelNewbie;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NewbieData>, I>>(base?: I): NewbieData {
    return NewbieData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NewbieData>, I>>(object: I): NewbieData {
    const message = createBaseNewbieData();
    message.totalOnlineTime = (object.totalOnlineTime !== undefined && object.totalOnlineTime !== null)
      ? Long.fromValue(object.totalOnlineTime)
      : Long.ZERO;
    message.isNewbie = object.isNewbie ?? false;
    message.isCancelNewbie = object.isCancelNewbie ?? false;
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
