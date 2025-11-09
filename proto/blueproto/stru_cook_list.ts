/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CookBook } from "./stru_cook_book";

export const protobufPackage = "zproto";

export interface CookList {
  bookData: { [key: number]: CookBook };
}

export interface CookList_BookDataEntry {
  key: number;
  value: CookBook | undefined;
}

function createBaseCookList(): CookList {
  return { bookData: {} };
}

export const CookList: MessageFns<CookList> = {
  encode(message: CookList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.bookData).forEach(([key, value]) => {
      CookList_BookDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CookList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCookList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = CookList_BookDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.bookData[entry1.key] = entry1.value;
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

  fromJSON(object: any): CookList {
    return {
      bookData: isObject(object.bookData)
        ? Object.entries(object.bookData).reduce<{ [key: number]: CookBook }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CookBook.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CookList): unknown {
    const obj: any = {};
    if (message.bookData) {
      const entries = Object.entries(message.bookData);
      if (entries.length > 0) {
        obj.bookData = {};
        entries.forEach(([k, v]) => {
          obj.bookData[k] = CookBook.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CookList>, I>>(base?: I): CookList {
    return CookList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CookList>, I>>(object: I): CookList {
    const message = createBaseCookList();
    message.bookData = Object.entries(object.bookData ?? {}).reduce<{ [key: number]: CookBook }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = CookBook.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseCookList_BookDataEntry(): CookList_BookDataEntry {
  return { key: 0, value: undefined };
}

export const CookList_BookDataEntry: MessageFns<CookList_BookDataEntry> = {
  encode(message: CookList_BookDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      CookBook.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CookList_BookDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCookList_BookDataEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = CookBook.decode(reader, reader.uint32());
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

  fromJSON(object: any): CookList_BookDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CookBook.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CookList_BookDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CookBook.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CookList_BookDataEntry>, I>>(base?: I): CookList_BookDataEntry {
    return CookList_BookDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CookList_BookDataEntry>, I>>(object: I): CookList_BookDataEntry {
    const message = createBaseCookList_BookDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CookBook.fromPartial(object.value)
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
