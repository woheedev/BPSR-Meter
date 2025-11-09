/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SeasonActivationTarget {
  id: number;
  targetType: number;
  targetUuid: number;
  rewardRate: number;
  progress: number;
  completedTimes: number;
}

function createBaseSeasonActivationTarget(): SeasonActivationTarget {
  return { id: 0, targetType: 0, targetUuid: 0, rewardRate: 0, progress: 0, completedTimes: 0 };
}

export const SeasonActivationTarget: MessageFns<SeasonActivationTarget> = {
  encode(message: SeasonActivationTarget, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.targetType !== 0) {
      writer.uint32(16).int32(message.targetType);
    }
    if (message.targetUuid !== 0) {
      writer.uint32(24).int32(message.targetUuid);
    }
    if (message.rewardRate !== 0) {
      writer.uint32(32).int32(message.rewardRate);
    }
    if (message.progress !== 0) {
      writer.uint32(40).int32(message.progress);
    }
    if (message.completedTimes !== 0) {
      writer.uint32(48).int32(message.completedTimes);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonActivationTarget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonActivationTarget();
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

          message.targetType = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.targetUuid = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.rewardRate = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.progress = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.completedTimes = reader.int32();
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

  fromJSON(object: any): SeasonActivationTarget {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      targetType: isSet(object.targetType) ? globalThis.Number(object.targetType) : 0,
      targetUuid: isSet(object.targetUuid) ? globalThis.Number(object.targetUuid) : 0,
      rewardRate: isSet(object.rewardRate) ? globalThis.Number(object.rewardRate) : 0,
      progress: isSet(object.progress) ? globalThis.Number(object.progress) : 0,
      completedTimes: isSet(object.completedTimes) ? globalThis.Number(object.completedTimes) : 0,
    };
  },

  toJSON(message: SeasonActivationTarget): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.targetType !== 0) {
      obj.targetType = Math.round(message.targetType);
    }
    if (message.targetUuid !== 0) {
      obj.targetUuid = Math.round(message.targetUuid);
    }
    if (message.rewardRate !== 0) {
      obj.rewardRate = Math.round(message.rewardRate);
    }
    if (message.progress !== 0) {
      obj.progress = Math.round(message.progress);
    }
    if (message.completedTimes !== 0) {
      obj.completedTimes = Math.round(message.completedTimes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonActivationTarget>, I>>(base?: I): SeasonActivationTarget {
    return SeasonActivationTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonActivationTarget>, I>>(object: I): SeasonActivationTarget {
    const message = createBaseSeasonActivationTarget();
    message.id = object.id ?? 0;
    message.targetType = object.targetType ?? 0;
    message.targetUuid = object.targetUuid ?? 0;
    message.rewardRate = object.rewardRate ?? 0;
    message.progress = object.progress ?? 0;
    message.completedTimes = object.completedTimes ?? 0;
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
