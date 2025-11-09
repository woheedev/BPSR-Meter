/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { UserActivityInfo } from "./stru_user_activity_info";

export const protobufPackage = "zproto";

export interface UserActivityList {
  activities: Map<Long, UserActivityInfo>;
}

export interface UserActivityList_ActivitiesEntry {
  key: Long;
  value: UserActivityInfo | undefined;
}

function createBaseUserActivityList(): UserActivityList {
  return { activities: new Map() };
}

export const UserActivityList: MessageFns<UserActivityList> = {
  encode(message: UserActivityList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    message.activities.forEach((value, key) => {
      UserActivityList_ActivitiesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserActivityList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserActivityList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = UserActivityList_ActivitiesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.activities.set(entry1.key, entry1.value);
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

  fromJSON(object: any): UserActivityList {
    return {
      activities: isObject(object.activities)
        ? Object.entries(object.activities).reduce<Map<Long, UserActivityInfo>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), UserActivityInfo.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: UserActivityList): unknown {
    const obj: any = {};
    if (message.activities?.size) {
      obj.activities = {};
      message.activities.forEach((v, k) => {
        obj.activities[longToNumber(k)] = UserActivityInfo.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserActivityList>, I>>(base?: I): UserActivityList {
    return UserActivityList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserActivityList>, I>>(object: I): UserActivityList {
    const message = createBaseUserActivityList();
    message.activities = (() => {
      const m = new Map();
      (object.activities as Map<Long, UserActivityInfo> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, UserActivityInfo.fromPartial(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseUserActivityList_ActivitiesEntry(): UserActivityList_ActivitiesEntry {
  return { key: Long.ZERO, value: undefined };
}

export const UserActivityList_ActivitiesEntry: MessageFns<UserActivityList_ActivitiesEntry> = {
  encode(message: UserActivityList_ActivitiesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      UserActivityInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserActivityList_ActivitiesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserActivityList_ActivitiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = UserActivityInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): UserActivityList_ActivitiesEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? UserActivityInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UserActivityList_ActivitiesEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = UserActivityInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserActivityList_ActivitiesEntry>, I>>(
    base?: I,
  ): UserActivityList_ActivitiesEntry {
    return UserActivityList_ActivitiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserActivityList_ActivitiesEntry>, I>>(
    object: I,
  ): UserActivityList_ActivitiesEntry {
    const message = createBaseUserActivityList_ActivitiesEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? UserActivityInfo.fromPartial(object.value)
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
