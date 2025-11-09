/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EquipAttr } from "./stru_equip_attr";
import { EquipEnchantInfo } from "./stru_equip_enchant_info";
import { EquipInfo } from "./stru_equip_info";
import { EquipSuitInfo } from "./stru_equip_suit_info";

export const protobufPackage = "zproto";

export interface EquipList {
  equipList: { [key: number]: EquipInfo };
  equipAttr: EquipAttr | undefined;
  equipRecastInfo: Map<Long, EquipAttr>;
  equipEnchant: Map<Long, EquipEnchantInfo>;
  suitInfoDict: { [key: number]: EquipSuitInfo };
}

export interface EquipList_EquipListEntry {
  key: number;
  value: EquipInfo | undefined;
}

export interface EquipList_EquipRecastInfoEntry {
  key: Long;
  value: EquipAttr | undefined;
}

export interface EquipList_EquipEnchantEntry {
  key: Long;
  value: EquipEnchantInfo | undefined;
}

export interface EquipList_SuitInfoDictEntry {
  key: number;
  value: EquipSuitInfo | undefined;
}

function createBaseEquipList(): EquipList {
  return { equipList: {}, equipAttr: undefined, equipRecastInfo: new Map(), equipEnchant: new Map(), suitInfoDict: {} };
}

export const EquipList: MessageFns<EquipList> = {
  encode(message: EquipList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.equipList).forEach(([key, value]) => {
      EquipList_EquipListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.equipAttr !== undefined) {
      EquipAttr.encode(message.equipAttr, writer.uint32(18).fork()).join();
    }
    message.equipRecastInfo.forEach((value, key) => {
      EquipList_EquipRecastInfoEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    message.equipEnchant.forEach((value, key) => {
      EquipList_EquipEnchantEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    Object.entries(message.suitInfoDict).forEach(([key, value]) => {
      EquipList_SuitInfoDictEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = EquipList_EquipListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.equipList[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.equipAttr = EquipAttr.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = EquipList_EquipRecastInfoEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.equipRecastInfo.set(entry4.key, entry4.value);
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = EquipList_EquipEnchantEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.equipEnchant.set(entry5.key, entry5.value);
          }
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = EquipList_SuitInfoDictEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.suitInfoDict[entry6.key] = entry6.value;
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

  fromJSON(object: any): EquipList {
    return {
      equipList: isObject(object.equipList)
        ? Object.entries(object.equipList).reduce<{ [key: number]: EquipInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = EquipInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      equipAttr: isSet(object.equipAttr) ? EquipAttr.fromJSON(object.equipAttr) : undefined,
      equipRecastInfo: isObject(object.equipRecastInfo)
        ? Object.entries(object.equipRecastInfo).reduce<Map<Long, EquipAttr>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), EquipAttr.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      equipEnchant: isObject(object.equipEnchant)
        ? Object.entries(object.equipEnchant).reduce<Map<Long, EquipEnchantInfo>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), EquipEnchantInfo.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      suitInfoDict: isObject(object.suitInfoDict)
        ? Object.entries(object.suitInfoDict).reduce<{ [key: number]: EquipSuitInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = EquipSuitInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: EquipList): unknown {
    const obj: any = {};
    if (message.equipList) {
      const entries = Object.entries(message.equipList);
      if (entries.length > 0) {
        obj.equipList = {};
        entries.forEach(([k, v]) => {
          obj.equipList[k] = EquipInfo.toJSON(v);
        });
      }
    }
    if (message.equipAttr !== undefined) {
      obj.equipAttr = EquipAttr.toJSON(message.equipAttr);
    }
    if (message.equipRecastInfo?.size) {
      obj.equipRecastInfo = {};
      message.equipRecastInfo.forEach((v, k) => {
        obj.equipRecastInfo[longToNumber(k)] = EquipAttr.toJSON(v);
      });
    }
    if (message.equipEnchant?.size) {
      obj.equipEnchant = {};
      message.equipEnchant.forEach((v, k) => {
        obj.equipEnchant[longToNumber(k)] = EquipEnchantInfo.toJSON(v);
      });
    }
    if (message.suitInfoDict) {
      const entries = Object.entries(message.suitInfoDict);
      if (entries.length > 0) {
        obj.suitInfoDict = {};
        entries.forEach(([k, v]) => {
          obj.suitInfoDict[k] = EquipSuitInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipList>, I>>(base?: I): EquipList {
    return EquipList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipList>, I>>(object: I): EquipList {
    const message = createBaseEquipList();
    message.equipList = Object.entries(object.equipList ?? {}).reduce<{ [key: number]: EquipInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = EquipInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.equipAttr = (object.equipAttr !== undefined && object.equipAttr !== null)
      ? EquipAttr.fromPartial(object.equipAttr)
      : undefined;
    message.equipRecastInfo = (() => {
      const m = new Map();
      (object.equipRecastInfo as Map<Long, EquipAttr> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, EquipAttr.fromPartial(value));
        }
      });
      return m;
    })();
    message.equipEnchant = (() => {
      const m = new Map();
      (object.equipEnchant as Map<Long, EquipEnchantInfo> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, EquipEnchantInfo.fromPartial(value));
        }
      });
      return m;
    })();
    message.suitInfoDict = Object.entries(object.suitInfoDict ?? {}).reduce<{ [key: number]: EquipSuitInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = EquipSuitInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseEquipList_EquipListEntry(): EquipList_EquipListEntry {
  return { key: 0, value: undefined };
}

export const EquipList_EquipListEntry: MessageFns<EquipList_EquipListEntry> = {
  encode(message: EquipList_EquipListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      EquipInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipList_EquipListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipList_EquipListEntry();
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

          message.value = EquipInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): EquipList_EquipListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? EquipInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EquipList_EquipListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = EquipInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipList_EquipListEntry>, I>>(base?: I): EquipList_EquipListEntry {
    return EquipList_EquipListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipList_EquipListEntry>, I>>(object: I): EquipList_EquipListEntry {
    const message = createBaseEquipList_EquipListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? EquipInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEquipList_EquipRecastInfoEntry(): EquipList_EquipRecastInfoEntry {
  return { key: Long.UZERO, value: undefined };
}

export const EquipList_EquipRecastInfoEntry: MessageFns<EquipList_EquipRecastInfoEntry> = {
  encode(message: EquipList_EquipRecastInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.key.toString());
    }
    if (message.value !== undefined) {
      EquipAttr.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipList_EquipRecastInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipList_EquipRecastInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = EquipAttr.decode(reader, reader.uint32());
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

  fromJSON(object: any): EquipList_EquipRecastInfoEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.UZERO,
      value: isSet(object.value) ? EquipAttr.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EquipList_EquipRecastInfoEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.UZERO)) {
      obj.key = (message.key || Long.UZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = EquipAttr.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipList_EquipRecastInfoEntry>, I>>(base?: I): EquipList_EquipRecastInfoEntry {
    return EquipList_EquipRecastInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipList_EquipRecastInfoEntry>, I>>(
    object: I,
  ): EquipList_EquipRecastInfoEntry {
    const message = createBaseEquipList_EquipRecastInfoEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.UZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? EquipAttr.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEquipList_EquipEnchantEntry(): EquipList_EquipEnchantEntry {
  return { key: Long.ZERO, value: undefined };
}

export const EquipList_EquipEnchantEntry: MessageFns<EquipList_EquipEnchantEntry> = {
  encode(message: EquipList_EquipEnchantEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      EquipEnchantInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipList_EquipEnchantEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipList_EquipEnchantEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = EquipEnchantInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): EquipList_EquipEnchantEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? EquipEnchantInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EquipList_EquipEnchantEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = EquipEnchantInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipList_EquipEnchantEntry>, I>>(base?: I): EquipList_EquipEnchantEntry {
    return EquipList_EquipEnchantEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipList_EquipEnchantEntry>, I>>(object: I): EquipList_EquipEnchantEntry {
    const message = createBaseEquipList_EquipEnchantEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? EquipEnchantInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEquipList_SuitInfoDictEntry(): EquipList_SuitInfoDictEntry {
  return { key: 0, value: undefined };
}

export const EquipList_SuitInfoDictEntry: MessageFns<EquipList_SuitInfoDictEntry> = {
  encode(message: EquipList_SuitInfoDictEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      EquipSuitInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipList_SuitInfoDictEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipList_SuitInfoDictEntry();
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

          message.value = EquipSuitInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): EquipList_SuitInfoDictEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? EquipSuitInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EquipList_SuitInfoDictEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = EquipSuitInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipList_SuitInfoDictEntry>, I>>(base?: I): EquipList_SuitInfoDictEntry {
    return EquipList_SuitInfoDictEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipList_SuitInfoDictEntry>, I>>(object: I): EquipList_SuitInfoDictEntry {
    const message = createBaseEquipList_SuitInfoDictEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? EquipSuitInfo.fromPartial(object.value)
      : undefined;
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
