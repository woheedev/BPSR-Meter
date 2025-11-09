/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ProfileInfo {
  profileId: number;
  profileUrl: string;
  halfBodyUrl: string;
}

function createBaseProfileInfo(): ProfileInfo {
  return { profileId: 0, profileUrl: "", halfBodyUrl: "" };
}

export const ProfileInfo: MessageFns<ProfileInfo> = {
  encode(message: ProfileInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.profileId !== 0) {
      writer.uint32(8).int32(message.profileId);
    }
    if (message.profileUrl !== "") {
      writer.uint32(18).string(message.profileUrl);
    }
    if (message.halfBodyUrl !== "") {
      writer.uint32(26).string(message.halfBodyUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfileInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.profileId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.profileUrl = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.halfBodyUrl = reader.string();
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

  fromJSON(object: any): ProfileInfo {
    return {
      profileId: isSet(object.profileId) ? globalThis.Number(object.profileId) : 0,
      profileUrl: isSet(object.profileUrl) ? globalThis.String(object.profileUrl) : "",
      halfBodyUrl: isSet(object.halfBodyUrl) ? globalThis.String(object.halfBodyUrl) : "",
    };
  },

  toJSON(message: ProfileInfo): unknown {
    const obj: any = {};
    if (message.profileId !== 0) {
      obj.profileId = Math.round(message.profileId);
    }
    if (message.profileUrl !== "") {
      obj.profileUrl = message.profileUrl;
    }
    if (message.halfBodyUrl !== "") {
      obj.halfBodyUrl = message.halfBodyUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileInfo>, I>>(base?: I): ProfileInfo {
    return ProfileInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileInfo>, I>>(object: I): ProfileInfo {
    const message = createBaseProfileInfo();
    message.profileId = object.profileId ?? 0;
    message.profileUrl = object.profileUrl ?? "";
    message.halfBodyUrl = object.halfBodyUrl ?? "";
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
