/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MasterModeDiffDungeonInfo } from "./stru_master_mode_diff_dungeon_info";

export const protobufPackage = "zproto";

export interface SeasonMasterModeDungeonInfo {
  masterModeDiffInfo: { [key: number]: MasterModeDiffDungeonInfo };
  dungeonInfoUpdateTime: Long;
  seasonAwards: { [key: number]: number };
}

export interface SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry {
  key: number;
  value: MasterModeDiffDungeonInfo | undefined;
}

export interface SeasonMasterModeDungeonInfo_SeasonAwardsEntry {
  key: number;
  value: number;
}

function createBaseSeasonMasterModeDungeonInfo(): SeasonMasterModeDungeonInfo {
  return { masterModeDiffInfo: {}, dungeonInfoUpdateTime: Long.ZERO, seasonAwards: {} };
}

export const SeasonMasterModeDungeonInfo: MessageFns<SeasonMasterModeDungeonInfo> = {
  encode(message: SeasonMasterModeDungeonInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.masterModeDiffInfo).forEach(([key, value]) => {
      SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .join();
    });
    if (!message.dungeonInfoUpdateTime.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.dungeonInfoUpdateTime.toString());
    }
    Object.entries(message.seasonAwards).forEach(([key, value]) => {
      SeasonMasterModeDungeonInfo_SeasonAwardsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonMasterModeDungeonInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonMasterModeDungeonInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.masterModeDiffInfo[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.dungeonInfoUpdateTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = SeasonMasterModeDungeonInfo_SeasonAwardsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.seasonAwards[entry3.key] = entry3.value;
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

  fromJSON(object: any): SeasonMasterModeDungeonInfo {
    return {
      masterModeDiffInfo: isObject(object.masterModeDiffInfo)
        ? Object.entries(object.masterModeDiffInfo).reduce<{ [key: number]: MasterModeDiffDungeonInfo }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = MasterModeDiffDungeonInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      dungeonInfoUpdateTime: isSet(object.dungeonInfoUpdateTime)
        ? Long.fromValue(object.dungeonInfoUpdateTime)
        : Long.ZERO,
      seasonAwards: isObject(object.seasonAwards)
        ? Object.entries(object.seasonAwards).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SeasonMasterModeDungeonInfo): unknown {
    const obj: any = {};
    if (message.masterModeDiffInfo) {
      const entries = Object.entries(message.masterModeDiffInfo);
      if (entries.length > 0) {
        obj.masterModeDiffInfo = {};
        entries.forEach(([k, v]) => {
          obj.masterModeDiffInfo[k] = MasterModeDiffDungeonInfo.toJSON(v);
        });
      }
    }
    if (!message.dungeonInfoUpdateTime.equals(Long.ZERO)) {
      obj.dungeonInfoUpdateTime = (message.dungeonInfoUpdateTime || Long.ZERO).toString();
    }
    if (message.seasonAwards) {
      const entries = Object.entries(message.seasonAwards);
      if (entries.length > 0) {
        obj.seasonAwards = {};
        entries.forEach(([k, v]) => {
          obj.seasonAwards[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonMasterModeDungeonInfo>, I>>(base?: I): SeasonMasterModeDungeonInfo {
    return SeasonMasterModeDungeonInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonMasterModeDungeonInfo>, I>>(object: I): SeasonMasterModeDungeonInfo {
    const message = createBaseSeasonMasterModeDungeonInfo();
    message.masterModeDiffInfo = Object.entries(object.masterModeDiffInfo ?? {}).reduce<
      { [key: number]: MasterModeDiffDungeonInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = MasterModeDiffDungeonInfo.fromPartial(value);
      }
      return acc;
    }, {});
    message.dungeonInfoUpdateTime =
      (object.dungeonInfoUpdateTime !== undefined && object.dungeonInfoUpdateTime !== null)
        ? Long.fromValue(object.dungeonInfoUpdateTime)
        : Long.ZERO;
    message.seasonAwards = Object.entries(object.seasonAwards ?? {}).reduce<{ [key: number]: number }>(
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

function createBaseSeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry(): SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry {
  return { key: 0, value: undefined };
}

export const SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry: MessageFns<
  SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry
> = {
  encode(
    message: SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      MasterModeDiffDungeonInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = MasterModeDiffDungeonInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MasterModeDiffDungeonInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MasterModeDiffDungeonInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry>, I>>(
    base?: I,
  ): SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry {
    return SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry>, I>>(
    object: I,
  ): SeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry {
    const message = createBaseSeasonMasterModeDungeonInfo_MasterModeDiffInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MasterModeDiffDungeonInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSeasonMasterModeDungeonInfo_SeasonAwardsEntry(): SeasonMasterModeDungeonInfo_SeasonAwardsEntry {
  return { key: 0, value: 0 };
}

export const SeasonMasterModeDungeonInfo_SeasonAwardsEntry: MessageFns<SeasonMasterModeDungeonInfo_SeasonAwardsEntry> =
  {
    encode(
      message: SeasonMasterModeDungeonInfo_SeasonAwardsEntry,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.key !== 0) {
        writer.uint32(8).int32(message.key);
      }
      if (message.value !== 0) {
        writer.uint32(16).int32(message.value);
      }
      return writer;
    },

    decode(input: BinaryReader | Uint8Array, length?: number): SeasonMasterModeDungeonInfo_SeasonAwardsEntry {
      const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseSeasonMasterModeDungeonInfo_SeasonAwardsEntry();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (tag !== 8) {
              break;
            }

            message.key = reader.int32();
            continue;
          }
          case 2: {
            if (tag !== 16) {
              break;
            }

            message.value = reader.int32();
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

    fromJSON(object: any): SeasonMasterModeDungeonInfo_SeasonAwardsEntry {
      return {
        key: isSet(object.key) ? globalThis.Number(object.key) : 0,
        value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      };
    },

    toJSON(message: SeasonMasterModeDungeonInfo_SeasonAwardsEntry): unknown {
      const obj: any = {};
      if (message.key !== 0) {
        obj.key = Math.round(message.key);
      }
      if (message.value !== 0) {
        obj.value = Math.round(message.value);
      }
      return obj;
    },

    create<I extends Exact<DeepPartial<SeasonMasterModeDungeonInfo_SeasonAwardsEntry>, I>>(
      base?: I,
    ): SeasonMasterModeDungeonInfo_SeasonAwardsEntry {
      return SeasonMasterModeDungeonInfo_SeasonAwardsEntry.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<SeasonMasterModeDungeonInfo_SeasonAwardsEntry>, I>>(
      object: I,
    ): SeasonMasterModeDungeonInfo_SeasonAwardsEntry {
      const message = createBaseSeasonMasterModeDungeonInfo_SeasonAwardsEntry();
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
