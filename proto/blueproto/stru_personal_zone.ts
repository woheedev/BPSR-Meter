/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ActionInfo } from "./stru_action_info";
import { EditorUIPosition } from "./stru_editor_u_i_position";
import { FashionQualityCollectInfo } from "./stru_fashion_quality_collect_info";
import { RideQualityCollectInfo } from "./stru_ride_quality_collect_info";

export const protobufPackage = "zproto";

export interface PersonalZone {
  onlinePeriods: number[];
  tags: number[];
  medals: { [key: number]: number };
  themeId: number;
  businessCardStyleId: number;
  avatarFrameId: number;
  actionInfo: ActionInfo | undefined;
  uiPosition: EditorUIPosition[];
  titleId: number;
  fashionRefreshFlag: boolean;
  fashionCollectPoint: number;
  fashionCollectQualityCount: { [key: number]: FashionQualityCollectInfo };
  photos: number[];
  unlockTargetRecord: { [key: number]: number };
  unlockGetRewardRecord: { [key: number]: boolean };
  rideCollectPoint: number;
  rideCollectQualityCount: { [key: number]: RideQualityCollectInfo };
  weaponSkinCollectPoint: number;
  photosWall: { [key: number]: number };
}

export interface PersonalZone_MedalsEntry {
  key: number;
  value: number;
}

export interface PersonalZone_FashionCollectQualityCountEntry {
  key: number;
  value: FashionQualityCollectInfo | undefined;
}

export interface PersonalZone_UnlockTargetRecordEntry {
  key: number;
  value: number;
}

export interface PersonalZone_UnlockGetRewardRecordEntry {
  key: number;
  value: boolean;
}

export interface PersonalZone_RideCollectQualityCountEntry {
  key: number;
  value: RideQualityCollectInfo | undefined;
}

export interface PersonalZone_PhotosWallEntry {
  key: number;
  value: number;
}

function createBasePersonalZone(): PersonalZone {
  return {
    onlinePeriods: [],
    tags: [],
    medals: {},
    themeId: 0,
    businessCardStyleId: 0,
    avatarFrameId: 0,
    actionInfo: undefined,
    uiPosition: [],
    titleId: 0,
    fashionRefreshFlag: false,
    fashionCollectPoint: 0,
    fashionCollectQualityCount: {},
    photos: [],
    unlockTargetRecord: {},
    unlockGetRewardRecord: {},
    rideCollectPoint: 0,
    rideCollectQualityCount: {},
    weaponSkinCollectPoint: 0,
    photosWall: {},
  };
}

export const PersonalZone: MessageFns<PersonalZone> = {
  encode(message: PersonalZone, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(18).fork();
    for (const v of message.onlinePeriods) {
      writer.int32(v);
    }
    writer.join();
    writer.uint32(26).fork();
    for (const v of message.tags) {
      writer.int32(v);
    }
    writer.join();
    Object.entries(message.medals).forEach(([key, value]) => {
      PersonalZone_MedalsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (message.themeId !== 0) {
      writer.uint32(48).int32(message.themeId);
    }
    if (message.businessCardStyleId !== 0) {
      writer.uint32(56).int32(message.businessCardStyleId);
    }
    if (message.avatarFrameId !== 0) {
      writer.uint32(64).int32(message.avatarFrameId);
    }
    if (message.actionInfo !== undefined) {
      ActionInfo.encode(message.actionInfo, writer.uint32(74).fork()).join();
    }
    for (const v of message.uiPosition) {
      EditorUIPosition.encode(v!, writer.uint32(82).fork()).join();
    }
    if (message.titleId !== 0) {
      writer.uint32(88).int32(message.titleId);
    }
    if (message.fashionRefreshFlag !== false) {
      writer.uint32(96).bool(message.fashionRefreshFlag);
    }
    if (message.fashionCollectPoint !== 0) {
      writer.uint32(104).int32(message.fashionCollectPoint);
    }
    Object.entries(message.fashionCollectQualityCount).forEach(([key, value]) => {
      PersonalZone_FashionCollectQualityCountEntry.encode({ key: key as any, value }, writer.uint32(114).fork()).join();
    });
    writer.uint32(122).fork();
    for (const v of message.photos) {
      writer.int32(v);
    }
    writer.join();
    Object.entries(message.unlockTargetRecord).forEach(([key, value]) => {
      PersonalZone_UnlockTargetRecordEntry.encode({ key: key as any, value }, writer.uint32(130).fork()).join();
    });
    Object.entries(message.unlockGetRewardRecord).forEach(([key, value]) => {
      PersonalZone_UnlockGetRewardRecordEntry.encode({ key: key as any, value }, writer.uint32(138).fork()).join();
    });
    if (message.rideCollectPoint !== 0) {
      writer.uint32(144).int32(message.rideCollectPoint);
    }
    Object.entries(message.rideCollectQualityCount).forEach(([key, value]) => {
      PersonalZone_RideCollectQualityCountEntry.encode({ key: key as any, value }, writer.uint32(154).fork()).join();
    });
    if (message.weaponSkinCollectPoint !== 0) {
      writer.uint32(160).int32(message.weaponSkinCollectPoint);
    }
    Object.entries(message.photosWall).forEach(([key, value]) => {
      PersonalZone_PhotosWallEntry.encode({ key: key as any, value }, writer.uint32(170).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag === 16) {
            message.onlinePeriods.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.onlinePeriods.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 3: {
          if (tag === 24) {
            message.tags.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tags.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = PersonalZone_MedalsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.medals[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.themeId = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.businessCardStyleId = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.avatarFrameId = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.actionInfo = ActionInfo.decode(reader, reader.uint32());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.uiPosition.push(EditorUIPosition.decode(reader, reader.uint32()));
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.titleId = reader.int32();
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.fashionRefreshFlag = reader.bool();
          continue;
        }
        case 13: {
          if (tag !== 104) {
            break;
          }

          message.fashionCollectPoint = reader.int32();
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          const entry14 = PersonalZone_FashionCollectQualityCountEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.fashionCollectQualityCount[entry14.key] = entry14.value;
          }
          continue;
        }
        case 15: {
          if (tag === 120) {
            message.photos.push(reader.int32());

            continue;
          }

          if (tag === 122) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.photos.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 16: {
          if (tag !== 130) {
            break;
          }

          const entry16 = PersonalZone_UnlockTargetRecordEntry.decode(reader, reader.uint32());
          if (entry16.value !== undefined) {
            message.unlockTargetRecord[entry16.key] = entry16.value;
          }
          continue;
        }
        case 17: {
          if (tag !== 138) {
            break;
          }

          const entry17 = PersonalZone_UnlockGetRewardRecordEntry.decode(reader, reader.uint32());
          if (entry17.value !== undefined) {
            message.unlockGetRewardRecord[entry17.key] = entry17.value;
          }
          continue;
        }
        case 18: {
          if (tag !== 144) {
            break;
          }

          message.rideCollectPoint = reader.int32();
          continue;
        }
        case 19: {
          if (tag !== 154) {
            break;
          }

          const entry19 = PersonalZone_RideCollectQualityCountEntry.decode(reader, reader.uint32());
          if (entry19.value !== undefined) {
            message.rideCollectQualityCount[entry19.key] = entry19.value;
          }
          continue;
        }
        case 20: {
          if (tag !== 160) {
            break;
          }

          message.weaponSkinCollectPoint = reader.int32();
          continue;
        }
        case 21: {
          if (tag !== 170) {
            break;
          }

          const entry21 = PersonalZone_PhotosWallEntry.decode(reader, reader.uint32());
          if (entry21.value !== undefined) {
            message.photosWall[entry21.key] = entry21.value;
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

  fromJSON(object: any): PersonalZone {
    return {
      onlinePeriods: globalThis.Array.isArray(object?.onlinePeriods)
        ? object.onlinePeriods.map((e: any) => globalThis.Number(e))
        : [],
      tags: globalThis.Array.isArray(object?.tags) ? object.tags.map((e: any) => globalThis.Number(e)) : [],
      medals: isObject(object.medals)
        ? Object.entries(object.medals).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      themeId: isSet(object.themeId) ? globalThis.Number(object.themeId) : 0,
      businessCardStyleId: isSet(object.businessCardStyleId) ? globalThis.Number(object.businessCardStyleId) : 0,
      avatarFrameId: isSet(object.avatarFrameId) ? globalThis.Number(object.avatarFrameId) : 0,
      actionInfo: isSet(object.actionInfo) ? ActionInfo.fromJSON(object.actionInfo) : undefined,
      uiPosition: globalThis.Array.isArray(object?.uiPosition)
        ? object.uiPosition.map((e: any) => EditorUIPosition.fromJSON(e))
        : [],
      titleId: isSet(object.titleId) ? globalThis.Number(object.titleId) : 0,
      fashionRefreshFlag: isSet(object.fashionRefreshFlag) ? globalThis.Boolean(object.fashionRefreshFlag) : false,
      fashionCollectPoint: isSet(object.fashionCollectPoint) ? globalThis.Number(object.fashionCollectPoint) : 0,
      fashionCollectQualityCount: isObject(object.fashionCollectQualityCount)
        ? Object.entries(object.fashionCollectQualityCount).reduce<{ [key: number]: FashionQualityCollectInfo }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = FashionQualityCollectInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      photos: globalThis.Array.isArray(object?.photos)
        ? object.photos.map((e: any) => globalThis.Number(e))
        : [],
      unlockTargetRecord: isObject(object.unlockTargetRecord)
        ? Object.entries(object.unlockTargetRecord).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      unlockGetRewardRecord: isObject(object.unlockGetRewardRecord)
        ? Object.entries(object.unlockGetRewardRecord).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      rideCollectPoint: isSet(object.rideCollectPoint) ? globalThis.Number(object.rideCollectPoint) : 0,
      rideCollectQualityCount: isObject(object.rideCollectQualityCount)
        ? Object.entries(object.rideCollectQualityCount).reduce<{ [key: number]: RideQualityCollectInfo }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = RideQualityCollectInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      weaponSkinCollectPoint: isSet(object.weaponSkinCollectPoint)
        ? globalThis.Number(object.weaponSkinCollectPoint)
        : 0,
      photosWall: isObject(object.photosWall)
        ? Object.entries(object.photosWall).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PersonalZone): unknown {
    const obj: any = {};
    if (message.onlinePeriods?.length) {
      obj.onlinePeriods = message.onlinePeriods.map((e) => Math.round(e));
    }
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Math.round(e));
    }
    if (message.medals) {
      const entries = Object.entries(message.medals);
      if (entries.length > 0) {
        obj.medals = {};
        entries.forEach(([k, v]) => {
          obj.medals[k] = Math.round(v);
        });
      }
    }
    if (message.themeId !== 0) {
      obj.themeId = Math.round(message.themeId);
    }
    if (message.businessCardStyleId !== 0) {
      obj.businessCardStyleId = Math.round(message.businessCardStyleId);
    }
    if (message.avatarFrameId !== 0) {
      obj.avatarFrameId = Math.round(message.avatarFrameId);
    }
    if (message.actionInfo !== undefined) {
      obj.actionInfo = ActionInfo.toJSON(message.actionInfo);
    }
    if (message.uiPosition?.length) {
      obj.uiPosition = message.uiPosition.map((e) => EditorUIPosition.toJSON(e));
    }
    if (message.titleId !== 0) {
      obj.titleId = Math.round(message.titleId);
    }
    if (message.fashionRefreshFlag !== false) {
      obj.fashionRefreshFlag = message.fashionRefreshFlag;
    }
    if (message.fashionCollectPoint !== 0) {
      obj.fashionCollectPoint = Math.round(message.fashionCollectPoint);
    }
    if (message.fashionCollectQualityCount) {
      const entries = Object.entries(message.fashionCollectQualityCount);
      if (entries.length > 0) {
        obj.fashionCollectQualityCount = {};
        entries.forEach(([k, v]) => {
          obj.fashionCollectQualityCount[k] = FashionQualityCollectInfo.toJSON(v);
        });
      }
    }
    if (message.photos?.length) {
      obj.photos = message.photos.map((e) => Math.round(e));
    }
    if (message.unlockTargetRecord) {
      const entries = Object.entries(message.unlockTargetRecord);
      if (entries.length > 0) {
        obj.unlockTargetRecord = {};
        entries.forEach(([k, v]) => {
          obj.unlockTargetRecord[k] = Math.round(v);
        });
      }
    }
    if (message.unlockGetRewardRecord) {
      const entries = Object.entries(message.unlockGetRewardRecord);
      if (entries.length > 0) {
        obj.unlockGetRewardRecord = {};
        entries.forEach(([k, v]) => {
          obj.unlockGetRewardRecord[k] = v;
        });
      }
    }
    if (message.rideCollectPoint !== 0) {
      obj.rideCollectPoint = Math.round(message.rideCollectPoint);
    }
    if (message.rideCollectQualityCount) {
      const entries = Object.entries(message.rideCollectQualityCount);
      if (entries.length > 0) {
        obj.rideCollectQualityCount = {};
        entries.forEach(([k, v]) => {
          obj.rideCollectQualityCount[k] = RideQualityCollectInfo.toJSON(v);
        });
      }
    }
    if (message.weaponSkinCollectPoint !== 0) {
      obj.weaponSkinCollectPoint = Math.round(message.weaponSkinCollectPoint);
    }
    if (message.photosWall) {
      const entries = Object.entries(message.photosWall);
      if (entries.length > 0) {
        obj.photosWall = {};
        entries.forEach(([k, v]) => {
          obj.photosWall[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZone>, I>>(base?: I): PersonalZone {
    return PersonalZone.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZone>, I>>(object: I): PersonalZone {
    const message = createBasePersonalZone();
    message.onlinePeriods = object.onlinePeriods?.map((e) => e) || [];
    message.tags = object.tags?.map((e) => e) || [];
    message.medals = Object.entries(object.medals ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.themeId = object.themeId ?? 0;
    message.businessCardStyleId = object.businessCardStyleId ?? 0;
    message.avatarFrameId = object.avatarFrameId ?? 0;
    message.actionInfo = (object.actionInfo !== undefined && object.actionInfo !== null)
      ? ActionInfo.fromPartial(object.actionInfo)
      : undefined;
    message.uiPosition = object.uiPosition?.map((e) => EditorUIPosition.fromPartial(e)) || [];
    message.titleId = object.titleId ?? 0;
    message.fashionRefreshFlag = object.fashionRefreshFlag ?? false;
    message.fashionCollectPoint = object.fashionCollectPoint ?? 0;
    message.fashionCollectQualityCount = Object.entries(object.fashionCollectQualityCount ?? {}).reduce<
      { [key: number]: FashionQualityCollectInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = FashionQualityCollectInfo.fromPartial(value);
      }
      return acc;
    }, {});
    message.photos = object.photos?.map((e) => e) || [];
    message.unlockTargetRecord = Object.entries(object.unlockTargetRecord ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.unlockGetRewardRecord = Object.entries(object.unlockGetRewardRecord ?? {}).reduce<
      { [key: number]: boolean }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Boolean(value);
      }
      return acc;
    }, {});
    message.rideCollectPoint = object.rideCollectPoint ?? 0;
    message.rideCollectQualityCount = Object.entries(object.rideCollectQualityCount ?? {}).reduce<
      { [key: number]: RideQualityCollectInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = RideQualityCollectInfo.fromPartial(value);
      }
      return acc;
    }, {});
    message.weaponSkinCollectPoint = object.weaponSkinCollectPoint ?? 0;
    message.photosWall = Object.entries(object.photosWall ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePersonalZone_MedalsEntry(): PersonalZone_MedalsEntry {
  return { key: 0, value: 0 };
}

export const PersonalZone_MedalsEntry: MessageFns<PersonalZone_MedalsEntry> = {
  encode(message: PersonalZone_MedalsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZone_MedalsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZone_MedalsEntry();
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

  fromJSON(object: any): PersonalZone_MedalsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PersonalZone_MedalsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZone_MedalsEntry>, I>>(base?: I): PersonalZone_MedalsEntry {
    return PersonalZone_MedalsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZone_MedalsEntry>, I>>(object: I): PersonalZone_MedalsEntry {
    const message = createBasePersonalZone_MedalsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePersonalZone_FashionCollectQualityCountEntry(): PersonalZone_FashionCollectQualityCountEntry {
  return { key: 0, value: undefined };
}

export const PersonalZone_FashionCollectQualityCountEntry: MessageFns<PersonalZone_FashionCollectQualityCountEntry> = {
  encode(
    message: PersonalZone_FashionCollectQualityCountEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FashionQualityCollectInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZone_FashionCollectQualityCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZone_FashionCollectQualityCountEntry();
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

          message.value = FashionQualityCollectInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PersonalZone_FashionCollectQualityCountEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FashionQualityCollectInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PersonalZone_FashionCollectQualityCountEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FashionQualityCollectInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZone_FashionCollectQualityCountEntry>, I>>(
    base?: I,
  ): PersonalZone_FashionCollectQualityCountEntry {
    return PersonalZone_FashionCollectQualityCountEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZone_FashionCollectQualityCountEntry>, I>>(
    object: I,
  ): PersonalZone_FashionCollectQualityCountEntry {
    const message = createBasePersonalZone_FashionCollectQualityCountEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FashionQualityCollectInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBasePersonalZone_UnlockTargetRecordEntry(): PersonalZone_UnlockTargetRecordEntry {
  return { key: 0, value: 0 };
}

export const PersonalZone_UnlockTargetRecordEntry: MessageFns<PersonalZone_UnlockTargetRecordEntry> = {
  encode(message: PersonalZone_UnlockTargetRecordEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZone_UnlockTargetRecordEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZone_UnlockTargetRecordEntry();
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

  fromJSON(object: any): PersonalZone_UnlockTargetRecordEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PersonalZone_UnlockTargetRecordEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZone_UnlockTargetRecordEntry>, I>>(
    base?: I,
  ): PersonalZone_UnlockTargetRecordEntry {
    return PersonalZone_UnlockTargetRecordEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZone_UnlockTargetRecordEntry>, I>>(
    object: I,
  ): PersonalZone_UnlockTargetRecordEntry {
    const message = createBasePersonalZone_UnlockTargetRecordEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePersonalZone_UnlockGetRewardRecordEntry(): PersonalZone_UnlockGetRewardRecordEntry {
  return { key: 0, value: false };
}

export const PersonalZone_UnlockGetRewardRecordEntry: MessageFns<PersonalZone_UnlockGetRewardRecordEntry> = {
  encode(message: PersonalZone_UnlockGetRewardRecordEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZone_UnlockGetRewardRecordEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZone_UnlockGetRewardRecordEntry();
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

  fromJSON(object: any): PersonalZone_UnlockGetRewardRecordEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: PersonalZone_UnlockGetRewardRecordEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZone_UnlockGetRewardRecordEntry>, I>>(
    base?: I,
  ): PersonalZone_UnlockGetRewardRecordEntry {
    return PersonalZone_UnlockGetRewardRecordEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZone_UnlockGetRewardRecordEntry>, I>>(
    object: I,
  ): PersonalZone_UnlockGetRewardRecordEntry {
    const message = createBasePersonalZone_UnlockGetRewardRecordEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBasePersonalZone_RideCollectQualityCountEntry(): PersonalZone_RideCollectQualityCountEntry {
  return { key: 0, value: undefined };
}

export const PersonalZone_RideCollectQualityCountEntry: MessageFns<PersonalZone_RideCollectQualityCountEntry> = {
  encode(message: PersonalZone_RideCollectQualityCountEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      RideQualityCollectInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZone_RideCollectQualityCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZone_RideCollectQualityCountEntry();
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

          message.value = RideQualityCollectInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PersonalZone_RideCollectQualityCountEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? RideQualityCollectInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PersonalZone_RideCollectQualityCountEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = RideQualityCollectInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZone_RideCollectQualityCountEntry>, I>>(
    base?: I,
  ): PersonalZone_RideCollectQualityCountEntry {
    return PersonalZone_RideCollectQualityCountEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZone_RideCollectQualityCountEntry>, I>>(
    object: I,
  ): PersonalZone_RideCollectQualityCountEntry {
    const message = createBasePersonalZone_RideCollectQualityCountEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? RideQualityCollectInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBasePersonalZone_PhotosWallEntry(): PersonalZone_PhotosWallEntry {
  return { key: 0, value: 0 };
}

export const PersonalZone_PhotosWallEntry: MessageFns<PersonalZone_PhotosWallEntry> = {
  encode(message: PersonalZone_PhotosWallEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZone_PhotosWallEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZone_PhotosWallEntry();
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

  fromJSON(object: any): PersonalZone_PhotosWallEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PersonalZone_PhotosWallEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZone_PhotosWallEntry>, I>>(base?: I): PersonalZone_PhotosWallEntry {
    return PersonalZone_PhotosWallEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZone_PhotosWallEntry>, I>>(object: I): PersonalZone_PhotosWallEntry {
    const message = createBasePersonalZone_PhotosWallEntry();
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
