/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { UnlockProficiency } from "./stru_unlock_proficiency";

export const protobufPackage = "zproto";

export interface LevelProficiency {
  usingProficiencyMap: { [key: number]: number };
  unlockProficiencyMap: { [key: number]: UnlockProficiency };
}

export interface LevelProficiency_UsingProficiencyMapEntry {
  key: number;
  value: number;
}

export interface LevelProficiency_UnlockProficiencyMapEntry {
  key: number;
  value: UnlockProficiency | undefined;
}

function createBaseLevelProficiency(): LevelProficiency {
  return { usingProficiencyMap: {}, unlockProficiencyMap: {} };
}

export const LevelProficiency: MessageFns<LevelProficiency> = {
  encode(message: LevelProficiency, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.usingProficiencyMap).forEach(([key, value]) => {
      LevelProficiency_UsingProficiencyMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.unlockProficiencyMap).forEach(([key, value]) => {
      LevelProficiency_UnlockProficiencyMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LevelProficiency {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelProficiency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = LevelProficiency_UsingProficiencyMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.usingProficiencyMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = LevelProficiency_UnlockProficiencyMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.unlockProficiencyMap[entry2.key] = entry2.value;
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

  fromJSON(object: any): LevelProficiency {
    return {
      usingProficiencyMap: isObject(object.usingProficiencyMap)
        ? Object.entries(object.usingProficiencyMap).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      unlockProficiencyMap: isObject(object.unlockProficiencyMap)
        ? Object.entries(object.unlockProficiencyMap).reduce<{ [key: number]: UnlockProficiency }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = UnlockProficiency.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: LevelProficiency): unknown {
    const obj: any = {};
    if (message.usingProficiencyMap) {
      const entries = Object.entries(message.usingProficiencyMap);
      if (entries.length > 0) {
        obj.usingProficiencyMap = {};
        entries.forEach(([k, v]) => {
          obj.usingProficiencyMap[k] = Math.round(v);
        });
      }
    }
    if (message.unlockProficiencyMap) {
      const entries = Object.entries(message.unlockProficiencyMap);
      if (entries.length > 0) {
        obj.unlockProficiencyMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockProficiencyMap[k] = UnlockProficiency.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LevelProficiency>, I>>(base?: I): LevelProficiency {
    return LevelProficiency.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LevelProficiency>, I>>(object: I): LevelProficiency {
    const message = createBaseLevelProficiency();
    message.usingProficiencyMap = Object.entries(object.usingProficiencyMap ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.unlockProficiencyMap = Object.entries(object.unlockProficiencyMap ?? {}).reduce<
      { [key: number]: UnlockProficiency }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = UnlockProficiency.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseLevelProficiency_UsingProficiencyMapEntry(): LevelProficiency_UsingProficiencyMapEntry {
  return { key: 0, value: 0 };
}

export const LevelProficiency_UsingProficiencyMapEntry: MessageFns<LevelProficiency_UsingProficiencyMapEntry> = {
  encode(message: LevelProficiency_UsingProficiencyMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LevelProficiency_UsingProficiencyMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelProficiency_UsingProficiencyMapEntry();
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

  fromJSON(object: any): LevelProficiency_UsingProficiencyMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: LevelProficiency_UsingProficiencyMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LevelProficiency_UsingProficiencyMapEntry>, I>>(
    base?: I,
  ): LevelProficiency_UsingProficiencyMapEntry {
    return LevelProficiency_UsingProficiencyMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LevelProficiency_UsingProficiencyMapEntry>, I>>(
    object: I,
  ): LevelProficiency_UsingProficiencyMapEntry {
    const message = createBaseLevelProficiency_UsingProficiencyMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseLevelProficiency_UnlockProficiencyMapEntry(): LevelProficiency_UnlockProficiencyMapEntry {
  return { key: 0, value: undefined };
}

export const LevelProficiency_UnlockProficiencyMapEntry: MessageFns<LevelProficiency_UnlockProficiencyMapEntry> = {
  encode(message: LevelProficiency_UnlockProficiencyMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      UnlockProficiency.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LevelProficiency_UnlockProficiencyMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelProficiency_UnlockProficiencyMapEntry();
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

          message.value = UnlockProficiency.decode(reader, reader.uint32());
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

  fromJSON(object: any): LevelProficiency_UnlockProficiencyMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? UnlockProficiency.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LevelProficiency_UnlockProficiencyMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = UnlockProficiency.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LevelProficiency_UnlockProficiencyMapEntry>, I>>(
    base?: I,
  ): LevelProficiency_UnlockProficiencyMapEntry {
    return LevelProficiency_UnlockProficiencyMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LevelProficiency_UnlockProficiencyMapEntry>, I>>(
    object: I,
  ): LevelProficiency_UnlockProficiencyMapEntry {
    const message = createBaseLevelProficiency_UnlockProficiencyMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? UnlockProficiency.fromPartial(object.value)
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
