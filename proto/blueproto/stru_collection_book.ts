/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface CollectionBook {
  modBookMap: { [key: number]: boolean };
}

export interface CollectionBook_ModBookMapEntry {
  key: number;
  value: boolean;
}

function createBaseCollectionBook(): CollectionBook {
  return { modBookMap: {} };
}

export const CollectionBook: MessageFns<CollectionBook> = {
  encode(message: CollectionBook, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.modBookMap).forEach(([key, value]) => {
      CollectionBook_ModBookMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CollectionBook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = CollectionBook_ModBookMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.modBookMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): CollectionBook {
    return {
      modBookMap: isObject(object.modBookMap)
        ? Object.entries(object.modBookMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CollectionBook): unknown {
    const obj: any = {};
    if (message.modBookMap) {
      const entries = Object.entries(message.modBookMap);
      if (entries.length > 0) {
        obj.modBookMap = {};
        entries.forEach(([k, v]) => {
          obj.modBookMap[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectionBook>, I>>(base?: I): CollectionBook {
    return CollectionBook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollectionBook>, I>>(object: I): CollectionBook {
    const message = createBaseCollectionBook();
    message.modBookMap = Object.entries(object.modBookMap ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseCollectionBook_ModBookMapEntry(): CollectionBook_ModBookMapEntry {
  return { key: 0, value: false };
}

export const CollectionBook_ModBookMapEntry: MessageFns<CollectionBook_ModBookMapEntry> = {
  encode(message: CollectionBook_ModBookMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CollectionBook_ModBookMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionBook_ModBookMapEntry();
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

          message.value = reader.bool();
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

  fromJSON(object: any): CollectionBook_ModBookMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: CollectionBook_ModBookMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectionBook_ModBookMapEntry>, I>>(base?: I): CollectionBook_ModBookMapEntry {
    return CollectionBook_ModBookMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollectionBook_ModBookMapEntry>, I>>(
    object: I,
  ): CollectionBook_ModBookMapEntry {
    const message = createBaseCollectionBook_ModBookMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
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
