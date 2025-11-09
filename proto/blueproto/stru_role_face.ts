/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface RoleFace {
  unlockItemMap: { [key: number]: boolean };
  saveNeedConsume: boolean;
}

export interface RoleFace_UnlockItemMapEntry {
  key: number;
  value: boolean;
}

function createBaseRoleFace(): RoleFace {
  return { unlockItemMap: {}, saveNeedConsume: false };
}

export const RoleFace: MessageFns<RoleFace> = {
  encode(message: RoleFace, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.unlockItemMap).forEach(([key, value]) => {
      RoleFace_UnlockItemMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.saveNeedConsume !== false) {
      writer.uint32(16).bool(message.saveNeedConsume);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RoleFace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleFace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = RoleFace_UnlockItemMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.unlockItemMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.saveNeedConsume = reader.bool();
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

  fromJSON(object: any): RoleFace {
    return {
      unlockItemMap: isObject(object.unlockItemMap)
        ? Object.entries(object.unlockItemMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      saveNeedConsume: isSet(object.saveNeedConsume) ? globalThis.Boolean(object.saveNeedConsume) : false,
    };
  },

  toJSON(message: RoleFace): unknown {
    const obj: any = {};
    if (message.unlockItemMap) {
      const entries = Object.entries(message.unlockItemMap);
      if (entries.length > 0) {
        obj.unlockItemMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockItemMap[k] = v;
        });
      }
    }
    if (message.saveNeedConsume !== false) {
      obj.saveNeedConsume = message.saveNeedConsume;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleFace>, I>>(base?: I): RoleFace {
    return RoleFace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleFace>, I>>(object: I): RoleFace {
    const message = createBaseRoleFace();
    message.unlockItemMap = Object.entries(object.unlockItemMap ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.saveNeedConsume = object.saveNeedConsume ?? false;
    return message;
  },
};

function createBaseRoleFace_UnlockItemMapEntry(): RoleFace_UnlockItemMapEntry {
  return { key: 0, value: false };
}

export const RoleFace_UnlockItemMapEntry: MessageFns<RoleFace_UnlockItemMapEntry> = {
  encode(message: RoleFace_UnlockItemMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RoleFace_UnlockItemMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleFace_UnlockItemMapEntry();
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

  fromJSON(object: any): RoleFace_UnlockItemMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: RoleFace_UnlockItemMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleFace_UnlockItemMapEntry>, I>>(base?: I): RoleFace_UnlockItemMapEntry {
    return RoleFace_UnlockItemMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleFace_UnlockItemMapEntry>, I>>(object: I): RoleFace_UnlockItemMapEntry {
    const message = createBaseRoleFace_UnlockItemMapEntry();
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
