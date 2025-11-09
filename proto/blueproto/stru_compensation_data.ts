/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface CompensationData {
  overflowEnergy: Long;
  finishTimes: number;
  climbUpLayerId: number;
}

function createBaseCompensationData(): CompensationData {
  return { overflowEnergy: Long.ZERO, finishTimes: 0, climbUpLayerId: 0 };
}

export const CompensationData: MessageFns<CompensationData> = {
  encode(message: CompensationData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.overflowEnergy.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.overflowEnergy.toString());
    }
    if (message.finishTimes !== 0) {
      writer.uint32(16).int32(message.finishTimes);
    }
    if (message.climbUpLayerId !== 0) {
      writer.uint32(24).int32(message.climbUpLayerId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CompensationData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompensationData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.overflowEnergy = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.finishTimes = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.climbUpLayerId = reader.int32();
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

  fromJSON(object: any): CompensationData {
    return {
      overflowEnergy: isSet(object.overflowEnergy) ? Long.fromValue(object.overflowEnergy) : Long.ZERO,
      finishTimes: isSet(object.finishTimes) ? globalThis.Number(object.finishTimes) : 0,
      climbUpLayerId: isSet(object.climbUpLayerId) ? globalThis.Number(object.climbUpLayerId) : 0,
    };
  },

  toJSON(message: CompensationData): unknown {
    const obj: any = {};
    if (!message.overflowEnergy.equals(Long.ZERO)) {
      obj.overflowEnergy = (message.overflowEnergy || Long.ZERO).toString();
    }
    if (message.finishTimes !== 0) {
      obj.finishTimes = Math.round(message.finishTimes);
    }
    if (message.climbUpLayerId !== 0) {
      obj.climbUpLayerId = Math.round(message.climbUpLayerId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CompensationData>, I>>(base?: I): CompensationData {
    return CompensationData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CompensationData>, I>>(object: I): CompensationData {
    const message = createBaseCompensationData();
    message.overflowEnergy = (object.overflowEnergy !== undefined && object.overflowEnergy !== null)
      ? Long.fromValue(object.overflowEnergy)
      : Long.ZERO;
    message.finishTimes = object.finishTimes ?? 0;
    message.climbUpLayerId = object.climbUpLayerId ?? 0;
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
