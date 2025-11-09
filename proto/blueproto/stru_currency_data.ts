/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface CurrencyData {
  configId: number;
  count: Long;
}

function createBaseCurrencyData(): CurrencyData {
  return { configId: 0, count: Long.ZERO };
}

export const CurrencyData: MessageFns<CurrencyData> = {
  encode(message: CurrencyData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.configId !== 0) {
      writer.uint32(8).int32(message.configId);
    }
    if (!message.count.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.count.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CurrencyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.configId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.count = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): CurrencyData {
    return {
      configId: isSet(object.configId) ? globalThis.Number(object.configId) : 0,
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.ZERO,
    };
  },

  toJSON(message: CurrencyData): unknown {
    const obj: any = {};
    if (message.configId !== 0) {
      obj.configId = Math.round(message.configId);
    }
    if (!message.count.equals(Long.ZERO)) {
      obj.count = (message.count || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrencyData>, I>>(base?: I): CurrencyData {
    return CurrencyData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrencyData>, I>>(object: I): CurrencyData {
    const message = createBaseCurrencyData();
    message.configId = object.configId ?? 0;
    message.count = (object.count !== undefined && object.count !== null) ? Long.fromValue(object.count) : Long.ZERO;
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
