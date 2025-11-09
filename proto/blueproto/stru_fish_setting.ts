/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FishRecord } from "./stru_fish_record";

export const protobufPackage = "zproto";

export interface FishSetting {
  baitId: number;
  experiences: number;
  researchFishId: number;
  fishRecords: { [key: number]: FishRecord };
  fishRodDurability: Map<Long, number>;
  rodUuid: Long;
  levelReward: { [key: number]: boolean };
  zeroFishTimes: { [key: number]: Long };
}

export interface FishSetting_FishRecordsEntry {
  key: number;
  value: FishRecord | undefined;
}

export interface FishSetting_FishRodDurabilityEntry {
  key: Long;
  value: number;
}

export interface FishSetting_LevelRewardEntry {
  key: number;
  value: boolean;
}

export interface FishSetting_ZeroFishTimesEntry {
  key: number;
  value: Long;
}

function createBaseFishSetting(): FishSetting {
  return {
    baitId: 0,
    experiences: 0,
    researchFishId: 0,
    fishRecords: {},
    fishRodDurability: new Map(),
    rodUuid: Long.UZERO,
    levelReward: {},
    zeroFishTimes: {},
  };
}

export const FishSetting: MessageFns<FishSetting> = {
  encode(message: FishSetting, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.baitId !== 0) {
      writer.uint32(16).int32(message.baitId);
    }
    if (message.experiences !== 0) {
      writer.uint32(24).int32(message.experiences);
    }
    if (message.researchFishId !== 0) {
      writer.uint32(32).int32(message.researchFishId);
    }
    Object.entries(message.fishRecords).forEach(([key, value]) => {
      FishSetting_FishRecordsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    message.fishRodDurability.forEach((value, key) => {
      FishSetting_FishRodDurabilityEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    if (!message.rodUuid.equals(Long.UZERO)) {
      writer.uint32(56).uint64(message.rodUuid.toString());
    }
    Object.entries(message.levelReward).forEach(([key, value]) => {
      FishSetting_LevelRewardEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).join();
    });
    Object.entries(message.zeroFishTimes).forEach(([key, value]) => {
      FishSetting_ZeroFishTimesEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishSetting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.baitId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.experiences = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.researchFishId = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = FishSetting_FishRecordsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.fishRecords[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = FishSetting_FishRodDurabilityEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.fishRodDurability.set(entry6.key, entry6.value);
          }
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.rodUuid = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          const entry8 = FishSetting_LevelRewardEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.levelReward[entry8.key] = entry8.value;
          }
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          const entry9 = FishSetting_ZeroFishTimesEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.zeroFishTimes[entry9.key] = entry9.value;
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

  fromJSON(object: any): FishSetting {
    return {
      baitId: isSet(object.baitId) ? globalThis.Number(object.baitId) : 0,
      experiences: isSet(object.experiences) ? globalThis.Number(object.experiences) : 0,
      researchFishId: isSet(object.researchFishId) ? globalThis.Number(object.researchFishId) : 0,
      fishRecords: isObject(object.fishRecords)
        ? Object.entries(object.fishRecords).reduce<{ [key: number]: FishRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FishRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
      fishRodDurability: isObject(object.fishRodDurability)
        ? Object.entries(object.fishRodDurability).reduce<Map<Long, number>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      rodUuid: isSet(object.rodUuid) ? Long.fromValue(object.rodUuid) : Long.UZERO,
      levelReward: isObject(object.levelReward)
        ? Object.entries(object.levelReward).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      zeroFishTimes: isObject(object.zeroFishTimes)
        ? Object.entries(object.zeroFishTimes).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FishSetting): unknown {
    const obj: any = {};
    if (message.baitId !== 0) {
      obj.baitId = Math.round(message.baitId);
    }
    if (message.experiences !== 0) {
      obj.experiences = Math.round(message.experiences);
    }
    if (message.researchFishId !== 0) {
      obj.researchFishId = Math.round(message.researchFishId);
    }
    if (message.fishRecords) {
      const entries = Object.entries(message.fishRecords);
      if (entries.length > 0) {
        obj.fishRecords = {};
        entries.forEach(([k, v]) => {
          obj.fishRecords[k] = FishRecord.toJSON(v);
        });
      }
    }
    if (message.fishRodDurability?.size) {
      obj.fishRodDurability = {};
      message.fishRodDurability.forEach((v, k) => {
        obj.fishRodDurability[longToNumber(k)] = Math.round(v);
      });
    }
    if (!message.rodUuid.equals(Long.UZERO)) {
      obj.rodUuid = (message.rodUuid || Long.UZERO).toString();
    }
    if (message.levelReward) {
      const entries = Object.entries(message.levelReward);
      if (entries.length > 0) {
        obj.levelReward = {};
        entries.forEach(([k, v]) => {
          obj.levelReward[k] = v;
        });
      }
    }
    if (message.zeroFishTimes) {
      const entries = Object.entries(message.zeroFishTimes);
      if (entries.length > 0) {
        obj.zeroFishTimes = {};
        entries.forEach(([k, v]) => {
          obj.zeroFishTimes[k] = v.toString();
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishSetting>, I>>(base?: I): FishSetting {
    return FishSetting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishSetting>, I>>(object: I): FishSetting {
    const message = createBaseFishSetting();
    message.baitId = object.baitId ?? 0;
    message.experiences = object.experiences ?? 0;
    message.researchFishId = object.researchFishId ?? 0;
    message.fishRecords = Object.entries(object.fishRecords ?? {}).reduce<{ [key: number]: FishRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FishRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.fishRodDurability = (() => {
      const m = new Map();
      (object.fishRodDurability as Map<Long, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.rodUuid = (object.rodUuid !== undefined && object.rodUuid !== null)
      ? Long.fromValue(object.rodUuid)
      : Long.UZERO;
    message.levelReward = Object.entries(object.levelReward ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.zeroFishTimes = Object.entries(object.zeroFishTimes ?? {}).reduce<{ [key: number]: Long }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = Long.fromValue(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseFishSetting_FishRecordsEntry(): FishSetting_FishRecordsEntry {
  return { key: 0, value: undefined };
}

export const FishSetting_FishRecordsEntry: MessageFns<FishSetting_FishRecordsEntry> = {
  encode(message: FishSetting_FishRecordsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FishRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishSetting_FishRecordsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishSetting_FishRecordsEntry();
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

          message.value = FishRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): FishSetting_FishRecordsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FishRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FishSetting_FishRecordsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FishRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishSetting_FishRecordsEntry>, I>>(base?: I): FishSetting_FishRecordsEntry {
    return FishSetting_FishRecordsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishSetting_FishRecordsEntry>, I>>(object: I): FishSetting_FishRecordsEntry {
    const message = createBaseFishSetting_FishRecordsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FishRecord.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseFishSetting_FishRodDurabilityEntry(): FishSetting_FishRodDurabilityEntry {
  return { key: Long.UZERO, value: 0 };
}

export const FishSetting_FishRodDurabilityEntry: MessageFns<FishSetting_FishRodDurabilityEntry> = {
  encode(message: FishSetting_FishRodDurabilityEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.UZERO)) {
      writer.uint32(8).uint64(message.key.toString());
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishSetting_FishRodDurabilityEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishSetting_FishRodDurabilityEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.uint64().toString(), true);
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

  fromJSON(object: any): FishSetting_FishRodDurabilityEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.UZERO,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: FishSetting_FishRodDurabilityEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.UZERO)) {
      obj.key = (message.key || Long.UZERO).toString();
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishSetting_FishRodDurabilityEntry>, I>>(
    base?: I,
  ): FishSetting_FishRodDurabilityEntry {
    return FishSetting_FishRodDurabilityEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishSetting_FishRodDurabilityEntry>, I>>(
    object: I,
  ): FishSetting_FishRodDurabilityEntry {
    const message = createBaseFishSetting_FishRodDurabilityEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.UZERO;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseFishSetting_LevelRewardEntry(): FishSetting_LevelRewardEntry {
  return { key: 0, value: false };
}

export const FishSetting_LevelRewardEntry: MessageFns<FishSetting_LevelRewardEntry> = {
  encode(message: FishSetting_LevelRewardEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishSetting_LevelRewardEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishSetting_LevelRewardEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
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

  fromJSON(object: any): FishSetting_LevelRewardEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: FishSetting_LevelRewardEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishSetting_LevelRewardEntry>, I>>(base?: I): FishSetting_LevelRewardEntry {
    return FishSetting_LevelRewardEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishSetting_LevelRewardEntry>, I>>(object: I): FishSetting_LevelRewardEntry {
    const message = createBaseFishSetting_LevelRewardEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseFishSetting_ZeroFishTimesEntry(): FishSetting_ZeroFishTimesEntry {
  return { key: 0, value: Long.ZERO };
}

export const FishSetting_ZeroFishTimesEntry: MessageFns<FishSetting_ZeroFishTimesEntry> = {
  encode(message: FishSetting_ZeroFishTimesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishSetting_ZeroFishTimesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishSetting_ZeroFishTimesEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): FishSetting_ZeroFishTimesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: FishSetting_ZeroFishTimesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishSetting_ZeroFishTimesEntry>, I>>(base?: I): FishSetting_ZeroFishTimesEntry {
    return FishSetting_ZeroFishTimesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishSetting_ZeroFishTimesEntry>, I>>(
    object: I,
  ): FishSetting_ZeroFishTimesEntry {
    const message = createBaseFishSetting_ZeroFishTimesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
