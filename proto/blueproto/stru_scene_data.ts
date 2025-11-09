/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LastSceneData } from "./stru_last_scene_data";
import { Position } from "./stru_position";

export const protobufPackage = "zproto";

export interface SceneData {
  mapId: number;
  channelId: number;
  pos: Position | undefined;
  levelUuid: Long;
  levelPos: Position | undefined;
  levelMapId: number;
  levelReviveId: number;
  recordId: { [key: number]: number };
  planeId: number;
  sceneLayer: number;
  canSwitchLayer: boolean;
  beforeFallPos: Position | undefined;
  sceneGuid: string;
  dungeonGuid: string;
  lineId: number;
  visualLayerConfigId: number;
  lastSceneData: LastSceneData | undefined;
  sceneAreaId: number;
  levelAreaId: number;
  beforeFallSceneAreaId: number;
}

export interface SceneData_RecordIdEntry {
  key: number;
  value: number;
}

function createBaseSceneData(): SceneData {
  return {
    mapId: 0,
    channelId: 0,
    pos: undefined,
    levelUuid: Long.ZERO,
    levelPos: undefined,
    levelMapId: 0,
    levelReviveId: 0,
    recordId: {},
    planeId: 0,
    sceneLayer: 0,
    canSwitchLayer: false,
    beforeFallPos: undefined,
    sceneGuid: "",
    dungeonGuid: "",
    lineId: 0,
    visualLayerConfigId: 0,
    lastSceneData: undefined,
    sceneAreaId: 0,
    levelAreaId: 0,
    beforeFallSceneAreaId: 0,
  };
}

export const SceneData: MessageFns<SceneData> = {
  encode(message: SceneData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.mapId !== 0) {
      writer.uint32(8).uint32(message.mapId);
    }
    if (message.channelId !== 0) {
      writer.uint32(16).uint32(message.channelId);
    }
    if (message.pos !== undefined) {
      Position.encode(message.pos, writer.uint32(26).fork()).join();
    }
    if (!message.levelUuid.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.levelUuid.toString());
    }
    if (message.levelPos !== undefined) {
      Position.encode(message.levelPos, writer.uint32(42).fork()).join();
    }
    if (message.levelMapId !== 0) {
      writer.uint32(48).uint32(message.levelMapId);
    }
    if (message.levelReviveId !== 0) {
      writer.uint32(56).uint32(message.levelReviveId);
    }
    Object.entries(message.recordId).forEach(([key, value]) => {
      SceneData_RecordIdEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).join();
    });
    if (message.planeId !== 0) {
      writer.uint32(72).uint32(message.planeId);
    }
    if (message.sceneLayer !== 0) {
      writer.uint32(80).uint32(message.sceneLayer);
    }
    if (message.canSwitchLayer !== false) {
      writer.uint32(88).bool(message.canSwitchLayer);
    }
    if (message.beforeFallPos !== undefined) {
      Position.encode(message.beforeFallPos, writer.uint32(98).fork()).join();
    }
    if (message.sceneGuid !== "") {
      writer.uint32(106).string(message.sceneGuid);
    }
    if (message.dungeonGuid !== "") {
      writer.uint32(114).string(message.dungeonGuid);
    }
    if (message.lineId !== 0) {
      writer.uint32(120).uint32(message.lineId);
    }
    if (message.visualLayerConfigId !== 0) {
      writer.uint32(128).uint32(message.visualLayerConfigId);
    }
    if (message.lastSceneData !== undefined) {
      LastSceneData.encode(message.lastSceneData, writer.uint32(138).fork()).join();
    }
    if (message.sceneAreaId !== 0) {
      writer.uint32(144).int32(message.sceneAreaId);
    }
    if (message.levelAreaId !== 0) {
      writer.uint32(152).int32(message.levelAreaId);
    }
    if (message.beforeFallSceneAreaId !== 0) {
      writer.uint32(160).int32(message.beforeFallSceneAreaId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SceneData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.mapId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.channelId = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.pos = Position.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.levelUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.levelPos = Position.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.levelMapId = reader.uint32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.levelReviveId = reader.uint32();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          const entry8 = SceneData_RecordIdEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.recordId[entry8.key] = entry8.value;
          }
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.planeId = reader.uint32();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.sceneLayer = reader.uint32();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.canSwitchLayer = reader.bool();
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.beforeFallPos = Position.decode(reader, reader.uint32());
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.sceneGuid = reader.string();
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.dungeonGuid = reader.string();
          continue;
        }
        case 15: {
          if (tag !== 120) {
            break;
          }

          message.lineId = reader.uint32();
          continue;
        }
        case 16: {
          if (tag !== 128) {
            break;
          }

          message.visualLayerConfigId = reader.uint32();
          continue;
        }
        case 17: {
          if (tag !== 138) {
            break;
          }

          message.lastSceneData = LastSceneData.decode(reader, reader.uint32());
          continue;
        }
        case 18: {
          if (tag !== 144) {
            break;
          }

          message.sceneAreaId = reader.int32();
          continue;
        }
        case 19: {
          if (tag !== 152) {
            break;
          }

          message.levelAreaId = reader.int32();
          continue;
        }
        case 20: {
          if (tag !== 160) {
            break;
          }

          message.beforeFallSceneAreaId = reader.int32();
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

  fromJSON(object: any): SceneData {
    return {
      mapId: isSet(object.mapId) ? globalThis.Number(object.mapId) : 0,
      channelId: isSet(object.channelId) ? globalThis.Number(object.channelId) : 0,
      pos: isSet(object.pos) ? Position.fromJSON(object.pos) : undefined,
      levelUuid: isSet(object.levelUuid) ? Long.fromValue(object.levelUuid) : Long.ZERO,
      levelPos: isSet(object.levelPos) ? Position.fromJSON(object.levelPos) : undefined,
      levelMapId: isSet(object.levelMapId) ? globalThis.Number(object.levelMapId) : 0,
      levelReviveId: isSet(object.levelReviveId) ? globalThis.Number(object.levelReviveId) : 0,
      recordId: isObject(object.recordId)
        ? Object.entries(object.recordId).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      planeId: isSet(object.planeId) ? globalThis.Number(object.planeId) : 0,
      sceneLayer: isSet(object.sceneLayer) ? globalThis.Number(object.sceneLayer) : 0,
      canSwitchLayer: isSet(object.canSwitchLayer) ? globalThis.Boolean(object.canSwitchLayer) : false,
      beforeFallPos: isSet(object.beforeFallPos) ? Position.fromJSON(object.beforeFallPos) : undefined,
      sceneGuid: isSet(object.sceneGuid) ? globalThis.String(object.sceneGuid) : "",
      dungeonGuid: isSet(object.dungeonGuid) ? globalThis.String(object.dungeonGuid) : "",
      lineId: isSet(object.lineId) ? globalThis.Number(object.lineId) : 0,
      visualLayerConfigId: isSet(object.visualLayerConfigId) ? globalThis.Number(object.visualLayerConfigId) : 0,
      lastSceneData: isSet(object.lastSceneData) ? LastSceneData.fromJSON(object.lastSceneData) : undefined,
      sceneAreaId: isSet(object.sceneAreaId) ? globalThis.Number(object.sceneAreaId) : 0,
      levelAreaId: isSet(object.levelAreaId) ? globalThis.Number(object.levelAreaId) : 0,
      beforeFallSceneAreaId: isSet(object.beforeFallSceneAreaId) ? globalThis.Number(object.beforeFallSceneAreaId) : 0,
    };
  },

  toJSON(message: SceneData): unknown {
    const obj: any = {};
    if (message.mapId !== 0) {
      obj.mapId = Math.round(message.mapId);
    }
    if (message.channelId !== 0) {
      obj.channelId = Math.round(message.channelId);
    }
    if (message.pos !== undefined) {
      obj.pos = Position.toJSON(message.pos);
    }
    if (!message.levelUuid.equals(Long.ZERO)) {
      obj.levelUuid = (message.levelUuid || Long.ZERO).toString();
    }
    if (message.levelPos !== undefined) {
      obj.levelPos = Position.toJSON(message.levelPos);
    }
    if (message.levelMapId !== 0) {
      obj.levelMapId = Math.round(message.levelMapId);
    }
    if (message.levelReviveId !== 0) {
      obj.levelReviveId = Math.round(message.levelReviveId);
    }
    if (message.recordId) {
      const entries = Object.entries(message.recordId);
      if (entries.length > 0) {
        obj.recordId = {};
        entries.forEach(([k, v]) => {
          obj.recordId[k] = Math.round(v);
        });
      }
    }
    if (message.planeId !== 0) {
      obj.planeId = Math.round(message.planeId);
    }
    if (message.sceneLayer !== 0) {
      obj.sceneLayer = Math.round(message.sceneLayer);
    }
    if (message.canSwitchLayer !== false) {
      obj.canSwitchLayer = message.canSwitchLayer;
    }
    if (message.beforeFallPos !== undefined) {
      obj.beforeFallPos = Position.toJSON(message.beforeFallPos);
    }
    if (message.sceneGuid !== "") {
      obj.sceneGuid = message.sceneGuid;
    }
    if (message.dungeonGuid !== "") {
      obj.dungeonGuid = message.dungeonGuid;
    }
    if (message.lineId !== 0) {
      obj.lineId = Math.round(message.lineId);
    }
    if (message.visualLayerConfigId !== 0) {
      obj.visualLayerConfigId = Math.round(message.visualLayerConfigId);
    }
    if (message.lastSceneData !== undefined) {
      obj.lastSceneData = LastSceneData.toJSON(message.lastSceneData);
    }
    if (message.sceneAreaId !== 0) {
      obj.sceneAreaId = Math.round(message.sceneAreaId);
    }
    if (message.levelAreaId !== 0) {
      obj.levelAreaId = Math.round(message.levelAreaId);
    }
    if (message.beforeFallSceneAreaId !== 0) {
      obj.beforeFallSceneAreaId = Math.round(message.beforeFallSceneAreaId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneData>, I>>(base?: I): SceneData {
    return SceneData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneData>, I>>(object: I): SceneData {
    const message = createBaseSceneData();
    message.mapId = object.mapId ?? 0;
    message.channelId = object.channelId ?? 0;
    message.pos = (object.pos !== undefined && object.pos !== null) ? Position.fromPartial(object.pos) : undefined;
    message.levelUuid = (object.levelUuid !== undefined && object.levelUuid !== null)
      ? Long.fromValue(object.levelUuid)
      : Long.ZERO;
    message.levelPos = (object.levelPos !== undefined && object.levelPos !== null)
      ? Position.fromPartial(object.levelPos)
      : undefined;
    message.levelMapId = object.levelMapId ?? 0;
    message.levelReviveId = object.levelReviveId ?? 0;
    message.recordId = Object.entries(object.recordId ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.planeId = object.planeId ?? 0;
    message.sceneLayer = object.sceneLayer ?? 0;
    message.canSwitchLayer = object.canSwitchLayer ?? false;
    message.beforeFallPos = (object.beforeFallPos !== undefined && object.beforeFallPos !== null)
      ? Position.fromPartial(object.beforeFallPos)
      : undefined;
    message.sceneGuid = object.sceneGuid ?? "";
    message.dungeonGuid = object.dungeonGuid ?? "";
    message.lineId = object.lineId ?? 0;
    message.visualLayerConfigId = object.visualLayerConfigId ?? 0;
    message.lastSceneData = (object.lastSceneData !== undefined && object.lastSceneData !== null)
      ? LastSceneData.fromPartial(object.lastSceneData)
      : undefined;
    message.sceneAreaId = object.sceneAreaId ?? 0;
    message.levelAreaId = object.levelAreaId ?? 0;
    message.beforeFallSceneAreaId = object.beforeFallSceneAreaId ?? 0;
    return message;
  },
};

function createBaseSceneData_RecordIdEntry(): SceneData_RecordIdEntry {
  return { key: 0, value: 0 };
}

export const SceneData_RecordIdEntry: MessageFns<SceneData_RecordIdEntry> = {
  encode(message: SceneData_RecordIdEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SceneData_RecordIdEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSceneData_RecordIdEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): SceneData_RecordIdEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: SceneData_RecordIdEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SceneData_RecordIdEntry>, I>>(base?: I): SceneData_RecordIdEntry {
    return SceneData_RecordIdEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SceneData_RecordIdEntry>, I>>(object: I): SceneData_RecordIdEntry {
    const message = createBaseSceneData_RecordIdEntry();
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
