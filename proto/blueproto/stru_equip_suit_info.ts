/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface EquipSuitInfo {
  suitAttr: { [key: number]: number };
  attrType: number;
}

export interface EquipSuitInfo_SuitAttrEntry {
  key: number;
  value: number;
}

function createBaseEquipSuitInfo(): EquipSuitInfo {
  return { suitAttr: {}, attrType: 0 };
}

export const EquipSuitInfo: MessageFns<EquipSuitInfo> = {
  encode(message: EquipSuitInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.suitAttr).forEach(([key, value]) => {
      EquipSuitInfo_SuitAttrEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    if (message.attrType !== 0) {
      writer.uint32(32).int32(message.attrType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipSuitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipSuitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = EquipSuitInfo_SuitAttrEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.suitAttr[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.attrType = reader.int32();
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

  fromJSON(object: any): EquipSuitInfo {
    return {
      suitAttr: isObject(object.suitAttr)
        ? Object.entries(object.suitAttr).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      attrType: isSet(object.attrType) ? globalThis.Number(object.attrType) : 0,
    };
  },

  toJSON(message: EquipSuitInfo): unknown {
    const obj: any = {};
    if (message.suitAttr) {
      const entries = Object.entries(message.suitAttr);
      if (entries.length > 0) {
        obj.suitAttr = {};
        entries.forEach(([k, v]) => {
          obj.suitAttr[k] = Math.round(v);
        });
      }
    }
    if (message.attrType !== 0) {
      obj.attrType = Math.round(message.attrType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipSuitInfo>, I>>(base?: I): EquipSuitInfo {
    return EquipSuitInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipSuitInfo>, I>>(object: I): EquipSuitInfo {
    const message = createBaseEquipSuitInfo();
    message.suitAttr = Object.entries(object.suitAttr ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.attrType = object.attrType ?? 0;
    return message;
  },
};

function createBaseEquipSuitInfo_SuitAttrEntry(): EquipSuitInfo_SuitAttrEntry {
  return { key: 0, value: 0 };
}

export const EquipSuitInfo_SuitAttrEntry: MessageFns<EquipSuitInfo_SuitAttrEntry> = {
  encode(message: EquipSuitInfo_SuitAttrEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipSuitInfo_SuitAttrEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipSuitInfo_SuitAttrEntry();
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

          message.value = reader.int32();
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

  fromJSON(object: any): EquipSuitInfo_SuitAttrEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: EquipSuitInfo_SuitAttrEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipSuitInfo_SuitAttrEntry>, I>>(base?: I): EquipSuitInfo_SuitAttrEntry {
    return EquipSuitInfo_SuitAttrEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipSuitInfo_SuitAttrEntry>, I>>(object: I): EquipSuitInfo_SuitAttrEntry {
    const message = createBaseEquipSuitInfo_SuitAttrEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
