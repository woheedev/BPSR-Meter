/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface CommunityData {
  communityId: Long;
  homelandId: Long;
  cohabitantIds: Long[];
  lastExitCohabitationTime: Long;
  buyCount: number;
  level: number;
}

function createBaseCommunityData(): CommunityData {
  return {
    communityId: Long.ZERO,
    homelandId: Long.ZERO,
    cohabitantIds: [],
    lastExitCohabitationTime: Long.ZERO,
    buyCount: 0,
    level: 0,
  };
}

export const CommunityData: MessageFns<CommunityData> = {
  encode(message: CommunityData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.communityId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.communityId.toString());
    }
    if (!message.homelandId.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.homelandId.toString());
    }
    writer.uint32(26).fork();
    for (const v of message.cohabitantIds) {
      writer.int64(v.toString());
    }
    writer.join();
    if (!message.lastExitCohabitationTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.lastExitCohabitationTime.toString());
    }
    if (message.buyCount !== 0) {
      writer.uint32(40).int32(message.buyCount);
    }
    if (message.level !== 0) {
      writer.uint32(48).int32(message.level);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CommunityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.communityId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.homelandId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag === 24) {
            message.cohabitantIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cohabitantIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.lastExitCohabitationTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.buyCount = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.level = reader.int32();
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

  fromJSON(object: any): CommunityData {
    return {
      communityId: isSet(object.communityId) ? Long.fromValue(object.communityId) : Long.ZERO,
      homelandId: isSet(object.homelandId) ? Long.fromValue(object.homelandId) : Long.ZERO,
      cohabitantIds: globalThis.Array.isArray(object?.cohabitantIds)
        ? object.cohabitantIds.map((e: any) => Long.fromValue(e))
        : [],
      lastExitCohabitationTime: isSet(object.lastExitCohabitationTime)
        ? Long.fromValue(object.lastExitCohabitationTime)
        : Long.ZERO,
      buyCount: isSet(object.buyCount) ? globalThis.Number(object.buyCount) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
    };
  },

  toJSON(message: CommunityData): unknown {
    const obj: any = {};
    if (!message.communityId.equals(Long.ZERO)) {
      obj.communityId = (message.communityId || Long.ZERO).toString();
    }
    if (!message.homelandId.equals(Long.ZERO)) {
      obj.homelandId = (message.homelandId || Long.ZERO).toString();
    }
    if (message.cohabitantIds?.length) {
      obj.cohabitantIds = message.cohabitantIds.map((e) => (e || Long.ZERO).toString());
    }
    if (!message.lastExitCohabitationTime.equals(Long.ZERO)) {
      obj.lastExitCohabitationTime = (message.lastExitCohabitationTime || Long.ZERO).toString();
    }
    if (message.buyCount !== 0) {
      obj.buyCount = Math.round(message.buyCount);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunityData>, I>>(base?: I): CommunityData {
    return CommunityData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommunityData>, I>>(object: I): CommunityData {
    const message = createBaseCommunityData();
    message.communityId = (object.communityId !== undefined && object.communityId !== null)
      ? Long.fromValue(object.communityId)
      : Long.ZERO;
    message.homelandId = (object.homelandId !== undefined && object.homelandId !== null)
      ? Long.fromValue(object.homelandId)
      : Long.ZERO;
    message.cohabitantIds = object.cohabitantIds?.map((e) => Long.fromValue(e)) || [];
    message.lastExitCohabitationTime =
      (object.lastExitCohabitationTime !== undefined && object.lastExitCohabitationTime !== null)
        ? Long.fromValue(object.lastExitCohabitationTime)
        : Long.ZERO;
    message.buyCount = object.buyCount ?? 0;
    message.level = object.level ?? 0;
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
