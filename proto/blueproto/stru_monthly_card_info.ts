/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  EReceiveRewardStatus,
  eReceiveRewardStatusFromJSON,
  eReceiveRewardStatusToJSON,
} from "./enum_e_receive_reward_status";
import { MonthCardItem } from "./stru_month_card_item";

export const protobufPackage = "zproto";

export interface MonthlyCardInfo {
  limitAwardStatus: EReceiveRewardStatus;
  awardStatus: EReceiveRewardStatus;
  monthCardItem: MonthCardItem | undefined;
  beginTime: Long;
  endTime: Long;
}

function createBaseMonthlyCardInfo(): MonthlyCardInfo {
  return { limitAwardStatus: 0, awardStatus: 0, monthCardItem: undefined, beginTime: Long.ZERO, endTime: Long.ZERO };
}

export const MonthlyCardInfo: MessageFns<MonthlyCardInfo> = {
  encode(message: MonthlyCardInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.limitAwardStatus !== 0) {
      writer.uint32(8).int32(message.limitAwardStatus);
    }
    if (message.awardStatus !== 0) {
      writer.uint32(16).int32(message.awardStatus);
    }
    if (message.monthCardItem !== undefined) {
      MonthCardItem.encode(message.monthCardItem, writer.uint32(26).fork()).join();
    }
    if (!message.beginTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.beginTime.toString());
    }
    if (!message.endTime.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.endTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonthlyCardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthlyCardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.limitAwardStatus = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.awardStatus = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.monthCardItem = MonthCardItem.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.beginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.endTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): MonthlyCardInfo {
    return {
      limitAwardStatus: isSet(object.limitAwardStatus) ? eReceiveRewardStatusFromJSON(object.limitAwardStatus) : 0,
      awardStatus: isSet(object.awardStatus) ? eReceiveRewardStatusFromJSON(object.awardStatus) : 0,
      monthCardItem: isSet(object.monthCardItem) ? MonthCardItem.fromJSON(object.monthCardItem) : undefined,
      beginTime: isSet(object.beginTime) ? Long.fromValue(object.beginTime) : Long.ZERO,
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.ZERO,
    };
  },

  toJSON(message: MonthlyCardInfo): unknown {
    const obj: any = {};
    if (message.limitAwardStatus !== 0) {
      obj.limitAwardStatus = eReceiveRewardStatusToJSON(message.limitAwardStatus);
    }
    if (message.awardStatus !== 0) {
      obj.awardStatus = eReceiveRewardStatusToJSON(message.awardStatus);
    }
    if (message.monthCardItem !== undefined) {
      obj.monthCardItem = MonthCardItem.toJSON(message.monthCardItem);
    }
    if (!message.beginTime.equals(Long.ZERO)) {
      obj.beginTime = (message.beginTime || Long.ZERO).toString();
    }
    if (!message.endTime.equals(Long.ZERO)) {
      obj.endTime = (message.endTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyCardInfo>, I>>(base?: I): MonthlyCardInfo {
    return MonthlyCardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyCardInfo>, I>>(object: I): MonthlyCardInfo {
    const message = createBaseMonthlyCardInfo();
    message.limitAwardStatus = object.limitAwardStatus ?? 0;
    message.awardStatus = object.awardStatus ?? 0;
    message.monthCardItem = (object.monthCardItem !== undefined && object.monthCardItem !== null)
      ? MonthCardItem.fromPartial(object.monthCardItem)
      : undefined;
    message.beginTime = (object.beginTime !== undefined && object.beginTime !== null)
      ? Long.fromValue(object.beginTime)
      : Long.ZERO;
    message.endTime = (object.endTime !== undefined && object.endTime !== null)
      ? Long.fromValue(object.endTime)
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
