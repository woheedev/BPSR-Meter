/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { worldEventData } from "./stru_world_event_data";

export const protobufPackage = "zproto";

export interface WorldEventMap {
  eventMap: { [key: number]: worldEventData };
  acceptCount: number;
  lastUpdateTime: Long;
  refreshTime: Long;
}

export interface WorldEventMap_EventMapEntry {
  key: number;
  value: worldEventData | undefined;
}

function createBaseWorldEventMap(): WorldEventMap {
  return { eventMap: {}, acceptCount: 0, lastUpdateTime: Long.ZERO, refreshTime: Long.ZERO };
}

export const WorldEventMap: MessageFns<WorldEventMap> = {
  encode(message: WorldEventMap, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.eventMap).forEach(([key, value]) => {
      WorldEventMap_EventMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.acceptCount !== 0) {
      writer.uint32(16).int32(message.acceptCount);
    }
    if (!message.lastUpdateTime.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.lastUpdateTime.toString());
    }
    if (!message.refreshTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.refreshTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WorldEventMap {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorldEventMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = WorldEventMap_EventMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.eventMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.acceptCount = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.lastUpdateTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.refreshTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): WorldEventMap {
    return {
      eventMap: isObject(object.eventMap)
        ? Object.entries(object.eventMap).reduce<{ [key: number]: worldEventData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = worldEventData.fromJSON(value);
          return acc;
        }, {})
        : {},
      acceptCount: isSet(object.acceptCount) ? globalThis.Number(object.acceptCount) : 0,
      lastUpdateTime: isSet(object.lastUpdateTime) ? Long.fromValue(object.lastUpdateTime) : Long.ZERO,
      refreshTime: isSet(object.refreshTime) ? Long.fromValue(object.refreshTime) : Long.ZERO,
    };
  },

  toJSON(message: WorldEventMap): unknown {
    const obj: any = {};
    if (message.eventMap) {
      const entries = Object.entries(message.eventMap);
      if (entries.length > 0) {
        obj.eventMap = {};
        entries.forEach(([k, v]) => {
          obj.eventMap[k] = worldEventData.toJSON(v);
        });
      }
    }
    if (message.acceptCount !== 0) {
      obj.acceptCount = Math.round(message.acceptCount);
    }
    if (!message.lastUpdateTime.equals(Long.ZERO)) {
      obj.lastUpdateTime = (message.lastUpdateTime || Long.ZERO).toString();
    }
    if (!message.refreshTime.equals(Long.ZERO)) {
      obj.refreshTime = (message.refreshTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WorldEventMap>, I>>(base?: I): WorldEventMap {
    return WorldEventMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WorldEventMap>, I>>(object: I): WorldEventMap {
    const message = createBaseWorldEventMap();
    message.eventMap = Object.entries(object.eventMap ?? {}).reduce<{ [key: number]: worldEventData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = worldEventData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.acceptCount = object.acceptCount ?? 0;
    message.lastUpdateTime = (object.lastUpdateTime !== undefined && object.lastUpdateTime !== null)
      ? Long.fromValue(object.lastUpdateTime)
      : Long.ZERO;
    message.refreshTime = (object.refreshTime !== undefined && object.refreshTime !== null)
      ? Long.fromValue(object.refreshTime)
      : Long.ZERO;
    return message;
  },
};

function createBaseWorldEventMap_EventMapEntry(): WorldEventMap_EventMapEntry {
  return { key: 0, value: undefined };
}

export const WorldEventMap_EventMapEntry: MessageFns<WorldEventMap_EventMapEntry> = {
  encode(message: WorldEventMap_EventMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      worldEventData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WorldEventMap_EventMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorldEventMap_EventMapEntry();
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

          message.value = worldEventData.decode(reader, reader.uint32());
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

  fromJSON(object: any): WorldEventMap_EventMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? worldEventData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: WorldEventMap_EventMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = worldEventData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WorldEventMap_EventMapEntry>, I>>(base?: I): WorldEventMap_EventMapEntry {
    return WorldEventMap_EventMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WorldEventMap_EventMapEntry>, I>>(object: I): WorldEventMap_EventMapEntry {
    const message = createBaseWorldEventMap_EventMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? worldEventData.fromPartial(object.value)
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
