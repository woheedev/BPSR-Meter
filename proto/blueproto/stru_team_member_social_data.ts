/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AvatarInfo } from "./stru_avatar_info";
import { BasicData } from "./stru_basic_data";
import { EquipData } from "./stru_equip_data";
import { FaceData } from "./stru_face_data";
import { FashionData } from "./stru_fashion_data";
import { PersonalZoneShow } from "./stru_personal_zone_show";
import { ProfessionData } from "./stru_profession_data";
import { UserAttrData } from "./stru_user_attr_data";
import { UserSceneInfo } from "./stru_user_scene_info";

export const protobufPackage = "zproto";

export interface TeamMemberSocialData {
  basicData: BasicData | undefined;
  avatarInfo: AvatarInfo | undefined;
  faceData: FaceData | undefined;
  professionData: ProfessionData | undefined;
  equipData: EquipData | undefined;
  fashionData: FashionData | undefined;
  userSceneInfo: UserSceneInfo | undefined;
  userAttrData: UserAttrData | undefined;
  personalZone: PersonalZoneShow | undefined;
}

function createBaseTeamMemberSocialData(): TeamMemberSocialData {
  return {
    basicData: undefined,
    avatarInfo: undefined,
    faceData: undefined,
    professionData: undefined,
    equipData: undefined,
    fashionData: undefined,
    userSceneInfo: undefined,
    userAttrData: undefined,
    personalZone: undefined,
  };
}

export const TeamMemberSocialData: MessageFns<TeamMemberSocialData> = {
  encode(message: TeamMemberSocialData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.basicData !== undefined) {
      BasicData.encode(message.basicData, writer.uint32(10).fork()).join();
    }
    if (message.avatarInfo !== undefined) {
      AvatarInfo.encode(message.avatarInfo, writer.uint32(18).fork()).join();
    }
    if (message.faceData !== undefined) {
      FaceData.encode(message.faceData, writer.uint32(26).fork()).join();
    }
    if (message.professionData !== undefined) {
      ProfessionData.encode(message.professionData, writer.uint32(34).fork()).join();
    }
    if (message.equipData !== undefined) {
      EquipData.encode(message.equipData, writer.uint32(42).fork()).join();
    }
    if (message.fashionData !== undefined) {
      FashionData.encode(message.fashionData, writer.uint32(50).fork()).join();
    }
    if (message.userSceneInfo !== undefined) {
      UserSceneInfo.encode(message.userSceneInfo, writer.uint32(58).fork()).join();
    }
    if (message.userAttrData !== undefined) {
      UserAttrData.encode(message.userAttrData, writer.uint32(66).fork()).join();
    }
    if (message.personalZone !== undefined) {
      PersonalZoneShow.encode(message.personalZone, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TeamMemberSocialData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTeamMemberSocialData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.basicData = BasicData.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.avatarInfo = AvatarInfo.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.faceData = FaceData.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.professionData = ProfessionData.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.equipData = EquipData.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.fashionData = FashionData.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.userSceneInfo = UserSceneInfo.decode(reader, reader.uint32());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.userAttrData = UserAttrData.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.personalZone = PersonalZoneShow.decode(reader, reader.uint32());
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

  fromJSON(object: any): TeamMemberSocialData {
    return {
      basicData: isSet(object.basicData) ? BasicData.fromJSON(object.basicData) : undefined,
      avatarInfo: isSet(object.avatarInfo) ? AvatarInfo.fromJSON(object.avatarInfo) : undefined,
      faceData: isSet(object.faceData) ? FaceData.fromJSON(object.faceData) : undefined,
      professionData: isSet(object.professionData) ? ProfessionData.fromJSON(object.professionData) : undefined,
      equipData: isSet(object.equipData) ? EquipData.fromJSON(object.equipData) : undefined,
      fashionData: isSet(object.fashionData) ? FashionData.fromJSON(object.fashionData) : undefined,
      userSceneInfo: isSet(object.userSceneInfo) ? UserSceneInfo.fromJSON(object.userSceneInfo) : undefined,
      userAttrData: isSet(object.userAttrData) ? UserAttrData.fromJSON(object.userAttrData) : undefined,
      personalZone: isSet(object.personalZone) ? PersonalZoneShow.fromJSON(object.personalZone) : undefined,
    };
  },

  toJSON(message: TeamMemberSocialData): unknown {
    const obj: any = {};
    if (message.basicData !== undefined) {
      obj.basicData = BasicData.toJSON(message.basicData);
    }
    if (message.avatarInfo !== undefined) {
      obj.avatarInfo = AvatarInfo.toJSON(message.avatarInfo);
    }
    if (message.faceData !== undefined) {
      obj.faceData = FaceData.toJSON(message.faceData);
    }
    if (message.professionData !== undefined) {
      obj.professionData = ProfessionData.toJSON(message.professionData);
    }
    if (message.equipData !== undefined) {
      obj.equipData = EquipData.toJSON(message.equipData);
    }
    if (message.fashionData !== undefined) {
      obj.fashionData = FashionData.toJSON(message.fashionData);
    }
    if (message.userSceneInfo !== undefined) {
      obj.userSceneInfo = UserSceneInfo.toJSON(message.userSceneInfo);
    }
    if (message.userAttrData !== undefined) {
      obj.userAttrData = UserAttrData.toJSON(message.userAttrData);
    }
    if (message.personalZone !== undefined) {
      obj.personalZone = PersonalZoneShow.toJSON(message.personalZone);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TeamMemberSocialData>, I>>(base?: I): TeamMemberSocialData {
    return TeamMemberSocialData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TeamMemberSocialData>, I>>(object: I): TeamMemberSocialData {
    const message = createBaseTeamMemberSocialData();
    message.basicData = (object.basicData !== undefined && object.basicData !== null)
      ? BasicData.fromPartial(object.basicData)
      : undefined;
    message.avatarInfo = (object.avatarInfo !== undefined && object.avatarInfo !== null)
      ? AvatarInfo.fromPartial(object.avatarInfo)
      : undefined;
    message.faceData = (object.faceData !== undefined && object.faceData !== null)
      ? FaceData.fromPartial(object.faceData)
      : undefined;
    message.professionData = (object.professionData !== undefined && object.professionData !== null)
      ? ProfessionData.fromPartial(object.professionData)
      : undefined;
    message.equipData = (object.equipData !== undefined && object.equipData !== null)
      ? EquipData.fromPartial(object.equipData)
      : undefined;
    message.fashionData = (object.fashionData !== undefined && object.fashionData !== null)
      ? FashionData.fromPartial(object.fashionData)
      : undefined;
    message.userSceneInfo = (object.userSceneInfo !== undefined && object.userSceneInfo !== null)
      ? UserSceneInfo.fromPartial(object.userSceneInfo)
      : undefined;
    message.userAttrData = (object.userAttrData !== undefined && object.userAttrData !== null)
      ? UserAttrData.fromPartial(object.userAttrData)
      : undefined;
    message.personalZone = (object.personalZone !== undefined && object.personalZone !== null)
      ? PersonalZoneShow.fromPartial(object.personalZone)
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
