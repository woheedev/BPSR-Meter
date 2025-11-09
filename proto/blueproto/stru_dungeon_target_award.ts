/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DungeonTargetProgress } from "./stru_dungeon_target_progress";

export const protobufPackage = "zproto";

export interface DungeonTargetAward {
  dungeonTargetProgress: { [key: number]: DungeonTargetProgress };
}

export interface DungeonTargetAward_DungeonTargetProgressEntry {
  key: number;
  value: DungeonTargetProgress | undefined;
}

function createBaseDungeonTargetAward(): DungeonTargetAward {
  return { dungeonTargetProgress: {} };
}

export const DungeonTargetAward: MessageFns<DungeonTargetAward> = {
  encode(message: DungeonTargetAward, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.dungeonTargetProgress).forEach(([key, value]) => {
      DungeonTargetAward_DungeonTargetProgressEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonTargetAward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonTargetAward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = DungeonTargetAward_DungeonTargetProgressEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dungeonTargetProgress[entry1.key] = entry1.value;
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

  fromJSON(object: any): DungeonTargetAward {
    return {
      dungeonTargetProgress: isObject(object.dungeonTargetProgress)
        ? Object.entries(object.dungeonTargetProgress).reduce<{ [key: number]: DungeonTargetProgress }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = DungeonTargetProgress.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: DungeonTargetAward): unknown {
    const obj: any = {};
    if (message.dungeonTargetProgress) {
      const entries = Object.entries(message.dungeonTargetProgress);
      if (entries.length > 0) {
        obj.dungeonTargetProgress = {};
        entries.forEach(([k, v]) => {
          obj.dungeonTargetProgress[k] = DungeonTargetProgress.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonTargetAward>, I>>(base?: I): DungeonTargetAward {
    return DungeonTargetAward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonTargetAward>, I>>(object: I): DungeonTargetAward {
    const message = createBaseDungeonTargetAward();
    message.dungeonTargetProgress = Object.entries(object.dungeonTargetProgress ?? {}).reduce<
      { [key: number]: DungeonTargetProgress }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = DungeonTargetProgress.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseDungeonTargetAward_DungeonTargetProgressEntry(): DungeonTargetAward_DungeonTargetProgressEntry {
  return { key: 0, value: undefined };
}

export const DungeonTargetAward_DungeonTargetProgressEntry: MessageFns<DungeonTargetAward_DungeonTargetProgressEntry> =
  {
    encode(
      message: DungeonTargetAward_DungeonTargetProgressEntry,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.key !== 0) {
        writer.uint32(8).int32(message.key);
      }
      if (message.value !== undefined) {
        DungeonTargetProgress.encode(message.value, writer.uint32(18).fork()).join();
      }
      return writer;
    },

    decode(input: BinaryReader | Uint8Array, length?: number): DungeonTargetAward_DungeonTargetProgressEntry {
      const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
      const end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseDungeonTargetAward_DungeonTargetProgressEntry();
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

            message.value = DungeonTargetProgress.decode(reader, reader.uint32());
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

    fromJSON(object: any): DungeonTargetAward_DungeonTargetProgressEntry {
      return {
        key: isSet(object.key) ? globalThis.Number(object.key) : 0,
        value: isSet(object.value) ? DungeonTargetProgress.fromJSON(object.value) : undefined,
      };
    },

    toJSON(message: DungeonTargetAward_DungeonTargetProgressEntry): unknown {
      const obj: any = {};
      if (message.key !== 0) {
        obj.key = Math.round(message.key);
      }
      if (message.value !== undefined) {
        obj.value = DungeonTargetProgress.toJSON(message.value);
      }
      return obj;
    },

    create<I extends Exact<DeepPartial<DungeonTargetAward_DungeonTargetProgressEntry>, I>>(
      base?: I,
    ): DungeonTargetAward_DungeonTargetProgressEntry {
      return DungeonTargetAward_DungeonTargetProgressEntry.fromPartial(base ?? ({} as any));
    },
    fromPartial<I extends Exact<DeepPartial<DungeonTargetAward_DungeonTargetProgressEntry>, I>>(
      object: I,
    ): DungeonTargetAward_DungeonTargetProgressEntry {
      const message = createBaseDungeonTargetAward_DungeonTargetProgressEntry();
      message.key = object.key ?? 0;
      message.value = (object.value !== undefined && object.value !== null)
        ? DungeonTargetProgress.fromPartial(object.value)
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
