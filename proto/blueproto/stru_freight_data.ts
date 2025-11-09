/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FreightData {
  refreshTime: Long;
  goodsValue: number;
  setOff: boolean;
  canReceive: boolean;
  upGoodsList: number[];
  keepGoodsList: number[];
  downGoodsList: number[];
  canRewardTime: Long;
}

function createBaseFreightData(): FreightData {
  return {
    refreshTime: Long.ZERO,
    goodsValue: 0,
    setOff: false,
    canReceive: false,
    upGoodsList: [],
    keepGoodsList: [],
    downGoodsList: [],
    canRewardTime: Long.ZERO,
  };
}

export const FreightData: MessageFns<FreightData> = {
  encode(message: FreightData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.refreshTime.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.refreshTime.toString());
    }
    if (message.goodsValue !== 0) {
      writer.uint32(16).int32(message.goodsValue);
    }
    if (message.setOff !== false) {
      writer.uint32(24).bool(message.setOff);
    }
    if (message.canReceive !== false) {
      writer.uint32(32).bool(message.canReceive);
    }
    writer.uint32(42).fork();
    for (const v of message.upGoodsList) {
      writer.int32(v);
    }
    writer.join();
    writer.uint32(50).fork();
    for (const v of message.keepGoodsList) {
      writer.int32(v);
    }
    writer.join();
    writer.uint32(58).fork();
    for (const v of message.downGoodsList) {
      writer.int32(v);
    }
    writer.join();
    if (!message.canRewardTime.equals(Long.ZERO)) {
      writer.uint32(64).int64(message.canRewardTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FreightData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreightData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.refreshTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.goodsValue = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.setOff = reader.bool();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.canReceive = reader.bool();
          continue;
        }
        case 5: {
          if (tag === 40) {
            message.upGoodsList.push(reader.int32());

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.upGoodsList.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 6: {
          if (tag === 48) {
            message.keepGoodsList.push(reader.int32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.keepGoodsList.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 7: {
          if (tag === 56) {
            message.downGoodsList.push(reader.int32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.downGoodsList.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.canRewardTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): FreightData {
    return {
      refreshTime: isSet(object.refreshTime) ? Long.fromValue(object.refreshTime) : Long.ZERO,
      goodsValue: isSet(object.goodsValue) ? globalThis.Number(object.goodsValue) : 0,
      setOff: isSet(object.setOff) ? globalThis.Boolean(object.setOff) : false,
      canReceive: isSet(object.canReceive) ? globalThis.Boolean(object.canReceive) : false,
      upGoodsList: globalThis.Array.isArray(object?.upGoodsList)
        ? object.upGoodsList.map((e: any) => globalThis.Number(e))
        : [],
      keepGoodsList: globalThis.Array.isArray(object?.keepGoodsList)
        ? object.keepGoodsList.map((e: any) => globalThis.Number(e))
        : [],
      downGoodsList: globalThis.Array.isArray(object?.downGoodsList)
        ? object.downGoodsList.map((e: any) => globalThis.Number(e))
        : [],
      canRewardTime: isSet(object.canRewardTime) ? Long.fromValue(object.canRewardTime) : Long.ZERO,
    };
  },

  toJSON(message: FreightData): unknown {
    const obj: any = {};
    if (!message.refreshTime.equals(Long.ZERO)) {
      obj.refreshTime = (message.refreshTime || Long.ZERO).toString();
    }
    if (message.goodsValue !== 0) {
      obj.goodsValue = Math.round(message.goodsValue);
    }
    if (message.setOff !== false) {
      obj.setOff = message.setOff;
    }
    if (message.canReceive !== false) {
      obj.canReceive = message.canReceive;
    }
    if (message.upGoodsList?.length) {
      obj.upGoodsList = message.upGoodsList.map((e) => Math.round(e));
    }
    if (message.keepGoodsList?.length) {
      obj.keepGoodsList = message.keepGoodsList.map((e) => Math.round(e));
    }
    if (message.downGoodsList?.length) {
      obj.downGoodsList = message.downGoodsList.map((e) => Math.round(e));
    }
    if (!message.canRewardTime.equals(Long.ZERO)) {
      obj.canRewardTime = (message.canRewardTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FreightData>, I>>(base?: I): FreightData {
    return FreightData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FreightData>, I>>(object: I): FreightData {
    const message = createBaseFreightData();
    message.refreshTime = (object.refreshTime !== undefined && object.refreshTime !== null)
      ? Long.fromValue(object.refreshTime)
      : Long.ZERO;
    message.goodsValue = object.goodsValue ?? 0;
    message.setOff = object.setOff ?? false;
    message.canReceive = object.canReceive ?? false;
    message.upGoodsList = object.upGoodsList?.map((e) => e) || [];
    message.keepGoodsList = object.keepGoodsList?.map((e) => e) || [];
    message.downGoodsList = object.downGoodsList?.map((e) => e) || [];
    message.canRewardTime = (object.canRewardTime !== undefined && object.canRewardTime !== null)
      ? Long.fromValue(object.canRewardTime)
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
