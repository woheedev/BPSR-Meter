/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FashionBenefitCollectionHistory } from "./stru_fashion_benefit_collection_history";
import { FashionBenefitTaskInfo } from "./stru_fashion_benefit_task_info";

export const protobufPackage = "zproto";

export interface FashionBenefit {
  lastRewardId: number;
  level: number;
  pointsTask: number;
  pointsCycle: number;
  pointsCollection: number;
  taskList: { [key: number]: FashionBenefitTaskInfo };
  collectionHistory: FashionBenefitCollectionHistory[];
  nextRefreshTime: Long;
  maxPoints: number;
  lastAddTime: Long;
  curDayMaxPoints: number;
  expireCycle: number;
  lastLevel: number;
  firtExpireTime: Long;
  lastRewardIds: number[];
}

export interface FashionBenefit_TaskListEntry {
  key: number;
  value: FashionBenefitTaskInfo | undefined;
}

function createBaseFashionBenefit(): FashionBenefit {
  return {
    lastRewardId: 0,
    level: 0,
    pointsTask: 0,
    pointsCycle: 0,
    pointsCollection: 0,
    taskList: {},
    collectionHistory: [],
    nextRefreshTime: Long.ZERO,
    maxPoints: 0,
    lastAddTime: Long.ZERO,
    curDayMaxPoints: 0,
    expireCycle: 0,
    lastLevel: 0,
    firtExpireTime: Long.ZERO,
    lastRewardIds: [],
  };
}

export const FashionBenefit: MessageFns<FashionBenefit> = {
  encode(message: FashionBenefit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.lastRewardId !== 0) {
      writer.uint32(8).int32(message.lastRewardId);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.pointsTask !== 0) {
      writer.uint32(24).int32(message.pointsTask);
    }
    if (message.pointsCycle !== 0) {
      writer.uint32(32).int32(message.pointsCycle);
    }
    if (message.pointsCollection !== 0) {
      writer.uint32(40).int32(message.pointsCollection);
    }
    Object.entries(message.taskList).forEach(([key, value]) => {
      FashionBenefit_TaskListEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    for (const v of message.collectionHistory) {
      FashionBenefitCollectionHistory.encode(v!, writer.uint32(58).fork()).join();
    }
    if (!message.nextRefreshTime.equals(Long.ZERO)) {
      writer.uint32(64).int64(message.nextRefreshTime.toString());
    }
    if (message.maxPoints !== 0) {
      writer.uint32(72).int32(message.maxPoints);
    }
    if (!message.lastAddTime.equals(Long.ZERO)) {
      writer.uint32(80).int64(message.lastAddTime.toString());
    }
    if (message.curDayMaxPoints !== 0) {
      writer.uint32(88).int32(message.curDayMaxPoints);
    }
    if (message.expireCycle !== 0) {
      writer.uint32(96).int32(message.expireCycle);
    }
    if (message.lastLevel !== 0) {
      writer.uint32(104).int32(message.lastLevel);
    }
    if (!message.firtExpireTime.equals(Long.ZERO)) {
      writer.uint32(112).int64(message.firtExpireTime.toString());
    }
    writer.uint32(122).fork();
    for (const v of message.lastRewardIds) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionBenefit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionBenefit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.lastRewardId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.pointsTask = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.pointsCycle = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.pointsCollection = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = FashionBenefit_TaskListEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.taskList[entry6.key] = entry6.value;
          }
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.collectionHistory.push(FashionBenefitCollectionHistory.decode(reader, reader.uint32()));
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.nextRefreshTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.maxPoints = reader.int32();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.lastAddTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.curDayMaxPoints = reader.int32();
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.expireCycle = reader.int32();
          continue;
        }
        case 13: {
          if (tag !== 104) {
            break;
          }

          message.lastLevel = reader.int32();
          continue;
        }
        case 14: {
          if (tag !== 112) {
            break;
          }

          message.firtExpireTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 15: {
          if (tag === 120) {
            message.lastRewardIds.push(reader.int32());

            continue;
          }

          if (tag === 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lastRewardIds.push(reader.int32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionBenefit {
    return {
      lastRewardId: isSet(object.lastRewardId) ? globalThis.Number(object.lastRewardId) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      pointsTask: isSet(object.pointsTask) ? globalThis.Number(object.pointsTask) : 0,
      pointsCycle: isSet(object.pointsCycle) ? globalThis.Number(object.pointsCycle) : 0,
      pointsCollection: isSet(object.pointsCollection) ? globalThis.Number(object.pointsCollection) : 0,
      taskList: isObject(object.taskList)
        ? Object.entries(object.taskList).reduce<{ [key: number]: FashionBenefitTaskInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FashionBenefitTaskInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      collectionHistory: globalThis.Array.isArray(object?.collectionHistory)
        ? object.collectionHistory.map((e: any) => FashionBenefitCollectionHistory.fromJSON(e))
        : [],
      nextRefreshTime: isSet(object.nextRefreshTime) ? Long.fromValue(object.nextRefreshTime) : Long.ZERO,
      maxPoints: isSet(object.maxPoints) ? globalThis.Number(object.maxPoints) : 0,
      lastAddTime: isSet(object.lastAddTime) ? Long.fromValue(object.lastAddTime) : Long.ZERO,
      curDayMaxPoints: isSet(object.curDayMaxPoints) ? globalThis.Number(object.curDayMaxPoints) : 0,
      expireCycle: isSet(object.expireCycle) ? globalThis.Number(object.expireCycle) : 0,
      lastLevel: isSet(object.lastLevel) ? globalThis.Number(object.lastLevel) : 0,
      firtExpireTime: isSet(object.firtExpireTime) ? Long.fromValue(object.firtExpireTime) : Long.ZERO,
      lastRewardIds: globalThis.Array.isArray(object?.lastRewardIds)
        ? object.lastRewardIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: FashionBenefit): unknown {
    const obj: any = {};
    if (message.lastRewardId !== 0) {
      obj.lastRewardId = Math.round(message.lastRewardId);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.pointsTask !== 0) {
      obj.pointsTask = Math.round(message.pointsTask);
    }
    if (message.pointsCycle !== 0) {
      obj.pointsCycle = Math.round(message.pointsCycle);
    }
    if (message.pointsCollection !== 0) {
      obj.pointsCollection = Math.round(message.pointsCollection);
    }
    if (message.taskList) {
      const entries = Object.entries(message.taskList);
      if (entries.length > 0) {
        obj.taskList = {};
        entries.forEach(([k, v]) => {
          obj.taskList[k] = FashionBenefitTaskInfo.toJSON(v);
        });
      }
    }
    if (message.collectionHistory?.length) {
      obj.collectionHistory = message.collectionHistory.map((e) => FashionBenefitCollectionHistory.toJSON(e));
    }
    if (!message.nextRefreshTime.equals(Long.ZERO)) {
      obj.nextRefreshTime = (message.nextRefreshTime || Long.ZERO).toString();
    }
    if (message.maxPoints !== 0) {
      obj.maxPoints = Math.round(message.maxPoints);
    }
    if (!message.lastAddTime.equals(Long.ZERO)) {
      obj.lastAddTime = (message.lastAddTime || Long.ZERO).toString();
    }
    if (message.curDayMaxPoints !== 0) {
      obj.curDayMaxPoints = Math.round(message.curDayMaxPoints);
    }
    if (message.expireCycle !== 0) {
      obj.expireCycle = Math.round(message.expireCycle);
    }
    if (message.lastLevel !== 0) {
      obj.lastLevel = Math.round(message.lastLevel);
    }
    if (!message.firtExpireTime.equals(Long.ZERO)) {
      obj.firtExpireTime = (message.firtExpireTime || Long.ZERO).toString();
    }
    if (message.lastRewardIds?.length) {
      obj.lastRewardIds = message.lastRewardIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionBenefit>, I>>(base?: I): FashionBenefit {
    return FashionBenefit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionBenefit>, I>>(object: I): FashionBenefit {
    const message = createBaseFashionBenefit();
    message.lastRewardId = object.lastRewardId ?? 0;
    message.level = object.level ?? 0;
    message.pointsTask = object.pointsTask ?? 0;
    message.pointsCycle = object.pointsCycle ?? 0;
    message.pointsCollection = object.pointsCollection ?? 0;
    message.taskList = Object.entries(object.taskList ?? {}).reduce<{ [key: number]: FashionBenefitTaskInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FashionBenefitTaskInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.collectionHistory = object.collectionHistory?.map((e) => FashionBenefitCollectionHistory.fromPartial(e)) ||
      [];
    message.nextRefreshTime = (object.nextRefreshTime !== undefined && object.nextRefreshTime !== null)
      ? Long.fromValue(object.nextRefreshTime)
      : Long.ZERO;
    message.maxPoints = object.maxPoints ?? 0;
    message.lastAddTime = (object.lastAddTime !== undefined && object.lastAddTime !== null)
      ? Long.fromValue(object.lastAddTime)
      : Long.ZERO;
    message.curDayMaxPoints = object.curDayMaxPoints ?? 0;
    message.expireCycle = object.expireCycle ?? 0;
    message.lastLevel = object.lastLevel ?? 0;
    message.firtExpireTime = (object.firtExpireTime !== undefined && object.firtExpireTime !== null)
      ? Long.fromValue(object.firtExpireTime)
      : Long.ZERO;
    message.lastRewardIds = object.lastRewardIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseFashionBenefit_TaskListEntry(): FashionBenefit_TaskListEntry {
  return { key: 0, value: undefined };
}

export const FashionBenefit_TaskListEntry: MessageFns<FashionBenefit_TaskListEntry> = {
  encode(message: FashionBenefit_TaskListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FashionBenefitTaskInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionBenefit_TaskListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionBenefit_TaskListEntry();
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

          message.value = FashionBenefitTaskInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): FashionBenefit_TaskListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FashionBenefitTaskInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FashionBenefit_TaskListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FashionBenefitTaskInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionBenefit_TaskListEntry>, I>>(base?: I): FashionBenefit_TaskListEntry {
    return FashionBenefit_TaskListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionBenefit_TaskListEntry>, I>>(object: I): FashionBenefit_TaskListEntry {
    const message = createBaseFashionBenefit_TaskListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FashionBenefitTaskInfo.fromPartial(object.value)
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
