/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EquipAttrSet } from "./stru_equip_attr_set";

export const protobufPackage = "zproto";

export interface EquipAttr {
  baseAttrs: { [key: number]: number };
  perfectionValue: number;
  recastCount: number;
  totalRecastCount: number;
  basicAttr: { [key: number]: number };
  advanceAttr: { [key: number]: number };
  recastAttr: { [key: number]: number };
  perfectionLevel: number;
  rareQualityAttr: { [key: number]: number };
  maxPerfectionValue: number;
  equipAttrSet: EquipAttrSet | undefined;
  breakThroughTime: number;
}

export interface EquipAttr_BaseAttrsEntry {
  key: number;
  value: number;
}

export interface EquipAttr_BasicAttrEntry {
  key: number;
  value: number;
}

export interface EquipAttr_AdvanceAttrEntry {
  key: number;
  value: number;
}

export interface EquipAttr_RecastAttrEntry {
  key: number;
  value: number;
}

export interface EquipAttr_RareQualityAttrEntry {
  key: number;
  value: number;
}

function createBaseEquipAttr(): EquipAttr {
  return {
    baseAttrs: {},
    perfectionValue: 0,
    recastCount: 0,
    totalRecastCount: 0,
    basicAttr: {},
    advanceAttr: {},
    recastAttr: {},
    perfectionLevel: 0,
    rareQualityAttr: {},
    maxPerfectionValue: 0,
    equipAttrSet: undefined,
    breakThroughTime: 0,
  };
}

export const EquipAttr: MessageFns<EquipAttr> = {
  encode(message: EquipAttr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.baseAttrs).forEach(([key, value]) => {
      EquipAttr_BaseAttrsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    if (message.perfectionValue !== 0) {
      writer.uint32(56).int32(message.perfectionValue);
    }
    if (message.recastCount !== 0) {
      writer.uint32(64).int32(message.recastCount);
    }
    if (message.totalRecastCount !== 0) {
      writer.uint32(72).int32(message.totalRecastCount);
    }
    Object.entries(message.basicAttr).forEach(([key, value]) => {
      EquipAttr_BasicAttrEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).join();
    });
    Object.entries(message.advanceAttr).forEach(([key, value]) => {
      EquipAttr_AdvanceAttrEntry.encode({ key: key as any, value }, writer.uint32(90).fork()).join();
    });
    Object.entries(message.recastAttr).forEach(([key, value]) => {
      EquipAttr_RecastAttrEntry.encode({ key: key as any, value }, writer.uint32(98).fork()).join();
    });
    if (message.perfectionLevel !== 0) {
      writer.uint32(104).int32(message.perfectionLevel);
    }
    Object.entries(message.rareQualityAttr).forEach(([key, value]) => {
      EquipAttr_RareQualityAttrEntry.encode({ key: key as any, value }, writer.uint32(114).fork()).join();
    });
    if (message.maxPerfectionValue !== 0) {
      writer.uint32(120).int32(message.maxPerfectionValue);
    }
    if (message.equipAttrSet !== undefined) {
      EquipAttrSet.encode(message.equipAttrSet, writer.uint32(138).fork()).join();
    }
    if (message.breakThroughTime !== 0) {
      writer.uint32(144).int32(message.breakThroughTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = EquipAttr_BaseAttrsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.baseAttrs[entry4.key] = entry4.value;
          }
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.perfectionValue = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.recastCount = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.totalRecastCount = reader.int32();
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          const entry10 = EquipAttr_BasicAttrEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.basicAttr[entry10.key] = entry10.value;
          }
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          const entry11 = EquipAttr_AdvanceAttrEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.advanceAttr[entry11.key] = entry11.value;
          }
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          const entry12 = EquipAttr_RecastAttrEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.recastAttr[entry12.key] = entry12.value;
          }
          continue;
        }
        case 13: {
          if (tag !== 104) {
            break;
          }

          message.perfectionLevel = reader.int32();
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          const entry14 = EquipAttr_RareQualityAttrEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.rareQualityAttr[entry14.key] = entry14.value;
          }
          continue;
        }
        case 15: {
          if (tag !== 120) {
            break;
          }

          message.maxPerfectionValue = reader.int32();
          continue;
        }
        case 17: {
          if (tag !== 138) {
            break;
          }

          message.equipAttrSet = EquipAttrSet.decode(reader, reader.uint32());
          continue;
        }
        case 18: {
          if (tag !== 144) {
            break;
          }

          message.breakThroughTime = reader.int32();
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

  fromJSON(object: any): EquipAttr {
    return {
      baseAttrs: isObject(object.baseAttrs)
        ? Object.entries(object.baseAttrs).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      perfectionValue: isSet(object.perfectionValue) ? globalThis.Number(object.perfectionValue) : 0,
      recastCount: isSet(object.recastCount) ? globalThis.Number(object.recastCount) : 0,
      totalRecastCount: isSet(object.totalRecastCount) ? globalThis.Number(object.totalRecastCount) : 0,
      basicAttr: isObject(object.basicAttr)
        ? Object.entries(object.basicAttr).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      advanceAttr: isObject(object.advanceAttr)
        ? Object.entries(object.advanceAttr).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      recastAttr: isObject(object.recastAttr)
        ? Object.entries(object.recastAttr).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      perfectionLevel: isSet(object.perfectionLevel) ? globalThis.Number(object.perfectionLevel) : 0,
      rareQualityAttr: isObject(object.rareQualityAttr)
        ? Object.entries(object.rareQualityAttr).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      maxPerfectionValue: isSet(object.maxPerfectionValue) ? globalThis.Number(object.maxPerfectionValue) : 0,
      equipAttrSet: isSet(object.equipAttrSet) ? EquipAttrSet.fromJSON(object.equipAttrSet) : undefined,
      breakThroughTime: isSet(object.breakThroughTime) ? globalThis.Number(object.breakThroughTime) : 0,
    };
  },

  toJSON(message: EquipAttr): unknown {
    const obj: any = {};
    if (message.baseAttrs) {
      const entries = Object.entries(message.baseAttrs);
      if (entries.length > 0) {
        obj.baseAttrs = {};
        entries.forEach(([k, v]) => {
          obj.baseAttrs[k] = Math.round(v);
        });
      }
    }
    if (message.perfectionValue !== 0) {
      obj.perfectionValue = Math.round(message.perfectionValue);
    }
    if (message.recastCount !== 0) {
      obj.recastCount = Math.round(message.recastCount);
    }
    if (message.totalRecastCount !== 0) {
      obj.totalRecastCount = Math.round(message.totalRecastCount);
    }
    if (message.basicAttr) {
      const entries = Object.entries(message.basicAttr);
      if (entries.length > 0) {
        obj.basicAttr = {};
        entries.forEach(([k, v]) => {
          obj.basicAttr[k] = Math.round(v);
        });
      }
    }
    if (message.advanceAttr) {
      const entries = Object.entries(message.advanceAttr);
      if (entries.length > 0) {
        obj.advanceAttr = {};
        entries.forEach(([k, v]) => {
          obj.advanceAttr[k] = Math.round(v);
        });
      }
    }
    if (message.recastAttr) {
      const entries = Object.entries(message.recastAttr);
      if (entries.length > 0) {
        obj.recastAttr = {};
        entries.forEach(([k, v]) => {
          obj.recastAttr[k] = Math.round(v);
        });
      }
    }
    if (message.perfectionLevel !== 0) {
      obj.perfectionLevel = Math.round(message.perfectionLevel);
    }
    if (message.rareQualityAttr) {
      const entries = Object.entries(message.rareQualityAttr);
      if (entries.length > 0) {
        obj.rareQualityAttr = {};
        entries.forEach(([k, v]) => {
          obj.rareQualityAttr[k] = Math.round(v);
        });
      }
    }
    if (message.maxPerfectionValue !== 0) {
      obj.maxPerfectionValue = Math.round(message.maxPerfectionValue);
    }
    if (message.equipAttrSet !== undefined) {
      obj.equipAttrSet = EquipAttrSet.toJSON(message.equipAttrSet);
    }
    if (message.breakThroughTime !== 0) {
      obj.breakThroughTime = Math.round(message.breakThroughTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttr>, I>>(base?: I): EquipAttr {
    return EquipAttr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttr>, I>>(object: I): EquipAttr {
    const message = createBaseEquipAttr();
    message.baseAttrs = Object.entries(object.baseAttrs ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.perfectionValue = object.perfectionValue ?? 0;
    message.recastCount = object.recastCount ?? 0;
    message.totalRecastCount = object.totalRecastCount ?? 0;
    message.basicAttr = Object.entries(object.basicAttr ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.advanceAttr = Object.entries(object.advanceAttr ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.recastAttr = Object.entries(object.recastAttr ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.perfectionLevel = object.perfectionLevel ?? 0;
    message.rareQualityAttr = Object.entries(object.rareQualityAttr ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.maxPerfectionValue = object.maxPerfectionValue ?? 0;
    message.equipAttrSet = (object.equipAttrSet !== undefined && object.equipAttrSet !== null)
      ? EquipAttrSet.fromPartial(object.equipAttrSet)
      : undefined;
    message.breakThroughTime = object.breakThroughTime ?? 0;
    return message;
  },
};

function createBaseEquipAttr_BaseAttrsEntry(): EquipAttr_BaseAttrsEntry {
  return { key: 0, value: 0 };
}

export const EquipAttr_BaseAttrsEntry: MessageFns<EquipAttr_BaseAttrsEntry> = {
  encode(message: EquipAttr_BaseAttrsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttr_BaseAttrsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttr_BaseAttrsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): EquipAttr_BaseAttrsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttr_BaseAttrsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttr_BaseAttrsEntry>, I>>(base?: I): EquipAttr_BaseAttrsEntry {
    return EquipAttr_BaseAttrsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttr_BaseAttrsEntry>, I>>(object: I): EquipAttr_BaseAttrsEntry {
    const message = createBaseEquipAttr_BaseAttrsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEquipAttr_BasicAttrEntry(): EquipAttr_BasicAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttr_BasicAttrEntry: MessageFns<EquipAttr_BasicAttrEntry> = {
  encode(message: EquipAttr_BasicAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttr_BasicAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttr_BasicAttrEntry();
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

  fromJSON(object: any): EquipAttr_BasicAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttr_BasicAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttr_BasicAttrEntry>, I>>(base?: I): EquipAttr_BasicAttrEntry {
    return EquipAttr_BasicAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttr_BasicAttrEntry>, I>>(object: I): EquipAttr_BasicAttrEntry {
    const message = createBaseEquipAttr_BasicAttrEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEquipAttr_AdvanceAttrEntry(): EquipAttr_AdvanceAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttr_AdvanceAttrEntry: MessageFns<EquipAttr_AdvanceAttrEntry> = {
  encode(message: EquipAttr_AdvanceAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttr_AdvanceAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttr_AdvanceAttrEntry();
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

  fromJSON(object: any): EquipAttr_AdvanceAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttr_AdvanceAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttr_AdvanceAttrEntry>, I>>(base?: I): EquipAttr_AdvanceAttrEntry {
    return EquipAttr_AdvanceAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttr_AdvanceAttrEntry>, I>>(object: I): EquipAttr_AdvanceAttrEntry {
    const message = createBaseEquipAttr_AdvanceAttrEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEquipAttr_RecastAttrEntry(): EquipAttr_RecastAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttr_RecastAttrEntry: MessageFns<EquipAttr_RecastAttrEntry> = {
  encode(message: EquipAttr_RecastAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttr_RecastAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttr_RecastAttrEntry();
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

  fromJSON(object: any): EquipAttr_RecastAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttr_RecastAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttr_RecastAttrEntry>, I>>(base?: I): EquipAttr_RecastAttrEntry {
    return EquipAttr_RecastAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttr_RecastAttrEntry>, I>>(object: I): EquipAttr_RecastAttrEntry {
    const message = createBaseEquipAttr_RecastAttrEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEquipAttr_RareQualityAttrEntry(): EquipAttr_RareQualityAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttr_RareQualityAttrEntry: MessageFns<EquipAttr_RareQualityAttrEntry> = {
  encode(message: EquipAttr_RareQualityAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttr_RareQualityAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttr_RareQualityAttrEntry();
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

  fromJSON(object: any): EquipAttr_RareQualityAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttr_RareQualityAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttr_RareQualityAttrEntry>, I>>(base?: I): EquipAttr_RareQualityAttrEntry {
    return EquipAttr_RareQualityAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttr_RareQualityAttrEntry>, I>>(
    object: I,
  ): EquipAttr_RareQualityAttrEntry {
    const message = createBaseEquipAttr_RareQualityAttrEntry();
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
