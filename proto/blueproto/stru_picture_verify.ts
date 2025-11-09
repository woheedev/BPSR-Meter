/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PictureVerify {
  size: number;
  reviewStartTime: number;
  version: Long;
}

function createBasePictureVerify(): PictureVerify {
  return { size: 0, reviewStartTime: 0, version: Long.ZERO };
}

export const PictureVerify: MessageFns<PictureVerify> = {
  encode(message: PictureVerify, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.size !== 0) {
      writer.uint32(8).uint32(message.size);
    }
    if (message.reviewStartTime !== 0) {
      writer.uint32(24).uint32(message.reviewStartTime);
    }
    if (!message.version.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.version.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PictureVerify {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePictureVerify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.size = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.reviewStartTime = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.version = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): PictureVerify {
    return {
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      reviewStartTime: isSet(object.reviewStartTime) ? globalThis.Number(object.reviewStartTime) : 0,
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
    };
  },

  toJSON(message: PictureVerify): unknown {
    const obj: any = {};
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (message.reviewStartTime !== 0) {
      obj.reviewStartTime = Math.round(message.reviewStartTime);
    }
    if (!message.version.equals(Long.ZERO)) {
      obj.version = (message.version || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PictureVerify>, I>>(base?: I): PictureVerify {
    return PictureVerify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PictureVerify>, I>>(object: I): PictureVerify {
    const message = createBasePictureVerify();
    message.size = object.size ?? 0;
    message.reviewStartTime = object.reviewStartTime ?? 0;
    message.version = (object.version !== undefined && object.version !== null)
      ? Long.fromValue(object.version)
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
