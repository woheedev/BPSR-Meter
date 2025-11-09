/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface EquipAttrSet {
  basicAttr: { [key: number]: number };
  advanceAttr: { [key: number]: number };
  recastAttr: { [key: number]: number };
  rareQualityAttr: { [key: number]: number };
}

export interface EquipAttrSet_BasicAttrEntry {
  key: number;
  value: number;
}

export interface EquipAttrSet_AdvanceAttrEntry {
  key: number;
  value: number;
}

export interface EquipAttrSet_RecastAttrEntry {
  key: number;
  value: number;
}

export interface EquipAttrSet_RareQualityAttrEntry {
  key: number;
  value: number;
}

function createBaseEquipAttrSet(): EquipAttrSet {
  return { basicAttr: {}, advanceAttr: {}, recastAttr: {}, rareQualityAttr: {} };
}

export const EquipAttrSet: MessageFns<EquipAttrSet> = {
  encode(message: EquipAttrSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.basicAttr).forEach(([key, value]) => {
      EquipAttrSet_BasicAttrEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.advanceAttr).forEach(([key, value]) => {
      EquipAttrSet_AdvanceAttrEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.recastAttr).forEach(([key, value]) => {
      EquipAttrSet_RecastAttrEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    Object.entries(message.rareQualityAttr).forEach(([key, value]) => {
      EquipAttrSet_RareQualityAttrEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttrSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttrSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = EquipAttrSet_BasicAttrEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.basicAttr[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = EquipAttrSet_AdvanceAttrEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.advanceAttr[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = EquipAttrSet_RecastAttrEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.recastAttr[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = EquipAttrSet_RareQualityAttrEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.rareQualityAttr[entry4.key] = entry4.value;
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

  fromJSON(object: any): EquipAttrSet {
    return {
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
      rareQualityAttr: isObject(object.rareQualityAttr)
        ? Object.entries(object.rareQualityAttr).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: EquipAttrSet): unknown {
    const obj: any = {};
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
    if (message.rareQualityAttr) {
      const entries = Object.entries(message.rareQualityAttr);
      if (entries.length > 0) {
        obj.rareQualityAttr = {};
        entries.forEach(([k, v]) => {
          obj.rareQualityAttr[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttrSet>, I>>(base?: I): EquipAttrSet {
    return EquipAttrSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttrSet>, I>>(object: I): EquipAttrSet {
    const message = createBaseEquipAttrSet();
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
    message.rareQualityAttr = Object.entries(object.rareQualityAttr ?? {}).reduce<{ [key: number]: number }>(
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

function createBaseEquipAttrSet_BasicAttrEntry(): EquipAttrSet_BasicAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttrSet_BasicAttrEntry: MessageFns<EquipAttrSet_BasicAttrEntry> = {
  encode(message: EquipAttrSet_BasicAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttrSet_BasicAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttrSet_BasicAttrEntry();
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

  fromJSON(object: any): EquipAttrSet_BasicAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttrSet_BasicAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttrSet_BasicAttrEntry>, I>>(base?: I): EquipAttrSet_BasicAttrEntry {
    return EquipAttrSet_BasicAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttrSet_BasicAttrEntry>, I>>(object: I): EquipAttrSet_BasicAttrEntry {
    const message = createBaseEquipAttrSet_BasicAttrEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEquipAttrSet_AdvanceAttrEntry(): EquipAttrSet_AdvanceAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttrSet_AdvanceAttrEntry: MessageFns<EquipAttrSet_AdvanceAttrEntry> = {
  encode(message: EquipAttrSet_AdvanceAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttrSet_AdvanceAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttrSet_AdvanceAttrEntry();
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

  fromJSON(object: any): EquipAttrSet_AdvanceAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttrSet_AdvanceAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttrSet_AdvanceAttrEntry>, I>>(base?: I): EquipAttrSet_AdvanceAttrEntry {
    return EquipAttrSet_AdvanceAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttrSet_AdvanceAttrEntry>, I>>(
    object: I,
  ): EquipAttrSet_AdvanceAttrEntry {
    const message = createBaseEquipAttrSet_AdvanceAttrEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEquipAttrSet_RecastAttrEntry(): EquipAttrSet_RecastAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttrSet_RecastAttrEntry: MessageFns<EquipAttrSet_RecastAttrEntry> = {
  encode(message: EquipAttrSet_RecastAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttrSet_RecastAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttrSet_RecastAttrEntry();
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

  fromJSON(object: any): EquipAttrSet_RecastAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttrSet_RecastAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttrSet_RecastAttrEntry>, I>>(base?: I): EquipAttrSet_RecastAttrEntry {
    return EquipAttrSet_RecastAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttrSet_RecastAttrEntry>, I>>(object: I): EquipAttrSet_RecastAttrEntry {
    const message = createBaseEquipAttrSet_RecastAttrEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEquipAttrSet_RareQualityAttrEntry(): EquipAttrSet_RareQualityAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipAttrSet_RareQualityAttrEntry: MessageFns<EquipAttrSet_RareQualityAttrEntry> = {
  encode(message: EquipAttrSet_RareQualityAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipAttrSet_RareQualityAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipAttrSet_RareQualityAttrEntry();
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

  fromJSON(object: any): EquipAttrSet_RareQualityAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipAttrSet_RareQualityAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipAttrSet_RareQualityAttrEntry>, I>>(
    base?: I,
  ): EquipAttrSet_RareQualityAttrEntry {
    return EquipAttrSet_RareQualityAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipAttrSet_RareQualityAttrEntry>, I>>(
    object: I,
  ): EquipAttrSet_RareQualityAttrEntry {
    const message = createBaseEquipAttrSet_RareQualityAttrEntry();
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
