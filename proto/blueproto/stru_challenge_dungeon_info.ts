/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DungeonInfo } from "./stru_dungeon_info";
import { DungeonTargetAward } from "./stru_dungeon_target_award";

export const protobufPackage = "zproto";

export interface ChallengeDungeonInfo {
  dungeonInfo: { [key: number]: DungeonInfo };
  dungeonTargetAward: { [key: number]: DungeonTargetAward };
}

export interface ChallengeDungeonInfo_DungeonInfoEntry {
  key: number;
  value: DungeonInfo | undefined;
}

export interface ChallengeDungeonInfo_DungeonTargetAwardEntry {
  key: number;
  value: DungeonTargetAward | undefined;
}

function createBaseChallengeDungeonInfo(): ChallengeDungeonInfo {
  return { dungeonInfo: {}, dungeonTargetAward: {} };
}

export const ChallengeDungeonInfo: MessageFns<ChallengeDungeonInfo> = {
  encode(message: ChallengeDungeonInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.dungeonInfo).forEach(([key, value]) => {
      ChallengeDungeonInfo_DungeonInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.dungeonTargetAward).forEach(([key, value]) => {
      ChallengeDungeonInfo_DungeonTargetAwardEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ChallengeDungeonInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeDungeonInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ChallengeDungeonInfo_DungeonInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dungeonInfo[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = ChallengeDungeonInfo_DungeonTargetAwardEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.dungeonTargetAward[entry2.key] = entry2.value;
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

  fromJSON(object: any): ChallengeDungeonInfo {
    return {
      dungeonInfo: isObject(object.dungeonInfo)
        ? Object.entries(object.dungeonInfo).reduce<{ [key: number]: DungeonInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = DungeonInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      dungeonTargetAward: isObject(object.dungeonTargetAward)
        ? Object.entries(object.dungeonTargetAward).reduce<{ [key: number]: DungeonTargetAward }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = DungeonTargetAward.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: ChallengeDungeonInfo): unknown {
    const obj: any = {};
    if (message.dungeonInfo) {
      const entries = Object.entries(message.dungeonInfo);
      if (entries.length > 0) {
        obj.dungeonInfo = {};
        entries.forEach(([k, v]) => {
          obj.dungeonInfo[k] = DungeonInfo.toJSON(v);
        });
      }
    }
    if (message.dungeonTargetAward) {
      const entries = Object.entries(message.dungeonTargetAward);
      if (entries.length > 0) {
        obj.dungeonTargetAward = {};
        entries.forEach(([k, v]) => {
          obj.dungeonTargetAward[k] = DungeonTargetAward.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeDungeonInfo>, I>>(base?: I): ChallengeDungeonInfo {
    return ChallengeDungeonInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeDungeonInfo>, I>>(object: I): ChallengeDungeonInfo {
    const message = createBaseChallengeDungeonInfo();
    message.dungeonInfo = Object.entries(object.dungeonInfo ?? {}).reduce<{ [key: number]: DungeonInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = DungeonInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.dungeonTargetAward = Object.entries(object.dungeonTargetAward ?? {}).reduce<
      { [key: number]: DungeonTargetAward }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = DungeonTargetAward.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseChallengeDungeonInfo_DungeonInfoEntry(): ChallengeDungeonInfo_DungeonInfoEntry {
  return { key: 0, value: undefined };
}

export const ChallengeDungeonInfo_DungeonInfoEntry: MessageFns<ChallengeDungeonInfo_DungeonInfoEntry> = {
  encode(message: ChallengeDungeonInfo_DungeonInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DungeonInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ChallengeDungeonInfo_DungeonInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeDungeonInfo_DungeonInfoEntry();
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

          message.value = DungeonInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): ChallengeDungeonInfo_DungeonInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DungeonInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ChallengeDungeonInfo_DungeonInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DungeonInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeDungeonInfo_DungeonInfoEntry>, I>>(
    base?: I,
  ): ChallengeDungeonInfo_DungeonInfoEntry {
    return ChallengeDungeonInfo_DungeonInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeDungeonInfo_DungeonInfoEntry>, I>>(
    object: I,
  ): ChallengeDungeonInfo_DungeonInfoEntry {
    const message = createBaseChallengeDungeonInfo_DungeonInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DungeonInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseChallengeDungeonInfo_DungeonTargetAwardEntry(): ChallengeDungeonInfo_DungeonTargetAwardEntry {
  return { key: 0, value: undefined };
}

export const ChallengeDungeonInfo_DungeonTargetAwardEntry: MessageFns<ChallengeDungeonInfo_DungeonTargetAwardEntry> = {
  encode(
    message: ChallengeDungeonInfo_DungeonTargetAwardEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DungeonTargetAward.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ChallengeDungeonInfo_DungeonTargetAwardEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeDungeonInfo_DungeonTargetAwardEntry();
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

          message.value = DungeonTargetAward.decode(reader, reader.uint32());
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

  fromJSON(object: any): ChallengeDungeonInfo_DungeonTargetAwardEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DungeonTargetAward.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ChallengeDungeonInfo_DungeonTargetAwardEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DungeonTargetAward.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChallengeDungeonInfo_DungeonTargetAwardEntry>, I>>(
    base?: I,
  ): ChallengeDungeonInfo_DungeonTargetAwardEntry {
    return ChallengeDungeonInfo_DungeonTargetAwardEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChallengeDungeonInfo_DungeonTargetAwardEntry>, I>>(
    object: I,
  ): ChallengeDungeonInfo_DungeonTargetAwardEntry {
    const message = createBaseChallengeDungeonInfo_DungeonTargetAwardEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DungeonTargetAward.fromPartial(object.value)
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
