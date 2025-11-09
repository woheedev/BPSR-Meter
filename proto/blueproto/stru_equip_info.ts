/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface EquipInfo {
  equipSlot: number;
  itemUuid: Long;
  equipSlotRefineLevel: number;
  equipSlotRefineFailedCount: number;
}

function createBaseEquipInfo(): EquipInfo {
  return { equipSlot: 0, itemUuid: Long.UZERO, equipSlotRefineLevel: 0, equipSlotRefineFailedCount: 0 };
}

export const EquipInfo: MessageFns<EquipInfo> = {
  encode(message: EquipInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.equipSlot !== 0) {
      writer.uint32(8).int32(message.equipSlot);
    }
    if (!message.itemUuid.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.itemUuid.toString());
    }
    if (message.equipSlotRefineLevel !== 0) {
      writer.uint32(24).uint32(message.equipSlotRefineLevel);
    }
    if (message.equipSlotRefineFailedCount !== 0) {
      writer.uint32(32).uint32(message.equipSlotRefineFailedCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.equipSlot = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.itemUuid = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.equipSlotRefineLevel = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.equipSlotRefineFailedCount = reader.uint32();
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

  fromJSON(object: any): EquipInfo {
    return {
      equipSlot: isSet(object.equipSlot) ? globalThis.Number(object.equipSlot) : 0,
      itemUuid: isSet(object.itemUuid) ? Long.fromValue(object.itemUuid) : Long.UZERO,
      equipSlotRefineLevel: isSet(object.equipSlotRefineLevel) ? globalThis.Number(object.equipSlotRefineLevel) : 0,
      equipSlotRefineFailedCount: isSet(object.equipSlotRefineFailedCount)
        ? globalThis.Number(object.equipSlotRefineFailedCount)
        : 0,
    };
  },

  toJSON(message: EquipInfo): unknown {
    const obj: any = {};
    if (message.equipSlot !== 0) {
      obj.equipSlot = Math.round(message.equipSlot);
    }
    if (!message.itemUuid.equals(Long.UZERO)) {
      obj.itemUuid = (message.itemUuid || Long.UZERO).toString();
    }
    if (message.equipSlotRefineLevel !== 0) {
      obj.equipSlotRefineLevel = Math.round(message.equipSlotRefineLevel);
    }
    if (message.equipSlotRefineFailedCount !== 0) {
      obj.equipSlotRefineFailedCount = Math.round(message.equipSlotRefineFailedCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipInfo>, I>>(base?: I): EquipInfo {
    return EquipInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipInfo>, I>>(object: I): EquipInfo {
    const message = createBaseEquipInfo();
    message.equipSlot = object.equipSlot ?? 0;
    message.itemUuid = (object.itemUuid !== undefined && object.itemUuid !== null)
      ? Long.fromValue(object.itemUuid)
      : Long.UZERO;
    message.equipSlotRefineLevel = object.equipSlotRefineLevel ?? 0;
    message.equipSlotRefineFailedCount = object.equipSlotRefineFailedCount ?? 0;
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
