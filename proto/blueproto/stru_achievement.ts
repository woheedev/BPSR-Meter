/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface Achievement {
  finishNum: number;
  hasReceived: boolean;
  beginProgress: Long;
}

function createBaseAchievement(): Achievement {
  return { finishNum: 0, hasReceived: false, beginProgress: Long.UZERO };
}

export const Achievement: MessageFns<Achievement> = {
  encode(message: Achievement, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.finishNum !== 0) {
      writer.uint32(8).uint32(message.finishNum);
    }
    if (message.hasReceived !== false) {
      writer.uint32(16).bool(message.hasReceived);
    }
    if (!message.beginProgress.equals(Long.UZERO)) {
      writer.uint32(24).uint64(message.beginProgress.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Achievement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.finishNum = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.hasReceived = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.beginProgress = Long.fromString(reader.uint64().toString(), true);
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

  fromJSON(object: any): Achievement {
    return {
      finishNum: isSet(object.finishNum) ? globalThis.Number(object.finishNum) : 0,
      hasReceived: isSet(object.hasReceived) ? globalThis.Boolean(object.hasReceived) : false,
      beginProgress: isSet(object.beginProgress) ? Long.fromValue(object.beginProgress) : Long.UZERO,
    };
  },

  toJSON(message: Achievement): unknown {
    const obj: any = {};
    if (message.finishNum !== 0) {
      obj.finishNum = Math.round(message.finishNum);
    }
    if (message.hasReceived !== false) {
      obj.hasReceived = message.hasReceived;
    }
    if (!message.beginProgress.equals(Long.UZERO)) {
      obj.beginProgress = (message.beginProgress || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Achievement>, I>>(base?: I): Achievement {
    return Achievement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Achievement>, I>>(object: I): Achievement {
    const message = createBaseAchievement();
    message.finishNum = object.finishNum ?? 0;
    message.hasReceived = object.hasReceived ?? false;
    message.beginProgress = (object.beginProgress !== undefined && object.beginProgress !== null)
      ? Long.fromValue(object.beginProgress)
      : Long.UZERO;
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
