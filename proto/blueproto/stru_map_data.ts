/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MarkData } from "./stru_mark_data";

export const protobufPackage = "zproto";

export interface MapData {
  markDataMap: { [key: number]: MarkData };
  aresMap: { [key: number]: boolean };
  markUuid: number;
}

export interface MapData_MarkDataMapEntry {
  key: number;
  value: MarkData | undefined;
}

export interface MapData_AresMapEntry {
  key: number;
  value: boolean;
}

function createBaseMapData(): MapData {
  return { markDataMap: {}, aresMap: {}, markUuid: 0 };
}

export const MapData: MessageFns<MapData> = {
  encode(message: MapData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.markDataMap).forEach(([key, value]) => {
      MapData_MarkDataMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.aresMap).forEach(([key, value]) => {
      MapData_AresMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.markUuid !== 0) {
      writer.uint32(24).int32(message.markUuid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MapData_MarkDataMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.markDataMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = MapData_AresMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.aresMap[entry2.key] = entry2.value;
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

  fromJSON(object: any): MapData {
    return {
      markDataMap: isObject(object.markDataMap)
        ? Object.entries(object.markDataMap).reduce<{ [key: number]: MarkData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MarkData.fromJSON(value);
          return acc;
        }, {})
        : {},
      aresMap: isObject(object.aresMap)
        ? Object.entries(object.aresMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      markUuid: isSet(object.markUuid) ? globalThis.Number(object.markUuid) : 0,
    };
  },

  toJSON(message: MapData): unknown {
    const obj: any = {};
    if (message.markDataMap) {
      const entries = Object.entries(message.markDataMap);
      if (entries.length > 0) {
        obj.markDataMap = {};
        entries.forEach(([k, v]) => {
          obj.markDataMap[k] = MarkData.toJSON(v);
        });
      }
    }
    if (message.aresMap) {
      const entries = Object.entries(message.aresMap);
      if (entries.length > 0) {
        obj.aresMap = {};
        entries.forEach(([k, v]) => {
          obj.aresMap[k] = v;
        });
      }
    }
    if (message.markUuid !== 0) {
      obj.markUuid = Math.round(message.markUuid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapData>, I>>(base?: I): MapData {
    return MapData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapData>, I>>(object: I): MapData {
    const message = createBaseMapData();
    message.markDataMap = Object.entries(object.markDataMap ?? {}).reduce<{ [key: number]: MarkData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MarkData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.aresMap = Object.entries(object.aresMap ?? {}).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Boolean(value);
      }
      return acc;
    }, {});
    message.markUuid = object.markUuid ?? 0;
    return message;
  },
};

function createBaseMapData_MarkDataMapEntry(): MapData_MarkDataMapEntry {
  return { key: 0, value: undefined };
}

export const MapData_MarkDataMapEntry: MessageFns<MapData_MarkDataMapEntry> = {
  encode(message: MapData_MarkDataMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      MarkData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapData_MarkDataMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapData_MarkDataMapEntry();
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

          message.value = MarkData.decode(reader, reader.uint32());
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

  fromJSON(object: any): MapData_MarkDataMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MarkData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MapData_MarkDataMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MarkData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapData_MarkDataMapEntry>, I>>(base?: I): MapData_MarkDataMapEntry {
    return MapData_MarkDataMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapData_MarkDataMapEntry>, I>>(object: I): MapData_MarkDataMapEntry {
    const message = createBaseMapData_MarkDataMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MarkData.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMapData_AresMapEntry(): MapData_AresMapEntry {
  return { key: 0, value: false };
}

export const MapData_AresMapEntry: MessageFns<MapData_AresMapEntry> = {
  encode(message: MapData_AresMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapData_AresMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapData_AresMapEntry();
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

  fromJSON(object: any): MapData_AresMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: MapData_AresMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapData_AresMapEntry>, I>>(base?: I): MapData_AresMapEntry {
    return MapData_AresMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapData_AresMapEntry>, I>>(object: I): MapData_AresMapEntry {
    const message = createBaseMapData_AresMapEntry();
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
