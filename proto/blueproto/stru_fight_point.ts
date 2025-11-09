/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FightPointData } from "./stru_fight_point_data";

export const protobufPackage = "zproto";

export interface FightPoint {
  totalFightPoint: number;
  fightPointData: { [key: number]: FightPointData };
}

export interface FightPoint_FightPointDataEntry {
  key: number;
  value: FightPointData | undefined;
}

function createBaseFightPoint(): FightPoint {
  return { totalFightPoint: 0, fightPointData: {} };
}

export const FightPoint: MessageFns<FightPoint> = {
  encode(message: FightPoint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.totalFightPoint !== 0) {
      writer.uint32(8).int32(message.totalFightPoint);
    }
    Object.entries(message.fightPointData).forEach(([key, value]) => {
      FightPoint_FightPointDataEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightPoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.totalFightPoint = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = FightPoint_FightPointDataEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.fightPointData[entry2.key] = entry2.value;
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

  fromJSON(object: any): FightPoint {
    return {
      totalFightPoint: isSet(object.totalFightPoint) ? globalThis.Number(object.totalFightPoint) : 0,
      fightPointData: isObject(object.fightPointData)
        ? Object.entries(object.fightPointData).reduce<{ [key: number]: FightPointData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FightPointData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FightPoint): unknown {
    const obj: any = {};
    if (message.totalFightPoint !== 0) {
      obj.totalFightPoint = Math.round(message.totalFightPoint);
    }
    if (message.fightPointData) {
      const entries = Object.entries(message.fightPointData);
      if (entries.length > 0) {
        obj.fightPointData = {};
        entries.forEach(([k, v]) => {
          obj.fightPointData[k] = FightPointData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightPoint>, I>>(base?: I): FightPoint {
    return FightPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightPoint>, I>>(object: I): FightPoint {
    const message = createBaseFightPoint();
    message.totalFightPoint = object.totalFightPoint ?? 0;
    message.fightPointData = Object.entries(object.fightPointData ?? {}).reduce<{ [key: number]: FightPointData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FightPointData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseFightPoint_FightPointDataEntry(): FightPoint_FightPointDataEntry {
  return { key: 0, value: undefined };
}

export const FightPoint_FightPointDataEntry: MessageFns<FightPoint_FightPointDataEntry> = {
  encode(message: FightPoint_FightPointDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FightPointData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightPoint_FightPointDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightPoint_FightPointDataEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = FightPointData.decode(reader, reader.uint32());
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

  fromJSON(object: any): FightPoint_FightPointDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FightPointData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FightPoint_FightPointDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FightPointData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightPoint_FightPointDataEntry>, I>>(base?: I): FightPoint_FightPointDataEntry {
    return FightPoint_FightPointDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightPoint_FightPointDataEntry>, I>>(
    object: I,
  ): FightPoint_FightPointDataEntry {
    const message = createBaseFightPoint_FightPointDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FightPointData.fromPartial(object.value)
      : undefined;
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
