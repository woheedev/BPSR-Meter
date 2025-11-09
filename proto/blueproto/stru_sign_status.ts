/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SignStatus {
  isSigned: boolean;
  isRewarded: boolean;
  isSupplement: boolean;
  signTime: Long;
  rewardTime: Long;
}

function createBaseSignStatus(): SignStatus {
  return { isSigned: false, isRewarded: false, isSupplement: false, signTime: Long.ZERO, rewardTime: Long.ZERO };
}

export const SignStatus: MessageFns<SignStatus> = {
  encode(message: SignStatus, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.isSigned !== false) {
      writer.uint32(8).bool(message.isSigned);
    }
    if (message.isRewarded !== false) {
      writer.uint32(16).bool(message.isRewarded);
    }
    if (message.isSupplement !== false) {
      writer.uint32(24).bool(message.isSupplement);
    }
    if (!message.signTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.signTime.toString());
    }
    if (!message.rewardTime.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.rewardTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SignStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.isSigned = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isRewarded = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.isSupplement = reader.bool();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.signTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.rewardTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): SignStatus {
    return {
      isSigned: isSet(object.isSigned) ? globalThis.Boolean(object.isSigned) : false,
      isRewarded: isSet(object.isRewarded) ? globalThis.Boolean(object.isRewarded) : false,
      isSupplement: isSet(object.isSupplement) ? globalThis.Boolean(object.isSupplement) : false,
      signTime: isSet(object.signTime) ? Long.fromValue(object.signTime) : Long.ZERO,
      rewardTime: isSet(object.rewardTime) ? Long.fromValue(object.rewardTime) : Long.ZERO,
    };
  },

  toJSON(message: SignStatus): unknown {
    const obj: any = {};
    if (message.isSigned !== false) {
      obj.isSigned = message.isSigned;
    }
    if (message.isRewarded !== false) {
      obj.isRewarded = message.isRewarded;
    }
    if (message.isSupplement !== false) {
      obj.isSupplement = message.isSupplement;
    }
    if (!message.signTime.equals(Long.ZERO)) {
      obj.signTime = (message.signTime || Long.ZERO).toString();
    }
    if (!message.rewardTime.equals(Long.ZERO)) {
      obj.rewardTime = (message.rewardTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignStatus>, I>>(base?: I): SignStatus {
    return SignStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignStatus>, I>>(object: I): SignStatus {
    const message = createBaseSignStatus();
    message.isSigned = object.isSigned ?? false;
    message.isRewarded = object.isRewarded ?? false;
    message.isSupplement = object.isSupplement ?? false;
    message.signTime = (object.signTime !== undefined && object.signTime !== null)
      ? Long.fromValue(object.signTime)
      : Long.ZERO;
    message.rewardTime = (object.rewardTime !== undefined && object.rewardTime !== null)
      ? Long.fromValue(object.rewardTime)
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
