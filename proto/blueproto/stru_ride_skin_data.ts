/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface RideSkinData {
  activateTime: Long;
}

function createBaseRideSkinData(): RideSkinData {
  return { activateTime: Long.ZERO };
}

export const RideSkinData: MessageFns<RideSkinData> = {
  encode(message: RideSkinData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.activateTime.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.activateTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideSkinData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideSkinData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.activateTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): RideSkinData {
    return { activateTime: isSet(object.activateTime) ? Long.fromValue(object.activateTime) : Long.ZERO };
  },

  toJSON(message: RideSkinData): unknown {
    const obj: any = {};
    if (!message.activateTime.equals(Long.ZERO)) {
      obj.activateTime = (message.activateTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideSkinData>, I>>(base?: I): RideSkinData {
    return RideSkinData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideSkinData>, I>>(object: I): RideSkinData {
    const message = createBaseRideSkinData();
    message.activateTime = (object.activateTime !== undefined && object.activateTime !== null)
      ? Long.fromValue(object.activateTime)
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
