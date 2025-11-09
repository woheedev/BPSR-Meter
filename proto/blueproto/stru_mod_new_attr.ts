/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ModPartUpgradeRecord } from "./stru_mod_part_upgrade_record";

export const protobufPackage = "zproto";

export interface ModNewAttr {
  modParts: number[];
  upgradeRecords: ModPartUpgradeRecord[];
}

function createBaseModNewAttr(): ModNewAttr {
  return { modParts: [], upgradeRecords: [] };
}

export const ModNewAttr: MessageFns<ModNewAttr> = {
  encode(message: ModNewAttr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.modParts) {
      writer.int32(v);
    }
    writer.join();
    for (const v of message.upgradeRecords) {
      ModPartUpgradeRecord.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModNewAttr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModNewAttr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.modParts.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.modParts.push(reader.int32());
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModNewAttr {
    return {
      modParts: globalThis.Array.isArray(object?.modParts) ? object.modParts.map((e: any) => globalThis.Number(e)) : [],
      upgradeRecords: globalThis.Array.isArray(object?.upgradeRecords)
        ? object.upgradeRecords.map((e: any) => ModPartUpgradeRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ModNewAttr): unknown {
    const obj: any = {};
    if (message.modParts?.length) {
      obj.modParts = message.modParts.map((e) => Math.round(e));
    }
    if (message.upgradeRecords?.length) {
      obj.upgradeRecords = message.upgradeRecords.map((e) => ModPartUpgradeRecord.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModNewAttr>, I>>(base?: I): ModNewAttr {
    return ModNewAttr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModNewAttr>, I>>(object: I): ModNewAttr {
    const message = createBaseModNewAttr();
    message.modParts = object.modParts?.map((e) => e) || [];
    message.upgradeRecords = object.upgradeRecords?.map((e) => ModPartUpgradeRecord.fromPartial(e)) || [];
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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
