/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface WorldQuestInfo {
  finishPoints: number;
  rewards: number[];
  exceedingPoints: number;
}

function createBaseWorldQuestInfo(): WorldQuestInfo {
  return { finishPoints: 0, rewards: [], exceedingPoints: 0 };
}

export const WorldQuestInfo: MessageFns<WorldQuestInfo> = {
  encode(message: WorldQuestInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.finishPoints !== 0) {
      writer.uint32(8).uint32(message.finishPoints);
    }
    writer.uint32(18).fork();
    for (const v of message.rewards) {
      writer.uint32(v);
    }
    writer.join();
    if (message.exceedingPoints !== 0) {
      writer.uint32(24).uint32(message.exceedingPoints);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WorldQuestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorldQuestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.finishPoints = reader.uint32();
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.rewards.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rewards.push(reader.uint32());
            }

            continue;
          }

          break;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.exceedingPoints = reader.uint32();
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

  fromJSON(object: any): WorldQuestInfo {
    return {
      finishPoints: isSet(object.finishPoints) ? globalThis.Number(object.finishPoints) : 0,
      rewards: globalThis.Array.isArray(object?.rewards) ? object.rewards.map((e: any) => globalThis.Number(e)) : [],
      exceedingPoints: isSet(object.exceedingPoints) ? globalThis.Number(object.exceedingPoints) : 0,
    };
  },

  toJSON(message: WorldQuestInfo): unknown {
    const obj: any = {};
    if (message.finishPoints !== 0) {
      obj.finishPoints = Math.round(message.finishPoints);
    }
    if (message.rewards?.length) {
      obj.rewards = message.rewards.map((e) => Math.round(e));
    }
    if (message.exceedingPoints !== 0) {
      obj.exceedingPoints = Math.round(message.exceedingPoints);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WorldQuestInfo>, I>>(base?: I): WorldQuestInfo {
    return WorldQuestInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WorldQuestInfo>, I>>(object: I): WorldQuestInfo {
    const message = createBaseWorldQuestInfo();
    message.finishPoints = object.finishPoints ?? 0;
    message.rewards = object.rewards?.map((e) => e) || [];
    message.exceedingPoints = object.exceedingPoints ?? 0;
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
