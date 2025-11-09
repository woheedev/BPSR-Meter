/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SkillCDInfo } from "./stru_skill_c_d_info";

export const protobufPackage = "zproto";

export interface UserFightAttr {
  curHp: Long;
  maxHp: Long;
  originEnergy: number;
  resourceIds: number[];
  resources: number[];
  isDead: number;
  deadTime: Long;
  reviveId: number;
  cdInfo: SkillCDInfo[];
}

function createBaseUserFightAttr(): UserFightAttr {
  return {
    curHp: Long.ZERO,
    maxHp: Long.ZERO,
    originEnergy: 0,
    resourceIds: [],
    resources: [],
    isDead: 0,
    deadTime: Long.ZERO,
    reviveId: 0,
    cdInfo: [],
  };
}

export const UserFightAttr: MessageFns<UserFightAttr> = {
  encode(message: UserFightAttr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.curHp.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.curHp.toString());
    }
    if (!message.maxHp.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.maxHp.toString());
    }
    if (message.originEnergy !== 0) {
      writer.uint32(29).float(message.originEnergy);
    }
    writer.uint32(34).fork();
    for (const v of message.resourceIds) {
      writer.uint32(v);
    }
    writer.join();
    writer.uint32(42).fork();
    for (const v of message.resources) {
      writer.uint32(v);
    }
    writer.join();
    if (message.isDead !== 0) {
      writer.uint32(48).int32(message.isDead);
    }
    if (!message.deadTime.equals(Long.ZERO)) {
      writer.uint32(56).int64(message.deadTime.toString());
    }
    if (message.reviveId !== 0) {
      writer.uint32(64).int32(message.reviveId);
    }
    for (const v of message.cdInfo) {
      SkillCDInfo.encode(v!, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserFightAttr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFightAttr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.curHp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.maxHp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.originEnergy = reader.float();
          continue;
        }
        case 4: {
          if (tag === 32) {
            message.resourceIds.push(reader.uint32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resourceIds.push(reader.uint32());
            }

            continue;
          }

          break;
        }
        case 5: {
          if (tag === 40) {
            message.resources.push(reader.uint32());

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resources.push(reader.uint32());
            }

            continue;
          }

          break;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.isDead = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.deadTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.reviveId = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.cdInfo.push(SkillCDInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): UserFightAttr {
    return {
      curHp: isSet(object.curHp) ? Long.fromValue(object.curHp) : Long.ZERO,
      maxHp: isSet(object.maxHp) ? Long.fromValue(object.maxHp) : Long.ZERO,
      originEnergy: isSet(object.originEnergy) ? globalThis.Number(object.originEnergy) : 0,
      resourceIds: globalThis.Array.isArray(object?.resourceIds)
        ? object.resourceIds.map((e: any) => globalThis.Number(e))
        : [],
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => globalThis.Number(e))
        : [],
      isDead: isSet(object.isDead) ? globalThis.Number(object.isDead) : 0,
      deadTime: isSet(object.deadTime) ? Long.fromValue(object.deadTime) : Long.ZERO,
      reviveId: isSet(object.reviveId) ? globalThis.Number(object.reviveId) : 0,
      cdInfo: globalThis.Array.isArray(object?.cdInfo) ? object.cdInfo.map((e: any) => SkillCDInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserFightAttr): unknown {
    const obj: any = {};
    if (!message.curHp.equals(Long.ZERO)) {
      obj.curHp = (message.curHp || Long.ZERO).toString();
    }
    if (!message.maxHp.equals(Long.ZERO)) {
      obj.maxHp = (message.maxHp || Long.ZERO).toString();
    }
    if (message.originEnergy !== 0) {
      obj.originEnergy = message.originEnergy;
    }
    if (message.resourceIds?.length) {
      obj.resourceIds = message.resourceIds.map((e) => Math.round(e));
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Math.round(e));
    }
    if (message.isDead !== 0) {
      obj.isDead = Math.round(message.isDead);
    }
    if (!message.deadTime.equals(Long.ZERO)) {
      obj.deadTime = (message.deadTime || Long.ZERO).toString();
    }
    if (message.reviveId !== 0) {
      obj.reviveId = Math.round(message.reviveId);
    }
    if (message.cdInfo?.length) {
      obj.cdInfo = message.cdInfo.map((e) => SkillCDInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFightAttr>, I>>(base?: I): UserFightAttr {
    return UserFightAttr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFightAttr>, I>>(object: I): UserFightAttr {
    const message = createBaseUserFightAttr();
    message.curHp = (object.curHp !== undefined && object.curHp !== null) ? Long.fromValue(object.curHp) : Long.ZERO;
    message.maxHp = (object.maxHp !== undefined && object.maxHp !== null) ? Long.fromValue(object.maxHp) : Long.ZERO;
    message.originEnergy = object.originEnergy ?? 0;
    message.resourceIds = object.resourceIds?.map((e) => e) || [];
    message.resources = object.resources?.map((e) => e) || [];
    message.isDead = object.isDead ?? 0;
    message.deadTime = (object.deadTime !== undefined && object.deadTime !== null)
      ? Long.fromValue(object.deadTime)
      : Long.ZERO;
    message.reviveId = object.reviveId ?? 0;
    message.cdInfo = object.cdInfo?.map((e) => SkillCDInfo.fromPartial(e)) || [];
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
