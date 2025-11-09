/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MedalHole {
  holeId: number;
  holeLevel: number;
  curExp: number;
}

function createBaseMedalHole(): MedalHole {
  return { holeId: 0, holeLevel: 0, curExp: 0 };
}

export const MedalHole: MessageFns<MedalHole> = {
  encode(message: MedalHole, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.holeId !== 0) {
      writer.uint32(8).uint32(message.holeId);
    }
    if (message.holeLevel !== 0) {
      writer.uint32(16).uint32(message.holeLevel);
    }
    if (message.curExp !== 0) {
      writer.uint32(24).uint32(message.curExp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MedalHole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedalHole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.holeId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.holeLevel = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.curExp = reader.uint32();
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

  fromJSON(object: any): MedalHole {
    return {
      holeId: isSet(object.holeId) ? globalThis.Number(object.holeId) : 0,
      holeLevel: isSet(object.holeLevel) ? globalThis.Number(object.holeLevel) : 0,
      curExp: isSet(object.curExp) ? globalThis.Number(object.curExp) : 0,
    };
  },

  toJSON(message: MedalHole): unknown {
    const obj: any = {};
    if (message.holeId !== 0) {
      obj.holeId = Math.round(message.holeId);
    }
    if (message.holeLevel !== 0) {
      obj.holeLevel = Math.round(message.holeLevel);
    }
    if (message.curExp !== 0) {
      obj.curExp = Math.round(message.curExp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MedalHole>, I>>(base?: I): MedalHole {
    return MedalHole.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MedalHole>, I>>(object: I): MedalHole {
    const message = createBaseMedalHole();
    message.holeId = object.holeId ?? 0;
    message.holeLevel = object.holeLevel ?? 0;
    message.curExp = object.curExp ?? 0;
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
