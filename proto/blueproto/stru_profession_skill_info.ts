/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ProfessionSkillInfo {
  skillId: number;
  level: number;
  replaceSkillIds: number[];
  remodelLevel: number;
  curSkillSkin: number;
  activeSkillSkins: { [key: number]: boolean };
}

export interface ProfessionSkillInfo_ActiveSkillSkinsEntry {
  key: number;
  value: boolean;
}

function createBaseProfessionSkillInfo(): ProfessionSkillInfo {
  return { skillId: 0, level: 0, replaceSkillIds: [], remodelLevel: 0, curSkillSkin: 0, activeSkillSkins: {} };
}

export const ProfessionSkillInfo: MessageFns<ProfessionSkillInfo> = {
  encode(message: ProfessionSkillInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.skillId !== 0) {
      writer.uint32(8).int32(message.skillId);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    writer.uint32(26).fork();
    for (const v of message.replaceSkillIds) {
      writer.int32(v);
    }
    writer.join();
    if (message.remodelLevel !== 0) {
      writer.uint32(32).int32(message.remodelLevel);
    }
    if (message.curSkillSkin !== 0) {
      writer.uint32(40).int32(message.curSkillSkin);
    }
    Object.entries(message.activeSkillSkins).forEach(([key, value]) => {
      ProfessionSkillInfo_ActiveSkillSkinsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionSkillInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionSkillInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.skillId = reader.int32();
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
          if (tag === 24) {
            message.replaceSkillIds.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.replaceSkillIds.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.remodelLevel = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.curSkillSkin = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = ProfessionSkillInfo_ActiveSkillSkinsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.activeSkillSkins[entry6.key] = entry6.value;
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

  fromJSON(object: any): ProfessionSkillInfo {
    return {
      skillId: isSet(object.skillId) ? globalThis.Number(object.skillId) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      replaceSkillIds: globalThis.Array.isArray(object?.replaceSkillIds)
        ? object.replaceSkillIds.map((e: any) => globalThis.Number(e))
        : [],
      remodelLevel: isSet(object.remodelLevel) ? globalThis.Number(object.remodelLevel) : 0,
      curSkillSkin: isSet(object.curSkillSkin) ? globalThis.Number(object.curSkillSkin) : 0,
      activeSkillSkins: isObject(object.activeSkillSkins)
        ? Object.entries(object.activeSkillSkins).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProfessionSkillInfo): unknown {
    const obj: any = {};
    if (message.skillId !== 0) {
      obj.skillId = Math.round(message.skillId);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.replaceSkillIds?.length) {
      obj.replaceSkillIds = message.replaceSkillIds.map((e) => Math.round(e));
    }
    if (message.remodelLevel !== 0) {
      obj.remodelLevel = Math.round(message.remodelLevel);
    }
    if (message.curSkillSkin !== 0) {
      obj.curSkillSkin = Math.round(message.curSkillSkin);
    }
    if (message.activeSkillSkins) {
      const entries = Object.entries(message.activeSkillSkins);
      if (entries.length > 0) {
        obj.activeSkillSkins = {};
        entries.forEach(([k, v]) => {
          obj.activeSkillSkins[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionSkillInfo>, I>>(base?: I): ProfessionSkillInfo {
    return ProfessionSkillInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionSkillInfo>, I>>(object: I): ProfessionSkillInfo {
    const message = createBaseProfessionSkillInfo();
    message.skillId = object.skillId ?? 0;
    message.level = object.level ?? 0;
    message.replaceSkillIds = object.replaceSkillIds?.map((e) => e) || [];
    message.remodelLevel = object.remodelLevel ?? 0;
    message.curSkillSkin = object.curSkillSkin ?? 0;
    message.activeSkillSkins = Object.entries(object.activeSkillSkins ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseProfessionSkillInfo_ActiveSkillSkinsEntry(): ProfessionSkillInfo_ActiveSkillSkinsEntry {
  return { key: 0, value: false };
}

export const ProfessionSkillInfo_ActiveSkillSkinsEntry: MessageFns<ProfessionSkillInfo_ActiveSkillSkinsEntry> = {
  encode(message: ProfessionSkillInfo_ActiveSkillSkinsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionSkillInfo_ActiveSkillSkinsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionSkillInfo_ActiveSkillSkinsEntry();
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

  fromJSON(object: any): ProfessionSkillInfo_ActiveSkillSkinsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: ProfessionSkillInfo_ActiveSkillSkinsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionSkillInfo_ActiveSkillSkinsEntry>, I>>(
    base?: I,
  ): ProfessionSkillInfo_ActiveSkillSkinsEntry {
    return ProfessionSkillInfo_ActiveSkillSkinsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionSkillInfo_ActiveSkillSkinsEntry>, I>>(
    object: I,
  ): ProfessionSkillInfo_ActiveSkillSkinsEntry {
    const message = createBaseProfessionSkillInfo_ActiveSkillSkinsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
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
