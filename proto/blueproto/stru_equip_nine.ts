/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface EquipNine {
  slot: number;
  equipId: number;
}

function createBaseEquipNine(): EquipNine {
  return { slot: 0, equipId: 0 };
}

export const EquipNine: MessageFns<EquipNine> = {
  encode(message: EquipNine, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.slot !== 0) {
      writer.uint32(8).int32(message.slot);
    }
    if (message.equipId !== 0) {
      writer.uint32(16).int32(message.equipId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipNine {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipNine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.slot = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.equipId = reader.int32();
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

  fromJSON(object: any): EquipNine {
    return {
      slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0,
      equipId: isSet(object.equipId) ? globalThis.Number(object.equipId) : 0,
    };
  },

  toJSON(message: EquipNine): unknown {
    const obj: any = {};
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    if (message.equipId !== 0) {
      obj.equipId = Math.round(message.equipId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipNine>, I>>(base?: I): EquipNine {
    return EquipNine.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipNine>, I>>(object: I): EquipNine {
    const message = createBaseEquipNine();
    message.slot = object.slot ?? 0;
    message.equipId = object.equipId ?? 0;
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
