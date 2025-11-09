/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ServerStateObjectInteractionParam {
  objUuid: Long;
  stateValue: number;
  lastInteractionTime: Long;
}

function createBaseServerStateObjectInteractionParam(): ServerStateObjectInteractionParam {
  return { objUuid: Long.ZERO, stateValue: 0, lastInteractionTime: Long.ZERO };
}

export const ServerStateObjectInteractionParam: MessageFns<ServerStateObjectInteractionParam> = {
  encode(message: ServerStateObjectInteractionParam, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.objUuid.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.objUuid.toString());
    }
    if (message.stateValue !== 0) {
      writer.uint32(16).int32(message.stateValue);
    }
    if (!message.lastInteractionTime.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.lastInteractionTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ServerStateObjectInteractionParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerStateObjectInteractionParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.objUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.stateValue = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.lastInteractionTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): ServerStateObjectInteractionParam {
    return {
      objUuid: isSet(object.objUuid) ? Long.fromValue(object.objUuid) : Long.ZERO,
      stateValue: isSet(object.stateValue) ? globalThis.Number(object.stateValue) : 0,
      lastInteractionTime: isSet(object.lastInteractionTime) ? Long.fromValue(object.lastInteractionTime) : Long.ZERO,
    };
  },

  toJSON(message: ServerStateObjectInteractionParam): unknown {
    const obj: any = {};
    if (!message.objUuid.equals(Long.ZERO)) {
      obj.objUuid = (message.objUuid || Long.ZERO).toString();
    }
    if (message.stateValue !== 0) {
      obj.stateValue = Math.round(message.stateValue);
    }
    if (!message.lastInteractionTime.equals(Long.ZERO)) {
      obj.lastInteractionTime = (message.lastInteractionTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerStateObjectInteractionParam>, I>>(
    base?: I,
  ): ServerStateObjectInteractionParam {
    return ServerStateObjectInteractionParam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServerStateObjectInteractionParam>, I>>(
    object: I,
  ): ServerStateObjectInteractionParam {
    const message = createBaseServerStateObjectInteractionParam();
    message.objUuid = (object.objUuid !== undefined && object.objUuid !== null)
      ? Long.fromValue(object.objUuid)
      : Long.ZERO;
    message.stateValue = object.stateValue ?? 0;
    message.lastInteractionTime = (object.lastInteractionTime !== undefined && object.lastInteractionTime !== null)
      ? Long.fromValue(object.lastInteractionTime)
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
