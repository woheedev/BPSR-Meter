/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EErrorCode, eErrorCodeFromJSON, eErrorCodeToJSON } from "./enum_e_error_code";
import { SocialData } from "./stru_social_data";

export const protobufPackage = "zproto";

export interface GetSocialDataReply {
  mask: Long;
  data: SocialData | undefined;
  errCode: EErrorCode;
}

function createBaseGetSocialDataReply(): GetSocialDataReply {
  return { mask: Long.ZERO, data: undefined, errCode: 0 };
}

export const GetSocialDataReply: MessageFns<GetSocialDataReply> = {
  encode(message: GetSocialDataReply, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.mask.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.mask.toString());
    }
    if (message.data !== undefined) {
      SocialData.encode(message.data, writer.uint32(18).fork()).join();
    }
    if (message.errCode !== 0) {
      writer.uint32(24).int32(message.errCode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetSocialDataReply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSocialDataReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.mask = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.data = SocialData.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.errCode = reader.int32() as any;
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

  fromJSON(object: any): GetSocialDataReply {
    return {
      mask: isSet(object.mask) ? Long.fromValue(object.mask) : Long.ZERO,
      data: isSet(object.data) ? SocialData.fromJSON(object.data) : undefined,
      errCode: isSet(object.errCode) ? eErrorCodeFromJSON(object.errCode) : 0,
    };
  },

  toJSON(message: GetSocialDataReply): unknown {
    const obj: any = {};
    if (!message.mask.equals(Long.ZERO)) {
      obj.mask = (message.mask || Long.ZERO).toString();
    }
    if (message.data !== undefined) {
      obj.data = SocialData.toJSON(message.data);
    }
    if (message.errCode !== 0) {
      obj.errCode = eErrorCodeToJSON(message.errCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSocialDataReply>, I>>(base?: I): GetSocialDataReply {
    return GetSocialDataReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSocialDataReply>, I>>(object: I): GetSocialDataReply {
    const message = createBaseGetSocialDataReply();
    message.mask = (object.mask !== undefined && object.mask !== null) ? Long.fromValue(object.mask) : Long.ZERO;
    message.data = (object.data !== undefined && object.data !== null)
      ? SocialData.fromPartial(object.data)
      : undefined;
    message.errCode = object.errCode ?? 0;
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
