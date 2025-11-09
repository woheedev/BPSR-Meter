/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BubbleInfo } from "./stru_bubble_info";

export const protobufPackage = "zproto";

export interface BubbleActData {
  bubbleInfo: { [key: number]: BubbleInfo };
}

export interface BubbleActData_BubbleInfoEntry {
  key: number;
  value: BubbleInfo | undefined;
}

function createBaseBubbleActData(): BubbleActData {
  return { bubbleInfo: {} };
}

export const BubbleActData: MessageFns<BubbleActData> = {
  encode(message: BubbleActData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.bubbleInfo).forEach(([key, value]) => {
      BubbleActData_BubbleInfoEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BubbleActData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBubbleActData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = BubbleActData_BubbleInfoEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.bubbleInfo[entry5.key] = entry5.value;
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

  fromJSON(object: any): BubbleActData {
    return {
      bubbleInfo: isObject(object.bubbleInfo)
        ? Object.entries(object.bubbleInfo).reduce<{ [key: number]: BubbleInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = BubbleInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: BubbleActData): unknown {
    const obj: any = {};
    if (message.bubbleInfo) {
      const entries = Object.entries(message.bubbleInfo);
      if (entries.length > 0) {
        obj.bubbleInfo = {};
        entries.forEach(([k, v]) => {
          obj.bubbleInfo[k] = BubbleInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BubbleActData>, I>>(base?: I): BubbleActData {
    return BubbleActData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BubbleActData>, I>>(object: I): BubbleActData {
    const message = createBaseBubbleActData();
    message.bubbleInfo = Object.entries(object.bubbleInfo ?? {}).reduce<{ [key: number]: BubbleInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = BubbleInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseBubbleActData_BubbleInfoEntry(): BubbleActData_BubbleInfoEntry {
  return { key: 0, value: undefined };
}

export const BubbleActData_BubbleInfoEntry: MessageFns<BubbleActData_BubbleInfoEntry> = {
  encode(message: BubbleActData_BubbleInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      BubbleInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BubbleActData_BubbleInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBubbleActData_BubbleInfoEntry();
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

          message.value = BubbleInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): BubbleActData_BubbleInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? BubbleInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: BubbleActData_BubbleInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = BubbleInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BubbleActData_BubbleInfoEntry>, I>>(base?: I): BubbleActData_BubbleInfoEntry {
    return BubbleActData_BubbleInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BubbleActData_BubbleInfoEntry>, I>>(
    object: I,
  ): BubbleActData_BubbleInfoEntry {
    const message = createBaseBubbleActData_BubbleInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? BubbleInfo.fromPartial(object.value)
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
