/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Package } from "./stru_package";

export const protobufPackage = "zproto";

export interface ItemPackage {
  packages: { [key: number]: Package };
  unlockItems: { [key: number]: number };
  quickBar: number;
  itemUuid: number;
  useGroupCd: { [key: number]: Long };
}

export interface ItemPackage_PackagesEntry {
  key: number;
  value: Package | undefined;
}

export interface ItemPackage_UnlockItemsEntry {
  key: number;
  value: number;
}

export interface ItemPackage_UseGroupCdEntry {
  key: number;
  value: Long;
}

function createBaseItemPackage(): ItemPackage {
  return { packages: {}, unlockItems: {}, quickBar: 0, itemUuid: 0, useGroupCd: {} };
}

export const ItemPackage: MessageFns<ItemPackage> = {
  encode(message: ItemPackage, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.packages).forEach(([key, value]) => {
      ItemPackage_PackagesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.unlockItems).forEach(([key, value]) => {
      ItemPackage_UnlockItemsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.quickBar !== 0) {
      writer.uint32(24).int32(message.quickBar);
    }
    if (message.itemUuid !== 0) {
      writer.uint32(32).int32(message.itemUuid);
    }
    Object.entries(message.useGroupCd).forEach(([key, value]) => {
      ItemPackage_UseGroupCdEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ItemPackage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemPackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ItemPackage_PackagesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.packages[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = ItemPackage_UnlockItemsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.unlockItems[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.quickBar = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.itemUuid = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = ItemPackage_UseGroupCdEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.useGroupCd[entry5.key] = entry5.value;
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

  fromJSON(object: any): ItemPackage {
    return {
      packages: isObject(object.packages)
        ? Object.entries(object.packages).reduce<{ [key: number]: Package }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Package.fromJSON(value);
          return acc;
        }, {})
        : {},
      unlockItems: isObject(object.unlockItems)
        ? Object.entries(object.unlockItems).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      quickBar: isSet(object.quickBar) ? globalThis.Number(object.quickBar) : 0,
      itemUuid: isSet(object.itemUuid) ? globalThis.Number(object.itemUuid) : 0,
      useGroupCd: isObject(object.useGroupCd)
        ? Object.entries(object.useGroupCd).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ItemPackage): unknown {
    const obj: any = {};
    if (message.packages) {
      const entries = Object.entries(message.packages);
      if (entries.length > 0) {
        obj.packages = {};
        entries.forEach(([k, v]) => {
          obj.packages[k] = Package.toJSON(v);
        });
      }
    }
    if (message.unlockItems) {
      const entries = Object.entries(message.unlockItems);
      if (entries.length > 0) {
        obj.unlockItems = {};
        entries.forEach(([k, v]) => {
          obj.unlockItems[k] = Math.round(v);
        });
      }
    }
    if (message.quickBar !== 0) {
      obj.quickBar = Math.round(message.quickBar);
    }
    if (message.itemUuid !== 0) {
      obj.itemUuid = Math.round(message.itemUuid);
    }
    if (message.useGroupCd) {
      const entries = Object.entries(message.useGroupCd);
      if (entries.length > 0) {
        obj.useGroupCd = {};
        entries.forEach(([k, v]) => {
          obj.useGroupCd[k] = v.toString();
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemPackage>, I>>(base?: I): ItemPackage {
    return ItemPackage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemPackage>, I>>(object: I): ItemPackage {
    const message = createBaseItemPackage();
    message.packages = Object.entries(object.packages ?? {}).reduce<{ [key: number]: Package }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Package.fromPartial(value);
      }
      return acc;
    }, {});
    message.unlockItems = Object.entries(object.unlockItems ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.quickBar = object.quickBar ?? 0;
    message.itemUuid = object.itemUuid ?? 0;
    message.useGroupCd = Object.entries(object.useGroupCd ?? {}).reduce<{ [key: number]: Long }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = Long.fromValue(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseItemPackage_PackagesEntry(): ItemPackage_PackagesEntry {
  return { key: 0, value: undefined };
}

export const ItemPackage_PackagesEntry: MessageFns<ItemPackage_PackagesEntry> = {
  encode(message: ItemPackage_PackagesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      Package.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ItemPackage_PackagesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemPackage_PackagesEntry();
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

          message.value = Package.decode(reader, reader.uint32());
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

  fromJSON(object: any): ItemPackage_PackagesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Package.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ItemPackage_PackagesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = Package.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemPackage_PackagesEntry>, I>>(base?: I): ItemPackage_PackagesEntry {
    return ItemPackage_PackagesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemPackage_PackagesEntry>, I>>(object: I): ItemPackage_PackagesEntry {
    const message = createBaseItemPackage_PackagesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? Package.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseItemPackage_UnlockItemsEntry(): ItemPackage_UnlockItemsEntry {
  return { key: 0, value: 0 };
}

export const ItemPackage_UnlockItemsEntry: MessageFns<ItemPackage_UnlockItemsEntry> = {
  encode(message: ItemPackage_UnlockItemsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ItemPackage_UnlockItemsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemPackage_UnlockItemsEntry();
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

  fromJSON(object: any): ItemPackage_UnlockItemsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: ItemPackage_UnlockItemsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemPackage_UnlockItemsEntry>, I>>(base?: I): ItemPackage_UnlockItemsEntry {
    return ItemPackage_UnlockItemsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemPackage_UnlockItemsEntry>, I>>(object: I): ItemPackage_UnlockItemsEntry {
    const message = createBaseItemPackage_UnlockItemsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseItemPackage_UseGroupCdEntry(): ItemPackage_UseGroupCdEntry {
  return { key: 0, value: Long.ZERO };
}

export const ItemPackage_UseGroupCdEntry: MessageFns<ItemPackage_UseGroupCdEntry> = {
  encode(message: ItemPackage_UseGroupCdEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ItemPackage_UseGroupCdEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemPackage_UseGroupCdEntry();
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

  fromJSON(object: any): ItemPackage_UseGroupCdEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: ItemPackage_UseGroupCdEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ItemPackage_UseGroupCdEntry>, I>>(base?: I): ItemPackage_UseGroupCdEntry {
    return ItemPackage_UseGroupCdEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ItemPackage_UseGroupCdEntry>, I>>(object: I): ItemPackage_UseGroupCdEntry {
    const message = createBaseItemPackage_UseGroupCdEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
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
