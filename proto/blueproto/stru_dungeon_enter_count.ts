/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface DungeonEnterCount {
  enterTime: number;
  enterCount: number;
}

function createBaseDungeonEnterCount(): DungeonEnterCount {
  return { enterTime: 0, enterCount: 0 };
}

export const DungeonEnterCount: MessageFns<DungeonEnterCount> = {
  encode(message: DungeonEnterCount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.enterTime !== 0) {
      writer.uint32(8).uint32(message.enterTime);
    }
    if (message.enterCount !== 0) {
      writer.uint32(16).int32(message.enterCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DungeonEnterCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDungeonEnterCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.enterTime = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.enterCount = reader.int32();
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

  fromJSON(object: any): DungeonEnterCount {
    return {
      enterTime: isSet(object.enterTime) ? globalThis.Number(object.enterTime) : 0,
      enterCount: isSet(object.enterCount) ? globalThis.Number(object.enterCount) : 0,
    };
  },

  toJSON(message: DungeonEnterCount): unknown {
    const obj: any = {};
    if (message.enterTime !== 0) {
      obj.enterTime = Math.round(message.enterTime);
    }
    if (message.enterCount !== 0) {
      obj.enterCount = Math.round(message.enterCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DungeonEnterCount>, I>>(base?: I): DungeonEnterCount {
    return DungeonEnterCount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DungeonEnterCount>, I>>(object: I): DungeonEnterCount {
    const message = createBaseDungeonEnterCount();
    message.enterTime = object.enterTime ?? 0;
    message.enterCount = object.enterCount ?? 0;
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
