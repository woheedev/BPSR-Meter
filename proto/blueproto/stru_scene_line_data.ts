/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ESceneLineStatus, eSceneLineStatusFromJSON, eSceneLineStatusToJSON } from "./enum_e_scene_line_status";

export const protobufPackage = "zproto";

export interface SceneLineData {
  lineId: number;
  status: ESceneLineStatus;
  sceneGuid: string;
}

function createBaseSceneLineData(): SceneLineData {
  return { lineId: 0, status: 0, sceneGuid: "" };
}

export const SceneLineData: MessageFns<SceneLineData> = {
  encode(message: SceneLineData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.lineId !== 0) {
      writer.uint32(8).uint32(message.lineId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.sceneGuid !== "") {
      writer.uint32(26).string(message.sceneGuid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SceneLineData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneLineData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.lineId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.sceneGuid = reader.string();
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

  fromJSON(object: any): SceneLineData {
    return {
      lineId: isSet(object.lineId) ? globalThis.Number(object.lineId) : 0,
      status: isSet(object.status) ? eSceneLineStatusFromJSON(object.status) : 0,
      sceneGuid: isSet(object.sceneGuid) ? globalThis.String(object.sceneGuid) : "",
    };
  },

  toJSON(message: SceneLineData): unknown {
    const obj: any = {};
    if (message.lineId !== 0) {
      obj.lineId = Math.round(message.lineId);
    }
    if (message.status !== 0) {
      obj.status = eSceneLineStatusToJSON(message.status);
    }
    if (message.sceneGuid !== "") {
      obj.sceneGuid = message.sceneGuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneLineData>, I>>(base?: I): SceneLineData {
    return SceneLineData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneLineData>, I>>(object: I): SceneLineData {
    const message = createBaseSceneLineData();
    message.lineId = object.lineId ?? 0;
    message.status = object.status ?? 0;
    message.sceneGuid = object.sceneGuid ?? "";
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
