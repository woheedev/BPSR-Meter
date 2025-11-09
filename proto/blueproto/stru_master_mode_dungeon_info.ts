/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SeasonMasterModeDungeonInfo } from "./stru_season_master_mode_dungeon_info";

export const protobufPackage = "zproto";

export interface MasterModeDungeonInfo {
  masterModeDungeonInfo: { [key: number]: SeasonMasterModeDungeonInfo };
  isShow: boolean;
}

export interface MasterModeDungeonInfo_MasterModeDungeonInfoEntry {
  key: number;
  value: SeasonMasterModeDungeonInfo | undefined;
}

function createBaseMasterModeDungeonInfo(): MasterModeDungeonInfo {
  return { masterModeDungeonInfo: {}, isShow: false };
}

export const MasterModeDungeonInfo: MessageFns<MasterModeDungeonInfo> = {
  encode(message: MasterModeDungeonInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.masterModeDungeonInfo).forEach(([key, value]) => {
      MasterModeDungeonInfo_MasterModeDungeonInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .join();
    });
    if (message.isShow !== false) {
      writer.uint32(16).bool(message.isShow);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MasterModeDungeonInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterModeDungeonInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MasterModeDungeonInfo_MasterModeDungeonInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.masterModeDungeonInfo[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isShow = reader.bool();
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

  fromJSON(object: any): MasterModeDungeonInfo {
    return {
      masterModeDungeonInfo: isObject(object.masterModeDungeonInfo)
        ? Object.entries(object.masterModeDungeonInfo).reduce<{ [key: number]: SeasonMasterModeDungeonInfo }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = SeasonMasterModeDungeonInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      isShow: isSet(object.isShow) ? globalThis.Boolean(object.isShow) : false,
    };
  },

  toJSON(message: MasterModeDungeonInfo): unknown {
    const obj: any = {};
    if (message.masterModeDungeonInfo) {
      const entries = Object.entries(message.masterModeDungeonInfo);
      if (entries.length > 0) {
        obj.masterModeDungeonInfo = {};
        entries.forEach(([k, v]) => {
          obj.masterModeDungeonInfo[k] = SeasonMasterModeDungeonInfo.toJSON(v);
        });
      }
    }
    if (message.isShow !== false) {
      obj.isShow = message.isShow;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterModeDungeonInfo>, I>>(base?: I): MasterModeDungeonInfo {
    return MasterModeDungeonInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterModeDungeonInfo>, I>>(object: I): MasterModeDungeonInfo {
    const message = createBaseMasterModeDungeonInfo();
    message.masterModeDungeonInfo = Object.entries(object.masterModeDungeonInfo ?? {}).reduce<
      { [key: number]: SeasonMasterModeDungeonInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = SeasonMasterModeDungeonInfo.fromPartial(value);
      }
      return acc;
    }, {});
    message.isShow = object.isShow ?? false;
    return message;
  },
};

function createBaseMasterModeDungeonInfo_MasterModeDungeonInfoEntry(): MasterModeDungeonInfo_MasterModeDungeonInfoEntry {
  return { key: 0, value: undefined };
}

export const MasterModeDungeonInfo_MasterModeDungeonInfoEntry: MessageFns<
  MasterModeDungeonInfo_MasterModeDungeonInfoEntry
> = {
  encode(
    message: MasterModeDungeonInfo_MasterModeDungeonInfoEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      SeasonMasterModeDungeonInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MasterModeDungeonInfo_MasterModeDungeonInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterModeDungeonInfo_MasterModeDungeonInfoEntry();
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

          message.value = SeasonMasterModeDungeonInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MasterModeDungeonInfo_MasterModeDungeonInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonMasterModeDungeonInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MasterModeDungeonInfo_MasterModeDungeonInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonMasterModeDungeonInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MasterModeDungeonInfo_MasterModeDungeonInfoEntry>, I>>(
    base?: I,
  ): MasterModeDungeonInfo_MasterModeDungeonInfoEntry {
    return MasterModeDungeonInfo_MasterModeDungeonInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MasterModeDungeonInfo_MasterModeDungeonInfoEntry>, I>>(
    object: I,
  ): MasterModeDungeonInfo_MasterModeDungeonInfoEntry {
    const message = createBaseMasterModeDungeonInfo_MasterModeDungeonInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonMasterModeDungeonInfo.fromPartial(object.value)
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
