/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { RideSkinData } from "./stru_ride_skin_data";

export const protobufPackage = "zproto";

export interface RideSkinContainer {
  rideSkinId: number;
  sinks: { [key: number]: RideSkinData };
}

export interface RideSkinContainer_SinksEntry {
  key: number;
  value: RideSkinData | undefined;
}

function createBaseRideSkinContainer(): RideSkinContainer {
  return { rideSkinId: 0, sinks: {} };
}

export const RideSkinContainer: MessageFns<RideSkinContainer> = {
  encode(message: RideSkinContainer, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.rideSkinId !== 0) {
      writer.uint32(8).int32(message.rideSkinId);
    }
    Object.entries(message.sinks).forEach(([key, value]) => {
      RideSkinContainer_SinksEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideSkinContainer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideSkinContainer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.rideSkinId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = RideSkinContainer_SinksEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.sinks[entry2.key] = entry2.value;
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

  fromJSON(object: any): RideSkinContainer {
    return {
      rideSkinId: isSet(object.rideSkinId) ? globalThis.Number(object.rideSkinId) : 0,
      sinks: isObject(object.sinks)
        ? Object.entries(object.sinks).reduce<{ [key: number]: RideSkinData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = RideSkinData.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: RideSkinContainer): unknown {
    const obj: any = {};
    if (message.rideSkinId !== 0) {
      obj.rideSkinId = Math.round(message.rideSkinId);
    }
    if (message.sinks) {
      const entries = Object.entries(message.sinks);
      if (entries.length > 0) {
        obj.sinks = {};
        entries.forEach(([k, v]) => {
          obj.sinks[k] = RideSkinData.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideSkinContainer>, I>>(base?: I): RideSkinContainer {
    return RideSkinContainer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideSkinContainer>, I>>(object: I): RideSkinContainer {
    const message = createBaseRideSkinContainer();
    message.rideSkinId = object.rideSkinId ?? 0;
    message.sinks = Object.entries(object.sinks ?? {}).reduce<{ [key: number]: RideSkinData }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = RideSkinData.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseRideSkinContainer_SinksEntry(): RideSkinContainer_SinksEntry {
  return { key: 0, value: undefined };
}

export const RideSkinContainer_SinksEntry: MessageFns<RideSkinContainer_SinksEntry> = {
  encode(message: RideSkinContainer_SinksEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      RideSkinData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideSkinContainer_SinksEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideSkinContainer_SinksEntry();
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

          message.value = RideSkinData.decode(reader, reader.uint32());
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

  fromJSON(object: any): RideSkinContainer_SinksEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? RideSkinData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: RideSkinContainer_SinksEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = RideSkinData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideSkinContainer_SinksEntry>, I>>(base?: I): RideSkinContainer_SinksEntry {
    return RideSkinContainer_SinksEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideSkinContainer_SinksEntry>, I>>(object: I): RideSkinContainer_SinksEntry {
    const message = createBaseRideSkinContainer_SinksEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? RideSkinData.fromPartial(object.value)
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
