/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SeasonActivationTarget } from "./stru_season_activation_target";

export const protobufPackage = "zproto";

export interface SeasonActivation {
  seasonId: number;
  activationPoint: number;
  refreshTime: number;
  activationTargets: { [key: number]: SeasonActivationTarget };
  stageRewardStatus: { [key: number]: number };
}

export interface SeasonActivation_ActivationTargetsEntry {
  key: number;
  value: SeasonActivationTarget | undefined;
}

export interface SeasonActivation_StageRewardStatusEntry {
  key: number;
  value: number;
}

function createBaseSeasonActivation(): SeasonActivation {
  return { seasonId: 0, activationPoint: 0, refreshTime: 0, activationTargets: {}, stageRewardStatus: {} };
}

export const SeasonActivation: MessageFns<SeasonActivation> = {
  encode(message: SeasonActivation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.seasonId !== 0) {
      writer.uint32(8).int32(message.seasonId);
    }
    if (message.activationPoint !== 0) {
      writer.uint32(16).int32(message.activationPoint);
    }
    if (message.refreshTime !== 0) {
      writer.uint32(24).int32(message.refreshTime);
    }
    Object.entries(message.activationTargets).forEach(([key, value]) => {
      SeasonActivation_ActivationTargetsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.stageRewardStatus).forEach(([key, value]) => {
      SeasonActivation_StageRewardStatusEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonActivation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonActivation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.seasonId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.activationPoint = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.refreshTime = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = SeasonActivation_ActivationTargetsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.activationTargets[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = SeasonActivation_StageRewardStatusEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.stageRewardStatus[entry5.key] = entry5.value;
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

  fromJSON(object: any): SeasonActivation {
    return {
      seasonId: isSet(object.seasonId) ? globalThis.Number(object.seasonId) : 0,
      activationPoint: isSet(object.activationPoint) ? globalThis.Number(object.activationPoint) : 0,
      refreshTime: isSet(object.refreshTime) ? globalThis.Number(object.refreshTime) : 0,
      activationTargets: isObject(object.activationTargets)
        ? Object.entries(object.activationTargets).reduce<{ [key: number]: SeasonActivationTarget }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = SeasonActivationTarget.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      stageRewardStatus: isObject(object.stageRewardStatus)
        ? Object.entries(object.stageRewardStatus).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SeasonActivation): unknown {
    const obj: any = {};
    if (message.seasonId !== 0) {
      obj.seasonId = Math.round(message.seasonId);
    }
    if (message.activationPoint !== 0) {
      obj.activationPoint = Math.round(message.activationPoint);
    }
    if (message.refreshTime !== 0) {
      obj.refreshTime = Math.round(message.refreshTime);
    }
    if (message.activationTargets) {
      const entries = Object.entries(message.activationTargets);
      if (entries.length > 0) {
        obj.activationTargets = {};
        entries.forEach(([k, v]) => {
          obj.activationTargets[k] = SeasonActivationTarget.toJSON(v);
        });
      }
    }
    if (message.stageRewardStatus) {
      const entries = Object.entries(message.stageRewardStatus);
      if (entries.length > 0) {
        obj.stageRewardStatus = {};
        entries.forEach(([k, v]) => {
          obj.stageRewardStatus[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonActivation>, I>>(base?: I): SeasonActivation {
    return SeasonActivation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonActivation>, I>>(object: I): SeasonActivation {
    const message = createBaseSeasonActivation();
    message.seasonId = object.seasonId ?? 0;
    message.activationPoint = object.activationPoint ?? 0;
    message.refreshTime = object.refreshTime ?? 0;
    message.activationTargets = Object.entries(object.activationTargets ?? {}).reduce<
      { [key: number]: SeasonActivationTarget }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = SeasonActivationTarget.fromPartial(value);
      }
      return acc;
    }, {});
    message.stageRewardStatus = Object.entries(object.stageRewardStatus ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSeasonActivation_ActivationTargetsEntry(): SeasonActivation_ActivationTargetsEntry {
  return { key: 0, value: undefined };
}

export const SeasonActivation_ActivationTargetsEntry: MessageFns<SeasonActivation_ActivationTargetsEntry> = {
  encode(message: SeasonActivation_ActivationTargetsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      SeasonActivationTarget.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonActivation_ActivationTargetsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonActivation_ActivationTargetsEntry();
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

          message.value = SeasonActivationTarget.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonActivation_ActivationTargetsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonActivationTarget.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonActivation_ActivationTargetsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonActivationTarget.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonActivation_ActivationTargetsEntry>, I>>(
    base?: I,
  ): SeasonActivation_ActivationTargetsEntry {
    return SeasonActivation_ActivationTargetsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonActivation_ActivationTargetsEntry>, I>>(
    object: I,
  ): SeasonActivation_ActivationTargetsEntry {
    const message = createBaseSeasonActivation_ActivationTargetsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonActivationTarget.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSeasonActivation_StageRewardStatusEntry(): SeasonActivation_StageRewardStatusEntry {
  return { key: 0, value: 0 };
}

export const SeasonActivation_StageRewardStatusEntry: MessageFns<SeasonActivation_StageRewardStatusEntry> = {
  encode(message: SeasonActivation_StageRewardStatusEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonActivation_StageRewardStatusEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonActivation_StageRewardStatusEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
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

  fromJSON(object: any): SeasonActivation_StageRewardStatusEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: SeasonActivation_StageRewardStatusEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonActivation_StageRewardStatusEntry>, I>>(
    base?: I,
  ): SeasonActivation_StageRewardStatusEntry {
    return SeasonActivation_StageRewardStatusEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonActivation_StageRewardStatusEntry>, I>>(
    object: I,
  ): SeasonActivation_StageRewardStatusEntry {
    const message = createBaseSeasonActivation_StageRewardStatusEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
