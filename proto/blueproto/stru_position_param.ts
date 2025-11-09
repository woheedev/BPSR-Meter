/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CutScenePointInfo } from "./stru_cut_scene_point_info";
import { ScenePointInfo } from "./stru_scene_point_info";
import { ScenePosIdInfo } from "./stru_scene_pos_id_info";

export const protobufPackage = "zproto";

export interface PositionParam {
  scenePointInfo: ScenePointInfo | undefined;
  scenePosInfo: ScenePosIdInfo | undefined;
  cutScenePointInfo: CutScenePointInfo | undefined;
}

function createBasePositionParam(): PositionParam {
  return { scenePointInfo: undefined, scenePosInfo: undefined, cutScenePointInfo: undefined };
}

export const PositionParam: MessageFns<PositionParam> = {
  encode(message: PositionParam, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.scenePointInfo !== undefined) {
      ScenePointInfo.encode(message.scenePointInfo, writer.uint32(18).fork()).join();
    }
    if (message.scenePosInfo !== undefined) {
      ScenePosIdInfo.encode(message.scenePosInfo, writer.uint32(26).fork()).join();
    }
    if (message.cutScenePointInfo !== undefined) {
      CutScenePointInfo.encode(message.cutScenePointInfo, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PositionParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.scenePointInfo = ScenePointInfo.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.scenePosInfo = ScenePosIdInfo.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.cutScenePointInfo = CutScenePointInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PositionParam {
    return {
      scenePointInfo: isSet(object.scenePointInfo) ? ScenePointInfo.fromJSON(object.scenePointInfo) : undefined,
      scenePosInfo: isSet(object.scenePosInfo) ? ScenePosIdInfo.fromJSON(object.scenePosInfo) : undefined,
      cutScenePointInfo: isSet(object.cutScenePointInfo)
        ? CutScenePointInfo.fromJSON(object.cutScenePointInfo)
        : undefined,
    };
  },

  toJSON(message: PositionParam): unknown {
    const obj: any = {};
    if (message.scenePointInfo !== undefined) {
      obj.scenePointInfo = ScenePointInfo.toJSON(message.scenePointInfo);
    }
    if (message.scenePosInfo !== undefined) {
      obj.scenePosInfo = ScenePosIdInfo.toJSON(message.scenePosInfo);
    }
    if (message.cutScenePointInfo !== undefined) {
      obj.cutScenePointInfo = CutScenePointInfo.toJSON(message.cutScenePointInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PositionParam>, I>>(base?: I): PositionParam {
    return PositionParam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PositionParam>, I>>(object: I): PositionParam {
    const message = createBasePositionParam();
    message.scenePointInfo = (object.scenePointInfo !== undefined && object.scenePointInfo !== null)
      ? ScenePointInfo.fromPartial(object.scenePointInfo)
      : undefined;
    message.scenePosInfo = (object.scenePosInfo !== undefined && object.scenePosInfo !== null)
      ? ScenePosIdInfo.fromPartial(object.scenePosInfo)
      : undefined;
    message.cutScenePointInfo = (object.cutScenePointInfo !== undefined && object.cutScenePointInfo !== null)
      ? CutScenePointInfo.fromPartial(object.cutScenePointInfo)
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
