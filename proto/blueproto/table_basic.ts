/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface mlstring {
  id: Long;
}

export interface mlstringArray {
  array: mlstring[];
}

export interface mlstringTable {
  array: mlstringArray[];
}

export interface stringArray {
  array: string[];
}

export interface stringTable {
  array: stringArray[];
}

export interface intArray {
  array: number[];
}

export interface int64Array {
  array: Long[];
}

export interface intTable {
  array: intArray[];
}

export interface int64Table {
  array: int64Array[];
}

export interface numberArray {
  array: number[];
}

export interface numberTable {
  array: numberArray[];
}

export interface stringIndex {
  index: Map<Long, string>;
}

export interface stringIndex_IndexEntry {
  key: Long;
  value: string;
}

export interface vector2 {
  x: number;
  y: number;
}

export interface vector3 {
  x: number;
  y: number;
  z: number;
}

export interface vector2Array {
  array: vector2[];
}

export interface vector3Array {
  array: vector3[];
}

export interface vector2Table {
  array: vector2Array[];
}

export interface vector3Table {
  array: vector3Array[];
}

function createBasemlstring(): mlstring {
  return { id: Long.ZERO };
}

export const mlstring: MessageFns<mlstring> = {
  encode(message: mlstring, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.id.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.id.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): mlstring {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasemlstring();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): mlstring {
    return { id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO };
  },

  toJSON(message: mlstring): unknown {
    const obj: any = {};
    if (!message.id.equals(Long.ZERO)) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<mlstring>, I>>(base?: I): mlstring {
    return mlstring.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<mlstring>, I>>(object: I): mlstring {
    const message = createBasemlstring();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    return message;
  },
};

function createBasemlstringArray(): mlstringArray {
  return { array: [] };
}

export const mlstringArray: MessageFns<mlstringArray> = {
  encode(message: mlstringArray, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      mlstring.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): mlstringArray {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasemlstringArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(mlstring.decode(reader, reader.uint32()));
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

  fromJSON(object: any): mlstringArray {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => mlstring.fromJSON(e)) : [] };
  },

  toJSON(message: mlstringArray): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => mlstring.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<mlstringArray>, I>>(base?: I): mlstringArray {
    return mlstringArray.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<mlstringArray>, I>>(object: I): mlstringArray {
    const message = createBasemlstringArray();
    message.array = object.array?.map((e) => mlstring.fromPartial(e)) || [];
    return message;
  },
};

function createBasemlstringTable(): mlstringTable {
  return { array: [] };
}

export const mlstringTable: MessageFns<mlstringTable> = {
  encode(message: mlstringTable, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      mlstringArray.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): mlstringTable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasemlstringTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(mlstringArray.decode(reader, reader.uint32()));
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

  fromJSON(object: any): mlstringTable {
    return {
      array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => mlstringArray.fromJSON(e)) : [],
    };
  },

  toJSON(message: mlstringTable): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => mlstringArray.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<mlstringTable>, I>>(base?: I): mlstringTable {
    return mlstringTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<mlstringTable>, I>>(object: I): mlstringTable {
    const message = createBasemlstringTable();
    message.array = object.array?.map((e) => mlstringArray.fromPartial(e)) || [];
    return message;
  },
};

function createBasestringArray(): stringArray {
  return { array: [] };
}

export const stringArray: MessageFns<stringArray> = {
  encode(message: stringArray, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): stringArray {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestringArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(reader.string());
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

  fromJSON(object: any): stringArray {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => globalThis.String(e)) : [] };
  },

  toJSON(message: stringArray): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stringArray>, I>>(base?: I): stringArray {
    return stringArray.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stringArray>, I>>(object: I): stringArray {
    const message = createBasestringArray();
    message.array = object.array?.map((e) => e) || [];
    return message;
  },
};

function createBasestringTable(): stringTable {
  return { array: [] };
}

export const stringTable: MessageFns<stringTable> = {
  encode(message: stringTable, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      stringArray.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): stringTable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestringTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(stringArray.decode(reader, reader.uint32()));
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

  fromJSON(object: any): stringTable {
    return {
      array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => stringArray.fromJSON(e)) : [],
    };
  },

  toJSON(message: stringTable): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => stringArray.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stringTable>, I>>(base?: I): stringTable {
    return stringTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stringTable>, I>>(object: I): stringTable {
    const message = createBasestringTable();
    message.array = object.array?.map((e) => stringArray.fromPartial(e)) || [];
    return message;
  },
};

function createBaseintArray(): intArray {
  return { array: [] };
}

export const intArray: MessageFns<intArray> = {
  encode(message: intArray, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.array) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): intArray {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseintArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.array.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.array.push(reader.int32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): intArray {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: intArray): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<intArray>, I>>(base?: I): intArray {
    return intArray.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<intArray>, I>>(object: I): intArray {
    const message = createBaseintArray();
    message.array = object.array?.map((e) => e) || [];
    return message;
  },
};

function createBaseint64Array(): int64Array {
  return { array: [] };
}

export const int64Array: MessageFns<int64Array> = {
  encode(message: int64Array, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.array) {
      writer.int64(v.toString());
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): int64Array {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseint64Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.array.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.array.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): int64Array {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => Long.fromValue(e)) : [] };
  },

  toJSON(message: int64Array): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => (e || Long.ZERO).toString());
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<int64Array>, I>>(base?: I): int64Array {
    return int64Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<int64Array>, I>>(object: I): int64Array {
    const message = createBaseint64Array();
    message.array = object.array?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseintTable(): intTable {
  return { array: [] };
}

export const intTable: MessageFns<intTable> = {
  encode(message: intTable, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      intArray.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): intTable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseintTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(intArray.decode(reader, reader.uint32()));
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

  fromJSON(object: any): intTable {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => intArray.fromJSON(e)) : [] };
  },

  toJSON(message: intTable): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => intArray.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<intTable>, I>>(base?: I): intTable {
    return intTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<intTable>, I>>(object: I): intTable {
    const message = createBaseintTable();
    message.array = object.array?.map((e) => intArray.fromPartial(e)) || [];
    return message;
  },
};

function createBaseint64Table(): int64Table {
  return { array: [] };
}

export const int64Table: MessageFns<int64Table> = {
  encode(message: int64Table, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      int64Array.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): int64Table {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseint64Table();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(int64Array.decode(reader, reader.uint32()));
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

  fromJSON(object: any): int64Table {
    return {
      array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => int64Array.fromJSON(e)) : [],
    };
  },

  toJSON(message: int64Table): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => int64Array.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<int64Table>, I>>(base?: I): int64Table {
    return int64Table.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<int64Table>, I>>(object: I): int64Table {
    const message = createBaseint64Table();
    message.array = object.array?.map((e) => int64Array.fromPartial(e)) || [];
    return message;
  },
};

function createBasenumberArray(): numberArray {
  return { array: [] };
}

export const numberArray: MessageFns<numberArray> = {
  encode(message: numberArray, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.array) {
      writer.float(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): numberArray {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasenumberArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 13) {
            message.array.push(reader.float());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.array.push(reader.float());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): numberArray {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: numberArray): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<numberArray>, I>>(base?: I): numberArray {
    return numberArray.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<numberArray>, I>>(object: I): numberArray {
    const message = createBasenumberArray();
    message.array = object.array?.map((e) => e) || [];
    return message;
  },
};

function createBasenumberTable(): numberTable {
  return { array: [] };
}

export const numberTable: MessageFns<numberTable> = {
  encode(message: numberTable, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      numberArray.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): numberTable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasenumberTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(numberArray.decode(reader, reader.uint32()));
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

  fromJSON(object: any): numberTable {
    return {
      array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => numberArray.fromJSON(e)) : [],
    };
  },

  toJSON(message: numberTable): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => numberArray.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<numberTable>, I>>(base?: I): numberTable {
    return numberTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<numberTable>, I>>(object: I): numberTable {
    const message = createBasenumberTable();
    message.array = object.array?.map((e) => numberArray.fromPartial(e)) || [];
    return message;
  },
};

function createBasestringIndex(): stringIndex {
  return { index: new Map() };
}

export const stringIndex: MessageFns<stringIndex> = {
  encode(message: stringIndex, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    message.index.forEach((value, key) => {
      stringIndex_IndexEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): stringIndex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestringIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = stringIndex_IndexEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.index.set(entry1.key, entry1.value);
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

  fromJSON(object: any): stringIndex {
    return {
      index: isObject(object.index)
        ? Object.entries(object.index).reduce<Map<Long, string>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), String(value));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: stringIndex): unknown {
    const obj: any = {};
    if (message.index?.size) {
      obj.index = {};
      message.index.forEach((v, k) => {
        obj.index[longToNumber(k)] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stringIndex>, I>>(base?: I): stringIndex {
    return stringIndex.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stringIndex>, I>>(object: I): stringIndex {
    const message = createBasestringIndex();
    message.index = (() => {
      const m = new Map();
      (object.index as Map<Long, string> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.String(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBasestringIndex_IndexEntry(): stringIndex_IndexEntry {
  return { key: Long.ZERO, value: "" };
}

export const stringIndex_IndexEntry: MessageFns<stringIndex_IndexEntry> = {
  encode(message: stringIndex_IndexEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): stringIndex_IndexEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasestringIndex_IndexEntry();
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

          message.value = reader.string();
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

  fromJSON(object: any): stringIndex_IndexEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: stringIndex_IndexEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<stringIndex_IndexEntry>, I>>(base?: I): stringIndex_IndexEntry {
    return stringIndex_IndexEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<stringIndex_IndexEntry>, I>>(object: I): stringIndex_IndexEntry {
    const message = createBasestringIndex_IndexEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value ?? "";
    return message;
  },
};

function createBasevector2(): vector2 {
  return { x: 0, y: 0 };
}

export const vector2: MessageFns<vector2> = {
  encode(message: vector2, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): vector2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasevector2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        }
        case 2: {
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
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

  fromJSON(object: any): vector2 {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: vector2): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<vector2>, I>>(base?: I): vector2 {
    return vector2.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<vector2>, I>>(object: I): vector2 {
    const message = createBasevector2();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBasevector3(): vector3 {
  return { x: 0, y: 0, z: 0 };
}

export const vector3: MessageFns<vector3> = {
  encode(message: vector3, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): vector3 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasevector3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 13) {
            break;
          }

          message.x = reader.float();
          continue;
        }
        case 2: {
          if (tag !== 21) {
            break;
          }

          message.y = reader.float();
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.z = reader.float();
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

  fromJSON(object: any): vector3 {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      z: isSet(object.z) ? globalThis.Number(object.z) : 0,
    };
  },

  toJSON(message: vector3): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== 0) {
      obj.z = message.z;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<vector3>, I>>(base?: I): vector3 {
    return vector3.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<vector3>, I>>(object: I): vector3 {
    const message = createBasevector3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBasevector2Array(): vector2Array {
  return { array: [] };
}

export const vector2Array: MessageFns<vector2Array> = {
  encode(message: vector2Array, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      vector2.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): vector2Array {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasevector2Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(vector2.decode(reader, reader.uint32()));
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

  fromJSON(object: any): vector2Array {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => vector2.fromJSON(e)) : [] };
  },

  toJSON(message: vector2Array): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => vector2.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<vector2Array>, I>>(base?: I): vector2Array {
    return vector2Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<vector2Array>, I>>(object: I): vector2Array {
    const message = createBasevector2Array();
    message.array = object.array?.map((e) => vector2.fromPartial(e)) || [];
    return message;
  },
};

function createBasevector3Array(): vector3Array {
  return { array: [] };
}

export const vector3Array: MessageFns<vector3Array> = {
  encode(message: vector3Array, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      vector3.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): vector3Array {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasevector3Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(vector3.decode(reader, reader.uint32()));
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

  fromJSON(object: any): vector3Array {
    return { array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => vector3.fromJSON(e)) : [] };
  },

  toJSON(message: vector3Array): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => vector3.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<vector3Array>, I>>(base?: I): vector3Array {
    return vector3Array.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<vector3Array>, I>>(object: I): vector3Array {
    const message = createBasevector3Array();
    message.array = object.array?.map((e) => vector3.fromPartial(e)) || [];
    return message;
  },
};

function createBasevector2Table(): vector2Table {
  return { array: [] };
}

export const vector2Table: MessageFns<vector2Table> = {
  encode(message: vector2Table, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      vector2Array.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): vector2Table {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasevector2Table();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(vector2Array.decode(reader, reader.uint32()));
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

  fromJSON(object: any): vector2Table {
    return {
      array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => vector2Array.fromJSON(e)) : [],
    };
  },

  toJSON(message: vector2Table): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => vector2Array.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<vector2Table>, I>>(base?: I): vector2Table {
    return vector2Table.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<vector2Table>, I>>(object: I): vector2Table {
    const message = createBasevector2Table();
    message.array = object.array?.map((e) => vector2Array.fromPartial(e)) || [];
    return message;
  },
};

function createBasevector3Table(): vector3Table {
  return { array: [] };
}

export const vector3Table: MessageFns<vector3Table> = {
  encode(message: vector3Table, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.array) {
      vector3Array.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): vector3Table {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasevector3Table();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.array.push(vector3Array.decode(reader, reader.uint32()));
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

  fromJSON(object: any): vector3Table {
    return {
      array: globalThis.Array.isArray(object?.array) ? object.array.map((e: any) => vector3Array.fromJSON(e)) : [],
    };
  },

  toJSON(message: vector3Table): unknown {
    const obj: any = {};
    if (message.array?.length) {
      obj.array = message.array.map((e) => vector3Array.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<vector3Table>, I>>(base?: I): vector3Table {
    return vector3Table.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<vector3Table>, I>>(object: I): vector3Table {
    const message = createBasevector3Table();
    message.array = object.array?.map((e) => vector3Array.fromPartial(e)) || [];
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
