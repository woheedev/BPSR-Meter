/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ModInfo } from "./stru_mod_info";

export const protobufPackage = "zproto";

export interface Mod {
  modSlots: { [key: number]: Long };
  modInfos: Map<Long, ModInfo>;
}

export interface Mod_ModSlotsEntry {
  key: number;
  value: Long;
}

export interface Mod_ModInfosEntry {
  key: Long;
  value: ModInfo | undefined;
}

function createBaseMod(): Mod {
  return { modSlots: {}, modInfos: new Map() };
}

export const Mod: MessageFns<Mod> = {
  encode(message: Mod, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.modSlots).forEach(([key, value]) => {
      Mod_ModSlotsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    message.modInfos.forEach((value, key) => {
      Mod_ModInfosEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Mod {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = Mod_ModSlotsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.modSlots[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = Mod_ModInfosEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.modInfos.set(entry2.key, entry2.value);
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

  fromJSON(object: any): Mod {
    return {
      modSlots: isObject(object.modSlots)
        ? Object.entries(object.modSlots).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
      modInfos: isObject(object.modInfos)
        ? Object.entries(object.modInfos).reduce<Map<Long, ModInfo>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), ModInfo.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: Mod): unknown {
    const obj: any = {};
    if (message.modSlots) {
      const entries = Object.entries(message.modSlots);
      if (entries.length > 0) {
        obj.modSlots = {};
        entries.forEach(([k, v]) => {
          obj.modSlots[k] = v.toString();
        });
      }
    }
    if (message.modInfos?.size) {
      obj.modInfos = {};
      message.modInfos.forEach((v, k) => {
        obj.modInfos[longToNumber(k)] = ModInfo.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Mod>, I>>(base?: I): Mod {
    return Mod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Mod>, I>>(object: I): Mod {
    const message = createBaseMod();
    message.modSlots = Object.entries(object.modSlots ?? {}).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Long.fromValue(value);
      }
      return acc;
    }, {});
    message.modInfos = (() => {
      const m = new Map();
      (object.modInfos as Map<Long, ModInfo> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, ModInfo.fromPartial(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseMod_ModSlotsEntry(): Mod_ModSlotsEntry {
  return { key: 0, value: Long.ZERO };
}

export const Mod_ModSlotsEntry: MessageFns<Mod_ModSlotsEntry> = {
  encode(message: Mod_ModSlotsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Mod_ModSlotsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMod_ModSlotsEntry();
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

          message.value = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): Mod_ModSlotsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: Mod_ModSlotsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Mod_ModSlotsEntry>, I>>(base?: I): Mod_ModSlotsEntry {
    return Mod_ModSlotsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Mod_ModSlotsEntry>, I>>(object: I): Mod_ModSlotsEntry {
    const message = createBaseMod_ModSlotsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  },
};

function createBaseMod_ModInfosEntry(): Mod_ModInfosEntry {
  return { key: Long.ZERO, value: undefined };
}

export const Mod_ModInfosEntry: MessageFns<Mod_ModInfosEntry> = {
  encode(message: Mod_ModInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      ModInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Mod_ModInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMod_ModInfosEntry();
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

          message.value = ModInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): Mod_ModInfosEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? ModInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Mod_ModInfosEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = ModInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Mod_ModInfosEntry>, I>>(base?: I): Mod_ModInfosEntry {
    return Mod_ModInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Mod_ModInfosEntry>, I>>(object: I): Mod_ModInfosEntry {
    const message = createBaseMod_ModInfosEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? ModInfo.fromPartial(object.value)
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
