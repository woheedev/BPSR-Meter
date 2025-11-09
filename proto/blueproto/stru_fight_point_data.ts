/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FightPointSubData } from "./stru_fight_point_sub_data";

export const protobufPackage = "zproto";

export interface FightPointData {
  functionType: number;
  totalPoint: number;
  point: number;
  subFunctionData: { [key: number]: FightPointSubData };
}

export interface FightPointData_SubFunctionDataEntry {
  key: number;
  value: FightPointSubData | undefined;
}

function createBaseFightPointData(): FightPointData {
  return { functionType: 0, totalPoint: 0, point: 0, subFunctionData: {} };
}

export const FightPointData: MessageFns<FightPointData> = {
  encode(message: FightPointData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.functionType !== 0) {
      writer.uint32(8).int32(message.functionType);
    }
    if (message.totalPoint !== 0) {
      writer.uint32(16).int32(message.totalPoint);
    }
    if (message.point !== 0) {
      writer.uint32(24).int32(message.point);
    }
    Object.entries(message.subFunctionData).forEach(([key, value]) => {
      FightPointData_SubFunctionDataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightPointData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightPointData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.functionType = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.totalPoint = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.point = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = FightPointData_SubFunctionDataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.subFunctionData[entry4.key] = entry4.value;
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

  fromJSON(object: any): FightPointData {
    return {
      functionType: isSet(object.functionType) ? globalThis.Number(object.functionType) : 0,
      totalPoint: isSet(object.totalPoint) ? globalThis.Number(object.totalPoint) : 0,
      point: isSet(object.point) ? globalThis.Number(object.point) : 0,
      subFunctionData: isObject(object.subFunctionData)
        ? Object.entries(object.subFunctionData).reduce<{ [key: number]: FightPointSubData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FightPointSubData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FightPointData): unknown {
    const obj: any = {};
    if (message.functionType !== 0) {
      obj.functionType = Math.round(message.functionType);
    }
    if (message.totalPoint !== 0) {
      obj.totalPoint = Math.round(message.totalPoint);
    }
    if (message.point !== 0) {
      obj.point = Math.round(message.point);
    }
    if (message.subFunctionData) {
      const entries = Object.entries(message.subFunctionData);
      if (entries.length > 0) {
        obj.subFunctionData = {};
        entries.forEach(([k, v]) => {
          obj.subFunctionData[k] = FightPointSubData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightPointData>, I>>(base?: I): FightPointData {
    return FightPointData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightPointData>, I>>(object: I): FightPointData {
    const message = createBaseFightPointData();
    message.functionType = object.functionType ?? 0;
    message.totalPoint = object.totalPoint ?? 0;
    message.point = object.point ?? 0;
    message.subFunctionData = Object.entries(object.subFunctionData ?? {}).reduce<{ [key: number]: FightPointSubData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FightPointSubData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseFightPointData_SubFunctionDataEntry(): FightPointData_SubFunctionDataEntry {
  return { key: 0, value: undefined };
}

export const FightPointData_SubFunctionDataEntry: MessageFns<FightPointData_SubFunctionDataEntry> = {
  encode(message: FightPointData_SubFunctionDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FightPointSubData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FightPointData_SubFunctionDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFightPointData_SubFunctionDataEntry();
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

          message.value = FightPointSubData.decode(reader, reader.uint32());
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

  fromJSON(object: any): FightPointData_SubFunctionDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FightPointSubData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FightPointData_SubFunctionDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FightPointSubData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FightPointData_SubFunctionDataEntry>, I>>(
    base?: I,
  ): FightPointData_SubFunctionDataEntry {
    return FightPointData_SubFunctionDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FightPointData_SubFunctionDataEntry>, I>>(
    object: I,
  ): FightPointData_SubFunctionDataEntry {
    const message = createBaseFightPointData_SubFunctionDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FightPointSubData.fromPartial(object.value)
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
