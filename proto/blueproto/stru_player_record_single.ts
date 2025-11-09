/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PlayerRecordSingle {
  id: number;
  totalCount: number;
  cycleCount: Long;
  cycleTime: Long;
}

function createBasePlayerRecordSingle(): PlayerRecordSingle {
  return { id: 0, totalCount: 0, cycleCount: Long.ZERO, cycleTime: Long.ZERO };
}

export const PlayerRecordSingle: MessageFns<PlayerRecordSingle> = {
  encode(message: PlayerRecordSingle, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int32(message.totalCount);
    }
    if (!message.cycleCount.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.cycleCount.toString());
    }
    if (!message.cycleTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.cycleTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerRecordSingle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRecordSingle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.totalCount = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.cycleCount = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.cycleTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): PlayerRecordSingle {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      totalCount: isSet(object.totalCount) ? globalThis.Number(object.totalCount) : 0,
      cycleCount: isSet(object.cycleCount) ? Long.fromValue(object.cycleCount) : Long.ZERO,
      cycleTime: isSet(object.cycleTime) ? Long.fromValue(object.cycleTime) : Long.ZERO,
    };
  },

  toJSON(message: PlayerRecordSingle): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    if (!message.cycleCount.equals(Long.ZERO)) {
      obj.cycleCount = (message.cycleCount || Long.ZERO).toString();
    }
    if (!message.cycleTime.equals(Long.ZERO)) {
      obj.cycleTime = (message.cycleTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerRecordSingle>, I>>(base?: I): PlayerRecordSingle {
    return PlayerRecordSingle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerRecordSingle>, I>>(object: I): PlayerRecordSingle {
    const message = createBasePlayerRecordSingle();
    message.id = object.id ?? 0;
    message.totalCount = object.totalCount ?? 0;
    message.cycleCount = (object.cycleCount !== undefined && object.cycleCount !== null)
      ? Long.fromValue(object.cycleCount)
      : Long.ZERO;
    message.cycleTime = (object.cycleTime !== undefined && object.cycleTime !== null)
      ? Long.fromValue(object.cycleTime)
      : Long.ZERO;
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
