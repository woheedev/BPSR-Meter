/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  EReceiveRewardStatus,
  eReceiveRewardStatusFromJSON,
  eReceiveRewardStatusToJSON,
} from "./enum_e_receive_reward_status";

export const protobufPackage = "zproto";

export interface CommonAwardInfo {
  id: number;
  awardStatus: EReceiveRewardStatus;
}

function createBaseCommonAwardInfo(): CommonAwardInfo {
  return { id: 0, awardStatus: 0 };
}

export const CommonAwardInfo: MessageFns<CommonAwardInfo> = {
  encode(message: CommonAwardInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.awardStatus !== 0) {
      writer.uint32(16).int32(message.awardStatus);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CommonAwardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommonAwardInfo();
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

          message.awardStatus = reader.int32() as any;
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

  fromJSON(object: any): CommonAwardInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      awardStatus: isSet(object.awardStatus) ? eReceiveRewardStatusFromJSON(object.awardStatus) : 0,
    };
  },

  toJSON(message: CommonAwardInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.awardStatus !== 0) {
      obj.awardStatus = eReceiveRewardStatusToJSON(message.awardStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommonAwardInfo>, I>>(base?: I): CommonAwardInfo {
    return CommonAwardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommonAwardInfo>, I>>(object: I): CommonAwardInfo {
    const message = createBaseCommonAwardInfo();
    message.id = object.id ?? 0;
    message.awardStatus = object.awardStatus ?? 0;
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
