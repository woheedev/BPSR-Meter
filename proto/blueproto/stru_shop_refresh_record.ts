/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PlayerRefreshShopRecord } from "./stru_player_refresh_shop_record";

export const protobufPackage = "zproto";

export interface ShopRefreshRecord {
  refreshTimestamp: Long;
  refreshCount: number;
  shopRefreshRecords: { [key: number]: PlayerRefreshShopRecord };
}

export interface ShopRefreshRecord_ShopRefreshRecordsEntry {
  key: number;
  value: PlayerRefreshShopRecord | undefined;
}

function createBaseShopRefreshRecord(): ShopRefreshRecord {
  return { refreshTimestamp: Long.ZERO, refreshCount: 0, shopRefreshRecords: {} };
}

export const ShopRefreshRecord: MessageFns<ShopRefreshRecord> = {
  encode(message: ShopRefreshRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.refreshTimestamp.equals(Long.ZERO)) {
      writer.uint32(24).int64(message.refreshTimestamp.toString());
    }
    if (message.refreshCount !== 0) {
      writer.uint32(32).int32(message.refreshCount);
    }
    Object.entries(message.shopRefreshRecords).forEach(([key, value]) => {
      ShopRefreshRecord_ShopRefreshRecordsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopRefreshRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopRefreshRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.refreshTimestamp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.refreshCount = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = ShopRefreshRecord_ShopRefreshRecordsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.shopRefreshRecords[entry5.key] = entry5.value;
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

  fromJSON(object: any): ShopRefreshRecord {
    return {
      refreshTimestamp: isSet(object.refreshTimestamp) ? Long.fromValue(object.refreshTimestamp) : Long.ZERO,
      refreshCount: isSet(object.refreshCount) ? globalThis.Number(object.refreshCount) : 0,
      shopRefreshRecords: isObject(object.shopRefreshRecords)
        ? Object.entries(object.shopRefreshRecords).reduce<{ [key: number]: PlayerRefreshShopRecord }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = PlayerRefreshShopRecord.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: ShopRefreshRecord): unknown {
    const obj: any = {};
    if (!message.refreshTimestamp.equals(Long.ZERO)) {
      obj.refreshTimestamp = (message.refreshTimestamp || Long.ZERO).toString();
    }
    if (message.refreshCount !== 0) {
      obj.refreshCount = Math.round(message.refreshCount);
    }
    if (message.shopRefreshRecords) {
      const entries = Object.entries(message.shopRefreshRecords);
      if (entries.length > 0) {
        obj.shopRefreshRecords = {};
        entries.forEach(([k, v]) => {
          obj.shopRefreshRecords[k] = PlayerRefreshShopRecord.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopRefreshRecord>, I>>(base?: I): ShopRefreshRecord {
    return ShopRefreshRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopRefreshRecord>, I>>(object: I): ShopRefreshRecord {
    const message = createBaseShopRefreshRecord();
    message.refreshTimestamp = (object.refreshTimestamp !== undefined && object.refreshTimestamp !== null)
      ? Long.fromValue(object.refreshTimestamp)
      : Long.ZERO;
    message.refreshCount = object.refreshCount ?? 0;
    message.shopRefreshRecords = Object.entries(object.shopRefreshRecords ?? {}).reduce<
      { [key: number]: PlayerRefreshShopRecord }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = PlayerRefreshShopRecord.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseShopRefreshRecord_ShopRefreshRecordsEntry(): ShopRefreshRecord_ShopRefreshRecordsEntry {
  return { key: 0, value: undefined };
}

export const ShopRefreshRecord_ShopRefreshRecordsEntry: MessageFns<ShopRefreshRecord_ShopRefreshRecordsEntry> = {
  encode(message: ShopRefreshRecord_ShopRefreshRecordsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PlayerRefreshShopRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopRefreshRecord_ShopRefreshRecordsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopRefreshRecord_ShopRefreshRecordsEntry();
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

          message.value = PlayerRefreshShopRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShopRefreshRecord_ShopRefreshRecordsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PlayerRefreshShopRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShopRefreshRecord_ShopRefreshRecordsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PlayerRefreshShopRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopRefreshRecord_ShopRefreshRecordsEntry>, I>>(
    base?: I,
  ): ShopRefreshRecord_ShopRefreshRecordsEntry {
    return ShopRefreshRecord_ShopRefreshRecordsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopRefreshRecord_ShopRefreshRecordsEntry>, I>>(
    object: I,
  ): ShopRefreshRecord_ShopRefreshRecordsEntry {
    const message = createBaseShopRefreshRecord_ShopRefreshRecordsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayerRefreshShopRecord.fromPartial(object.value)
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
