/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FashionBenefitCollectionHistory {
  fashionId: number;
  time: Long;
  type: number;
  parameter: number;
}

function createBaseFashionBenefitCollectionHistory(): FashionBenefitCollectionHistory {
  return { fashionId: 0, time: Long.ZERO, type: 0, parameter: 0 };
}

export const FashionBenefitCollectionHistory: MessageFns<FashionBenefitCollectionHistory> = {
  encode(message: FashionBenefitCollectionHistory, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fashionId !== 0) {
      writer.uint32(8).int32(message.fashionId);
    }
    if (!message.time.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.time.toString());
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.parameter !== 0) {
      writer.uint32(32).int32(message.parameter);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionBenefitCollectionHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionBenefitCollectionHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.fashionId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.time = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.parameter = reader.int32();
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

  fromJSON(object: any): FashionBenefitCollectionHistory {
    return {
      fashionId: isSet(object.fashionId) ? globalThis.Number(object.fashionId) : 0,
      time: isSet(object.time) ? Long.fromValue(object.time) : Long.ZERO,
      type: isSet(object.type) ? globalThis.Number(object.type) : 0,
      parameter: isSet(object.parameter) ? globalThis.Number(object.parameter) : 0,
    };
  },

  toJSON(message: FashionBenefitCollectionHistory): unknown {
    const obj: any = {};
    if (message.fashionId !== 0) {
      obj.fashionId = Math.round(message.fashionId);
    }
    if (!message.time.equals(Long.ZERO)) {
      obj.time = (message.time || Long.ZERO).toString();
    }
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    if (message.parameter !== 0) {
      obj.parameter = Math.round(message.parameter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionBenefitCollectionHistory>, I>>(base?: I): FashionBenefitCollectionHistory {
    return FashionBenefitCollectionHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionBenefitCollectionHistory>, I>>(
    object: I,
  ): FashionBenefitCollectionHistory {
    const message = createBaseFashionBenefitCollectionHistory();
    message.fashionId = object.fashionId ?? 0;
    message.time = (object.time !== undefined && object.time !== null) ? Long.fromValue(object.time) : Long.ZERO;
    message.type = object.type ?? 0;
    message.parameter = object.parameter ?? 0;
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
