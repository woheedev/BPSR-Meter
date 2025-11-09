/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { GameFunctionData } from "./stru_game_function_data";

export const protobufPackage = "zproto";

export interface UserActivityRewardInfo {
  id: number;
  status: number;
  functions: { [key: number]: GameFunctionData };
}

export interface UserActivityRewardInfo_FunctionsEntry {
  key: number;
  value: GameFunctionData | undefined;
}

function createBaseUserActivityRewardInfo(): UserActivityRewardInfo {
  return { id: 0, status: 0, functions: {} };
}

export const UserActivityRewardInfo: MessageFns<UserActivityRewardInfo> = {
  encode(message: UserActivityRewardInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).uint32(message.status);
    }
    Object.entries(message.functions).forEach(([key, value]) => {
      UserActivityRewardInfo_FunctionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserActivityRewardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserActivityRewardInfo();
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

          message.status = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = UserActivityRewardInfo_FunctionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.functions[entry3.key] = entry3.value;
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

  fromJSON(object: any): UserActivityRewardInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      status: isSet(object.status) ? globalThis.Number(object.status) : 0,
      functions: isObject(object.functions)
        ? Object.entries(object.functions).reduce<{ [key: number]: GameFunctionData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = GameFunctionData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UserActivityRewardInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.functions) {
      const entries = Object.entries(message.functions);
      if (entries.length > 0) {
        obj.functions = {};
        entries.forEach(([k, v]) => {
          obj.functions[k] = GameFunctionData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserActivityRewardInfo>, I>>(base?: I): UserActivityRewardInfo {
    return UserActivityRewardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserActivityRewardInfo>, I>>(object: I): UserActivityRewardInfo {
    const message = createBaseUserActivityRewardInfo();
    message.id = object.id ?? 0;
    message.status = object.status ?? 0;
    message.functions = Object.entries(object.functions ?? {}).reduce<{ [key: number]: GameFunctionData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = GameFunctionData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseUserActivityRewardInfo_FunctionsEntry(): UserActivityRewardInfo_FunctionsEntry {
  return { key: 0, value: undefined };
}

export const UserActivityRewardInfo_FunctionsEntry: MessageFns<UserActivityRewardInfo_FunctionsEntry> = {
  encode(message: UserActivityRewardInfo_FunctionsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      GameFunctionData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserActivityRewardInfo_FunctionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserActivityRewardInfo_FunctionsEntry();
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

          message.value = GameFunctionData.decode(reader, reader.uint32());
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

  fromJSON(object: any): UserActivityRewardInfo_FunctionsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? GameFunctionData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UserActivityRewardInfo_FunctionsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = GameFunctionData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserActivityRewardInfo_FunctionsEntry>, I>>(
    base?: I,
  ): UserActivityRewardInfo_FunctionsEntry {
    return UserActivityRewardInfo_FunctionsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserActivityRewardInfo_FunctionsEntry>, I>>(
    object: I,
  ): UserActivityRewardInfo_FunctionsEntry {
    const message = createBaseUserActivityRewardInfo_FunctionsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? GameFunctionData.fromPartial(object.value)
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
