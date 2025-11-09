/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EBodySize, eBodySizeFromJSON, eBodySizeToJSON } from "./enum_e_body_size";
import { EGender, eGenderFromJSON, eGenderToJSON } from "./enum_e_gender";
import { AvatarInfo } from "./stru_avatar_info";
import { CharTeam } from "./stru_char_team";
import { FaceData } from "./stru_face_data";
import { ProfileInfo } from "./stru_profile_info";
import { UserUnion } from "./stru_user_union";

export const protobufPackage = "zproto";

export interface CharBaseInfo {
  charId: Long;
  accountId: string;
  showId: Long;
  serverId: number;
  name: string;
  gender: EGender;
  isDeleted: boolean;
  isForbid: boolean;
  isMute: boolean;
  x: number;
  y: number;
  z: number;
  dir: number;
  faceData: FaceData | undefined;
  cardId: number;
  createTime: Long;
  onlineTime: Long;
  offlineTime: Long;
  profileInfo: ProfileInfo | undefined;
  teamInfo: CharTeam | undefined;
  charState: Long;
  bodySize: EBodySize;
  unionInfo: UserUnion | undefined;
  personalState: number[];
  avatarInfo: AvatarInfo | undefined;
  totalOnlineTime: Long;
  openId: string;
  sdkType: number;
  os: number;
  initProfessionId: number;
  lastCalTotalTime: Long;
  areaId: number;
  clientVersion: string;
  fightPoint: number;
  sumSave: Long;
  clientResourceVersion: string;
  lastOfflineTime: Long;
  dayAccDurTime: number;
  lastAccDurTimestamp: Long;
  saveSerial: Long;
  lastOnlineTime: Long;
}

function createBaseCharBaseInfo(): CharBaseInfo {
  return {
    charId: Long.ZERO,
    accountId: "",
    showId: Long.ZERO,
    serverId: 0,
    name: "",
    gender: 0,
    isDeleted: false,
    isForbid: false,
    isMute: false,
    x: 0,
    y: 0,
    z: 0,
    dir: 0,
    faceData: undefined,
    cardId: 0,
    createTime: Long.ZERO,
    onlineTime: Long.ZERO,
    offlineTime: Long.ZERO,
    profileInfo: undefined,
    teamInfo: undefined,
    charState: Long.UZERO,
    bodySize: 0,
    unionInfo: undefined,
    personalState: [],
    avatarInfo: undefined,
    totalOnlineTime: Long.UZERO,
    openId: "",
    sdkType: 0,
    os: 0,
    initProfessionId: 0,
    lastCalTotalTime: Long.UZERO,
    areaId: 0,
    clientVersion: "",
    fightPoint: 0,
    sumSave: Long.ZERO,
    clientResourceVersion: "",
    lastOfflineTime: Long.ZERO,
    dayAccDurTime: 0,
    lastAccDurTimestamp: Long.ZERO,
    saveSerial: Long.ZERO,
    lastOnlineTime: Long.ZERO,
  };
}

export const CharBaseInfo: MessageFns<CharBaseInfo> = {
  encode(message: CharBaseInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.charId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.charId.toString());
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
    }
    if (!message.showId.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.showId.toString());
    }
    if (message.serverId !== 0) {
      writer.uint32(32).uint32(message.serverId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.gender !== 0) {
      writer.uint32(48).int32(message.gender);
    }
    if (message.isDeleted !== false) {
      writer.uint32(56).bool(message.isDeleted);
    }
    if (message.isForbid !== false) {
      writer.uint32(64).bool(message.isForbid);
    }
    if (message.isMute !== false) {
      writer.uint32(72).bool(message.isMute);
    }
    if (message.x !== 0) {
      writer.uint32(85).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(93).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(101).float(message.z);
    }
    if (message.dir !== 0) {
      writer.uint32(109).float(message.dir);
    }
    if (message.faceData !== undefined) {
      FaceData.encode(message.faceData, writer.uint32(114).fork()).join();
    }
    if (message.cardId !== 0) {
      writer.uint32(120).uint32(message.cardId);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      writer.uint32(128).int64(message.createTime.toString());
    }
    if (!message.onlineTime.equals(Long.ZERO)) {
      writer.uint32(136).int64(message.onlineTime.toString());
    }
    if (!message.offlineTime.equals(Long.ZERO)) {
      writer.uint32(144).int64(message.offlineTime.toString());
    }
    if (message.profileInfo !== undefined) {
      ProfileInfo.encode(message.profileInfo, writer.uint32(154).fork()).join();
    }
    if (message.teamInfo !== undefined) {
      CharTeam.encode(message.teamInfo, writer.uint32(162).fork()).join();
    }
    if (!message.charState.equals(Long.UZERO)) {
      writer.uint32(168).uint64(message.charState.toString());
    }
    if (message.bodySize !== 0) {
      writer.uint32(176).int32(message.bodySize);
    }
    if (message.unionInfo !== undefined) {
      UserUnion.encode(message.unionInfo, writer.uint32(186).fork()).join();
    }
    writer.uint32(194).fork();
    for (const v of message.personalState) {
      writer.int32(v);
    }
    writer.join();
    if (message.avatarInfo !== undefined) {
      AvatarInfo.encode(message.avatarInfo, writer.uint32(202).fork()).join();
    }
    if (!message.totalOnlineTime.equals(Long.UZERO)) {
      writer.uint32(208).uint64(message.totalOnlineTime.toString());
    }
    if (message.openId !== "") {
      writer.uint32(218).string(message.openId);
    }
    if (message.sdkType !== 0) {
      writer.uint32(224).int32(message.sdkType);
    }
    if (message.os !== 0) {
      writer.uint32(232).int32(message.os);
    }
    if (message.initProfessionId !== 0) {
      writer.uint32(248).int32(message.initProfessionId);
    }
    if (!message.lastCalTotalTime.equals(Long.UZERO)) {
      writer.uint32(256).uint64(message.lastCalTotalTime.toString());
    }
    if (message.areaId !== 0) {
      writer.uint32(264).int32(message.areaId);
    }
    if (message.clientVersion !== "") {
      writer.uint32(274).string(message.clientVersion);
    }
    if (message.fightPoint !== 0) {
      writer.uint32(280).int32(message.fightPoint);
    }
    if (!message.sumSave.equals(Long.ZERO)) {
      writer.uint32(288).int64(message.sumSave.toString());
    }
    if (message.clientResourceVersion !== "") {
      writer.uint32(298).string(message.clientResourceVersion);
    }
    if (!message.lastOfflineTime.equals(Long.ZERO)) {
      writer.uint32(304).int64(message.lastOfflineTime.toString());
    }
    if (message.dayAccDurTime !== 0) {
      writer.uint32(312).int32(message.dayAccDurTime);
    }
    if (!message.lastAccDurTimestamp.equals(Long.ZERO)) {
      writer.uint32(320).int64(message.lastAccDurTimestamp.toString());
    }
    if (!message.saveSerial.equals(Long.ZERO)) {
      writer.uint32(328).int64(message.saveSerial.toString());
    }
    if (!message.lastOnlineTime.equals(Long.ZERO)) {
      writer.uint32(336).int64(message.lastOnlineTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CharBaseInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharBaseInfo();
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
          if (tag !== 24) {
            break;
          }

          message.showId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.serverId = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.gender = reader.int32() as any;
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.isDeleted = reader.bool();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.isForbid = reader.bool();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.isMute = reader.bool();
          continue;
        }
        case 10: {
          if (tag !== 85) {
            break;
          }

          message.x = reader.float();
          continue;
        }
        case 11: {
          if (tag !== 93) {
            break;
          }

          message.y = reader.float();
          continue;
        }
        case 12: {
          if (tag !== 101) {
            break;
          }

          message.z = reader.float();
          continue;
        }
        case 13: {
          if (tag !== 109) {
            break;
          }

          message.dir = reader.float();
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.faceData = FaceData.decode(reader, reader.uint32());
          continue;
        }
        case 15: {
          if (tag !== 120) {
            break;
          }

          message.cardId = reader.uint32();
          continue;
        }
        case 16: {
          if (tag !== 128) {
            break;
          }

          message.createTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 17: {
          if (tag !== 136) {
            break;
          }

          message.onlineTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 18: {
          if (tag !== 144) {
            break;
          }

          message.offlineTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 19: {
          if (tag !== 154) {
            break;
          }

          message.profileInfo = ProfileInfo.decode(reader, reader.uint32());
          continue;
        }
        case 20: {
          if (tag !== 162) {
            break;
          }

          message.teamInfo = CharTeam.decode(reader, reader.uint32());
          continue;
        }
        case 21: {
          if (tag !== 168) {
            break;
          }

          message.charState = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 22: {
          if (tag !== 176) {
            break;
          }

          message.bodySize = reader.int32() as any;
          continue;
        }
        case 23: {
          if (tag !== 186) {
            break;
          }

          message.unionInfo = UserUnion.decode(reader, reader.uint32());
          continue;
        }
        case 24: {
          if (tag === 192) {
            message.personalState.push(reader.int32());

            continue;
          }

          if (tag === 194) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.personalState.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 25: {
          if (tag !== 202) {
            break;
          }

          message.avatarInfo = AvatarInfo.decode(reader, reader.uint32());
          continue;
        }
        case 26: {
          if (tag !== 208) {
            break;
          }

          message.totalOnlineTime = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 27: {
          if (tag !== 218) {
            break;
          }

          message.openId = reader.string();
          continue;
        }
        case 28: {
          if (tag !== 224) {
            break;
          }

          message.sdkType = reader.int32();
          continue;
        }
        case 29: {
          if (tag !== 232) {
            break;
          }

          message.os = reader.int32();
          continue;
        }
        case 31: {
          if (tag !== 248) {
            break;
          }

          message.initProfessionId = reader.int32();
          continue;
        }
        case 32: {
          if (tag !== 256) {
            break;
          }

          message.lastCalTotalTime = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 33: {
          if (tag !== 264) {
            break;
          }

          message.areaId = reader.int32();
          continue;
        }
        case 34: {
          if (tag !== 274) {
            break;
          }

          message.clientVersion = reader.string();
          continue;
        }
        case 35: {
          if (tag !== 280) {
            break;
          }

          message.fightPoint = reader.int32();
          continue;
        }
        case 36: {
          if (tag !== 288) {
            break;
          }

          message.sumSave = Long.fromString(reader.int64().toString());
          continue;
        }
        case 37: {
          if (tag !== 298) {
            break;
          }

          message.clientResourceVersion = reader.string();
          continue;
        }
        case 38: {
          if (tag !== 304) {
            break;
          }

          message.lastOfflineTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 39: {
          if (tag !== 312) {
            break;
          }

          message.dayAccDurTime = reader.int32();
          continue;
        }
        case 40: {
          if (tag !== 320) {
            break;
          }

          message.lastAccDurTimestamp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 41: {
          if (tag !== 328) {
            break;
          }

          message.saveSerial = Long.fromString(reader.int64().toString());
          continue;
        }
        case 42: {
          if (tag !== 336) {
            break;
          }

          message.lastOnlineTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): CharBaseInfo {
    return {
      charId: isSet(object.charId) ? Long.fromValue(object.charId) : Long.ZERO,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      showId: isSet(object.showId) ? Long.fromValue(object.showId) : Long.ZERO,
      serverId: isSet(object.serverId) ? globalThis.Number(object.serverId) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      gender: isSet(object.gender) ? eGenderFromJSON(object.gender) : 0,
      isDeleted: isSet(object.isDeleted) ? globalThis.Boolean(object.isDeleted) : false,
      isForbid: isSet(object.isForbid) ? globalThis.Boolean(object.isForbid) : false,
      isMute: isSet(object.isMute) ? globalThis.Boolean(object.isMute) : false,
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      z: isSet(object.z) ? globalThis.Number(object.z) : 0,
      dir: isSet(object.dir) ? globalThis.Number(object.dir) : 0,
      faceData: isSet(object.faceData) ? FaceData.fromJSON(object.faceData) : undefined,
      cardId: isSet(object.cardId) ? globalThis.Number(object.cardId) : 0,
      createTime: isSet(object.createTime) ? Long.fromValue(object.createTime) : Long.ZERO,
      onlineTime: isSet(object.onlineTime) ? Long.fromValue(object.onlineTime) : Long.ZERO,
      offlineTime: isSet(object.offlineTime) ? Long.fromValue(object.offlineTime) : Long.ZERO,
      profileInfo: isSet(object.profileInfo) ? ProfileInfo.fromJSON(object.profileInfo) : undefined,
      teamInfo: isSet(object.teamInfo) ? CharTeam.fromJSON(object.teamInfo) : undefined,
      charState: isSet(object.charState) ? Long.fromValue(object.charState) : Long.UZERO,
      bodySize: isSet(object.bodySize) ? eBodySizeFromJSON(object.bodySize) : 0,
      unionInfo: isSet(object.unionInfo) ? UserUnion.fromJSON(object.unionInfo) : undefined,
      personalState: globalThis.Array.isArray(object?.personalState)
        ? object.personalState.map((e: any) => globalThis.Number(e))
        : [],
      avatarInfo: isSet(object.avatarInfo) ? AvatarInfo.fromJSON(object.avatarInfo) : undefined,
      totalOnlineTime: isSet(object.totalOnlineTime) ? Long.fromValue(object.totalOnlineTime) : Long.UZERO,
      openId: isSet(object.openId) ? globalThis.String(object.openId) : "",
      sdkType: isSet(object.sdkType) ? globalThis.Number(object.sdkType) : 0,
      os: isSet(object.os) ? globalThis.Number(object.os) : 0,
      initProfessionId: isSet(object.initProfessionId) ? globalThis.Number(object.initProfessionId) : 0,
      lastCalTotalTime: isSet(object.lastCalTotalTime) ? Long.fromValue(object.lastCalTotalTime) : Long.UZERO,
      areaId: isSet(object.areaId) ? globalThis.Number(object.areaId) : 0,
      clientVersion: isSet(object.clientVersion) ? globalThis.String(object.clientVersion) : "",
      fightPoint: isSet(object.fightPoint) ? globalThis.Number(object.fightPoint) : 0,
      sumSave: isSet(object.sumSave) ? Long.fromValue(object.sumSave) : Long.ZERO,
      clientResourceVersion: isSet(object.clientResourceVersion) ? globalThis.String(object.clientResourceVersion) : "",
      lastOfflineTime: isSet(object.lastOfflineTime) ? Long.fromValue(object.lastOfflineTime) : Long.ZERO,
      dayAccDurTime: isSet(object.dayAccDurTime) ? globalThis.Number(object.dayAccDurTime) : 0,
      lastAccDurTimestamp: isSet(object.lastAccDurTimestamp) ? Long.fromValue(object.lastAccDurTimestamp) : Long.ZERO,
      saveSerial: isSet(object.saveSerial) ? Long.fromValue(object.saveSerial) : Long.ZERO,
      lastOnlineTime: isSet(object.lastOnlineTime) ? Long.fromValue(object.lastOnlineTime) : Long.ZERO,
    };
  },

  toJSON(message: CharBaseInfo): unknown {
    const obj: any = {};
    if (!message.charId.equals(Long.ZERO)) {
      obj.charId = (message.charId || Long.ZERO).toString();
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (!message.showId.equals(Long.ZERO)) {
      obj.showId = (message.showId || Long.ZERO).toString();
    }
    if (message.serverId !== 0) {
      obj.serverId = Math.round(message.serverId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.gender !== 0) {
      obj.gender = eGenderToJSON(message.gender);
    }
    if (message.isDeleted !== false) {
      obj.isDeleted = message.isDeleted;
    }
    if (message.isForbid !== false) {
      obj.isForbid = message.isForbid;
    }
    if (message.isMute !== false) {
      obj.isMute = message.isMute;
    }
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== 0) {
      obj.z = message.z;
    }
    if (message.dir !== 0) {
      obj.dir = message.dir;
    }
    if (message.faceData !== undefined) {
      obj.faceData = FaceData.toJSON(message.faceData);
    }
    if (message.cardId !== 0) {
      obj.cardId = Math.round(message.cardId);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      obj.createTime = (message.createTime || Long.ZERO).toString();
    }
    if (!message.onlineTime.equals(Long.ZERO)) {
      obj.onlineTime = (message.onlineTime || Long.ZERO).toString();
    }
    if (!message.offlineTime.equals(Long.ZERO)) {
      obj.offlineTime = (message.offlineTime || Long.ZERO).toString();
    }
    if (message.profileInfo !== undefined) {
      obj.profileInfo = ProfileInfo.toJSON(message.profileInfo);
    }
    if (message.teamInfo !== undefined) {
      obj.teamInfo = CharTeam.toJSON(message.teamInfo);
    }
    if (!message.charState.equals(Long.UZERO)) {
      obj.charState = (message.charState || Long.UZERO).toString();
    }
    if (message.bodySize !== 0) {
      obj.bodySize = eBodySizeToJSON(message.bodySize);
    }
    if (message.unionInfo !== undefined) {
      obj.unionInfo = UserUnion.toJSON(message.unionInfo);
    }
    if (message.personalState?.length) {
      obj.personalState = message.personalState.map((e) => Math.round(e));
    }
    if (message.avatarInfo !== undefined) {
      obj.avatarInfo = AvatarInfo.toJSON(message.avatarInfo);
    }
    if (!message.totalOnlineTime.equals(Long.UZERO)) {
      obj.totalOnlineTime = (message.totalOnlineTime || Long.UZERO).toString();
    }
    if (message.openId !== "") {
      obj.openId = message.openId;
    }
    if (message.sdkType !== 0) {
      obj.sdkType = Math.round(message.sdkType);
    }
    if (message.os !== 0) {
      obj.os = Math.round(message.os);
    }
    if (message.initProfessionId !== 0) {
      obj.initProfessionId = Math.round(message.initProfessionId);
    }
    if (!message.lastCalTotalTime.equals(Long.UZERO)) {
      obj.lastCalTotalTime = (message.lastCalTotalTime || Long.UZERO).toString();
    }
    if (message.areaId !== 0) {
      obj.areaId = Math.round(message.areaId);
    }
    if (message.clientVersion !== "") {
      obj.clientVersion = message.clientVersion;
    }
    if (message.fightPoint !== 0) {
      obj.fightPoint = Math.round(message.fightPoint);
    }
    if (!message.sumSave.equals(Long.ZERO)) {
      obj.sumSave = (message.sumSave || Long.ZERO).toString();
    }
    if (message.clientResourceVersion !== "") {
      obj.clientResourceVersion = message.clientResourceVersion;
    }
    if (!message.lastOfflineTime.equals(Long.ZERO)) {
      obj.lastOfflineTime = (message.lastOfflineTime || Long.ZERO).toString();
    }
    if (message.dayAccDurTime !== 0) {
      obj.dayAccDurTime = Math.round(message.dayAccDurTime);
    }
    if (!message.lastAccDurTimestamp.equals(Long.ZERO)) {
      obj.lastAccDurTimestamp = (message.lastAccDurTimestamp || Long.ZERO).toString();
    }
    if (!message.saveSerial.equals(Long.ZERO)) {
      obj.saveSerial = (message.saveSerial || Long.ZERO).toString();
    }
    if (!message.lastOnlineTime.equals(Long.ZERO)) {
      obj.lastOnlineTime = (message.lastOnlineTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CharBaseInfo>, I>>(base?: I): CharBaseInfo {
    return CharBaseInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CharBaseInfo>, I>>(object: I): CharBaseInfo {
    const message = createBaseCharBaseInfo();
    message.charId = (object.charId !== undefined && object.charId !== null)
      ? Long.fromValue(object.charId)
      : Long.ZERO;
    message.accountId = object.accountId ?? "";
    message.showId = (object.showId !== undefined && object.showId !== null)
      ? Long.fromValue(object.showId)
      : Long.ZERO;
    message.serverId = object.serverId ?? 0;
    message.name = object.name ?? "";
    message.gender = object.gender ?? 0;
    message.isDeleted = object.isDeleted ?? false;
    message.isForbid = object.isForbid ?? false;
    message.isMute = object.isMute ?? false;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.dir = object.dir ?? 0;
    message.faceData = (object.faceData !== undefined && object.faceData !== null)
      ? FaceData.fromPartial(object.faceData)
      : undefined;
    message.cardId = object.cardId ?? 0;
    message.createTime = (object.createTime !== undefined && object.createTime !== null)
      ? Long.fromValue(object.createTime)
      : Long.ZERO;
    message.onlineTime = (object.onlineTime !== undefined && object.onlineTime !== null)
      ? Long.fromValue(object.onlineTime)
      : Long.ZERO;
    message.offlineTime = (object.offlineTime !== undefined && object.offlineTime !== null)
      ? Long.fromValue(object.offlineTime)
      : Long.ZERO;
    message.profileInfo = (object.profileInfo !== undefined && object.profileInfo !== null)
      ? ProfileInfo.fromPartial(object.profileInfo)
      : undefined;
    message.teamInfo = (object.teamInfo !== undefined && object.teamInfo !== null)
      ? CharTeam.fromPartial(object.teamInfo)
      : undefined;
    message.charState = (object.charState !== undefined && object.charState !== null)
      ? Long.fromValue(object.charState)
      : Long.UZERO;
    message.bodySize = object.bodySize ?? 0;
    message.unionInfo = (object.unionInfo !== undefined && object.unionInfo !== null)
      ? UserUnion.fromPartial(object.unionInfo)
      : undefined;
    message.personalState = object.personalState?.map((e) => e) || [];
    message.avatarInfo = (object.avatarInfo !== undefined && object.avatarInfo !== null)
      ? AvatarInfo.fromPartial(object.avatarInfo)
      : undefined;
    message.totalOnlineTime = (object.totalOnlineTime !== undefined && object.totalOnlineTime !== null)
      ? Long.fromValue(object.totalOnlineTime)
      : Long.UZERO;
    message.openId = object.openId ?? "";
    message.sdkType = object.sdkType ?? 0;
    message.os = object.os ?? 0;
    message.initProfessionId = object.initProfessionId ?? 0;
    message.lastCalTotalTime = (object.lastCalTotalTime !== undefined && object.lastCalTotalTime !== null)
      ? Long.fromValue(object.lastCalTotalTime)
      : Long.UZERO;
    message.areaId = object.areaId ?? 0;
    message.clientVersion = object.clientVersion ?? "";
    message.fightPoint = object.fightPoint ?? 0;
    message.sumSave = (object.sumSave !== undefined && object.sumSave !== null)
      ? Long.fromValue(object.sumSave)
      : Long.ZERO;
    message.clientResourceVersion = object.clientResourceVersion ?? "";
    message.lastOfflineTime = (object.lastOfflineTime !== undefined && object.lastOfflineTime !== null)
      ? Long.fromValue(object.lastOfflineTime)
      : Long.ZERO;
    message.dayAccDurTime = object.dayAccDurTime ?? 0;
    message.lastAccDurTimestamp = (object.lastAccDurTimestamp !== undefined && object.lastAccDurTimestamp !== null)
      ? Long.fromValue(object.lastAccDurTimestamp)
      : Long.ZERO;
    message.saveSerial = (object.saveSerial !== undefined && object.saveSerial !== null)
      ? Long.fromValue(object.saveSerial)
      : Long.ZERO;
    message.lastOnlineTime = (object.lastOnlineTime !== undefined && object.lastOnlineTime !== null)
      ? Long.fromValue(object.lastOnlineTime)
      : Long.ZERO;
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
