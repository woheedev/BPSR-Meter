/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MapStickerInfo } from "./stru_map_sticker_info";

export const protobufPackage = "zproto";

export interface MapBookInfo {
  id: number;
  mapStickerMap: { [key: number]: MapStickerInfo };
  awardFlag: number;
}

export interface MapBookInfo_MapStickerMapEntry {
  key: number;
  value: MapStickerInfo | undefined;
}

function createBaseMapBookInfo(): MapBookInfo {
  return { id: 0, mapStickerMap: {}, awardFlag: 0 };
}

export const MapBookInfo: MessageFns<MapBookInfo> = {
  encode(message: MapBookInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    Object.entries(message.mapStickerMap).forEach(([key, value]) => {
      MapBookInfo_MapStickerMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.awardFlag !== 0) {
      writer.uint32(24).uint32(message.awardFlag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapBookInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapBookInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = MapBookInfo_MapStickerMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.mapStickerMap[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.awardFlag = reader.uint32();
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

  fromJSON(object: any): MapBookInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      mapStickerMap: isObject(object.mapStickerMap)
        ? Object.entries(object.mapStickerMap).reduce<{ [key: number]: MapStickerInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MapStickerInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      awardFlag: isSet(object.awardFlag) ? globalThis.Number(object.awardFlag) : 0,
    };
  },

  toJSON(message: MapBookInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.mapStickerMap) {
      const entries = Object.entries(message.mapStickerMap);
      if (entries.length > 0) {
        obj.mapStickerMap = {};
        entries.forEach(([k, v]) => {
          obj.mapStickerMap[k] = MapStickerInfo.toJSON(v);
        });
      }
    }
    if (message.awardFlag !== 0) {
      obj.awardFlag = Math.round(message.awardFlag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapBookInfo>, I>>(base?: I): MapBookInfo {
    return MapBookInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapBookInfo>, I>>(object: I): MapBookInfo {
    const message = createBaseMapBookInfo();
    message.id = object.id ?? 0;
    message.mapStickerMap = Object.entries(object.mapStickerMap ?? {}).reduce<{ [key: number]: MapStickerInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MapStickerInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.awardFlag = object.awardFlag ?? 0;
    return message;
  },
};

function createBaseMapBookInfo_MapStickerMapEntry(): MapBookInfo_MapStickerMapEntry {
  return { key: 0, value: undefined };
}

export const MapBookInfo_MapStickerMapEntry: MessageFns<MapBookInfo_MapStickerMapEntry> = {
  encode(message: MapBookInfo_MapStickerMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      MapStickerInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapBookInfo_MapStickerMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapBookInfo_MapStickerMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = MapStickerInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MapBookInfo_MapStickerMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MapStickerInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MapBookInfo_MapStickerMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MapStickerInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapBookInfo_MapStickerMapEntry>, I>>(base?: I): MapBookInfo_MapStickerMapEntry {
    return MapBookInfo_MapStickerMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapBookInfo_MapStickerMapEntry>, I>>(
    object: I,
  ): MapBookInfo_MapStickerMapEntry {
    const message = createBaseMapBookInfo_MapStickerMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MapStickerInfo.fromPartial(object.value)
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
