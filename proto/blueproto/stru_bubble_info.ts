/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface BubbleInfo {
  bubbleScore: number;
  bubbleAwardCount: number;
  additionalTargetUuidList: Long[];
  lastRefreshTime: Long;
}

function createBaseBubbleInfo(): BubbleInfo {
  return { bubbleScore: 0, bubbleAwardCount: 0, additionalTargetUuidList: [], lastRefreshTime: Long.ZERO };
}

export const BubbleInfo: MessageFns<BubbleInfo> = {
  encode(message: BubbleInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.bubbleScore !== 0) {
      writer.uint32(8).uint32(message.bubbleScore);
    }
    if (message.bubbleAwardCount !== 0) {
      writer.uint32(16).uint32(message.bubbleAwardCount);
    }
    writer.uint32(26).fork();
    for (const v of message.additionalTargetUuidList) {
      writer.uint64(v.toString());
    }
    writer.join();
    if (!message.lastRefreshTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.lastRefreshTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BubbleInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBubbleInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.bubbleScore = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.bubbleAwardCount = reader.uint32();
          continue;
        }
        case 3: {
          if (tag === 24) {
            message.additionalTargetUuidList.push(Long.fromString(reader.uint64().toString(), true));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.additionalTargetUuidList.push(Long.fromString(reader.uint64().toString(), true));
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.lastRefreshTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): BubbleInfo {
    return {
      bubbleScore: isSet(object.bubbleScore) ? globalThis.Number(object.bubbleScore) : 0,
      bubbleAwardCount: isSet(object.bubbleAwardCount) ? globalThis.Number(object.bubbleAwardCount) : 0,
      additionalTargetUuidList: globalThis.Array.isArray(object?.additionalTargetUuidList)
        ? object.additionalTargetUuidList.map((e: any) => Long.fromValue(e))
        : [],
      lastRefreshTime: isSet(object.lastRefreshTime) ? Long.fromValue(object.lastRefreshTime) : Long.ZERO,
    };
  },

  toJSON(message: BubbleInfo): unknown {
    const obj: any = {};
    if (message.bubbleScore !== 0) {
      obj.bubbleScore = Math.round(message.bubbleScore);
    }
    if (message.bubbleAwardCount !== 0) {
      obj.bubbleAwardCount = Math.round(message.bubbleAwardCount);
    }
    if (message.additionalTargetUuidList?.length) {
      obj.additionalTargetUuidList = message.additionalTargetUuidList.map((e) => (e || Long.UZERO).toString());
    }
    if (!message.lastRefreshTime.equals(Long.ZERO)) {
      obj.lastRefreshTime = (message.lastRefreshTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BubbleInfo>, I>>(base?: I): BubbleInfo {
    return BubbleInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BubbleInfo>, I>>(object: I): BubbleInfo {
    const message = createBaseBubbleInfo();
    message.bubbleScore = object.bubbleScore ?? 0;
    message.bubbleAwardCount = object.bubbleAwardCount ?? 0;
    message.additionalTargetUuidList = object.additionalTargetUuidList?.map((e) => Long.fromValue(e)) || [];
    message.lastRefreshTime = (object.lastRefreshTime !== undefined && object.lastRefreshTime !== null)
      ? Long.fromValue(object.lastRefreshTime)
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
