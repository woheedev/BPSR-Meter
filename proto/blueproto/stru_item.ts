/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EItemBindFlag, eItemBindFlagFromJSON, eItemBindFlagToJSON } from "./enum_e_item_bind_flag";
import { AffixData } from "./stru_affix_data";
import { EquipAttr } from "./stru_equip_attr";
import { ItemExtendData } from "./stru_item_extend_data";
import { ModAttr } from "./stru_mod_attr";
import { ModNewAttr } from "./stru_mod_new_attr";

export const protobufPackage = "zproto";

export interface Item {
  uuid: Long;
  configId: number;
  count: Long;
  invalid: number;
  bindFlag: EItemBindFlag;
  createTime: Long;
  expireTime: Long;
  optSrc: number;
  quality: number;
  equipAttr: EquipAttr | undefined;
  modAttr: ModAttr | undefined;
  coolDownExpireTime: Long;
  modNewAttr: ModNewAttr | undefined;
  affixData: AffixData | undefined;
  extendAttr: { [key: number]: ItemExtendData };
  rewardId: number;
  geneSequence: { [key: number]: number };
}

export interface Item_ExtendAttrEntry {
  key: number;
  value: ItemExtendData | undefined;
}

export interface Item_GeneSequenceEntry {
  key: number;
  value: number;
}

function createBaseItem(): Item {
  return {
    uuid: Long.ZERO,
    configId: 0,
    count: Long.ZERO,
    invalid: 0,
    bindFlag: 0,
    createTime: Long.ZERO,
    expireTime: Long.ZERO,
    optSrc: 0,
    quality: 0,
    equipAttr: undefined,
    modAttr: undefined,
    coolDownExpireTime: Long.ZERO,
    modNewAttr: undefined,
    affixData: undefined,
    extendAttr: {},
    rewardId: 0,
    geneSequence: {},
  };
}

export const Item: MessageFns<Item> = {
  encode(message: Item, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.uuid.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.uuid.toString());
    }
    if (message.configId !== 0) {
      writer.uint32(16).int32(message.configId);
    }
    if (!message.count.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.count.toString());
    }
    if (message.invalid !== 0) {
      writer.uint32(32).int32(message.invalid);
    }
    if (message.bindFlag !== 0) {
      writer.uint32(40).int32(message.bindFlag);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.createTime.toString());
    }
    if (!message.expireTime.equals(Long.ZERO)) {
      writer.uint32(56).int64(message.expireTime.toString());
    }
    if (message.optSrc !== 0) {
      writer.uint32(64).int32(message.optSrc);
    }
    if (message.quality !== 0) {
      writer.uint32(72).int32(message.quality);
    }
    if (message.equipAttr !== undefined) {
      EquipAttr.encode(message.equipAttr, writer.uint32(82).fork()).join();
    }
    if (message.modAttr !== undefined) {
      ModAttr.encode(message.modAttr, writer.uint32(90).fork()).join();
    }
    if (!message.coolDownExpireTime.equals(Long.ZERO)) {
      writer.uint32(96).int64(message.coolDownExpireTime.toString());
    }
    if (message.modNewAttr !== undefined) {
      ModNewAttr.encode(message.modNewAttr, writer.uint32(106).fork()).join();
    }
    if (message.affixData !== undefined) {
      AffixData.encode(message.affixData, writer.uint32(114).fork()).join();
    }
    Object.entries(message.extendAttr).forEach(([key, value]) => {
      Item_ExtendAttrEntry.encode({ key: key as any, value }, writer.uint32(122).fork()).join();
    });
    if (message.rewardId !== 0) {
      writer.uint32(128).int32(message.rewardId);
    }
    Object.entries(message.geneSequence).forEach(([key, value]) => {
      Item_GeneSequenceEntry.encode({ key: key as any, value }, writer.uint32(138).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Item {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.configId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.count = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.invalid = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.bindFlag = reader.int32() as any;
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.createTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.expireTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.optSrc = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.quality = reader.int32();
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.equipAttr = EquipAttr.decode(reader, reader.uint32());
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.modAttr = ModAttr.decode(reader, reader.uint32());
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.coolDownExpireTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.modNewAttr = ModNewAttr.decode(reader, reader.uint32());
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.affixData = AffixData.decode(reader, reader.uint32());
          continue;
        }
        case 15: {
          if (tag !== 122) {
            break;
          }

          const entry15 = Item_ExtendAttrEntry.decode(reader, reader.uint32());
          if (entry15.value !== undefined) {
            message.extendAttr[entry15.key] = entry15.value;
          }
          continue;
        }
        case 16: {
          if (tag !== 128) {
            break;
          }

          message.rewardId = reader.int32();
          continue;
        }
        case 17: {
          if (tag !== 138) {
            break;
          }

          const entry17 = Item_GeneSequenceEntry.decode(reader, reader.uint32());
          if (entry17.value !== undefined) {
            message.geneSequence[entry17.key] = entry17.value;
          }
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

  fromJSON(object: any): Item {
    return {
      uuid: isSet(object.uuid) ? Long.fromValue(object.uuid) : Long.ZERO,
      configId: isSet(object.configId) ? globalThis.Number(object.configId) : 0,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.ZERO,
      invalid: isSet(object.invalid) ? globalThis.Number(object.invalid) : 0,
      bindFlag: isSet(object.bindFlag) ? eItemBindFlagFromJSON(object.bindFlag) : 0,
      createTime: isSet(object.createTime) ? Long.fromValue(object.createTime) : Long.ZERO,
      expireTime: isSet(object.expireTime) ? Long.fromValue(object.expireTime) : Long.ZERO,
      optSrc: isSet(object.optSrc) ? globalThis.Number(object.optSrc) : 0,
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
      equipAttr: isSet(object.equipAttr) ? EquipAttr.fromJSON(object.equipAttr) : undefined,
      modAttr: isSet(object.modAttr) ? ModAttr.fromJSON(object.modAttr) : undefined,
      coolDownExpireTime: isSet(object.coolDownExpireTime) ? Long.fromValue(object.coolDownExpireTime) : Long.ZERO,
      modNewAttr: isSet(object.modNewAttr) ? ModNewAttr.fromJSON(object.modNewAttr) : undefined,
      affixData: isSet(object.affixData) ? AffixData.fromJSON(object.affixData) : undefined,
      extendAttr: isObject(object.extendAttr)
        ? Object.entries(object.extendAttr).reduce<{ [key: number]: ItemExtendData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ItemExtendData.fromJSON(value);
          return acc;
        }, {})
        : {},
      rewardId: isSet(object.rewardId) ? globalThis.Number(object.rewardId) : 0,
      geneSequence: isObject(object.geneSequence)
        ? Object.entries(object.geneSequence).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    if (!message.uuid.equals(Long.ZERO)) {
      obj.uuid = (message.uuid || Long.ZERO).toString();
    }
    if (message.configId !== 0) {
      obj.configId = Math.round(message.configId);
    }
    if (!message.count.equals(Long.ZERO)) {
      obj.count = (message.count || Long.ZERO).toString();
    }
    if (message.invalid !== 0) {
      obj.invalid = Math.round(message.invalid);
    }
    if (message.bindFlag !== 0) {
      obj.bindFlag = eItemBindFlagToJSON(message.bindFlag);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      obj.createTime = (message.createTime || Long.ZERO).toString();
    }
    if (!message.expireTime.equals(Long.ZERO)) {
      obj.expireTime = (message.expireTime || Long.ZERO).toString();
    }
    if (message.optSrc !== 0) {
      obj.optSrc = Math.round(message.optSrc);
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    if (message.equipAttr !== undefined) {
      obj.equipAttr = EquipAttr.toJSON(message.equipAttr);
    }
    if (message.modAttr !== undefined) {
      obj.modAttr = ModAttr.toJSON(message.modAttr);
    }
    if (!message.coolDownExpireTime.equals(Long.ZERO)) {
      obj.coolDownExpireTime = (message.coolDownExpireTime || Long.ZERO).toString();
    }
    if (message.modNewAttr !== undefined) {
      obj.modNewAttr = ModNewAttr.toJSON(message.modNewAttr);
    }
    if (message.affixData !== undefined) {
      obj.affixData = AffixData.toJSON(message.affixData);
    }
    if (message.extendAttr) {
      const entries = Object.entries(message.extendAttr);
      if (entries.length > 0) {
        obj.extendAttr = {};
        entries.forEach(([k, v]) => {
          obj.extendAttr[k] = ItemExtendData.toJSON(v);
        });
      }
    }
    if (message.rewardId !== 0) {
      obj.rewardId = Math.round(message.rewardId);
    }
    if (message.geneSequence) {
      const entries = Object.entries(message.geneSequence);
      if (entries.length > 0) {
        obj.geneSequence = {};
        entries.forEach(([k, v]) => {
          obj.geneSequence[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Item>, I>>(base?: I): Item {
    return Item.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Item>, I>>(object: I): Item {
    const message = createBaseItem();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? Long.fromValue(object.uuid) : Long.ZERO;
    message.configId = object.configId ?? 0;
    message.count = (object.count !== undefined && object.count !== null) ? Long.fromValue(object.count) : Long.ZERO;
    message.invalid = object.invalid ?? 0;
    message.bindFlag = object.bindFlag ?? 0;
    message.createTime = (object.createTime !== undefined && object.createTime !== null)
      ? Long.fromValue(object.createTime)
      : Long.ZERO;
    message.expireTime = (object.expireTime !== undefined && object.expireTime !== null)
      ? Long.fromValue(object.expireTime)
      : Long.ZERO;
    message.optSrc = object.optSrc ?? 0;
    message.quality = object.quality ?? 0;
    message.equipAttr = (object.equipAttr !== undefined && object.equipAttr !== null)
      ? EquipAttr.fromPartial(object.equipAttr)
      : undefined;
    message.modAttr = (object.modAttr !== undefined && object.modAttr !== null)
      ? ModAttr.fromPartial(object.modAttr)
      : undefined;
    message.coolDownExpireTime = (object.coolDownExpireTime !== undefined && object.coolDownExpireTime !== null)
      ? Long.fromValue(object.coolDownExpireTime)
      : Long.ZERO;
    message.modNewAttr = (object.modNewAttr !== undefined && object.modNewAttr !== null)
      ? ModNewAttr.fromPartial(object.modNewAttr)
      : undefined;
    message.affixData = (object.affixData !== undefined && object.affixData !== null)
      ? AffixData.fromPartial(object.affixData)
      : undefined;
    message.extendAttr = Object.entries(object.extendAttr ?? {}).reduce<{ [key: number]: ItemExtendData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ItemExtendData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.rewardId = object.rewardId ?? 0;
    message.geneSequence = Object.entries(object.geneSequence ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseItem_ExtendAttrEntry(): Item_ExtendAttrEntry {
  return { key: 0, value: undefined };
}

export const Item_ExtendAttrEntry: MessageFns<Item_ExtendAttrEntry> = {
  encode(message: Item_ExtendAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ItemExtendData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Item_ExtendAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem_ExtendAttrEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = ItemExtendData.decode(reader, reader.uint32());
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

  fromJSON(object: any): Item_ExtendAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ItemExtendData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Item_ExtendAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ItemExtendData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Item_ExtendAttrEntry>, I>>(base?: I): Item_ExtendAttrEntry {
    return Item_ExtendAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Item_ExtendAttrEntry>, I>>(object: I): Item_ExtendAttrEntry {
    const message = createBaseItem_ExtendAttrEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ItemExtendData.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseItem_GeneSequenceEntry(): Item_GeneSequenceEntry {
  return { key: 0, value: 0 };
}

export const Item_GeneSequenceEntry: MessageFns<Item_GeneSequenceEntry> = {
  encode(message: Item_GeneSequenceEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Item_GeneSequenceEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem_GeneSequenceEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
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

  fromJSON(object: any): Item_GeneSequenceEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: Item_GeneSequenceEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Item_GeneSequenceEntry>, I>>(base?: I): Item_GeneSequenceEntry {
    return Item_GeneSequenceEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Item_GeneSequenceEntry>, I>>(object: I): Item_GeneSequenceEntry {
    const message = createBaseItem_GeneSequenceEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
