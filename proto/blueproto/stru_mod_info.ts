/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ModPartUpgradeRecord } from "./stru_mod_part_upgrade_record";

export const protobufPackage = "zproto";

export interface ModInfo {
  partIds: number[];
  upgradeRecords: ModPartUpgradeRecord[];
  successRate: number;
  initLinkNums: number[];
}

function createBaseModInfo(): ModInfo {
  return { partIds: [], upgradeRecords: [], successRate: 0, initLinkNums: [] };
}

export const ModInfo: MessageFns<ModInfo> = {
  encode(message: ModInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.partIds) {
      writer.int32(v);
    }
    writer.join();
    for (const v of message.upgradeRecords) {
      ModPartUpgradeRecord.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.successRate !== 0) {
      writer.uint32(24).int32(message.successRate);
    }
    writer.uint32(34).fork();
    for (const v of message.initLinkNums) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.partIds.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.partIds.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.upgradeRecords.push(ModPartUpgradeRecord.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.successRate = reader.int32();
          continue;
        }
        case 4: {
          if (tag === 32) {
            message.initLinkNums.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.initLinkNums.push(reader.int32());
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

  fromJSON(object: any): ModInfo {
    return {
      partIds: globalThis.Array.isArray(object?.partIds) ? object.partIds.map((e: any) => globalThis.Number(e)) : [],
      upgradeRecords: globalThis.Array.isArray(object?.upgradeRecords)
        ? object.upgradeRecords.map((e: any) => ModPartUpgradeRecord.fromJSON(e))
        : [],
      successRate: isSet(object.successRate) ? globalThis.Number(object.successRate) : 0,
      initLinkNums: globalThis.Array.isArray(object?.initLinkNums)
        ? object.initLinkNums.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: ModInfo): unknown {
    const obj: any = {};
    if (message.partIds?.length) {
      obj.partIds = message.partIds.map((e) => Math.round(e));
    }
    if (message.upgradeRecords?.length) {
      obj.upgradeRecords = message.upgradeRecords.map((e) => ModPartUpgradeRecord.toJSON(e));
    }
    if (message.successRate !== 0) {
      obj.successRate = Math.round(message.successRate);
    }
    if (message.initLinkNums?.length) {
      obj.initLinkNums = message.initLinkNums.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModInfo>, I>>(base?: I): ModInfo {
    return ModInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModInfo>, I>>(object: I): ModInfo {
    const message = createBaseModInfo();
    message.partIds = object.partIds?.map((e) => e) || [];
    message.upgradeRecords = object.upgradeRecords?.map((e) => ModPartUpgradeRecord.fromPartial(e)) || [];
    message.successRate = object.successRate ?? 0;
    message.initLinkNums = object.initLinkNums?.map((e) => e) || [];
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
