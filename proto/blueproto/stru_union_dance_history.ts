/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UnionDanceHistory {
  danceEndTime: Long;
  sentDanceAward: boolean;
  drawnDanceAward: boolean;
}

function createBaseUnionDanceHistory(): UnionDanceHistory {
  return { danceEndTime: Long.ZERO, sentDanceAward: false, drawnDanceAward: false };
}

export const UnionDanceHistory: MessageFns<UnionDanceHistory> = {
  encode(message: UnionDanceHistory, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.danceEndTime.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.danceEndTime.toString());
    }
    if (message.sentDanceAward !== false) {
      writer.uint32(16).bool(message.sentDanceAward);
    }
    if (message.drawnDanceAward !== false) {
      writer.uint32(24).bool(message.drawnDanceAward);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnionDanceHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnionDanceHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.danceEndTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.sentDanceAward = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.drawnDanceAward = reader.bool();
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

  fromJSON(object: any): UnionDanceHistory {
    return {
      danceEndTime: isSet(object.danceEndTime) ? Long.fromValue(object.danceEndTime) : Long.ZERO,
      sentDanceAward: isSet(object.sentDanceAward) ? globalThis.Boolean(object.sentDanceAward) : false,
      drawnDanceAward: isSet(object.drawnDanceAward) ? globalThis.Boolean(object.drawnDanceAward) : false,
    };
  },

  toJSON(message: UnionDanceHistory): unknown {
    const obj: any = {};
    if (!message.danceEndTime.equals(Long.ZERO)) {
      obj.danceEndTime = (message.danceEndTime || Long.ZERO).toString();
    }
    if (message.sentDanceAward !== false) {
      obj.sentDanceAward = message.sentDanceAward;
    }
    if (message.drawnDanceAward !== false) {
      obj.drawnDanceAward = message.drawnDanceAward;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnionDanceHistory>, I>>(base?: I): UnionDanceHistory {
    return UnionDanceHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnionDanceHistory>, I>>(object: I): UnionDanceHistory {
    const message = createBaseUnionDanceHistory();
    message.danceEndTime = (object.danceEndTime !== undefined && object.danceEndTime !== null)
      ? Long.fromValue(object.danceEndTime)
      : Long.ZERO;
    message.sentDanceAward = object.sentDanceAward ?? false;
    message.drawnDanceAward = object.drawnDanceAward ?? false;
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
