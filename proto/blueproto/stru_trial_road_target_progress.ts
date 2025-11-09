/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface TrialRoadTargetProgress {
  targetId: number;
  targetProgress: number;
  awardState: number;
}

function createBaseTrialRoadTargetProgress(): TrialRoadTargetProgress {
  return { targetId: 0, targetProgress: 0, awardState: 0 };
}

export const TrialRoadTargetProgress: MessageFns<TrialRoadTargetProgress> = {
  encode(message: TrialRoadTargetProgress, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.targetId !== 0) {
      writer.uint32(8).int32(message.targetId);
    }
    if (message.targetProgress !== 0) {
      writer.uint32(16).int32(message.targetProgress);
    }
    if (message.awardState !== 0) {
      writer.uint32(24).int32(message.awardState);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrialRoadTargetProgress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrialRoadTargetProgress();
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

          message.targetProgress = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.awardState = reader.int32();
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

  fromJSON(object: any): TrialRoadTargetProgress {
    return {
      targetId: isSet(object.targetId) ? globalThis.Number(object.targetId) : 0,
      targetProgress: isSet(object.targetProgress) ? globalThis.Number(object.targetProgress) : 0,
      awardState: isSet(object.awardState) ? globalThis.Number(object.awardState) : 0,
    };
  },

  toJSON(message: TrialRoadTargetProgress): unknown {
    const obj: any = {};
    if (message.targetId !== 0) {
      obj.targetId = Math.round(message.targetId);
    }
    if (message.targetProgress !== 0) {
      obj.targetProgress = Math.round(message.targetProgress);
    }
    if (message.awardState !== 0) {
      obj.awardState = Math.round(message.awardState);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TrialRoadTargetProgress>, I>>(base?: I): TrialRoadTargetProgress {
    return TrialRoadTargetProgress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrialRoadTargetProgress>, I>>(object: I): TrialRoadTargetProgress {
    const message = createBaseTrialRoadTargetProgress();
    message.targetId = object.targetId ?? 0;
    message.targetProgress = object.targetProgress ?? 0;
    message.awardState = object.awardState ?? 0;
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
