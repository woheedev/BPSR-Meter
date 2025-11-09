/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MapStickerTaskInfo } from "./stru_map_sticker_task_info";

export const protobufPackage = "zproto";

export interface MapStickerInfo {
  stickerMap: { [key: number]: MapStickerTaskInfo };
  finishMap: number[];
  awardFlag: number;
}

export interface MapStickerInfo_StickerMapEntry {
  key: number;
  value: MapStickerTaskInfo | undefined;
}

function createBaseMapStickerInfo(): MapStickerInfo {
  return { stickerMap: {}, finishMap: [], awardFlag: 0 };
}

export const MapStickerInfo: MessageFns<MapStickerInfo> = {
  encode(message: MapStickerInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.stickerMap).forEach(([key, value]) => {
      MapStickerInfo_StickerMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    writer.uint32(18).fork();
    for (const v of message.finishMap) {
      writer.uint32(v);
    }
    writer.join();
    if (message.awardFlag !== 0) {
      writer.uint32(24).uint32(message.awardFlag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapStickerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapStickerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MapStickerInfo_StickerMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.stickerMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.finishMap.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.finishMap.push(reader.uint32());
            }

            continue;
          }

          break;
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

  fromJSON(object: any): MapStickerInfo {
    return {
      stickerMap: isObject(object.stickerMap)
        ? Object.entries(object.stickerMap).reduce<{ [key: number]: MapStickerTaskInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MapStickerTaskInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      finishMap: globalThis.Array.isArray(object?.finishMap)
        ? object.finishMap.map((e: any) => globalThis.Number(e))
        : [],
      awardFlag: isSet(object.awardFlag) ? globalThis.Number(object.awardFlag) : 0,
    };
  },

  toJSON(message: MapStickerInfo): unknown {
    const obj: any = {};
    if (message.stickerMap) {
      const entries = Object.entries(message.stickerMap);
      if (entries.length > 0) {
        obj.stickerMap = {};
        entries.forEach(([k, v]) => {
          obj.stickerMap[k] = MapStickerTaskInfo.toJSON(v);
        });
      }
    }
    if (message.finishMap?.length) {
      obj.finishMap = message.finishMap.map((e) => Math.round(e));
    }
    if (message.awardFlag !== 0) {
      obj.awardFlag = Math.round(message.awardFlag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapStickerInfo>, I>>(base?: I): MapStickerInfo {
    return MapStickerInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapStickerInfo>, I>>(object: I): MapStickerInfo {
    const message = createBaseMapStickerInfo();
    message.stickerMap = Object.entries(object.stickerMap ?? {}).reduce<{ [key: number]: MapStickerTaskInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MapStickerTaskInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.finishMap = object.finishMap?.map((e) => e) || [];
    message.awardFlag = object.awardFlag ?? 0;
    return message;
  },
};

function createBaseMapStickerInfo_StickerMapEntry(): MapStickerInfo_StickerMapEntry {
  return { key: 0, value: undefined };
}

export const MapStickerInfo_StickerMapEntry: MessageFns<MapStickerInfo_StickerMapEntry> = {
  encode(message: MapStickerInfo_StickerMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      MapStickerTaskInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapStickerInfo_StickerMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapStickerInfo_StickerMapEntry();
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

          message.value = MapStickerTaskInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MapStickerInfo_StickerMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MapStickerTaskInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MapStickerInfo_StickerMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MapStickerTaskInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapStickerInfo_StickerMapEntry>, I>>(base?: I): MapStickerInfo_StickerMapEntry {
    return MapStickerInfo_StickerMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapStickerInfo_StickerMapEntry>, I>>(
    object: I,
  ): MapStickerInfo_StickerMapEntry {
    const message = createBaseMapStickerInfo_StickerMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MapStickerTaskInfo.fromPartial(object.value)
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
