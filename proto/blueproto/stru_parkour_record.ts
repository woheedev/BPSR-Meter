/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ParkourRecord {
  time: number;
  state: number;
  perfectTime: number;
}

function createBaseParkourRecord(): ParkourRecord {
  return { time: 0, state: 0, perfectTime: 0 };
}

export const ParkourRecord: MessageFns<ParkourRecord> = {
  encode(message: ParkourRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.state !== 0) {
      writer.uint32(16).uint32(message.state);
    }
    if (message.perfectTime !== 0) {
      writer.uint32(24).uint32(message.perfectTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ParkourRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParkourRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.time = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.state = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.perfectTime = reader.uint32();
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

  fromJSON(object: any): ParkourRecord {
    return {
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
      state: isSet(object.state) ? globalThis.Number(object.state) : 0,
      perfectTime: isSet(object.perfectTime) ? globalThis.Number(object.perfectTime) : 0,
    };
  },

  toJSON(message: ParkourRecord): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    if (message.state !== 0) {
      obj.state = Math.round(message.state);
    }
    if (message.perfectTime !== 0) {
      obj.perfectTime = Math.round(message.perfectTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParkourRecord>, I>>(base?: I): ParkourRecord {
    return ParkourRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParkourRecord>, I>>(object: I): ParkourRecord {
    const message = createBaseParkourRecord();
    message.time = object.time ?? 0;
    message.state = object.state ?? 0;
    message.perfectTime = object.perfectTime ?? 0;
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
