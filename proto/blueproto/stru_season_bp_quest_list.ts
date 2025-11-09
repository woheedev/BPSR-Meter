/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SeasonBpQuestData } from "./stru_season_bp_quest_data";

export const protobufPackage = "zproto";

export interface SeasonBpQuestList {
  seasonMap: { [key: number]: SeasonBpQuestData };
  randomMap: number[];
  refreshTimeStamp: Long;
}

export interface SeasonBpQuestList_SeasonMapEntry {
  key: number;
  value: SeasonBpQuestData | undefined;
}

function createBaseSeasonBpQuestList(): SeasonBpQuestList {
  return { seasonMap: {}, randomMap: [], refreshTimeStamp: Long.ZERO };
}

export const SeasonBpQuestList: MessageFns<SeasonBpQuestList> = {
  encode(message: SeasonBpQuestList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.seasonMap).forEach(([key, value]) => {
      SeasonBpQuestList_SeasonMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    writer.uint32(18).fork();
    for (const v of message.randomMap) {
      writer.uint32(v);
    }
    writer.join();
    if (!message.refreshTimeStamp.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.refreshTimeStamp.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonBpQuestList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonBpQuestList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonBpQuestList_SeasonMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.seasonMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.randomMap.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.randomMap.push(reader.uint32());
            }

            continue;
          }

          break;
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

  fromJSON(object: any): SeasonBpQuestList {
    return {
      seasonMap: isObject(object.seasonMap)
        ? Object.entries(object.seasonMap).reduce<{ [key: number]: SeasonBpQuestData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SeasonBpQuestData.fromJSON(value);
          return acc;
        }, {})
        : {},
      randomMap: globalThis.Array.isArray(object?.randomMap)
        ? object.randomMap.map((e: any) => globalThis.Number(e))
        : [],
      refreshTimeStamp: isSet(object.refreshTimeStamp) ? Long.fromValue(object.refreshTimeStamp) : Long.ZERO,
    };
  },

  toJSON(message: SeasonBpQuestList): unknown {
    const obj: any = {};
    if (message.seasonMap) {
      const entries = Object.entries(message.seasonMap);
      if (entries.length > 0) {
        obj.seasonMap = {};
        entries.forEach(([k, v]) => {
          obj.seasonMap[k] = SeasonBpQuestData.toJSON(v);
        });
      }
    }
    if (message.randomMap?.length) {
      obj.randomMap = message.randomMap.map((e) => Math.round(e));
    }
    if (!message.refreshTimeStamp.equals(Long.ZERO)) {
      obj.refreshTimeStamp = (message.refreshTimeStamp || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonBpQuestList>, I>>(base?: I): SeasonBpQuestList {
    return SeasonBpQuestList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonBpQuestList>, I>>(object: I): SeasonBpQuestList {
    const message = createBaseSeasonBpQuestList();
    message.seasonMap = Object.entries(object.seasonMap ?? {}).reduce<{ [key: number]: SeasonBpQuestData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = SeasonBpQuestData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.randomMap = object.randomMap?.map((e) => e) || [];
    message.refreshTimeStamp = (object.refreshTimeStamp !== undefined && object.refreshTimeStamp !== null)
      ? Long.fromValue(object.refreshTimeStamp)
      : Long.ZERO;
    return message;
  },
};

function createBaseSeasonBpQuestList_SeasonMapEntry(): SeasonBpQuestList_SeasonMapEntry {
  return { key: 0, value: undefined };
}

export const SeasonBpQuestList_SeasonMapEntry: MessageFns<SeasonBpQuestList_SeasonMapEntry> = {
  encode(message: SeasonBpQuestList_SeasonMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      SeasonBpQuestData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonBpQuestList_SeasonMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonBpQuestList_SeasonMapEntry();
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

          message.value = SeasonBpQuestData.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonBpQuestList_SeasonMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonBpQuestData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonBpQuestList_SeasonMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonBpQuestData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonBpQuestList_SeasonMapEntry>, I>>(
    base?: I,
  ): SeasonBpQuestList_SeasonMapEntry {
    return SeasonBpQuestList_SeasonMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonBpQuestList_SeasonMapEntry>, I>>(
    object: I,
  ): SeasonBpQuestList_SeasonMapEntry {
    const message = createBaseSeasonBpQuestList_SeasonMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonBpQuestData.fromPartial(object.value)
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
