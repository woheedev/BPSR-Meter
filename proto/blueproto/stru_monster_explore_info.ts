/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MonsterExploreInfo {
  isUnlock: boolean;
  targetNum: { [key: number]: number };
  awardFlag: number;
  isFlag: boolean;
}

export interface MonsterExploreInfo_TargetNumEntry {
  key: number;
  value: number;
}

function createBaseMonsterExploreInfo(): MonsterExploreInfo {
  return { isUnlock: false, targetNum: {}, awardFlag: 0, isFlag: false };
}

export const MonsterExploreInfo: MessageFns<MonsterExploreInfo> = {
  encode(message: MonsterExploreInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.isUnlock !== false) {
      writer.uint32(8).bool(message.isUnlock);
    }
    Object.entries(message.targetNum).forEach(([key, value]) => {
      MonsterExploreInfo_TargetNumEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.awardFlag !== 0) {
      writer.uint32(24).uint32(message.awardFlag);
    }
    if (message.isFlag !== false) {
      writer.uint32(32).bool(message.isFlag);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterExploreInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterExploreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.isUnlock = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = MonsterExploreInfo_TargetNumEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.targetNum[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.awardFlag = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.isFlag = reader.bool();
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

  fromJSON(object: any): MonsterExploreInfo {
    return {
      isUnlock: isSet(object.isUnlock) ? globalThis.Boolean(object.isUnlock) : false,
      targetNum: isObject(object.targetNum)
        ? Object.entries(object.targetNum).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      awardFlag: isSet(object.awardFlag) ? globalThis.Number(object.awardFlag) : 0,
      isFlag: isSet(object.isFlag) ? globalThis.Boolean(object.isFlag) : false,
    };
  },

  toJSON(message: MonsterExploreInfo): unknown {
    const obj: any = {};
    if (message.isUnlock !== false) {
      obj.isUnlock = message.isUnlock;
    }
    if (message.targetNum) {
      const entries = Object.entries(message.targetNum);
      if (entries.length > 0) {
        obj.targetNum = {};
        entries.forEach(([k, v]) => {
          obj.targetNum[k] = Math.round(v);
        });
      }
    }
    if (message.awardFlag !== 0) {
      obj.awardFlag = Math.round(message.awardFlag);
    }
    if (message.isFlag !== false) {
      obj.isFlag = message.isFlag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterExploreInfo>, I>>(base?: I): MonsterExploreInfo {
    return MonsterExploreInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterExploreInfo>, I>>(object: I): MonsterExploreInfo {
    const message = createBaseMonsterExploreInfo();
    message.isUnlock = object.isUnlock ?? false;
    message.targetNum = Object.entries(object.targetNum ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.awardFlag = object.awardFlag ?? 0;
    message.isFlag = object.isFlag ?? false;
    return message;
  },
};

function createBaseMonsterExploreInfo_TargetNumEntry(): MonsterExploreInfo_TargetNumEntry {
  return { key: 0, value: 0 };
}

export const MonsterExploreInfo_TargetNumEntry: MessageFns<MonsterExploreInfo_TargetNumEntry> = {
  encode(message: MonsterExploreInfo_TargetNumEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterExploreInfo_TargetNumEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterExploreInfo_TargetNumEntry();
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

  fromJSON(object: any): MonsterExploreInfo_TargetNumEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: MonsterExploreInfo_TargetNumEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterExploreInfo_TargetNumEntry>, I>>(
    base?: I,
  ): MonsterExploreInfo_TargetNumEntry {
    return MonsterExploreInfo_TargetNumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterExploreInfo_TargetNumEntry>, I>>(
    object: I,
  ): MonsterExploreInfo_TargetNumEntry {
    const message = createBaseMonsterExploreInfo_TargetNumEntry();
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
