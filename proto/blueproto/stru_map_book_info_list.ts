/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MapBookInfo } from "./stru_map_book_info";

export const protobufPackage = "zproto";

export interface MapBookInfoList {
  mapBookMap: { [key: number]: MapBookInfo };
}

export interface MapBookInfoList_MapBookMapEntry {
  key: number;
  value: MapBookInfo | undefined;
}

function createBaseMapBookInfoList(): MapBookInfoList {
  return { mapBookMap: {} };
}

export const MapBookInfoList: MessageFns<MapBookInfoList> = {
  encode(message: MapBookInfoList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.mapBookMap).forEach(([key, value]) => {
      MapBookInfoList_MapBookMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapBookInfoList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapBookInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MapBookInfoList_MapBookMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.mapBookMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): MapBookInfoList {
    return {
      mapBookMap: isObject(object.mapBookMap)
        ? Object.entries(object.mapBookMap).reduce<{ [key: number]: MapBookInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MapBookInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MapBookInfoList): unknown {
    const obj: any = {};
    if (message.mapBookMap) {
      const entries = Object.entries(message.mapBookMap);
      if (entries.length > 0) {
        obj.mapBookMap = {};
        entries.forEach(([k, v]) => {
          obj.mapBookMap[k] = MapBookInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapBookInfoList>, I>>(base?: I): MapBookInfoList {
    return MapBookInfoList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapBookInfoList>, I>>(object: I): MapBookInfoList {
    const message = createBaseMapBookInfoList();
    message.mapBookMap = Object.entries(object.mapBookMap ?? {}).reduce<{ [key: number]: MapBookInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MapBookInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseMapBookInfoList_MapBookMapEntry(): MapBookInfoList_MapBookMapEntry {
  return { key: 0, value: undefined };
}

export const MapBookInfoList_MapBookMapEntry: MessageFns<MapBookInfoList_MapBookMapEntry> = {
  encode(message: MapBookInfoList_MapBookMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      MapBookInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapBookInfoList_MapBookMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapBookInfoList_MapBookMapEntry();
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

          message.value = MapBookInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MapBookInfoList_MapBookMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MapBookInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MapBookInfoList_MapBookMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MapBookInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapBookInfoList_MapBookMapEntry>, I>>(base?: I): MapBookInfoList_MapBookMapEntry {
    return MapBookInfoList_MapBookMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapBookInfoList_MapBookMapEntry>, I>>(
    object: I,
  ): MapBookInfoList_MapBookMapEntry {
    const message = createBaseMapBookInfoList_MapBookMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MapBookInfo.fromPartial(object.value)
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
