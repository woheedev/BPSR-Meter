/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { HandBookStruct } from "./stru_hand_book_struct";

export const protobufPackage = "zproto";

export interface HandbookData {
  unlockNoteImportantRoleMap: { [key: number]: HandBookStruct };
  unlockNoteReadingBookMap: { [key: number]: HandBookStruct };
  unlockNoteDictionaryMap: { [key: number]: HandBookStruct };
  unlockNotePostCardMap: { [key: number]: HandBookStruct };
  unlockNoteMonthCardMap: { [key: number]: HandBookStruct };
}

export interface HandbookData_UnlockNoteImportantRoleMapEntry {
  key: number;
  value: HandBookStruct | undefined;
}

export interface HandbookData_UnlockNoteReadingBookMapEntry {
  key: number;
  value: HandBookStruct | undefined;
}

export interface HandbookData_UnlockNoteDictionaryMapEntry {
  key: number;
  value: HandBookStruct | undefined;
}

export interface HandbookData_UnlockNotePostCardMapEntry {
  key: number;
  value: HandBookStruct | undefined;
}

export interface HandbookData_UnlockNoteMonthCardMapEntry {
  key: number;
  value: HandBookStruct | undefined;
}

function createBaseHandbookData(): HandbookData {
  return {
    unlockNoteImportantRoleMap: {},
    unlockNoteReadingBookMap: {},
    unlockNoteDictionaryMap: {},
    unlockNotePostCardMap: {},
    unlockNoteMonthCardMap: {},
  };
}

export const HandbookData: MessageFns<HandbookData> = {
  encode(message: HandbookData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.unlockNoteImportantRoleMap).forEach(([key, value]) => {
      HandbookData_UnlockNoteImportantRoleMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.unlockNoteReadingBookMap).forEach(([key, value]) => {
      HandbookData_UnlockNoteReadingBookMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.unlockNoteDictionaryMap).forEach(([key, value]) => {
      HandbookData_UnlockNoteDictionaryMapEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    Object.entries(message.unlockNotePostCardMap).forEach(([key, value]) => {
      HandbookData_UnlockNotePostCardMapEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.unlockNoteMonthCardMap).forEach(([key, value]) => {
      HandbookData_UnlockNoteMonthCardMapEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HandbookData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandbookData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = HandbookData_UnlockNoteImportantRoleMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.unlockNoteImportantRoleMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = HandbookData_UnlockNoteReadingBookMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.unlockNoteReadingBookMap[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = HandbookData_UnlockNoteDictionaryMapEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.unlockNoteDictionaryMap[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = HandbookData_UnlockNotePostCardMapEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.unlockNotePostCardMap[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = HandbookData_UnlockNoteMonthCardMapEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.unlockNoteMonthCardMap[entry5.key] = entry5.value;
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

  fromJSON(object: any): HandbookData {
    return {
      unlockNoteImportantRoleMap: isObject(object.unlockNoteImportantRoleMap)
        ? Object.entries(object.unlockNoteImportantRoleMap).reduce<{ [key: number]: HandBookStruct }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = HandBookStruct.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      unlockNoteReadingBookMap: isObject(object.unlockNoteReadingBookMap)
        ? Object.entries(object.unlockNoteReadingBookMap).reduce<{ [key: number]: HandBookStruct }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = HandBookStruct.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      unlockNoteDictionaryMap: isObject(object.unlockNoteDictionaryMap)
        ? Object.entries(object.unlockNoteDictionaryMap).reduce<{ [key: number]: HandBookStruct }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = HandBookStruct.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      unlockNotePostCardMap: isObject(object.unlockNotePostCardMap)
        ? Object.entries(object.unlockNotePostCardMap).reduce<{ [key: number]: HandBookStruct }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = HandBookStruct.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      unlockNoteMonthCardMap: isObject(object.unlockNoteMonthCardMap)
        ? Object.entries(object.unlockNoteMonthCardMap).reduce<{ [key: number]: HandBookStruct }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = HandBookStruct.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: HandbookData): unknown {
    const obj: any = {};
    if (message.unlockNoteImportantRoleMap) {
      const entries = Object.entries(message.unlockNoteImportantRoleMap);
      if (entries.length > 0) {
        obj.unlockNoteImportantRoleMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockNoteImportantRoleMap[k] = HandBookStruct.toJSON(v);
        });
      }
    }
    if (message.unlockNoteReadingBookMap) {
      const entries = Object.entries(message.unlockNoteReadingBookMap);
      if (entries.length > 0) {
        obj.unlockNoteReadingBookMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockNoteReadingBookMap[k] = HandBookStruct.toJSON(v);
        });
      }
    }
    if (message.unlockNoteDictionaryMap) {
      const entries = Object.entries(message.unlockNoteDictionaryMap);
      if (entries.length > 0) {
        obj.unlockNoteDictionaryMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockNoteDictionaryMap[k] = HandBookStruct.toJSON(v);
        });
      }
    }
    if (message.unlockNotePostCardMap) {
      const entries = Object.entries(message.unlockNotePostCardMap);
      if (entries.length > 0) {
        obj.unlockNotePostCardMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockNotePostCardMap[k] = HandBookStruct.toJSON(v);
        });
      }
    }
    if (message.unlockNoteMonthCardMap) {
      const entries = Object.entries(message.unlockNoteMonthCardMap);
      if (entries.length > 0) {
        obj.unlockNoteMonthCardMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockNoteMonthCardMap[k] = HandBookStruct.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandbookData>, I>>(base?: I): HandbookData {
    return HandbookData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandbookData>, I>>(object: I): HandbookData {
    const message = createBaseHandbookData();
    message.unlockNoteImportantRoleMap = Object.entries(object.unlockNoteImportantRoleMap ?? {}).reduce<
      { [key: number]: HandBookStruct }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = HandBookStruct.fromPartial(value);
      }
      return acc;
    }, {});
    message.unlockNoteReadingBookMap = Object.entries(object.unlockNoteReadingBookMap ?? {}).reduce<
      { [key: number]: HandBookStruct }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = HandBookStruct.fromPartial(value);
      }
      return acc;
    }, {});
    message.unlockNoteDictionaryMap = Object.entries(object.unlockNoteDictionaryMap ?? {}).reduce<
      { [key: number]: HandBookStruct }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = HandBookStruct.fromPartial(value);
      }
      return acc;
    }, {});
    message.unlockNotePostCardMap = Object.entries(object.unlockNotePostCardMap ?? {}).reduce<
      { [key: number]: HandBookStruct }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = HandBookStruct.fromPartial(value);
      }
      return acc;
    }, {});
    message.unlockNoteMonthCardMap = Object.entries(object.unlockNoteMonthCardMap ?? {}).reduce<
      { [key: number]: HandBookStruct }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = HandBookStruct.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseHandbookData_UnlockNoteImportantRoleMapEntry(): HandbookData_UnlockNoteImportantRoleMapEntry {
  return { key: 0, value: undefined };
}

export const HandbookData_UnlockNoteImportantRoleMapEntry: MessageFns<HandbookData_UnlockNoteImportantRoleMapEntry> = {
  encode(
    message: HandbookData_UnlockNoteImportantRoleMapEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      HandBookStruct.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HandbookData_UnlockNoteImportantRoleMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandbookData_UnlockNoteImportantRoleMapEntry();
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

          message.value = HandBookStruct.decode(reader, reader.uint32());
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

  fromJSON(object: any): HandbookData_UnlockNoteImportantRoleMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? HandBookStruct.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: HandbookData_UnlockNoteImportantRoleMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = HandBookStruct.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandbookData_UnlockNoteImportantRoleMapEntry>, I>>(
    base?: I,
  ): HandbookData_UnlockNoteImportantRoleMapEntry {
    return HandbookData_UnlockNoteImportantRoleMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandbookData_UnlockNoteImportantRoleMapEntry>, I>>(
    object: I,
  ): HandbookData_UnlockNoteImportantRoleMapEntry {
    const message = createBaseHandbookData_UnlockNoteImportantRoleMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? HandBookStruct.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseHandbookData_UnlockNoteReadingBookMapEntry(): HandbookData_UnlockNoteReadingBookMapEntry {
  return { key: 0, value: undefined };
}

export const HandbookData_UnlockNoteReadingBookMapEntry: MessageFns<HandbookData_UnlockNoteReadingBookMapEntry> = {
  encode(message: HandbookData_UnlockNoteReadingBookMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      HandBookStruct.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HandbookData_UnlockNoteReadingBookMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandbookData_UnlockNoteReadingBookMapEntry();
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

          message.value = HandBookStruct.decode(reader, reader.uint32());
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

  fromJSON(object: any): HandbookData_UnlockNoteReadingBookMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? HandBookStruct.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: HandbookData_UnlockNoteReadingBookMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = HandBookStruct.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandbookData_UnlockNoteReadingBookMapEntry>, I>>(
    base?: I,
  ): HandbookData_UnlockNoteReadingBookMapEntry {
    return HandbookData_UnlockNoteReadingBookMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandbookData_UnlockNoteReadingBookMapEntry>, I>>(
    object: I,
  ): HandbookData_UnlockNoteReadingBookMapEntry {
    const message = createBaseHandbookData_UnlockNoteReadingBookMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? HandBookStruct.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseHandbookData_UnlockNoteDictionaryMapEntry(): HandbookData_UnlockNoteDictionaryMapEntry {
  return { key: 0, value: undefined };
}

export const HandbookData_UnlockNoteDictionaryMapEntry: MessageFns<HandbookData_UnlockNoteDictionaryMapEntry> = {
  encode(message: HandbookData_UnlockNoteDictionaryMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      HandBookStruct.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HandbookData_UnlockNoteDictionaryMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandbookData_UnlockNoteDictionaryMapEntry();
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

          message.value = HandBookStruct.decode(reader, reader.uint32());
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

  fromJSON(object: any): HandbookData_UnlockNoteDictionaryMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? HandBookStruct.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: HandbookData_UnlockNoteDictionaryMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = HandBookStruct.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandbookData_UnlockNoteDictionaryMapEntry>, I>>(
    base?: I,
  ): HandbookData_UnlockNoteDictionaryMapEntry {
    return HandbookData_UnlockNoteDictionaryMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandbookData_UnlockNoteDictionaryMapEntry>, I>>(
    object: I,
  ): HandbookData_UnlockNoteDictionaryMapEntry {
    const message = createBaseHandbookData_UnlockNoteDictionaryMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? HandBookStruct.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseHandbookData_UnlockNotePostCardMapEntry(): HandbookData_UnlockNotePostCardMapEntry {
  return { key: 0, value: undefined };
}

export const HandbookData_UnlockNotePostCardMapEntry: MessageFns<HandbookData_UnlockNotePostCardMapEntry> = {
  encode(message: HandbookData_UnlockNotePostCardMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      HandBookStruct.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HandbookData_UnlockNotePostCardMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandbookData_UnlockNotePostCardMapEntry();
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

          message.value = HandBookStruct.decode(reader, reader.uint32());
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

  fromJSON(object: any): HandbookData_UnlockNotePostCardMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? HandBookStruct.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: HandbookData_UnlockNotePostCardMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = HandBookStruct.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandbookData_UnlockNotePostCardMapEntry>, I>>(
    base?: I,
  ): HandbookData_UnlockNotePostCardMapEntry {
    return HandbookData_UnlockNotePostCardMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandbookData_UnlockNotePostCardMapEntry>, I>>(
    object: I,
  ): HandbookData_UnlockNotePostCardMapEntry {
    const message = createBaseHandbookData_UnlockNotePostCardMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? HandBookStruct.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseHandbookData_UnlockNoteMonthCardMapEntry(): HandbookData_UnlockNoteMonthCardMapEntry {
  return { key: 0, value: undefined };
}

export const HandbookData_UnlockNoteMonthCardMapEntry: MessageFns<HandbookData_UnlockNoteMonthCardMapEntry> = {
  encode(message: HandbookData_UnlockNoteMonthCardMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      HandBookStruct.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HandbookData_UnlockNoteMonthCardMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandbookData_UnlockNoteMonthCardMapEntry();
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

          message.value = HandBookStruct.decode(reader, reader.uint32());
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

  fromJSON(object: any): HandbookData_UnlockNoteMonthCardMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? HandBookStruct.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: HandbookData_UnlockNoteMonthCardMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = HandBookStruct.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HandbookData_UnlockNoteMonthCardMapEntry>, I>>(
    base?: I,
  ): HandbookData_UnlockNoteMonthCardMapEntry {
    return HandbookData_UnlockNoteMonthCardMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HandbookData_UnlockNoteMonthCardMapEntry>, I>>(
    object: I,
  ): HandbookData_UnlockNoteMonthCardMapEntry {
    const message = createBaseHandbookData_UnlockNoteMonthCardMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? HandBookStruct.fromPartial(object.value)
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
