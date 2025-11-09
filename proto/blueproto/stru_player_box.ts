/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PlayerBoxData } from "./stru_player_box_data";

export const protobufPackage = "zproto";

export interface PlayerBox {
  scenes: Map<Long, PlayerBoxData>;
}

export interface PlayerBox_ScenesEntry {
  key: Long;
  value: PlayerBoxData | undefined;
}

function createBasePlayerBox(): PlayerBox {
  return { scenes: new Map() };
}

export const PlayerBox: MessageFns<PlayerBox> = {
  encode(message: PlayerBox, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    message.scenes.forEach((value, key) => {
      PlayerBox_ScenesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerBox {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PlayerBox_ScenesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.scenes.set(entry1.key, entry1.value);
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

  fromJSON(object: any): PlayerBox {
    return {
      scenes: isObject(object.scenes)
        ? Object.entries(object.scenes).reduce<Map<Long, PlayerBoxData>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), PlayerBoxData.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: PlayerBox): unknown {
    const obj: any = {};
    if (message.scenes?.size) {
      obj.scenes = {};
      message.scenes.forEach((v, k) => {
        obj.scenes[longToNumber(k)] = PlayerBoxData.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerBox>, I>>(base?: I): PlayerBox {
    return PlayerBox.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerBox>, I>>(object: I): PlayerBox {
    const message = createBasePlayerBox();
    message.scenes = (() => {
      const m = new Map();
      (object.scenes as Map<Long, PlayerBoxData> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, PlayerBoxData.fromPartial(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBasePlayerBox_ScenesEntry(): PlayerBox_ScenesEntry {
  return { key: Long.UZERO, value: undefined };
}

export const PlayerBox_ScenesEntry: MessageFns<PlayerBox_ScenesEntry> = {
  encode(message: PlayerBox_ScenesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.key.toString());
    }
    if (message.value !== undefined) {
      PlayerBoxData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerBox_ScenesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerBox_ScenesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = PlayerBoxData.decode(reader, reader.uint32());
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

  fromJSON(object: any): PlayerBox_ScenesEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.UZERO,
      value: isSet(object.value) ? PlayerBoxData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PlayerBox_ScenesEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.UZERO)) {
      obj.key = (message.key || Long.UZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = PlayerBoxData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerBox_ScenesEntry>, I>>(base?: I): PlayerBox_ScenesEntry {
    return PlayerBox_ScenesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerBox_ScenesEntry>, I>>(object: I): PlayerBox_ScenesEntry {
    const message = createBasePlayerBox_ScenesEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.UZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayerBoxData.fromPartial(object.value)
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
