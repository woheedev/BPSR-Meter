/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UnlockColorInfo {
  colorInfoMap: { [key: number]: boolean };
  colorBlockInfoMap: { [key: number]: boolean };
}

export interface UnlockColorInfo_ColorInfoMapEntry {
  key: number;
  value: boolean;
}

export interface UnlockColorInfo_ColorBlockInfoMapEntry {
  key: number;
  value: boolean;
}

function createBaseUnlockColorInfo(): UnlockColorInfo {
  return { colorInfoMap: {}, colorBlockInfoMap: {} };
}

export const UnlockColorInfo: MessageFns<UnlockColorInfo> = {
  encode(message: UnlockColorInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.colorInfoMap).forEach(([key, value]) => {
      UnlockColorInfo_ColorInfoMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.colorBlockInfoMap).forEach(([key, value]) => {
      UnlockColorInfo_ColorBlockInfoMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnlockColorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockColorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = UnlockColorInfo_ColorInfoMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.colorInfoMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = UnlockColorInfo_ColorBlockInfoMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.colorBlockInfoMap[entry2.key] = entry2.value;
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

  fromJSON(object: any): UnlockColorInfo {
    return {
      colorInfoMap: isObject(object.colorInfoMap)
        ? Object.entries(object.colorInfoMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      colorBlockInfoMap: isObject(object.colorBlockInfoMap)
        ? Object.entries(object.colorBlockInfoMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UnlockColorInfo): unknown {
    const obj: any = {};
    if (message.colorInfoMap) {
      const entries = Object.entries(message.colorInfoMap);
      if (entries.length > 0) {
        obj.colorInfoMap = {};
        entries.forEach(([k, v]) => {
          obj.colorInfoMap[k] = v;
        });
      }
    }
    if (message.colorBlockInfoMap) {
      const entries = Object.entries(message.colorBlockInfoMap);
      if (entries.length > 0) {
        obj.colorBlockInfoMap = {};
        entries.forEach(([k, v]) => {
          obj.colorBlockInfoMap[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnlockColorInfo>, I>>(base?: I): UnlockColorInfo {
    return UnlockColorInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnlockColorInfo>, I>>(object: I): UnlockColorInfo {
    const message = createBaseUnlockColorInfo();
    message.colorInfoMap = Object.entries(object.colorInfoMap ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.colorBlockInfoMap = Object.entries(object.colorBlockInfoMap ?? {}).reduce<{ [key: number]: boolean }>(
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

function createBaseUnlockColorInfo_ColorInfoMapEntry(): UnlockColorInfo_ColorInfoMapEntry {
  return { key: 0, value: false };
}

export const UnlockColorInfo_ColorInfoMapEntry: MessageFns<UnlockColorInfo_ColorInfoMapEntry> = {
  encode(message: UnlockColorInfo_ColorInfoMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnlockColorInfo_ColorInfoMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockColorInfo_ColorInfoMapEntry();
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

  fromJSON(object: any): UnlockColorInfo_ColorInfoMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: UnlockColorInfo_ColorInfoMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnlockColorInfo_ColorInfoMapEntry>, I>>(
    base?: I,
  ): UnlockColorInfo_ColorInfoMapEntry {
    return UnlockColorInfo_ColorInfoMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnlockColorInfo_ColorInfoMapEntry>, I>>(
    object: I,
  ): UnlockColorInfo_ColorInfoMapEntry {
    const message = createBaseUnlockColorInfo_ColorInfoMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseUnlockColorInfo_ColorBlockInfoMapEntry(): UnlockColorInfo_ColorBlockInfoMapEntry {
  return { key: 0, value: false };
}

export const UnlockColorInfo_ColorBlockInfoMapEntry: MessageFns<UnlockColorInfo_ColorBlockInfoMapEntry> = {
  encode(message: UnlockColorInfo_ColorBlockInfoMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnlockColorInfo_ColorBlockInfoMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnlockColorInfo_ColorBlockInfoMapEntry();
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

  fromJSON(object: any): UnlockColorInfo_ColorBlockInfoMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: UnlockColorInfo_ColorBlockInfoMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnlockColorInfo_ColorBlockInfoMapEntry>, I>>(
    base?: I,
  ): UnlockColorInfo_ColorBlockInfoMapEntry {
    return UnlockColorInfo_ColorBlockInfoMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnlockColorInfo_ColorBlockInfoMapEntry>, I>>(
    object: I,
  ): UnlockColorInfo_ColorBlockInfoMapEntry {
    const message = createBaseUnlockColorInfo_ColorBlockInfoMapEntry();
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
