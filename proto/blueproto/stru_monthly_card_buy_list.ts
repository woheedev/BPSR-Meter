/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MonthlyCardBuyList {
  beginTime: Long;
  endTime: Long;
  lastAwardDayTime: Long;
}

function createBaseMonthlyCardBuyList(): MonthlyCardBuyList {
  return { beginTime: Long.ZERO, endTime: Long.ZERO, lastAwardDayTime: Long.ZERO };
}

export const MonthlyCardBuyList: MessageFns<MonthlyCardBuyList> = {
  encode(message: MonthlyCardBuyList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.beginTime.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.beginTime.toString());
    }
    if (!message.endTime.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.endTime.toString());
    }
    if (!message.lastAwardDayTime.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.lastAwardDayTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonthlyCardBuyList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthlyCardBuyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.beginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.endTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.lastAwardDayTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): MonthlyCardBuyList {
    return {
      beginTime: isSet(object.beginTime) ? Long.fromValue(object.beginTime) : Long.ZERO,
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
      lastAwardDayTime: isSet(object.lastAwardDayTime) ? Long.fromValue(object.lastAwardDayTime) : Long.ZERO,
    };
  },

  toJSON(message: MonthlyCardBuyList): unknown {
    const obj: any = {};
    if (!message.beginTime.equals(Long.ZERO)) {
      obj.beginTime = (message.beginTime || Long.ZERO).toString();
    }
    if (!message.endTime.equals(Long.ZERO)) {
      obj.endTime = (message.endTime || Long.ZERO).toString();
    }
    if (!message.lastAwardDayTime.equals(Long.ZERO)) {
      obj.lastAwardDayTime = (message.lastAwardDayTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyCardBuyList>, I>>(base?: I): MonthlyCardBuyList {
    return MonthlyCardBuyList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyCardBuyList>, I>>(object: I): MonthlyCardBuyList {
    const message = createBaseMonthlyCardBuyList();
    message.beginTime = (object.beginTime !== undefined && object.beginTime !== null)
      ? Long.fromValue(object.beginTime)
      : Long.ZERO;
    message.endTime = (object.endTime !== undefined && object.endTime !== null)
      ? Long.fromValue(object.endTime)
      : Long.ZERO;
    message.lastAwardDayTime = (object.lastAwardDayTime !== undefined && object.lastAwardDayTime !== null)
      ? Long.fromValue(object.lastAwardDayTime)
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
