/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EventData } from "./stru_event_data";

export const protobufPackage = "zproto";

export interface CutSceneInfo {
  cutSceneId: number;
  flag: number;
  sceneId: number;
  eventData: EventData | undefined;
}

function createBaseCutSceneInfo(): CutSceneInfo {
  return { cutSceneId: 0, flag: 0, sceneId: 0, eventData: undefined };
}

export const CutSceneInfo: MessageFns<CutSceneInfo> = {
  encode(message: CutSceneInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cutSceneId !== 0) {
      writer.uint32(8).int32(message.cutSceneId);
    }
    if (message.flag !== 0) {
      writer.uint32(16).uint32(message.flag);
    }
    if (message.sceneId !== 0) {
      writer.uint32(24).uint32(message.sceneId);
    }
    if (message.eventData !== undefined) {
      EventData.encode(message.eventData, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CutSceneInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCutSceneInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.cutSceneId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.flag = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.sceneId = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.eventData = EventData.decode(reader, reader.uint32());
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

  fromJSON(object: any): CutSceneInfo {
    return {
      cutSceneId: isSet(object.cutSceneId) ? globalThis.Number(object.cutSceneId) : 0,
      flag: isSet(object.flag) ? globalThis.Number(object.flag) : 0,
      sceneId: isSet(object.sceneId) ? globalThis.Number(object.sceneId) : 0,
      eventData: isSet(object.eventData) ? EventData.fromJSON(object.eventData) : undefined,
    };
  },

  toJSON(message: CutSceneInfo): unknown {
    const obj: any = {};
    if (message.cutSceneId !== 0) {
      obj.cutSceneId = Math.round(message.cutSceneId);
    }
    if (message.flag !== 0) {
      obj.flag = Math.round(message.flag);
    }
    if (message.sceneId !== 0) {
      obj.sceneId = Math.round(message.sceneId);
    }
    if (message.eventData !== undefined) {
      obj.eventData = EventData.toJSON(message.eventData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CutSceneInfo>, I>>(base?: I): CutSceneInfo {
    return CutSceneInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CutSceneInfo>, I>>(object: I): CutSceneInfo {
    const message = createBaseCutSceneInfo();
    message.cutSceneId = object.cutSceneId ?? 0;
    message.flag = object.flag ?? 0;
    message.sceneId = object.sceneId ?? 0;
    message.eventData = (object.eventData !== undefined && object.eventData !== null)
      ? EventData.fromPartial(object.eventData)
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
