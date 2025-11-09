/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MapStickerTaskInfo {
  taskId: number;
  targetNum: { [key: number]: number };
}

export interface MapStickerTaskInfo_TargetNumEntry {
  key: number;
  value: number;
}

function createBaseMapStickerTaskInfo(): MapStickerTaskInfo {
  return { taskId: 0, targetNum: {} };
}

export const MapStickerTaskInfo: MessageFns<MapStickerTaskInfo> = {
  encode(message: MapStickerTaskInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.taskId !== 0) {
      writer.uint32(8).uint32(message.taskId);
    }
    Object.entries(message.targetNum).forEach(([key, value]) => {
      MapStickerTaskInfo_TargetNumEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapStickerTaskInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapStickerTaskInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.taskId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = MapStickerTaskInfo_TargetNumEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.targetNum[entry2.key] = entry2.value;
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

  fromJSON(object: any): MapStickerTaskInfo {
    return {
      taskId: isSet(object.taskId) ? globalThis.Number(object.taskId) : 0,
      targetNum: isObject(object.targetNum)
        ? Object.entries(object.targetNum).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MapStickerTaskInfo): unknown {
    const obj: any = {};
    if (message.taskId !== 0) {
      obj.taskId = Math.round(message.taskId);
    }
    if (message.targetNum) {
      const entries = Object.entries(message.targetNum);
      if (entries.length > 0) {
        obj.targetNum = {};
        entries.forEach(([k, v]) => {
          obj.targetNum[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapStickerTaskInfo>, I>>(base?: I): MapStickerTaskInfo {
    return MapStickerTaskInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapStickerTaskInfo>, I>>(object: I): MapStickerTaskInfo {
    const message = createBaseMapStickerTaskInfo();
    message.taskId = object.taskId ?? 0;
    message.targetNum = Object.entries(object.targetNum ?? {}).reduce<{ [key: number]: number }>(
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

function createBaseMapStickerTaskInfo_TargetNumEntry(): MapStickerTaskInfo_TargetNumEntry {
  return { key: 0, value: 0 };
}

export const MapStickerTaskInfo_TargetNumEntry: MessageFns<MapStickerTaskInfo_TargetNumEntry> = {
  encode(message: MapStickerTaskInfo_TargetNumEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MapStickerTaskInfo_TargetNumEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapStickerTaskInfo_TargetNumEntry();
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

  fromJSON(object: any): MapStickerTaskInfo_TargetNumEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: MapStickerTaskInfo_TargetNumEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapStickerTaskInfo_TargetNumEntry>, I>>(
    base?: I,
  ): MapStickerTaskInfo_TargetNumEntry {
    return MapStickerTaskInfo_TargetNumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapStickerTaskInfo_TargetNumEntry>, I>>(
    object: I,
  ): MapStickerTaskInfo_TargetNumEntry {
    const message = createBaseMapStickerTaskInfo_TargetNumEntry();
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
