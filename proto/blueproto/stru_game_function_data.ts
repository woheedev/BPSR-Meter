/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FunctionTimeData } from "./stru_function_time_data";

export const protobufPackage = "zproto";

export interface GameFunctionData {
  id: number;
  state: boolean;
  productId: number;
  functionTimes: { [key: number]: FunctionTimeData };
}

export interface GameFunctionData_FunctionTimesEntry {
  key: number;
  value: FunctionTimeData | undefined;
}

function createBaseGameFunctionData(): GameFunctionData {
  return { id: 0, state: false, productId: 0, functionTimes: {} };
}

export const GameFunctionData: MessageFns<GameFunctionData> = {
  encode(message: GameFunctionData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.state !== false) {
      writer.uint32(16).bool(message.state);
    }
    if (message.productId !== 0) {
      writer.uint32(24).uint32(message.productId);
    }
    Object.entries(message.functionTimes).forEach(([key, value]) => {
      GameFunctionData_FunctionTimesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameFunctionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameFunctionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.state = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.productId = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = GameFunctionData_FunctionTimesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.functionTimes[entry4.key] = entry4.value;
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

  fromJSON(object: any): GameFunctionData {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      state: isSet(object.state) ? globalThis.Boolean(object.state) : false,
      productId: isSet(object.productId) ? globalThis.Number(object.productId) : 0,
      functionTimes: isObject(object.functionTimes)
        ? Object.entries(object.functionTimes).reduce<{ [key: number]: FunctionTimeData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FunctionTimeData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GameFunctionData): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.state !== false) {
      obj.state = message.state;
    }
    if (message.productId !== 0) {
      obj.productId = Math.round(message.productId);
    }
    if (message.functionTimes) {
      const entries = Object.entries(message.functionTimes);
      if (entries.length > 0) {
        obj.functionTimes = {};
        entries.forEach(([k, v]) => {
          obj.functionTimes[k] = FunctionTimeData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameFunctionData>, I>>(base?: I): GameFunctionData {
    return GameFunctionData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameFunctionData>, I>>(object: I): GameFunctionData {
    const message = createBaseGameFunctionData();
    message.id = object.id ?? 0;
    message.state = object.state ?? false;
    message.productId = object.productId ?? 0;
    message.functionTimes = Object.entries(object.functionTimes ?? {}).reduce<{ [key: number]: FunctionTimeData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FunctionTimeData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseGameFunctionData_FunctionTimesEntry(): GameFunctionData_FunctionTimesEntry {
  return { key: 0, value: undefined };
}

export const GameFunctionData_FunctionTimesEntry: MessageFns<GameFunctionData_FunctionTimesEntry> = {
  encode(message: GameFunctionData_FunctionTimesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      FunctionTimeData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GameFunctionData_FunctionTimesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameFunctionData_FunctionTimesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = FunctionTimeData.decode(reader, reader.uint32());
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

  fromJSON(object: any): GameFunctionData_FunctionTimesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FunctionTimeData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GameFunctionData_FunctionTimesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FunctionTimeData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GameFunctionData_FunctionTimesEntry>, I>>(
    base?: I,
  ): GameFunctionData_FunctionTimesEntry {
    return GameFunctionData_FunctionTimesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GameFunctionData_FunctionTimesEntry>, I>>(
    object: I,
  ): GameFunctionData_FunctionTimesEntry {
    const message = createBaseGameFunctionData_FunctionTimesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FunctionTimeData.fromPartial(object.value)
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
