/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MonsterTargetInfo } from "./stru_monster_target_info";

export const protobufPackage = "zproto";

export interface MonsterHuntTarget {
  monsterId: number;
  targetInfoList: { [key: number]: MonsterTargetInfo };
}

export interface MonsterHuntTarget_TargetInfoListEntry {
  key: number;
  value: MonsterTargetInfo | undefined;
}

function createBaseMonsterHuntTarget(): MonsterHuntTarget {
  return { monsterId: 0, targetInfoList: {} };
}

export const MonsterHuntTarget: MessageFns<MonsterHuntTarget> = {
  encode(message: MonsterHuntTarget, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.monsterId !== 0) {
      writer.uint32(8).int32(message.monsterId);
    }
    Object.entries(message.targetInfoList).forEach(([key, value]) => {
      MonsterHuntTarget_TargetInfoListEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterHuntTarget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterHuntTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.monsterId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = MonsterHuntTarget_TargetInfoListEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.targetInfoList[entry2.key] = entry2.value;
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

  fromJSON(object: any): MonsterHuntTarget {
    return {
      monsterId: isSet(object.monsterId) ? globalThis.Number(object.monsterId) : 0,
      targetInfoList: isObject(object.targetInfoList)
        ? Object.entries(object.targetInfoList).reduce<{ [key: number]: MonsterTargetInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MonsterTargetInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MonsterHuntTarget): unknown {
    const obj: any = {};
    if (message.monsterId !== 0) {
      obj.monsterId = Math.round(message.monsterId);
    }
    if (message.targetInfoList) {
      const entries = Object.entries(message.targetInfoList);
      if (entries.length > 0) {
        obj.targetInfoList = {};
        entries.forEach(([k, v]) => {
          obj.targetInfoList[k] = MonsterTargetInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterHuntTarget>, I>>(base?: I): MonsterHuntTarget {
    return MonsterHuntTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterHuntTarget>, I>>(object: I): MonsterHuntTarget {
    const message = createBaseMonsterHuntTarget();
    message.monsterId = object.monsterId ?? 0;
    message.targetInfoList = Object.entries(object.targetInfoList ?? {}).reduce<{ [key: number]: MonsterTargetInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MonsterTargetInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseMonsterHuntTarget_TargetInfoListEntry(): MonsterHuntTarget_TargetInfoListEntry {
  return { key: 0, value: undefined };
}

export const MonsterHuntTarget_TargetInfoListEntry: MessageFns<MonsterHuntTarget_TargetInfoListEntry> = {
  encode(message: MonsterHuntTarget_TargetInfoListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      MonsterTargetInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonsterHuntTarget_TargetInfoListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonsterHuntTarget_TargetInfoListEntry();
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

          message.value = MonsterTargetInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MonsterHuntTarget_TargetInfoListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MonsterTargetInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MonsterHuntTarget_TargetInfoListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MonsterTargetInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonsterHuntTarget_TargetInfoListEntry>, I>>(
    base?: I,
  ): MonsterHuntTarget_TargetInfoListEntry {
    return MonsterHuntTarget_TargetInfoListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonsterHuntTarget_TargetInfoListEntry>, I>>(
    object: I,
  ): MonsterHuntTarget_TargetInfoListEntry {
    const message = createBaseMonsterHuntTarget_TargetInfoListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MonsterTargetInfo.fromPartial(object.value)
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
