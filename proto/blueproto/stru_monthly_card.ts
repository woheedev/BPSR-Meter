/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Item } from "./stru_item";
import { MonthlyCardBuyList } from "./stru_monthly_card_buy_list";
import { MonthlyCardInfo } from "./stru_monthly_card_info";

export const protobufPackage = "zproto";

export interface MonthlyCard {
  expireTime: Long;
  monthlyCardInfo: { [key: number]: MonthlyCardInfo };
  lastAwardMonthlyCardTime: number;
  tipsClicked: number;
  tipsDay: number;
  items: Item[];
  monthlyCardBuyList: Map<Long, MonthlyCardBuyList>;
}

export interface MonthlyCard_MonthlyCardInfoEntry {
  key: number;
  value: MonthlyCardInfo | undefined;
}

export interface MonthlyCard_MonthlyCardBuyListEntry {
  key: Long;
  value: MonthlyCardBuyList | undefined;
}

function createBaseMonthlyCard(): MonthlyCard {
  return {
    expireTime: Long.ZERO,
    monthlyCardInfo: {},
    lastAwardMonthlyCardTime: 0,
    tipsClicked: 0,
    tipsDay: 0,
    items: [],
    monthlyCardBuyList: new Map(),
  };
}

export const MonthlyCard: MessageFns<MonthlyCard> = {
  encode(message: MonthlyCard, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.expireTime.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.expireTime.toString());
    }
    Object.entries(message.monthlyCardInfo).forEach(([key, value]) => {
      MonthlyCard_MonthlyCardInfoEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.lastAwardMonthlyCardTime !== 0) {
      writer.uint32(24).int32(message.lastAwardMonthlyCardTime);
    }
    if (message.tipsClicked !== 0) {
      writer.uint32(32).int32(message.tipsClicked);
    }
    if (message.tipsDay !== 0) {
      writer.uint32(40).int32(message.tipsDay);
    }
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(50).fork()).join();
    }
    message.monthlyCardBuyList.forEach((value, key) => {
      MonthlyCard_MonthlyCardBuyListEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonthlyCard {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthlyCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.expireTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = MonthlyCard_MonthlyCardInfoEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.monthlyCardInfo[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.lastAwardMonthlyCardTime = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.tipsClicked = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.tipsDay = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.items.push(Item.decode(reader, reader.uint32()));
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          const entry7 = MonthlyCard_MonthlyCardBuyListEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.monthlyCardBuyList.set(entry7.key, entry7.value);
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

  fromJSON(object: any): MonthlyCard {
    return {
      expireTime: isSet(object.expireTime) ? Long.fromValue(object.expireTime) : Long.ZERO,
      monthlyCardInfo: isObject(object.monthlyCardInfo)
        ? Object.entries(object.monthlyCardInfo).reduce<{ [key: number]: MonthlyCardInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MonthlyCardInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      lastAwardMonthlyCardTime: isSet(object.lastAwardMonthlyCardTime)
        ? globalThis.Number(object.lastAwardMonthlyCardTime)
        : 0,
      tipsClicked: isSet(object.tipsClicked) ? globalThis.Number(object.tipsClicked) : 0,
      tipsDay: isSet(object.tipsDay) ? globalThis.Number(object.tipsDay) : 0,
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : [],
      monthlyCardBuyList: isObject(object.monthlyCardBuyList)
        ? Object.entries(object.monthlyCardBuyList).reduce<Map<Long, MonthlyCardBuyList>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), MonthlyCardBuyList.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: MonthlyCard): unknown {
    const obj: any = {};
    if (!message.expireTime.equals(Long.ZERO)) {
      obj.expireTime = (message.expireTime || Long.ZERO).toString();
    }
    if (message.monthlyCardInfo) {
      const entries = Object.entries(message.monthlyCardInfo);
      if (entries.length > 0) {
        obj.monthlyCardInfo = {};
        entries.forEach(([k, v]) => {
          obj.monthlyCardInfo[k] = MonthlyCardInfo.toJSON(v);
        });
      }
    }
    if (message.lastAwardMonthlyCardTime !== 0) {
      obj.lastAwardMonthlyCardTime = Math.round(message.lastAwardMonthlyCardTime);
    }
    if (message.tipsClicked !== 0) {
      obj.tipsClicked = Math.round(message.tipsClicked);
    }
    if (message.tipsDay !== 0) {
      obj.tipsDay = Math.round(message.tipsDay);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => Item.toJSON(e));
    }
    if (message.monthlyCardBuyList?.size) {
      obj.monthlyCardBuyList = {};
      message.monthlyCardBuyList.forEach((v, k) => {
        obj.monthlyCardBuyList[longToNumber(k)] = MonthlyCardBuyList.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyCard>, I>>(base?: I): MonthlyCard {
    return MonthlyCard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyCard>, I>>(object: I): MonthlyCard {
    const message = createBaseMonthlyCard();
    message.expireTime = (object.expireTime !== undefined && object.expireTime !== null)
      ? Long.fromValue(object.expireTime)
      : Long.ZERO;
    message.monthlyCardInfo = Object.entries(object.monthlyCardInfo ?? {}).reduce<{ [key: number]: MonthlyCardInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MonthlyCardInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.lastAwardMonthlyCardTime = object.lastAwardMonthlyCardTime ?? 0;
    message.tipsClicked = object.tipsClicked ?? 0;
    message.tipsDay = object.tipsDay ?? 0;
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    message.monthlyCardBuyList = (() => {
      const m = new Map();
      (object.monthlyCardBuyList as Map<Long, MonthlyCardBuyList> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, MonthlyCardBuyList.fromPartial(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseMonthlyCard_MonthlyCardInfoEntry(): MonthlyCard_MonthlyCardInfoEntry {
  return { key: 0, value: undefined };
}

export const MonthlyCard_MonthlyCardInfoEntry: MessageFns<MonthlyCard_MonthlyCardInfoEntry> = {
  encode(message: MonthlyCard_MonthlyCardInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      MonthlyCardInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonthlyCard_MonthlyCardInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthlyCard_MonthlyCardInfoEntry();
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

          message.value = MonthlyCardInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): MonthlyCard_MonthlyCardInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MonthlyCardInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MonthlyCard_MonthlyCardInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MonthlyCardInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyCard_MonthlyCardInfoEntry>, I>>(
    base?: I,
  ): MonthlyCard_MonthlyCardInfoEntry {
    return MonthlyCard_MonthlyCardInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyCard_MonthlyCardInfoEntry>, I>>(
    object: I,
  ): MonthlyCard_MonthlyCardInfoEntry {
    const message = createBaseMonthlyCard_MonthlyCardInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MonthlyCardInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMonthlyCard_MonthlyCardBuyListEntry(): MonthlyCard_MonthlyCardBuyListEntry {
  return { key: Long.ZERO, value: undefined };
}

export const MonthlyCard_MonthlyCardBuyListEntry: MessageFns<MonthlyCard_MonthlyCardBuyListEntry> = {
  encode(message: MonthlyCard_MonthlyCardBuyListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      MonthlyCardBuyList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MonthlyCard_MonthlyCardBuyListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthlyCard_MonthlyCardBuyListEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = MonthlyCardBuyList.decode(reader, reader.uint32());
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

  fromJSON(object: any): MonthlyCard_MonthlyCardBuyListEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? MonthlyCardBuyList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MonthlyCard_MonthlyCardBuyListEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = MonthlyCardBuyList.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyCard_MonthlyCardBuyListEntry>, I>>(
    base?: I,
  ): MonthlyCard_MonthlyCardBuyListEntry {
    return MonthlyCard_MonthlyCardBuyListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyCard_MonthlyCardBuyListEntry>, I>>(
    object: I,
  ): MonthlyCard_MonthlyCardBuyListEntry {
    const message = createBaseMonthlyCard_MonthlyCardBuyListEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? MonthlyCardBuyList.fromPartial(object.value)
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
