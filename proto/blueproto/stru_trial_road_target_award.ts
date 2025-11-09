/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TrialRoadTargetProgress } from "./stru_trial_road_target_progress";

export const protobufPackage = "zproto";

export interface TrialRoadTargetAward {
  targetProgress: { [key: number]: TrialRoadTargetProgress };
}

export interface TrialRoadTargetAward_TargetProgressEntry {
  key: number;
  value: TrialRoadTargetProgress | undefined;
}

function createBaseTrialRoadTargetAward(): TrialRoadTargetAward {
  return { targetProgress: {} };
}

export const TrialRoadTargetAward: MessageFns<TrialRoadTargetAward> = {
  encode(message: TrialRoadTargetAward, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.targetProgress).forEach(([key, value]) => {
      TrialRoadTargetAward_TargetProgressEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrialRoadTargetAward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrialRoadTargetAward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = TrialRoadTargetAward_TargetProgressEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.targetProgress[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): TrialRoadTargetAward {
    return {
      targetProgress: isObject(object.targetProgress)
        ? Object.entries(object.targetProgress).reduce<{ [key: number]: TrialRoadTargetProgress }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = TrialRoadTargetProgress.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: TrialRoadTargetAward): unknown {
    const obj: any = {};
    if (message.targetProgress) {
      const entries = Object.entries(message.targetProgress);
      if (entries.length > 0) {
        obj.targetProgress = {};
        entries.forEach(([k, v]) => {
          obj.targetProgress[k] = TrialRoadTargetProgress.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TrialRoadTargetAward>, I>>(base?: I): TrialRoadTargetAward {
    return TrialRoadTargetAward.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrialRoadTargetAward>, I>>(object: I): TrialRoadTargetAward {
    const message = createBaseTrialRoadTargetAward();
    message.targetProgress = Object.entries(object.targetProgress ?? {}).reduce<
      { [key: number]: TrialRoadTargetProgress }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = TrialRoadTargetProgress.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTrialRoadTargetAward_TargetProgressEntry(): TrialRoadTargetAward_TargetProgressEntry {
  return { key: 0, value: undefined };
}

export const TrialRoadTargetAward_TargetProgressEntry: MessageFns<TrialRoadTargetAward_TargetProgressEntry> = {
  encode(message: TrialRoadTargetAward_TargetProgressEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      TrialRoadTargetProgress.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrialRoadTargetAward_TargetProgressEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrialRoadTargetAward_TargetProgressEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = TrialRoadTargetProgress.decode(reader, reader.uint32());
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

  fromJSON(object: any): TrialRoadTargetAward_TargetProgressEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TrialRoadTargetProgress.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TrialRoadTargetAward_TargetProgressEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TrialRoadTargetProgress.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TrialRoadTargetAward_TargetProgressEntry>, I>>(
    base?: I,
  ): TrialRoadTargetAward_TargetProgressEntry {
    return TrialRoadTargetAward_TargetProgressEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrialRoadTargetAward_TargetProgressEntry>, I>>(
    object: I,
  ): TrialRoadTargetAward_TargetProgressEntry {
    const message = createBaseTrialRoadTargetAward_TargetProgressEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TrialRoadTargetProgress.fromPartial(object.value)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
