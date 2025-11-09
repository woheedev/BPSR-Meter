/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SeasonRankData {
  seasonRanks: { [key: number]: number };
}

export interface SeasonRankData_SeasonRanksEntry {
  key: number;
  value: number;
}

function createBaseSeasonRankData(): SeasonRankData {
  return { seasonRanks: {} };
}

export const SeasonRankData: MessageFns<SeasonRankData> = {
  encode(message: SeasonRankData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.seasonRanks).forEach(([key, value]) => {
      SeasonRankData_SeasonRanksEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonRankData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonRankData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonRankData_SeasonRanksEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.seasonRanks[entry1.key] = entry1.value;
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

  fromJSON(object: any): SeasonRankData {
    return {
      seasonRanks: isObject(object.seasonRanks)
        ? Object.entries(object.seasonRanks).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SeasonRankData): unknown {
    const obj: any = {};
    if (message.seasonRanks) {
      const entries = Object.entries(message.seasonRanks);
      if (entries.length > 0) {
        obj.seasonRanks = {};
        entries.forEach(([k, v]) => {
          obj.seasonRanks[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonRankData>, I>>(base?: I): SeasonRankData {
    return SeasonRankData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonRankData>, I>>(object: I): SeasonRankData {
    const message = createBaseSeasonRankData();
    message.seasonRanks = Object.entries(object.seasonRanks ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSeasonRankData_SeasonRanksEntry(): SeasonRankData_SeasonRanksEntry {
  return { key: 0, value: 0 };
}

export const SeasonRankData_SeasonRanksEntry: MessageFns<SeasonRankData_SeasonRanksEntry> = {
  encode(message: SeasonRankData_SeasonRanksEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonRankData_SeasonRanksEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonRankData_SeasonRanksEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): SeasonRankData_SeasonRanksEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: SeasonRankData_SeasonRanksEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonRankData_SeasonRanksEntry>, I>>(base?: I): SeasonRankData_SeasonRanksEntry {
    return SeasonRankData_SeasonRanksEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonRankData_SeasonRanksEntry>, I>>(
    object: I,
  ): SeasonRankData_SeasonRanksEntry {
    const message = createBaseSeasonRankData_SeasonRanksEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
