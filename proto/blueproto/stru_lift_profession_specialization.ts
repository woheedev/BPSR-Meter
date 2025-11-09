/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface LiftProfessionSpecialization {
  id: number;
  level: number;
}

function createBaseLiftProfessionSpecialization(): LiftProfessionSpecialization {
  return { id: 0, level: 0 };
}

export const LiftProfessionSpecialization: MessageFns<LiftProfessionSpecialization> = {
  encode(message: LiftProfessionSpecialization, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LiftProfessionSpecialization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiftProfessionSpecialization();
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

          message.level = reader.int32();
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

  fromJSON(object: any): LiftProfessionSpecialization {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
    };
  },

  toJSON(message: LiftProfessionSpecialization): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LiftProfessionSpecialization>, I>>(base?: I): LiftProfessionSpecialization {
    return LiftProfessionSpecialization.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LiftProfessionSpecialization>, I>>(object: I): LiftProfessionSpecialization {
    const message = createBaseLiftProfessionSpecialization();
    message.id = object.id ?? 0;
    message.level = object.level ?? 0;
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
