/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ActionInfo {
  actionId: number;
  period: number;
  percent: number;
}

function createBaseActionInfo(): ActionInfo {
  return { actionId: 0, period: 0, percent: 0 };
}

export const ActionInfo: MessageFns<ActionInfo> = {
  encode(message: ActionInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.actionId !== 0) {
      writer.uint32(8).int32(message.actionId);
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    if (message.percent !== 0) {
      writer.uint32(29).float(message.percent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ActionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.actionId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.period = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.percent = reader.float();
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

  fromJSON(object: any): ActionInfo {
    return {
      actionId: isSet(object.actionId) ? globalThis.Number(object.actionId) : 0,
      period: isSet(object.period) ? globalThis.Number(object.period) : 0,
      percent: isSet(object.percent) ? globalThis.Number(object.percent) : 0,
    };
  },

  toJSON(message: ActionInfo): unknown {
    const obj: any = {};
    if (message.actionId !== 0) {
      obj.actionId = Math.round(message.actionId);
    }
    if (message.period !== 0) {
      obj.period = Math.round(message.period);
    }
    if (message.percent !== 0) {
      obj.percent = message.percent;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActionInfo>, I>>(base?: I): ActionInfo {
    return ActionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActionInfo>, I>>(object: I): ActionInfo {
    const message = createBaseActionInfo();
    message.actionId = object.actionId ?? 0;
    message.period = object.period ?? 0;
    message.percent = object.percent ?? 0;
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
