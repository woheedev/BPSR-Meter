/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SeasonAchievement } from "./stru_season_achievement";

export const protobufPackage = "zproto";

export interface SeasonAchievementList {
  seasonAchievementList: { [key: number]: SeasonAchievement };
  hasInitDones: { [key: number]: boolean };
  version: Long;
}

export interface SeasonAchievementList_SeasonAchievementListEntry {
  key: number;
  value: SeasonAchievement | undefined;
}

export interface SeasonAchievementList_HasInitDonesEntry {
  key: number;
  value: boolean;
}

function createBaseSeasonAchievementList(): SeasonAchievementList {
  return { seasonAchievementList: {}, hasInitDones: {}, version: Long.UZERO };
}

export const SeasonAchievementList: MessageFns<SeasonAchievementList> = {
  encode(message: SeasonAchievementList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.seasonAchievementList).forEach(([key, value]) => {
      SeasonAchievementList_SeasonAchievementListEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .join();
    });
    Object.entries(message.hasInitDones).forEach(([key, value]) => {
      SeasonAchievementList_HasInitDonesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (!message.version.equals(Long.UZERO)) {
      writer.uint32(24).uint64(message.version.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonAchievementList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonAchievementList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonAchievementList_SeasonAchievementListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.seasonAchievementList[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = SeasonAchievementList_HasInitDonesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.hasInitDones[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.version = Long.fromString(reader.uint64().toString(), true);
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

  fromJSON(object: any): SeasonAchievementList {
    return {
      seasonAchievementList: isObject(object.seasonAchievementList)
        ? Object.entries(object.seasonAchievementList).reduce<{ [key: number]: SeasonAchievement }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = SeasonAchievement.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      hasInitDones: isObject(object.hasInitDones)
        ? Object.entries(object.hasInitDones).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
    };
  },

  toJSON(message: SeasonAchievementList): unknown {
    const obj: any = {};
    if (message.seasonAchievementList) {
      const entries = Object.entries(message.seasonAchievementList);
      if (entries.length > 0) {
        obj.seasonAchievementList = {};
        entries.forEach(([k, v]) => {
          obj.seasonAchievementList[k] = SeasonAchievement.toJSON(v);
        });
      }
    }
    if (message.hasInitDones) {
      const entries = Object.entries(message.hasInitDones);
      if (entries.length > 0) {
        obj.hasInitDones = {};
        entries.forEach(([k, v]) => {
          obj.hasInitDones[k] = v;
        });
      }
    }
    if (!message.version.equals(Long.UZERO)) {
      obj.version = (message.version || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonAchievementList>, I>>(base?: I): SeasonAchievementList {
    return SeasonAchievementList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonAchievementList>, I>>(object: I): SeasonAchievementList {
    const message = createBaseSeasonAchievementList();
    message.seasonAchievementList = Object.entries(object.seasonAchievementList ?? {}).reduce<
      { [key: number]: SeasonAchievement }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = SeasonAchievement.fromPartial(value);
      }
      return acc;
    }, {});
    message.hasInitDones = Object.entries(object.hasInitDones ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.version = (object.version !== undefined && object.version !== null)
      ? Long.fromValue(object.version)
      : Long.UZERO;
    return message;
  },
};

function createBaseSeasonAchievementList_SeasonAchievementListEntry(): SeasonAchievementList_SeasonAchievementListEntry {
  return { key: 0, value: undefined };
}

export const SeasonAchievementList_SeasonAchievementListEntry: MessageFns<
  SeasonAchievementList_SeasonAchievementListEntry
> = {
  encode(
    message: SeasonAchievementList_SeasonAchievementListEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      SeasonAchievement.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonAchievementList_SeasonAchievementListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonAchievementList_SeasonAchievementListEntry();
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

          message.value = SeasonAchievement.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonAchievementList_SeasonAchievementListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonAchievement.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonAchievementList_SeasonAchievementListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonAchievement.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonAchievementList_SeasonAchievementListEntry>, I>>(
    base?: I,
  ): SeasonAchievementList_SeasonAchievementListEntry {
    return SeasonAchievementList_SeasonAchievementListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonAchievementList_SeasonAchievementListEntry>, I>>(
    object: I,
  ): SeasonAchievementList_SeasonAchievementListEntry {
    const message = createBaseSeasonAchievementList_SeasonAchievementListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonAchievement.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSeasonAchievementList_HasInitDonesEntry(): SeasonAchievementList_HasInitDonesEntry {
  return { key: 0, value: false };
}

export const SeasonAchievementList_HasInitDonesEntry: MessageFns<SeasonAchievementList_HasInitDonesEntry> = {
  encode(message: SeasonAchievementList_HasInitDonesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonAchievementList_HasInitDonesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonAchievementList_HasInitDonesEntry();
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

  fromJSON(object: any): SeasonAchievementList_HasInitDonesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: SeasonAchievementList_HasInitDonesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonAchievementList_HasInitDonesEntry>, I>>(
    base?: I,
  ): SeasonAchievementList_HasInitDonesEntry {
    return SeasonAchievementList_HasInitDonesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonAchievementList_HasInitDonesEntry>, I>>(
    object: I,
  ): SeasonAchievementList_HasInitDonesEntry {
    const message = createBaseSeasonAchievementList_HasInitDonesEntry();
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
