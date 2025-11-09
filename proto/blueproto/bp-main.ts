/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BodyPartState, bodyPartStateFromJSON, bodyPartStateToJSON } from "./enum_body_part_state";
import { EAppearType, eAppearTypeFromJSON, eAppearTypeToJSON } from "./enum_e_appear_type";
import {
  EBuffEffectLogicPbType,
  eBuffEffectLogicPbTypeFromJSON,
  eBuffEffectLogicPbTypeToJSON,
} from "./enum_e_buff_effect_logic_pb_type";
import { EBuffEventType, eBuffEventTypeFromJSON, eBuffEventTypeToJSON } from "./enum_e_buff_event_type";
import { EDamageMode, eDamageModeFromJSON, eDamageModeToJSON } from "./enum_e_damage_mode";
import { EDamageProperty, eDamagePropertyFromJSON, eDamagePropertyToJSON } from "./enum_e_damage_property";
import { EDamageSource, eDamageSourceFromJSON, eDamageSourceToJSON } from "./enum_e_damage_source";
import { EDamageType, eDamageTypeFromJSON, eDamageTypeToJSON } from "./enum_e_damage_type";
import { EDisappearType, eDisappearTypeFromJSON, eDisappearTypeToJSON } from "./enum_e_disappear_type";
import { EEntityType, eEntityTypeFromJSON, eEntityTypeToJSON } from "./enum_e_entity_type";
import { ESkillCDType, eSkillCDTypeFromJSON, eSkillCDTypeToJSON } from "./enum_e_skill_c_d_type";
import { CharSerialize } from "./stru_char_serialize";
import { EventData } from "./stru_event_data";
import { FightSourceInfo } from "./stru_fight_source_info";
import { GetSocialDataReply } from "./stru_get_social_data_reply";
import { Position } from "./stru_position";
import { SceneLineData } from "./stru_scene_line_data";
import { SkillCDInfo } from "./stru_skill_c_d_info";
import { TransferParam } from "./stru_transfer_param";
import { vector2, vector3 } from "./table_basic";

export const protobufPackage = "zproto";

export interface ReturnMessageWrapper {
  Message: GetSocialDataReply | undefined;
}

export interface NotifyEnterWorldRequest {
  AccountId?: string | undefined;
  Token?: string | undefined;
  SceneIp?: string | undefined;
  ScenePort?: number | undefined;
  Transform?: TransferParam | undefined;
  SceneLineData?: SceneLineData | undefined;
}

export interface NotifyEnterWorld {
  VRequest: NotifyEnterWorldRequest | undefined;
}

export interface Attr {
  Id?: number | undefined;
  RawData?: Uint8Array | undefined;
}

export interface MapAttrValue {
  IsRemove?: boolean | undefined;
  Key?: Uint8Array | undefined;
  Value?: Uint8Array | undefined;
}

export interface MapAttr {
  IsClear?: boolean | undefined;
  Id?: number | undefined;
  Attrs: MapAttrValue[];
}

export interface AttrCollection {
  Uuid?: Long | undefined;
  Attrs: Attr[];
  MapAttrs: MapAttr[];
}

export interface TempAttr {
  Id?: number | undefined;
  Value?: number | undefined;
}

export interface TempAttrCollection {
  Attrs: TempAttr[];
}

export interface EventDataList {
  Uuid?: Long | undefined;
  Events: EventData[];
}

export interface BulletEvent {
  Uuid?: Long | undefined;
  EnterStageId?: number | undefined;
}

export interface ActorBodyPartInfos {
  Uuid?: Long | undefined;
  Infos: ActorBodyPartInfo[];
}

export interface ActorBodyPartInfo {
  PartId?: number | undefined;
  Hp?: Long | undefined;
  MaxHp?: Long | undefined;
  State?: BodyPartState | undefined;
  FleshyId?: number | undefined;
}

export interface PassiveSkillInfo {
  Uuid?: number | undefined;
  TargetUuid?: Long | undefined;
  StageBeginTime?: Long | undefined;
  BeginTime?: Long | undefined;
  StagePlayNum?: number | undefined;
  SkillId?: number | undefined;
  SkillLevel?: number | undefined;
  SkillStage?: number | undefined;
}

export interface SeqPassiveSkillInfo {
  ActorUuid?: Long | undefined;
  PassiveInfos: PassiveSkillInfo[];
}

export interface SeqPassiveSkillEndInfo {
  ActorUuid?: Long | undefined;
  Uuids: Long[];
}

export interface BuffInfoSync {
  Uuid?: Long | undefined;
  BuffInfos: BuffInfo[];
}

export interface BuffInfo {
  BuffUuid?: number | undefined;
  BaseId?: number | undefined;
  Level?: number | undefined;
  HostUuid?: Long | undefined;
  TableUuid?: number | undefined;
  CreateTime?: Long | undefined;
  FireUuid?: Long | undefined;
  Layer?: number | undefined;
  PartId?: number | undefined;
  Count?: number | undefined;
  Duration?: number | undefined;
  FightSourceInfo?: FightSourceInfo | undefined;
  LogicEffect?: BuffEffectLogicInfo | undefined;
}

export interface BuffEffectLogicInfo {
  EffectType?: EBuffEffectLogicPbType | undefined;
  RawData?: Uint8Array | undefined;
  IsLoop?: boolean | undefined;
}

export interface ClientHitPartInfo {
  PartId?: number | undefined;
  DamagePos?: vector3 | undefined;
  DamageVal?: Long | undefined;
}

export interface SyncDamageInfo {
  DamageSource?: EDamageSource | undefined;
  IsMiss?: boolean | undefined;
  IsCrit?: boolean | undefined;
  Type?: EDamageType | undefined;
  TypeFlag?: number | undefined;
  Value?: Long | undefined;
  ActualValue?: Long | undefined;
  LuckyValue?: Long | undefined;
  HpLessenValue?: Long | undefined;
  ShieldLessenValue?: Long | undefined;
  AttackerUuid?: Long | undefined;
  OwnerId?: number | undefined;
  OwnerLevel?: number | undefined;
  OwnerStage?: number | undefined;
  HitEventId?: number | undefined;
  IsNormal?: boolean | undefined;
  IsDead?: boolean | undefined;
  Property?: EDamageProperty | undefined;
  DamagePos?: vector3 | undefined;
  PartInfos: ClientHitPartInfo[];
  TopSummonerId?: Long | undefined;
  DamageWeight?: vector2 | undefined;
  PassiveUuid?: number | undefined;
  IsRainbow?: boolean | undefined;
  DamageMode?: EDamageMode | undefined;
}

export interface SkillEffect {
  Uuid?: Long | undefined;
  Damages: SyncDamageInfo[];
  TotalDamage?: Long | undefined;
}

export interface BuffEffect {
  Type?: EBuffEventType | undefined;
  BuffUuid?: number | undefined;
  HostUuid?: Long | undefined;
  TriggerTime?: Long | undefined;
  LogicEffect: BuffEffectLogicInfo[];
}

export interface BuffEffectSync {
  Uuid?: Long | undefined;
  BuffEffects: BuffEffect[];
}

export interface FakeBulletInfo {
  Uuid?: number | undefined;
  BulletId?: number | undefined;
  TargetId?: Long | undefined;
  PartId?: number | undefined;
  Offset?: vector3 | undefined;
  Rotate?: vector3 | undefined;
  SkinId?: number | undefined;
}

export interface PassengerChangeParam {
  IsAddPassenger?: boolean | undefined;
  AddOrRemoveUuid?: Long | undefined;
}

export interface MagneticRidePassengerChangeInfo {
  PassengerChangeList: PassengerChangeParam[];
}

export interface PathPointChangeParam {
  Operation?: number | undefined;
  AddPoint?: Position | undefined;
  RemovePointCount?: number | undefined;
}

export interface MagneticRidePathPointChangeInfo {
  PathPointChangeList: PathPointChangeParam[];
}

export interface MagneticRideQueueChangeInfo {
  QueueUuid?: Long | undefined;
  PassengerChangeInfo?: MagneticRidePassengerChangeInfo | undefined;
  PathPointChangeInfo?: MagneticRidePathPointChangeInfo | undefined;
  IsCircle?: boolean | undefined;
  IsRemove?: boolean | undefined;
  PathLength?: number | undefined;
}

export interface AoiSyncDelta {
  Uuid?: Long | undefined;
  Attrs?: AttrCollection | undefined;
  TempAttrs?: TempAttrCollection | undefined;
  EventDataList?: EventDataList | undefined;
  BulletEvent?: BulletEvent | undefined;
  BodyPartInfos?: ActorBodyPartInfos | undefined;
  SkillEffects?: SkillEffect | undefined;
  PassiveSkillInfos?: SeqPassiveSkillInfo | undefined;
  PassiveSkillEndInfos?: SeqPassiveSkillEndInfo | undefined;
  BuffInfos?: BuffInfoSync | undefined;
  BuffEffect?: BuffEffectSync | undefined;
  FakeBullets: FakeBulletInfo[];
  MagneticRideQueueChangeInfoList: MagneticRideQueueChangeInfo[];
}

export interface FightResCD {
  ResId?: number | undefined;
  BeginTime?: Long | undefined;
  Duration?: number | undefined;
  ValidCDTime?: number | undefined;
}

export interface AoiSyncToMeDelta {
  BaseDelta?: AoiSyncDelta | undefined;
  SyncHateIds: Long[];
  SyncSkillCDs: SkillCDInfo[];
  FightResCDs: FightResCD[];
  Uuid?: Long | undefined;
}

export interface SyncNearDeltaInfo {
  DeltaInfos: AoiSyncDelta[];
}

export interface SyncToMeDeltaInfo {
  DeltaInfo: AoiSyncToMeDelta | undefined;
}

export interface SyncNearEntities {
  appear: Entity[];
  disappear: DisappearEntity[];
}

export interface Entity {
  uuid?: Long | undefined;
  entType?: EEntityType | undefined;
  attrs: AttrCollection | undefined;
  tempAttrs: TempAttrCollection | undefined;
  bodyPartInfos: ActorBodyPartInfos | undefined;
  passiveSkillInfos: SeqPassiveSkillInfo | undefined;
  buffInfos: BuffInfoSync | undefined;
  buffEffect: BuffEffectSync | undefined;
  appearType?: EAppearType | undefined;
  magneticRideQueueChangeInfoDict: Map<Long, MagneticQueueAppearInfo>;
}

export interface Entity_MagneticRideQueueChangeInfoDictEntry {
  key: Long;
  value: MagneticQueueAppearInfo | undefined;
}

export interface MagneticQueueAppearInfo {
  passengerUuidList: Long[];
  isCircle?: boolean | undefined;
  pathLength?: number | undefined;
}

export interface DisappearEntity {
  uuid?: Long | undefined;
  type?: EDisappearType | undefined;
}

export interface SkillCd {
  skillLevelId?: number | undefined;
  beginTime?: Long | undefined;
  duration?: number | undefined;
  skillCdType?: ESkillCDType | undefined;
  validCdTime?: number | undefined;
}

export interface FightResCd {
  resId?: number | undefined;
  beginTime?: Long | undefined;
  duration?: number | undefined;
  validCdTime?: number | undefined;
}

export interface SyncContainerData {
  vData: CharSerialize | undefined;
}

export interface SyncContainerDirtyData {
  vData?: Uint8Array | undefined;
}

export interface SyncServerTime {
  clientMilliseconds?: Long | undefined;
  serverMilliseconds?: Long | undefined;
}

function createBaseReturnMessageWrapper(): ReturnMessageWrapper {
  return { Message: undefined };
}

export const ReturnMessageWrapper: MessageFns<ReturnMessageWrapper> = {
  encode(message: ReturnMessageWrapper, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Message !== undefined) {
      GetSocialDataReply.encode(message.Message, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReturnMessageWrapper {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnMessageWrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.Message = GetSocialDataReply.decode(reader, reader.uint32());
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

  fromJSON(object: any): ReturnMessageWrapper {
    return { Message: isSet(object.Message) ? GetSocialDataReply.fromJSON(object.Message) : undefined };
  },

  toJSON(message: ReturnMessageWrapper): unknown {
    const obj: any = {};
    if (message.Message !== undefined) {
      obj.Message = GetSocialDataReply.toJSON(message.Message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReturnMessageWrapper>, I>>(base?: I): ReturnMessageWrapper {
    return ReturnMessageWrapper.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReturnMessageWrapper>, I>>(object: I): ReturnMessageWrapper {
    const message = createBaseReturnMessageWrapper();
    message.Message = (object.Message !== undefined && object.Message !== null)
      ? GetSocialDataReply.fromPartial(object.Message)
      : undefined;
    return message;
  },
};

function createBaseNotifyEnterWorldRequest(): NotifyEnterWorldRequest {
  return {
    AccountId: undefined,
    Token: undefined,
    SceneIp: undefined,
    ScenePort: undefined,
    Transform: undefined,
    SceneLineData: undefined,
  };
}

export const NotifyEnterWorldRequest: MessageFns<NotifyEnterWorldRequest> = {
  encode(message: NotifyEnterWorldRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.AccountId !== undefined) {
      writer.uint32(10).string(message.AccountId);
    }
    if (message.Token !== undefined) {
      writer.uint32(18).string(message.Token);
    }
    if (message.SceneIp !== undefined) {
      writer.uint32(26).string(message.SceneIp);
    }
    if (message.ScenePort !== undefined) {
      writer.uint32(32).int32(message.ScenePort);
    }
    if (message.Transform !== undefined) {
      TransferParam.encode(message.Transform, writer.uint32(42).fork()).join();
    }
    if (message.SceneLineData !== undefined) {
      SceneLineData.encode(message.SceneLineData, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotifyEnterWorldRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifyEnterWorldRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.AccountId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Token = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.SceneIp = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.ScenePort = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.Transform = TransferParam.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.SceneLineData = SceneLineData.decode(reader, reader.uint32());
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

  fromJSON(object: any): NotifyEnterWorldRequest {
    return {
      AccountId: isSet(object.AccountId) ? globalThis.String(object.AccountId) : undefined,
      Token: isSet(object.Token) ? globalThis.String(object.Token) : undefined,
      SceneIp: isSet(object.SceneIp) ? globalThis.String(object.SceneIp) : undefined,
      ScenePort: isSet(object.ScenePort) ? globalThis.Number(object.ScenePort) : undefined,
      Transform: isSet(object.Transform) ? TransferParam.fromJSON(object.Transform) : undefined,
      SceneLineData: isSet(object.SceneLineData) ? SceneLineData.fromJSON(object.SceneLineData) : undefined,
    };
  },

  toJSON(message: NotifyEnterWorldRequest): unknown {
    const obj: any = {};
    if (message.AccountId !== undefined) {
      obj.AccountId = message.AccountId;
    }
    if (message.Token !== undefined) {
      obj.Token = message.Token;
    }
    if (message.SceneIp !== undefined) {
      obj.SceneIp = message.SceneIp;
    }
    if (message.ScenePort !== undefined) {
      obj.ScenePort = Math.round(message.ScenePort);
    }
    if (message.Transform !== undefined) {
      obj.Transform = TransferParam.toJSON(message.Transform);
    }
    if (message.SceneLineData !== undefined) {
      obj.SceneLineData = SceneLineData.toJSON(message.SceneLineData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotifyEnterWorldRequest>, I>>(base?: I): NotifyEnterWorldRequest {
    return NotifyEnterWorldRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotifyEnterWorldRequest>, I>>(object: I): NotifyEnterWorldRequest {
    const message = createBaseNotifyEnterWorldRequest();
    message.AccountId = object.AccountId ?? undefined;
    message.Token = object.Token ?? undefined;
    message.SceneIp = object.SceneIp ?? undefined;
    message.ScenePort = object.ScenePort ?? undefined;
    message.Transform = (object.Transform !== undefined && object.Transform !== null)
      ? TransferParam.fromPartial(object.Transform)
      : undefined;
    message.SceneLineData = (object.SceneLineData !== undefined && object.SceneLineData !== null)
      ? SceneLineData.fromPartial(object.SceneLineData)
      : undefined;
    return message;
  },
};

function createBaseNotifyEnterWorld(): NotifyEnterWorld {
  return { VRequest: undefined };
}

export const NotifyEnterWorld: MessageFns<NotifyEnterWorld> = {
  encode(message: NotifyEnterWorld, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.VRequest !== undefined) {
      NotifyEnterWorldRequest.encode(message.VRequest, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotifyEnterWorld {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifyEnterWorld();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.VRequest = NotifyEnterWorldRequest.decode(reader, reader.uint32());
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

  fromJSON(object: any): NotifyEnterWorld {
    return { VRequest: isSet(object.VRequest) ? NotifyEnterWorldRequest.fromJSON(object.VRequest) : undefined };
  },

  toJSON(message: NotifyEnterWorld): unknown {
    const obj: any = {};
    if (message.VRequest !== undefined) {
      obj.VRequest = NotifyEnterWorldRequest.toJSON(message.VRequest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotifyEnterWorld>, I>>(base?: I): NotifyEnterWorld {
    return NotifyEnterWorld.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotifyEnterWorld>, I>>(object: I): NotifyEnterWorld {
    const message = createBaseNotifyEnterWorld();
    message.VRequest = (object.VRequest !== undefined && object.VRequest !== null)
      ? NotifyEnterWorldRequest.fromPartial(object.VRequest)
      : undefined;
    return message;
  },
};

function createBaseAttr(): Attr {
  return { Id: undefined, RawData: undefined };
}

export const Attr: MessageFns<Attr> = {
  encode(message: Attr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Id !== undefined) {
      writer.uint32(8).int32(message.Id);
    }
    if (message.RawData !== undefined) {
      writer.uint32(18).bytes(message.RawData);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Attr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.RawData = reader.bytes();
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

  fromJSON(object: any): Attr {
    return {
      Id: isSet(object.Id) ? globalThis.Number(object.Id) : undefined,
      RawData: isSet(object.RawData) ? bytesFromBase64(object.RawData) : undefined,
    };
  },

  toJSON(message: Attr): unknown {
    const obj: any = {};
    if (message.Id !== undefined) {
      obj.Id = Math.round(message.Id);
    }
    if (message.RawData !== undefined) {
      obj.RawData = base64FromBytes(message.RawData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attr>, I>>(base?: I): Attr {
    return Attr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attr>, I>>(object: I): Attr {
    const message = createBaseAttr();
    message.Id = object.Id ?? undefined;
    message.RawData = object.RawData ?? undefined;
    return message;
  },
};

function createBaseMapAttrValue(): MapAttrValue {
  return { IsRemove: undefined, Key: undefined, Value: undefined };
}

export const MapAttrValue: MessageFns<MapAttrValue> = {
  encode(message: MapAttrValue, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.IsRemove !== undefined) {
      writer.uint32(8).bool(message.IsRemove);
    }
    if (message.Key !== undefined) {
      writer.uint32(18).bytes(message.Key);
    }
    if (message.Value !== undefined) {
      writer.uint32(26).bytes(message.Value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapAttrValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapAttrValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.IsRemove = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Key = reader.bytes();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.Value = reader.bytes();
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

  fromJSON(object: any): MapAttrValue {
    return {
      IsRemove: isSet(object.IsRemove) ? globalThis.Boolean(object.IsRemove) : undefined,
      Key: isSet(object.Key) ? bytesFromBase64(object.Key) : undefined,
      Value: isSet(object.Value) ? bytesFromBase64(object.Value) : undefined,
    };
  },

  toJSON(message: MapAttrValue): unknown {
    const obj: any = {};
    if (message.IsRemove !== undefined) {
      obj.IsRemove = message.IsRemove;
    }
    if (message.Key !== undefined) {
      obj.Key = base64FromBytes(message.Key);
    }
    if (message.Value !== undefined) {
      obj.Value = base64FromBytes(message.Value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapAttrValue>, I>>(base?: I): MapAttrValue {
    return MapAttrValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapAttrValue>, I>>(object: I): MapAttrValue {
    const message = createBaseMapAttrValue();
    message.IsRemove = object.IsRemove ?? undefined;
    message.Key = object.Key ?? undefined;
    message.Value = object.Value ?? undefined;
    return message;
  },
};

function createBaseMapAttr(): MapAttr {
  return { IsClear: undefined, Id: undefined, Attrs: [] };
}

export const MapAttr: MessageFns<MapAttr> = {
  encode(message: MapAttr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.IsClear !== undefined) {
      writer.uint32(8).bool(message.IsClear);
    }
    if (message.Id !== undefined) {
      writer.uint32(16).int32(message.Id);
    }
    for (const v of message.Attrs) {
      MapAttrValue.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapAttr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapAttr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.IsClear = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.Id = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.Attrs.push(MapAttrValue.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MapAttr {
    return {
      IsClear: isSet(object.IsClear) ? globalThis.Boolean(object.IsClear) : undefined,
      Id: isSet(object.Id) ? globalThis.Number(object.Id) : undefined,
      Attrs: globalThis.Array.isArray(object?.Attrs) ? object.Attrs.map((e: any) => MapAttrValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: MapAttr): unknown {
    const obj: any = {};
    if (message.IsClear !== undefined) {
      obj.IsClear = message.IsClear;
    }
    if (message.Id !== undefined) {
      obj.Id = Math.round(message.Id);
    }
    if (message.Attrs?.length) {
      obj.Attrs = message.Attrs.map((e) => MapAttrValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapAttr>, I>>(base?: I): MapAttr {
    return MapAttr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapAttr>, I>>(object: I): MapAttr {
    const message = createBaseMapAttr();
    message.IsClear = object.IsClear ?? undefined;
    message.Id = object.Id ?? undefined;
    message.Attrs = object.Attrs?.map((e) => MapAttrValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAttrCollection(): AttrCollection {
  return { Uuid: undefined, Attrs: [], MapAttrs: [] };
}

export const AttrCollection: MessageFns<AttrCollection> = {
  encode(message: AttrCollection, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    for (const v of message.Attrs) {
      Attr.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.MapAttrs) {
      MapAttr.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttrCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttrCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Attrs.push(Attr.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.MapAttrs.push(MapAttr.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AttrCollection {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      Attrs: globalThis.Array.isArray(object?.Attrs) ? object.Attrs.map((e: any) => Attr.fromJSON(e)) : [],
      MapAttrs: globalThis.Array.isArray(object?.MapAttrs) ? object.MapAttrs.map((e: any) => MapAttr.fromJSON(e)) : [],
    };
  },

  toJSON(message: AttrCollection): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.Attrs?.length) {
      obj.Attrs = message.Attrs.map((e) => Attr.toJSON(e));
    }
    if (message.MapAttrs?.length) {
      obj.MapAttrs = message.MapAttrs.map((e) => MapAttr.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttrCollection>, I>>(base?: I): AttrCollection {
    return AttrCollection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttrCollection>, I>>(object: I): AttrCollection {
    const message = createBaseAttrCollection();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.Attrs = object.Attrs?.map((e) => Attr.fromPartial(e)) || [];
    message.MapAttrs = object.MapAttrs?.map((e) => MapAttr.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTempAttr(): TempAttr {
  return { Id: undefined, Value: undefined };
}

export const TempAttr: MessageFns<TempAttr> = {
  encode(message: TempAttr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Id !== undefined) {
      writer.uint32(8).int32(message.Id);
    }
    if (message.Value !== undefined) {
      writer.uint32(16).int32(message.Value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TempAttr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTempAttr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.Value = reader.int32();
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

  fromJSON(object: any): TempAttr {
    return {
      Id: isSet(object.Id) ? globalThis.Number(object.Id) : undefined,
      Value: isSet(object.Value) ? globalThis.Number(object.Value) : undefined,
    };
  },

  toJSON(message: TempAttr): unknown {
    const obj: any = {};
    if (message.Id !== undefined) {
      obj.Id = Math.round(message.Id);
    }
    if (message.Value !== undefined) {
      obj.Value = Math.round(message.Value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TempAttr>, I>>(base?: I): TempAttr {
    return TempAttr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TempAttr>, I>>(object: I): TempAttr {
    const message = createBaseTempAttr();
    message.Id = object.Id ?? undefined;
    message.Value = object.Value ?? undefined;
    return message;
  },
};

function createBaseTempAttrCollection(): TempAttrCollection {
  return { Attrs: [] };
}

export const TempAttrCollection: MessageFns<TempAttrCollection> = {
  encode(message: TempAttrCollection, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.Attrs) {
      TempAttr.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TempAttrCollection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTempAttrCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.Attrs.push(TempAttr.decode(reader, reader.uint32()));
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

  fromJSON(object: any): TempAttrCollection {
    return { Attrs: globalThis.Array.isArray(object?.Attrs) ? object.Attrs.map((e: any) => TempAttr.fromJSON(e)) : [] };
  },

  toJSON(message: TempAttrCollection): unknown {
    const obj: any = {};
    if (message.Attrs?.length) {
      obj.Attrs = message.Attrs.map((e) => TempAttr.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TempAttrCollection>, I>>(base?: I): TempAttrCollection {
    return TempAttrCollection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TempAttrCollection>, I>>(object: I): TempAttrCollection {
    const message = createBaseTempAttrCollection();
    message.Attrs = object.Attrs?.map((e) => TempAttr.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventDataList(): EventDataList {
  return { Uuid: undefined, Events: [] };
}

export const EventDataList: MessageFns<EventDataList> = {
  encode(message: EventDataList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    for (const v of message.Events) {
      EventData.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventDataList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Events.push(EventData.decode(reader, reader.uint32()));
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

  fromJSON(object: any): EventDataList {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      Events: globalThis.Array.isArray(object?.Events) ? object.Events.map((e: any) => EventData.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventDataList): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.Events?.length) {
      obj.Events = message.Events.map((e) => EventData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventDataList>, I>>(base?: I): EventDataList {
    return EventDataList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventDataList>, I>>(object: I): EventDataList {
    const message = createBaseEventDataList();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.Events = object.Events?.map((e) => EventData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBulletEvent(): BulletEvent {
  return { Uuid: undefined, EnterStageId: undefined };
}

export const BulletEvent: MessageFns<BulletEvent> = {
  encode(message: BulletEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    if (message.EnterStageId !== undefined) {
      writer.uint32(16).int32(message.EnterStageId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BulletEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulletEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.EnterStageId = reader.int32();
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

  fromJSON(object: any): BulletEvent {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      EnterStageId: isSet(object.EnterStageId) ? globalThis.Number(object.EnterStageId) : undefined,
    };
  },

  toJSON(message: BulletEvent): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.EnterStageId !== undefined) {
      obj.EnterStageId = Math.round(message.EnterStageId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BulletEvent>, I>>(base?: I): BulletEvent {
    return BulletEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BulletEvent>, I>>(object: I): BulletEvent {
    const message = createBaseBulletEvent();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.EnterStageId = object.EnterStageId ?? undefined;
    return message;
  },
};

function createBaseActorBodyPartInfos(): ActorBodyPartInfos {
  return { Uuid: undefined, Infos: [] };
}

export const ActorBodyPartInfos: MessageFns<ActorBodyPartInfos> = {
  encode(message: ActorBodyPartInfos, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    for (const v of message.Infos) {
      ActorBodyPartInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ActorBodyPartInfos {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActorBodyPartInfos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Infos.push(ActorBodyPartInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ActorBodyPartInfos {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      Infos: globalThis.Array.isArray(object?.Infos) ? object.Infos.map((e: any) => ActorBodyPartInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: ActorBodyPartInfos): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.Infos?.length) {
      obj.Infos = message.Infos.map((e) => ActorBodyPartInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActorBodyPartInfos>, I>>(base?: I): ActorBodyPartInfos {
    return ActorBodyPartInfos.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActorBodyPartInfos>, I>>(object: I): ActorBodyPartInfos {
    const message = createBaseActorBodyPartInfos();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.Infos = object.Infos?.map((e) => ActorBodyPartInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseActorBodyPartInfo(): ActorBodyPartInfo {
  return { PartId: undefined, Hp: undefined, MaxHp: undefined, State: undefined, FleshyId: undefined };
}

export const ActorBodyPartInfo: MessageFns<ActorBodyPartInfo> = {
  encode(message: ActorBodyPartInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.PartId !== undefined) {
      writer.uint32(8).int32(message.PartId);
    }
    if (message.Hp !== undefined) {
      writer.uint32(16).uint64(message.Hp.toString());
    }
    if (message.MaxHp !== undefined) {
      writer.uint32(24).uint64(message.MaxHp.toString());
    }
    if (message.State !== undefined) {
      writer.uint32(32).int32(message.State);
    }
    if (message.FleshyId !== undefined) {
      writer.uint32(40).int32(message.FleshyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ActorBodyPartInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActorBodyPartInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.PartId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.Hp = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.MaxHp = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.State = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.FleshyId = reader.int32();
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

  fromJSON(object: any): ActorBodyPartInfo {
    return {
      PartId: isSet(object.PartId) ? globalThis.Number(object.PartId) : undefined,
      Hp: isSet(object.Hp) ? Long.fromValue(object.Hp) : undefined,
      MaxHp: isSet(object.MaxHp) ? Long.fromValue(object.MaxHp) : undefined,
      State: isSet(object.State) ? bodyPartStateFromJSON(object.State) : undefined,
      FleshyId: isSet(object.FleshyId) ? globalThis.Number(object.FleshyId) : undefined,
    };
  },

  toJSON(message: ActorBodyPartInfo): unknown {
    const obj: any = {};
    if (message.PartId !== undefined) {
      obj.PartId = Math.round(message.PartId);
    }
    if (message.Hp !== undefined) {
      obj.Hp = (message.Hp || Long.UZERO).toString();
    }
    if (message.MaxHp !== undefined) {
      obj.MaxHp = (message.MaxHp || Long.UZERO).toString();
    }
    if (message.State !== undefined) {
      obj.State = bodyPartStateToJSON(message.State);
    }
    if (message.FleshyId !== undefined) {
      obj.FleshyId = Math.round(message.FleshyId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActorBodyPartInfo>, I>>(base?: I): ActorBodyPartInfo {
    return ActorBodyPartInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActorBodyPartInfo>, I>>(object: I): ActorBodyPartInfo {
    const message = createBaseActorBodyPartInfo();
    message.PartId = object.PartId ?? undefined;
    message.Hp = (object.Hp !== undefined && object.Hp !== null) ? Long.fromValue(object.Hp) : undefined;
    message.MaxHp = (object.MaxHp !== undefined && object.MaxHp !== null) ? Long.fromValue(object.MaxHp) : undefined;
    message.State = object.State ?? undefined;
    message.FleshyId = object.FleshyId ?? undefined;
    return message;
  },
};

function createBasePassiveSkillInfo(): PassiveSkillInfo {
  return {
    Uuid: undefined,
    TargetUuid: undefined,
    StageBeginTime: undefined,
    BeginTime: undefined,
    StagePlayNum: undefined,
    SkillId: undefined,
    SkillLevel: undefined,
    SkillStage: undefined,
  };
}

export const PassiveSkillInfo: MessageFns<PassiveSkillInfo> = {
  encode(message: PassiveSkillInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int32(message.Uuid);
    }
    if (message.TargetUuid !== undefined) {
      writer.uint32(16).int64(message.TargetUuid.toString());
    }
    if (message.StageBeginTime !== undefined) {
      writer.uint32(24).int64(message.StageBeginTime.toString());
    }
    if (message.BeginTime !== undefined) {
      writer.uint32(32).int64(message.BeginTime.toString());
    }
    if (message.StagePlayNum !== undefined) {
      writer.uint32(40).int32(message.StagePlayNum);
    }
    if (message.SkillId !== undefined) {
      writer.uint32(48).int32(message.SkillId);
    }
    if (message.SkillLevel !== undefined) {
      writer.uint32(56).int32(message.SkillLevel);
    }
    if (message.SkillStage !== undefined) {
      writer.uint32(64).int32(message.SkillStage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PassiveSkillInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePassiveSkillInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.TargetUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.StageBeginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.BeginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.StagePlayNum = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.SkillId = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.SkillLevel = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.SkillStage = reader.int32();
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

  fromJSON(object: any): PassiveSkillInfo {
    return {
      Uuid: isSet(object.Uuid) ? globalThis.Number(object.Uuid) : undefined,
      TargetUuid: isSet(object.TargetUuid) ? Long.fromValue(object.TargetUuid) : undefined,
      StageBeginTime: isSet(object.StageBeginTime) ? Long.fromValue(object.StageBeginTime) : undefined,
      BeginTime: isSet(object.BeginTime) ? Long.fromValue(object.BeginTime) : undefined,
      StagePlayNum: isSet(object.StagePlayNum) ? globalThis.Number(object.StagePlayNum) : undefined,
      SkillId: isSet(object.SkillId) ? globalThis.Number(object.SkillId) : undefined,
      SkillLevel: isSet(object.SkillLevel) ? globalThis.Number(object.SkillLevel) : undefined,
      SkillStage: isSet(object.SkillStage) ? globalThis.Number(object.SkillStage) : undefined,
    };
  },

  toJSON(message: PassiveSkillInfo): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = Math.round(message.Uuid);
    }
    if (message.TargetUuid !== undefined) {
      obj.TargetUuid = (message.TargetUuid || Long.ZERO).toString();
    }
    if (message.StageBeginTime !== undefined) {
      obj.StageBeginTime = (message.StageBeginTime || Long.ZERO).toString();
    }
    if (message.BeginTime !== undefined) {
      obj.BeginTime = (message.BeginTime || Long.ZERO).toString();
    }
    if (message.StagePlayNum !== undefined) {
      obj.StagePlayNum = Math.round(message.StagePlayNum);
    }
    if (message.SkillId !== undefined) {
      obj.SkillId = Math.round(message.SkillId);
    }
    if (message.SkillLevel !== undefined) {
      obj.SkillLevel = Math.round(message.SkillLevel);
    }
    if (message.SkillStage !== undefined) {
      obj.SkillStage = Math.round(message.SkillStage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PassiveSkillInfo>, I>>(base?: I): PassiveSkillInfo {
    return PassiveSkillInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PassiveSkillInfo>, I>>(object: I): PassiveSkillInfo {
    const message = createBasePassiveSkillInfo();
    message.Uuid = object.Uuid ?? undefined;
    message.TargetUuid = (object.TargetUuid !== undefined && object.TargetUuid !== null)
      ? Long.fromValue(object.TargetUuid)
      : undefined;
    message.StageBeginTime = (object.StageBeginTime !== undefined && object.StageBeginTime !== null)
      ? Long.fromValue(object.StageBeginTime)
      : undefined;
    message.BeginTime = (object.BeginTime !== undefined && object.BeginTime !== null)
      ? Long.fromValue(object.BeginTime)
      : undefined;
    message.StagePlayNum = object.StagePlayNum ?? undefined;
    message.SkillId = object.SkillId ?? undefined;
    message.SkillLevel = object.SkillLevel ?? undefined;
    message.SkillStage = object.SkillStage ?? undefined;
    return message;
  },
};

function createBaseSeqPassiveSkillInfo(): SeqPassiveSkillInfo {
  return { ActorUuid: undefined, PassiveInfos: [] };
}

export const SeqPassiveSkillInfo: MessageFns<SeqPassiveSkillInfo> = {
  encode(message: SeqPassiveSkillInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.ActorUuid !== undefined) {
      writer.uint32(8).int64(message.ActorUuid.toString());
    }
    for (const v of message.PassiveInfos) {
      PassiveSkillInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeqPassiveSkillInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeqPassiveSkillInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.ActorUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.PassiveInfos.push(PassiveSkillInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SeqPassiveSkillInfo {
    return {
      ActorUuid: isSet(object.ActorUuid) ? Long.fromValue(object.ActorUuid) : undefined,
      PassiveInfos: globalThis.Array.isArray(object?.PassiveInfos)
        ? object.PassiveInfos.map((e: any) => PassiveSkillInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SeqPassiveSkillInfo): unknown {
    const obj: any = {};
    if (message.ActorUuid !== undefined) {
      obj.ActorUuid = (message.ActorUuid || Long.ZERO).toString();
    }
    if (message.PassiveInfos?.length) {
      obj.PassiveInfos = message.PassiveInfos.map((e) => PassiveSkillInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeqPassiveSkillInfo>, I>>(base?: I): SeqPassiveSkillInfo {
    return SeqPassiveSkillInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeqPassiveSkillInfo>, I>>(object: I): SeqPassiveSkillInfo {
    const message = createBaseSeqPassiveSkillInfo();
    message.ActorUuid = (object.ActorUuid !== undefined && object.ActorUuid !== null)
      ? Long.fromValue(object.ActorUuid)
      : undefined;
    message.PassiveInfos = object.PassiveInfos?.map((e) => PassiveSkillInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSeqPassiveSkillEndInfo(): SeqPassiveSkillEndInfo {
  return { ActorUuid: undefined, Uuids: [] };
}

export const SeqPassiveSkillEndInfo: MessageFns<SeqPassiveSkillEndInfo> = {
  encode(message: SeqPassiveSkillEndInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.ActorUuid !== undefined) {
      writer.uint32(8).int64(message.ActorUuid.toString());
    }
    writer.uint32(18).fork();
    for (const v of message.Uuids) {
      writer.int64(v.toString());
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeqPassiveSkillEndInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeqPassiveSkillEndInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.ActorUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.Uuids.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.Uuids.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SeqPassiveSkillEndInfo {
    return {
      ActorUuid: isSet(object.ActorUuid) ? Long.fromValue(object.ActorUuid) : undefined,
      Uuids: globalThis.Array.isArray(object?.Uuids) ? object.Uuids.map((e: any) => Long.fromValue(e)) : [],
    };
  },

  toJSON(message: SeqPassiveSkillEndInfo): unknown {
    const obj: any = {};
    if (message.ActorUuid !== undefined) {
      obj.ActorUuid = (message.ActorUuid || Long.ZERO).toString();
    }
    if (message.Uuids?.length) {
      obj.Uuids = message.Uuids.map((e) => (e || Long.ZERO).toString());
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeqPassiveSkillEndInfo>, I>>(base?: I): SeqPassiveSkillEndInfo {
    return SeqPassiveSkillEndInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeqPassiveSkillEndInfo>, I>>(object: I): SeqPassiveSkillEndInfo {
    const message = createBaseSeqPassiveSkillEndInfo();
    message.ActorUuid = (object.ActorUuid !== undefined && object.ActorUuid !== null)
      ? Long.fromValue(object.ActorUuid)
      : undefined;
    message.Uuids = object.Uuids?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseBuffInfoSync(): BuffInfoSync {
  return { Uuid: undefined, BuffInfos: [] };
}

export const BuffInfoSync: MessageFns<BuffInfoSync> = {
  encode(message: BuffInfoSync, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    for (const v of message.BuffInfos) {
      BuffInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffInfoSync {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffInfoSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.BuffInfos.push(BuffInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BuffInfoSync {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      BuffInfos: globalThis.Array.isArray(object?.BuffInfos)
        ? object.BuffInfos.map((e: any) => BuffInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BuffInfoSync): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.BuffInfos?.length) {
      obj.BuffInfos = message.BuffInfos.map((e) => BuffInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffInfoSync>, I>>(base?: I): BuffInfoSync {
    return BuffInfoSync.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffInfoSync>, I>>(object: I): BuffInfoSync {
    const message = createBaseBuffInfoSync();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.BuffInfos = object.BuffInfos?.map((e) => BuffInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBuffInfo(): BuffInfo {
  return {
    BuffUuid: undefined,
    BaseId: undefined,
    Level: undefined,
    HostUuid: undefined,
    TableUuid: undefined,
    CreateTime: undefined,
    FireUuid: undefined,
    Layer: undefined,
    PartId: undefined,
    Count: undefined,
    Duration: undefined,
    FightSourceInfo: undefined,
    LogicEffect: undefined,
  };
}

export const BuffInfo: MessageFns<BuffInfo> = {
  encode(message: BuffInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.BuffUuid !== undefined) {
      writer.uint32(8).int32(message.BuffUuid);
    }
    if (message.BaseId !== undefined) {
      writer.uint32(16).int32(message.BaseId);
    }
    if (message.Level !== undefined) {
      writer.uint32(24).int32(message.Level);
    }
    if (message.HostUuid !== undefined) {
      writer.uint32(32).int64(message.HostUuid.toString());
    }
    if (message.TableUuid !== undefined) {
      writer.uint32(40).int32(message.TableUuid);
    }
    if (message.CreateTime !== undefined) {
      writer.uint32(48).int64(message.CreateTime.toString());
    }
    if (message.FireUuid !== undefined) {
      writer.uint32(56).int64(message.FireUuid.toString());
    }
    if (message.Layer !== undefined) {
      writer.uint32(64).int32(message.Layer);
    }
    if (message.PartId !== undefined) {
      writer.uint32(72).int32(message.PartId);
    }
    if (message.Count !== undefined) {
      writer.uint32(80).int32(message.Count);
    }
    if (message.Duration !== undefined) {
      writer.uint32(88).int32(message.Duration);
    }
    if (message.FightSourceInfo !== undefined) {
      FightSourceInfo.encode(message.FightSourceInfo, writer.uint32(98).fork()).join();
    }
    if (message.LogicEffect !== undefined) {
      BuffEffectLogicInfo.encode(message.LogicEffect, writer.uint32(106).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.BuffUuid = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.BaseId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.Level = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.HostUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.TableUuid = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.CreateTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.FireUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.Layer = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.PartId = reader.int32();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.Count = reader.int32();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.Duration = reader.int32();
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.FightSourceInfo = FightSourceInfo.decode(reader, reader.uint32());
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.LogicEffect = BuffEffectLogicInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): BuffInfo {
    return {
      BuffUuid: isSet(object.BuffUuid) ? globalThis.Number(object.BuffUuid) : undefined,
      BaseId: isSet(object.BaseId) ? globalThis.Number(object.BaseId) : undefined,
      Level: isSet(object.Level) ? globalThis.Number(object.Level) : undefined,
      HostUuid: isSet(object.HostUuid) ? Long.fromValue(object.HostUuid) : undefined,
      TableUuid: isSet(object.TableUuid) ? globalThis.Number(object.TableUuid) : undefined,
      CreateTime: isSet(object.CreateTime) ? Long.fromValue(object.CreateTime) : undefined,
      FireUuid: isSet(object.FireUuid) ? Long.fromValue(object.FireUuid) : undefined,
      Layer: isSet(object.Layer) ? globalThis.Number(object.Layer) : undefined,
      PartId: isSet(object.PartId) ? globalThis.Number(object.PartId) : undefined,
      Count: isSet(object.Count) ? globalThis.Number(object.Count) : undefined,
      Duration: isSet(object.Duration) ? globalThis.Number(object.Duration) : undefined,
      FightSourceInfo: isSet(object.FightSourceInfo) ? FightSourceInfo.fromJSON(object.FightSourceInfo) : undefined,
      LogicEffect: isSet(object.LogicEffect) ? BuffEffectLogicInfo.fromJSON(object.LogicEffect) : undefined,
    };
  },

  toJSON(message: BuffInfo): unknown {
    const obj: any = {};
    if (message.BuffUuid !== undefined) {
      obj.BuffUuid = Math.round(message.BuffUuid);
    }
    if (message.BaseId !== undefined) {
      obj.BaseId = Math.round(message.BaseId);
    }
    if (message.Level !== undefined) {
      obj.Level = Math.round(message.Level);
    }
    if (message.HostUuid !== undefined) {
      obj.HostUuid = (message.HostUuid || Long.ZERO).toString();
    }
    if (message.TableUuid !== undefined) {
      obj.TableUuid = Math.round(message.TableUuid);
    }
    if (message.CreateTime !== undefined) {
      obj.CreateTime = (message.CreateTime || Long.ZERO).toString();
    }
    if (message.FireUuid !== undefined) {
      obj.FireUuid = (message.FireUuid || Long.ZERO).toString();
    }
    if (message.Layer !== undefined) {
      obj.Layer = Math.round(message.Layer);
    }
    if (message.PartId !== undefined) {
      obj.PartId = Math.round(message.PartId);
    }
    if (message.Count !== undefined) {
      obj.Count = Math.round(message.Count);
    }
    if (message.Duration !== undefined) {
      obj.Duration = Math.round(message.Duration);
    }
    if (message.FightSourceInfo !== undefined) {
      obj.FightSourceInfo = FightSourceInfo.toJSON(message.FightSourceInfo);
    }
    if (message.LogicEffect !== undefined) {
      obj.LogicEffect = BuffEffectLogicInfo.toJSON(message.LogicEffect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffInfo>, I>>(base?: I): BuffInfo {
    return BuffInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffInfo>, I>>(object: I): BuffInfo {
    const message = createBaseBuffInfo();
    message.BuffUuid = object.BuffUuid ?? undefined;
    message.BaseId = object.BaseId ?? undefined;
    message.Level = object.Level ?? undefined;
    message.HostUuid = (object.HostUuid !== undefined && object.HostUuid !== null)
      ? Long.fromValue(object.HostUuid)
      : undefined;
    message.TableUuid = object.TableUuid ?? undefined;
    message.CreateTime = (object.CreateTime !== undefined && object.CreateTime !== null)
      ? Long.fromValue(object.CreateTime)
      : undefined;
    message.FireUuid = (object.FireUuid !== undefined && object.FireUuid !== null)
      ? Long.fromValue(object.FireUuid)
      : undefined;
    message.Layer = object.Layer ?? undefined;
    message.PartId = object.PartId ?? undefined;
    message.Count = object.Count ?? undefined;
    message.Duration = object.Duration ?? undefined;
    message.FightSourceInfo = (object.FightSourceInfo !== undefined && object.FightSourceInfo !== null)
      ? FightSourceInfo.fromPartial(object.FightSourceInfo)
      : undefined;
    message.LogicEffect = (object.LogicEffect !== undefined && object.LogicEffect !== null)
      ? BuffEffectLogicInfo.fromPartial(object.LogicEffect)
      : undefined;
    return message;
  },
};

function createBaseBuffEffectLogicInfo(): BuffEffectLogicInfo {
  return { EffectType: undefined, RawData: undefined, IsLoop: undefined };
}

export const BuffEffectLogicInfo: MessageFns<BuffEffectLogicInfo> = {
  encode(message: BuffEffectLogicInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.EffectType !== undefined) {
      writer.uint32(8).int32(message.EffectType);
    }
    if (message.RawData !== undefined) {
      writer.uint32(18).bytes(message.RawData);
    }
    if (message.IsLoop !== undefined) {
      writer.uint32(24).bool(message.IsLoop);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffEffectLogicInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffEffectLogicInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.EffectType = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.RawData = reader.bytes();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.IsLoop = reader.bool();
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

  fromJSON(object: any): BuffEffectLogicInfo {
    return {
      EffectType: isSet(object.EffectType) ? eBuffEffectLogicPbTypeFromJSON(object.EffectType) : undefined,
      RawData: isSet(object.RawData) ? bytesFromBase64(object.RawData) : undefined,
      IsLoop: isSet(object.IsLoop) ? globalThis.Boolean(object.IsLoop) : undefined,
    };
  },

  toJSON(message: BuffEffectLogicInfo): unknown {
    const obj: any = {};
    if (message.EffectType !== undefined) {
      obj.EffectType = eBuffEffectLogicPbTypeToJSON(message.EffectType);
    }
    if (message.RawData !== undefined) {
      obj.RawData = base64FromBytes(message.RawData);
    }
    if (message.IsLoop !== undefined) {
      obj.IsLoop = message.IsLoop;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffEffectLogicInfo>, I>>(base?: I): BuffEffectLogicInfo {
    return BuffEffectLogicInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffEffectLogicInfo>, I>>(object: I): BuffEffectLogicInfo {
    const message = createBaseBuffEffectLogicInfo();
    message.EffectType = object.EffectType ?? undefined;
    message.RawData = object.RawData ?? undefined;
    message.IsLoop = object.IsLoop ?? undefined;
    return message;
  },
};

function createBaseClientHitPartInfo(): ClientHitPartInfo {
  return { PartId: undefined, DamagePos: undefined, DamageVal: undefined };
}

export const ClientHitPartInfo: MessageFns<ClientHitPartInfo> = {
  encode(message: ClientHitPartInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.PartId !== undefined) {
      writer.uint32(8).int32(message.PartId);
    }
    if (message.DamagePos !== undefined) {
      vector3.encode(message.DamagePos, writer.uint32(18).fork()).join();
    }
    if (message.DamageVal !== undefined) {
      writer.uint32(24).int64(message.DamageVal.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ClientHitPartInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientHitPartInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.PartId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.DamagePos = vector3.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.DamageVal = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): ClientHitPartInfo {
    return {
      PartId: isSet(object.PartId) ? globalThis.Number(object.PartId) : undefined,
      DamagePos: isSet(object.DamagePos) ? vector3.fromJSON(object.DamagePos) : undefined,
      DamageVal: isSet(object.DamageVal) ? Long.fromValue(object.DamageVal) : undefined,
    };
  },

  toJSON(message: ClientHitPartInfo): unknown {
    const obj: any = {};
    if (message.PartId !== undefined) {
      obj.PartId = Math.round(message.PartId);
    }
    if (message.DamagePos !== undefined) {
      obj.DamagePos = vector3.toJSON(message.DamagePos);
    }
    if (message.DamageVal !== undefined) {
      obj.DamageVal = (message.DamageVal || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientHitPartInfo>, I>>(base?: I): ClientHitPartInfo {
    return ClientHitPartInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientHitPartInfo>, I>>(object: I): ClientHitPartInfo {
    const message = createBaseClientHitPartInfo();
    message.PartId = object.PartId ?? undefined;
    message.DamagePos = (object.DamagePos !== undefined && object.DamagePos !== null)
      ? vector3.fromPartial(object.DamagePos)
      : undefined;
    message.DamageVal = (object.DamageVal !== undefined && object.DamageVal !== null)
      ? Long.fromValue(object.DamageVal)
      : undefined;
    return message;
  },
};

function createBaseSyncDamageInfo(): SyncDamageInfo {
  return {
    DamageSource: undefined,
    IsMiss: undefined,
    IsCrit: undefined,
    Type: undefined,
    TypeFlag: undefined,
    Value: undefined,
    ActualValue: undefined,
    LuckyValue: undefined,
    HpLessenValue: undefined,
    ShieldLessenValue: undefined,
    AttackerUuid: undefined,
    OwnerId: undefined,
    OwnerLevel: undefined,
    OwnerStage: undefined,
    HitEventId: undefined,
    IsNormal: undefined,
    IsDead: undefined,
    Property: undefined,
    DamagePos: undefined,
    PartInfos: [],
    TopSummonerId: undefined,
    DamageWeight: undefined,
    PassiveUuid: undefined,
    IsRainbow: undefined,
    DamageMode: undefined,
  };
}

export const SyncDamageInfo: MessageFns<SyncDamageInfo> = {
  encode(message: SyncDamageInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.DamageSource !== undefined) {
      writer.uint32(8).int32(message.DamageSource);
    }
    if (message.IsMiss !== undefined) {
      writer.uint32(16).bool(message.IsMiss);
    }
    if (message.IsCrit !== undefined) {
      writer.uint32(24).bool(message.IsCrit);
    }
    if (message.Type !== undefined) {
      writer.uint32(32).int32(message.Type);
    }
    if (message.TypeFlag !== undefined) {
      writer.uint32(40).int32(message.TypeFlag);
    }
    if (message.Value !== undefined) {
      writer.uint32(48).int64(message.Value.toString());
    }
    if (message.ActualValue !== undefined) {
      writer.uint32(56).int64(message.ActualValue.toString());
    }
    if (message.LuckyValue !== undefined) {
      writer.uint32(64).int64(message.LuckyValue.toString());
    }
    if (message.HpLessenValue !== undefined) {
      writer.uint32(72).int64(message.HpLessenValue.toString());
    }
    if (message.ShieldLessenValue !== undefined) {
      writer.uint32(80).int64(message.ShieldLessenValue.toString());
    }
    if (message.AttackerUuid !== undefined) {
      writer.uint32(88).int64(message.AttackerUuid.toString());
    }
    if (message.OwnerId !== undefined) {
      writer.uint32(96).int32(message.OwnerId);
    }
    if (message.OwnerLevel !== undefined) {
      writer.uint32(104).int32(message.OwnerLevel);
    }
    if (message.OwnerStage !== undefined) {
      writer.uint32(112).int32(message.OwnerStage);
    }
    if (message.HitEventId !== undefined) {
      writer.uint32(120).int32(message.HitEventId);
    }
    if (message.IsNormal !== undefined) {
      writer.uint32(128).bool(message.IsNormal);
    }
    if (message.IsDead !== undefined) {
      writer.uint32(136).bool(message.IsDead);
    }
    if (message.Property !== undefined) {
      writer.uint32(144).int32(message.Property);
    }
    if (message.DamagePos !== undefined) {
      vector3.encode(message.DamagePos, writer.uint32(154).fork()).join();
    }
    for (const v of message.PartInfos) {
      ClientHitPartInfo.encode(v!, writer.uint32(162).fork()).join();
    }
    if (message.TopSummonerId !== undefined) {
      writer.uint32(168).int64(message.TopSummonerId.toString());
    }
    if (message.DamageWeight !== undefined) {
      vector2.encode(message.DamageWeight, writer.uint32(178).fork()).join();
    }
    if (message.PassiveUuid !== undefined) {
      writer.uint32(184).uint32(message.PassiveUuid);
    }
    if (message.IsRainbow !== undefined) {
      writer.uint32(192).bool(message.IsRainbow);
    }
    if (message.DamageMode !== undefined) {
      writer.uint32(200).int32(message.DamageMode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncDamageInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncDamageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.DamageSource = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.IsMiss = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.IsCrit = reader.bool();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.Type = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.TypeFlag = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.Value = Long.fromString(reader.int64().toString());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.ActualValue = Long.fromString(reader.int64().toString());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.LuckyValue = Long.fromString(reader.int64().toString());
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.HpLessenValue = Long.fromString(reader.int64().toString());
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.ShieldLessenValue = Long.fromString(reader.int64().toString());
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.AttackerUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.OwnerId = reader.int32();
          continue;
        }
        case 13: {
          if (tag !== 104) {
            break;
          }

          message.OwnerLevel = reader.int32();
          continue;
        }
        case 14: {
          if (tag !== 112) {
            break;
          }

          message.OwnerStage = reader.int32();
          continue;
        }
        case 15: {
          if (tag !== 120) {
            break;
          }

          message.HitEventId = reader.int32();
          continue;
        }
        case 16: {
          if (tag !== 128) {
            break;
          }

          message.IsNormal = reader.bool();
          continue;
        }
        case 17: {
          if (tag !== 136) {
            break;
          }

          message.IsDead = reader.bool();
          continue;
        }
        case 18: {
          if (tag !== 144) {
            break;
          }

          message.Property = reader.int32() as any;
          continue;
        }
        case 19: {
          if (tag !== 154) {
            break;
          }

          message.DamagePos = vector3.decode(reader, reader.uint32());
          continue;
        }
        case 20: {
          if (tag !== 162) {
            break;
          }

          message.PartInfos.push(ClientHitPartInfo.decode(reader, reader.uint32()));
          continue;
        }
        case 21: {
          if (tag !== 168) {
            break;
          }

          message.TopSummonerId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 22: {
          if (tag !== 178) {
            break;
          }

          message.DamageWeight = vector2.decode(reader, reader.uint32());
          continue;
        }
        case 23: {
          if (tag !== 184) {
            break;
          }

          message.PassiveUuid = reader.uint32();
          continue;
        }
        case 24: {
          if (tag !== 192) {
            break;
          }

          message.IsRainbow = reader.bool();
          continue;
        }
        case 25: {
          if (tag !== 200) {
            break;
          }

          message.DamageMode = reader.int32() as any;
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

  fromJSON(object: any): SyncDamageInfo {
    return {
      DamageSource: isSet(object.DamageSource) ? eDamageSourceFromJSON(object.DamageSource) : undefined,
      IsMiss: isSet(object.IsMiss) ? globalThis.Boolean(object.IsMiss) : undefined,
      IsCrit: isSet(object.IsCrit) ? globalThis.Boolean(object.IsCrit) : undefined,
      Type: isSet(object.Type) ? eDamageTypeFromJSON(object.Type) : undefined,
      TypeFlag: isSet(object.TypeFlag) ? globalThis.Number(object.TypeFlag) : undefined,
      Value: isSet(object.Value) ? Long.fromValue(object.Value) : undefined,
      ActualValue: isSet(object.ActualValue) ? Long.fromValue(object.ActualValue) : undefined,
      LuckyValue: isSet(object.LuckyValue) ? Long.fromValue(object.LuckyValue) : undefined,
      HpLessenValue: isSet(object.HpLessenValue) ? Long.fromValue(object.HpLessenValue) : undefined,
      ShieldLessenValue: isSet(object.ShieldLessenValue) ? Long.fromValue(object.ShieldLessenValue) : undefined,
      AttackerUuid: isSet(object.AttackerUuid) ? Long.fromValue(object.AttackerUuid) : undefined,
      OwnerId: isSet(object.OwnerId) ? globalThis.Number(object.OwnerId) : undefined,
      OwnerLevel: isSet(object.OwnerLevel) ? globalThis.Number(object.OwnerLevel) : undefined,
      OwnerStage: isSet(object.OwnerStage) ? globalThis.Number(object.OwnerStage) : undefined,
      HitEventId: isSet(object.HitEventId) ? globalThis.Number(object.HitEventId) : undefined,
      IsNormal: isSet(object.IsNormal) ? globalThis.Boolean(object.IsNormal) : undefined,
      IsDead: isSet(object.IsDead) ? globalThis.Boolean(object.IsDead) : undefined,
      Property: isSet(object.Property) ? eDamagePropertyFromJSON(object.Property) : undefined,
      DamagePos: isSet(object.DamagePos) ? vector3.fromJSON(object.DamagePos) : undefined,
      PartInfos: globalThis.Array.isArray(object?.PartInfos)
        ? object.PartInfos.map((e: any) => ClientHitPartInfo.fromJSON(e))
        : [],
      TopSummonerId: isSet(object.TopSummonerId) ? Long.fromValue(object.TopSummonerId) : undefined,
      DamageWeight: isSet(object.DamageWeight) ? vector2.fromJSON(object.DamageWeight) : undefined,
      PassiveUuid: isSet(object.PassiveUuid) ? globalThis.Number(object.PassiveUuid) : undefined,
      IsRainbow: isSet(object.IsRainbow) ? globalThis.Boolean(object.IsRainbow) : undefined,
      DamageMode: isSet(object.DamageMode) ? eDamageModeFromJSON(object.DamageMode) : undefined,
    };
  },

  toJSON(message: SyncDamageInfo): unknown {
    const obj: any = {};
    if (message.DamageSource !== undefined) {
      obj.DamageSource = eDamageSourceToJSON(message.DamageSource);
    }
    if (message.IsMiss !== undefined) {
      obj.IsMiss = message.IsMiss;
    }
    if (message.IsCrit !== undefined) {
      obj.IsCrit = message.IsCrit;
    }
    if (message.Type !== undefined) {
      obj.Type = eDamageTypeToJSON(message.Type);
    }
    if (message.TypeFlag !== undefined) {
      obj.TypeFlag = Math.round(message.TypeFlag);
    }
    if (message.Value !== undefined) {
      obj.Value = (message.Value || Long.ZERO).toString();
    }
    if (message.ActualValue !== undefined) {
      obj.ActualValue = (message.ActualValue || Long.ZERO).toString();
    }
    if (message.LuckyValue !== undefined) {
      obj.LuckyValue = (message.LuckyValue || Long.ZERO).toString();
    }
    if (message.HpLessenValue !== undefined) {
      obj.HpLessenValue = (message.HpLessenValue || Long.ZERO).toString();
    }
    if (message.ShieldLessenValue !== undefined) {
      obj.ShieldLessenValue = (message.ShieldLessenValue || Long.ZERO).toString();
    }
    if (message.AttackerUuid !== undefined) {
      obj.AttackerUuid = (message.AttackerUuid || Long.ZERO).toString();
    }
    if (message.OwnerId !== undefined) {
      obj.OwnerId = Math.round(message.OwnerId);
    }
    if (message.OwnerLevel !== undefined) {
      obj.OwnerLevel = Math.round(message.OwnerLevel);
    }
    if (message.OwnerStage !== undefined) {
      obj.OwnerStage = Math.round(message.OwnerStage);
    }
    if (message.HitEventId !== undefined) {
      obj.HitEventId = Math.round(message.HitEventId);
    }
    if (message.IsNormal !== undefined) {
      obj.IsNormal = message.IsNormal;
    }
    if (message.IsDead !== undefined) {
      obj.IsDead = message.IsDead;
    }
    if (message.Property !== undefined) {
      obj.Property = eDamagePropertyToJSON(message.Property);
    }
    if (message.DamagePos !== undefined) {
      obj.DamagePos = vector3.toJSON(message.DamagePos);
    }
    if (message.PartInfos?.length) {
      obj.PartInfos = message.PartInfos.map((e) => ClientHitPartInfo.toJSON(e));
    }
    if (message.TopSummonerId !== undefined) {
      obj.TopSummonerId = (message.TopSummonerId || Long.ZERO).toString();
    }
    if (message.DamageWeight !== undefined) {
      obj.DamageWeight = vector2.toJSON(message.DamageWeight);
    }
    if (message.PassiveUuid !== undefined) {
      obj.PassiveUuid = Math.round(message.PassiveUuid);
    }
    if (message.IsRainbow !== undefined) {
      obj.IsRainbow = message.IsRainbow;
    }
    if (message.DamageMode !== undefined) {
      obj.DamageMode = eDamageModeToJSON(message.DamageMode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncDamageInfo>, I>>(base?: I): SyncDamageInfo {
    return SyncDamageInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncDamageInfo>, I>>(object: I): SyncDamageInfo {
    const message = createBaseSyncDamageInfo();
    message.DamageSource = object.DamageSource ?? undefined;
    message.IsMiss = object.IsMiss ?? undefined;
    message.IsCrit = object.IsCrit ?? undefined;
    message.Type = object.Type ?? undefined;
    message.TypeFlag = object.TypeFlag ?? undefined;
    message.Value = (object.Value !== undefined && object.Value !== null) ? Long.fromValue(object.Value) : undefined;
    message.ActualValue = (object.ActualValue !== undefined && object.ActualValue !== null)
      ? Long.fromValue(object.ActualValue)
      : undefined;
    message.LuckyValue = (object.LuckyValue !== undefined && object.LuckyValue !== null)
      ? Long.fromValue(object.LuckyValue)
      : undefined;
    message.HpLessenValue = (object.HpLessenValue !== undefined && object.HpLessenValue !== null)
      ? Long.fromValue(object.HpLessenValue)
      : undefined;
    message.ShieldLessenValue = (object.ShieldLessenValue !== undefined && object.ShieldLessenValue !== null)
      ? Long.fromValue(object.ShieldLessenValue)
      : undefined;
    message.AttackerUuid = (object.AttackerUuid !== undefined && object.AttackerUuid !== null)
      ? Long.fromValue(object.AttackerUuid)
      : undefined;
    message.OwnerId = object.OwnerId ?? undefined;
    message.OwnerLevel = object.OwnerLevel ?? undefined;
    message.OwnerStage = object.OwnerStage ?? undefined;
    message.HitEventId = object.HitEventId ?? undefined;
    message.IsNormal = object.IsNormal ?? undefined;
    message.IsDead = object.IsDead ?? undefined;
    message.Property = object.Property ?? undefined;
    message.DamagePos = (object.DamagePos !== undefined && object.DamagePos !== null)
      ? vector3.fromPartial(object.DamagePos)
      : undefined;
    message.PartInfos = object.PartInfos?.map((e) => ClientHitPartInfo.fromPartial(e)) || [];
    message.TopSummonerId = (object.TopSummonerId !== undefined && object.TopSummonerId !== null)
      ? Long.fromValue(object.TopSummonerId)
      : undefined;
    message.DamageWeight = (object.DamageWeight !== undefined && object.DamageWeight !== null)
      ? vector2.fromPartial(object.DamageWeight)
      : undefined;
    message.PassiveUuid = object.PassiveUuid ?? undefined;
    message.IsRainbow = object.IsRainbow ?? undefined;
    message.DamageMode = object.DamageMode ?? undefined;
    return message;
  },
};

function createBaseSkillEffect(): SkillEffect {
  return { Uuid: undefined, Damages: [], TotalDamage: undefined };
}

export const SkillEffect: MessageFns<SkillEffect> = {
  encode(message: SkillEffect, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    for (const v of message.Damages) {
      SyncDamageInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.TotalDamage !== undefined) {
      writer.uint32(24).int64(message.TotalDamage.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SkillEffect {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Damages.push(SyncDamageInfo.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.TotalDamage = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): SkillEffect {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      Damages: globalThis.Array.isArray(object?.Damages)
        ? object.Damages.map((e: any) => SyncDamageInfo.fromJSON(e))
        : [],
      TotalDamage: isSet(object.TotalDamage) ? Long.fromValue(object.TotalDamage) : undefined,
    };
  },

  toJSON(message: SkillEffect): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.Damages?.length) {
      obj.Damages = message.Damages.map((e) => SyncDamageInfo.toJSON(e));
    }
    if (message.TotalDamage !== undefined) {
      obj.TotalDamage = (message.TotalDamage || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillEffect>, I>>(base?: I): SkillEffect {
    return SkillEffect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SkillEffect>, I>>(object: I): SkillEffect {
    const message = createBaseSkillEffect();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.Damages = object.Damages?.map((e) => SyncDamageInfo.fromPartial(e)) || [];
    message.TotalDamage = (object.TotalDamage !== undefined && object.TotalDamage !== null)
      ? Long.fromValue(object.TotalDamage)
      : undefined;
    return message;
  },
};

function createBaseBuffEffect(): BuffEffect {
  return { Type: undefined, BuffUuid: undefined, HostUuid: undefined, TriggerTime: undefined, LogicEffect: [] };
}

export const BuffEffect: MessageFns<BuffEffect> = {
  encode(message: BuffEffect, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Type !== undefined) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.BuffUuid !== undefined) {
      writer.uint32(16).int32(message.BuffUuid);
    }
    if (message.HostUuid !== undefined) {
      writer.uint32(24).int64(message.HostUuid.toString());
    }
    if (message.TriggerTime !== undefined) {
      writer.uint32(32).int64(message.TriggerTime.toString());
    }
    for (const v of message.LogicEffect) {
      BuffEffectLogicInfo.encode(v!, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffEffect {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Type = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.BuffUuid = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.HostUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.TriggerTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.LogicEffect.push(BuffEffectLogicInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BuffEffect {
    return {
      Type: isSet(object.Type) ? eBuffEventTypeFromJSON(object.Type) : undefined,
      BuffUuid: isSet(object.BuffUuid) ? globalThis.Number(object.BuffUuid) : undefined,
      HostUuid: isSet(object.HostUuid) ? Long.fromValue(object.HostUuid) : undefined,
      TriggerTime: isSet(object.TriggerTime) ? Long.fromValue(object.TriggerTime) : undefined,
      LogicEffect: globalThis.Array.isArray(object?.LogicEffect)
        ? object.LogicEffect.map((e: any) => BuffEffectLogicInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BuffEffect): unknown {
    const obj: any = {};
    if (message.Type !== undefined) {
      obj.Type = eBuffEventTypeToJSON(message.Type);
    }
    if (message.BuffUuid !== undefined) {
      obj.BuffUuid = Math.round(message.BuffUuid);
    }
    if (message.HostUuid !== undefined) {
      obj.HostUuid = (message.HostUuid || Long.ZERO).toString();
    }
    if (message.TriggerTime !== undefined) {
      obj.TriggerTime = (message.TriggerTime || Long.ZERO).toString();
    }
    if (message.LogicEffect?.length) {
      obj.LogicEffect = message.LogicEffect.map((e) => BuffEffectLogicInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffEffect>, I>>(base?: I): BuffEffect {
    return BuffEffect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffEffect>, I>>(object: I): BuffEffect {
    const message = createBaseBuffEffect();
    message.Type = object.Type ?? undefined;
    message.BuffUuid = object.BuffUuid ?? undefined;
    message.HostUuid = (object.HostUuid !== undefined && object.HostUuid !== null)
      ? Long.fromValue(object.HostUuid)
      : undefined;
    message.TriggerTime = (object.TriggerTime !== undefined && object.TriggerTime !== null)
      ? Long.fromValue(object.TriggerTime)
      : undefined;
    message.LogicEffect = object.LogicEffect?.map((e) => BuffEffectLogicInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBuffEffectSync(): BuffEffectSync {
  return { Uuid: undefined, BuffEffects: [] };
}

export const BuffEffectSync: MessageFns<BuffEffectSync> = {
  encode(message: BuffEffectSync, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    for (const v of message.BuffEffects) {
      BuffEffect.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffEffectSync {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffEffectSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.BuffEffects.push(BuffEffect.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BuffEffectSync {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      BuffEffects: globalThis.Array.isArray(object?.BuffEffects)
        ? object.BuffEffects.map((e: any) => BuffEffect.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BuffEffectSync): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.BuffEffects?.length) {
      obj.BuffEffects = message.BuffEffects.map((e) => BuffEffect.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffEffectSync>, I>>(base?: I): BuffEffectSync {
    return BuffEffectSync.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffEffectSync>, I>>(object: I): BuffEffectSync {
    const message = createBaseBuffEffectSync();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.BuffEffects = object.BuffEffects?.map((e) => BuffEffect.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFakeBulletInfo(): FakeBulletInfo {
  return {
    Uuid: undefined,
    BulletId: undefined,
    TargetId: undefined,
    PartId: undefined,
    Offset: undefined,
    Rotate: undefined,
    SkinId: undefined,
  };
}

export const FakeBulletInfo: MessageFns<FakeBulletInfo> = {
  encode(message: FakeBulletInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int32(message.Uuid);
    }
    if (message.BulletId !== undefined) {
      writer.uint32(16).int32(message.BulletId);
    }
    if (message.TargetId !== undefined) {
      writer.uint32(24).int64(message.TargetId.toString());
    }
    if (message.PartId !== undefined) {
      writer.uint32(32).int32(message.PartId);
    }
    if (message.Offset !== undefined) {
      vector3.encode(message.Offset, writer.uint32(42).fork()).join();
    }
    if (message.Rotate !== undefined) {
      vector3.encode(message.Rotate, writer.uint32(50).fork()).join();
    }
    if (message.SkinId !== undefined) {
      writer.uint32(56).int32(message.SkinId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FakeBulletInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFakeBulletInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.BulletId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.TargetId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.PartId = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.Offset = vector3.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.Rotate = vector3.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.SkinId = reader.int32();
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

  fromJSON(object: any): FakeBulletInfo {
    return {
      Uuid: isSet(object.Uuid) ? globalThis.Number(object.Uuid) : undefined,
      BulletId: isSet(object.BulletId) ? globalThis.Number(object.BulletId) : undefined,
      TargetId: isSet(object.TargetId) ? Long.fromValue(object.TargetId) : undefined,
      PartId: isSet(object.PartId) ? globalThis.Number(object.PartId) : undefined,
      Offset: isSet(object.Offset) ? vector3.fromJSON(object.Offset) : undefined,
      Rotate: isSet(object.Rotate) ? vector3.fromJSON(object.Rotate) : undefined,
      SkinId: isSet(object.SkinId) ? globalThis.Number(object.SkinId) : undefined,
    };
  },

  toJSON(message: FakeBulletInfo): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = Math.round(message.Uuid);
    }
    if (message.BulletId !== undefined) {
      obj.BulletId = Math.round(message.BulletId);
    }
    if (message.TargetId !== undefined) {
      obj.TargetId = (message.TargetId || Long.ZERO).toString();
    }
    if (message.PartId !== undefined) {
      obj.PartId = Math.round(message.PartId);
    }
    if (message.Offset !== undefined) {
      obj.Offset = vector3.toJSON(message.Offset);
    }
    if (message.Rotate !== undefined) {
      obj.Rotate = vector3.toJSON(message.Rotate);
    }
    if (message.SkinId !== undefined) {
      obj.SkinId = Math.round(message.SkinId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FakeBulletInfo>, I>>(base?: I): FakeBulletInfo {
    return FakeBulletInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FakeBulletInfo>, I>>(object: I): FakeBulletInfo {
    const message = createBaseFakeBulletInfo();
    message.Uuid = object.Uuid ?? undefined;
    message.BulletId = object.BulletId ?? undefined;
    message.TargetId = (object.TargetId !== undefined && object.TargetId !== null)
      ? Long.fromValue(object.TargetId)
      : undefined;
    message.PartId = object.PartId ?? undefined;
    message.Offset = (object.Offset !== undefined && object.Offset !== null)
      ? vector3.fromPartial(object.Offset)
      : undefined;
    message.Rotate = (object.Rotate !== undefined && object.Rotate !== null)
      ? vector3.fromPartial(object.Rotate)
      : undefined;
    message.SkinId = object.SkinId ?? undefined;
    return message;
  },
};

function createBasePassengerChangeParam(): PassengerChangeParam {
  return { IsAddPassenger: undefined, AddOrRemoveUuid: undefined };
}

export const PassengerChangeParam: MessageFns<PassengerChangeParam> = {
  encode(message: PassengerChangeParam, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.IsAddPassenger !== undefined) {
      writer.uint32(8).bool(message.IsAddPassenger);
    }
    if (message.AddOrRemoveUuid !== undefined) {
      writer.uint32(16).int64(message.AddOrRemoveUuid.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PassengerChangeParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePassengerChangeParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.IsAddPassenger = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.AddOrRemoveUuid = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): PassengerChangeParam {
    return {
      IsAddPassenger: isSet(object.IsAddPassenger) ? globalThis.Boolean(object.IsAddPassenger) : undefined,
      AddOrRemoveUuid: isSet(object.AddOrRemoveUuid) ? Long.fromValue(object.AddOrRemoveUuid) : undefined,
    };
  },

  toJSON(message: PassengerChangeParam): unknown {
    const obj: any = {};
    if (message.IsAddPassenger !== undefined) {
      obj.IsAddPassenger = message.IsAddPassenger;
    }
    if (message.AddOrRemoveUuid !== undefined) {
      obj.AddOrRemoveUuid = (message.AddOrRemoveUuid || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PassengerChangeParam>, I>>(base?: I): PassengerChangeParam {
    return PassengerChangeParam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PassengerChangeParam>, I>>(object: I): PassengerChangeParam {
    const message = createBasePassengerChangeParam();
    message.IsAddPassenger = object.IsAddPassenger ?? undefined;
    message.AddOrRemoveUuid = (object.AddOrRemoveUuid !== undefined && object.AddOrRemoveUuid !== null)
      ? Long.fromValue(object.AddOrRemoveUuid)
      : undefined;
    return message;
  },
};

function createBaseMagneticRidePassengerChangeInfo(): MagneticRidePassengerChangeInfo {
  return { PassengerChangeList: [] };
}

export const MagneticRidePassengerChangeInfo: MessageFns<MagneticRidePassengerChangeInfo> = {
  encode(message: MagneticRidePassengerChangeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.PassengerChangeList) {
      PassengerChangeParam.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MagneticRidePassengerChangeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMagneticRidePassengerChangeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.PassengerChangeList.push(PassengerChangeParam.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MagneticRidePassengerChangeInfo {
    return {
      PassengerChangeList: globalThis.Array.isArray(object?.PassengerChangeList)
        ? object.PassengerChangeList.map((e: any) => PassengerChangeParam.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MagneticRidePassengerChangeInfo): unknown {
    const obj: any = {};
    if (message.PassengerChangeList?.length) {
      obj.PassengerChangeList = message.PassengerChangeList.map((e) => PassengerChangeParam.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MagneticRidePassengerChangeInfo>, I>>(base?: I): MagneticRidePassengerChangeInfo {
    return MagneticRidePassengerChangeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MagneticRidePassengerChangeInfo>, I>>(
    object: I,
  ): MagneticRidePassengerChangeInfo {
    const message = createBaseMagneticRidePassengerChangeInfo();
    message.PassengerChangeList = object.PassengerChangeList?.map((e) => PassengerChangeParam.fromPartial(e)) || [];
    return message;
  },
};

function createBasePathPointChangeParam(): PathPointChangeParam {
  return { Operation: undefined, AddPoint: undefined, RemovePointCount: undefined };
}

export const PathPointChangeParam: MessageFns<PathPointChangeParam> = {
  encode(message: PathPointChangeParam, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Operation !== undefined) {
      writer.uint32(8).int32(message.Operation);
    }
    if (message.AddPoint !== undefined) {
      Position.encode(message.AddPoint, writer.uint32(18).fork()).join();
    }
    if (message.RemovePointCount !== undefined) {
      writer.uint32(24).int32(message.RemovePointCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PathPointChangeParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePathPointChangeParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Operation = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.AddPoint = Position.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.RemovePointCount = reader.int32();
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

  fromJSON(object: any): PathPointChangeParam {
    return {
      Operation: isSet(object.Operation) ? globalThis.Number(object.Operation) : undefined,
      AddPoint: isSet(object.AddPoint) ? Position.fromJSON(object.AddPoint) : undefined,
      RemovePointCount: isSet(object.RemovePointCount) ? globalThis.Number(object.RemovePointCount) : undefined,
    };
  },

  toJSON(message: PathPointChangeParam): unknown {
    const obj: any = {};
    if (message.Operation !== undefined) {
      obj.Operation = Math.round(message.Operation);
    }
    if (message.AddPoint !== undefined) {
      obj.AddPoint = Position.toJSON(message.AddPoint);
    }
    if (message.RemovePointCount !== undefined) {
      obj.RemovePointCount = Math.round(message.RemovePointCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PathPointChangeParam>, I>>(base?: I): PathPointChangeParam {
    return PathPointChangeParam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PathPointChangeParam>, I>>(object: I): PathPointChangeParam {
    const message = createBasePathPointChangeParam();
    message.Operation = object.Operation ?? undefined;
    message.AddPoint = (object.AddPoint !== undefined && object.AddPoint !== null)
      ? Position.fromPartial(object.AddPoint)
      : undefined;
    message.RemovePointCount = object.RemovePointCount ?? undefined;
    return message;
  },
};

function createBaseMagneticRidePathPointChangeInfo(): MagneticRidePathPointChangeInfo {
  return { PathPointChangeList: [] };
}

export const MagneticRidePathPointChangeInfo: MessageFns<MagneticRidePathPointChangeInfo> = {
  encode(message: MagneticRidePathPointChangeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.PathPointChangeList) {
      PathPointChangeParam.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MagneticRidePathPointChangeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMagneticRidePathPointChangeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.PathPointChangeList.push(PathPointChangeParam.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MagneticRidePathPointChangeInfo {
    return {
      PathPointChangeList: globalThis.Array.isArray(object?.PathPointChangeList)
        ? object.PathPointChangeList.map((e: any) => PathPointChangeParam.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MagneticRidePathPointChangeInfo): unknown {
    const obj: any = {};
    if (message.PathPointChangeList?.length) {
      obj.PathPointChangeList = message.PathPointChangeList.map((e) => PathPointChangeParam.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MagneticRidePathPointChangeInfo>, I>>(base?: I): MagneticRidePathPointChangeInfo {
    return MagneticRidePathPointChangeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MagneticRidePathPointChangeInfo>, I>>(
    object: I,
  ): MagneticRidePathPointChangeInfo {
    const message = createBaseMagneticRidePathPointChangeInfo();
    message.PathPointChangeList = object.PathPointChangeList?.map((e) => PathPointChangeParam.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMagneticRideQueueChangeInfo(): MagneticRideQueueChangeInfo {
  return {
    QueueUuid: undefined,
    PassengerChangeInfo: undefined,
    PathPointChangeInfo: undefined,
    IsCircle: undefined,
    IsRemove: undefined,
    PathLength: undefined,
  };
}

export const MagneticRideQueueChangeInfo: MessageFns<MagneticRideQueueChangeInfo> = {
  encode(message: MagneticRideQueueChangeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.QueueUuid !== undefined) {
      writer.uint32(8).int64(message.QueueUuid.toString());
    }
    if (message.PassengerChangeInfo !== undefined) {
      MagneticRidePassengerChangeInfo.encode(message.PassengerChangeInfo, writer.uint32(18).fork()).join();
    }
    if (message.PathPointChangeInfo !== undefined) {
      MagneticRidePathPointChangeInfo.encode(message.PathPointChangeInfo, writer.uint32(26).fork()).join();
    }
    if (message.IsCircle !== undefined) {
      writer.uint32(32).bool(message.IsCircle);
    }
    if (message.IsRemove !== undefined) {
      writer.uint32(40).bool(message.IsRemove);
    }
    if (message.PathLength !== undefined) {
      writer.uint32(53).float(message.PathLength);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MagneticRideQueueChangeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMagneticRideQueueChangeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.QueueUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.PassengerChangeInfo = MagneticRidePassengerChangeInfo.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.PathPointChangeInfo = MagneticRidePathPointChangeInfo.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.IsCircle = reader.bool();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.IsRemove = reader.bool();
          continue;
        }
        case 6: {
          if (tag !== 53) {
            break;
          }

          message.PathLength = reader.float();
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

  fromJSON(object: any): MagneticRideQueueChangeInfo {
    return {
      QueueUuid: isSet(object.QueueUuid) ? Long.fromValue(object.QueueUuid) : undefined,
      PassengerChangeInfo: isSet(object.PassengerChangeInfo)
        ? MagneticRidePassengerChangeInfo.fromJSON(object.PassengerChangeInfo)
        : undefined,
      PathPointChangeInfo: isSet(object.PathPointChangeInfo)
        ? MagneticRidePathPointChangeInfo.fromJSON(object.PathPointChangeInfo)
        : undefined,
      IsCircle: isSet(object.IsCircle) ? globalThis.Boolean(object.IsCircle) : undefined,
      IsRemove: isSet(object.IsRemove) ? globalThis.Boolean(object.IsRemove) : undefined,
      PathLength: isSet(object.PathLength) ? globalThis.Number(object.PathLength) : undefined,
    };
  },

  toJSON(message: MagneticRideQueueChangeInfo): unknown {
    const obj: any = {};
    if (message.QueueUuid !== undefined) {
      obj.QueueUuid = (message.QueueUuid || Long.ZERO).toString();
    }
    if (message.PassengerChangeInfo !== undefined) {
      obj.PassengerChangeInfo = MagneticRidePassengerChangeInfo.toJSON(message.PassengerChangeInfo);
    }
    if (message.PathPointChangeInfo !== undefined) {
      obj.PathPointChangeInfo = MagneticRidePathPointChangeInfo.toJSON(message.PathPointChangeInfo);
    }
    if (message.IsCircle !== undefined) {
      obj.IsCircle = message.IsCircle;
    }
    if (message.IsRemove !== undefined) {
      obj.IsRemove = message.IsRemove;
    }
    if (message.PathLength !== undefined) {
      obj.PathLength = message.PathLength;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MagneticRideQueueChangeInfo>, I>>(base?: I): MagneticRideQueueChangeInfo {
    return MagneticRideQueueChangeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MagneticRideQueueChangeInfo>, I>>(object: I): MagneticRideQueueChangeInfo {
    const message = createBaseMagneticRideQueueChangeInfo();
    message.QueueUuid = (object.QueueUuid !== undefined && object.QueueUuid !== null)
      ? Long.fromValue(object.QueueUuid)
      : undefined;
    message.PassengerChangeInfo = (object.PassengerChangeInfo !== undefined && object.PassengerChangeInfo !== null)
      ? MagneticRidePassengerChangeInfo.fromPartial(object.PassengerChangeInfo)
      : undefined;
    message.PathPointChangeInfo = (object.PathPointChangeInfo !== undefined && object.PathPointChangeInfo !== null)
      ? MagneticRidePathPointChangeInfo.fromPartial(object.PathPointChangeInfo)
      : undefined;
    message.IsCircle = object.IsCircle ?? undefined;
    message.IsRemove = object.IsRemove ?? undefined;
    message.PathLength = object.PathLength ?? undefined;
    return message;
  },
};

function createBaseAoiSyncDelta(): AoiSyncDelta {
  return {
    Uuid: undefined,
    Attrs: undefined,
    TempAttrs: undefined,
    EventDataList: undefined,
    BulletEvent: undefined,
    BodyPartInfos: undefined,
    SkillEffects: undefined,
    PassiveSkillInfos: undefined,
    PassiveSkillEndInfos: undefined,
    BuffInfos: undefined,
    BuffEffect: undefined,
    FakeBullets: [],
    MagneticRideQueueChangeInfoList: [],
  };
}

export const AoiSyncDelta: MessageFns<AoiSyncDelta> = {
  encode(message: AoiSyncDelta, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Uuid !== undefined) {
      writer.uint32(8).int64(message.Uuid.toString());
    }
    if (message.Attrs !== undefined) {
      AttrCollection.encode(message.Attrs, writer.uint32(18).fork()).join();
    }
    if (message.TempAttrs !== undefined) {
      TempAttrCollection.encode(message.TempAttrs, writer.uint32(26).fork()).join();
    }
    if (message.EventDataList !== undefined) {
      EventDataList.encode(message.EventDataList, writer.uint32(34).fork()).join();
    }
    if (message.BulletEvent !== undefined) {
      BulletEvent.encode(message.BulletEvent, writer.uint32(42).fork()).join();
    }
    if (message.BodyPartInfos !== undefined) {
      ActorBodyPartInfos.encode(message.BodyPartInfos, writer.uint32(50).fork()).join();
    }
    if (message.SkillEffects !== undefined) {
      SkillEffect.encode(message.SkillEffects, writer.uint32(58).fork()).join();
    }
    if (message.PassiveSkillInfos !== undefined) {
      SeqPassiveSkillInfo.encode(message.PassiveSkillInfos, writer.uint32(66).fork()).join();
    }
    if (message.PassiveSkillEndInfos !== undefined) {
      SeqPassiveSkillEndInfo.encode(message.PassiveSkillEndInfos, writer.uint32(74).fork()).join();
    }
    if (message.BuffInfos !== undefined) {
      BuffInfoSync.encode(message.BuffInfos, writer.uint32(82).fork()).join();
    }
    if (message.BuffEffect !== undefined) {
      BuffEffectSync.encode(message.BuffEffect, writer.uint32(90).fork()).join();
    }
    for (const v of message.FakeBullets) {
      FakeBulletInfo.encode(v!, writer.uint32(98).fork()).join();
    }
    for (const v of message.MagneticRideQueueChangeInfoList) {
      MagneticRideQueueChangeInfo.encode(v!, writer.uint32(106).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AoiSyncDelta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAoiSyncDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Attrs = AttrCollection.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.TempAttrs = TempAttrCollection.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.EventDataList = EventDataList.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.BulletEvent = BulletEvent.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.BodyPartInfos = ActorBodyPartInfos.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.SkillEffects = SkillEffect.decode(reader, reader.uint32());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.PassiveSkillInfos = SeqPassiveSkillInfo.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.PassiveSkillEndInfos = SeqPassiveSkillEndInfo.decode(reader, reader.uint32());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.BuffInfos = BuffInfoSync.decode(reader, reader.uint32());
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.BuffEffect = BuffEffectSync.decode(reader, reader.uint32());
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.FakeBullets.push(FakeBulletInfo.decode(reader, reader.uint32()));
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.MagneticRideQueueChangeInfoList.push(MagneticRideQueueChangeInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AoiSyncDelta {
    return {
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
      Attrs: isSet(object.Attrs) ? AttrCollection.fromJSON(object.Attrs) : undefined,
      TempAttrs: isSet(object.TempAttrs) ? TempAttrCollection.fromJSON(object.TempAttrs) : undefined,
      EventDataList: isSet(object.EventDataList) ? EventDataList.fromJSON(object.EventDataList) : undefined,
      BulletEvent: isSet(object.BulletEvent) ? BulletEvent.fromJSON(object.BulletEvent) : undefined,
      BodyPartInfos: isSet(object.BodyPartInfos) ? ActorBodyPartInfos.fromJSON(object.BodyPartInfos) : undefined,
      SkillEffects: isSet(object.SkillEffects) ? SkillEffect.fromJSON(object.SkillEffects) : undefined,
      PassiveSkillInfos: isSet(object.PassiveSkillInfos)
        ? SeqPassiveSkillInfo.fromJSON(object.PassiveSkillInfos)
        : undefined,
      PassiveSkillEndInfos: isSet(object.PassiveSkillEndInfos)
        ? SeqPassiveSkillEndInfo.fromJSON(object.PassiveSkillEndInfos)
        : undefined,
      BuffInfos: isSet(object.BuffInfos) ? BuffInfoSync.fromJSON(object.BuffInfos) : undefined,
      BuffEffect: isSet(object.BuffEffect) ? BuffEffectSync.fromJSON(object.BuffEffect) : undefined,
      FakeBullets: globalThis.Array.isArray(object?.FakeBullets)
        ? object.FakeBullets.map((e: any) => FakeBulletInfo.fromJSON(e))
        : [],
      MagneticRideQueueChangeInfoList: globalThis.Array.isArray(object?.MagneticRideQueueChangeInfoList)
        ? object.MagneticRideQueueChangeInfoList.map((e: any) => MagneticRideQueueChangeInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AoiSyncDelta): unknown {
    const obj: any = {};
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    if (message.Attrs !== undefined) {
      obj.Attrs = AttrCollection.toJSON(message.Attrs);
    }
    if (message.TempAttrs !== undefined) {
      obj.TempAttrs = TempAttrCollection.toJSON(message.TempAttrs);
    }
    if (message.EventDataList !== undefined) {
      obj.EventDataList = EventDataList.toJSON(message.EventDataList);
    }
    if (message.BulletEvent !== undefined) {
      obj.BulletEvent = BulletEvent.toJSON(message.BulletEvent);
    }
    if (message.BodyPartInfos !== undefined) {
      obj.BodyPartInfos = ActorBodyPartInfos.toJSON(message.BodyPartInfos);
    }
    if (message.SkillEffects !== undefined) {
      obj.SkillEffects = SkillEffect.toJSON(message.SkillEffects);
    }
    if (message.PassiveSkillInfos !== undefined) {
      obj.PassiveSkillInfos = SeqPassiveSkillInfo.toJSON(message.PassiveSkillInfos);
    }
    if (message.PassiveSkillEndInfos !== undefined) {
      obj.PassiveSkillEndInfos = SeqPassiveSkillEndInfo.toJSON(message.PassiveSkillEndInfos);
    }
    if (message.BuffInfos !== undefined) {
      obj.BuffInfos = BuffInfoSync.toJSON(message.BuffInfos);
    }
    if (message.BuffEffect !== undefined) {
      obj.BuffEffect = BuffEffectSync.toJSON(message.BuffEffect);
    }
    if (message.FakeBullets?.length) {
      obj.FakeBullets = message.FakeBullets.map((e) => FakeBulletInfo.toJSON(e));
    }
    if (message.MagneticRideQueueChangeInfoList?.length) {
      obj.MagneticRideQueueChangeInfoList = message.MagneticRideQueueChangeInfoList.map((e) =>
        MagneticRideQueueChangeInfo.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AoiSyncDelta>, I>>(base?: I): AoiSyncDelta {
    return AoiSyncDelta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AoiSyncDelta>, I>>(object: I): AoiSyncDelta {
    const message = createBaseAoiSyncDelta();
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    message.Attrs = (object.Attrs !== undefined && object.Attrs !== null)
      ? AttrCollection.fromPartial(object.Attrs)
      : undefined;
    message.TempAttrs = (object.TempAttrs !== undefined && object.TempAttrs !== null)
      ? TempAttrCollection.fromPartial(object.TempAttrs)
      : undefined;
    message.EventDataList = (object.EventDataList !== undefined && object.EventDataList !== null)
      ? EventDataList.fromPartial(object.EventDataList)
      : undefined;
    message.BulletEvent = (object.BulletEvent !== undefined && object.BulletEvent !== null)
      ? BulletEvent.fromPartial(object.BulletEvent)
      : undefined;
    message.BodyPartInfos = (object.BodyPartInfos !== undefined && object.BodyPartInfos !== null)
      ? ActorBodyPartInfos.fromPartial(object.BodyPartInfos)
      : undefined;
    message.SkillEffects = (object.SkillEffects !== undefined && object.SkillEffects !== null)
      ? SkillEffect.fromPartial(object.SkillEffects)
      : undefined;
    message.PassiveSkillInfos = (object.PassiveSkillInfos !== undefined && object.PassiveSkillInfos !== null)
      ? SeqPassiveSkillInfo.fromPartial(object.PassiveSkillInfos)
      : undefined;
    message.PassiveSkillEndInfos = (object.PassiveSkillEndInfos !== undefined && object.PassiveSkillEndInfos !== null)
      ? SeqPassiveSkillEndInfo.fromPartial(object.PassiveSkillEndInfos)
      : undefined;
    message.BuffInfos = (object.BuffInfos !== undefined && object.BuffInfos !== null)
      ? BuffInfoSync.fromPartial(object.BuffInfos)
      : undefined;
    message.BuffEffect = (object.BuffEffect !== undefined && object.BuffEffect !== null)
      ? BuffEffectSync.fromPartial(object.BuffEffect)
      : undefined;
    message.FakeBullets = object.FakeBullets?.map((e) => FakeBulletInfo.fromPartial(e)) || [];
    message.MagneticRideQueueChangeInfoList =
      object.MagneticRideQueueChangeInfoList?.map((e) => MagneticRideQueueChangeInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFightResCD(): FightResCD {
  return { ResId: undefined, BeginTime: undefined, Duration: undefined, ValidCDTime: undefined };
}

export const FightResCD: MessageFns<FightResCD> = {
  encode(message: FightResCD, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.ResId !== undefined) {
      writer.uint32(8).int32(message.ResId);
    }
    if (message.BeginTime !== undefined) {
      writer.uint32(16).int64(message.BeginTime.toString());
    }
    if (message.Duration !== undefined) {
      writer.uint32(24).int32(message.Duration);
    }
    if (message.ValidCDTime !== undefined) {
      writer.uint32(32).int32(message.ValidCDTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightResCD {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightResCD();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.ResId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.BeginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.Duration = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.ValidCDTime = reader.int32();
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

  fromJSON(object: any): FightResCD {
    return {
      ResId: isSet(object.ResId) ? globalThis.Number(object.ResId) : undefined,
      BeginTime: isSet(object.BeginTime) ? Long.fromValue(object.BeginTime) : undefined,
      Duration: isSet(object.Duration) ? globalThis.Number(object.Duration) : undefined,
      ValidCDTime: isSet(object.ValidCDTime) ? globalThis.Number(object.ValidCDTime) : undefined,
    };
  },

  toJSON(message: FightResCD): unknown {
    const obj: any = {};
    if (message.ResId !== undefined) {
      obj.ResId = Math.round(message.ResId);
    }
    if (message.BeginTime !== undefined) {
      obj.BeginTime = (message.BeginTime || Long.ZERO).toString();
    }
    if (message.Duration !== undefined) {
      obj.Duration = Math.round(message.Duration);
    }
    if (message.ValidCDTime !== undefined) {
      obj.ValidCDTime = Math.round(message.ValidCDTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightResCD>, I>>(base?: I): FightResCD {
    return FightResCD.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightResCD>, I>>(object: I): FightResCD {
    const message = createBaseFightResCD();
    message.ResId = object.ResId ?? undefined;
    message.BeginTime = (object.BeginTime !== undefined && object.BeginTime !== null)
      ? Long.fromValue(object.BeginTime)
      : undefined;
    message.Duration = object.Duration ?? undefined;
    message.ValidCDTime = object.ValidCDTime ?? undefined;
    return message;
  },
};

function createBaseAoiSyncToMeDelta(): AoiSyncToMeDelta {
  return { BaseDelta: undefined, SyncHateIds: [], SyncSkillCDs: [], FightResCDs: [], Uuid: undefined };
}

export const AoiSyncToMeDelta: MessageFns<AoiSyncToMeDelta> = {
  encode(message: AoiSyncToMeDelta, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.BaseDelta !== undefined) {
      AoiSyncDelta.encode(message.BaseDelta, writer.uint32(10).fork()).join();
    }
    writer.uint32(18).fork();
    for (const v of message.SyncHateIds) {
      writer.int64(v.toString());
    }
    writer.join();
    for (const v of message.SyncSkillCDs) {
      SkillCDInfo.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.FightResCDs) {
      FightResCD.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.Uuid !== undefined) {
      writer.uint32(40).int64(message.Uuid.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AoiSyncToMeDelta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAoiSyncToMeDelta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.BaseDelta = AoiSyncDelta.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.SyncHateIds.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.SyncHateIds.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.SyncSkillCDs.push(SkillCDInfo.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.FightResCDs.push(FightResCD.decode(reader, reader.uint32()));
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.Uuid = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): AoiSyncToMeDelta {
    return {
      BaseDelta: isSet(object.BaseDelta) ? AoiSyncDelta.fromJSON(object.BaseDelta) : undefined,
      SyncHateIds: globalThis.Array.isArray(object?.SyncHateIds)
        ? object.SyncHateIds.map((e: any) => Long.fromValue(e))
        : [],
      SyncSkillCDs: globalThis.Array.isArray(object?.SyncSkillCDs)
        ? object.SyncSkillCDs.map((e: any) => SkillCDInfo.fromJSON(e))
        : [],
      FightResCDs: globalThis.Array.isArray(object?.FightResCDs)
        ? object.FightResCDs.map((e: any) => FightResCD.fromJSON(e))
        : [],
      Uuid: isSet(object.Uuid) ? Long.fromValue(object.Uuid) : undefined,
    };
  },

  toJSON(message: AoiSyncToMeDelta): unknown {
    const obj: any = {};
    if (message.BaseDelta !== undefined) {
      obj.BaseDelta = AoiSyncDelta.toJSON(message.BaseDelta);
    }
    if (message.SyncHateIds?.length) {
      obj.SyncHateIds = message.SyncHateIds.map((e) => (e || Long.ZERO).toString());
    }
    if (message.SyncSkillCDs?.length) {
      obj.SyncSkillCDs = message.SyncSkillCDs.map((e) => SkillCDInfo.toJSON(e));
    }
    if (message.FightResCDs?.length) {
      obj.FightResCDs = message.FightResCDs.map((e) => FightResCD.toJSON(e));
    }
    if (message.Uuid !== undefined) {
      obj.Uuid = (message.Uuid || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AoiSyncToMeDelta>, I>>(base?: I): AoiSyncToMeDelta {
    return AoiSyncToMeDelta.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AoiSyncToMeDelta>, I>>(object: I): AoiSyncToMeDelta {
    const message = createBaseAoiSyncToMeDelta();
    message.BaseDelta = (object.BaseDelta !== undefined && object.BaseDelta !== null)
      ? AoiSyncDelta.fromPartial(object.BaseDelta)
      : undefined;
    message.SyncHateIds = object.SyncHateIds?.map((e) => Long.fromValue(e)) || [];
    message.SyncSkillCDs = object.SyncSkillCDs?.map((e) => SkillCDInfo.fromPartial(e)) || [];
    message.FightResCDs = object.FightResCDs?.map((e) => FightResCD.fromPartial(e)) || [];
    message.Uuid = (object.Uuid !== undefined && object.Uuid !== null) ? Long.fromValue(object.Uuid) : undefined;
    return message;
  },
};

function createBaseSyncNearDeltaInfo(): SyncNearDeltaInfo {
  return { DeltaInfos: [] };
}

export const SyncNearDeltaInfo: MessageFns<SyncNearDeltaInfo> = {
  encode(message: SyncNearDeltaInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.DeltaInfos) {
      AoiSyncDelta.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncNearDeltaInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncNearDeltaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.DeltaInfos.push(AoiSyncDelta.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SyncNearDeltaInfo {
    return {
      DeltaInfos: globalThis.Array.isArray(object?.DeltaInfos)
        ? object.DeltaInfos.map((e: any) => AoiSyncDelta.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SyncNearDeltaInfo): unknown {
    const obj: any = {};
    if (message.DeltaInfos?.length) {
      obj.DeltaInfos = message.DeltaInfos.map((e) => AoiSyncDelta.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncNearDeltaInfo>, I>>(base?: I): SyncNearDeltaInfo {
    return SyncNearDeltaInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncNearDeltaInfo>, I>>(object: I): SyncNearDeltaInfo {
    const message = createBaseSyncNearDeltaInfo();
    message.DeltaInfos = object.DeltaInfos?.map((e) => AoiSyncDelta.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSyncToMeDeltaInfo(): SyncToMeDeltaInfo {
  return { DeltaInfo: undefined };
}

export const SyncToMeDeltaInfo: MessageFns<SyncToMeDeltaInfo> = {
  encode(message: SyncToMeDeltaInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.DeltaInfo !== undefined) {
      AoiSyncToMeDelta.encode(message.DeltaInfo, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncToMeDeltaInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncToMeDeltaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.DeltaInfo = AoiSyncToMeDelta.decode(reader, reader.uint32());
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

  fromJSON(object: any): SyncToMeDeltaInfo {
    return { DeltaInfo: isSet(object.DeltaInfo) ? AoiSyncToMeDelta.fromJSON(object.DeltaInfo) : undefined };
  },

  toJSON(message: SyncToMeDeltaInfo): unknown {
    const obj: any = {};
    if (message.DeltaInfo !== undefined) {
      obj.DeltaInfo = AoiSyncToMeDelta.toJSON(message.DeltaInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncToMeDeltaInfo>, I>>(base?: I): SyncToMeDeltaInfo {
    return SyncToMeDeltaInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncToMeDeltaInfo>, I>>(object: I): SyncToMeDeltaInfo {
    const message = createBaseSyncToMeDeltaInfo();
    message.DeltaInfo = (object.DeltaInfo !== undefined && object.DeltaInfo !== null)
      ? AoiSyncToMeDelta.fromPartial(object.DeltaInfo)
      : undefined;
    return message;
  },
};

function createBaseSyncNearEntities(): SyncNearEntities {
  return { appear: [], disappear: [] };
}

export const SyncNearEntities: MessageFns<SyncNearEntities> = {
  encode(message: SyncNearEntities, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.appear) {
      Entity.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.disappear) {
      DisappearEntity.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncNearEntities {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncNearEntities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.appear.push(Entity.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.disappear.push(DisappearEntity.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SyncNearEntities {
    return {
      appear: globalThis.Array.isArray(object?.appear) ? object.appear.map((e: any) => Entity.fromJSON(e)) : [],
      disappear: globalThis.Array.isArray(object?.disappear)
        ? object.disappear.map((e: any) => DisappearEntity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SyncNearEntities): unknown {
    const obj: any = {};
    if (message.appear?.length) {
      obj.appear = message.appear.map((e) => Entity.toJSON(e));
    }
    if (message.disappear?.length) {
      obj.disappear = message.disappear.map((e) => DisappearEntity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncNearEntities>, I>>(base?: I): SyncNearEntities {
    return SyncNearEntities.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncNearEntities>, I>>(object: I): SyncNearEntities {
    const message = createBaseSyncNearEntities();
    message.appear = object.appear?.map((e) => Entity.fromPartial(e)) || [];
    message.disappear = object.disappear?.map((e) => DisappearEntity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntity(): Entity {
  return {
    uuid: undefined,
    entType: undefined,
    attrs: undefined,
    tempAttrs: undefined,
    bodyPartInfos: undefined,
    passiveSkillInfos: undefined,
    buffInfos: undefined,
    buffEffect: undefined,
    appearType: undefined,
    magneticRideQueueChangeInfoDict: new Map(),
  };
}

export const Entity: MessageFns<Entity> = {
  encode(message: Entity, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uuid !== undefined) {
      writer.uint32(8).int64(message.uuid.toString());
    }
    if (message.entType !== undefined) {
      writer.uint32(16).int32(message.entType);
    }
    if (message.attrs !== undefined) {
      AttrCollection.encode(message.attrs, writer.uint32(26).fork()).join();
    }
    if (message.tempAttrs !== undefined) {
      TempAttrCollection.encode(message.tempAttrs, writer.uint32(34).fork()).join();
    }
    if (message.bodyPartInfos !== undefined) {
      ActorBodyPartInfos.encode(message.bodyPartInfos, writer.uint32(42).fork()).join();
    }
    if (message.passiveSkillInfos !== undefined) {
      SeqPassiveSkillInfo.encode(message.passiveSkillInfos, writer.uint32(50).fork()).join();
    }
    if (message.buffInfos !== undefined) {
      BuffInfoSync.encode(message.buffInfos, writer.uint32(58).fork()).join();
    }
    if (message.buffEffect !== undefined) {
      BuffEffectSync.encode(message.buffEffect, writer.uint32(66).fork()).join();
    }
    if (message.appearType !== undefined) {
      writer.uint32(72).int32(message.appearType);
    }
    message.magneticRideQueueChangeInfoDict.forEach((value, key) => {
      Entity_MagneticRideQueueChangeInfoDictEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Entity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.entType = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.attrs = AttrCollection.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.tempAttrs = TempAttrCollection.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.bodyPartInfos = ActorBodyPartInfos.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.passiveSkillInfos = SeqPassiveSkillInfo.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.buffInfos = BuffInfoSync.decode(reader, reader.uint32());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.buffEffect = BuffEffectSync.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.appearType = reader.int32() as any;
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          const entry10 = Entity_MagneticRideQueueChangeInfoDictEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.magneticRideQueueChangeInfoDict.set(entry10.key, entry10.value);
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

  fromJSON(object: any): Entity {
    return {
      uuid: isSet(object.uuid) ? Long.fromValue(object.uuid) : undefined,
      entType: isSet(object.entType) ? eEntityTypeFromJSON(object.entType) : undefined,
      attrs: isSet(object.attrs) ? AttrCollection.fromJSON(object.attrs) : undefined,
      tempAttrs: isSet(object.tempAttrs) ? TempAttrCollection.fromJSON(object.tempAttrs) : undefined,
      bodyPartInfos: isSet(object.bodyPartInfos) ? ActorBodyPartInfos.fromJSON(object.bodyPartInfos) : undefined,
      passiveSkillInfos: isSet(object.passiveSkillInfos)
        ? SeqPassiveSkillInfo.fromJSON(object.passiveSkillInfos)
        : undefined,
      buffInfos: isSet(object.buffInfos) ? BuffInfoSync.fromJSON(object.buffInfos) : undefined,
      buffEffect: isSet(object.buffEffect) ? BuffEffectSync.fromJSON(object.buffEffect) : undefined,
      appearType: isSet(object.appearType) ? eAppearTypeFromJSON(object.appearType) : undefined,
      magneticRideQueueChangeInfoDict: isObject(object.magneticRideQueueChangeInfoDict)
        ? Object.entries(object.magneticRideQueueChangeInfoDict).reduce<Map<Long, MagneticQueueAppearInfo>>(
          (acc, [key, value]) => {
            acc.set(Long.fromValue(key), MagneticQueueAppearInfo.fromJSON(value));
            return acc;
          },
          new Map(),
        )
        : new Map(),
    };
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = (message.uuid || Long.ZERO).toString();
    }
    if (message.entType !== undefined) {
      obj.entType = eEntityTypeToJSON(message.entType);
    }
    if (message.attrs !== undefined) {
      obj.attrs = AttrCollection.toJSON(message.attrs);
    }
    if (message.tempAttrs !== undefined) {
      obj.tempAttrs = TempAttrCollection.toJSON(message.tempAttrs);
    }
    if (message.bodyPartInfos !== undefined) {
      obj.bodyPartInfos = ActorBodyPartInfos.toJSON(message.bodyPartInfos);
    }
    if (message.passiveSkillInfos !== undefined) {
      obj.passiveSkillInfos = SeqPassiveSkillInfo.toJSON(message.passiveSkillInfos);
    }
    if (message.buffInfos !== undefined) {
      obj.buffInfos = BuffInfoSync.toJSON(message.buffInfos);
    }
    if (message.buffEffect !== undefined) {
      obj.buffEffect = BuffEffectSync.toJSON(message.buffEffect);
    }
    if (message.appearType !== undefined) {
      obj.appearType = eAppearTypeToJSON(message.appearType);
    }
    if (message.magneticRideQueueChangeInfoDict?.size) {
      obj.magneticRideQueueChangeInfoDict = {};
      message.magneticRideQueueChangeInfoDict.forEach((v, k) => {
        obj.magneticRideQueueChangeInfoDict[longToNumber(k)] = MagneticQueueAppearInfo.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Entity>, I>>(base?: I): Entity {
    return Entity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Entity>, I>>(object: I): Entity {
    const message = createBaseEntity();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? Long.fromValue(object.uuid) : undefined;
    message.entType = object.entType ?? undefined;
    message.attrs = (object.attrs !== undefined && object.attrs !== null)
      ? AttrCollection.fromPartial(object.attrs)
      : undefined;
    message.tempAttrs = (object.tempAttrs !== undefined && object.tempAttrs !== null)
      ? TempAttrCollection.fromPartial(object.tempAttrs)
      : undefined;
    message.bodyPartInfos = (object.bodyPartInfos !== undefined && object.bodyPartInfos !== null)
      ? ActorBodyPartInfos.fromPartial(object.bodyPartInfos)
      : undefined;
    message.passiveSkillInfos = (object.passiveSkillInfos !== undefined && object.passiveSkillInfos !== null)
      ? SeqPassiveSkillInfo.fromPartial(object.passiveSkillInfos)
      : undefined;
    message.buffInfos = (object.buffInfos !== undefined && object.buffInfos !== null)
      ? BuffInfoSync.fromPartial(object.buffInfos)
      : undefined;
    message.buffEffect = (object.buffEffect !== undefined && object.buffEffect !== null)
      ? BuffEffectSync.fromPartial(object.buffEffect)
      : undefined;
    message.appearType = object.appearType ?? undefined;
    message.magneticRideQueueChangeInfoDict = (() => {
      const m = new Map();
      (object.magneticRideQueueChangeInfoDict as Map<Long, MagneticQueueAppearInfo> ?? new Map()).forEach(
        (value, key) => {
          if (value !== undefined) {
            m.set(key, MagneticQueueAppearInfo.fromPartial(value));
          }
        },
      );
      return m;
    })();
    return message;
  },
};

function createBaseEntity_MagneticRideQueueChangeInfoDictEntry(): Entity_MagneticRideQueueChangeInfoDictEntry {
  return { key: Long.ZERO, value: undefined };
}

export const Entity_MagneticRideQueueChangeInfoDictEntry: MessageFns<Entity_MagneticRideQueueChangeInfoDictEntry> = {
  encode(
    message: Entity_MagneticRideQueueChangeInfoDictEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      MagneticQueueAppearInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Entity_MagneticRideQueueChangeInfoDictEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity_MagneticRideQueueChangeInfoDictEntry();
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

          message.value = MagneticQueueAppearInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): Entity_MagneticRideQueueChangeInfoDictEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? MagneticQueueAppearInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Entity_MagneticRideQueueChangeInfoDictEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = MagneticQueueAppearInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Entity_MagneticRideQueueChangeInfoDictEntry>, I>>(
    base?: I,
  ): Entity_MagneticRideQueueChangeInfoDictEntry {
    return Entity_MagneticRideQueueChangeInfoDictEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Entity_MagneticRideQueueChangeInfoDictEntry>, I>>(
    object: I,
  ): Entity_MagneticRideQueueChangeInfoDictEntry {
    const message = createBaseEntity_MagneticRideQueueChangeInfoDictEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? MagneticQueueAppearInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMagneticQueueAppearInfo(): MagneticQueueAppearInfo {
  return { passengerUuidList: [], isCircle: undefined, pathLength: undefined };
}

export const MagneticQueueAppearInfo: MessageFns<MagneticQueueAppearInfo> = {
  encode(message: MagneticQueueAppearInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.passengerUuidList) {
      writer.int64(v.toString());
    }
    writer.join();
    if (message.isCircle !== undefined) {
      writer.uint32(16).bool(message.isCircle);
    }
    if (message.pathLength !== undefined) {
      writer.uint32(29).float(message.pathLength);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MagneticQueueAppearInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMagneticQueueAppearInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.passengerUuidList.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.passengerUuidList.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isCircle = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 29) {
            break;
          }

          message.pathLength = reader.float();
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

  fromJSON(object: any): MagneticQueueAppearInfo {
    return {
      passengerUuidList: globalThis.Array.isArray(object?.passengerUuidList)
        ? object.passengerUuidList.map((e: any) => Long.fromValue(e))
        : [],
      isCircle: isSet(object.isCircle) ? globalThis.Boolean(object.isCircle) : undefined,
      pathLength: isSet(object.pathLength) ? globalThis.Number(object.pathLength) : undefined,
    };
  },

  toJSON(message: MagneticQueueAppearInfo): unknown {
    const obj: any = {};
    if (message.passengerUuidList?.length) {
      obj.passengerUuidList = message.passengerUuidList.map((e) => (e || Long.ZERO).toString());
    }
    if (message.isCircle !== undefined) {
      obj.isCircle = message.isCircle;
    }
    if (message.pathLength !== undefined) {
      obj.pathLength = message.pathLength;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MagneticQueueAppearInfo>, I>>(base?: I): MagneticQueueAppearInfo {
    return MagneticQueueAppearInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MagneticQueueAppearInfo>, I>>(object: I): MagneticQueueAppearInfo {
    const message = createBaseMagneticQueueAppearInfo();
    message.passengerUuidList = object.passengerUuidList?.map((e) => Long.fromValue(e)) || [];
    message.isCircle = object.isCircle ?? undefined;
    message.pathLength = object.pathLength ?? undefined;
    return message;
  },
};

function createBaseDisappearEntity(): DisappearEntity {
  return { uuid: undefined, type: undefined };
}

export const DisappearEntity: MessageFns<DisappearEntity> = {
  encode(message: DisappearEntity, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.uuid !== undefined) {
      writer.uint32(8).int64(message.uuid.toString());
    }
    if (message.type !== undefined) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DisappearEntity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisappearEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.uuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
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

  fromJSON(object: any): DisappearEntity {
    return {
      uuid: isSet(object.uuid) ? Long.fromValue(object.uuid) : undefined,
      type: isSet(object.type) ? eDisappearTypeFromJSON(object.type) : undefined,
    };
  },

  toJSON(message: DisappearEntity): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = (message.uuid || Long.ZERO).toString();
    }
    if (message.type !== undefined) {
      obj.type = eDisappearTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DisappearEntity>, I>>(base?: I): DisappearEntity {
    return DisappearEntity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DisappearEntity>, I>>(object: I): DisappearEntity {
    const message = createBaseDisappearEntity();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? Long.fromValue(object.uuid) : undefined;
    message.type = object.type ?? undefined;
    return message;
  },
};

function createBaseSkillCd(): SkillCd {
  return {
    skillLevelId: undefined,
    beginTime: undefined,
    duration: undefined,
    skillCdType: undefined,
    validCdTime: undefined,
  };
}

export const SkillCd: MessageFns<SkillCd> = {
  encode(message: SkillCd, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.skillLevelId !== undefined) {
      writer.uint32(8).int32(message.skillLevelId);
    }
    if (message.beginTime !== undefined) {
      writer.uint32(16).int64(message.beginTime.toString());
    }
    if (message.duration !== undefined) {
      writer.uint32(24).int32(message.duration);
    }
    if (message.skillCdType !== undefined) {
      writer.uint32(32).int32(message.skillCdType);
    }
    if (message.validCdTime !== undefined) {
      writer.uint32(40).int32(message.validCdTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SkillCd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSkillCd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.skillLevelId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.beginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.duration = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.skillCdType = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.validCdTime = reader.int32();
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

  fromJSON(object: any): SkillCd {
    return {
      skillLevelId: isSet(object.skillLevelId) ? globalThis.Number(object.skillLevelId) : undefined,
      beginTime: isSet(object.beginTime) ? Long.fromValue(object.beginTime) : undefined,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : undefined,
      skillCdType: isSet(object.skillCdType) ? eSkillCDTypeFromJSON(object.skillCdType) : undefined,
      validCdTime: isSet(object.validCdTime) ? globalThis.Number(object.validCdTime) : undefined,
    };
  },

  toJSON(message: SkillCd): unknown {
    const obj: any = {};
    if (message.skillLevelId !== undefined) {
      obj.skillLevelId = Math.round(message.skillLevelId);
    }
    if (message.beginTime !== undefined) {
      obj.beginTime = (message.beginTime || Long.ZERO).toString();
    }
    if (message.duration !== undefined) {
      obj.duration = Math.round(message.duration);
    }
    if (message.skillCdType !== undefined) {
      obj.skillCdType = eSkillCDTypeToJSON(message.skillCdType);
    }
    if (message.validCdTime !== undefined) {
      obj.validCdTime = Math.round(message.validCdTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SkillCd>, I>>(base?: I): SkillCd {
    return SkillCd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SkillCd>, I>>(object: I): SkillCd {
    const message = createBaseSkillCd();
    message.skillLevelId = object.skillLevelId ?? undefined;
    message.beginTime = (object.beginTime !== undefined && object.beginTime !== null)
      ? Long.fromValue(object.beginTime)
      : undefined;
    message.duration = object.duration ?? undefined;
    message.skillCdType = object.skillCdType ?? undefined;
    message.validCdTime = object.validCdTime ?? undefined;
    return message;
  },
};

function createBaseFightResCd(): FightResCd {
  return { resId: undefined, beginTime: undefined, duration: undefined, validCdTime: undefined };
}

export const FightResCd: MessageFns<FightResCd> = {
  encode(message: FightResCd, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resId !== undefined) {
      writer.uint32(8).int32(message.resId);
    }
    if (message.beginTime !== undefined) {
      writer.uint32(16).int64(message.beginTime.toString());
    }
    if (message.duration !== undefined) {
      writer.uint32(24).int32(message.duration);
    }
    if (message.validCdTime !== undefined) {
      writer.uint32(32).int32(message.validCdTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightResCd {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightResCd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.resId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.beginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.duration = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.validCdTime = reader.int32();
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

  fromJSON(object: any): FightResCd {
    return {
      resId: isSet(object.resId) ? globalThis.Number(object.resId) : undefined,
      beginTime: isSet(object.beginTime) ? Long.fromValue(object.beginTime) : undefined,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : undefined,
      validCdTime: isSet(object.validCdTime) ? globalThis.Number(object.validCdTime) : undefined,
    };
  },

  toJSON(message: FightResCd): unknown {
    const obj: any = {};
    if (message.resId !== undefined) {
      obj.resId = Math.round(message.resId);
    }
    if (message.beginTime !== undefined) {
      obj.beginTime = (message.beginTime || Long.ZERO).toString();
    }
    if (message.duration !== undefined) {
      obj.duration = Math.round(message.duration);
    }
    if (message.validCdTime !== undefined) {
      obj.validCdTime = Math.round(message.validCdTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightResCd>, I>>(base?: I): FightResCd {
    return FightResCd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightResCd>, I>>(object: I): FightResCd {
    const message = createBaseFightResCd();
    message.resId = object.resId ?? undefined;
    message.beginTime = (object.beginTime !== undefined && object.beginTime !== null)
      ? Long.fromValue(object.beginTime)
      : undefined;
    message.duration = object.duration ?? undefined;
    message.validCdTime = object.validCdTime ?? undefined;
    return message;
  },
};

function createBaseSyncContainerData(): SyncContainerData {
  return { vData: undefined };
}

export const SyncContainerData: MessageFns<SyncContainerData> = {
  encode(message: SyncContainerData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.vData !== undefined) {
      CharSerialize.encode(message.vData, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncContainerData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncContainerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.vData = CharSerialize.decode(reader, reader.uint32());
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

  fromJSON(object: any): SyncContainerData {
    return { vData: isSet(object.vData) ? CharSerialize.fromJSON(object.vData) : undefined };
  },

  toJSON(message: SyncContainerData): unknown {
    const obj: any = {};
    if (message.vData !== undefined) {
      obj.vData = CharSerialize.toJSON(message.vData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncContainerData>, I>>(base?: I): SyncContainerData {
    return SyncContainerData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncContainerData>, I>>(object: I): SyncContainerData {
    const message = createBaseSyncContainerData();
    message.vData = (object.vData !== undefined && object.vData !== null)
      ? CharSerialize.fromPartial(object.vData)
      : undefined;
    return message;
  },
};

function createBaseSyncContainerDirtyData(): SyncContainerDirtyData {
  return { vData: undefined };
}

export const SyncContainerDirtyData: MessageFns<SyncContainerDirtyData> = {
  encode(message: SyncContainerDirtyData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.vData !== undefined) {
      writer.uint32(10).bytes(message.vData);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncContainerDirtyData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncContainerDirtyData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.vData = reader.bytes();
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

  fromJSON(object: any): SyncContainerDirtyData {
    return { vData: isSet(object.vData) ? bytesFromBase64(object.vData) : undefined };
  },

  toJSON(message: SyncContainerDirtyData): unknown {
    const obj: any = {};
    if (message.vData !== undefined) {
      obj.vData = base64FromBytes(message.vData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncContainerDirtyData>, I>>(base?: I): SyncContainerDirtyData {
    return SyncContainerDirtyData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncContainerDirtyData>, I>>(object: I): SyncContainerDirtyData {
    const message = createBaseSyncContainerDirtyData();
    message.vData = object.vData ?? undefined;
    return message;
  },
};

function createBaseSyncServerTime(): SyncServerTime {
  return { clientMilliseconds: undefined, serverMilliseconds: undefined };
}

export const SyncServerTime: MessageFns<SyncServerTime> = {
  encode(message: SyncServerTime, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.clientMilliseconds !== undefined) {
      writer.uint32(8).int64(message.clientMilliseconds.toString());
    }
    if (message.serverMilliseconds !== undefined) {
      writer.uint32(16).int64(message.serverMilliseconds.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncServerTime {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncServerTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.clientMilliseconds = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.serverMilliseconds = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): SyncServerTime {
    return {
      clientMilliseconds: isSet(object.clientMilliseconds) ? Long.fromValue(object.clientMilliseconds) : undefined,
      serverMilliseconds: isSet(object.serverMilliseconds) ? Long.fromValue(object.serverMilliseconds) : undefined,
    };
  },

  toJSON(message: SyncServerTime): unknown {
    const obj: any = {};
    if (message.clientMilliseconds !== undefined) {
      obj.clientMilliseconds = (message.clientMilliseconds || Long.ZERO).toString();
    }
    if (message.serverMilliseconds !== undefined) {
      obj.serverMilliseconds = (message.serverMilliseconds || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncServerTime>, I>>(base?: I): SyncServerTime {
    return SyncServerTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncServerTime>, I>>(object: I): SyncServerTime {
    const message = createBaseSyncServerTime();
    message.clientMilliseconds = (object.clientMilliseconds !== undefined && object.clientMilliseconds !== null)
      ? Long.fromValue(object.clientMilliseconds)
      : undefined;
    message.serverMilliseconds = (object.serverMilliseconds !== undefined && object.serverMilliseconds !== null)
      ? Long.fromValue(object.serverMilliseconds)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
