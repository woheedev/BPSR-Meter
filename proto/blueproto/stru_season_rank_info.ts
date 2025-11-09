/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SeasonRankInfo {
  curRanKStar: number;
  receivedRankStar: number[];
}

function createBaseSeasonRankInfo(): SeasonRankInfo {
  return { curRanKStar: 0, receivedRankStar: [] };
}

export const SeasonRankInfo: MessageFns<SeasonRankInfo> = {
  encode(message: SeasonRankInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.curRanKStar !== 0) {
      writer.uint32(8).uint32(message.curRanKStar);
    }
    writer.uint32(18).fork();
    for (const v of message.receivedRankStar) {
      writer.uint32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonRankInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonRankInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.curRanKStar = reader.uint32();
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.receivedRankStar.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.receivedRankStar.push(reader.uint32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SeasonRankInfo {
    return {
      curRanKStar: isSet(object.curRanKStar) ? globalThis.Number(object.curRanKStar) : 0,
      receivedRankStar: globalThis.Array.isArray(object?.receivedRankStar)
        ? object.receivedRankStar.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: SeasonRankInfo): unknown {
    const obj: any = {};
    if (message.curRanKStar !== 0) {
      obj.curRanKStar = Math.round(message.curRanKStar);
    }
    if (message.receivedRankStar?.length) {
      obj.receivedRankStar = message.receivedRankStar.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonRankInfo>, I>>(base?: I): SeasonRankInfo {
    return SeasonRankInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonRankInfo>, I>>(object: I): SeasonRankInfo {
    const message = createBaseSeasonRankInfo();
    message.curRanKStar = object.curRanKStar ?? 0;
    message.receivedRankStar = object.receivedRankStar?.map((e) => e) || [];
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
