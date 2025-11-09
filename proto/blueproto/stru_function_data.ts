/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FunctionData {
  unlockedMap: { [key: number]: boolean };
  drawnFunctionIds: number[];
}

export interface FunctionData_UnlockedMapEntry {
  key: number;
  value: boolean;
}

function createBaseFunctionData(): FunctionData {
  return { unlockedMap: {}, drawnFunctionIds: [] };
}

export const FunctionData: MessageFns<FunctionData> = {
  encode(message: FunctionData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.unlockedMap).forEach(([key, value]) => {
      FunctionData_UnlockedMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    writer.uint32(18).fork();
    for (const v of message.drawnFunctionIds) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FunctionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = FunctionData_UnlockedMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.unlockedMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.drawnFunctionIds.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.drawnFunctionIds.push(reader.int32());
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

  fromJSON(object: any): FunctionData {
    return {
      unlockedMap: isObject(object.unlockedMap)
        ? Object.entries(object.unlockedMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      drawnFunctionIds: globalThis.Array.isArray(object?.drawnFunctionIds)
        ? object.drawnFunctionIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: FunctionData): unknown {
    const obj: any = {};
    if (message.unlockedMap) {
      const entries = Object.entries(message.unlockedMap);
      if (entries.length > 0) {
        obj.unlockedMap = {};
        entries.forEach(([k, v]) => {
          obj.unlockedMap[k] = v;
        });
      }
    }
    if (message.drawnFunctionIds?.length) {
      obj.drawnFunctionIds = message.drawnFunctionIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FunctionData>, I>>(base?: I): FunctionData {
    return FunctionData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FunctionData>, I>>(object: I): FunctionData {
    const message = createBaseFunctionData();
    message.unlockedMap = Object.entries(object.unlockedMap ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.drawnFunctionIds = object.drawnFunctionIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseFunctionData_UnlockedMapEntry(): FunctionData_UnlockedMapEntry {
  return { key: 0, value: false };
}

export const FunctionData_UnlockedMapEntry: MessageFns<FunctionData_UnlockedMapEntry> = {
  encode(message: FunctionData_UnlockedMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FunctionData_UnlockedMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionData_UnlockedMapEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
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

  fromJSON(object: any): FunctionData_UnlockedMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: FunctionData_UnlockedMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FunctionData_UnlockedMapEntry>, I>>(base?: I): FunctionData_UnlockedMapEntry {
    return FunctionData_UnlockedMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FunctionData_UnlockedMapEntry>, I>>(
    object: I,
  ): FunctionData_UnlockedMapEntry {
    const message = createBaseFunctionData_UnlockedMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
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
