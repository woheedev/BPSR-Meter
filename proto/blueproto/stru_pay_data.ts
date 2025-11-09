/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FirstPayInfo } from "./stru_first_pay_info";

export const protobufPackage = "zproto";

export interface PayData {
  payData: { [key: number]: FirstPayInfo };
}

export interface PayData_PayDataEntry {
  key: number;
  value: FirstPayInfo | undefined;
}

function createBasePayData(): PayData {
  return { payData: {} };
}

export const PayData: MessageFns<PayData> = {
  encode(message: PayData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.payData).forEach(([key, value]) => {
      PayData_PayDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PayData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PayData_PayDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.payData[entry1.key] = entry1.value;
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

  fromJSON(object: any): PayData {
    return {
      payData: isObject(object.payData)
        ? Object.entries(object.payData).reduce<{ [key: number]: FirstPayInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FirstPayInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PayData): unknown {
    const obj: any = {};
    if (message.payData) {
      const entries = Object.entries(message.payData);
      if (entries.length > 0) {
        obj.payData = {};
        entries.forEach(([k, v]) => {
          obj.payData[k] = FirstPayInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayData>, I>>(base?: I): PayData {
    return PayData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayData>, I>>(object: I): PayData {
    const message = createBasePayData();
    message.payData = Object.entries(object.payData ?? {}).reduce<{ [key: number]: FirstPayInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FirstPayInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePayData_PayDataEntry(): PayData_PayDataEntry {
  return { key: 0, value: undefined };
}

export const PayData_PayDataEntry: MessageFns<PayData_PayDataEntry> = {
  encode(message: PayData_PayDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FirstPayInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PayData_PayDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayData_PayDataEntry();
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

          message.value = FirstPayInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PayData_PayDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FirstPayInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PayData_PayDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FirstPayInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PayData_PayDataEntry>, I>>(base?: I): PayData_PayDataEntry {
    return PayData_PayDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PayData_PayDataEntry>, I>>(object: I): PayData_PayDataEntry {
    const message = createBasePayData_PayDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FirstPayInfo.fromPartial(object.value)
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
