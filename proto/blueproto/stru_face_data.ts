/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { IntVec3 } from "./stru_int_vec3";

export const protobufPackage = "zproto";

export interface FaceData {
  faceInfo: { [key: number]: number };
  colorInfo: { [key: number]: IntVec3 };
  height: number;
}

export interface FaceData_FaceInfoEntry {
  key: number;
  value: number;
}

export interface FaceData_ColorInfoEntry {
  key: number;
  value: IntVec3 | undefined;
}

function createBaseFaceData(): FaceData {
  return { faceInfo: {}, colorInfo: {}, height: 0 };
}

export const FaceData: MessageFns<FaceData> = {
  encode(message: FaceData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.faceInfo).forEach(([key, value]) => {
      FaceData_FaceInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.colorInfo).forEach(([key, value]) => {
      FaceData_ColorInfoEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.height !== 0) {
      writer.uint32(29).float(message.height);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FaceData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = FaceData_FaceInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.faceInfo[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = FaceData_ColorInfoEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.colorInfo[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.height = reader.float();
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

  fromJSON(object: any): FaceData {
    return {
      faceInfo: isObject(object.faceInfo)
        ? Object.entries(object.faceInfo).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      colorInfo: isObject(object.colorInfo)
        ? Object.entries(object.colorInfo).reduce<{ [key: number]: IntVec3 }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = IntVec3.fromJSON(value);
          return acc;
        }, {})
        : {},
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: FaceData): unknown {
    const obj: any = {};
    if (message.faceInfo) {
      const entries = Object.entries(message.faceInfo);
      if (entries.length > 0) {
        obj.faceInfo = {};
        entries.forEach(([k, v]) => {
          obj.faceInfo[k] = Math.round(v);
        });
      }
    }
    if (message.colorInfo) {
      const entries = Object.entries(message.colorInfo);
      if (entries.length > 0) {
        obj.colorInfo = {};
        entries.forEach(([k, v]) => {
          obj.colorInfo[k] = IntVec3.toJSON(v);
        });
      }
    }
    if (message.height !== 0) {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FaceData>, I>>(base?: I): FaceData {
    return FaceData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FaceData>, I>>(object: I): FaceData {
    const message = createBaseFaceData();
    message.faceInfo = Object.entries(object.faceInfo ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.colorInfo = Object.entries(object.colorInfo ?? {}).reduce<{ [key: number]: IntVec3 }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = IntVec3.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseFaceData_FaceInfoEntry(): FaceData_FaceInfoEntry {
  return { key: 0, value: 0 };
}

export const FaceData_FaceInfoEntry: MessageFns<FaceData_FaceInfoEntry> = {
  encode(message: FaceData_FaceInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FaceData_FaceInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaceData_FaceInfoEntry();
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

  fromJSON(object: any): FaceData_FaceInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: FaceData_FaceInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FaceData_FaceInfoEntry>, I>>(base?: I): FaceData_FaceInfoEntry {
    return FaceData_FaceInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FaceData_FaceInfoEntry>, I>>(object: I): FaceData_FaceInfoEntry {
    const message = createBaseFaceData_FaceInfoEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseFaceData_ColorInfoEntry(): FaceData_ColorInfoEntry {
  return { key: 0, value: undefined };
}

export const FaceData_ColorInfoEntry: MessageFns<FaceData_ColorInfoEntry> = {
  encode(message: FaceData_ColorInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      IntVec3.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FaceData_ColorInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaceData_ColorInfoEntry();
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

  fromJSON(object: any): FaceData_ColorInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? IntVec3.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FaceData_ColorInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = IntVec3.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FaceData_ColorInfoEntry>, I>>(base?: I): FaceData_ColorInfoEntry {
    return FaceData_ColorInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FaceData_ColorInfoEntry>, I>>(object: I): FaceData_ColorInfoEntry {
    const message = createBaseFaceData_ColorInfoEntry();
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
