/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CommonAwardInfo } from "./stru_common_award_info";

export const protobufPackage = "zproto";

export interface PersonalWorldBossInfo {
  score: number;
  scoreAwardInfo: { [key: number]: CommonAwardInfo };
  bossAwardInfo: { [key: number]: CommonAwardInfo };
  uuid: number;
}

export interface PersonalWorldBossInfo_ScoreAwardInfoEntry {
  key: number;
  value: CommonAwardInfo | undefined;
}

export interface PersonalWorldBossInfo_BossAwardInfoEntry {
  key: number;
  value: CommonAwardInfo | undefined;
}

function createBasePersonalWorldBossInfo(): PersonalWorldBossInfo {
  return { score: 0, scoreAwardInfo: {}, bossAwardInfo: {}, uuid: 0 };
}

export const PersonalWorldBossInfo: MessageFns<PersonalWorldBossInfo> = {
  encode(message: PersonalWorldBossInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.score !== 0) {
      writer.uint32(8).int32(message.score);
    }
    Object.entries(message.scoreAwardInfo).forEach(([key, value]) => {
      PersonalWorldBossInfo_ScoreAwardInfoEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.bossAwardInfo).forEach(([key, value]) => {
      PersonalWorldBossInfo_BossAwardInfoEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    if (message.uuid !== 0) {
      writer.uint32(32).int32(message.uuid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalWorldBossInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalWorldBossInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.score = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = PersonalWorldBossInfo_ScoreAwardInfoEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.scoreAwardInfo[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = PersonalWorldBossInfo_BossAwardInfoEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.bossAwardInfo[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.uuid = reader.int32();
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

  fromJSON(object: any): PersonalWorldBossInfo {
    return {
      score: isSet(object.score) ? globalThis.Number(object.score) : 0,
      scoreAwardInfo: isObject(object.scoreAwardInfo)
        ? Object.entries(object.scoreAwardInfo).reduce<{ [key: number]: CommonAwardInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CommonAwardInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      bossAwardInfo: isObject(object.bossAwardInfo)
        ? Object.entries(object.bossAwardInfo).reduce<{ [key: number]: CommonAwardInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CommonAwardInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      uuid: isSet(object.uuid) ? globalThis.Number(object.uuid) : 0,
    };
  },

  toJSON(message: PersonalWorldBossInfo): unknown {
    const obj: any = {};
    if (message.score !== 0) {
      obj.score = Math.round(message.score);
    }
    if (message.scoreAwardInfo) {
      const entries = Object.entries(message.scoreAwardInfo);
      if (entries.length > 0) {
        obj.scoreAwardInfo = {};
        entries.forEach(([k, v]) => {
          obj.scoreAwardInfo[k] = CommonAwardInfo.toJSON(v);
        });
      }
    }
    if (message.bossAwardInfo) {
      const entries = Object.entries(message.bossAwardInfo);
      if (entries.length > 0) {
        obj.bossAwardInfo = {};
        entries.forEach(([k, v]) => {
          obj.bossAwardInfo[k] = CommonAwardInfo.toJSON(v);
        });
      }
    }
    if (message.uuid !== 0) {
      obj.uuid = Math.round(message.uuid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalWorldBossInfo>, I>>(base?: I): PersonalWorldBossInfo {
    return PersonalWorldBossInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalWorldBossInfo>, I>>(object: I): PersonalWorldBossInfo {
    const message = createBasePersonalWorldBossInfo();
    message.score = object.score ?? 0;
    message.scoreAwardInfo = Object.entries(object.scoreAwardInfo ?? {}).reduce<{ [key: number]: CommonAwardInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = CommonAwardInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.bossAwardInfo = Object.entries(object.bossAwardInfo ?? {}).reduce<{ [key: number]: CommonAwardInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = CommonAwardInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.uuid = object.uuid ?? 0;
    return message;
  },
};

function createBasePersonalWorldBossInfo_ScoreAwardInfoEntry(): PersonalWorldBossInfo_ScoreAwardInfoEntry {
  return { key: 0, value: undefined };
}

export const PersonalWorldBossInfo_ScoreAwardInfoEntry: MessageFns<PersonalWorldBossInfo_ScoreAwardInfoEntry> = {
  encode(message: PersonalWorldBossInfo_ScoreAwardInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CommonAwardInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalWorldBossInfo_ScoreAwardInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalWorldBossInfo_ScoreAwardInfoEntry();
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

          message.value = CommonAwardInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PersonalWorldBossInfo_ScoreAwardInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CommonAwardInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PersonalWorldBossInfo_ScoreAwardInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CommonAwardInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalWorldBossInfo_ScoreAwardInfoEntry>, I>>(
    base?: I,
  ): PersonalWorldBossInfo_ScoreAwardInfoEntry {
    return PersonalWorldBossInfo_ScoreAwardInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalWorldBossInfo_ScoreAwardInfoEntry>, I>>(
    object: I,
  ): PersonalWorldBossInfo_ScoreAwardInfoEntry {
    const message = createBasePersonalWorldBossInfo_ScoreAwardInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CommonAwardInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBasePersonalWorldBossInfo_BossAwardInfoEntry(): PersonalWorldBossInfo_BossAwardInfoEntry {
  return { key: 0, value: undefined };
}

export const PersonalWorldBossInfo_BossAwardInfoEntry: MessageFns<PersonalWorldBossInfo_BossAwardInfoEntry> = {
  encode(message: PersonalWorldBossInfo_BossAwardInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CommonAwardInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalWorldBossInfo_BossAwardInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalWorldBossInfo_BossAwardInfoEntry();
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

          message.value = CommonAwardInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PersonalWorldBossInfo_BossAwardInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CommonAwardInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PersonalWorldBossInfo_BossAwardInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CommonAwardInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalWorldBossInfo_BossAwardInfoEntry>, I>>(
    base?: I,
  ): PersonalWorldBossInfo_BossAwardInfoEntry {
    return PersonalWorldBossInfo_BossAwardInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalWorldBossInfo_BossAwardInfoEntry>, I>>(
    object: I,
  ): PersonalWorldBossInfo_BossAwardInfoEntry {
    const message = createBasePersonalWorldBossInfo_BossAwardInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CommonAwardInfo.fromPartial(object.value)
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
