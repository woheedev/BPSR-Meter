/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SceneRecord } from "./stru_scene_record";

export const protobufPackage = "zproto";

export interface StatRecord {
  cnt: Long;
  groupCnts: { [key: number]: Long };
  sceneRecords: { [key: number]: SceneRecord };
}

export interface StatRecord_GroupCntsEntry {
  key: number;
  value: Long;
}

export interface StatRecord_SceneRecordsEntry {
  key: number;
  value: SceneRecord | undefined;
}

function createBaseStatRecord(): StatRecord {
  return { cnt: Long.UZERO, groupCnts: {}, sceneRecords: {} };
}

export const StatRecord: MessageFns<StatRecord> = {
  encode(message: StatRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.cnt.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.cnt.toString());
    }
    Object.entries(message.groupCnts).forEach(([key, value]) => {
      StatRecord_GroupCntsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.sceneRecords).forEach(([key, value]) => {
      StatRecord_SceneRecordsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatRecord();
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

          const entry2 = StatRecord_GroupCntsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.groupCnts[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = StatRecord_SceneRecordsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.sceneRecords[entry3.key] = entry3.value;
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

  fromJSON(object: any): StatRecord {
    return {
      cnt: isSet(object.cnt) ? Long.fromValue(object.cnt) : Long.UZERO,
      groupCnts: isObject(object.groupCnts)
        ? Object.entries(object.groupCnts).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
      sceneRecords: isObject(object.sceneRecords)
        ? Object.entries(object.sceneRecords).reduce<{ [key: number]: SceneRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SceneRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: StatRecord): unknown {
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
    if (message.sceneRecords) {
      const entries = Object.entries(message.sceneRecords);
      if (entries.length > 0) {
        obj.sceneRecords = {};
        entries.forEach(([k, v]) => {
          obj.sceneRecords[k] = SceneRecord.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatRecord>, I>>(base?: I): StatRecord {
    return StatRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatRecord>, I>>(object: I): StatRecord {
    const message = createBaseStatRecord();
    message.cnt = (object.cnt !== undefined && object.cnt !== null) ? Long.fromValue(object.cnt) : Long.UZERO;
    message.groupCnts = Object.entries(object.groupCnts ?? {}).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Long.fromValue(value);
      }
      return acc;
    }, {});
    message.sceneRecords = Object.entries(object.sceneRecords ?? {}).reduce<{ [key: number]: SceneRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = SceneRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseStatRecord_GroupCntsEntry(): StatRecord_GroupCntsEntry {
  return { key: 0, value: Long.UZERO };
}

export const StatRecord_GroupCntsEntry: MessageFns<StatRecord_GroupCntsEntry> = {
  encode(message: StatRecord_GroupCntsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatRecord_GroupCntsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatRecord_GroupCntsEntry();
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

  fromJSON(object: any): StatRecord_GroupCntsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
    };
  },

  toJSON(message: StatRecord_GroupCntsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.UZERO)) {
      obj.value = (message.value || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatRecord_GroupCntsEntry>, I>>(base?: I): StatRecord_GroupCntsEntry {
    return StatRecord_GroupCntsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatRecord_GroupCntsEntry>, I>>(object: I): StatRecord_GroupCntsEntry {
    const message = createBaseStatRecord_GroupCntsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },
};

function createBaseStatRecord_SceneRecordsEntry(): StatRecord_SceneRecordsEntry {
  return { key: 0, value: undefined };
}

export const StatRecord_SceneRecordsEntry: MessageFns<StatRecord_SceneRecordsEntry> = {
  encode(message: StatRecord_SceneRecordsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      SceneRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StatRecord_SceneRecordsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatRecord_SceneRecordsEntry();
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

          message.value = SceneRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): StatRecord_SceneRecordsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SceneRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: StatRecord_SceneRecordsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SceneRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatRecord_SceneRecordsEntry>, I>>(base?: I): StatRecord_SceneRecordsEntry {
    return StatRecord_SceneRecordsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatRecord_SceneRecordsEntry>, I>>(object: I): StatRecord_SceneRecordsEntry {
    const message = createBaseStatRecord_SceneRecordsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SceneRecord.fromPartial(object.value)
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
