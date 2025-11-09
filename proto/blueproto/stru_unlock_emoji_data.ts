/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UnlockEmojiData {
  unlockMap: { [key: number]: boolean };
}

export interface UnlockEmojiData_UnlockMapEntry {
  key: number;
  value: boolean;
}

function createBaseUnlockEmojiData(): UnlockEmojiData {
  return { unlockMap: {} };
}

export const UnlockEmojiData: MessageFns<UnlockEmojiData> = {
  encode(message: UnlockEmojiData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.unlockMap).forEach(([key, value]) => {
      UnlockEmojiData_UnlockMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnlockEmojiData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockEmojiData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = UnlockEmojiData_UnlockMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.unlockMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): UnlockEmojiData {
    return {
      unlockMap: isObject(object.unlockMap)
        ? Object.entries(object.unlockMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UnlockEmojiData): unknown {
    const obj: any = {};
    if (message.unlockMap) {
      const entries = Object.entries(message.unlockMap);
      if (entries.length > 0) {
        obj.unlockMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockMap[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnlockEmojiData>, I>>(base?: I): UnlockEmojiData {
    return UnlockEmojiData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnlockEmojiData>, I>>(object: I): UnlockEmojiData {
    const message = createBaseUnlockEmojiData();
    message.unlockMap = Object.entries(object.unlockMap ?? {}).reduce<{ [key: number]: boolean }>(
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

function createBaseUnlockEmojiData_UnlockMapEntry(): UnlockEmojiData_UnlockMapEntry {
  return { key: 0, value: false };
}

export const UnlockEmojiData_UnlockMapEntry: MessageFns<UnlockEmojiData_UnlockMapEntry> = {
  encode(message: UnlockEmojiData_UnlockMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnlockEmojiData_UnlockMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockEmojiData_UnlockMapEntry();
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

  fromJSON(object: any): UnlockEmojiData_UnlockMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: UnlockEmojiData_UnlockMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnlockEmojiData_UnlockMapEntry>, I>>(base?: I): UnlockEmojiData_UnlockMapEntry {
    return UnlockEmojiData_UnlockMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnlockEmojiData_UnlockMapEntry>, I>>(
    object: I,
  ): UnlockEmojiData_UnlockMapEntry {
    const message = createBaseUnlockEmojiData_UnlockMapEntry();
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
