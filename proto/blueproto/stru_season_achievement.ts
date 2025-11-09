/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Achievement } from "./stru_achievement";

export const protobufPackage = "zproto";

export interface SeasonAchievement {
  seasonAchievement: { [key: number]: Achievement };
}

export interface SeasonAchievement_SeasonAchievementEntry {
  key: number;
  value: Achievement | undefined;
}

function createBaseSeasonAchievement(): SeasonAchievement {
  return { seasonAchievement: {} };
}

export const SeasonAchievement: MessageFns<SeasonAchievement> = {
  encode(message: SeasonAchievement, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.seasonAchievement).forEach(([key, value]) => {
      SeasonAchievement_SeasonAchievementEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonAchievement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonAchievement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonAchievement_SeasonAchievementEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.seasonAchievement[entry1.key] = entry1.value;
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

  fromJSON(object: any): SeasonAchievement {
    return {
      seasonAchievement: isObject(object.seasonAchievement)
        ? Object.entries(object.seasonAchievement).reduce<{ [key: number]: Achievement }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Achievement.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SeasonAchievement): unknown {
    const obj: any = {};
    if (message.seasonAchievement) {
      const entries = Object.entries(message.seasonAchievement);
      if (entries.length > 0) {
        obj.seasonAchievement = {};
        entries.forEach(([k, v]) => {
          obj.seasonAchievement[k] = Achievement.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonAchievement>, I>>(base?: I): SeasonAchievement {
    return SeasonAchievement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonAchievement>, I>>(object: I): SeasonAchievement {
    const message = createBaseSeasonAchievement();
    message.seasonAchievement = Object.entries(object.seasonAchievement ?? {}).reduce<{ [key: number]: Achievement }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = Achievement.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSeasonAchievement_SeasonAchievementEntry(): SeasonAchievement_SeasonAchievementEntry {
  return { key: 0, value: undefined };
}

export const SeasonAchievement_SeasonAchievementEntry: MessageFns<SeasonAchievement_SeasonAchievementEntry> = {
  encode(message: SeasonAchievement_SeasonAchievementEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      Achievement.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonAchievement_SeasonAchievementEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonAchievement_SeasonAchievementEntry();
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

          message.value = Achievement.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonAchievement_SeasonAchievementEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Achievement.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonAchievement_SeasonAchievementEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = Achievement.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonAchievement_SeasonAchievementEntry>, I>>(
    base?: I,
  ): SeasonAchievement_SeasonAchievementEntry {
    return SeasonAchievement_SeasonAchievementEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonAchievement_SeasonAchievementEntry>, I>>(
    object: I,
  ): SeasonAchievement_SeasonAchievementEntry {
    const message = createBaseSeasonAchievement_SeasonAchievementEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? Achievement.fromPartial(object.value)
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
