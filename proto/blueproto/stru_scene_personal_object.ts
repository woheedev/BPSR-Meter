/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ServerStateObjectInteractionParam } from "./stru_server_state_object_interaction_param";

export const protobufPackage = "zproto";

export interface ScenePersonalObject {
  personalObjData: Map<Long, ServerStateObjectInteractionParam>;
}

export interface ScenePersonalObject_PersonalObjDataEntry {
  key: Long;
  value: ServerStateObjectInteractionParam | undefined;
}

function createBaseScenePersonalObject(): ScenePersonalObject {
  return { personalObjData: new Map() };
}

export const ScenePersonalObject: MessageFns<ScenePersonalObject> = {
  encode(message: ScenePersonalObject, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    message.personalObjData.forEach((value, key) => {
      ScenePersonalObject_PersonalObjDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScenePersonalObject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenePersonalObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ScenePersonalObject_PersonalObjDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.personalObjData.set(entry1.key, entry1.value);
          }
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

  fromJSON(object: any): ScenePersonalObject {
    return {
      personalObjData: isObject(object.personalObjData)
        ? Object.entries(object.personalObjData).reduce<Map<Long, ServerStateObjectInteractionParam>>(
          (acc, [key, value]) => {
            acc.set(Long.fromValue(key), ServerStateObjectInteractionParam.fromJSON(value));
            return acc;
          },
          new Map(),
        )
        : new Map(),
    };
  },

  toJSON(message: ScenePersonalObject): unknown {
    const obj: any = {};
    if (message.personalObjData?.size) {
      obj.personalObjData = {};
      message.personalObjData.forEach((v, k) => {
        obj.personalObjData[longToNumber(k)] = ServerStateObjectInteractionParam.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenePersonalObject>, I>>(base?: I): ScenePersonalObject {
    return ScenePersonalObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScenePersonalObject>, I>>(object: I): ScenePersonalObject {
    const message = createBaseScenePersonalObject();
    message.personalObjData = (() => {
      const m = new Map();
      (object.personalObjData as Map<Long, ServerStateObjectInteractionParam> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, ServerStateObjectInteractionParam.fromPartial(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseScenePersonalObject_PersonalObjDataEntry(): ScenePersonalObject_PersonalObjDataEntry {
  return { key: Long.ZERO, value: undefined };
}

export const ScenePersonalObject_PersonalObjDataEntry: MessageFns<ScenePersonalObject_PersonalObjDataEntry> = {
  encode(message: ScenePersonalObject_PersonalObjDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      ServerStateObjectInteractionParam.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ScenePersonalObject_PersonalObjDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScenePersonalObject_PersonalObjDataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = ServerStateObjectInteractionParam.decode(reader, reader.uint32());
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

  fromJSON(object: any): ScenePersonalObject_PersonalObjDataEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? ServerStateObjectInteractionParam.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ScenePersonalObject_PersonalObjDataEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = ServerStateObjectInteractionParam.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScenePersonalObject_PersonalObjDataEntry>, I>>(
    base?: I,
  ): ScenePersonalObject_PersonalObjDataEntry {
    return ScenePersonalObject_PersonalObjDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScenePersonalObject_PersonalObjDataEntry>, I>>(
    object: I,
  ): ScenePersonalObject_PersonalObjDataEntry {
    const message = createBaseScenePersonalObject_PersonalObjDataEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? ServerStateObjectInteractionParam.fromPartial(object.value)
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
