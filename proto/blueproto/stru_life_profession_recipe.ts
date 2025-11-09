/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface LifeProfessionRecipe {
  id: number;
  unlockTime: Long;
}

function createBaseLifeProfessionRecipe(): LifeProfessionRecipe {
  return { id: 0, unlockTime: Long.ZERO };
}

export const LifeProfessionRecipe: MessageFns<LifeProfessionRecipe> = {
  encode(message: LifeProfessionRecipe, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (!message.unlockTime.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.unlockTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfessionRecipe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfessionRecipe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.unlockTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): LifeProfessionRecipe {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      unlockTime: isSet(object.unlockTime) ? Long.fromValue(object.unlockTime) : Long.ZERO,
    };
  },

  toJSON(message: LifeProfessionRecipe): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (!message.unlockTime.equals(Long.ZERO)) {
      obj.unlockTime = (message.unlockTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfessionRecipe>, I>>(base?: I): LifeProfessionRecipe {
    return LifeProfessionRecipe.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfessionRecipe>, I>>(object: I): LifeProfessionRecipe {
    const message = createBaseLifeProfessionRecipe();
    message.id = object.id ?? 0;
    message.unlockTime = (object.unlockTime !== undefined && object.unlockTime !== null)
      ? Long.fromValue(object.unlockTime)
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
