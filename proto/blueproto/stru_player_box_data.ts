/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PlayerBoxData {
  sceneUuid: Long;
  boxs: Map<Long, Long>;
}

export interface PlayerBoxData_BoxsEntry {
  key: Long;
  value: Long;
}

function createBasePlayerBoxData(): PlayerBoxData {
  return { sceneUuid: Long.UZERO, boxs: new Map() };
}

export const PlayerBoxData: MessageFns<PlayerBoxData> = {
  encode(message: PlayerBoxData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.sceneUuid.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.sceneUuid.toString());
    }
    message.boxs.forEach((value, key) => {
      PlayerBoxData_BoxsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerBoxData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerBoxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.sceneUuid = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = PlayerBoxData_BoxsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.boxs.set(entry2.key, entry2.value);
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

  fromJSON(object: any): PlayerBoxData {
    return {
      sceneUuid: isSet(object.sceneUuid) ? Long.fromValue(object.sceneUuid) : Long.UZERO,
      boxs: isObject(object.boxs)
        ? Object.entries(object.boxs).reduce<Map<Long, Long>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Long.fromValue(value as Long | string));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: PlayerBoxData): unknown {
    const obj: any = {};
    if (!message.sceneUuid.equals(Long.UZERO)) {
      obj.sceneUuid = (message.sceneUuid || Long.UZERO).toString();
    }
    if (message.boxs?.size) {
      obj.boxs = {};
      message.boxs.forEach((v, k) => {
        obj.boxs[longToNumber(k)] = v.toString();
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerBoxData>, I>>(base?: I): PlayerBoxData {
    return PlayerBoxData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerBoxData>, I>>(object: I): PlayerBoxData {
    const message = createBasePlayerBoxData();
    message.sceneUuid = (object.sceneUuid !== undefined && object.sceneUuid !== null)
      ? Long.fromValue(object.sceneUuid)
      : Long.UZERO;
    message.boxs = (() => {
      const m = new Map();
      (object.boxs as Map<Long, Long> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Long.fromValue(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBasePlayerBoxData_BoxsEntry(): PlayerBoxData_BoxsEntry {
  return { key: Long.ZERO, value: Long.ZERO };
}

export const PlayerBoxData_BoxsEntry: MessageFns<PlayerBoxData_BoxsEntry> = {
  encode(message: PlayerBoxData_BoxsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerBoxData_BoxsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerBoxData_BoxsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): PlayerBoxData_BoxsEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: PlayerBoxData_BoxsEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerBoxData_BoxsEntry>, I>>(base?: I): PlayerBoxData_BoxsEntry {
    return PlayerBoxData_BoxsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerBoxData_BoxsEntry>, I>>(object: I): PlayerBoxData_BoxsEntry {
    const message = createBasePlayerBoxData_BoxsEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
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
