/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MonsterHuntTarget } from "./stru_monster_hunt_target";

export const protobufPackage = "zproto";

export interface MonsterHuntInfo {
  monsterHuntList: { [key: number]: MonsterHuntTarget };
  curLevel: number;
  curExp: number;
  levelAwardFlag: { [key: number]: number };
  monsterHuntRefrshTime: { [key: number]: Long };
}

export interface MonsterHuntInfo_MonsterHuntListEntry {
  key: number;
  value: MonsterHuntTarget | undefined;
}

export interface MonsterHuntInfo_LevelAwardFlagEntry {
  key: number;
  value: number;
}

export interface MonsterHuntInfo_MonsterHuntRefrshTimeEntry {
  key: number;
  value: Long;
}

function createBaseMonsterHuntInfo(): MonsterHuntInfo {
  return { monsterHuntList: {}, curLevel: 0, curExp: 0, levelAwardFlag: {}, monsterHuntRefrshTime: {} };
}

export const MonsterHuntInfo: MessageFns<MonsterHuntInfo> = {
  encode(message: MonsterHuntInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.monsterHuntList).forEach(([key, value]) => {
      MonsterHuntInfo_MonsterHuntListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.curLevel !== 0) {
      writer.uint32(16).int32(message.curLevel);
    }
    if (message.curExp !== 0) {
      writer.uint32(24).int32(message.curExp);
    }
    Object.entries(message.levelAwardFlag).forEach(([key, value]) => {
      MonsterHuntInfo_LevelAwardFlagEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.monsterHuntRefrshTime).forEach(([key, value]) => {
      MonsterHuntInfo_MonsterHuntRefrshTimeEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterHuntInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterHuntInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MonsterHuntInfo_MonsterHuntListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.monsterHuntList[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.curLevel = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.curExp = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = MonsterHuntInfo_LevelAwardFlagEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.levelAwardFlag[entry4.key] = entry4.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = MonsterHuntInfo_MonsterHuntRefrshTimeEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.monsterHuntRefrshTime[entry6.key] = entry6.value;
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

  fromJSON(object: any): MonsterHuntInfo {
    return {
      monsterHuntList: isObject(object.monsterHuntList)
        ? Object.entries(object.monsterHuntList).reduce<{ [key: number]: MonsterHuntTarget }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MonsterHuntTarget.fromJSON(value);
          return acc;
        }, {})
        : {},
      curLevel: isSet(object.curLevel) ? globalThis.Number(object.curLevel) : 0,
      curExp: isSet(object.curExp) ? globalThis.Number(object.curExp) : 0,
      levelAwardFlag: isObject(object.levelAwardFlag)
        ? Object.entries(object.levelAwardFlag).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      monsterHuntRefrshTime: isObject(object.monsterHuntRefrshTime)
        ? Object.entries(object.monsterHuntRefrshTime).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MonsterHuntInfo): unknown {
    const obj: any = {};
    if (message.monsterHuntList) {
      const entries = Object.entries(message.monsterHuntList);
      if (entries.length > 0) {
        obj.monsterHuntList = {};
        entries.forEach(([k, v]) => {
          obj.monsterHuntList[k] = MonsterHuntTarget.toJSON(v);
        });
      }
    }
    if (message.curLevel !== 0) {
      obj.curLevel = Math.round(message.curLevel);
    }
    if (message.curExp !== 0) {
      obj.curExp = Math.round(message.curExp);
    }
    if (message.levelAwardFlag) {
      const entries = Object.entries(message.levelAwardFlag);
      if (entries.length > 0) {
        obj.levelAwardFlag = {};
        entries.forEach(([k, v]) => {
          obj.levelAwardFlag[k] = Math.round(v);
        });
      }
    }
    if (message.monsterHuntRefrshTime) {
      const entries = Object.entries(message.monsterHuntRefrshTime);
      if (entries.length > 0) {
        obj.monsterHuntRefrshTime = {};
        entries.forEach(([k, v]) => {
          obj.monsterHuntRefrshTime[k] = v.toString();
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterHuntInfo>, I>>(base?: I): MonsterHuntInfo {
    return MonsterHuntInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterHuntInfo>, I>>(object: I): MonsterHuntInfo {
    const message = createBaseMonsterHuntInfo();
    message.monsterHuntList = Object.entries(object.monsterHuntList ?? {}).reduce<{ [key: number]: MonsterHuntTarget }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MonsterHuntTarget.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.curLevel = object.curLevel ?? 0;
    message.curExp = object.curExp ?? 0;
    message.levelAwardFlag = Object.entries(object.levelAwardFlag ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.monsterHuntRefrshTime = Object.entries(object.monsterHuntRefrshTime ?? {}).reduce<{ [key: number]: Long }>(
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

function createBaseMonsterHuntInfo_MonsterHuntListEntry(): MonsterHuntInfo_MonsterHuntListEntry {
  return { key: 0, value: undefined };
}

export const MonsterHuntInfo_MonsterHuntListEntry: MessageFns<MonsterHuntInfo_MonsterHuntListEntry> = {
  encode(message: MonsterHuntInfo_MonsterHuntListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      MonsterHuntTarget.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterHuntInfo_MonsterHuntListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterHuntInfo_MonsterHuntListEntry();
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

          message.value = MonsterHuntTarget.decode(reader, reader.uint32());
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

  fromJSON(object: any): MonsterHuntInfo_MonsterHuntListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MonsterHuntTarget.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MonsterHuntInfo_MonsterHuntListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MonsterHuntTarget.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterHuntInfo_MonsterHuntListEntry>, I>>(
    base?: I,
  ): MonsterHuntInfo_MonsterHuntListEntry {
    return MonsterHuntInfo_MonsterHuntListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterHuntInfo_MonsterHuntListEntry>, I>>(
    object: I,
  ): MonsterHuntInfo_MonsterHuntListEntry {
    const message = createBaseMonsterHuntInfo_MonsterHuntListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MonsterHuntTarget.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMonsterHuntInfo_LevelAwardFlagEntry(): MonsterHuntInfo_LevelAwardFlagEntry {
  return { key: 0, value: 0 };
}

export const MonsterHuntInfo_LevelAwardFlagEntry: MessageFns<MonsterHuntInfo_LevelAwardFlagEntry> = {
  encode(message: MonsterHuntInfo_LevelAwardFlagEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterHuntInfo_LevelAwardFlagEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterHuntInfo_LevelAwardFlagEntry();
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

  fromJSON(object: any): MonsterHuntInfo_LevelAwardFlagEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: MonsterHuntInfo_LevelAwardFlagEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterHuntInfo_LevelAwardFlagEntry>, I>>(
    base?: I,
  ): MonsterHuntInfo_LevelAwardFlagEntry {
    return MonsterHuntInfo_LevelAwardFlagEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterHuntInfo_LevelAwardFlagEntry>, I>>(
    object: I,
  ): MonsterHuntInfo_LevelAwardFlagEntry {
    const message = createBaseMonsterHuntInfo_LevelAwardFlagEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseMonsterHuntInfo_MonsterHuntRefrshTimeEntry(): MonsterHuntInfo_MonsterHuntRefrshTimeEntry {
  return { key: 0, value: Long.ZERO };
}

export const MonsterHuntInfo_MonsterHuntRefrshTimeEntry: MessageFns<MonsterHuntInfo_MonsterHuntRefrshTimeEntry> = {
  encode(message: MonsterHuntInfo_MonsterHuntRefrshTimeEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterHuntInfo_MonsterHuntRefrshTimeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterHuntInfo_MonsterHuntRefrshTimeEntry();
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

  fromJSON(object: any): MonsterHuntInfo_MonsterHuntRefrshTimeEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: MonsterHuntInfo_MonsterHuntRefrshTimeEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterHuntInfo_MonsterHuntRefrshTimeEntry>, I>>(
    base?: I,
  ): MonsterHuntInfo_MonsterHuntRefrshTimeEntry {
    return MonsterHuntInfo_MonsterHuntRefrshTimeEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterHuntInfo_MonsterHuntRefrshTimeEntry>, I>>(
    object: I,
  ): MonsterHuntInfo_MonsterHuntRefrshTimeEntry {
    const message = createBaseMonsterHuntInfo_MonsterHuntRefrshTimeEntry();
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
