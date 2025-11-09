/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LuckyValueInfo } from "./stru_lucky_value_info";

export const protobufPackage = "zproto";

export interface LuckyValueMgr {
  luckValueInfo: { [key: number]: LuckyValueInfo };
  initValue: boolean;
}

export interface LuckyValueMgr_LuckValueInfoEntry {
  key: number;
  value: LuckyValueInfo | undefined;
}

function createBaseLuckyValueMgr(): LuckyValueMgr {
  return { luckValueInfo: {}, initValue: false };
}

export const LuckyValueMgr: MessageFns<LuckyValueMgr> = {
  encode(message: LuckyValueMgr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.luckValueInfo).forEach(([key, value]) => {
      LuckyValueMgr_LuckValueInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.initValue !== false) {
      writer.uint32(16).bool(message.initValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LuckyValueMgr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLuckyValueMgr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = LuckyValueMgr_LuckValueInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.luckValueInfo[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.initValue = reader.bool();
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

  fromJSON(object: any): LuckyValueMgr {
    return {
      luckValueInfo: isObject(object.luckValueInfo)
        ? Object.entries(object.luckValueInfo).reduce<{ [key: number]: LuckyValueInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = LuckyValueInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      initValue: isSet(object.initValue) ? globalThis.Boolean(object.initValue) : false,
    };
  },

  toJSON(message: LuckyValueMgr): unknown {
    const obj: any = {};
    if (message.luckValueInfo) {
      const entries = Object.entries(message.luckValueInfo);
      if (entries.length > 0) {
        obj.luckValueInfo = {};
        entries.forEach(([k, v]) => {
          obj.luckValueInfo[k] = LuckyValueInfo.toJSON(v);
        });
      }
    }
    if (message.initValue !== false) {
      obj.initValue = message.initValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LuckyValueMgr>, I>>(base?: I): LuckyValueMgr {
    return LuckyValueMgr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LuckyValueMgr>, I>>(object: I): LuckyValueMgr {
    const message = createBaseLuckyValueMgr();
    message.luckValueInfo = Object.entries(object.luckValueInfo ?? {}).reduce<{ [key: number]: LuckyValueInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = LuckyValueInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.initValue = object.initValue ?? false;
    return message;
  },
};

function createBaseLuckyValueMgr_LuckValueInfoEntry(): LuckyValueMgr_LuckValueInfoEntry {
  return { key: 0, value: undefined };
}

export const LuckyValueMgr_LuckValueInfoEntry: MessageFns<LuckyValueMgr_LuckValueInfoEntry> = {
  encode(message: LuckyValueMgr_LuckValueInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      LuckyValueInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LuckyValueMgr_LuckValueInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLuckyValueMgr_LuckValueInfoEntry();
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

          message.value = LuckyValueInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): LuckyValueMgr_LuckValueInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? LuckyValueInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LuckyValueMgr_LuckValueInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = LuckyValueInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LuckyValueMgr_LuckValueInfoEntry>, I>>(
    base?: I,
  ): LuckyValueMgr_LuckValueInfoEntry {
    return LuckyValueMgr_LuckValueInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LuckyValueMgr_LuckValueInfoEntry>, I>>(
    object: I,
  ): LuckyValueMgr_LuckValueInfoEntry {
    const message = createBaseLuckyValueMgr_LuckValueInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? LuckyValueInfo.fromPartial(object.value)
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
