/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface BuffDBData {
  buffUuid: Long;
  firerId: Long;
  buffConfigId: number;
  baseId: number;
  level: number;
  layer: number;
  duration: number;
  count: number;
  createTime: Long;
  partId: number;
  createSceneId: number;
  customParamsKey: string[];
  customParams: number[];
}

function createBaseBuffDBData(): BuffDBData {
  return {
    buffUuid: Long.ZERO,
    firerId: Long.ZERO,
    buffConfigId: 0,
    baseId: 0,
    level: 0,
    layer: 0,
    duration: 0,
    count: 0,
    createTime: Long.ZERO,
    partId: 0,
    createSceneId: 0,
    customParamsKey: [],
    customParams: [],
  };
}

export const BuffDBData: MessageFns<BuffDBData> = {
  encode(message: BuffDBData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.buffUuid.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.buffUuid.toString());
    }
    if (!message.firerId.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.firerId.toString());
    }
    if (message.buffConfigId !== 0) {
      writer.uint32(24).uint32(message.buffConfigId);
    }
    if (message.baseId !== 0) {
      writer.uint32(32).uint32(message.baseId);
    }
    if (message.level !== 0) {
      writer.uint32(40).uint32(message.level);
    }
    if (message.layer !== 0) {
      writer.uint32(48).uint32(message.layer);
    }
    if (message.duration !== 0) {
      writer.uint32(56).int32(message.duration);
    }
    if (message.count !== 0) {
      writer.uint32(64).int32(message.count);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      writer.uint32(72).int64(message.createTime.toString());
    }
    if (message.partId !== 0) {
      writer.uint32(80).int32(message.partId);
    }
    if (message.createSceneId !== 0) {
      writer.uint32(88).int32(message.createSceneId);
    }
    for (const v of message.customParamsKey) {
      writer.uint32(98).string(v!);
    }
    writer.uint32(106).fork();
    for (const v of message.customParams) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BuffDBData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffDBData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.buffUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.firerId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.buffConfigId = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.baseId = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.level = reader.uint32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.layer = reader.uint32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.duration = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.count = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.createTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.partId = reader.int32();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.createSceneId = reader.int32();
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.customParamsKey.push(reader.string());
          continue;
        }
        case 13: {
          if (tag === 104) {
            message.customParams.push(reader.int32());

            continue;
          }

          if (tag === 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.customParams.push(reader.int32());
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

  fromJSON(object: any): BuffDBData {
    return {
      buffUuid: isSet(object.buffUuid) ? Long.fromValue(object.buffUuid) : Long.ZERO,
      firerId: isSet(object.firerId) ? Long.fromValue(object.firerId) : Long.ZERO,
      buffConfigId: isSet(object.buffConfigId) ? globalThis.Number(object.buffConfigId) : 0,
      baseId: isSet(object.baseId) ? globalThis.Number(object.baseId) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      layer: isSet(object.layer) ? globalThis.Number(object.layer) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      createTime: isSet(object.createTime) ? Long.fromValue(object.createTime) : Long.ZERO,
      partId: isSet(object.partId) ? globalThis.Number(object.partId) : 0,
      createSceneId: isSet(object.createSceneId) ? globalThis.Number(object.createSceneId) : 0,
      customParamsKey: globalThis.Array.isArray(object?.customParamsKey)
        ? object.customParamsKey.map((e: any) => globalThis.String(e))
        : [],
      customParams: globalThis.Array.isArray(object?.customParams)
        ? object.customParams.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: BuffDBData): unknown {
    const obj: any = {};
    if (!message.buffUuid.equals(Long.ZERO)) {
      obj.buffUuid = (message.buffUuid || Long.ZERO).toString();
    }
    if (!message.firerId.equals(Long.ZERO)) {
      obj.firerId = (message.firerId || Long.ZERO).toString();
    }
    if (message.buffConfigId !== 0) {
      obj.buffConfigId = Math.round(message.buffConfigId);
    }
    if (message.baseId !== 0) {
      obj.baseId = Math.round(message.baseId);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.layer !== 0) {
      obj.layer = Math.round(message.layer);
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (!message.createTime.equals(Long.ZERO)) {
      obj.createTime = (message.createTime || Long.ZERO).toString();
    }
    if (message.partId !== 0) {
      obj.partId = Math.round(message.partId);
    }
    if (message.createSceneId !== 0) {
      obj.createSceneId = Math.round(message.createSceneId);
    }
    if (message.customParamsKey?.length) {
      obj.customParamsKey = message.customParamsKey;
    }
    if (message.customParams?.length) {
      obj.customParams = message.customParams.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuffDBData>, I>>(base?: I): BuffDBData {
    return BuffDBData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuffDBData>, I>>(object: I): BuffDBData {
    const message = createBaseBuffDBData();
    message.buffUuid = (object.buffUuid !== undefined && object.buffUuid !== null)
      ? Long.fromValue(object.buffUuid)
      : Long.ZERO;
    message.firerId = (object.firerId !== undefined && object.firerId !== null)
      ? Long.fromValue(object.firerId)
      : Long.ZERO;
    message.buffConfigId = object.buffConfigId ?? 0;
    message.baseId = object.baseId ?? 0;
    message.level = object.level ?? 0;
    message.layer = object.layer ?? 0;
    message.duration = object.duration ?? 0;
    message.count = object.count ?? 0;
    message.createTime = (object.createTime !== undefined && object.createTime !== null)
      ? Long.fromValue(object.createTime)
      : Long.ZERO;
    message.partId = object.partId ?? 0;
    message.createSceneId = object.createSceneId ?? 0;
    message.customParamsKey = object.customParamsKey?.map((e) => e) || [];
    message.customParams = object.customParams?.map((e) => e) || [];
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
