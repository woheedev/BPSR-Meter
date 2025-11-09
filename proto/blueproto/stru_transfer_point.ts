/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface TransferPoint {
  points: { [key: number]: number };
}

export interface TransferPoint_PointsEntry {
  key: number;
  value: number;
}

function createBaseTransferPoint(): TransferPoint {
  return { points: {} };
}

export const TransferPoint: MessageFns<TransferPoint> = {
  encode(message: TransferPoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.points).forEach(([key, value]) => {
      TransferPoint_PointsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransferPoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = TransferPoint_PointsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.points[entry1.key] = entry1.value;
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

  fromJSON(object: any): TransferPoint {
    return {
      points: isObject(object.points)
        ? Object.entries(object.points).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TransferPoint): unknown {
    const obj: any = {};
    if (message.points) {
      const entries = Object.entries(message.points);
      if (entries.length > 0) {
        obj.points = {};
        entries.forEach(([k, v]) => {
          obj.points[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransferPoint>, I>>(base?: I): TransferPoint {
    return TransferPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransferPoint>, I>>(object: I): TransferPoint {
    const message = createBaseTransferPoint();
    message.points = Object.entries(object.points ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTransferPoint_PointsEntry(): TransferPoint_PointsEntry {
  return { key: 0, value: 0 };
}

export const TransferPoint_PointsEntry: MessageFns<TransferPoint_PointsEntry> = {
  encode(message: TransferPoint_PointsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransferPoint_PointsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferPoint_PointsEntry();
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

  fromJSON(object: any): TransferPoint_PointsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TransferPoint_PointsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransferPoint_PointsEntry>, I>>(base?: I): TransferPoint_PointsEntry {
    return TransferPoint_PointsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransferPoint_PointsEntry>, I>>(object: I): TransferPoint_PointsEntry {
    const message = createBaseTransferPoint_PointsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
