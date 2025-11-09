/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PictureInfo } from "./stru_picture_info";

export const protobufPackage = "zproto";

export interface AvatarInfo {
  avatarId: number;
  profile: PictureInfo | undefined;
  halfBody: PictureInfo | undefined;
  businessCardStyleId: number;
  avatarFrameId: number;
}

function createBaseAvatarInfo(): AvatarInfo {
  return { avatarId: 0, profile: undefined, halfBody: undefined, businessCardStyleId: 0, avatarFrameId: 0 };
}

export const AvatarInfo: MessageFns<AvatarInfo> = {
  encode(message: AvatarInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.avatarId !== 0) {
      writer.uint32(8).int32(message.avatarId);
    }
    if (message.profile !== undefined) {
      PictureInfo.encode(message.profile, writer.uint32(18).fork()).join();
    }
    if (message.halfBody !== undefined) {
      PictureInfo.encode(message.halfBody, writer.uint32(26).fork()).join();
    }
    if (message.businessCardStyleId !== 0) {
      writer.uint32(32).int32(message.businessCardStyleId);
    }
    if (message.avatarFrameId !== 0) {
      writer.uint32(40).int32(message.avatarFrameId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AvatarInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvatarInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.avatarId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.profile = PictureInfo.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.halfBody = PictureInfo.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.businessCardStyleId = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.avatarFrameId = reader.int32();
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

  fromJSON(object: any): AvatarInfo {
    return {
      avatarId: isSet(object.avatarId) ? globalThis.Number(object.avatarId) : 0,
      profile: isSet(object.profile) ? PictureInfo.fromJSON(object.profile) : undefined,
      halfBody: isSet(object.halfBody) ? PictureInfo.fromJSON(object.halfBody) : undefined,
      businessCardStyleId: isSet(object.businessCardStyleId) ? globalThis.Number(object.businessCardStyleId) : 0,
      avatarFrameId: isSet(object.avatarFrameId) ? globalThis.Number(object.avatarFrameId) : 0,
    };
  },

  toJSON(message: AvatarInfo): unknown {
    const obj: any = {};
    if (message.avatarId !== 0) {
      obj.avatarId = Math.round(message.avatarId);
    }
    if (message.profile !== undefined) {
      obj.profile = PictureInfo.toJSON(message.profile);
    }
    if (message.halfBody !== undefined) {
      obj.halfBody = PictureInfo.toJSON(message.halfBody);
    }
    if (message.businessCardStyleId !== 0) {
      obj.businessCardStyleId = Math.round(message.businessCardStyleId);
    }
    if (message.avatarFrameId !== 0) {
      obj.avatarFrameId = Math.round(message.avatarFrameId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AvatarInfo>, I>>(base?: I): AvatarInfo {
    return AvatarInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AvatarInfo>, I>>(object: I): AvatarInfo {
    const message = createBaseAvatarInfo();
    message.avatarId = object.avatarId ?? 0;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? PictureInfo.fromPartial(object.profile)
      : undefined;
    message.halfBody = (object.halfBody !== undefined && object.halfBody !== null)
      ? PictureInfo.fromPartial(object.halfBody)
      : undefined;
    message.businessCardStyleId = object.businessCardStyleId ?? 0;
    message.avatarFrameId = object.avatarFrameId ?? 0;
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
