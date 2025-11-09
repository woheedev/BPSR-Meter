/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FashionBenefitTaskInfo {
  id: number;
  count: number;
  progress: number;
}

function createBaseFashionBenefitTaskInfo(): FashionBenefitTaskInfo {
  return { id: 0, count: 0, progress: 0 };
}

export const FashionBenefitTaskInfo: MessageFns<FashionBenefitTaskInfo> = {
  encode(message: FashionBenefitTaskInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    if (message.progress !== 0) {
      writer.uint32(24).int32(message.progress);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionBenefitTaskInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionBenefitTaskInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.count = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.progress = reader.int32();
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

  fromJSON(object: any): FashionBenefitTaskInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      progress: isSet(object.progress) ? globalThis.Number(object.progress) : 0,
    };
  },

  toJSON(message: FashionBenefitTaskInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.progress !== 0) {
      obj.progress = Math.round(message.progress);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionBenefitTaskInfo>, I>>(base?: I): FashionBenefitTaskInfo {
    return FashionBenefitTaskInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionBenefitTaskInfo>, I>>(object: I): FashionBenefitTaskInfo {
    const message = createBaseFashionBenefitTaskInfo();
    message.id = object.id ?? 0;
    message.count = object.count ?? 0;
    message.progress = object.progress ?? 0;
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
