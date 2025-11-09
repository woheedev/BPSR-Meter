/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FunctionTimeData {
  times: number;
  timestamp: number;
}

function createBaseFunctionTimeData(): FunctionTimeData {
  return { times: 0, timestamp: 0 };
}

export const FunctionTimeData: MessageFns<FunctionTimeData> = {
  encode(message: FunctionTimeData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.times !== 0) {
      writer.uint32(8).uint32(message.times);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FunctionTimeData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionTimeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.times = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.timestamp = reader.uint32();
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

  fromJSON(object: any): FunctionTimeData {
    return {
      times: isSet(object.times) ? globalThis.Number(object.times) : 0,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
    };
  },

  toJSON(message: FunctionTimeData): unknown {
    const obj: any = {};
    if (message.times !== 0) {
      obj.times = Math.round(message.times);
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FunctionTimeData>, I>>(base?: I): FunctionTimeData {
    return FunctionTimeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FunctionTimeData>, I>>(object: I): FunctionTimeData {
    const message = createBaseFunctionTimeData();
    message.times = object.times ?? 0;
    message.timestamp = object.timestamp ?? 0;
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
