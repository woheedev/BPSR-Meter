/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PivotInfo {
  id: number;
  breakPoint: number[];
  rewardStage: number[];
  rewardFullState: number;
}

function createBasePivotInfo(): PivotInfo {
  return { id: 0, breakPoint: [], rewardStage: [], rewardFullState: 0 };
}

export const PivotInfo: MessageFns<PivotInfo> = {
  encode(message: PivotInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.breakPoint) {
      writer.int32(v);
    }
    writer.join();
    writer.uint32(26).fork();
    for (const v of message.rewardStage) {
      writer.int32(v);
    }
    writer.join();
    if (message.rewardFullState !== 0) {
      writer.uint32(32).int32(message.rewardFullState);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PivotInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePivotInfo();
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
          if (tag === 16) {
            message.breakPoint.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.breakPoint.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 3: {
          if (tag === 24) {
            message.rewardStage.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rewardStage.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.rewardFullState = reader.int32();
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

  fromJSON(object: any): PivotInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      breakPoint: globalThis.Array.isArray(object?.breakPoint)
        ? object.breakPoint.map((e: any) => globalThis.Number(e))
        : [],
      rewardStage: globalThis.Array.isArray(object?.rewardStage)
        ? object.rewardStage.map((e: any) => globalThis.Number(e))
        : [],
      rewardFullState: isSet(object.rewardFullState) ? globalThis.Number(object.rewardFullState) : 0,
    };
  },

  toJSON(message: PivotInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.breakPoint?.length) {
      obj.breakPoint = message.breakPoint.map((e) => Math.round(e));
    }
    if (message.rewardStage?.length) {
      obj.rewardStage = message.rewardStage.map((e) => Math.round(e));
    }
    if (message.rewardFullState !== 0) {
      obj.rewardFullState = Math.round(message.rewardFullState);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PivotInfo>, I>>(base?: I): PivotInfo {
    return PivotInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PivotInfo>, I>>(object: I): PivotInfo {
    const message = createBasePivotInfo();
    message.id = object.id ?? 0;
    message.breakPoint = object.breakPoint?.map((e) => e) || [];
    message.rewardStage = object.rewardStage?.map((e) => e) || [];
    message.rewardFullState = object.rewardFullState ?? 0;
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
