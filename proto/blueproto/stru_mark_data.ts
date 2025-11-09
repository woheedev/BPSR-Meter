/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MarkInfo } from "./stru_mark_info";

export const protobufPackage = "zproto";

export interface MarkData {
  id: number;
  markInfoMap: Map<Long, MarkInfo>;
  markUuid: number;
}

export interface MarkData_MarkInfoMapEntry {
  key: Long;
  value: MarkInfo | undefined;
}

function createBaseMarkData(): MarkData {
  return { id: 0, markInfoMap: new Map(), markUuid: 0 };
}

export const MarkData: MessageFns<MarkData> = {
  encode(message: MarkData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    message.markInfoMap.forEach((value, key) => {
      MarkData_MarkInfoMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.markUuid !== 0) {
      writer.uint32(24).int32(message.markUuid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MarkData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarkData();
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

          const entry2 = MarkData_MarkInfoMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.markInfoMap.set(entry2.key, entry2.value);
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.markUuid = reader.int32();
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

  fromJSON(object: any): MarkData {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      markInfoMap: isObject(object.markInfoMap)
        ? Object.entries(object.markInfoMap).reduce<Map<Long, MarkInfo>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), MarkInfo.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      markUuid: isSet(object.markUuid) ? globalThis.Number(object.markUuid) : 0,
    };
  },

  toJSON(message: MarkData): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.markInfoMap?.size) {
      obj.markInfoMap = {};
      message.markInfoMap.forEach((v, k) => {
        obj.markInfoMap[longToNumber(k)] = MarkInfo.toJSON(v);
      });
    }
    if (message.markUuid !== 0) {
      obj.markUuid = Math.round(message.markUuid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarkData>, I>>(base?: I): MarkData {
    return MarkData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarkData>, I>>(object: I): MarkData {
    const message = createBaseMarkData();
    message.id = object.id ?? 0;
    message.markInfoMap = (() => {
      const m = new Map();
      (object.markInfoMap as Map<Long, MarkInfo> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, MarkInfo.fromPartial(value));
        }
      });
      return m;
    })();
    message.markUuid = object.markUuid ?? 0;
    return message;
  },
};

function createBaseMarkData_MarkInfoMapEntry(): MarkData_MarkInfoMapEntry {
  return { key: Long.ZERO, value: undefined };
}

export const MarkData_MarkInfoMapEntry: MessageFns<MarkData_MarkInfoMapEntry> = {
  encode(message: MarkData_MarkInfoMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      MarkInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MarkData_MarkInfoMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarkData_MarkInfoMapEntry();
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

          message.value = MarkInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MarkData_MarkInfoMapEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? MarkInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MarkData_MarkInfoMapEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = MarkInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarkData_MarkInfoMapEntry>, I>>(base?: I): MarkData_MarkInfoMapEntry {
    return MarkData_MarkInfoMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarkData_MarkInfoMapEntry>, I>>(object: I): MarkData_MarkInfoMapEntry {
    const message = createBaseMarkData_MarkInfoMapEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? MarkInfo.fromPartial(object.value)
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
