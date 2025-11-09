/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MonsterTargetAward, monsterTargetAwardFromJSON, monsterTargetAwardToJSON } from "./enum_monster_target_award";

export const protobufPackage = "zproto";

export interface MonsterTargetInfo {
  id: number;
  targetUuid: number;
  targetType: number;
  targetNum: number;
  awardFlag: MonsterTargetAward;
}

function createBaseMonsterTargetInfo(): MonsterTargetInfo {
  return { id: 0, targetUuid: 0, targetType: 0, targetNum: 0, awardFlag: 0 };
}

export const MonsterTargetInfo: MessageFns<MonsterTargetInfo> = {
  encode(message: MonsterTargetInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.targetUuid !== 0) {
      writer.uint32(16).int32(message.targetUuid);
    }
    if (message.targetType !== 0) {
      writer.uint32(24).int32(message.targetType);
    }
    if (message.targetNum !== 0) {
      writer.uint32(32).int32(message.targetNum);
    }
    if (message.awardFlag !== 0) {
      writer.uint32(40).int32(message.awardFlag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterTargetInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterTargetInfo();
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

          message.targetUuid = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.targetType = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.targetNum = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.awardFlag = reader.int32() as any;
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

  fromJSON(object: any): MonsterTargetInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      targetUuid: isSet(object.targetUuid) ? globalThis.Number(object.targetUuid) : 0,
      targetType: isSet(object.targetType) ? globalThis.Number(object.targetType) : 0,
      targetNum: isSet(object.targetNum) ? globalThis.Number(object.targetNum) : 0,
      awardFlag: isSet(object.awardFlag) ? monsterTargetAwardFromJSON(object.awardFlag) : 0,
    };
  },

  toJSON(message: MonsterTargetInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.targetUuid !== 0) {
      obj.targetUuid = Math.round(message.targetUuid);
    }
    if (message.targetType !== 0) {
      obj.targetType = Math.round(message.targetType);
    }
    if (message.targetNum !== 0) {
      obj.targetNum = Math.round(message.targetNum);
    }
    if (message.awardFlag !== 0) {
      obj.awardFlag = monsterTargetAwardToJSON(message.awardFlag);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterTargetInfo>, I>>(base?: I): MonsterTargetInfo {
    return MonsterTargetInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterTargetInfo>, I>>(object: I): MonsterTargetInfo {
    const message = createBaseMonsterTargetInfo();
    message.id = object.id ?? 0;
    message.targetUuid = object.targetUuid ?? 0;
    message.targetType = object.targetType ?? 0;
    message.targetNum = object.targetNum ?? 0;
    message.awardFlag = object.awardFlag ?? 0;
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
