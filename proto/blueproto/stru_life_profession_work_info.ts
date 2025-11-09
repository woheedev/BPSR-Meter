/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Item } from "./stru_item";

export const protobufPackage = "zproto";

export interface LifeProfessionWorkInfo {
  lifeProfessionId: number;
  beginTime: number;
  endTime: number;
  count: number;
  cost: number;
  reward: Item[];
  costId: number;
}

function createBaseLifeProfessionWorkInfo(): LifeProfessionWorkInfo {
  return { lifeProfessionId: 0, beginTime: 0, endTime: 0, count: 0, cost: 0, reward: [], costId: 0 };
}

export const LifeProfessionWorkInfo: MessageFns<LifeProfessionWorkInfo> = {
  encode(message: LifeProfessionWorkInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.lifeProfessionId !== 0) {
      writer.uint32(8).uint32(message.lifeProfessionId);
    }
    if (message.beginTime !== 0) {
      writer.uint32(16).uint32(message.beginTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(24).uint32(message.endTime);
    }
    if (message.count !== 0) {
      writer.uint32(32).uint32(message.count);
    }
    if (message.cost !== 0) {
      writer.uint32(40).uint32(message.cost);
    }
    for (const v of message.reward) {
      Item.encode(v!, writer.uint32(50).fork()).join();
    }
    if (message.costId !== 0) {
      writer.uint32(56).uint32(message.costId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfessionWorkInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfessionWorkInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.lifeProfessionId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.beginTime = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.endTime = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.count = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.cost = reader.uint32();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.reward.push(Item.decode(reader, reader.uint32()));
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.costId = reader.uint32();
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

  fromJSON(object: any): LifeProfessionWorkInfo {
    return {
      lifeProfessionId: isSet(object.lifeProfessionId) ? globalThis.Number(object.lifeProfessionId) : 0,
      beginTime: isSet(object.beginTime) ? globalThis.Number(object.beginTime) : 0,
      endTime: isSet(object.endTime) ? globalThis.Number(object.endTime) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      cost: isSet(object.cost) ? globalThis.Number(object.cost) : 0,
      reward: globalThis.Array.isArray(object?.reward) ? object.reward.map((e: any) => Item.fromJSON(e)) : [],
      costId: isSet(object.costId) ? globalThis.Number(object.costId) : 0,
    };
  },

  toJSON(message: LifeProfessionWorkInfo): unknown {
    const obj: any = {};
    if (message.lifeProfessionId !== 0) {
      obj.lifeProfessionId = Math.round(message.lifeProfessionId);
    }
    if (message.beginTime !== 0) {
      obj.beginTime = Math.round(message.beginTime);
    }
    if (message.endTime !== 0) {
      obj.endTime = Math.round(message.endTime);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.cost !== 0) {
      obj.cost = Math.round(message.cost);
    }
    if (message.reward?.length) {
      obj.reward = message.reward.map((e) => Item.toJSON(e));
    }
    if (message.costId !== 0) {
      obj.costId = Math.round(message.costId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfessionWorkInfo>, I>>(base?: I): LifeProfessionWorkInfo {
    return LifeProfessionWorkInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfessionWorkInfo>, I>>(object: I): LifeProfessionWorkInfo {
    const message = createBaseLifeProfessionWorkInfo();
    message.lifeProfessionId = object.lifeProfessionId ?? 0;
    message.beginTime = object.beginTime ?? 0;
    message.endTime = object.endTime ?? 0;
    message.count = object.count ?? 0;
    message.cost = object.cost ?? 0;
    message.reward = object.reward?.map((e) => Item.fromPartial(e)) || [];
    message.costId = object.costId ?? 0;
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
