/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface GashaInfo {
  id: number;
  drawCount: number;
  refreshTime: Long;
  wishId: number;
  wishValue: number;
  wishFinishCount: number;
  wishResetTime: Long;
  wishLimit: number;
}

function createBaseGashaInfo(): GashaInfo {
  return {
    id: 0,
    drawCount: 0,
    refreshTime: Long.ZERO,
    wishId: 0,
    wishValue: 0,
    wishFinishCount: 0,
    wishResetTime: Long.ZERO,
    wishLimit: 0,
  };
}

export const GashaInfo: MessageFns<GashaInfo> = {
  encode(message: GashaInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.drawCount !== 0) {
      writer.uint32(32).uint32(message.drawCount);
    }
    if (!message.refreshTime.equals(Long.ZERO)) {
      writer.uint32(40).int64(message.refreshTime.toString());
    }
    if (message.wishId !== 0) {
      writer.uint32(64).uint32(message.wishId);
    }
    if (message.wishValue !== 0) {
      writer.uint32(72).uint32(message.wishValue);
    }
    if (message.wishFinishCount !== 0) {
      writer.uint32(80).uint32(message.wishFinishCount);
    }
    if (!message.wishResetTime.equals(Long.ZERO)) {
      writer.uint32(88).int64(message.wishResetTime.toString());
    }
    if (message.wishLimit !== 0) {
      writer.uint32(96).uint32(message.wishLimit);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GashaInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGashaInfo();
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
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.drawCount = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.refreshTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.wishId = reader.uint32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.wishValue = reader.uint32();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.wishFinishCount = reader.uint32();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.wishResetTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.wishLimit = reader.uint32();
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

  fromJSON(object: any): GashaInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      drawCount: isSet(object.drawCount) ? globalThis.Number(object.drawCount) : 0,
      refreshTime: isSet(object.refreshTime) ? Long.fromValue(object.refreshTime) : Long.ZERO,
      wishId: isSet(object.wishId) ? globalThis.Number(object.wishId) : 0,
      wishValue: isSet(object.wishValue) ? globalThis.Number(object.wishValue) : 0,
      wishFinishCount: isSet(object.wishFinishCount) ? globalThis.Number(object.wishFinishCount) : 0,
      wishResetTime: isSet(object.wishResetTime) ? Long.fromValue(object.wishResetTime) : Long.ZERO,
      wishLimit: isSet(object.wishLimit) ? globalThis.Number(object.wishLimit) : 0,
    };
  },

  toJSON(message: GashaInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.drawCount !== 0) {
      obj.drawCount = Math.round(message.drawCount);
    }
    if (!message.refreshTime.equals(Long.ZERO)) {
      obj.refreshTime = (message.refreshTime || Long.ZERO).toString();
    }
    if (message.wishId !== 0) {
      obj.wishId = Math.round(message.wishId);
    }
    if (message.wishValue !== 0) {
      obj.wishValue = Math.round(message.wishValue);
    }
    if (message.wishFinishCount !== 0) {
      obj.wishFinishCount = Math.round(message.wishFinishCount);
    }
    if (!message.wishResetTime.equals(Long.ZERO)) {
      obj.wishResetTime = (message.wishResetTime || Long.ZERO).toString();
    }
    if (message.wishLimit !== 0) {
      obj.wishLimit = Math.round(message.wishLimit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GashaInfo>, I>>(base?: I): GashaInfo {
    return GashaInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GashaInfo>, I>>(object: I): GashaInfo {
    const message = createBaseGashaInfo();
    message.id = object.id ?? 0;
    message.drawCount = object.drawCount ?? 0;
    message.refreshTime = (object.refreshTime !== undefined && object.refreshTime !== null)
      ? Long.fromValue(object.refreshTime)
      : Long.ZERO;
    message.wishId = object.wishId ?? 0;
    message.wishValue = object.wishValue ?? 0;
    message.wishFinishCount = object.wishFinishCount ?? 0;
    message.wishResetTime = (object.wishResetTime !== undefined && object.wishResetTime !== null)
      ? Long.fromValue(object.wishResetTime)
      : Long.ZERO;
    message.wishLimit = object.wishLimit ?? 0;
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
