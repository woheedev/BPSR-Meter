/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FightSourceInfo {
  fightSourceType: number;
  sourceConfigId: number;
}

function createBaseFightSourceInfo(): FightSourceInfo {
  return { fightSourceType: 0, sourceConfigId: 0 };
}

export const FightSourceInfo: MessageFns<FightSourceInfo> = {
  encode(message: FightSourceInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fightSourceType !== 0) {
      writer.uint32(8).int32(message.fightSourceType);
    }
    if (message.sourceConfigId !== 0) {
      writer.uint32(16).int32(message.sourceConfigId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightSourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.fightSourceType = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.sourceConfigId = reader.int32();
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

  fromJSON(object: any): FightSourceInfo {
    return {
      fightSourceType: isSet(object.fightSourceType) ? globalThis.Number(object.fightSourceType) : 0,
      sourceConfigId: isSet(object.sourceConfigId) ? globalThis.Number(object.sourceConfigId) : 0,
    };
  },

  toJSON(message: FightSourceInfo): unknown {
    const obj: any = {};
    if (message.fightSourceType !== 0) {
      obj.fightSourceType = Math.round(message.fightSourceType);
    }
    if (message.sourceConfigId !== 0) {
      obj.sourceConfigId = Math.round(message.sourceConfigId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightSourceInfo>, I>>(base?: I): FightSourceInfo {
    return FightSourceInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightSourceInfo>, I>>(object: I): FightSourceInfo {
    const message = createBaseFightSourceInfo();
    message.fightSourceType = object.fightSourceType ?? 0;
    message.sourceConfigId = object.sourceConfigId ?? 0;
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
