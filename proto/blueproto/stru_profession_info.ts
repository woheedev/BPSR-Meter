/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ProfessionSkillInfo } from "./stru_profession_skill_info";

export const protobufPackage = "zproto";

export interface ProfessionInfo {
  professionId: number;
  level: number;
  experience: Long;
  skillInfoMap: { [key: number]: ProfessionSkillInfo };
  activeSkillIds: number[];
  slotSkillInfoMap: { [key: number]: number };
  useSkinId: number;
}

export interface ProfessionInfo_SkillInfoMapEntry {
  key: number;
  value: ProfessionSkillInfo | undefined;
}

export interface ProfessionInfo_SlotSkillInfoMapEntry {
  key: number;
  value: number;
}

function createBaseProfessionInfo(): ProfessionInfo {
  return {
    professionId: 0,
    level: 0,
    experience: Long.ZERO,
    skillInfoMap: {},
    activeSkillIds: [],
    slotSkillInfoMap: {},
    useSkinId: 0,
  };
}

export const ProfessionInfo: MessageFns<ProfessionInfo> = {
  encode(message: ProfessionInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.professionId !== 0) {
      writer.uint32(8).int32(message.professionId);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (!message.experience.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.experience.toString());
    }
    Object.entries(message.skillInfoMap).forEach(([key, value]) => {
      ProfessionInfo_SkillInfoMapEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    writer.uint32(50).fork();
    for (const v of message.activeSkillIds) {
      writer.int32(v);
    }
    writer.join();
    Object.entries(message.slotSkillInfoMap).forEach(([key, value]) => {
      ProfessionInfo_SlotSkillInfoMapEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
    });
    if (message.useSkinId !== 0) {
      writer.uint32(64).int32(message.useSkinId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.professionId = reader.int32();
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

          message.experience = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = ProfessionInfo_SkillInfoMapEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.skillInfoMap[entry4.key] = entry4.value;
          }
          continue;
        }
        case 6: {
          if (tag === 48) {
            message.activeSkillIds.push(reader.int32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeSkillIds.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          const entry7 = ProfessionInfo_SlotSkillInfoMapEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.slotSkillInfoMap[entry7.key] = entry7.value;
          }
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.useSkinId = reader.int32();
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

  fromJSON(object: any): ProfessionInfo {
    return {
      professionId: isSet(object.professionId) ? globalThis.Number(object.professionId) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      experience: isSet(object.experience) ? Long.fromValue(object.experience) : Long.ZERO,
      skillInfoMap: isObject(object.skillInfoMap)
        ? Object.entries(object.skillInfoMap).reduce<{ [key: number]: ProfessionSkillInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ProfessionSkillInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      activeSkillIds: globalThis.Array.isArray(object?.activeSkillIds)
        ? object.activeSkillIds.map((e: any) => globalThis.Number(e))
        : [],
      slotSkillInfoMap: isObject(object.slotSkillInfoMap)
        ? Object.entries(object.slotSkillInfoMap).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      useSkinId: isSet(object.useSkinId) ? globalThis.Number(object.useSkinId) : 0,
    };
  },

  toJSON(message: ProfessionInfo): unknown {
    const obj: any = {};
    if (message.professionId !== 0) {
      obj.professionId = Math.round(message.professionId);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (!message.experience.equals(Long.ZERO)) {
      obj.experience = (message.experience || Long.ZERO).toString();
    }
    if (message.skillInfoMap) {
      const entries = Object.entries(message.skillInfoMap);
      if (entries.length > 0) {
        obj.skillInfoMap = {};
        entries.forEach(([k, v]) => {
          obj.skillInfoMap[k] = ProfessionSkillInfo.toJSON(v);
        });
      }
    }
    if (message.activeSkillIds?.length) {
      obj.activeSkillIds = message.activeSkillIds.map((e) => Math.round(e));
    }
    if (message.slotSkillInfoMap) {
      const entries = Object.entries(message.slotSkillInfoMap);
      if (entries.length > 0) {
        obj.slotSkillInfoMap = {};
        entries.forEach(([k, v]) => {
          obj.slotSkillInfoMap[k] = Math.round(v);
        });
      }
    }
    if (message.useSkinId !== 0) {
      obj.useSkinId = Math.round(message.useSkinId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionInfo>, I>>(base?: I): ProfessionInfo {
    return ProfessionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionInfo>, I>>(object: I): ProfessionInfo {
    const message = createBaseProfessionInfo();
    message.professionId = object.professionId ?? 0;
    message.level = object.level ?? 0;
    message.experience = (object.experience !== undefined && object.experience !== null)
      ? Long.fromValue(object.experience)
      : Long.ZERO;
    message.skillInfoMap = Object.entries(object.skillInfoMap ?? {}).reduce<{ [key: number]: ProfessionSkillInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ProfessionSkillInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.activeSkillIds = object.activeSkillIds?.map((e) => e) || [];
    message.slotSkillInfoMap = Object.entries(object.slotSkillInfoMap ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.useSkinId = object.useSkinId ?? 0;
    return message;
  },
};

function createBaseProfessionInfo_SkillInfoMapEntry(): ProfessionInfo_SkillInfoMapEntry {
  return { key: 0, value: undefined };
}

export const ProfessionInfo_SkillInfoMapEntry: MessageFns<ProfessionInfo_SkillInfoMapEntry> = {
  encode(message: ProfessionInfo_SkillInfoMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ProfessionSkillInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionInfo_SkillInfoMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionInfo_SkillInfoMapEntry();
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

          message.value = ProfessionSkillInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProfessionInfo_SkillInfoMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ProfessionSkillInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ProfessionInfo_SkillInfoMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ProfessionSkillInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionInfo_SkillInfoMapEntry>, I>>(
    base?: I,
  ): ProfessionInfo_SkillInfoMapEntry {
    return ProfessionInfo_SkillInfoMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionInfo_SkillInfoMapEntry>, I>>(
    object: I,
  ): ProfessionInfo_SkillInfoMapEntry {
    const message = createBaseProfessionInfo_SkillInfoMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ProfessionSkillInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseProfessionInfo_SlotSkillInfoMapEntry(): ProfessionInfo_SlotSkillInfoMapEntry {
  return { key: 0, value: 0 };
}

export const ProfessionInfo_SlotSkillInfoMapEntry: MessageFns<ProfessionInfo_SlotSkillInfoMapEntry> = {
  encode(message: ProfessionInfo_SlotSkillInfoMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionInfo_SlotSkillInfoMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionInfo_SlotSkillInfoMapEntry();
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

  fromJSON(object: any): ProfessionInfo_SlotSkillInfoMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: ProfessionInfo_SlotSkillInfoMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionInfo_SlotSkillInfoMapEntry>, I>>(
    base?: I,
  ): ProfessionInfo_SlotSkillInfoMapEntry {
    return ProfessionInfo_SlotSkillInfoMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionInfo_SlotSkillInfoMapEntry>, I>>(
    object: I,
  ): ProfessionInfo_SlotSkillInfoMapEntry {
    const message = createBaseProfessionInfo_SlotSkillInfoMapEntry();
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
