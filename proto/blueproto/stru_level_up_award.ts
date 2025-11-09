/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface LevelUpAward {
  dropTimes: number;
  lastDropTime: Long;
}

function createBaseLevelUpAward(): LevelUpAward {
  return { dropTimes: 0, lastDropTime: Long.ZERO };
}

export const LevelUpAward: MessageFns<LevelUpAward> = {
  encode(message: LevelUpAward, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dropTimes !== 0) {
      writer.uint32(8).uint32(message.dropTimes);
    }
    if (!message.lastDropTime.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.lastDropTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LevelUpAward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelUpAward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.dropTimes = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.lastDropTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): LevelUpAward {
    return {
      dropTimes: isSet(object.dropTimes) ? globalThis.Number(object.dropTimes) : 0,
      lastDropTime: isSet(object.lastDropTime) ? Long.fromValue(object.lastDropTime) : Long.ZERO,
    };
  },

  toJSON(message: LevelUpAward): unknown {
    const obj: any = {};
    if (message.dropTimes !== 0) {
      obj.dropTimes = Math.round(message.dropTimes);
    }
    if (!message.lastDropTime.equals(Long.ZERO)) {
      obj.lastDropTime = (message.lastDropTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LevelUpAward>, I>>(base?: I): LevelUpAward {
    return LevelUpAward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LevelUpAward>, I>>(object: I): LevelUpAward {
    const message = createBaseLevelUpAward();
    message.dropTimes = object.dropTimes ?? 0;
    message.lastDropTime = (object.lastDropTime !== undefined && object.lastDropTime !== null)
      ? Long.fromValue(object.lastDropTime)
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
