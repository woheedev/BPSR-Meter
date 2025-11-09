/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface LuckyValueInfo {
  luckId: number;
  luckValue: number;
  nextTime: Long;
}

function createBaseLuckyValueInfo(): LuckyValueInfo {
  return { luckId: 0, luckValue: 0, nextTime: Long.ZERO };
}

export const LuckyValueInfo: MessageFns<LuckyValueInfo> = {
  encode(message: LuckyValueInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.luckId !== 0) {
      writer.uint32(8).int32(message.luckId);
    }
    if (message.luckValue !== 0) {
      writer.uint32(16).int32(message.luckValue);
    }
    if (!message.nextTime.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.nextTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LuckyValueInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLuckyValueInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.luckId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.luckValue = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.nextTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): LuckyValueInfo {
    return {
      luckId: isSet(object.luckId) ? globalThis.Number(object.luckId) : 0,
      luckValue: isSet(object.luckValue) ? globalThis.Number(object.luckValue) : 0,
      nextTime: isSet(object.nextTime) ? Long.fromValue(object.nextTime) : Long.ZERO,
    };
  },

  toJSON(message: LuckyValueInfo): unknown {
    const obj: any = {};
    if (message.luckId !== 0) {
      obj.luckId = Math.round(message.luckId);
    }
    if (message.luckValue !== 0) {
      obj.luckValue = Math.round(message.luckValue);
    }
    if (!message.nextTime.equals(Long.ZERO)) {
      obj.nextTime = (message.nextTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LuckyValueInfo>, I>>(base?: I): LuckyValueInfo {
    return LuckyValueInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LuckyValueInfo>, I>>(object: I): LuckyValueInfo {
    const message = createBaseLuckyValueInfo();
    message.luckId = object.luckId ?? 0;
    message.luckValue = object.luckValue ?? 0;
    message.nextTime = (object.nextTime !== undefined && object.nextTime !== null)
      ? Long.fromValue(object.nextTime)
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
