/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { UnionDanceHistory } from "./stru_union_dance_history";
import { UnionHistoryActive } from "./stru_union_history_active";
import { UserUnionHuntInfo } from "./stru_user_union_hunt_info";

export const protobufPackage = "zproto";

export interface UserUnion {
  unionId: Long;
  nextJoinTime: Long;
  reqUnionTimes: Map<Long, Long>;
  joinFlag: boolean;
  collectedIds: Long[];
  activeAwardResetTime: Long;
  receivedAwardIds: number[];
  historyActivePoints: UnionHistoryActive[];
  activeLastRefreshTime: Long;
  finishDailyActiveIds: number[];
  leaveTime: Long;
  danceRecord: UnionDanceHistory | undefined;
  userUnionHuntInfo: UserUnionHuntInfo | undefined;
}

export interface UserUnion_ReqUnionTimesEntry {
  key: Long;
  value: Long;
}

function createBaseUserUnion(): UserUnion {
  return {
    unionId: Long.ZERO,
    nextJoinTime: Long.UZERO,
    reqUnionTimes: new Map(),
    joinFlag: false,
    collectedIds: [],
    activeAwardResetTime: Long.ZERO,
    receivedAwardIds: [],
    historyActivePoints: [],
    activeLastRefreshTime: Long.ZERO,
    finishDailyActiveIds: [],
    leaveTime: Long.UZERO,
    danceRecord: undefined,
    userUnionHuntInfo: undefined,
  };
}

export const UserUnion: MessageFns<UserUnion> = {
  encode(message: UserUnion, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.unionId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.unionId.toString());
    }
    if (!message.nextJoinTime.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.nextJoinTime.toString());
    }
    message.reqUnionTimes.forEach((value, key) => {
      UserUnion_ReqUnionTimesEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    if (message.joinFlag !== false) {
      writer.uint32(32).bool(message.joinFlag);
    }
    writer.uint32(42).fork();
    for (const v of message.collectedIds) {
      writer.int64(v.toString());
    }
    writer.join();
    if (!message.activeAwardResetTime.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.activeAwardResetTime.toString());
    }
    writer.uint32(58).fork();
    for (const v of message.receivedAwardIds) {
      writer.int32(v);
    }
    writer.join();
    for (const v of message.historyActivePoints) {
      UnionHistoryActive.encode(v!, writer.uint32(66).fork()).join();
    }
    if (!message.activeLastRefreshTime.equals(Long.ZERO)) {
      writer.uint32(72).int64(message.activeLastRefreshTime.toString());
    }
    writer.uint32(82).fork();
    for (const v of message.finishDailyActiveIds) {
      writer.int32(v);
    }
    writer.join();
    if (!message.leaveTime.equals(Long.UZERO)) {
      writer.uint32(88).uint64(message.leaveTime.toString());
    }
    if (message.danceRecord !== undefined) {
      UnionDanceHistory.encode(message.danceRecord, writer.uint32(106).fork()).join();
    }
    if (message.userUnionHuntInfo !== undefined) {
      UserUnionHuntInfo.encode(message.userUnionHuntInfo, writer.uint32(114).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserUnion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.unionId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.nextJoinTime = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = UserUnion_ReqUnionTimesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.reqUnionTimes.set(entry3.key, entry3.value);
          }
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.joinFlag = reader.bool();
          continue;
        }
        case 5: {
          if (tag === 40) {
            message.collectedIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.collectedIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.activeAwardResetTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 7: {
          if (tag === 56) {
            message.receivedAwardIds.push(reader.int32());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.receivedAwardIds.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.historyActivePoints.push(UnionHistoryActive.decode(reader, reader.uint32()));
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.activeLastRefreshTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 10: {
          if (tag === 80) {
            message.finishDailyActiveIds.push(reader.int32());

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.finishDailyActiveIds.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.leaveTime = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.danceRecord = UnionDanceHistory.decode(reader, reader.uint32());
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.userUnionHuntInfo = UserUnionHuntInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): UserUnion {
    return {
      unionId: isSet(object.unionId) ? Long.fromValue(object.unionId) : Long.ZERO,
      nextJoinTime: isSet(object.nextJoinTime) ? Long.fromValue(object.nextJoinTime) : Long.UZERO,
      reqUnionTimes: isObject(object.reqUnionTimes)
        ? Object.entries(object.reqUnionTimes).reduce<Map<Long, Long>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Long.fromValue(value as Long | string));
          return acc;
        }, new Map())
        : new Map(),
      joinFlag: isSet(object.joinFlag) ? globalThis.Boolean(object.joinFlag) : false,
      collectedIds: globalThis.Array.isArray(object?.collectedIds)
        ? object.collectedIds.map((e: any) => Long.fromValue(e))
        : [],
      activeAwardResetTime: isSet(object.activeAwardResetTime)
        ? Long.fromValue(object.activeAwardResetTime)
        : Long.ZERO,
      receivedAwardIds: globalThis.Array.isArray(object?.receivedAwardIds)
        ? object.receivedAwardIds.map((e: any) => globalThis.Number(e))
        : [],
      historyActivePoints: globalThis.Array.isArray(object?.historyActivePoints)
        ? object.historyActivePoints.map((e: any) => UnionHistoryActive.fromJSON(e))
        : [],
      activeLastRefreshTime: isSet(object.activeLastRefreshTime)
        ? Long.fromValue(object.activeLastRefreshTime)
        : Long.ZERO,
      finishDailyActiveIds: globalThis.Array.isArray(object?.finishDailyActiveIds)
        ? object.finishDailyActiveIds.map((e: any) => globalThis.Number(e))
        : [],
      leaveTime: isSet(object.leaveTime) ? Long.fromValue(object.leaveTime) : Long.UZERO,
      danceRecord: isSet(object.danceRecord) ? UnionDanceHistory.fromJSON(object.danceRecord) : undefined,
      userUnionHuntInfo: isSet(object.userUnionHuntInfo)
        ? UserUnionHuntInfo.fromJSON(object.userUnionHuntInfo)
        : undefined,
    };
  },

  toJSON(message: UserUnion): unknown {
    const obj: any = {};
    if (!message.unionId.equals(Long.ZERO)) {
      obj.unionId = (message.unionId || Long.ZERO).toString();
    }
    if (!message.nextJoinTime.equals(Long.UZERO)) {
      obj.nextJoinTime = (message.nextJoinTime || Long.UZERO).toString();
    }
    if (message.reqUnionTimes?.size) {
      obj.reqUnionTimes = {};
      message.reqUnionTimes.forEach((v, k) => {
        obj.reqUnionTimes[longToNumber(k)] = v.toString();
      });
    }
    if (message.joinFlag !== false) {
      obj.joinFlag = message.joinFlag;
    }
    if (message.collectedIds?.length) {
      obj.collectedIds = message.collectedIds.map((e) => (e || Long.ZERO).toString());
    }
    if (!message.activeAwardResetTime.equals(Long.ZERO)) {
      obj.activeAwardResetTime = (message.activeAwardResetTime || Long.ZERO).toString();
    }
    if (message.receivedAwardIds?.length) {
      obj.receivedAwardIds = message.receivedAwardIds.map((e) => Math.round(e));
    }
    if (message.historyActivePoints?.length) {
      obj.historyActivePoints = message.historyActivePoints.map((e) => UnionHistoryActive.toJSON(e));
    }
    if (!message.activeLastRefreshTime.equals(Long.ZERO)) {
      obj.activeLastRefreshTime = (message.activeLastRefreshTime || Long.ZERO).toString();
    }
    if (message.finishDailyActiveIds?.length) {
      obj.finishDailyActiveIds = message.finishDailyActiveIds.map((e) => Math.round(e));
    }
    if (!message.leaveTime.equals(Long.UZERO)) {
      obj.leaveTime = (message.leaveTime || Long.UZERO).toString();
    }
    if (message.danceRecord !== undefined) {
      obj.danceRecord = UnionDanceHistory.toJSON(message.danceRecord);
    }
    if (message.userUnionHuntInfo !== undefined) {
      obj.userUnionHuntInfo = UserUnionHuntInfo.toJSON(message.userUnionHuntInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUnion>, I>>(base?: I): UserUnion {
    return UserUnion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserUnion>, I>>(object: I): UserUnion {
    const message = createBaseUserUnion();
    message.unionId = (object.unionId !== undefined && object.unionId !== null)
      ? Long.fromValue(object.unionId)
      : Long.ZERO;
    message.nextJoinTime = (object.nextJoinTime !== undefined && object.nextJoinTime !== null)
      ? Long.fromValue(object.nextJoinTime)
      : Long.UZERO;
    message.reqUnionTimes = (() => {
      const m = new Map();
      (object.reqUnionTimes as Map<Long, Long> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Long.fromValue(value));
        }
      });
      return m;
    })();
    message.joinFlag = object.joinFlag ?? false;
    message.collectedIds = object.collectedIds?.map((e) => Long.fromValue(e)) || [];
    message.activeAwardResetTime = (object.activeAwardResetTime !== undefined && object.activeAwardResetTime !== null)
      ? Long.fromValue(object.activeAwardResetTime)
      : Long.ZERO;
    message.receivedAwardIds = object.receivedAwardIds?.map((e) => e) || [];
    message.historyActivePoints = object.historyActivePoints?.map((e) => UnionHistoryActive.fromPartial(e)) || [];
    message.activeLastRefreshTime =
      (object.activeLastRefreshTime !== undefined && object.activeLastRefreshTime !== null)
        ? Long.fromValue(object.activeLastRefreshTime)
        : Long.ZERO;
    message.finishDailyActiveIds = object.finishDailyActiveIds?.map((e) => e) || [];
    message.leaveTime = (object.leaveTime !== undefined && object.leaveTime !== null)
      ? Long.fromValue(object.leaveTime)
      : Long.UZERO;
    message.danceRecord = (object.danceRecord !== undefined && object.danceRecord !== null)
      ? UnionDanceHistory.fromPartial(object.danceRecord)
      : undefined;
    message.userUnionHuntInfo = (object.userUnionHuntInfo !== undefined && object.userUnionHuntInfo !== null)
      ? UserUnionHuntInfo.fromPartial(object.userUnionHuntInfo)
      : undefined;
    return message;
  },
};

function createBaseUserUnion_ReqUnionTimesEntry(): UserUnion_ReqUnionTimesEntry {
  return { key: Long.ZERO, value: Long.UZERO };
}

export const UserUnion_ReqUnionTimesEntry: MessageFns<UserUnion_ReqUnionTimesEntry> = {
  encode(message: UserUnion_ReqUnionTimesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (!message.value.equals(Long.UZERO)) {
      writer.uint32(16).uint64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserUnion_ReqUnionTimesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUnion_ReqUnionTimesEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.uint64().toString(), true);
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

  fromJSON(object: any): UserUnion_ReqUnionTimesEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
    };
  },

  toJSON(message: UserUnion_ReqUnionTimesEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (!message.value.equals(Long.UZERO)) {
      obj.value = (message.value || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUnion_ReqUnionTimesEntry>, I>>(base?: I): UserUnion_ReqUnionTimesEntry {
    return UserUnion_ReqUnionTimesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserUnion_ReqUnionTimesEntry>, I>>(object: I): UserUnion_ReqUnionTimesEntry {
    const message = createBaseUserUnion_ReqUnionTimesEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.UZERO;
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
