/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface worldEventData {
  id: number;
  targetNum: number;
  award: number;
}

function createBaseworldEventData(): worldEventData {
  return { id: 0, targetNum: 0, award: 0 };
}

export const worldEventData: MessageFns<worldEventData> = {
  encode(message: worldEventData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.targetNum !== 0) {
      writer.uint32(16).int32(message.targetNum);
    }
    if (message.award !== 0) {
      writer.uint32(24).int32(message.award);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): worldEventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseworldEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.targetNum = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.award = reader.int32();
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

  fromJSON(object: any): worldEventData {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      targetNum: isSet(object.targetNum) ? globalThis.Number(object.targetNum) : 0,
      award: isSet(object.award) ? globalThis.Number(object.award) : 0,
    };
  },

  toJSON(message: worldEventData): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.targetNum !== 0) {
      obj.targetNum = Math.round(message.targetNum);
    }
    if (message.award !== 0) {
      obj.award = Math.round(message.award);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<worldEventData>, I>>(base?: I): worldEventData {
    return worldEventData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<worldEventData>, I>>(object: I): worldEventData {
    const message = createBaseworldEventData();
    message.id = object.id ?? 0;
    message.targetNum = object.targetNum ?? 0;
    message.award = object.award ?? 0;
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
