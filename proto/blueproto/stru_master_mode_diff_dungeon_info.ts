/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DungeonInfo } from "./stru_dungeon_info";

export const protobufPackage = "zproto";

export interface MasterModeDiffDungeonInfo {
  dungeonInfo: { [key: number]: DungeonInfo };
}

export interface MasterModeDiffDungeonInfo_DungeonInfoEntry {
  key: number;
  value: DungeonInfo | undefined;
}

function createBaseMasterModeDiffDungeonInfo(): MasterModeDiffDungeonInfo {
  return { dungeonInfo: {} };
}

export const MasterModeDiffDungeonInfo: MessageFns<MasterModeDiffDungeonInfo> = {
  encode(message: MasterModeDiffDungeonInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.dungeonInfo).forEach(([key, value]) => {
      MasterModeDiffDungeonInfo_DungeonInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MasterModeDiffDungeonInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterModeDiffDungeonInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MasterModeDiffDungeonInfo_DungeonInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dungeonInfo[entry1.key] = entry1.value;
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

  fromJSON(object: any): MasterModeDiffDungeonInfo {
    return {
      dungeonInfo: isObject(object.dungeonInfo)
        ? Object.entries(object.dungeonInfo).reduce<{ [key: number]: DungeonInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = DungeonInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MasterModeDiffDungeonInfo): unknown {
    const obj: any = {};
    if (message.dungeonInfo) {
      const entries = Object.entries(message.dungeonInfo);
      if (entries.length > 0) {
        obj.dungeonInfo = {};
        entries.forEach(([k, v]) => {
          obj.dungeonInfo[k] = DungeonInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterModeDiffDungeonInfo>, I>>(base?: I): MasterModeDiffDungeonInfo {
    return MasterModeDiffDungeonInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterModeDiffDungeonInfo>, I>>(object: I): MasterModeDiffDungeonInfo {
    const message = createBaseMasterModeDiffDungeonInfo();
    message.dungeonInfo = Object.entries(object.dungeonInfo ?? {}).reduce<{ [key: number]: DungeonInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = DungeonInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseMasterModeDiffDungeonInfo_DungeonInfoEntry(): MasterModeDiffDungeonInfo_DungeonInfoEntry {
  return { key: 0, value: undefined };
}

export const MasterModeDiffDungeonInfo_DungeonInfoEntry: MessageFns<MasterModeDiffDungeonInfo_DungeonInfoEntry> = {
  encode(message: MasterModeDiffDungeonInfo_DungeonInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DungeonInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MasterModeDiffDungeonInfo_DungeonInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterModeDiffDungeonInfo_DungeonInfoEntry();
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

          message.value = DungeonInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MasterModeDiffDungeonInfo_DungeonInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DungeonInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MasterModeDiffDungeonInfo_DungeonInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DungeonInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterModeDiffDungeonInfo_DungeonInfoEntry>, I>>(
    base?: I,
  ): MasterModeDiffDungeonInfo_DungeonInfoEntry {
    return MasterModeDiffDungeonInfo_DungeonInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterModeDiffDungeonInfo_DungeonInfoEntry>, I>>(
    object: I,
  ): MasterModeDiffDungeonInfo_DungeonInfoEntry {
    const message = createBaseMasterModeDiffDungeonInfo_DungeonInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DungeonInfo.fromPartial(object.value)
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
