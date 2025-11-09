/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface InteractionInfo {
  interactionStage: number;
  actionId: number;
  originatorId: Long;
  inviteeId: Long;
  isOriginator: boolean;
  interactionType: number;
}

function createBaseInteractionInfo(): InteractionInfo {
  return {
    interactionStage: 0,
    actionId: 0,
    originatorId: Long.ZERO,
    inviteeId: Long.ZERO,
    isOriginator: false,
    interactionType: 0,
  };
}

export const InteractionInfo: MessageFns<InteractionInfo> = {
  encode(message: InteractionInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.interactionStage !== 0) {
      writer.uint32(8).int32(message.interactionStage);
    }
    if (message.actionId !== 0) {
      writer.uint32(16).int32(message.actionId);
    }
    if (!message.originatorId.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.originatorId.toString());
    }
    if (!message.inviteeId.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.inviteeId.toString());
    }
    if (message.isOriginator !== false) {
      writer.uint32(40).bool(message.isOriginator);
    }
    if (message.interactionType !== 0) {
      writer.uint32(48).int32(message.interactionType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InteractionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInteractionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.interactionStage = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.actionId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.originatorId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.inviteeId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.isOriginator = reader.bool();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.interactionType = reader.int32();
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

  fromJSON(object: any): InteractionInfo {
    return {
      interactionStage: isSet(object.interactionStage) ? globalThis.Number(object.interactionStage) : 0,
      actionId: isSet(object.actionId) ? globalThis.Number(object.actionId) : 0,
      originatorId: isSet(object.originatorId) ? Long.fromValue(object.originatorId) : Long.ZERO,
      inviteeId: isSet(object.inviteeId) ? Long.fromValue(object.inviteeId) : Long.ZERO,
      isOriginator: isSet(object.isOriginator) ? globalThis.Boolean(object.isOriginator) : false,
      interactionType: isSet(object.interactionType) ? globalThis.Number(object.interactionType) : 0,
    };
  },

  toJSON(message: InteractionInfo): unknown {
    const obj: any = {};
    if (message.interactionStage !== 0) {
      obj.interactionStage = Math.round(message.interactionStage);
    }
    if (message.actionId !== 0) {
      obj.actionId = Math.round(message.actionId);
    }
    if (!message.originatorId.equals(Long.ZERO)) {
      obj.originatorId = (message.originatorId || Long.ZERO).toString();
    }
    if (!message.inviteeId.equals(Long.ZERO)) {
      obj.inviteeId = (message.inviteeId || Long.ZERO).toString();
    }
    if (message.isOriginator !== false) {
      obj.isOriginator = message.isOriginator;
    }
    if (message.interactionType !== 0) {
      obj.interactionType = Math.round(message.interactionType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InteractionInfo>, I>>(base?: I): InteractionInfo {
    return InteractionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InteractionInfo>, I>>(object: I): InteractionInfo {
    const message = createBaseInteractionInfo();
    message.interactionStage = object.interactionStage ?? 0;
    message.actionId = object.actionId ?? 0;
    message.originatorId = (object.originatorId !== undefined && object.originatorId !== null)
      ? Long.fromValue(object.originatorId)
      : Long.ZERO;
    message.inviteeId = (object.inviteeId !== undefined && object.inviteeId !== null)
      ? Long.fromValue(object.inviteeId)
      : Long.ZERO;
    message.isOriginator = object.isOriginator ?? false;
    message.interactionType = object.interactionType ?? 0;
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
