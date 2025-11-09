/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface BattlePassAwardInfo {
  freeAward: boolean;
  paidAward: boolean;
}

function createBaseBattlePassAwardInfo(): BattlePassAwardInfo {
  return { freeAward: false, paidAward: false };
}

export const BattlePassAwardInfo: MessageFns<BattlePassAwardInfo> = {
  encode(message: BattlePassAwardInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.freeAward !== false) {
      writer.uint32(8).bool(message.freeAward);
    }
    if (message.paidAward !== false) {
      writer.uint32(16).bool(message.paidAward);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BattlePassAwardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBattlePassAwardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.freeAward = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.paidAward = reader.bool();
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

  fromJSON(object: any): BattlePassAwardInfo {
    return {
      freeAward: isSet(object.freeAward) ? globalThis.Boolean(object.freeAward) : false,
      paidAward: isSet(object.paidAward) ? globalThis.Boolean(object.paidAward) : false,
    };
  },

  toJSON(message: BattlePassAwardInfo): unknown {
    const obj: any = {};
    if (message.freeAward !== false) {
      obj.freeAward = message.freeAward;
    }
    if (message.paidAward !== false) {
      obj.paidAward = message.paidAward;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BattlePassAwardInfo>, I>>(base?: I): BattlePassAwardInfo {
    return BattlePassAwardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BattlePassAwardInfo>, I>>(object: I): BattlePassAwardInfo {
    const message = createBaseBattlePassAwardInfo();
    message.freeAward = object.freeAward ?? false;
    message.paidAward = object.paidAward ?? false;
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
