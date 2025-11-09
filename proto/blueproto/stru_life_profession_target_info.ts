/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface LifeProfessionTargetInfo {
  id: number;
  value: number;
  level: number;
  lifeTargetRewardStates: number[];
}

function createBaseLifeProfessionTargetInfo(): LifeProfessionTargetInfo {
  return { id: 0, value: 0, level: 0, lifeTargetRewardStates: [] };
}

export const LifeProfessionTargetInfo: MessageFns<LifeProfessionTargetInfo> = {
  encode(message: LifeProfessionTargetInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    if (message.level !== 0) {
      writer.uint32(24).int32(message.level);
    }
    writer.uint32(34).fork();
    for (const v of message.lifeTargetRewardStates) {
      writer.uint32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfessionTargetInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfessionTargetInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.level = reader.int32();
          continue;
        }
        case 4: {
          if (tag === 32) {
            message.lifeTargetRewardStates.push(reader.uint32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lifeTargetRewardStates.push(reader.uint32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LifeProfessionTargetInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      lifeTargetRewardStates: globalThis.Array.isArray(object?.lifeTargetRewardStates)
        ? object.lifeTargetRewardStates.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: LifeProfessionTargetInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.lifeTargetRewardStates?.length) {
      obj.lifeTargetRewardStates = message.lifeTargetRewardStates.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfessionTargetInfo>, I>>(base?: I): LifeProfessionTargetInfo {
    return LifeProfessionTargetInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfessionTargetInfo>, I>>(object: I): LifeProfessionTargetInfo {
    const message = createBaseLifeProfessionTargetInfo();
    message.id = object.id ?? 0;
    message.value = object.value ?? 0;
    message.level = object.level ?? 0;
    message.lifeTargetRewardStates = object.lifeTargetRewardStates?.map((e) => e) || [];
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
