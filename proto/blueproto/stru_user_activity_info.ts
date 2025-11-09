/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { UserActivityRewardInfo } from "./stru_user_activity_reward_info";

export const protobufPackage = "zproto";

export interface UserActivityInfo {
  startTime: Long;
  endTime: Long;
  rewards: { [key: number]: UserActivityRewardInfo };
}

export interface UserActivityInfo_RewardsEntry {
  key: number;
  value: UserActivityRewardInfo | undefined;
}

function createBaseUserActivityInfo(): UserActivityInfo {
  return { startTime: Long.UZERO, endTime: Long.UZERO, rewards: {} };
}

export const UserActivityInfo: MessageFns<UserActivityInfo> = {
  encode(message: UserActivityInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.startTime.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.startTime.toString());
    }
    if (!message.endTime.equals(Long.UZERO)) {
      writer.uint32(24).uint64(message.endTime.toString());
    }
    Object.entries(message.rewards).forEach(([key, value]) => {
      UserActivityInfo_RewardsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserActivityInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserActivityInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.startTime = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.endTime = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = UserActivityInfo_RewardsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.rewards[entry4.key] = entry4.value;
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

  fromJSON(object: any): UserActivityInfo {
    return {
      startTime: isSet(object.startTime) ? Long.fromValue(object.startTime) : Long.UZERO,
      endTime: isSet(object.endTime) ? Long.fromValue(object.endTime) : Long.UZERO,
      rewards: isObject(object.rewards)
        ? Object.entries(object.rewards).reduce<{ [key: number]: UserActivityRewardInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = UserActivityRewardInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UserActivityInfo): unknown {
    const obj: any = {};
    if (!message.startTime.equals(Long.UZERO)) {
      obj.startTime = (message.startTime || Long.UZERO).toString();
    }
    if (!message.endTime.equals(Long.UZERO)) {
      obj.endTime = (message.endTime || Long.UZERO).toString();
    }
    if (message.rewards) {
      const entries = Object.entries(message.rewards);
      if (entries.length > 0) {
        obj.rewards = {};
        entries.forEach(([k, v]) => {
          obj.rewards[k] = UserActivityRewardInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserActivityInfo>, I>>(base?: I): UserActivityInfo {
    return UserActivityInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserActivityInfo>, I>>(object: I): UserActivityInfo {
    const message = createBaseUserActivityInfo();
    message.startTime = (object.startTime !== undefined && object.startTime !== null)
      ? Long.fromValue(object.startTime)
      : Long.UZERO;
    message.endTime = (object.endTime !== undefined && object.endTime !== null)
      ? Long.fromValue(object.endTime)
      : Long.UZERO;
    message.rewards = Object.entries(object.rewards ?? {}).reduce<{ [key: number]: UserActivityRewardInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = UserActivityRewardInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseUserActivityInfo_RewardsEntry(): UserActivityInfo_RewardsEntry {
  return { key: 0, value: undefined };
}

export const UserActivityInfo_RewardsEntry: MessageFns<UserActivityInfo_RewardsEntry> = {
  encode(message: UserActivityInfo_RewardsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      UserActivityRewardInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserActivityInfo_RewardsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserActivityInfo_RewardsEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = UserActivityRewardInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): UserActivityInfo_RewardsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? UserActivityRewardInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UserActivityInfo_RewardsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = UserActivityRewardInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserActivityInfo_RewardsEntry>, I>>(base?: I): UserActivityInfo_RewardsEntry {
    return UserActivityInfo_RewardsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserActivityInfo_RewardsEntry>, I>>(
    object: I,
  ): UserActivityInfo_RewardsEntry {
    const message = createBaseUserActivityInfo_RewardsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? UserActivityRewardInfo.fromPartial(object.value)
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
