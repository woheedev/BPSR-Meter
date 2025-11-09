/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IntVec3 } from "./stru_int_vec3";

export const protobufPackage = "zproto";

export interface FashionColorInfo {
  id: number;
  colors: { [key: number]: IntVec3 };
  attachmentColor: { [key: number]: IntVec3 };
}

export interface FashionColorInfo_ColorsEntry {
  key: number;
  value: IntVec3 | undefined;
}

export interface FashionColorInfo_AttachmentColorEntry {
  key: number;
  value: IntVec3 | undefined;
}

function createBaseFashionColorInfo(): FashionColorInfo {
  return { id: 0, colors: {}, attachmentColor: {} };
}

export const FashionColorInfo: MessageFns<FashionColorInfo> = {
  encode(message: FashionColorInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    Object.entries(message.colors).forEach(([key, value]) => {
      FashionColorInfo_ColorsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.attachmentColor).forEach(([key, value]) => {
      FashionColorInfo_AttachmentColorEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionColorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionColorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = FashionColorInfo_ColorsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.colors[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = FashionColorInfo_AttachmentColorEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.attachmentColor[entry3.key] = entry3.value;
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

  fromJSON(object: any): FashionColorInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      colors: isObject(object.colors)
        ? Object.entries(object.colors).reduce<{ [key: number]: IntVec3 }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = IntVec3.fromJSON(value);
          return acc;
        }, {})
        : {},
      attachmentColor: isObject(object.attachmentColor)
        ? Object.entries(object.attachmentColor).reduce<{ [key: number]: IntVec3 }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = IntVec3.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FashionColorInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.colors) {
      const entries = Object.entries(message.colors);
      if (entries.length > 0) {
        obj.colors = {};
        entries.forEach(([k, v]) => {
          obj.colors[k] = IntVec3.toJSON(v);
        });
      }
    }
    if (message.attachmentColor) {
      const entries = Object.entries(message.attachmentColor);
      if (entries.length > 0) {
        obj.attachmentColor = {};
        entries.forEach(([k, v]) => {
          obj.attachmentColor[k] = IntVec3.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionColorInfo>, I>>(base?: I): FashionColorInfo {
    return FashionColorInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionColorInfo>, I>>(object: I): FashionColorInfo {
    const message = createBaseFashionColorInfo();
    message.id = object.id ?? 0;
    message.colors = Object.entries(object.colors ?? {}).reduce<{ [key: number]: IntVec3 }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = IntVec3.fromPartial(value);
      }
      return acc;
    }, {});
    message.attachmentColor = Object.entries(object.attachmentColor ?? {}).reduce<{ [key: number]: IntVec3 }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = IntVec3.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseFashionColorInfo_ColorsEntry(): FashionColorInfo_ColorsEntry {
  return { key: 0, value: undefined };
}

export const FashionColorInfo_ColorsEntry: MessageFns<FashionColorInfo_ColorsEntry> = {
  encode(message: FashionColorInfo_ColorsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      IntVec3.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionColorInfo_ColorsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionColorInfo_ColorsEntry();
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

          message.value = IntVec3.decode(reader, reader.uint32());
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

  fromJSON(object: any): FashionColorInfo_ColorsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? IntVec3.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FashionColorInfo_ColorsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = IntVec3.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionColorInfo_ColorsEntry>, I>>(base?: I): FashionColorInfo_ColorsEntry {
    return FashionColorInfo_ColorsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionColorInfo_ColorsEntry>, I>>(object: I): FashionColorInfo_ColorsEntry {
    const message = createBaseFashionColorInfo_ColorsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? IntVec3.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseFashionColorInfo_AttachmentColorEntry(): FashionColorInfo_AttachmentColorEntry {
  return { key: 0, value: undefined };
}

export const FashionColorInfo_AttachmentColorEntry: MessageFns<FashionColorInfo_AttachmentColorEntry> = {
  encode(message: FashionColorInfo_AttachmentColorEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      IntVec3.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionColorInfo_AttachmentColorEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionColorInfo_AttachmentColorEntry();
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

          message.value = IntVec3.decode(reader, reader.uint32());
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

  fromJSON(object: any): FashionColorInfo_AttachmentColorEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? IntVec3.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FashionColorInfo_AttachmentColorEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = IntVec3.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionColorInfo_AttachmentColorEntry>, I>>(
    base?: I,
  ): FashionColorInfo_AttachmentColorEntry {
    return FashionColorInfo_AttachmentColorEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionColorInfo_AttachmentColorEntry>, I>>(
    object: I,
  ): FashionColorInfo_AttachmentColorEntry {
    const message = createBaseFashionColorInfo_AttachmentColorEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? IntVec3.fromPartial(object.value)
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
