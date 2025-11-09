/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FightPointSubData {
  functionType: number;
  rootFunctionType: number;
  point: number;
}

function createBaseFightPointSubData(): FightPointSubData {
  return { functionType: 0, rootFunctionType: 0, point: 0 };
}

export const FightPointSubData: MessageFns<FightPointSubData> = {
  encode(message: FightPointSubData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.functionType !== 0) {
      writer.uint32(8).int32(message.functionType);
    }
    if (message.rootFunctionType !== 0) {
      writer.uint32(16).int32(message.rootFunctionType);
    }
    if (message.point !== 0) {
      writer.uint32(24).int32(message.point);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightPointSubData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightPointSubData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.functionType = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.rootFunctionType = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.point = reader.int32();
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

  fromJSON(object: any): FightPointSubData {
    return {
      functionType: isSet(object.functionType) ? globalThis.Number(object.functionType) : 0,
      rootFunctionType: isSet(object.rootFunctionType) ? globalThis.Number(object.rootFunctionType) : 0,
      point: isSet(object.point) ? globalThis.Number(object.point) : 0,
    };
  },

  toJSON(message: FightPointSubData): unknown {
    const obj: any = {};
    if (message.functionType !== 0) {
      obj.functionType = Math.round(message.functionType);
    }
    if (message.rootFunctionType !== 0) {
      obj.rootFunctionType = Math.round(message.rootFunctionType);
    }
    if (message.point !== 0) {
      obj.point = Math.round(message.point);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightPointSubData>, I>>(base?: I): FightPointSubData {
    return FightPointSubData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightPointSubData>, I>>(object: I): FightPointSubData {
    const message = createBaseFightPointSubData();
    message.functionType = object.functionType ?? 0;
    message.rootFunctionType = object.rootFunctionType ?? 0;
    message.point = object.point ?? 0;
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
