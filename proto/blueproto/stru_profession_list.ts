/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ProfessionInfo } from "./stru_profession_info";
import { ProfessionSkillInfo } from "./stru_profession_skill_info";
import { ProfessionTalentInfo } from "./stru_profession_talent_info";

export const protobufPackage = "zproto";

export interface ProfessionList {
  curProfessionId: number;
  curAssistProfessions: number[];
  professionList: { [key: number]: ProfessionInfo };
  aoyiSkillInfoMap: { [key: number]: ProfessionSkillInfo };
  totalTalentPoints: number;
  totalTalentResetCount: number;
  talentList: { [key: number]: ProfessionTalentInfo };
}

export interface ProfessionList_ProfessionListEntry {
  key: number;
  value: ProfessionInfo | undefined;
}

export interface ProfessionList_AoyiSkillInfoMapEntry {
  key: number;
  value: ProfessionSkillInfo | undefined;
}

export interface ProfessionList_TalentListEntry {
  key: number;
  value: ProfessionTalentInfo | undefined;
}

function createBaseProfessionList(): ProfessionList {
  return {
    curProfessionId: 0,
    curAssistProfessions: [],
    professionList: {},
    aoyiSkillInfoMap: {},
    totalTalentPoints: 0,
    totalTalentResetCount: 0,
    talentList: {},
  };
}

export const ProfessionList: MessageFns<ProfessionList> = {
  encode(message: ProfessionList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.curProfessionId !== 0) {
      writer.uint32(8).int32(message.curProfessionId);
    }
    writer.uint32(26).fork();
    for (const v of message.curAssistProfessions) {
      writer.int32(v);
    }
    writer.join();
    Object.entries(message.professionList).forEach(([key, value]) => {
      ProfessionList_ProfessionListEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.aoyiSkillInfoMap).forEach(([key, value]) => {
      ProfessionList_AoyiSkillInfoMapEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
    });
    if (message.totalTalentPoints !== 0) {
      writer.uint32(64).uint32(message.totalTalentPoints);
    }
    if (message.totalTalentResetCount !== 0) {
      writer.uint32(72).uint32(message.totalTalentResetCount);
    }
    Object.entries(message.talentList).forEach(([key, value]) => {
      ProfessionList_TalentListEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.curProfessionId = reader.int32();
          continue;
        }
        case 3: {
          if (tag === 24) {
            message.curAssistProfessions.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.curAssistProfessions.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = ProfessionList_ProfessionListEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.professionList[entry4.key] = entry4.value;
          }
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          const entry7 = ProfessionList_AoyiSkillInfoMapEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.aoyiSkillInfoMap[entry7.key] = entry7.value;
          }
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.totalTalentPoints = reader.uint32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.totalTalentResetCount = reader.uint32();
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          const entry10 = ProfessionList_TalentListEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.talentList[entry10.key] = entry10.value;
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

  fromJSON(object: any): ProfessionList {
    return {
      curProfessionId: isSet(object.curProfessionId) ? globalThis.Number(object.curProfessionId) : 0,
      curAssistProfessions: globalThis.Array.isArray(object?.curAssistProfessions)
        ? object.curAssistProfessions.map((e: any) => globalThis.Number(e))
        : [],
      professionList: isObject(object.professionList)
        ? Object.entries(object.professionList).reduce<{ [key: number]: ProfessionInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ProfessionInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      aoyiSkillInfoMap: isObject(object.aoyiSkillInfoMap)
        ? Object.entries(object.aoyiSkillInfoMap).reduce<{ [key: number]: ProfessionSkillInfo }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = ProfessionSkillInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      totalTalentPoints: isSet(object.totalTalentPoints) ? globalThis.Number(object.totalTalentPoints) : 0,
      totalTalentResetCount: isSet(object.totalTalentResetCount) ? globalThis.Number(object.totalTalentResetCount) : 0,
      talentList: isObject(object.talentList)
        ? Object.entries(object.talentList).reduce<{ [key: number]: ProfessionTalentInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ProfessionTalentInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProfessionList): unknown {
    const obj: any = {};
    if (message.curProfessionId !== 0) {
      obj.curProfessionId = Math.round(message.curProfessionId);
    }
    if (message.curAssistProfessions?.length) {
      obj.curAssistProfessions = message.curAssistProfessions.map((e) => Math.round(e));
    }
    if (message.professionList) {
      const entries = Object.entries(message.professionList);
      if (entries.length > 0) {
        obj.professionList = {};
        entries.forEach(([k, v]) => {
          obj.professionList[k] = ProfessionInfo.toJSON(v);
        });
      }
    }
    if (message.aoyiSkillInfoMap) {
      const entries = Object.entries(message.aoyiSkillInfoMap);
      if (entries.length > 0) {
        obj.aoyiSkillInfoMap = {};
        entries.forEach(([k, v]) => {
          obj.aoyiSkillInfoMap[k] = ProfessionSkillInfo.toJSON(v);
        });
      }
    }
    if (message.totalTalentPoints !== 0) {
      obj.totalTalentPoints = Math.round(message.totalTalentPoints);
    }
    if (message.totalTalentResetCount !== 0) {
      obj.totalTalentResetCount = Math.round(message.totalTalentResetCount);
    }
    if (message.talentList) {
      const entries = Object.entries(message.talentList);
      if (entries.length > 0) {
        obj.talentList = {};
        entries.forEach(([k, v]) => {
          obj.talentList[k] = ProfessionTalentInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionList>, I>>(base?: I): ProfessionList {
    return ProfessionList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionList>, I>>(object: I): ProfessionList {
    const message = createBaseProfessionList();
    message.curProfessionId = object.curProfessionId ?? 0;
    message.curAssistProfessions = object.curAssistProfessions?.map((e) => e) || [];
    message.professionList = Object.entries(object.professionList ?? {}).reduce<{ [key: number]: ProfessionInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ProfessionInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.aoyiSkillInfoMap = Object.entries(object.aoyiSkillInfoMap ?? {}).reduce<
      { [key: number]: ProfessionSkillInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = ProfessionSkillInfo.fromPartial(value);
      }
      return acc;
    }, {});
    message.totalTalentPoints = object.totalTalentPoints ?? 0;
    message.totalTalentResetCount = object.totalTalentResetCount ?? 0;
    message.talentList = Object.entries(object.talentList ?? {}).reduce<{ [key: number]: ProfessionTalentInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ProfessionTalentInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseProfessionList_ProfessionListEntry(): ProfessionList_ProfessionListEntry {
  return { key: 0, value: undefined };
}

export const ProfessionList_ProfessionListEntry: MessageFns<ProfessionList_ProfessionListEntry> = {
  encode(message: ProfessionList_ProfessionListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ProfessionInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionList_ProfessionListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionList_ProfessionListEntry();
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

          message.value = ProfessionInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProfessionList_ProfessionListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ProfessionInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ProfessionList_ProfessionListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ProfessionInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionList_ProfessionListEntry>, I>>(
    base?: I,
  ): ProfessionList_ProfessionListEntry {
    return ProfessionList_ProfessionListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionList_ProfessionListEntry>, I>>(
    object: I,
  ): ProfessionList_ProfessionListEntry {
    const message = createBaseProfessionList_ProfessionListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ProfessionInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseProfessionList_AoyiSkillInfoMapEntry(): ProfessionList_AoyiSkillInfoMapEntry {
  return { key: 0, value: undefined };
}

export const ProfessionList_AoyiSkillInfoMapEntry: MessageFns<ProfessionList_AoyiSkillInfoMapEntry> = {
  encode(message: ProfessionList_AoyiSkillInfoMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ProfessionSkillInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionList_AoyiSkillInfoMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionList_AoyiSkillInfoMapEntry();
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

  fromJSON(object: any): ProfessionList_AoyiSkillInfoMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ProfessionSkillInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ProfessionList_AoyiSkillInfoMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ProfessionSkillInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionList_AoyiSkillInfoMapEntry>, I>>(
    base?: I,
  ): ProfessionList_AoyiSkillInfoMapEntry {
    return ProfessionList_AoyiSkillInfoMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionList_AoyiSkillInfoMapEntry>, I>>(
    object: I,
  ): ProfessionList_AoyiSkillInfoMapEntry {
    const message = createBaseProfessionList_AoyiSkillInfoMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ProfessionSkillInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseProfessionList_TalentListEntry(): ProfessionList_TalentListEntry {
  return { key: 0, value: undefined };
}

export const ProfessionList_TalentListEntry: MessageFns<ProfessionList_TalentListEntry> = {
  encode(message: ProfessionList_TalentListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ProfessionTalentInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionList_TalentListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionList_TalentListEntry();
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

          message.value = ProfessionTalentInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProfessionList_TalentListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ProfessionTalentInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ProfessionList_TalentListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ProfessionTalentInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionList_TalentListEntry>, I>>(base?: I): ProfessionList_TalentListEntry {
    return ProfessionList_TalentListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionList_TalentListEntry>, I>>(
    object: I,
  ): ProfessionList_TalentListEntry {
    const message = createBaseProfessionList_TalentListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ProfessionTalentInfo.fromPartial(object.value)
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
