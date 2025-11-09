/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SeasonRankInfo } from "./stru_season_rank_info";

export const protobufPackage = "zproto";

export interface SeasonRankList {
  seasonRankList: { [key: number]: SeasonRankInfo };
  showArmbandId: number;
}

export interface SeasonRankList_SeasonRankListEntry {
  key: number;
  value: SeasonRankInfo | undefined;
}

function createBaseSeasonRankList(): SeasonRankList {
  return { seasonRankList: {}, showArmbandId: 0 };
}

export const SeasonRankList: MessageFns<SeasonRankList> = {
  encode(message: SeasonRankList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.seasonRankList).forEach(([key, value]) => {
      SeasonRankList_SeasonRankListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.showArmbandId !== 0) {
      writer.uint32(16).uint32(message.showArmbandId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonRankList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonRankList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonRankList_SeasonRankListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.seasonRankList[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.showArmbandId = reader.uint32();
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

  fromJSON(object: any): SeasonRankList {
    return {
      seasonRankList: isObject(object.seasonRankList)
        ? Object.entries(object.seasonRankList).reduce<{ [key: number]: SeasonRankInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SeasonRankInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      showArmbandId: isSet(object.showArmbandId) ? globalThis.Number(object.showArmbandId) : 0,
    };
  },

  toJSON(message: SeasonRankList): unknown {
    const obj: any = {};
    if (message.seasonRankList) {
      const entries = Object.entries(message.seasonRankList);
      if (entries.length > 0) {
        obj.seasonRankList = {};
        entries.forEach(([k, v]) => {
          obj.seasonRankList[k] = SeasonRankInfo.toJSON(v);
        });
      }
    }
    if (message.showArmbandId !== 0) {
      obj.showArmbandId = Math.round(message.showArmbandId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonRankList>, I>>(base?: I): SeasonRankList {
    return SeasonRankList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonRankList>, I>>(object: I): SeasonRankList {
    const message = createBaseSeasonRankList();
    message.seasonRankList = Object.entries(object.seasonRankList ?? {}).reduce<{ [key: number]: SeasonRankInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = SeasonRankInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.showArmbandId = object.showArmbandId ?? 0;
    return message;
  },
};

function createBaseSeasonRankList_SeasonRankListEntry(): SeasonRankList_SeasonRankListEntry {
  return { key: 0, value: undefined };
}

export const SeasonRankList_SeasonRankListEntry: MessageFns<SeasonRankList_SeasonRankListEntry> = {
  encode(message: SeasonRankList_SeasonRankListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      SeasonRankInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonRankList_SeasonRankListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonRankList_SeasonRankListEntry();
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

          message.value = SeasonRankInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonRankList_SeasonRankListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonRankInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonRankList_SeasonRankListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonRankInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonRankList_SeasonRankListEntry>, I>>(
    base?: I,
  ): SeasonRankList_SeasonRankListEntry {
    return SeasonRankList_SeasonRankListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonRankList_SeasonRankListEntry>, I>>(
    object: I,
  ): SeasonRankList_SeasonRankListEntry {
    const message = createBaseSeasonRankList_SeasonRankListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonRankInfo.fromPartial(object.value)
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
