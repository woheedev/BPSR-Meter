/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface EnergyItemInfo {
  queueId: number;
  columnId: number;
  refineState: number;
  gainTime: Long;
}

function createBaseEnergyItemInfo(): EnergyItemInfo {
  return { queueId: 0, columnId: 0, refineState: 0, gainTime: Long.ZERO };
}

export const EnergyItemInfo: MessageFns<EnergyItemInfo> = {
  encode(message: EnergyItemInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.queueId !== 0) {
      writer.uint32(8).uint32(message.queueId);
    }
    if (message.columnId !== 0) {
      writer.uint32(16).uint32(message.columnId);
    }
    if (message.refineState !== 0) {
      writer.uint32(24).uint32(message.refineState);
    }
    if (!message.gainTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.gainTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EnergyItemInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyItemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.queueId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.columnId = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.refineState = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.gainTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): EnergyItemInfo {
    return {
      queueId: isSet(object.queueId) ? globalThis.Number(object.queueId) : 0,
      columnId: isSet(object.columnId) ? globalThis.Number(object.columnId) : 0,
      refineState: isSet(object.refineState) ? globalThis.Number(object.refineState) : 0,
      gainTime: isSet(object.gainTime) ? Long.fromValue(object.gainTime) : Long.ZERO,
    };
  },

  toJSON(message: EnergyItemInfo): unknown {
    const obj: any = {};
    if (message.queueId !== 0) {
      obj.queueId = Math.round(message.queueId);
    }
    if (message.columnId !== 0) {
      obj.columnId = Math.round(message.columnId);
    }
    if (message.refineState !== 0) {
      obj.refineState = Math.round(message.refineState);
    }
    if (!message.gainTime.equals(Long.ZERO)) {
      obj.gainTime = (message.gainTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnergyItemInfo>, I>>(base?: I): EnergyItemInfo {
    return EnergyItemInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnergyItemInfo>, I>>(object: I): EnergyItemInfo {
    const message = createBaseEnergyItemInfo();
    message.queueId = object.queueId ?? 0;
    message.columnId = object.columnId ?? 0;
    message.refineState = object.refineState ?? 0;
    message.gainTime = (object.gainTime !== undefined && object.gainTime !== null)
      ? Long.fromValue(object.gainTime)
      : Long.ZERO;
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
