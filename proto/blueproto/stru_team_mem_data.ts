/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TeamMemberSocialData } from "./stru_team_member_social_data";

export const protobufPackage = "zproto";

export interface TeamMemData {
  charId: Long;
  enterTime: number;
  callStatus: number;
  talentId: number;
  onlineStatus: number;
  sceneId: number;
  voiceIsOpen: boolean;
  groupId: number;
  socialData: TeamMemberSocialData | undefined;
}

function createBaseTeamMemData(): TeamMemData {
  return {
    charId: Long.ZERO,
    enterTime: 0,
    callStatus: 0,
    talentId: 0,
    onlineStatus: 0,
    sceneId: 0,
    voiceIsOpen: false,
    groupId: 0,
    socialData: undefined,
  };
}

export const TeamMemData: MessageFns<TeamMemData> = {
  encode(message: TeamMemData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.charId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.charId.toString());
    }
    if (message.enterTime !== 0) {
      writer.uint32(16).uint32(message.enterTime);
    }
    if (message.callStatus !== 0) {
      writer.uint32(24).int32(message.callStatus);
    }
    if (message.talentId !== 0) {
      writer.uint32(32).int32(message.talentId);
    }
    if (message.onlineStatus !== 0) {
      writer.uint32(40).int32(message.onlineStatus);
    }
    if (message.sceneId !== 0) {
      writer.uint32(48).int32(message.sceneId);
    }
    if (message.voiceIsOpen !== false) {
      writer.uint32(56).bool(message.voiceIsOpen);
    }
    if (message.groupId !== 0) {
      writer.uint32(64).int32(message.groupId);
    }
    if (message.socialData !== undefined) {
      TeamMemberSocialData.encode(message.socialData, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TeamMemData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTeamMemData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.charId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.enterTime = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.callStatus = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.talentId = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.onlineStatus = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.sceneId = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.voiceIsOpen = reader.bool();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.groupId = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.socialData = TeamMemberSocialData.decode(reader, reader.uint32());
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

  fromJSON(object: any): TeamMemData {
    return {
      charId: isSet(object.charId) ? Long.fromValue(object.charId) : Long.ZERO,
      enterTime: isSet(object.enterTime) ? globalThis.Number(object.enterTime) : 0,
      callStatus: isSet(object.callStatus) ? globalThis.Number(object.callStatus) : 0,
      talentId: isSet(object.talentId) ? globalThis.Number(object.talentId) : 0,
      onlineStatus: isSet(object.onlineStatus) ? globalThis.Number(object.onlineStatus) : 0,
      sceneId: isSet(object.sceneId) ? globalThis.Number(object.sceneId) : 0,
      voiceIsOpen: isSet(object.voiceIsOpen) ? globalThis.Boolean(object.voiceIsOpen) : false,
      groupId: isSet(object.groupId) ? globalThis.Number(object.groupId) : 0,
      socialData: isSet(object.socialData) ? TeamMemberSocialData.fromJSON(object.socialData) : undefined,
    };
  },

  toJSON(message: TeamMemData): unknown {
    const obj: any = {};
    if (!message.charId.equals(Long.ZERO)) {
      obj.charId = (message.charId || Long.ZERO).toString();
    }
    if (message.enterTime !== 0) {
      obj.enterTime = Math.round(message.enterTime);
    }
    if (message.callStatus !== 0) {
      obj.callStatus = Math.round(message.callStatus);
    }
    if (message.talentId !== 0) {
      obj.talentId = Math.round(message.talentId);
    }
    if (message.onlineStatus !== 0) {
      obj.onlineStatus = Math.round(message.onlineStatus);
    }
    if (message.sceneId !== 0) {
      obj.sceneId = Math.round(message.sceneId);
    }
    if (message.voiceIsOpen !== false) {
      obj.voiceIsOpen = message.voiceIsOpen;
    }
    if (message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    if (message.socialData !== undefined) {
      obj.socialData = TeamMemberSocialData.toJSON(message.socialData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TeamMemData>, I>>(base?: I): TeamMemData {
    return TeamMemData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TeamMemData>, I>>(object: I): TeamMemData {
    const message = createBaseTeamMemData();
    message.charId = (object.charId !== undefined && object.charId !== null)
      ? Long.fromValue(object.charId)
      : Long.ZERO;
    message.enterTime = object.enterTime ?? 0;
    message.callStatus = object.callStatus ?? 0;
    message.talentId = object.talentId ?? 0;
    message.onlineStatus = object.onlineStatus ?? 0;
    message.sceneId = object.sceneId ?? 0;
    message.voiceIsOpen = object.voiceIsOpen ?? false;
    message.groupId = object.groupId ?? 0;
    message.socialData = (object.socialData !== undefined && object.socialData !== null)
      ? TeamMemberSocialData.fromPartial(object.socialData)
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
