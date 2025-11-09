/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ModAttrInfo {
  type: number;
  id: number;
  value: number;
  effectParameter: { [key: number]: string };
}

export interface ModAttrInfo_EffectParameterEntry {
  key: number;
  value: string;
}

function createBaseModAttrInfo(): ModAttrInfo {
  return { type: 0, id: 0, value: 0, effectParameter: {} };
}

export const ModAttrInfo: MessageFns<ModAttrInfo> = {
  encode(message: ModAttrInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    if (message.value !== 0) {
      writer.uint32(24).int32(message.value);
    }
    Object.entries(message.effectParameter).forEach(([key, value]) => {
      ModAttrInfo_EffectParameterEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModAttrInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModAttrInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.value = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = ModAttrInfo_EffectParameterEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.effectParameter[entry4.key] = entry4.value;
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

  fromJSON(object: any): ModAttrInfo {
    return {
      type: isSet(object.type) ? globalThis.Number(object.type) : 0,
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      effectParameter: isObject(object.effectParameter)
        ? Object.entries(object.effectParameter).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ModAttrInfo): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    if (message.effectParameter) {
      const entries = Object.entries(message.effectParameter);
      if (entries.length > 0) {
        obj.effectParameter = {};
        entries.forEach(([k, v]) => {
          obj.effectParameter[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModAttrInfo>, I>>(base?: I): ModAttrInfo {
    return ModAttrInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModAttrInfo>, I>>(object: I): ModAttrInfo {
    const message = createBaseModAttrInfo();
    message.type = object.type ?? 0;
    message.id = object.id ?? 0;
    message.value = object.value ?? 0;
    message.effectParameter = Object.entries(object.effectParameter ?? {}).reduce<{ [key: number]: string }>(
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

function createBaseModAttrInfo_EffectParameterEntry(): ModAttrInfo_EffectParameterEntry {
  return { key: 0, value: "" };
}

export const ModAttrInfo_EffectParameterEntry: MessageFns<ModAttrInfo_EffectParameterEntry> = {
  encode(message: ModAttrInfo_EffectParameterEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModAttrInfo_EffectParameterEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModAttrInfo_EffectParameterEntry();
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

  fromJSON(object: any): ModAttrInfo_EffectParameterEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: ModAttrInfo_EffectParameterEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModAttrInfo_EffectParameterEntry>, I>>(
    base?: I,
  ): ModAttrInfo_EffectParameterEntry {
    return ModAttrInfo_EffectParameterEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModAttrInfo_EffectParameterEntry>, I>>(
    object: I,
  ): ModAttrInfo_EffectParameterEntry {
    const message = createBaseModAttrInfo_EffectParameterEntry();
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
