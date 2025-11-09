/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UserAttrData {
  state: number;
  fightPoint: Long;
}

function createBaseUserAttrData(): UserAttrData {
  return { state: 0, fightPoint: Long.ZERO };
}

export const UserAttrData: MessageFns<UserAttrData> = {
  encode(message: UserAttrData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (!message.fightPoint.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.fightPoint.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserAttrData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserAttrData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.fightPoint = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): UserAttrData {
    return {
      state: isSet(object.state) ? globalThis.Number(object.state) : 0,
      fightPoint: isSet(object.fightPoint) ? Long.fromValue(object.fightPoint) : Long.ZERO,
    };
  },

  toJSON(message: UserAttrData): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = Math.round(message.state);
    }
    if (!message.fightPoint.equals(Long.ZERO)) {
      obj.fightPoint = (message.fightPoint || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserAttrData>, I>>(base?: I): UserAttrData {
    return UserAttrData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserAttrData>, I>>(object: I): UserAttrData {
    const message = createBaseUserAttrData();
    message.state = object.state ?? 0;
    message.fightPoint = (object.fightPoint !== undefined && object.fightPoint !== null)
      ? Long.fromValue(object.fightPoint)
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
