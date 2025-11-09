/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CounterInfo } from "./stru_counter_info";

export const protobufPackage = "zproto";

export interface CounterList {
  counterMap: { [key: number]: CounterInfo };
}

export interface CounterList_CounterMapEntry {
  key: number;
  value: CounterInfo | undefined;
}

function createBaseCounterList(): CounterList {
  return { counterMap: {} };
}

export const CounterList: MessageFns<CounterList> = {
  encode(message: CounterList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.counterMap).forEach(([key, value]) => {
      CounterList_CounterMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CounterList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = CounterList_CounterMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.counterMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): CounterList {
    return {
      counterMap: isObject(object.counterMap)
        ? Object.entries(object.counterMap).reduce<{ [key: number]: CounterInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CounterInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CounterList): unknown {
    const obj: any = {};
    if (message.counterMap) {
      const entries = Object.entries(message.counterMap);
      if (entries.length > 0) {
        obj.counterMap = {};
        entries.forEach(([k, v]) => {
          obj.counterMap[k] = CounterInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CounterList>, I>>(base?: I): CounterList {
    return CounterList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CounterList>, I>>(object: I): CounterList {
    const message = createBaseCounterList();
    message.counterMap = Object.entries(object.counterMap ?? {}).reduce<{ [key: number]: CounterInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = CounterInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseCounterList_CounterMapEntry(): CounterList_CounterMapEntry {
  return { key: 0, value: undefined };
}

export const CounterList_CounterMapEntry: MessageFns<CounterList_CounterMapEntry> = {
  encode(message: CounterList_CounterMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CounterInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CounterList_CounterMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterList_CounterMapEntry();
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

          message.value = CounterInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): CounterList_CounterMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CounterInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CounterList_CounterMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CounterInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CounterList_CounterMapEntry>, I>>(base?: I): CounterList_CounterMapEntry {
    return CounterList_CounterMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CounterList_CounterMapEntry>, I>>(object: I): CounterList_CounterMapEntry {
    const message = createBaseCounterList_CounterMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CounterInfo.fromPartial(object.value)
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
