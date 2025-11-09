/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FashionAdvanceInfo {
  fashionId: number;
  usingAdvanceId: number;
  advanceIds: number[];
}

function createBaseFashionAdvanceInfo(): FashionAdvanceInfo {
  return { fashionId: 0, usingAdvanceId: 0, advanceIds: [] };
}

export const FashionAdvanceInfo: MessageFns<FashionAdvanceInfo> = {
  encode(message: FashionAdvanceInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fashionId !== 0) {
      writer.uint32(8).int32(message.fashionId);
    }
    if (message.usingAdvanceId !== 0) {
      writer.uint32(16).int32(message.usingAdvanceId);
    }
    writer.uint32(26).fork();
    for (const v of message.advanceIds) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionAdvanceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionAdvanceInfo();
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

          message.usingAdvanceId = reader.int32();
          continue;
        }
        case 3: {
          if (tag === 24) {
            message.advanceIds.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.advanceIds.push(reader.int32());
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

  fromJSON(object: any): FashionAdvanceInfo {
    return {
      fashionId: isSet(object.fashionId) ? globalThis.Number(object.fashionId) : 0,
      usingAdvanceId: isSet(object.usingAdvanceId) ? globalThis.Number(object.usingAdvanceId) : 0,
      advanceIds: globalThis.Array.isArray(object?.advanceIds)
        ? object.advanceIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: FashionAdvanceInfo): unknown {
    const obj: any = {};
    if (message.fashionId !== 0) {
      obj.fashionId = Math.round(message.fashionId);
    }
    if (message.usingAdvanceId !== 0) {
      obj.usingAdvanceId = Math.round(message.usingAdvanceId);
    }
    if (message.advanceIds?.length) {
      obj.advanceIds = message.advanceIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionAdvanceInfo>, I>>(base?: I): FashionAdvanceInfo {
    return FashionAdvanceInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionAdvanceInfo>, I>>(object: I): FashionAdvanceInfo {
    const message = createBaseFashionAdvanceInfo();
    message.fashionId = object.fashionId ?? 0;
    message.usingAdvanceId = object.usingAdvanceId ?? 0;
    message.advanceIds = object.advanceIds?.map((e) => e) || [];
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
