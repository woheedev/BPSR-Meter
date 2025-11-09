/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface RechargeData {
  accumulateAmount: Long;
  lastRechargeTime: Long;
  lastRechargeAmount: Long;
  lastDiamondAmount: Long;
}

function createBaseRechargeData(): RechargeData {
  return {
    accumulateAmount: Long.ZERO,
    lastRechargeTime: Long.ZERO,
    lastRechargeAmount: Long.ZERO,
    lastDiamondAmount: Long.ZERO,
  };
}

export const RechargeData: MessageFns<RechargeData> = {
  encode(message: RechargeData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.accumulateAmount.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.accumulateAmount.toString());
    }
    if (!message.lastRechargeTime.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.lastRechargeTime.toString());
    }
    if (!message.lastRechargeAmount.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.lastRechargeAmount.toString());
    }
    if (!message.lastDiamondAmount.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.lastDiamondAmount.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RechargeData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRechargeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.accumulateAmount = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.lastRechargeTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.lastRechargeAmount = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.lastDiamondAmount = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): RechargeData {
    return {
      accumulateAmount: isSet(object.accumulateAmount) ? Long.fromValue(object.accumulateAmount) : Long.ZERO,
      lastRechargeTime: isSet(object.lastRechargeTime) ? Long.fromValue(object.lastRechargeTime) : Long.ZERO,
      lastRechargeAmount: isSet(object.lastRechargeAmount) ? Long.fromValue(object.lastRechargeAmount) : Long.ZERO,
      lastDiamondAmount: isSet(object.lastDiamondAmount) ? Long.fromValue(object.lastDiamondAmount) : Long.ZERO,
    };
  },

  toJSON(message: RechargeData): unknown {
    const obj: any = {};
    if (!message.accumulateAmount.equals(Long.ZERO)) {
      obj.accumulateAmount = (message.accumulateAmount || Long.ZERO).toString();
    }
    if (!message.lastRechargeTime.equals(Long.ZERO)) {
      obj.lastRechargeTime = (message.lastRechargeTime || Long.ZERO).toString();
    }
    if (!message.lastRechargeAmount.equals(Long.ZERO)) {
      obj.lastRechargeAmount = (message.lastRechargeAmount || Long.ZERO).toString();
    }
    if (!message.lastDiamondAmount.equals(Long.ZERO)) {
      obj.lastDiamondAmount = (message.lastDiamondAmount || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RechargeData>, I>>(base?: I): RechargeData {
    return RechargeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RechargeData>, I>>(object: I): RechargeData {
    const message = createBaseRechargeData();
    message.accumulateAmount = (object.accumulateAmount !== undefined && object.accumulateAmount !== null)
      ? Long.fromValue(object.accumulateAmount)
      : Long.ZERO;
    message.lastRechargeTime = (object.lastRechargeTime !== undefined && object.lastRechargeTime !== null)
      ? Long.fromValue(object.lastRechargeTime)
      : Long.ZERO;
    message.lastRechargeAmount = (object.lastRechargeAmount !== undefined && object.lastRechargeAmount !== null)
      ? Long.fromValue(object.lastRechargeAmount)
      : Long.ZERO;
    message.lastDiamondAmount = (object.lastDiamondAmount !== undefined && object.lastDiamondAmount !== null)
      ? Long.fromValue(object.lastDiamondAmount)
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
