/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SceneRecord {
  cnt: Long;
  groupCnts: { [key: number]: Long };
}

export interface SceneRecord_GroupCntsEntry {
  key: number;
  value: Long;
}

function createBaseSceneRecord(): SceneRecord {
  return { cnt: Long.UZERO, groupCnts: {} };
}

export const SceneRecord: MessageFns<SceneRecord> = {
  encode(message: SceneRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.cnt.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.cnt.toString());
    }
    Object.entries(message.groupCnts).forEach(([key, value]) => {
      SceneRecord_GroupCntsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SceneRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.cnt = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = SceneRecord_GroupCntsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.groupCnts[entry2.key] = entry2.value;
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

  fromJSON(object: any): SceneRecord {
    return {
      cnt: isSet(object.cnt) ? Long.fromValue(object.cnt) : Long.UZERO,
      groupCnts: isObject(object.groupCnts)
        ? Object.entries(object.groupCnts).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SceneRecord): unknown {
    const obj: any = {};
    if (!message.cnt.equals(Long.UZERO)) {
      obj.cnt = (message.cnt || Long.UZERO).toString();
    }
    if (message.groupCnts) {
      const entries = Object.entries(message.groupCnts);
      if (entries.length > 0) {
        obj.groupCnts = {};
        entries.forEach(([k, v]) => {
          obj.groupCnts[k] = v.toString();
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneRecord>, I>>(base?: I): SceneRecord {
    return SceneRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneRecord>, I>>(object: I): SceneRecord {
    const message = createBaseSceneRecord();
    message.cnt = (object.cnt !== undefined && object.cnt !== null) ? Long.fromValue(object.cnt) : Long.UZERO;
    message.groupCnts = Object.entries(object.groupCnts ?? {}).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Long.fromValue(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSceneRecord_GroupCntsEntry(): SceneRecord_GroupCntsEntry {
  return { key: 0, value: Long.UZERO };
}

export const SceneRecord_GroupCntsEntry: MessageFns<SceneRecord_GroupCntsEntry> = {
  encode(message: SceneRecord_GroupCntsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SceneRecord_GroupCntsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneRecord_GroupCntsEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.uint64().toString(), true);
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

  fromJSON(object: any): SceneRecord_GroupCntsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
    };
  },

  toJSON(message: SceneRecord_GroupCntsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.UZERO)) {
      obj.value = (message.value || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneRecord_GroupCntsEntry>, I>>(base?: I): SceneRecord_GroupCntsEntry {
    return SceneRecord_GroupCntsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneRecord_GroupCntsEntry>, I>>(object: I): SceneRecord_GroupCntsEntry {
    const message = createBaseSceneRecord_GroupCntsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.UZERO;
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
