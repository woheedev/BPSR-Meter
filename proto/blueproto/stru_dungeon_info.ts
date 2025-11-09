/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface DungeonInfo {
  dungeonId: number;
  completeCount: number;
  awardFlg: number;
  score: number;
  passTime: number;
}

function createBaseDungeonInfo(): DungeonInfo {
  return { dungeonId: 0, completeCount: 0, awardFlg: 0, score: 0, passTime: 0 };
}

export const DungeonInfo: MessageFns<DungeonInfo> = {
  encode(message: DungeonInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dungeonId !== 0) {
      writer.uint32(8).int32(message.dungeonId);
    }
    if (message.completeCount !== 0) {
      writer.uint32(16).int32(message.completeCount);
    }
    if (message.awardFlg !== 0) {
      writer.uint32(24).int32(message.awardFlg);
    }
    if (message.score !== 0) {
      writer.uint32(32).int32(message.score);
    }
    if (message.passTime !== 0) {
      writer.uint32(40).int32(message.passTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.dungeonId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.completeCount = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.awardFlg = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.score = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.passTime = reader.int32();
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

  fromJSON(object: any): DungeonInfo {
    return {
      dungeonId: isSet(object.dungeonId) ? globalThis.Number(object.dungeonId) : 0,
      completeCount: isSet(object.completeCount) ? globalThis.Number(object.completeCount) : 0,
      awardFlg: isSet(object.awardFlg) ? globalThis.Number(object.awardFlg) : 0,
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
      passTime: isSet(object.passTime) ? globalThis.Number(object.passTime) : 0,
    };
  },

  toJSON(message: DungeonInfo): unknown {
    const obj: any = {};
    if (message.dungeonId !== 0) {
      obj.dungeonId = Math.round(message.dungeonId);
    }
    if (message.completeCount !== 0) {
      obj.completeCount = Math.round(message.completeCount);
    }
    if (message.awardFlg !== 0) {
      obj.awardFlg = Math.round(message.awardFlg);
    }
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.passTime !== 0) {
      obj.passTime = Math.round(message.passTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonInfo>, I>>(base?: I): DungeonInfo {
    return DungeonInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonInfo>, I>>(object: I): DungeonInfo {
    const message = createBaseDungeonInfo();
    message.dungeonId = object.dungeonId ?? 0;
    message.completeCount = object.completeCount ?? 0;
    message.awardFlg = object.awardFlg ?? 0;
    message.score = object.score ?? 0;
    message.passTime = object.passTime ?? 0;
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
