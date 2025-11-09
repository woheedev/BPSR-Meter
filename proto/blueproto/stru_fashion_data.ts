/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FashionInfo } from "./stru_fashion_info";

export const protobufPackage = "zproto";

export interface FashionData {
  fashionInfos: FashionInfo[];
}

function createBaseFashionData(): FashionData {
  return { fashionInfos: [] };
}

export const FashionData: MessageFns<FashionData> = {
  encode(message: FashionData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.fashionInfos) {
      FashionInfo.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.fashionInfos.push(FashionInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FashionData {
    return {
      fashionInfos: globalThis.Array.isArray(object?.fashionInfos)
        ? object.fashionInfos.map((e: any) => FashionInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FashionData): unknown {
    const obj: any = {};
    if (message.fashionInfos?.length) {
      obj.fashionInfos = message.fashionInfos.map((e) => FashionInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionData>, I>>(base?: I): FashionData {
    return FashionData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionData>, I>>(object: I): FashionData {
    const message = createBaseFashionData();
    message.fashionInfos = object.fashionInfos?.map((e) => FashionInfo.fromPartial(e)) || [];
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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
