/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ScenePersonalObject } from "./stru_scene_personal_object";

export const protobufPackage = "zproto";

export interface PersonalObject {
  sceneObjData: { [key: number]: ScenePersonalObject };
}

export interface PersonalObject_SceneObjDataEntry {
  key: number;
  value: ScenePersonalObject | undefined;
}

function createBasePersonalObject(): PersonalObject {
  return { sceneObjData: {} };
}

export const PersonalObject: MessageFns<PersonalObject> = {
  encode(message: PersonalObject, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.sceneObjData).forEach(([key, value]) => {
      PersonalObject_SceneObjDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalObject {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PersonalObject_SceneObjDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.sceneObjData[entry1.key] = entry1.value;
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

  fromJSON(object: any): PersonalObject {
    return {
      sceneObjData: isObject(object.sceneObjData)
        ? Object.entries(object.sceneObjData).reduce<{ [key: number]: ScenePersonalObject }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ScenePersonalObject.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PersonalObject): unknown {
    const obj: any = {};
    if (message.sceneObjData) {
      const entries = Object.entries(message.sceneObjData);
      if (entries.length > 0) {
        obj.sceneObjData = {};
        entries.forEach(([k, v]) => {
          obj.sceneObjData[k] = ScenePersonalObject.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalObject>, I>>(base?: I): PersonalObject {
    return PersonalObject.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalObject>, I>>(object: I): PersonalObject {
    const message = createBasePersonalObject();
    message.sceneObjData = Object.entries(object.sceneObjData ?? {}).reduce<{ [key: number]: ScenePersonalObject }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ScenePersonalObject.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePersonalObject_SceneObjDataEntry(): PersonalObject_SceneObjDataEntry {
  return { key: 0, value: undefined };
}

export const PersonalObject_SceneObjDataEntry: MessageFns<PersonalObject_SceneObjDataEntry> = {
  encode(message: PersonalObject_SceneObjDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ScenePersonalObject.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalObject_SceneObjDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalObject_SceneObjDataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = ScenePersonalObject.decode(reader, reader.uint32());
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

  fromJSON(object: any): PersonalObject_SceneObjDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ScenePersonalObject.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PersonalObject_SceneObjDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ScenePersonalObject.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalObject_SceneObjDataEntry>, I>>(
    base?: I,
  ): PersonalObject_SceneObjDataEntry {
    return PersonalObject_SceneObjDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalObject_SceneObjDataEntry>, I>>(
    object: I,
  ): PersonalObject_SceneObjDataEntry {
    const message = createBasePersonalObject_SceneObjDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ScenePersonalObject.fromPartial(object.value)
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
