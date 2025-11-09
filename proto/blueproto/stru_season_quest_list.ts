/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SeasonQuestData } from "./stru_season_quest_data";

export const protobufPackage = "zproto";

export interface SeasonQuestList {
  seasonMap: { [key: number]: SeasonQuestData };
  refreshWeek: number;
  refreshTimeStamp: Long;
}

export interface SeasonQuestList_SeasonMapEntry {
  key: number;
  value: SeasonQuestData | undefined;
}

function createBaseSeasonQuestList(): SeasonQuestList {
  return { seasonMap: {}, refreshWeek: 0, refreshTimeStamp: Long.ZERO };
}

export const SeasonQuestList: MessageFns<SeasonQuestList> = {
  encode(message: SeasonQuestList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.seasonMap).forEach(([key, value]) => {
      SeasonQuestList_SeasonMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.refreshWeek !== 0) {
      writer.uint32(16).int32(message.refreshWeek);
    }
    if (!message.refreshTimeStamp.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.refreshTimeStamp.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonQuestList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonQuestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonQuestList_SeasonMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.seasonMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.refreshWeek = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.refreshTimeStamp = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): SeasonQuestList {
    return {
      seasonMap: isObject(object.seasonMap)
        ? Object.entries(object.seasonMap).reduce<{ [key: number]: SeasonQuestData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SeasonQuestData.fromJSON(value);
          return acc;
        }, {})
        : {},
      refreshWeek: isSet(object.refreshWeek) ? globalThis.Number(object.refreshWeek) : 0,
      refreshTimeStamp: isSet(object.refreshTimeStamp) ? Long.fromValue(object.refreshTimeStamp) : Long.ZERO,
    };
  },

  toJSON(message: SeasonQuestList): unknown {
    const obj: any = {};
    if (message.seasonMap) {
      const entries = Object.entries(message.seasonMap);
      if (entries.length > 0) {
        obj.seasonMap = {};
        entries.forEach(([k, v]) => {
          obj.seasonMap[k] = SeasonQuestData.toJSON(v);
        });
      }
    }
    if (message.refreshWeek !== 0) {
      obj.refreshWeek = Math.round(message.refreshWeek);
    }
    if (!message.refreshTimeStamp.equals(Long.ZERO)) {
      obj.refreshTimeStamp = (message.refreshTimeStamp || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonQuestList>, I>>(base?: I): SeasonQuestList {
    return SeasonQuestList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonQuestList>, I>>(object: I): SeasonQuestList {
    const message = createBaseSeasonQuestList();
    message.seasonMap = Object.entries(object.seasonMap ?? {}).reduce<{ [key: number]: SeasonQuestData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = SeasonQuestData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.refreshWeek = object.refreshWeek ?? 0;
    message.refreshTimeStamp = (object.refreshTimeStamp !== undefined && object.refreshTimeStamp !== null)
      ? Long.fromValue(object.refreshTimeStamp)
      : Long.ZERO;
    return message;
  },
};

function createBaseSeasonQuestList_SeasonMapEntry(): SeasonQuestList_SeasonMapEntry {
  return { key: 0, value: undefined };
}

export const SeasonQuestList_SeasonMapEntry: MessageFns<SeasonQuestList_SeasonMapEntry> = {
  encode(message: SeasonQuestList_SeasonMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      SeasonQuestData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonQuestList_SeasonMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonQuestList_SeasonMapEntry();
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

          message.value = SeasonQuestData.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonQuestList_SeasonMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonQuestData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonQuestList_SeasonMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonQuestData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonQuestList_SeasonMapEntry>, I>>(base?: I): SeasonQuestList_SeasonMapEntry {
    return SeasonQuestList_SeasonMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonQuestList_SeasonMapEntry>, I>>(
    object: I,
  ): SeasonQuestList_SeasonMapEntry {
    const message = createBaseSeasonQuestList_SeasonMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonQuestData.fromPartial(object.value)
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
