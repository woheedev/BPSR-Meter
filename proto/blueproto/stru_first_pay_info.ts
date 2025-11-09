/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FirstPayInfo {
  firstPayType: number;
  timestamp: Long;
}

function createBaseFirstPayInfo(): FirstPayInfo {
  return { firstPayType: 0, timestamp: Long.ZERO };
}

export const FirstPayInfo: MessageFns<FirstPayInfo> = {
  encode(message: FirstPayInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.firstPayType !== 0) {
      writer.uint32(8).int32(message.firstPayType);
    }
    if (!message.timestamp.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.timestamp.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FirstPayInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFirstPayInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.firstPayType = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.timestamp = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): FirstPayInfo {
    return {
      firstPayType: isSet(object.firstPayType) ? globalThis.Number(object.firstPayType) : 0,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.ZERO,
    };
  },

  toJSON(message: FirstPayInfo): unknown {
    const obj: any = {};
    if (message.firstPayType !== 0) {
      obj.firstPayType = Math.round(message.firstPayType);
    }
    if (!message.timestamp.equals(Long.ZERO)) {
      obj.timestamp = (message.timestamp || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FirstPayInfo>, I>>(base?: I): FirstPayInfo {
    return FirstPayInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FirstPayInfo>, I>>(object: I): FirstPayInfo {
    const message = createBaseFirstPayInfo();
    message.firstPayType = object.firstPayType ?? 0;
    message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
      ? Long.fromValue(object.timestamp)
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
