/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FashionColorInfo } from "./stru_fashion_color_info";

export const protobufPackage = "zproto";

export interface FashionInfo {
  slot: number;
  fashionId: number;
  colors: FashionColorInfo | undefined;
}

function createBaseFashionInfo(): FashionInfo {
  return { slot: 0, fashionId: 0, colors: undefined };
}

export const FashionInfo: MessageFns<FashionInfo> = {
  encode(message: FashionInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.slot !== 0) {
      writer.uint32(8).int32(message.slot);
    }
    if (message.fashionId !== 0) {
      writer.uint32(16).int32(message.fashionId);
    }
    if (message.colors !== undefined) {
      FashionColorInfo.encode(message.colors, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.slot = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.fashionId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.colors = FashionColorInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): FashionInfo {
    return {
      slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0,
      fashionId: isSet(object.fashionId) ? globalThis.Number(object.fashionId) : 0,
      colors: isSet(object.colors) ? FashionColorInfo.fromJSON(object.colors) : undefined,
    };
  },

  toJSON(message: FashionInfo): unknown {
    const obj: any = {};
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    if (message.fashionId !== 0) {
      obj.fashionId = Math.round(message.fashionId);
    }
    if (message.colors !== undefined) {
      obj.colors = FashionColorInfo.toJSON(message.colors);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionInfo>, I>>(base?: I): FashionInfo {
    return FashionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionInfo>, I>>(object: I): FashionInfo {
    const message = createBaseFashionInfo();
    message.slot = object.slot ?? 0;
    message.fashionId = object.fashionId ?? 0;
    message.colors = (object.colors !== undefined && object.colors !== null)
      ? FashionColorInfo.fromPartial(object.colors)
      : undefined;
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
