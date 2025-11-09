/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface CharStatisticsData {
  loginDays: number;
  lastLoginTime: Long;
}

function createBaseCharStatisticsData(): CharStatisticsData {
  return { loginDays: 0, lastLoginTime: Long.UZERO };
}

export const CharStatisticsData: MessageFns<CharStatisticsData> = {
  encode(message: CharStatisticsData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.loginDays !== 0) {
      writer.uint32(8).int32(message.loginDays);
    }
    if (!message.lastLoginTime.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.lastLoginTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CharStatisticsData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharStatisticsData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.loginDays = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.lastLoginTime = Long.fromString(reader.uint64().toString(), true);
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

  fromJSON(object: any): CharStatisticsData {
    return {
      loginDays: isSet(object.loginDays) ? globalThis.Number(object.loginDays) : 0,
      lastLoginTime: isSet(object.lastLoginTime) ? Long.fromValue(object.lastLoginTime) : Long.UZERO,
    };
  },

  toJSON(message: CharStatisticsData): unknown {
    const obj: any = {};
    if (message.loginDays !== 0) {
      obj.loginDays = Math.round(message.loginDays);
    }
    if (!message.lastLoginTime.equals(Long.UZERO)) {
      obj.lastLoginTime = (message.lastLoginTime || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CharStatisticsData>, I>>(base?: I): CharStatisticsData {
    return CharStatisticsData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CharStatisticsData>, I>>(object: I): CharStatisticsData {
    const message = createBaseCharStatisticsData();
    message.loginDays = object.loginDays ?? 0;
    message.lastLoginTime = (object.lastLoginTime !== undefined && object.lastLoginTime !== null)
      ? Long.fromValue(object.lastLoginTime)
      : Long.UZERO;
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
