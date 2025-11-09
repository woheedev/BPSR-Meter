/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AccountData } from "./stru_account_data";
import { AvatarInfo } from "./stru_avatar_info";
import { BasicData } from "./stru_basic_data";
import { CharTeam } from "./stru_char_team";
import { CommunityData } from "./stru_community_data";
import { EquipData } from "./stru_equip_data";
import { FaceData } from "./stru_face_data";
import { FashionData } from "./stru_fashion_data";
import { FishSocialData } from "./stru_fish_social_data";
import { FunctionData } from "./stru_function_data";
import { MasterModeDungeonData } from "./stru_master_mode_dungeon_data";
import { PersonalZone } from "./stru_personal_zone";
import { PrivilegeData } from "./stru_privilege_data";
import { ProfessionData } from "./stru_profession_data";
import { SceneData } from "./stru_scene_data";
import { SeasonRankData } from "./stru_season_rank_data";
import { SettingData } from "./stru_setting_data";
import { UnionData } from "./stru_union_data";
import { UserAttrData } from "./stru_user_attr_data";
import { WarehouseData } from "./stru_warehouse_data";

export const protobufPackage = "zproto";

export interface SocialData {
  charId: Long;
  accountId: string;
  basicData: BasicData | undefined;
  avatarInfo: AvatarInfo | undefined;
  faceData: FaceData | undefined;
  professionData: ProfessionData | undefined;
  equipData: EquipData | undefined;
  fashionData: FashionData | undefined;
  settingData: SettingData | undefined;
  sceneData: SceneData | undefined;
  userAttrData: UserAttrData | undefined;
  teamData: CharTeam | undefined;
  unionData: UnionData | undefined;
  accountData: AccountData | undefined;
  functionData: FunctionData | undefined;
  personalZone: PersonalZone | undefined;
  warehouse: WarehouseData | undefined;
  seasonRank: SeasonRankData | undefined;
  fishData: FishSocialData | undefined;
  communityData: CommunityData | undefined;
  privilegeData: PrivilegeData | undefined;
  masterModeDungeonData: MasterModeDungeonData | undefined;
}

function createBaseSocialData(): SocialData {
  return {
    charId: Long.ZERO,
    accountId: "",
    basicData: undefined,
    avatarInfo: undefined,
    faceData: undefined,
    professionData: undefined,
    equipData: undefined,
    fashionData: undefined,
    settingData: undefined,
    sceneData: undefined,
    userAttrData: undefined,
    teamData: undefined,
    unionData: undefined,
    accountData: undefined,
    functionData: undefined,
    personalZone: undefined,
    warehouse: undefined,
    seasonRank: undefined,
    fishData: undefined,
    communityData: undefined,
    privilegeData: undefined,
    masterModeDungeonData: undefined,
  };
}

export const SocialData: MessageFns<SocialData> = {
  encode(message: SocialData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.charId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.charId.toString());
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (message.basicData !== undefined) {
      BasicData.encode(message.basicData, writer.uint32(26).fork()).join();
    }
    if (message.avatarInfo !== undefined) {
      AvatarInfo.encode(message.avatarInfo, writer.uint32(34).fork()).join();
    }
    if (message.faceData !== undefined) {
      FaceData.encode(message.faceData, writer.uint32(42).fork()).join();
    }
    if (message.professionData !== undefined) {
      ProfessionData.encode(message.professionData, writer.uint32(50).fork()).join();
    }
    if (message.equipData !== undefined) {
      EquipData.encode(message.equipData, writer.uint32(58).fork()).join();
    }
    if (message.fashionData !== undefined) {
      FashionData.encode(message.fashionData, writer.uint32(66).fork()).join();
    }
    if (message.settingData !== undefined) {
      SettingData.encode(message.settingData, writer.uint32(74).fork()).join();
    }
    if (message.sceneData !== undefined) {
      SceneData.encode(message.sceneData, writer.uint32(82).fork()).join();
    }
    if (message.userAttrData !== undefined) {
      UserAttrData.encode(message.userAttrData, writer.uint32(90).fork()).join();
    }
    if (message.teamData !== undefined) {
      CharTeam.encode(message.teamData, writer.uint32(98).fork()).join();
    }
    if (message.unionData !== undefined) {
      UnionData.encode(message.unionData, writer.uint32(106).fork()).join();
    }
    if (message.accountData !== undefined) {
      AccountData.encode(message.accountData, writer.uint32(114).fork()).join();
    }
    if (message.functionData !== undefined) {
      FunctionData.encode(message.functionData, writer.uint32(122).fork()).join();
    }
    if (message.personalZone !== undefined) {
      PersonalZone.encode(message.personalZone, writer.uint32(130).fork()).join();
    }
    if (message.warehouse !== undefined) {
      WarehouseData.encode(message.warehouse, writer.uint32(138).fork()).join();
    }
    if (message.seasonRank !== undefined) {
      SeasonRankData.encode(message.seasonRank, writer.uint32(146).fork()).join();
    }
    if (message.fishData !== undefined) {
      FishSocialData.encode(message.fishData, writer.uint32(154).fork()).join();
    }
    if (message.communityData !== undefined) {
      CommunityData.encode(message.communityData, writer.uint32(162).fork()).join();
    }
    if (message.privilegeData !== undefined) {
      PrivilegeData.encode(message.privilegeData, writer.uint32(170).fork()).join();
    }
    if (message.masterModeDungeonData !== undefined) {
      MasterModeDungeonData.encode(message.masterModeDungeonData, writer.uint32(178).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SocialData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocialData();
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
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.basicData = BasicData.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.avatarInfo = AvatarInfo.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.faceData = FaceData.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.professionData = ProfessionData.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.equipData = EquipData.decode(reader, reader.uint32());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.fashionData = FashionData.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.settingData = SettingData.decode(reader, reader.uint32());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.sceneData = SceneData.decode(reader, reader.uint32());
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.userAttrData = UserAttrData.decode(reader, reader.uint32());
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.teamData = CharTeam.decode(reader, reader.uint32());
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.unionData = UnionData.decode(reader, reader.uint32());
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.accountData = AccountData.decode(reader, reader.uint32());
          continue;
        }
        case 15: {
          if (tag !== 122) {
            break;
          }

          message.functionData = FunctionData.decode(reader, reader.uint32());
          continue;
        }
        case 16: {
          if (tag !== 130) {
            break;
          }

          message.personalZone = PersonalZone.decode(reader, reader.uint32());
          continue;
        }
        case 17: {
          if (tag !== 138) {
            break;
          }

          message.warehouse = WarehouseData.decode(reader, reader.uint32());
          continue;
        }
        case 18: {
          if (tag !== 146) {
            break;
          }

          message.seasonRank = SeasonRankData.decode(reader, reader.uint32());
          continue;
        }
        case 19: {
          if (tag !== 154) {
            break;
          }

          message.fishData = FishSocialData.decode(reader, reader.uint32());
          continue;
        }
        case 20: {
          if (tag !== 162) {
            break;
          }

          message.communityData = CommunityData.decode(reader, reader.uint32());
          continue;
        }
        case 21: {
          if (tag !== 170) {
            break;
          }

          message.privilegeData = PrivilegeData.decode(reader, reader.uint32());
          continue;
        }
        case 22: {
          if (tag !== 178) {
            break;
          }

          message.masterModeDungeonData = MasterModeDungeonData.decode(reader, reader.uint32());
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

  fromJSON(object: any): SocialData {
    return {
      charId: isSet(object.charId) ? Long.fromValue(object.charId) : Long.ZERO,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      basicData: isSet(object.basicData) ? BasicData.fromJSON(object.basicData) : undefined,
      avatarInfo: isSet(object.avatarInfo) ? AvatarInfo.fromJSON(object.avatarInfo) : undefined,
      faceData: isSet(object.faceData) ? FaceData.fromJSON(object.faceData) : undefined,
      professionData: isSet(object.professionData) ? ProfessionData.fromJSON(object.professionData) : undefined,
      equipData: isSet(object.equipData) ? EquipData.fromJSON(object.equipData) : undefined,
      fashionData: isSet(object.fashionData) ? FashionData.fromJSON(object.fashionData) : undefined,
      settingData: isSet(object.settingData) ? SettingData.fromJSON(object.settingData) : undefined,
      sceneData: isSet(object.sceneData) ? SceneData.fromJSON(object.sceneData) : undefined,
      userAttrData: isSet(object.userAttrData) ? UserAttrData.fromJSON(object.userAttrData) : undefined,
      teamData: isSet(object.teamData) ? CharTeam.fromJSON(object.teamData) : undefined,
      unionData: isSet(object.unionData) ? UnionData.fromJSON(object.unionData) : undefined,
      accountData: isSet(object.accountData) ? AccountData.fromJSON(object.accountData) : undefined,
      functionData: isSet(object.functionData) ? FunctionData.fromJSON(object.functionData) : undefined,
      personalZone: isSet(object.personalZone) ? PersonalZone.fromJSON(object.personalZone) : undefined,
      warehouse: isSet(object.warehouse) ? WarehouseData.fromJSON(object.warehouse) : undefined,
      seasonRank: isSet(object.seasonRank) ? SeasonRankData.fromJSON(object.seasonRank) : undefined,
      fishData: isSet(object.fishData) ? FishSocialData.fromJSON(object.fishData) : undefined,
      communityData: isSet(object.communityData) ? CommunityData.fromJSON(object.communityData) : undefined,
      privilegeData: isSet(object.privilegeData) ? PrivilegeData.fromJSON(object.privilegeData) : undefined,
      masterModeDungeonData: isSet(object.masterModeDungeonData)
        ? MasterModeDungeonData.fromJSON(object.masterModeDungeonData)
        : undefined,
    };
  },

  toJSON(message: SocialData): unknown {
    const obj: any = {};
    if (!message.charId.equals(Long.ZERO)) {
      obj.charId = (message.charId || Long.ZERO).toString();
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
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
    if (message.settingData !== undefined) {
      obj.settingData = SettingData.toJSON(message.settingData);
    }
    if (message.sceneData !== undefined) {
      obj.sceneData = SceneData.toJSON(message.sceneData);
    }
    if (message.userAttrData !== undefined) {
      obj.userAttrData = UserAttrData.toJSON(message.userAttrData);
    }
    if (message.teamData !== undefined) {
      obj.teamData = CharTeam.toJSON(message.teamData);
    }
    if (message.unionData !== undefined) {
      obj.unionData = UnionData.toJSON(message.unionData);
    }
    if (message.accountData !== undefined) {
      obj.accountData = AccountData.toJSON(message.accountData);
    }
    if (message.functionData !== undefined) {
      obj.functionData = FunctionData.toJSON(message.functionData);
    }
    if (message.personalZone !== undefined) {
      obj.personalZone = PersonalZone.toJSON(message.personalZone);
    }
    if (message.warehouse !== undefined) {
      obj.warehouse = WarehouseData.toJSON(message.warehouse);
    }
    if (message.seasonRank !== undefined) {
      obj.seasonRank = SeasonRankData.toJSON(message.seasonRank);
    }
    if (message.fishData !== undefined) {
      obj.fishData = FishSocialData.toJSON(message.fishData);
    }
    if (message.communityData !== undefined) {
      obj.communityData = CommunityData.toJSON(message.communityData);
    }
    if (message.privilegeData !== undefined) {
      obj.privilegeData = PrivilegeData.toJSON(message.privilegeData);
    }
    if (message.masterModeDungeonData !== undefined) {
      obj.masterModeDungeonData = MasterModeDungeonData.toJSON(message.masterModeDungeonData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SocialData>, I>>(base?: I): SocialData {
    return SocialData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SocialData>, I>>(object: I): SocialData {
    const message = createBaseSocialData();
    message.charId = (object.charId !== undefined && object.charId !== null)
      ? Long.fromValue(object.charId)
      : Long.ZERO;
    message.accountId = object.accountId ?? "";
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
    message.settingData = (object.settingData !== undefined && object.settingData !== null)
      ? SettingData.fromPartial(object.settingData)
      : undefined;
    message.sceneData = (object.sceneData !== undefined && object.sceneData !== null)
      ? SceneData.fromPartial(object.sceneData)
      : undefined;
    message.userAttrData = (object.userAttrData !== undefined && object.userAttrData !== null)
      ? UserAttrData.fromPartial(object.userAttrData)
      : undefined;
    message.teamData = (object.teamData !== undefined && object.teamData !== null)
      ? CharTeam.fromPartial(object.teamData)
      : undefined;
    message.unionData = (object.unionData !== undefined && object.unionData !== null)
      ? UnionData.fromPartial(object.unionData)
      : undefined;
    message.accountData = (object.accountData !== undefined && object.accountData !== null)
      ? AccountData.fromPartial(object.accountData)
      : undefined;
    message.functionData = (object.functionData !== undefined && object.functionData !== null)
      ? FunctionData.fromPartial(object.functionData)
      : undefined;
    message.personalZone = (object.personalZone !== undefined && object.personalZone !== null)
      ? PersonalZone.fromPartial(object.personalZone)
      : undefined;
    message.warehouse = (object.warehouse !== undefined && object.warehouse !== null)
      ? WarehouseData.fromPartial(object.warehouse)
      : undefined;
    message.seasonRank = (object.seasonRank !== undefined && object.seasonRank !== null)
      ? SeasonRankData.fromPartial(object.seasonRank)
      : undefined;
    message.fishData = (object.fishData !== undefined && object.fishData !== null)
      ? FishSocialData.fromPartial(object.fishData)
      : undefined;
    message.communityData = (object.communityData !== undefined && object.communityData !== null)
      ? CommunityData.fromPartial(object.communityData)
      : undefined;
    message.privilegeData = (object.privilegeData !== undefined && object.privilegeData !== null)
      ? PrivilegeData.fromPartial(object.privilegeData)
      : undefined;
    message.masterModeDungeonData =
      (object.masterModeDungeonData !== undefined && object.masterModeDungeonData !== null)
        ? MasterModeDungeonData.fromPartial(object.masterModeDungeonData)
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
