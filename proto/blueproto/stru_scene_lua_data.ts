/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SceneLuaData {
  sceneLuaInfo: { [key: number]: string };
}

export interface SceneLuaData_SceneLuaInfoEntry {
  key: number;
  value: string;
}

function createBaseSceneLuaData(): SceneLuaData {
  return { sceneLuaInfo: {} };
}

export const SceneLuaData: MessageFns<SceneLuaData> = {
  encode(message: SceneLuaData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.sceneLuaInfo).forEach(([key, value]) => {
      SceneLuaData_SceneLuaInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SceneLuaData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneLuaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SceneLuaData_SceneLuaInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.sceneLuaInfo[entry1.key] = entry1.value;
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

  fromJSON(object: any): SceneLuaData {
    return {
      sceneLuaInfo: isObject(object.sceneLuaInfo)
        ? Object.entries(object.sceneLuaInfo).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SceneLuaData): unknown {
    const obj: any = {};
    if (message.sceneLuaInfo) {
      const entries = Object.entries(message.sceneLuaInfo);
      if (entries.length > 0) {
        obj.sceneLuaInfo = {};
        entries.forEach(([k, v]) => {
          obj.sceneLuaInfo[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneLuaData>, I>>(base?: I): SceneLuaData {
    return SceneLuaData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneLuaData>, I>>(object: I): SceneLuaData {
    const message = createBaseSceneLuaData();
    message.sceneLuaInfo = Object.entries(object.sceneLuaInfo ?? {}).reduce<{ [key: number]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSceneLuaData_SceneLuaInfoEntry(): SceneLuaData_SceneLuaInfoEntry {
  return { key: 0, value: "" };
}

export const SceneLuaData_SceneLuaInfoEntry: MessageFns<SceneLuaData_SceneLuaInfoEntry> = {
  encode(message: SceneLuaData_SceneLuaInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SceneLuaData_SceneLuaInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneLuaData_SceneLuaInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
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

  fromJSON(object: any): SceneLuaData_SceneLuaInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: SceneLuaData_SceneLuaInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneLuaData_SceneLuaInfoEntry>, I>>(base?: I): SceneLuaData_SceneLuaInfoEntry {
    return SceneLuaData_SceneLuaInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneLuaData_SceneLuaInfoEntry>, I>>(
    object: I,
  ): SceneLuaData_SceneLuaInfoEntry {
    const message = createBaseSceneLuaData_SceneLuaInfoEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
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
