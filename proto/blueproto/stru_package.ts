/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Item } from "./stru_item";

export const protobufPackage = "zproto";

export interface Package {
  type: number;
  maxCapacity: number;
  itemCd: { [key: number]: Long };
  items: Map<Long, Item>;
  publicCd: Long;
  changeVersion: number;
}

export interface Package_ItemCdEntry {
  key: number;
  value: Long;
}

export interface Package_ItemsEntry {
  key: Long;
  value: Item | undefined;
}

function createBasePackage(): Package {
  return { type: 0, maxCapacity: 0, itemCd: {}, items: new Map(), publicCd: Long.ZERO, changeVersion: 0 };
}

export const Package: MessageFns<Package> = {
  encode(message: Package, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.maxCapacity !== 0) {
      writer.uint32(16).int32(message.maxCapacity);
    }
    Object.entries(message.itemCd).forEach(([key, value]) => {
      Package_ItemCdEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    message.items.forEach((value, key) => {
      Package_ItemsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    if (!message.publicCd.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.publicCd.toString());
    }
    if (message.changeVersion !== 0) {
      writer.uint32(48).int32(message.changeVersion);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Package {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.maxCapacity = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = Package_ItemCdEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.itemCd[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = Package_ItemsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.items.set(entry4.key, entry4.value);
          }
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.publicCd = Long.fromString(reader.int64().toString());
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.changeVersion = reader.int32();
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

  fromJSON(object: any): Package {
    return {
      type: isSet(object.type) ? globalThis.Number(object.type) : 0,
      maxCapacity: isSet(object.maxCapacity) ? globalThis.Number(object.maxCapacity) : 0,
      itemCd: isObject(object.itemCd)
        ? Object.entries(object.itemCd).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
      items: isObject(object.items)
        ? Object.entries(object.items).reduce<Map<Long, Item>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Item.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      publicCd: isSet(object.publicCd) ? Long.fromValue(object.publicCd) : Long.ZERO,
      changeVersion: isSet(object.changeVersion) ? globalThis.Number(object.changeVersion) : 0,
    };
  },

  toJSON(message: Package): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    if (message.maxCapacity !== 0) {
      obj.maxCapacity = Math.round(message.maxCapacity);
    }
    if (message.itemCd) {
      const entries = Object.entries(message.itemCd);
      if (entries.length > 0) {
        obj.itemCd = {};
        entries.forEach(([k, v]) => {
          obj.itemCd[k] = v.toString();
        });
      }
    }
    if (message.items?.size) {
      obj.items = {};
      message.items.forEach((v, k) => {
        obj.items[longToNumber(k)] = Item.toJSON(v);
      });
    }
    if (!message.publicCd.equals(Long.ZERO)) {
      obj.publicCd = (message.publicCd || Long.ZERO).toString();
    }
    if (message.changeVersion !== 0) {
      obj.changeVersion = Math.round(message.changeVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Package>, I>>(base?: I): Package {
    return Package.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Package>, I>>(object: I): Package {
    const message = createBasePackage();
    message.type = object.type ?? 0;
    message.maxCapacity = object.maxCapacity ?? 0;
    message.itemCd = Object.entries(object.itemCd ?? {}).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Long.fromValue(value);
      }
      return acc;
    }, {});
    message.items = (() => {
      const m = new Map();
      (object.items as Map<Long, Item> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Item.fromPartial(value));
        }
      });
      return m;
    })();
    message.publicCd = (object.publicCd !== undefined && object.publicCd !== null)
      ? Long.fromValue(object.publicCd)
      : Long.ZERO;
    message.changeVersion = object.changeVersion ?? 0;
    return message;
  },
};

function createBasePackage_ItemCdEntry(): Package_ItemCdEntry {
  return { key: 0, value: Long.ZERO };
}

export const Package_ItemCdEntry: MessageFns<Package_ItemCdEntry> = {
  encode(message: Package_ItemCdEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Package_ItemCdEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage_ItemCdEntry();
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

  fromJSON(object: any): Package_ItemCdEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: Package_ItemCdEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Package_ItemCdEntry>, I>>(base?: I): Package_ItemCdEntry {
    return Package_ItemCdEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Package_ItemCdEntry>, I>>(object: I): Package_ItemCdEntry {
    const message = createBasePackage_ItemCdEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  },
};

function createBasePackage_ItemsEntry(): Package_ItemsEntry {
  return { key: Long.ZERO, value: undefined };
}

export const Package_ItemsEntry: MessageFns<Package_ItemsEntry> = {
  encode(message: Package_ItemsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      Item.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Package_ItemsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage_ItemsEntry();
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

          message.value = Item.decode(reader, reader.uint32());
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

  fromJSON(object: any): Package_ItemsEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Item.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Package_ItemsEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = Item.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Package_ItemsEntry>, I>>(base?: I): Package_ItemsEntry {
    return Package_ItemsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Package_ItemsEntry>, I>>(object: I): Package_ItemsEntry {
    const message = createBasePackage_ItemsEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null) ? Item.fromPartial(object.value) : undefined;
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
