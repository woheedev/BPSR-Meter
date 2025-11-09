/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UserSceneInfo {
  sceneId: number;
  sceneGuid: string;
  lineId: number;
}

function createBaseUserSceneInfo(): UserSceneInfo {
  return { sceneId: 0, sceneGuid: "", lineId: 0 };
}

export const UserSceneInfo: MessageFns<UserSceneInfo> = {
  encode(message: UserSceneInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sceneId !== 0) {
      writer.uint32(8).int32(message.sceneId);
    }
    if (message.sceneGuid !== "") {
      writer.uint32(18).string(message.sceneGuid);
    }
    if (message.lineId !== 0) {
      writer.uint32(24).int32(message.lineId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserSceneInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSceneInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.sceneId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.sceneGuid = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.lineId = reader.int32();
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

  fromJSON(object: any): UserSceneInfo {
    return {
      sceneId: isSet(object.sceneId) ? globalThis.Number(object.sceneId) : 0,
      sceneGuid: isSet(object.sceneGuid) ? globalThis.String(object.sceneGuid) : "",
      lineId: isSet(object.lineId) ? globalThis.Number(object.lineId) : 0,
    };
  },

  toJSON(message: UserSceneInfo): unknown {
    const obj: any = {};
    if (message.sceneId !== 0) {
      obj.sceneId = Math.round(message.sceneId);
    }
    if (message.sceneGuid !== "") {
      obj.sceneGuid = message.sceneGuid;
    }
    if (message.lineId !== 0) {
      obj.lineId = Math.round(message.lineId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSceneInfo>, I>>(base?: I): UserSceneInfo {
    return UserSceneInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSceneInfo>, I>>(object: I): UserSceneInfo {
    const message = createBaseUserSceneInfo();
    message.sceneId = object.sceneId ?? 0;
    message.sceneGuid = object.sceneGuid ?? "";
    message.lineId = object.lineId ?? 0;
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
