/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Position } from "./stru_position";

export const protobufPackage = "zproto";

export interface ScenePointInfo {
  position: Position | undefined;
  cameraId: number;
  sceneAreaId: number;
}

function createBaseScenePointInfo(): ScenePointInfo {
  return { position: undefined, cameraId: 0, sceneAreaId: 0 };
}

export const ScenePointInfo: MessageFns<ScenePointInfo> = {
  encode(message: ScenePointInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).join();
    }
    if (message.cameraId !== 0) {
      writer.uint32(16).int32(message.cameraId);
    }
    if (message.sceneAreaId !== 0) {
      writer.uint32(24).int32(message.sceneAreaId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScenePointInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenePointInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.position = Position.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.cameraId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.sceneAreaId = reader.int32();
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

  fromJSON(object: any): ScenePointInfo {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      cameraId: isSet(object.cameraId) ? globalThis.Number(object.cameraId) : 0,
      sceneAreaId: isSet(object.sceneAreaId) ? globalThis.Number(object.sceneAreaId) : 0,
    };
  },

  toJSON(message: ScenePointInfo): unknown {
    const obj: any = {};
    if (message.position !== undefined) {
      obj.position = Position.toJSON(message.position);
    }
    if (message.cameraId !== 0) {
      obj.cameraId = Math.round(message.cameraId);
    }
    if (message.sceneAreaId !== 0) {
      obj.sceneAreaId = Math.round(message.sceneAreaId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenePointInfo>, I>>(base?: I): ScenePointInfo {
    return ScenePointInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScenePointInfo>, I>>(object: I): ScenePointInfo {
    const message = createBaseScenePointInfo();
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    message.cameraId = object.cameraId ?? 0;
    message.sceneAreaId = object.sceneAreaId ?? 0;
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
