/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LevelProficiency } from "./stru_level_proficiency";

export const protobufPackage = "zproto";

export interface RoleLevel {
  level: number;
  curLevelExp: Long;
  receivedLevelList: { [key: number]: boolean };
  proficiencyInfo: LevelProficiency | undefined;
  activeExpMap: { [key: number]: Long };
  lastSeasonDay: number;
  blessExpPool: Long;
  grantBlessExp: Long;
  accumulateBlessExp: Long;
  accumulateExp: Long;
  prevSeasonMaxLv: number;
}

export interface RoleLevel_ReceivedLevelListEntry {
  key: number;
  value: boolean;
}

export interface RoleLevel_ActiveExpMapEntry {
  key: number;
  value: Long;
}

function createBaseRoleLevel(): RoleLevel {
  return {
    level: 0,
    curLevelExp: Long.ZERO,
    receivedLevelList: {},
    proficiencyInfo: undefined,
    activeExpMap: {},
    lastSeasonDay: 0,
    blessExpPool: Long.ZERO,
    grantBlessExp: Long.ZERO,
    accumulateBlessExp: Long.ZERO,
    accumulateExp: Long.ZERO,
    prevSeasonMaxLv: 0,
  };
}

export const RoleLevel: MessageFns<RoleLevel> = {
  encode(message: RoleLevel, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    if (!message.curLevelExp.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.curLevelExp.toString());
    }
    Object.entries(message.receivedLevelList).forEach(([key, value]) => {
      RoleLevel_ReceivedLevelListEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    if (message.proficiencyInfo !== undefined) {
      LevelProficiency.encode(message.proficiencyInfo, writer.uint32(34).fork()).join();
    }
    Object.entries(message.activeExpMap).forEach(([key, value]) => {
      RoleLevel_ActiveExpMapEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (message.lastSeasonDay !== 0) {
      writer.uint32(48).int32(message.lastSeasonDay);
    }
    if (!message.blessExpPool.equals(Long.ZERO)) {
      writer.uint32(56).int64(message.blessExpPool.toString());
    }
    if (!message.grantBlessExp.equals(Long.ZERO)) {
      writer.uint32(64).int64(message.grantBlessExp.toString());
    }
    if (!message.accumulateBlessExp.equals(Long.ZERO)) {
      writer.uint32(72).int64(message.accumulateBlessExp.toString());
    }
    if (!message.accumulateExp.equals(Long.ZERO)) {
      writer.uint32(80).int64(message.accumulateExp.toString());
    }
    if (message.prevSeasonMaxLv !== 0) {
      writer.uint32(88).int32(message.prevSeasonMaxLv);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RoleLevel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.level = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.curLevelExp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = RoleLevel_ReceivedLevelListEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.receivedLevelList[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.proficiencyInfo = LevelProficiency.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = RoleLevel_ActiveExpMapEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.activeExpMap[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.lastSeasonDay = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.blessExpPool = Long.fromString(reader.int64().toString());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.grantBlessExp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.accumulateBlessExp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.accumulateExp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.prevSeasonMaxLv = reader.int32();
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

  fromJSON(object: any): RoleLevel {
    return {
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      curLevelExp: isSet(object.curLevelExp) ? Long.fromValue(object.curLevelExp) : Long.ZERO,
      receivedLevelList: isObject(object.receivedLevelList)
        ? Object.entries(object.receivedLevelList).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      proficiencyInfo: isSet(object.proficiencyInfo) ? LevelProficiency.fromJSON(object.proficiencyInfo) : undefined,
      activeExpMap: isObject(object.activeExpMap)
        ? Object.entries(object.activeExpMap).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
      lastSeasonDay: isSet(object.lastSeasonDay) ? globalThis.Number(object.lastSeasonDay) : 0,
      blessExpPool: isSet(object.blessExpPool) ? Long.fromValue(object.blessExpPool) : Long.ZERO,
      grantBlessExp: isSet(object.grantBlessExp) ? Long.fromValue(object.grantBlessExp) : Long.ZERO,
      accumulateBlessExp: isSet(object.accumulateBlessExp) ? Long.fromValue(object.accumulateBlessExp) : Long.ZERO,
      accumulateExp: isSet(object.accumulateExp) ? Long.fromValue(object.accumulateExp) : Long.ZERO,
      prevSeasonMaxLv: isSet(object.prevSeasonMaxLv) ? globalThis.Number(object.prevSeasonMaxLv) : 0,
    };
  },

  toJSON(message: RoleLevel): unknown {
    const obj: any = {};
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (!message.curLevelExp.equals(Long.ZERO)) {
      obj.curLevelExp = (message.curLevelExp || Long.ZERO).toString();
    }
    if (message.receivedLevelList) {
      const entries = Object.entries(message.receivedLevelList);
      if (entries.length > 0) {
        obj.receivedLevelList = {};
        entries.forEach(([k, v]) => {
          obj.receivedLevelList[k] = v;
        });
      }
    }
    if (message.proficiencyInfo !== undefined) {
      obj.proficiencyInfo = LevelProficiency.toJSON(message.proficiencyInfo);
    }
    if (message.activeExpMap) {
      const entries = Object.entries(message.activeExpMap);
      if (entries.length > 0) {
        obj.activeExpMap = {};
        entries.forEach(([k, v]) => {
          obj.activeExpMap[k] = v.toString();
        });
      }
    }
    if (message.lastSeasonDay !== 0) {
      obj.lastSeasonDay = Math.round(message.lastSeasonDay);
    }
    if (!message.blessExpPool.equals(Long.ZERO)) {
      obj.blessExpPool = (message.blessExpPool || Long.ZERO).toString();
    }
    if (!message.grantBlessExp.equals(Long.ZERO)) {
      obj.grantBlessExp = (message.grantBlessExp || Long.ZERO).toString();
    }
    if (!message.accumulateBlessExp.equals(Long.ZERO)) {
      obj.accumulateBlessExp = (message.accumulateBlessExp || Long.ZERO).toString();
    }
    if (!message.accumulateExp.equals(Long.ZERO)) {
      obj.accumulateExp = (message.accumulateExp || Long.ZERO).toString();
    }
    if (message.prevSeasonMaxLv !== 0) {
      obj.prevSeasonMaxLv = Math.round(message.prevSeasonMaxLv);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleLevel>, I>>(base?: I): RoleLevel {
    return RoleLevel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleLevel>, I>>(object: I): RoleLevel {
    const message = createBaseRoleLevel();
    message.level = object.level ?? 0;
    message.curLevelExp = (object.curLevelExp !== undefined && object.curLevelExp !== null)
      ? Long.fromValue(object.curLevelExp)
      : Long.ZERO;
    message.receivedLevelList = Object.entries(object.receivedLevelList ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.proficiencyInfo = (object.proficiencyInfo !== undefined && object.proficiencyInfo !== null)
      ? LevelProficiency.fromPartial(object.proficiencyInfo)
      : undefined;
    message.activeExpMap = Object.entries(object.activeExpMap ?? {}).reduce<{ [key: number]: Long }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = Long.fromValue(value);
        }
        return acc;
      },
      {},
    );
    message.lastSeasonDay = object.lastSeasonDay ?? 0;
    message.blessExpPool = (object.blessExpPool !== undefined && object.blessExpPool !== null)
      ? Long.fromValue(object.blessExpPool)
      : Long.ZERO;
    message.grantBlessExp = (object.grantBlessExp !== undefined && object.grantBlessExp !== null)
      ? Long.fromValue(object.grantBlessExp)
      : Long.ZERO;
    message.accumulateBlessExp = (object.accumulateBlessExp !== undefined && object.accumulateBlessExp !== null)
      ? Long.fromValue(object.accumulateBlessExp)
      : Long.ZERO;
    message.accumulateExp = (object.accumulateExp !== undefined && object.accumulateExp !== null)
      ? Long.fromValue(object.accumulateExp)
      : Long.ZERO;
    message.prevSeasonMaxLv = object.prevSeasonMaxLv ?? 0;
    return message;
  },
};

function createBaseRoleLevel_ReceivedLevelListEntry(): RoleLevel_ReceivedLevelListEntry {
  return { key: 0, value: false };
}

export const RoleLevel_ReceivedLevelListEntry: MessageFns<RoleLevel_ReceivedLevelListEntry> = {
  encode(message: RoleLevel_ReceivedLevelListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RoleLevel_ReceivedLevelListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleLevel_ReceivedLevelListEntry();
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

  fromJSON(object: any): RoleLevel_ReceivedLevelListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: RoleLevel_ReceivedLevelListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleLevel_ReceivedLevelListEntry>, I>>(
    base?: I,
  ): RoleLevel_ReceivedLevelListEntry {
    return RoleLevel_ReceivedLevelListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleLevel_ReceivedLevelListEntry>, I>>(
    object: I,
  ): RoleLevel_ReceivedLevelListEntry {
    const message = createBaseRoleLevel_ReceivedLevelListEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseRoleLevel_ActiveExpMapEntry(): RoleLevel_ActiveExpMapEntry {
  return { key: 0, value: Long.ZERO };
}

export const RoleLevel_ActiveExpMapEntry: MessageFns<RoleLevel_ActiveExpMapEntry> = {
  encode(message: RoleLevel_ActiveExpMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RoleLevel_ActiveExpMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleLevel_ActiveExpMapEntry();
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

  fromJSON(object: any): RoleLevel_ActiveExpMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: RoleLevel_ActiveExpMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleLevel_ActiveExpMapEntry>, I>>(base?: I): RoleLevel_ActiveExpMapEntry {
    return RoleLevel_ActiveExpMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleLevel_ActiveExpMapEntry>, I>>(object: I): RoleLevel_ActiveExpMapEntry {
    const message = createBaseRoleLevel_ActiveExpMapEntry();
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
