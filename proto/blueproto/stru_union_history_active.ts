/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UnionHistoryActive {
  unionId: Long;
  activePoints: Long;
}

function createBaseUnionHistoryActive(): UnionHistoryActive {
  return { unionId: Long.ZERO, activePoints: Long.ZERO };
}

export const UnionHistoryActive: MessageFns<UnionHistoryActive> = {
  encode(message: UnionHistoryActive, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.unionId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.unionId.toString());
    }
    if (!message.activePoints.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.activePoints.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnionHistoryActive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnionHistoryActive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.unionId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.activePoints = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): UnionHistoryActive {
    return {
      unionId: isSet(object.unionId) ? Long.fromValue(object.unionId) : Long.ZERO,
      activePoints: isSet(object.activePoints) ? Long.fromValue(object.activePoints) : Long.ZERO,
    };
  },

  toJSON(message: UnionHistoryActive): unknown {
    const obj: any = {};
    if (!message.unionId.equals(Long.ZERO)) {
      obj.unionId = (message.unionId || Long.ZERO).toString();
    }
    if (!message.activePoints.equals(Long.ZERO)) {
      obj.activePoints = (message.activePoints || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnionHistoryActive>, I>>(base?: I): UnionHistoryActive {
    return UnionHistoryActive.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnionHistoryActive>, I>>(object: I): UnionHistoryActive {
    const message = createBaseUnionHistoryActive();
    message.unionId = (object.unionId !== undefined && object.unionId !== null)
      ? Long.fromValue(object.unionId)
      : Long.ZERO;
    message.activePoints = (object.activePoints !== undefined && object.activePoints !== null)
      ? Long.fromValue(object.activePoints)
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
