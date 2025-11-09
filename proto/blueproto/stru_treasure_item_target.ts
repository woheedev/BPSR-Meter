/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TreasureItem } from "./stru_treasure_item";

export const protobufPackage = "zproto";

export interface TreasureItemTarget {
  targetId: number;
  targetNum: number;
  reward: TreasureItem | undefined;
}

function createBaseTreasureItemTarget(): TreasureItemTarget {
  return { targetId: 0, targetNum: 0, reward: undefined };
}

export const TreasureItemTarget: MessageFns<TreasureItemTarget> = {
  encode(message: TreasureItemTarget, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.targetId !== 0) {
      writer.uint32(8).int32(message.targetId);
    }
    if (message.targetNum !== 0) {
      writer.uint32(16).int32(message.targetNum);
    }
    if (message.reward !== undefined) {
      TreasureItem.encode(message.reward, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TreasureItemTarget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasureItemTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.targetId = reader.int32();
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
          if (tag !== 26) {
            break;
          }

          message.reward = TreasureItem.decode(reader, reader.uint32());
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

  fromJSON(object: any): TreasureItemTarget {
    return {
      targetId: isSet(object.targetId) ? globalThis.Number(object.targetId) : 0,
      targetNum: isSet(object.targetNum) ? globalThis.Number(object.targetNum) : 0,
      reward: isSet(object.reward) ? TreasureItem.fromJSON(object.reward) : undefined,
    };
  },

  toJSON(message: TreasureItemTarget): unknown {
    const obj: any = {};
    if (message.targetId !== 0) {
      obj.targetId = Math.round(message.targetId);
    }
    if (message.targetNum !== 0) {
      obj.targetNum = Math.round(message.targetNum);
    }
    if (message.reward !== undefined) {
      obj.reward = TreasureItem.toJSON(message.reward);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TreasureItemTarget>, I>>(base?: I): TreasureItemTarget {
    return TreasureItemTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TreasureItemTarget>, I>>(object: I): TreasureItemTarget {
    const message = createBaseTreasureItemTarget();
    message.targetId = object.targetId ?? 0;
    message.targetNum = object.targetNum ?? 0;
    message.reward = (object.reward !== undefined && object.reward !== null)
      ? TreasureItem.fromPartial(object.reward)
      : undefined;
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
