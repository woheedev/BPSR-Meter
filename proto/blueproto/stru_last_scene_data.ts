/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Position } from "./stru_position";

export const protobufPackage = "zproto";

export interface LastSceneData {
  sceneId: number;
  pos: Position | undefined;
  sceneAreaId: number;
}

function createBaseLastSceneData(): LastSceneData {
  return { sceneId: 0, pos: undefined, sceneAreaId: 0 };
}

export const LastSceneData: MessageFns<LastSceneData> = {
  encode(message: LastSceneData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sceneId !== 0) {
      writer.uint32(8).uint32(message.sceneId);
    }
    if (message.pos !== undefined) {
      Position.encode(message.pos, writer.uint32(18).fork()).join();
    }
    if (message.sceneAreaId !== 0) {
      writer.uint32(24).int32(message.sceneAreaId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LastSceneData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastSceneData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.sceneId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pos = Position.decode(reader, reader.uint32());
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

  fromJSON(object: any): LastSceneData {
    return {
      sceneId: isSet(object.sceneId) ? globalThis.Number(object.sceneId) : 0,
      pos: isSet(object.pos) ? Position.fromJSON(object.pos) : undefined,
      sceneAreaId: isSet(object.sceneAreaId) ? globalThis.Number(object.sceneAreaId) : 0,
    };
  },

  toJSON(message: LastSceneData): unknown {
    const obj: any = {};
    if (message.sceneId !== 0) {
      obj.sceneId = Math.round(message.sceneId);
    }
    if (message.pos !== undefined) {
      obj.pos = Position.toJSON(message.pos);
    }
    if (message.sceneAreaId !== 0) {
      obj.sceneAreaId = Math.round(message.sceneAreaId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LastSceneData>, I>>(base?: I): LastSceneData {
    return LastSceneData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LastSceneData>, I>>(object: I): LastSceneData {
    const message = createBaseLastSceneData();
    message.sceneId = object.sceneId ?? 0;
    message.pos = (object.pos !== undefined && object.pos !== null) ? Position.fromPartial(object.pos) : undefined;
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
