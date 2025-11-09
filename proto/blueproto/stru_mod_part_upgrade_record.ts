/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ModPartUpgradeRecord {
  partId: number;
  isSuccess: boolean;
}

function createBaseModPartUpgradeRecord(): ModPartUpgradeRecord {
  return { partId: 0, isSuccess: false };
}

export const ModPartUpgradeRecord: MessageFns<ModPartUpgradeRecord> = {
  encode(message: ModPartUpgradeRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.partId !== 0) {
      writer.uint32(8).int32(message.partId);
    }
    if (message.isSuccess !== false) {
      writer.uint32(16).bool(message.isSuccess);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ModPartUpgradeRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModPartUpgradeRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.partId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isSuccess = reader.bool();
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

  fromJSON(object: any): ModPartUpgradeRecord {
    return {
      partId: isSet(object.partId) ? globalThis.Number(object.partId) : 0,
      isSuccess: isSet(object.isSuccess) ? globalThis.Boolean(object.isSuccess) : false,
    };
  },

  toJSON(message: ModPartUpgradeRecord): unknown {
    const obj: any = {};
    if (message.partId !== 0) {
      obj.partId = Math.round(message.partId);
    }
    if (message.isSuccess !== false) {
      obj.isSuccess = message.isSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModPartUpgradeRecord>, I>>(base?: I): ModPartUpgradeRecord {
    return ModPartUpgradeRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModPartUpgradeRecord>, I>>(object: I): ModPartUpgradeRecord {
    const message = createBaseModPartUpgradeRecord();
    message.partId = object.partId ?? 0;
    message.isSuccess = object.isSuccess ?? false;
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
