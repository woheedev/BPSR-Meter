/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ETeamMemberType, eTeamMemberTypeFromJSON, eTeamMemberTypeToJSON } from "./enum_e_team_member_type";
import { TeamMemData } from "./stru_team_mem_data";

export const protobufPackage = "zproto";

export interface CharTeam {
  teamId: Long;
  leaderId: Long;
  teamTargetId: number;
  teamNum: number;
  charIds: Long[];
  isMatching: boolean;
  charTeamVersion: number;
  teamMemberData: Map<Long, TeamMemData>;
  teamMemberType: ETeamMemberType;
}

export interface CharTeam_TeamMemberDataEntry {
  key: Long;
  value: TeamMemData | undefined;
}

function createBaseCharTeam(): CharTeam {
  return {
    teamId: Long.ZERO,
    leaderId: Long.ZERO,
    teamTargetId: 0,
    teamNum: 0,
    charIds: [],
    isMatching: false,
    charTeamVersion: 0,
    teamMemberData: new Map(),
    teamMemberType: 0,
  };
}

export const CharTeam: MessageFns<CharTeam> = {
  encode(message: CharTeam, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.teamId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.teamId.toString());
    }
    if (!message.leaderId.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.leaderId.toString());
    }
    if (message.teamTargetId !== 0) {
      writer.uint32(24).uint32(message.teamTargetId);
    }
    if (message.teamNum !== 0) {
      writer.uint32(32).uint32(message.teamNum);
    }
    writer.uint32(42).fork();
    for (const v of message.charIds) {
      writer.int64(v.toString());
    }
    writer.join();
    if (message.isMatching !== false) {
      writer.uint32(48).bool(message.isMatching);
    }
    if (message.charTeamVersion !== 0) {
      writer.uint32(56).int32(message.charTeamVersion);
    }
    message.teamMemberData.forEach((value, key) => {
      CharTeam_TeamMemberDataEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).join();
    });
    if (message.teamMemberType !== 0) {
      writer.uint32(72).int32(message.teamMemberType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CharTeam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharTeam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.teamId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.leaderId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.teamTargetId = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.teamNum = reader.uint32();
          continue;
        }
        case 5: {
          if (tag === 40) {
            message.charIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.charIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.isMatching = reader.bool();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.charTeamVersion = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          const entry8 = CharTeam_TeamMemberDataEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.teamMemberData.set(entry8.key, entry8.value);
          }
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.teamMemberType = reader.int32() as any;
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

  fromJSON(object: any): CharTeam {
    return {
      teamId: isSet(object.teamId) ? Long.fromValue(object.teamId) : Long.ZERO,
      leaderId: isSet(object.leaderId) ? Long.fromValue(object.leaderId) : Long.ZERO,
      teamTargetId: isSet(object.teamTargetId) ? globalThis.Number(object.teamTargetId) : 0,
      teamNum: isSet(object.teamNum) ? globalThis.Number(object.teamNum) : 0,
      charIds: globalThis.Array.isArray(object?.charIds) ? object.charIds.map((e: any) => Long.fromValue(e)) : [],
      isMatching: isSet(object.isMatching) ? globalThis.Boolean(object.isMatching) : false,
      charTeamVersion: isSet(object.charTeamVersion) ? globalThis.Number(object.charTeamVersion) : 0,
      teamMemberData: isObject(object.teamMemberData)
        ? Object.entries(object.teamMemberData).reduce<Map<Long, TeamMemData>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), TeamMemData.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      teamMemberType: isSet(object.teamMemberType) ? eTeamMemberTypeFromJSON(object.teamMemberType) : 0,
    };
  },

  toJSON(message: CharTeam): unknown {
    const obj: any = {};
    if (!message.teamId.equals(Long.ZERO)) {
      obj.teamId = (message.teamId || Long.ZERO).toString();
    }
    if (!message.leaderId.equals(Long.ZERO)) {
      obj.leaderId = (message.leaderId || Long.ZERO).toString();
    }
    if (message.teamTargetId !== 0) {
      obj.teamTargetId = Math.round(message.teamTargetId);
    }
    if (message.teamNum !== 0) {
      obj.teamNum = Math.round(message.teamNum);
    }
    if (message.charIds?.length) {
      obj.charIds = message.charIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.isMatching !== false) {
      obj.isMatching = message.isMatching;
    }
    if (message.charTeamVersion !== 0) {
      obj.charTeamVersion = Math.round(message.charTeamVersion);
    }
    if (message.teamMemberData?.size) {
      obj.teamMemberData = {};
      message.teamMemberData.forEach((v, k) => {
        obj.teamMemberData[longToNumber(k)] = TeamMemData.toJSON(v);
      });
    }
    if (message.teamMemberType !== 0) {
      obj.teamMemberType = eTeamMemberTypeToJSON(message.teamMemberType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CharTeam>, I>>(base?: I): CharTeam {
    return CharTeam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CharTeam>, I>>(object: I): CharTeam {
    const message = createBaseCharTeam();
    message.teamId = (object.teamId !== undefined && object.teamId !== null)
      ? Long.fromValue(object.teamId)
      : Long.ZERO;
    message.leaderId = (object.leaderId !== undefined && object.leaderId !== null)
      ? Long.fromValue(object.leaderId)
      : Long.ZERO;
    message.teamTargetId = object.teamTargetId ?? 0;
    message.teamNum = object.teamNum ?? 0;
    message.charIds = object.charIds?.map((e) => Long.fromValue(e)) || [];
    message.isMatching = object.isMatching ?? false;
    message.charTeamVersion = object.charTeamVersion ?? 0;
    message.teamMemberData = (() => {
      const m = new Map();
      (object.teamMemberData as Map<Long, TeamMemData> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, TeamMemData.fromPartial(value));
        }
      });
      return m;
    })();
    message.teamMemberType = object.teamMemberType ?? 0;
    return message;
  },
};

function createBaseCharTeam_TeamMemberDataEntry(): CharTeam_TeamMemberDataEntry {
  return { key: Long.ZERO, value: undefined };
}

export const CharTeam_TeamMemberDataEntry: MessageFns<CharTeam_TeamMemberDataEntry> = {
  encode(message: CharTeam_TeamMemberDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      TeamMemData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CharTeam_TeamMemberDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharTeam_TeamMemberDataEntry();
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

          message.value = TeamMemData.decode(reader, reader.uint32());
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

  fromJSON(object: any): CharTeam_TeamMemberDataEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? TeamMemData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CharTeam_TeamMemberDataEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = TeamMemData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CharTeam_TeamMemberDataEntry>, I>>(base?: I): CharTeam_TeamMemberDataEntry {
    return CharTeam_TeamMemberDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CharTeam_TeamMemberDataEntry>, I>>(object: I): CharTeam_TeamMemberDataEntry {
    const message = createBaseCharTeam_TeamMemberDataEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? TeamMemData.fromPartial(object.value)
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
