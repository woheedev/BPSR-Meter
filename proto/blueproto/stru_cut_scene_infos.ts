/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CutSceneInfo } from "./stru_cut_scene_info";

export const protobufPackage = "zproto";

export interface CutSceneInfos {
  cutSceneInfos: { [key: number]: CutSceneInfo };
  finishedCutScenes: { [key: number]: boolean };
  finishedInfos: Map<Long, boolean>;
}

export interface CutSceneInfos_CutSceneInfosEntry {
  key: number;
  value: CutSceneInfo | undefined;
}

export interface CutSceneInfos_FinishedCutScenesEntry {
  key: number;
  value: boolean;
}

export interface CutSceneInfos_FinishedInfosEntry {
  key: Long;
  value: boolean;
}

function createBaseCutSceneInfos(): CutSceneInfos {
  return { cutSceneInfos: {}, finishedCutScenes: {}, finishedInfos: new Map() };
}

export const CutSceneInfos: MessageFns<CutSceneInfos> = {
  encode(message: CutSceneInfos, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.cutSceneInfos).forEach(([key, value]) => {
      CutSceneInfos_CutSceneInfosEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.finishedCutScenes).forEach(([key, value]) => {
      CutSceneInfos_FinishedCutScenesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    message.finishedInfos.forEach((value, key) => {
      CutSceneInfos_FinishedInfosEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CutSceneInfos {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCutSceneInfos();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = CutSceneInfos_CutSceneInfosEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.cutSceneInfos[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = CutSceneInfos_FinishedCutScenesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.finishedCutScenes[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = CutSceneInfos_FinishedInfosEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.finishedInfos.set(entry3.key, entry3.value);
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

  fromJSON(object: any): CutSceneInfos {
    return {
      cutSceneInfos: isObject(object.cutSceneInfos)
        ? Object.entries(object.cutSceneInfos).reduce<{ [key: number]: CutSceneInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = CutSceneInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      finishedCutScenes: isObject(object.finishedCutScenes)
        ? Object.entries(object.finishedCutScenes).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      finishedInfos: isObject(object.finishedInfos)
        ? Object.entries(object.finishedInfos).reduce<Map<Long, boolean>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Boolean(value));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: CutSceneInfos): unknown {
    const obj: any = {};
    if (message.cutSceneInfos) {
      const entries = Object.entries(message.cutSceneInfos);
      if (entries.length > 0) {
        obj.cutSceneInfos = {};
        entries.forEach(([k, v]) => {
          obj.cutSceneInfos[k] = CutSceneInfo.toJSON(v);
        });
      }
    }
    if (message.finishedCutScenes) {
      const entries = Object.entries(message.finishedCutScenes);
      if (entries.length > 0) {
        obj.finishedCutScenes = {};
        entries.forEach(([k, v]) => {
          obj.finishedCutScenes[k] = v;
        });
      }
    }
    if (message.finishedInfos?.size) {
      obj.finishedInfos = {};
      message.finishedInfos.forEach((v, k) => {
        obj.finishedInfos[longToNumber(k)] = v;
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CutSceneInfos>, I>>(base?: I): CutSceneInfos {
    return CutSceneInfos.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CutSceneInfos>, I>>(object: I): CutSceneInfos {
    const message = createBaseCutSceneInfos();
    message.cutSceneInfos = Object.entries(object.cutSceneInfos ?? {}).reduce<{ [key: number]: CutSceneInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = CutSceneInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.finishedCutScenes = Object.entries(object.finishedCutScenes ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.finishedInfos = (() => {
      const m = new Map();
      (object.finishedInfos as Map<Long, boolean> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Boolean(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseCutSceneInfos_CutSceneInfosEntry(): CutSceneInfos_CutSceneInfosEntry {
  return { key: 0, value: undefined };
}

export const CutSceneInfos_CutSceneInfosEntry: MessageFns<CutSceneInfos_CutSceneInfosEntry> = {
  encode(message: CutSceneInfos_CutSceneInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CutSceneInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CutSceneInfos_CutSceneInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCutSceneInfos_CutSceneInfosEntry();
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

          message.value = CutSceneInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): CutSceneInfos_CutSceneInfosEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CutSceneInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CutSceneInfos_CutSceneInfosEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CutSceneInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CutSceneInfos_CutSceneInfosEntry>, I>>(
    base?: I,
  ): CutSceneInfos_CutSceneInfosEntry {
    return CutSceneInfos_CutSceneInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CutSceneInfos_CutSceneInfosEntry>, I>>(
    object: I,
  ): CutSceneInfos_CutSceneInfosEntry {
    const message = createBaseCutSceneInfos_CutSceneInfosEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CutSceneInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseCutSceneInfos_FinishedCutScenesEntry(): CutSceneInfos_FinishedCutScenesEntry {
  return { key: 0, value: false };
}

export const CutSceneInfos_FinishedCutScenesEntry: MessageFns<CutSceneInfos_FinishedCutScenesEntry> = {
  encode(message: CutSceneInfos_FinishedCutScenesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CutSceneInfos_FinishedCutScenesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCutSceneInfos_FinishedCutScenesEntry();
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

  fromJSON(object: any): CutSceneInfos_FinishedCutScenesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: CutSceneInfos_FinishedCutScenesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CutSceneInfos_FinishedCutScenesEntry>, I>>(
    base?: I,
  ): CutSceneInfos_FinishedCutScenesEntry {
    return CutSceneInfos_FinishedCutScenesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CutSceneInfos_FinishedCutScenesEntry>, I>>(
    object: I,
  ): CutSceneInfos_FinishedCutScenesEntry {
    const message = createBaseCutSceneInfos_FinishedCutScenesEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseCutSceneInfos_FinishedInfosEntry(): CutSceneInfos_FinishedInfosEntry {
  return { key: Long.ZERO, value: false };
}

export const CutSceneInfos_FinishedInfosEntry: MessageFns<CutSceneInfos_FinishedInfosEntry> = {
  encode(message: CutSceneInfos_FinishedInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CutSceneInfos_FinishedInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCutSceneInfos_FinishedInfosEntry();
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

  fromJSON(object: any): CutSceneInfos_FinishedInfosEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: CutSceneInfos_FinishedInfosEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CutSceneInfos_FinishedInfosEntry>, I>>(
    base?: I,
  ): CutSceneInfos_FinishedInfosEntry {
    return CutSceneInfos_FinishedInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CutSceneInfos_FinishedInfosEntry>, I>>(
    object: I,
  ): CutSceneInfos_FinishedInfosEntry {
    const message = createBaseCutSceneInfos_FinishedInfosEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value ?? false;
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
