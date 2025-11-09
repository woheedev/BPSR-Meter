/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface WarehouseData {
  warehouseId: Long;
}

function createBaseWarehouseData(): WarehouseData {
  return { warehouseId: Long.ZERO };
}

export const WarehouseData: MessageFns<WarehouseData> = {
  encode(message: WarehouseData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.warehouseId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.warehouseId.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WarehouseData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWarehouseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.warehouseId = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): WarehouseData {
    return { warehouseId: isSet(object.warehouseId) ? Long.fromValue(object.warehouseId) : Long.ZERO };
  },

  toJSON(message: WarehouseData): unknown {
    const obj: any = {};
    if (!message.warehouseId.equals(Long.ZERO)) {
      obj.warehouseId = (message.warehouseId || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WarehouseData>, I>>(base?: I): WarehouseData {
    return WarehouseData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WarehouseData>, I>>(object: I): WarehouseData {
    const message = createBaseWarehouseData();
    message.warehouseId = (object.warehouseId !== undefined && object.warehouseId !== null)
      ? Long.fromValue(object.warehouseId)
      : Long.ZERO;
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
