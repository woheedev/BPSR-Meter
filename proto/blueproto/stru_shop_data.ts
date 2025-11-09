/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PlayerBuyRecord } from "./stru_player_buy_record";
import { ShopCompensationData } from "./stru_shop_compensation_data";
import { ShopRefreshRecord } from "./stru_shop_refresh_record";

export const protobufPackage = "zproto";

export interface ShopData {
  refreshList: { [key: number]: ShopRefreshRecord };
  normalShopRecords: { [key: number]: PlayerBuyRecord };
  seasonShopRecords: { [key: number]: PlayerBuyRecord };
  compensationItemData: ShopCompensationData | undefined;
}

export interface ShopData_RefreshListEntry {
  key: number;
  value: ShopRefreshRecord | undefined;
}

export interface ShopData_NormalShopRecordsEntry {
  key: number;
  value: PlayerBuyRecord | undefined;
}

export interface ShopData_SeasonShopRecordsEntry {
  key: number;
  value: PlayerBuyRecord | undefined;
}

function createBaseShopData(): ShopData {
  return { refreshList: {}, normalShopRecords: {}, seasonShopRecords: {}, compensationItemData: undefined };
}

export const ShopData: MessageFns<ShopData> = {
  encode(message: ShopData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.refreshList).forEach(([key, value]) => {
      ShopData_RefreshListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.normalShopRecords).forEach(([key, value]) => {
      ShopData_NormalShopRecordsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.seasonShopRecords).forEach(([key, value]) => {
      ShopData_SeasonShopRecordsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    if (message.compensationItemData !== undefined) {
      ShopCompensationData.encode(message.compensationItemData, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ShopData_RefreshListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.refreshList[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = ShopData_NormalShopRecordsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.normalShopRecords[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = ShopData_SeasonShopRecordsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.seasonShopRecords[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.compensationItemData = ShopCompensationData.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShopData {
    return {
      refreshList: isObject(object.refreshList)
        ? Object.entries(object.refreshList).reduce<{ [key: number]: ShopRefreshRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ShopRefreshRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
      normalShopRecords: isObject(object.normalShopRecords)
        ? Object.entries(object.normalShopRecords).reduce<{ [key: number]: PlayerBuyRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = PlayerBuyRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
      seasonShopRecords: isObject(object.seasonShopRecords)
        ? Object.entries(object.seasonShopRecords).reduce<{ [key: number]: PlayerBuyRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = PlayerBuyRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
      compensationItemData: isSet(object.compensationItemData)
        ? ShopCompensationData.fromJSON(object.compensationItemData)
        : undefined,
    };
  },

  toJSON(message: ShopData): unknown {
    const obj: any = {};
    if (message.refreshList) {
      const entries = Object.entries(message.refreshList);
      if (entries.length > 0) {
        obj.refreshList = {};
        entries.forEach(([k, v]) => {
          obj.refreshList[k] = ShopRefreshRecord.toJSON(v);
        });
      }
    }
    if (message.normalShopRecords) {
      const entries = Object.entries(message.normalShopRecords);
      if (entries.length > 0) {
        obj.normalShopRecords = {};
        entries.forEach(([k, v]) => {
          obj.normalShopRecords[k] = PlayerBuyRecord.toJSON(v);
        });
      }
    }
    if (message.seasonShopRecords) {
      const entries = Object.entries(message.seasonShopRecords);
      if (entries.length > 0) {
        obj.seasonShopRecords = {};
        entries.forEach(([k, v]) => {
          obj.seasonShopRecords[k] = PlayerBuyRecord.toJSON(v);
        });
      }
    }
    if (message.compensationItemData !== undefined) {
      obj.compensationItemData = ShopCompensationData.toJSON(message.compensationItemData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopData>, I>>(base?: I): ShopData {
    return ShopData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopData>, I>>(object: I): ShopData {
    const message = createBaseShopData();
    message.refreshList = Object.entries(object.refreshList ?? {}).reduce<{ [key: number]: ShopRefreshRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ShopRefreshRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.normalShopRecords = Object.entries(object.normalShopRecords ?? {}).reduce<
      { [key: number]: PlayerBuyRecord }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = PlayerBuyRecord.fromPartial(value);
      }
      return acc;
    }, {});
    message.seasonShopRecords = Object.entries(object.seasonShopRecords ?? {}).reduce<
      { [key: number]: PlayerBuyRecord }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = PlayerBuyRecord.fromPartial(value);
      }
      return acc;
    }, {});
    message.compensationItemData = (object.compensationItemData !== undefined && object.compensationItemData !== null)
      ? ShopCompensationData.fromPartial(object.compensationItemData)
      : undefined;
    return message;
  },
};

function createBaseShopData_RefreshListEntry(): ShopData_RefreshListEntry {
  return { key: 0, value: undefined };
}

export const ShopData_RefreshListEntry: MessageFns<ShopData_RefreshListEntry> = {
  encode(message: ShopData_RefreshListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ShopRefreshRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopData_RefreshListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopData_RefreshListEntry();
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

          message.value = ShopRefreshRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShopData_RefreshListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ShopRefreshRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShopData_RefreshListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ShopRefreshRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopData_RefreshListEntry>, I>>(base?: I): ShopData_RefreshListEntry {
    return ShopData_RefreshListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopData_RefreshListEntry>, I>>(object: I): ShopData_RefreshListEntry {
    const message = createBaseShopData_RefreshListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ShopRefreshRecord.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseShopData_NormalShopRecordsEntry(): ShopData_NormalShopRecordsEntry {
  return { key: 0, value: undefined };
}

export const ShopData_NormalShopRecordsEntry: MessageFns<ShopData_NormalShopRecordsEntry> = {
  encode(message: ShopData_NormalShopRecordsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PlayerBuyRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopData_NormalShopRecordsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopData_NormalShopRecordsEntry();
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

          message.value = PlayerBuyRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShopData_NormalShopRecordsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PlayerBuyRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShopData_NormalShopRecordsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PlayerBuyRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopData_NormalShopRecordsEntry>, I>>(base?: I): ShopData_NormalShopRecordsEntry {
    return ShopData_NormalShopRecordsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopData_NormalShopRecordsEntry>, I>>(
    object: I,
  ): ShopData_NormalShopRecordsEntry {
    const message = createBaseShopData_NormalShopRecordsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayerBuyRecord.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseShopData_SeasonShopRecordsEntry(): ShopData_SeasonShopRecordsEntry {
  return { key: 0, value: undefined };
}

export const ShopData_SeasonShopRecordsEntry: MessageFns<ShopData_SeasonShopRecordsEntry> = {
  encode(message: ShopData_SeasonShopRecordsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PlayerBuyRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShopData_SeasonShopRecordsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShopData_SeasonShopRecordsEntry();
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

          message.value = PlayerBuyRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShopData_SeasonShopRecordsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PlayerBuyRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShopData_SeasonShopRecordsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PlayerBuyRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShopData_SeasonShopRecordsEntry>, I>>(base?: I): ShopData_SeasonShopRecordsEntry {
    return ShopData_SeasonShopRecordsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShopData_SeasonShopRecordsEntry>, I>>(
    object: I,
  ): ShopData_SeasonShopRecordsEntry {
    const message = createBaseShopData_SeasonShopRecordsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayerBuyRecord.fromPartial(object.value)
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
