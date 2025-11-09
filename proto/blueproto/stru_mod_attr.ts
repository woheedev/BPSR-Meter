/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ModAttrInfo } from "./stru_mod_attr_info";

export const protobufPackage = "zproto";

export interface ModAttr {
  loadFlag: number;
  type: number;
  level: number;
  modAttrInfo: ModAttrInfo[];
}

function createBaseModAttr(): ModAttr {
  return { loadFlag: 0, type: 0, level: 0, modAttrInfo: [] };
}

export const ModAttr: MessageFns<ModAttr> = {
  encode(message: ModAttr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.loadFlag !== 0) {
      writer.uint32(8).int32(message.loadFlag);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.level !== 0) {
      writer.uint32(24).int32(message.level);
    }
    for (const v of message.modAttrInfo) {
      ModAttrInfo.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModAttr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModAttr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.loadFlag = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.level = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.modAttrInfo.push(ModAttrInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ModAttr {
    return {
      loadFlag: isSet(object.loadFlag) ? globalThis.Number(object.loadFlag) : 0,
      type: isSet(object.type) ? globalThis.Number(object.type) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      modAttrInfo: globalThis.Array.isArray(object?.modAttrInfo)
        ? object.modAttrInfo.map((e: any) => ModAttrInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModAttr): unknown {
    const obj: any = {};
    if (message.loadFlag !== 0) {
      obj.loadFlag = Math.round(message.loadFlag);
    }
    if (message.type !== 0) {
      obj.type = Math.round(message.type);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.modAttrInfo?.length) {
      obj.modAttrInfo = message.modAttrInfo.map((e) => ModAttrInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModAttr>, I>>(base?: I): ModAttr {
    return ModAttr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModAttr>, I>>(object: I): ModAttr {
    const message = createBaseModAttr();
    message.loadFlag = object.loadFlag ?? 0;
    message.type = object.type ?? 0;
    message.level = object.level ?? 0;
    message.modAttrInfo = object.modAttrInfo?.map((e) => ModAttrInfo.fromPartial(e)) || [];
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
