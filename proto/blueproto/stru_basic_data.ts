/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EBodySize, eBodySizeFromJSON, eBodySizeToJSON } from "./enum_e_body_size";

export const protobufPackage = "zproto";

export interface BasicData {
  charId: Long;
  showId: Long;
  name: string;
  gender: number;
  bodySize: EBodySize;
  level: number;
  sceneId: number;
  personalState: number[];
  offlineTime: Long;
  sceneGuid: string;
  createTime: Long;
  curTalentPoolId: number;
  botAiId: number;
  registerChannel: number;
  charState: Long;
  onlineTime: Long;
  sumSaveDiamond: Long;
  isNewbie: boolean;
}

function createBaseBasicData(): BasicData {
  return {
    charId: Long.ZERO,
    showId: Long.ZERO,
    name: "",
    gender: 0,
    bodySize: 0,
    level: 0,
    sceneId: 0,
    personalState: [],
    offlineTime: Long.ZERO,
    sceneGuid: "",
    createTime: Long.ZERO,
    curTalentPoolId: 0,
    botAiId: 0,
    registerChannel: 0,
    charState: Long.UZERO,
    onlineTime: Long.ZERO,
    sumSaveDiamond: Long.ZERO,
    isNewbie: false,
  };
}

export const BasicData: MessageFns<BasicData> = {
  encode(message: BasicData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.charId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.charId.toString());
    }
    if (!message.showId.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.showId.toString());
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.gender !== 0) {
      writer.uint32(32).int32(message.gender);
    }
    if (message.bodySize !== 0) {
      writer.uint32(40).int32(message.bodySize);
    }
    if (message.level !== 0) {
      writer.uint32(48).int32(message.level);
    }
    if (message.sceneId !== 0) {
      writer.uint32(56).int32(message.sceneId);
    }
    writer.uint32(66).fork();
    for (const v of message.personalState) {
      writer.int32(v);
    }
    writer.join();
    if (!message.offlineTime.equals(Long.ZERO)) {
      writer.uint32(72).int64(message.offlineTime.toString());
    }
    if (message.sceneGuid !== "") {
      writer.uint32(82).string(message.sceneGuid);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      writer.uint32(88).int64(message.createTime.toString());
    }
    if (message.curTalentPoolId !== 0) {
      writer.uint32(96).uint32(message.curTalentPoolId);
    }
    if (message.botAiId !== 0) {
      writer.uint32(104).uint32(message.botAiId);
    }
    if (message.registerChannel !== 0) {
      writer.uint32(112).int32(message.registerChannel);
    }
    if (!message.charState.equals(Long.UZERO)) {
      writer.uint32(120).uint64(message.charState.toString());
    }
    if (!message.onlineTime.equals(Long.ZERO)) {
      writer.uint32(128).int64(message.onlineTime.toString());
    }
    if (!message.sumSaveDiamond.equals(Long.ZERO)) {
      writer.uint32(136).int64(message.sumSaveDiamond.toString());
    }
    if (message.isNewbie !== false) {
      writer.uint32(144).bool(message.isNewbie);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BasicData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicData();
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

          message.showId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.gender = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.bodySize = reader.int32() as any;
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.level = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.sceneId = reader.int32();
          continue;
        }
        case 8: {
          if (tag === 64) {
            message.personalState.push(reader.int32());

            continue;
          }

          if (tag === 66) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.personalState.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.offlineTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.sceneGuid = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.createTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.curTalentPoolId = reader.uint32();
          continue;
        }
        case 13: {
          if (tag !== 104) {
            break;
          }

          message.botAiId = reader.uint32();
          continue;
        }
        case 14: {
          if (tag !== 112) {
            break;
          }

          message.registerChannel = reader.int32();
          continue;
        }
        case 15: {
          if (tag !== 120) {
            break;
          }

          message.charState = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 16: {
          if (tag !== 128) {
            break;
          }

          message.onlineTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 17: {
          if (tag !== 136) {
            break;
          }

          message.sumSaveDiamond = Long.fromString(reader.int64().toString());
          continue;
        }
        case 18: {
          if (tag !== 144) {
            break;
          }

          message.isNewbie = reader.bool();
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

  fromJSON(object: any): BasicData {
    return {
      charId: isSet(object.charId) ? Long.fromValue(object.charId) : Long.ZERO,
      showId: isSet(object.showId) ? Long.fromValue(object.showId) : Long.ZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      gender: isSet(object.gender) ? globalThis.Number(object.gender) : 0,
      bodySize: isSet(object.bodySize) ? eBodySizeFromJSON(object.bodySize) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      sceneId: isSet(object.sceneId) ? globalThis.Number(object.sceneId) : 0,
      personalState: globalThis.Array.isArray(object?.personalState)
        ? object.personalState.map((e: any) => globalThis.Number(e))
        : [],
      offlineTime: isSet(object.offlineTime) ? Long.fromValue(object.offlineTime) : Long.ZERO,
      sceneGuid: isSet(object.sceneGuid) ? globalThis.String(object.sceneGuid) : "",
      createTime: isSet(object.createTime) ? Long.fromValue(object.createTime) : Long.ZERO,
      curTalentPoolId: isSet(object.curTalentPoolId) ? globalThis.Number(object.curTalentPoolId) : 0,
      botAiId: isSet(object.botAiId) ? globalThis.Number(object.botAiId) : 0,
      registerChannel: isSet(object.registerChannel) ? globalThis.Number(object.registerChannel) : 0,
      charState: isSet(object.charState) ? Long.fromValue(object.charState) : Long.UZERO,
      onlineTime: isSet(object.onlineTime) ? Long.fromValue(object.onlineTime) : Long.ZERO,
      sumSaveDiamond: isSet(object.sumSaveDiamond) ? Long.fromValue(object.sumSaveDiamond) : Long.ZERO,
      isNewbie: isSet(object.isNewbie) ? globalThis.Boolean(object.isNewbie) : false,
    };
  },

  toJSON(message: BasicData): unknown {
    const obj: any = {};
    if (!message.charId.equals(Long.ZERO)) {
      obj.charId = (message.charId || Long.ZERO).toString();
    }
    if (!message.showId.equals(Long.ZERO)) {
      obj.showId = (message.showId || Long.ZERO).toString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.gender !== 0) {
      obj.gender = Math.round(message.gender);
    }
    if (message.bodySize !== 0) {
      obj.bodySize = eBodySizeToJSON(message.bodySize);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.sceneId !== 0) {
      obj.sceneId = Math.round(message.sceneId);
    }
    if (message.personalState?.length) {
      obj.personalState = message.personalState.map((e) => Math.round(e));
    }
    if (!message.offlineTime.equals(Long.ZERO)) {
      obj.offlineTime = (message.offlineTime || Long.ZERO).toString();
    }
    if (message.sceneGuid !== "") {
      obj.sceneGuid = message.sceneGuid;
    }
    if (!message.createTime.equals(Long.ZERO)) {
      obj.createTime = (message.createTime || Long.ZERO).toString();
    }
    if (message.curTalentPoolId !== 0) {
      obj.curTalentPoolId = Math.round(message.curTalentPoolId);
    }
    if (message.botAiId !== 0) {
      obj.botAiId = Math.round(message.botAiId);
    }
    if (message.registerChannel !== 0) {
      obj.registerChannel = Math.round(message.registerChannel);
    }
    if (!message.charState.equals(Long.UZERO)) {
      obj.charState = (message.charState || Long.UZERO).toString();
    }
    if (!message.onlineTime.equals(Long.ZERO)) {
      obj.onlineTime = (message.onlineTime || Long.ZERO).toString();
    }
    if (!message.sumSaveDiamond.equals(Long.ZERO)) {
      obj.sumSaveDiamond = (message.sumSaveDiamond || Long.ZERO).toString();
    }
    if (message.isNewbie !== false) {
      obj.isNewbie = message.isNewbie;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BasicData>, I>>(base?: I): BasicData {
    return BasicData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BasicData>, I>>(object: I): BasicData {
    const message = createBaseBasicData();
    message.charId = (object.charId !== undefined && object.charId !== null)
      ? Long.fromValue(object.charId)
      : Long.ZERO;
    message.showId = (object.showId !== undefined && object.showId !== null)
      ? Long.fromValue(object.showId)
      : Long.ZERO;
    message.name = object.name ?? "";
    message.gender = object.gender ?? 0;
    message.bodySize = object.bodySize ?? 0;
    message.level = object.level ?? 0;
    message.sceneId = object.sceneId ?? 0;
    message.personalState = object.personalState?.map((e) => e) || [];
    message.offlineTime = (object.offlineTime !== undefined && object.offlineTime !== null)
      ? Long.fromValue(object.offlineTime)
      : Long.ZERO;
    message.sceneGuid = object.sceneGuid ?? "";
    message.createTime = (object.createTime !== undefined && object.createTime !== null)
      ? Long.fromValue(object.createTime)
      : Long.ZERO;
    message.curTalentPoolId = object.curTalentPoolId ?? 0;
    message.botAiId = object.botAiId ?? 0;
    message.registerChannel = object.registerChannel ?? 0;
    message.charState = (object.charState !== undefined && object.charState !== null)
      ? Long.fromValue(object.charState)
      : Long.UZERO;
    message.onlineTime = (object.onlineTime !== undefined && object.onlineTime !== null)
      ? Long.fromValue(object.onlineTime)
      : Long.ZERO;
    message.sumSaveDiamond = (object.sumSaveDiamond !== undefined && object.sumSaveDiamond !== null)
      ? Long.fromValue(object.sumSaveDiamond)
      : Long.ZERO;
    message.isNewbie = object.isNewbie ?? false;
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
