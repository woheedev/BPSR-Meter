/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ProfessionData {
  professionId: number;
  weaponSkin: number;
}

function createBaseProfessionData(): ProfessionData {
  return { professionId: 0, weaponSkin: 0 };
}

export const ProfessionData: MessageFns<ProfessionData> = {
  encode(message: ProfessionData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.professionId !== 0) {
      writer.uint32(8).int32(message.professionId);
    }
    if (message.weaponSkin !== 0) {
      writer.uint32(16).int32(message.weaponSkin);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.professionId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.weaponSkin = reader.int32();
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

  fromJSON(object: any): ProfessionData {
    return {
      professionId: isSet(object.professionId) ? globalThis.Number(object.professionId) : 0,
      weaponSkin: isSet(object.weaponSkin) ? globalThis.Number(object.weaponSkin) : 0,
    };
  },

  toJSON(message: ProfessionData): unknown {
    const obj: any = {};
    if (message.professionId !== 0) {
      obj.professionId = Math.round(message.professionId);
    }
    if (message.weaponSkin !== 0) {
      obj.weaponSkin = Math.round(message.weaponSkin);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionData>, I>>(base?: I): ProfessionData {
    return ProfessionData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionData>, I>>(object: I): ProfessionData {
    const message = createBaseProfessionData();
    message.professionId = object.professionId ?? 0;
    message.weaponSkin = object.weaponSkin ?? 0;
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
