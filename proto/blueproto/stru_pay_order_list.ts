/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PayData } from "./stru_pay_data";
import { RefundItemInfo } from "./stru_refund_item_info";

export const protobufPackage = "zproto";

export interface PayOrderList {
  payOrderList: string[];
  payRefundList: string[];
  firstPay: PayData | undefined;
  orderList: { [key: string]: number };
  orderIndexList: Map<Long, number>;
  orderIndexRefundList: Map<Long, RefundItemInfo>;
}

export interface PayOrderList_OrderListEntry {
  key: string;
  value: number;
}

export interface PayOrderList_OrderIndexListEntry {
  key: Long;
  value: number;
}

export interface PayOrderList_OrderIndexRefundListEntry {
  key: Long;
  value: RefundItemInfo | undefined;
}

function createBasePayOrderList(): PayOrderList {
  return {
    payOrderList: [],
    payRefundList: [],
    firstPay: undefined,
    orderList: {},
    orderIndexList: new Map(),
    orderIndexRefundList: new Map(),
  };
}

export const PayOrderList: MessageFns<PayOrderList> = {
  encode(message: PayOrderList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.payOrderList) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.payRefundList) {
      writer.uint32(18).string(v!);
    }
    if (message.firstPay !== undefined) {
      PayData.encode(message.firstPay, writer.uint32(26).fork()).join();
    }
    Object.entries(message.orderList).forEach(([key, value]) => {
      PayOrderList_OrderListEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    message.orderIndexList.forEach((value, key) => {
      PayOrderList_OrderIndexListEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    message.orderIndexRefundList.forEach((value, key) => {
      PayOrderList_OrderIndexRefundListEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PayOrderList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayOrderList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.payOrderList.push(reader.string());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.payRefundList.push(reader.string());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.firstPay = PayData.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = PayOrderList_OrderListEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.orderList[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = PayOrderList_OrderIndexListEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.orderIndexList.set(entry5.key, entry5.value);
          }
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = PayOrderList_OrderIndexRefundListEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.orderIndexRefundList.set(entry6.key, entry6.value);
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

  fromJSON(object: any): PayOrderList {
    return {
      payOrderList: globalThis.Array.isArray(object?.payOrderList)
        ? object.payOrderList.map((e: any) => globalThis.String(e))
        : [],
      payRefundList: globalThis.Array.isArray(object?.payRefundList)
        ? object.payRefundList.map((e: any) => globalThis.String(e))
        : [],
      firstPay: isSet(object.firstPay) ? PayData.fromJSON(object.firstPay) : undefined,
      orderList: isObject(object.orderList)
        ? Object.entries(object.orderList).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
      orderIndexList: isObject(object.orderIndexList)
        ? Object.entries(object.orderIndexList).reduce<Map<Long, number>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      orderIndexRefundList: isObject(object.orderIndexRefundList)
        ? Object.entries(object.orderIndexRefundList).reduce<Map<Long, RefundItemInfo>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), RefundItemInfo.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: PayOrderList): unknown {
    const obj: any = {};
    if (message.payOrderList?.length) {
      obj.payOrderList = message.payOrderList;
    }
    if (message.payRefundList?.length) {
      obj.payRefundList = message.payRefundList;
    }
    if (message.firstPay !== undefined) {
      obj.firstPay = PayData.toJSON(message.firstPay);
    }
    if (message.orderList) {
      const entries = Object.entries(message.orderList);
      if (entries.length > 0) {
        obj.orderList = {};
        entries.forEach(([k, v]) => {
          obj.orderList[k] = Math.round(v);
        });
      }
    }
    if (message.orderIndexList?.size) {
      obj.orderIndexList = {};
      message.orderIndexList.forEach((v, k) => {
        obj.orderIndexList[longToNumber(k)] = Math.round(v);
      });
    }
    if (message.orderIndexRefundList?.size) {
      obj.orderIndexRefundList = {};
      message.orderIndexRefundList.forEach((v, k) => {
        obj.orderIndexRefundList[longToNumber(k)] = RefundItemInfo.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayOrderList>, I>>(base?: I): PayOrderList {
    return PayOrderList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayOrderList>, I>>(object: I): PayOrderList {
    const message = createBasePayOrderList();
    message.payOrderList = object.payOrderList?.map((e) => e) || [];
    message.payRefundList = object.payRefundList?.map((e) => e) || [];
    message.firstPay = (object.firstPay !== undefined && object.firstPay !== null)
      ? PayData.fromPartial(object.firstPay)
      : undefined;
    message.orderList = Object.entries(object.orderList ?? {}).reduce<{ [key: string]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.orderIndexList = (() => {
      const m = new Map();
      (object.orderIndexList as Map<Long, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, globalThis.Number(value));
        }
      });
      return m;
    })();
    message.orderIndexRefundList = (() => {
      const m = new Map();
      (object.orderIndexRefundList as Map<Long, RefundItemInfo> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, RefundItemInfo.fromPartial(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBasePayOrderList_OrderListEntry(): PayOrderList_OrderListEntry {
  return { key: "", value: 0 };
}

export const PayOrderList_OrderListEntry: MessageFns<PayOrderList_OrderListEntry> = {
  encode(message: PayOrderList_OrderListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PayOrderList_OrderListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayOrderList_OrderListEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
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

  fromJSON(object: any): PayOrderList_OrderListEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PayOrderList_OrderListEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayOrderList_OrderListEntry>, I>>(base?: I): PayOrderList_OrderListEntry {
    return PayOrderList_OrderListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayOrderList_OrderListEntry>, I>>(object: I): PayOrderList_OrderListEntry {
    const message = createBasePayOrderList_OrderListEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePayOrderList_OrderIndexListEntry(): PayOrderList_OrderIndexListEntry {
  return { key: Long.ZERO, value: 0 };
}

export const PayOrderList_OrderIndexListEntry: MessageFns<PayOrderList_OrderIndexListEntry> = {
  encode(message: PayOrderList_OrderIndexListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PayOrderList_OrderIndexListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayOrderList_OrderIndexListEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
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

  fromJSON(object: any): PayOrderList_OrderIndexListEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PayOrderList_OrderIndexListEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayOrderList_OrderIndexListEntry>, I>>(
    base?: I,
  ): PayOrderList_OrderIndexListEntry {
    return PayOrderList_OrderIndexListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayOrderList_OrderIndexListEntry>, I>>(
    object: I,
  ): PayOrderList_OrderIndexListEntry {
    const message = createBasePayOrderList_OrderIndexListEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePayOrderList_OrderIndexRefundListEntry(): PayOrderList_OrderIndexRefundListEntry {
  return { key: Long.ZERO, value: undefined };
}

export const PayOrderList_OrderIndexRefundListEntry: MessageFns<PayOrderList_OrderIndexRefundListEntry> = {
  encode(message: PayOrderList_OrderIndexRefundListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (message.value !== undefined) {
      RefundItemInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PayOrderList_OrderIndexRefundListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayOrderList_OrderIndexRefundListEntry();
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

          message.value = RefundItemInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PayOrderList_OrderIndexRefundListEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? RefundItemInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PayOrderList_OrderIndexRefundListEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = RefundItemInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayOrderList_OrderIndexRefundListEntry>, I>>(
    base?: I,
  ): PayOrderList_OrderIndexRefundListEntry {
    return PayOrderList_OrderIndexRefundListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayOrderList_OrderIndexRefundListEntry>, I>>(
    object: I,
  ): PayOrderList_OrderIndexRefundListEntry {
    const message = createBasePayOrderList_OrderIndexRefundListEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null)
      ? RefundItemInfo.fromPartial(object.value)
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
