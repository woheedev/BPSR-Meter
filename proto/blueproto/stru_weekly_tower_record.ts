/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface WeeklyTowerRecord {
  beginTime: Long;
  maxClimbUpId: number;
  awardClimbUpIds: number[];
  ruleId: number;
}

function createBaseWeeklyTowerRecord(): WeeklyTowerRecord {
  return { beginTime: Long.ZERO, maxClimbUpId: 0, awardClimbUpIds: [], ruleId: 0 };
}

export const WeeklyTowerRecord: MessageFns<WeeklyTowerRecord> = {
  encode(message: WeeklyTowerRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.beginTime.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.beginTime.toString());
    }
    if (message.maxClimbUpId !== 0) {
      writer.uint32(16).int32(message.maxClimbUpId);
    }
    writer.uint32(26).fork();
    for (const v of message.awardClimbUpIds) {
      writer.int32(v);
    }
    writer.join();
    if (message.ruleId !== 0) {
      writer.uint32(32).int32(message.ruleId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WeeklyTowerRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeeklyTowerRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.beginTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.maxClimbUpId = reader.int32();
          continue;
        }
        case 3: {
          if (tag === 24) {
            message.awardClimbUpIds.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.awardClimbUpIds.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.ruleId = reader.int32();
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

  fromJSON(object: any): WeeklyTowerRecord {
    return {
      beginTime: isSet(object.beginTime) ? Long.fromValue(object.beginTime) : Long.ZERO,
      maxClimbUpId: isSet(object.maxClimbUpId) ? globalThis.Number(object.maxClimbUpId) : 0,
      awardClimbUpIds: globalThis.Array.isArray(object?.awardClimbUpIds)
        ? object.awardClimbUpIds.map((e: any) => globalThis.Number(e))
        : [],
      ruleId: isSet(object.ruleId) ? globalThis.Number(object.ruleId) : 0,
    };
  },

  toJSON(message: WeeklyTowerRecord): unknown {
    const obj: any = {};
    if (!message.beginTime.equals(Long.ZERO)) {
      obj.beginTime = (message.beginTime || Long.ZERO).toString();
    }
    if (message.maxClimbUpId !== 0) {
      obj.maxClimbUpId = Math.round(message.maxClimbUpId);
    }
    if (message.awardClimbUpIds?.length) {
      obj.awardClimbUpIds = message.awardClimbUpIds.map((e) => Math.round(e));
    }
    if (message.ruleId !== 0) {
      obj.ruleId = Math.round(message.ruleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WeeklyTowerRecord>, I>>(base?: I): WeeklyTowerRecord {
    return WeeklyTowerRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WeeklyTowerRecord>, I>>(object: I): WeeklyTowerRecord {
    const message = createBaseWeeklyTowerRecord();
    message.beginTime = (object.beginTime !== undefined && object.beginTime !== null)
      ? Long.fromValue(object.beginTime)
      : Long.ZERO;
    message.maxClimbUpId = object.maxClimbUpId ?? 0;
    message.awardClimbUpIds = object.awardClimbUpIds?.map((e) => e) || [];
    message.ruleId = object.ruleId ?? 0;
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
