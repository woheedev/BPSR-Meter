/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SlotInfo {
  id: number;
  skillId: number;
  isAutoBattleClose: boolean;
}

function createBaseSlotInfo(): SlotInfo {
  return { id: 0, skillId: 0, isAutoBattleClose: false };
}

export const SlotInfo: MessageFns<SlotInfo> = {
  encode(message: SlotInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.skillId !== 0) {
      writer.uint32(16).int32(message.skillId);
    }
    if (message.isAutoBattleClose !== false) {
      writer.uint32(24).bool(message.isAutoBattleClose);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SlotInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlotInfo();
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

          message.skillId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.isAutoBattleClose = reader.bool();
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

  fromJSON(object: any): SlotInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      skillId: isSet(object.skillId) ? globalThis.Number(object.skillId) : 0,
      isAutoBattleClose: isSet(object.isAutoBattleClose) ? globalThis.Boolean(object.isAutoBattleClose) : false,
    };
  },

  toJSON(message: SlotInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.skillId !== 0) {
      obj.skillId = Math.round(message.skillId);
    }
    if (message.isAutoBattleClose !== false) {
      obj.isAutoBattleClose = message.isAutoBattleClose;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SlotInfo>, I>>(base?: I): SlotInfo {
    return SlotInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SlotInfo>, I>>(object: I): SlotInfo {
    const message = createBaseSlotInfo();
    message.id = object.id ?? 0;
    message.skillId = object.skillId ?? 0;
    message.isAutoBattleClose = object.isAutoBattleClose ?? false;
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
