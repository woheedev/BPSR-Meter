/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PictureVerify } from "./stru_picture_verify";

export const protobufPackage = "zproto";

export interface PictureInfo {
  url: string;
  verify: PictureVerify | undefined;
}

function createBasePictureInfo(): PictureInfo {
  return { url: "", verify: undefined };
}

export const PictureInfo: MessageFns<PictureInfo> = {
  encode(message: PictureInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.verify !== undefined) {
      PictureVerify.encode(message.verify, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PictureInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePictureInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.verify = PictureVerify.decode(reader, reader.uint32());
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

  fromJSON(object: any): PictureInfo {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      verify: isSet(object.verify) ? PictureVerify.fromJSON(object.verify) : undefined,
    };
  },

  toJSON(message: PictureInfo): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.verify !== undefined) {
      obj.verify = PictureVerify.toJSON(message.verify);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PictureInfo>, I>>(base?: I): PictureInfo {
    return PictureInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PictureInfo>, I>>(object: I): PictureInfo {
    const message = createBasePictureInfo();
    message.url = object.url ?? "";
    message.verify = (object.verify !== undefined && object.verify !== null)
      ? PictureVerify.fromPartial(object.verify)
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
