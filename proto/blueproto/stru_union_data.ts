/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UnionData {
  unionid: Long;
  name: string;
  unionHuntRank: number;
}

function createBaseUnionData(): UnionData {
  return { unionid: Long.ZERO, name: "", unionHuntRank: 0 };
}

export const UnionData: MessageFns<UnionData> = {
  encode(message: UnionData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.unionid.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.unionid.toString());
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.unionHuntRank !== 0) {
      writer.uint32(24).int32(message.unionHuntRank);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.unionid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.unionHuntRank = reader.int32();
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

  fromJSON(object: any): UnionData {
    return {
      unionid: isSet(object.unionid) ? Long.fromValue(object.unionid) : Long.ZERO,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      unionHuntRank: isSet(object.unionHuntRank) ? globalThis.Number(object.unionHuntRank) : 0,
    };
  },

  toJSON(message: UnionData): unknown {
    const obj: any = {};
    if (!message.unionid.equals(Long.ZERO)) {
      obj.unionid = (message.unionid || Long.ZERO).toString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.unionHuntRank !== 0) {
      obj.unionHuntRank = Math.round(message.unionHuntRank);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnionData>, I>>(base?: I): UnionData {
    return UnionData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnionData>, I>>(object: I): UnionData {
    const message = createBaseUnionData();
    message.unionid = (object.unionid !== undefined && object.unionid !== null)
      ? Long.fromValue(object.unionid)
      : Long.ZERO;
    message.name = object.name ?? "";
    message.unionHuntRank = object.unionHuntRank ?? 0;
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
