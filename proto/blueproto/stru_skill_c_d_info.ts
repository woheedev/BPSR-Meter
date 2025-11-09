/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SkillCDInfo {
  skillLevelId: number;
  skillBeginTime: Long;
  duration: number;
  skillCdType: number;
  professionHoldBeginTime: Long;
  chargeCount: number;
  validCdTime: number;
  subCdRatio: number;
  subCdFixed: Long;
  accelerateCdRatio: number;
}

function createBaseSkillCDInfo(): SkillCDInfo {
  return {
    skillLevelId: 0,
    skillBeginTime: Long.ZERO,
    duration: 0,
    skillCdType: 0,
    professionHoldBeginTime: Long.ZERO,
    chargeCount: 0,
    validCdTime: 0,
    subCdRatio: 0,
    subCdFixed: Long.ZERO,
    accelerateCdRatio: 0,
  };
}

export const SkillCDInfo: MessageFns<SkillCDInfo> = {
  encode(message: SkillCDInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.skillLevelId !== 0) {
      writer.uint32(8).int32(message.skillLevelId);
    }
    if (!message.skillBeginTime.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.skillBeginTime.toString());
    }
    if (message.duration !== 0) {
      writer.uint32(24).int32(message.duration);
    }
    if (message.skillCdType !== 0) {
      writer.uint32(32).uint32(message.skillCdType);
    }
    if (!message.professionHoldBeginTime.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.professionHoldBeginTime.toString());
    }
    if (message.chargeCount !== 0) {
      writer.uint32(56).int32(message.chargeCount);
    }
    if (message.validCdTime !== 0) {
      writer.uint32(64).int32(message.validCdTime);
    }
    if (message.subCdRatio !== 0) {
      writer.uint32(72).int32(message.subCdRatio);
    }
    if (!message.subCdFixed.equals(Long.ZERO)) {
      writer.uint32(80).int64(message.subCdFixed.toString());
    }
    if (message.accelerateCdRatio !== 0) {
      writer.uint32(88).int32(message.accelerateCdRatio);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SkillCDInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillCDInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.skillLevelId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.skillBeginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.duration = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.skillCdType = reader.uint32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.professionHoldBeginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.chargeCount = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.validCdTime = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.subCdRatio = reader.int32();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.subCdFixed = Long.fromString(reader.int64().toString());
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.accelerateCdRatio = reader.int32();
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

  fromJSON(object: any): SkillCDInfo {
    return {
      skillLevelId: isSet(object.skillLevelId) ? globalThis.Number(object.skillLevelId) : 0,
      skillBeginTime: isSet(object.skillBeginTime) ? Long.fromValue(object.skillBeginTime) : Long.ZERO,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
      skillCdType: isSet(object.skillCdType) ? globalThis.Number(object.skillCdType) : 0,
      professionHoldBeginTime: isSet(object.professionHoldBeginTime)
        ? Long.fromValue(object.professionHoldBeginTime)
        : Long.ZERO,
      chargeCount: isSet(object.chargeCount) ? globalThis.Number(object.chargeCount) : 0,
      validCdTime: isSet(object.validCdTime) ? globalThis.Number(object.validCdTime) : 0,
      subCdRatio: isSet(object.subCdRatio) ? globalThis.Number(object.subCdRatio) : 0,
      subCdFixed: isSet(object.subCdFixed) ? Long.fromValue(object.subCdFixed) : Long.ZERO,
      accelerateCdRatio: isSet(object.accelerateCdRatio) ? globalThis.Number(object.accelerateCdRatio) : 0,
    };
  },

  toJSON(message: SkillCDInfo): unknown {
    const obj: any = {};
    if (message.skillLevelId !== 0) {
      obj.skillLevelId = Math.round(message.skillLevelId);
    }
    if (!message.skillBeginTime.equals(Long.ZERO)) {
      obj.skillBeginTime = (message.skillBeginTime || Long.ZERO).toString();
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    if (message.skillCdType !== 0) {
      obj.skillCdType = Math.round(message.skillCdType);
    }
    if (!message.professionHoldBeginTime.equals(Long.ZERO)) {
      obj.professionHoldBeginTime = (message.professionHoldBeginTime || Long.ZERO).toString();
    }
    if (message.chargeCount !== 0) {
      obj.chargeCount = Math.round(message.chargeCount);
    }
    if (message.validCdTime !== 0) {
      obj.validCdTime = Math.round(message.validCdTime);
    }
    if (message.subCdRatio !== 0) {
      obj.subCdRatio = Math.round(message.subCdRatio);
    }
    if (!message.subCdFixed.equals(Long.ZERO)) {
      obj.subCdFixed = (message.subCdFixed || Long.ZERO).toString();
    }
    if (message.accelerateCdRatio !== 0) {
      obj.accelerateCdRatio = Math.round(message.accelerateCdRatio);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillCDInfo>, I>>(base?: I): SkillCDInfo {
    return SkillCDInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SkillCDInfo>, I>>(object: I): SkillCDInfo {
    const message = createBaseSkillCDInfo();
    message.skillLevelId = object.skillLevelId ?? 0;
    message.skillBeginTime = (object.skillBeginTime !== undefined && object.skillBeginTime !== null)
      ? Long.fromValue(object.skillBeginTime)
      : Long.ZERO;
    message.duration = object.duration ?? 0;
    message.skillCdType = object.skillCdType ?? 0;
    message.professionHoldBeginTime =
      (object.professionHoldBeginTime !== undefined && object.professionHoldBeginTime !== null)
        ? Long.fromValue(object.professionHoldBeginTime)
        : Long.ZERO;
    message.chargeCount = object.chargeCount ?? 0;
    message.validCdTime = object.validCdTime ?? 0;
    message.subCdRatio = object.subCdRatio ?? 0;
    message.subCdFixed = (object.subCdFixed !== undefined && object.subCdFixed !== null)
      ? Long.fromValue(object.subCdFixed)
      : Long.ZERO;
    message.accelerateCdRatio = object.accelerateCdRatio ?? 0;
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
