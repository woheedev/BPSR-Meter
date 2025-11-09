/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DungeonEnterCount } from "./stru_dungeon_enter_count";

export const protobufPackage = "zproto";

export interface DungeonEnterLimit {
  enterCount: { [key: number]: DungeonEnterCount };
}

export interface DungeonEnterLimit_EnterCountEntry {
  key: number;
  value: DungeonEnterCount | undefined;
}

function createBaseDungeonEnterLimit(): DungeonEnterLimit {
  return { enterCount: {} };
}

export const DungeonEnterLimit: MessageFns<DungeonEnterLimit> = {
  encode(message: DungeonEnterLimit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.enterCount).forEach(([key, value]) => {
      DungeonEnterLimit_EnterCountEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonEnterLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonEnterLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = DungeonEnterLimit_EnterCountEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.enterCount[entry1.key] = entry1.value;
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

  fromJSON(object: any): DungeonEnterLimit {
    return {
      enterCount: isObject(object.enterCount)
        ? Object.entries(object.enterCount).reduce<{ [key: number]: DungeonEnterCount }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = DungeonEnterCount.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: DungeonEnterLimit): unknown {
    const obj: any = {};
    if (message.enterCount) {
      const entries = Object.entries(message.enterCount);
      if (entries.length > 0) {
        obj.enterCount = {};
        entries.forEach(([k, v]) => {
          obj.enterCount[k] = DungeonEnterCount.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonEnterLimit>, I>>(base?: I): DungeonEnterLimit {
    return DungeonEnterLimit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonEnterLimit>, I>>(object: I): DungeonEnterLimit {
    const message = createBaseDungeonEnterLimit();
    message.enterCount = Object.entries(object.enterCount ?? {}).reduce<{ [key: number]: DungeonEnterCount }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = DungeonEnterCount.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseDungeonEnterLimit_EnterCountEntry(): DungeonEnterLimit_EnterCountEntry {
  return { key: 0, value: undefined };
}

export const DungeonEnterLimit_EnterCountEntry: MessageFns<DungeonEnterLimit_EnterCountEntry> = {
  encode(message: DungeonEnterLimit_EnterCountEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DungeonEnterCount.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonEnterLimit_EnterCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonEnterLimit_EnterCountEntry();
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

          message.value = DungeonEnterCount.decode(reader, reader.uint32());
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

  fromJSON(object: any): DungeonEnterLimit_EnterCountEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DungeonEnterCount.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DungeonEnterLimit_EnterCountEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DungeonEnterCount.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonEnterLimit_EnterCountEntry>, I>>(
    base?: I,
  ): DungeonEnterLimit_EnterCountEntry {
    return DungeonEnterLimit_EnterCountEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonEnterLimit_EnterCountEntry>, I>>(
    object: I,
  ): DungeonEnterLimit_EnterCountEntry {
    const message = createBaseDungeonEnterLimit_EnterCountEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DungeonEnterCount.fromPartial(object.value)
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
