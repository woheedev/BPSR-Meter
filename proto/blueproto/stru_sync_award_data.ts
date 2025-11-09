/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LevelUpAward } from "./stru_level_up_award";

export const protobufPackage = "zproto";

export interface SyncAwardData {
  levelUpAwardInfos: { [key: number]: LevelUpAward };
}

export interface SyncAwardData_LevelUpAwardInfosEntry {
  key: number;
  value: LevelUpAward | undefined;
}

function createBaseSyncAwardData(): SyncAwardData {
  return { levelUpAwardInfos: {} };
}

export const SyncAwardData: MessageFns<SyncAwardData> = {
  encode(message: SyncAwardData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.levelUpAwardInfos).forEach(([key, value]) => {
      SyncAwardData_LevelUpAwardInfosEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncAwardData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncAwardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SyncAwardData_LevelUpAwardInfosEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.levelUpAwardInfos[entry1.key] = entry1.value;
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

  fromJSON(object: any): SyncAwardData {
    return {
      levelUpAwardInfos: isObject(object.levelUpAwardInfos)
        ? Object.entries(object.levelUpAwardInfos).reduce<{ [key: number]: LevelUpAward }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = LevelUpAward.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SyncAwardData): unknown {
    const obj: any = {};
    if (message.levelUpAwardInfos) {
      const entries = Object.entries(message.levelUpAwardInfos);
      if (entries.length > 0) {
        obj.levelUpAwardInfos = {};
        entries.forEach(([k, v]) => {
          obj.levelUpAwardInfos[k] = LevelUpAward.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncAwardData>, I>>(base?: I): SyncAwardData {
    return SyncAwardData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncAwardData>, I>>(object: I): SyncAwardData {
    const message = createBaseSyncAwardData();
    message.levelUpAwardInfos = Object.entries(object.levelUpAwardInfos ?? {}).reduce<{ [key: number]: LevelUpAward }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = LevelUpAward.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSyncAwardData_LevelUpAwardInfosEntry(): SyncAwardData_LevelUpAwardInfosEntry {
  return { key: 0, value: undefined };
}

export const SyncAwardData_LevelUpAwardInfosEntry: MessageFns<SyncAwardData_LevelUpAwardInfosEntry> = {
  encode(message: SyncAwardData_LevelUpAwardInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      LevelUpAward.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SyncAwardData_LevelUpAwardInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncAwardData_LevelUpAwardInfosEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = LevelUpAward.decode(reader, reader.uint32());
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

  fromJSON(object: any): SyncAwardData_LevelUpAwardInfosEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? LevelUpAward.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SyncAwardData_LevelUpAwardInfosEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = LevelUpAward.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SyncAwardData_LevelUpAwardInfosEntry>, I>>(
    base?: I,
  ): SyncAwardData_LevelUpAwardInfosEntry {
    return SyncAwardData_LevelUpAwardInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SyncAwardData_LevelUpAwardInfosEntry>, I>>(
    object: I,
  ): SyncAwardData_LevelUpAwardInfosEntry {
    const message = createBaseSyncAwardData_LevelUpAwardInfosEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? LevelUpAward.fromPartial(object.value)
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
