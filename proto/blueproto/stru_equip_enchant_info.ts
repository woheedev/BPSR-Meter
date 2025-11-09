/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EEquipEnchantType, eEquipEnchantTypeFromJSON, eEquipEnchantTypeToJSON } from "./enum_e_equip_enchant_type";

export const protobufPackage = "zproto";

export interface EquipEnchantInfo {
  enchantItemTypeId: number;
  enchantLevel: number;
  enchantType: EEquipEnchantType;
}

function createBaseEquipEnchantInfo(): EquipEnchantInfo {
  return { enchantItemTypeId: 0, enchantLevel: 0, enchantType: 0 };
}

export const EquipEnchantInfo: MessageFns<EquipEnchantInfo> = {
  encode(message: EquipEnchantInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.enchantItemTypeId !== 0) {
      writer.uint32(8).int32(message.enchantItemTypeId);
    }
    if (message.enchantLevel !== 0) {
      writer.uint32(16).int32(message.enchantLevel);
    }
    if (message.enchantType !== 0) {
      writer.uint32(24).int32(message.enchantType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipEnchantInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipEnchantInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.enchantItemTypeId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.enchantLevel = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.enchantType = reader.int32() as any;
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

  fromJSON(object: any): EquipEnchantInfo {
    return {
      enchantItemTypeId: isSet(object.enchantItemTypeId) ? globalThis.Number(object.enchantItemTypeId) : 0,
      enchantLevel: isSet(object.enchantLevel) ? globalThis.Number(object.enchantLevel) : 0,
      enchantType: isSet(object.enchantType) ? eEquipEnchantTypeFromJSON(object.enchantType) : 0,
    };
  },

  toJSON(message: EquipEnchantInfo): unknown {
    const obj: any = {};
    if (message.enchantItemTypeId !== 0) {
      obj.enchantItemTypeId = Math.round(message.enchantItemTypeId);
    }
    if (message.enchantLevel !== 0) {
      obj.enchantLevel = Math.round(message.enchantLevel);
    }
    if (message.enchantType !== 0) {
      obj.enchantType = eEquipEnchantTypeToJSON(message.enchantType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipEnchantInfo>, I>>(base?: I): EquipEnchantInfo {
    return EquipEnchantInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipEnchantInfo>, I>>(object: I): EquipEnchantInfo {
    const message = createBaseEquipEnchantInfo();
    message.enchantItemTypeId = object.enchantItemTypeId ?? 0;
    message.enchantLevel = object.enchantLevel ?? 0;
    message.enchantType = object.enchantType ?? 0;
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
