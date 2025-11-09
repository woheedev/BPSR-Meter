/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TreasureItemTarget } from "./stru_treasure_item_target";

export const protobufPackage = "zproto";

export interface TreasureItemRow {
  configId: number;
  mainTargets: { [key: number]: TreasureItemTarget };
  subTargets: { [key: number]: TreasureItemTarget };
}

export interface TreasureItemRow_MainTargetsEntry {
  key: number;
  value: TreasureItemTarget | undefined;
}

export interface TreasureItemRow_SubTargetsEntry {
  key: number;
  value: TreasureItemTarget | undefined;
}

function createBaseTreasureItemRow(): TreasureItemRow {
  return { configId: 0, mainTargets: {}, subTargets: {} };
}

export const TreasureItemRow: MessageFns<TreasureItemRow> = {
  encode(message: TreasureItemRow, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.configId !== 0) {
      writer.uint32(8).int32(message.configId);
    }
    Object.entries(message.mainTargets).forEach(([key, value]) => {
      TreasureItemRow_MainTargetsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.subTargets).forEach(([key, value]) => {
      TreasureItemRow_SubTargetsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TreasureItemRow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasureItemRow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.configId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = TreasureItemRow_MainTargetsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.mainTargets[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = TreasureItemRow_SubTargetsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.subTargets[entry3.key] = entry3.value;
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

  fromJSON(object: any): TreasureItemRow {
    return {
      configId: isSet(object.configId) ? globalThis.Number(object.configId) : 0,
      mainTargets: isObject(object.mainTargets)
        ? Object.entries(object.mainTargets).reduce<{ [key: number]: TreasureItemTarget }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = TreasureItemTarget.fromJSON(value);
          return acc;
        }, {})
        : {},
      subTargets: isObject(object.subTargets)
        ? Object.entries(object.subTargets).reduce<{ [key: number]: TreasureItemTarget }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = TreasureItemTarget.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TreasureItemRow): unknown {
    const obj: any = {};
    if (message.configId !== 0) {
      obj.configId = Math.round(message.configId);
    }
    if (message.mainTargets) {
      const entries = Object.entries(message.mainTargets);
      if (entries.length > 0) {
        obj.mainTargets = {};
        entries.forEach(([k, v]) => {
          obj.mainTargets[k] = TreasureItemTarget.toJSON(v);
        });
      }
    }
    if (message.subTargets) {
      const entries = Object.entries(message.subTargets);
      if (entries.length > 0) {
        obj.subTargets = {};
        entries.forEach(([k, v]) => {
          obj.subTargets[k] = TreasureItemTarget.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TreasureItemRow>, I>>(base?: I): TreasureItemRow {
    return TreasureItemRow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TreasureItemRow>, I>>(object: I): TreasureItemRow {
    const message = createBaseTreasureItemRow();
    message.configId = object.configId ?? 0;
    message.mainTargets = Object.entries(object.mainTargets ?? {}).reduce<{ [key: number]: TreasureItemTarget }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = TreasureItemTarget.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.subTargets = Object.entries(object.subTargets ?? {}).reduce<{ [key: number]: TreasureItemTarget }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = TreasureItemTarget.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseTreasureItemRow_MainTargetsEntry(): TreasureItemRow_MainTargetsEntry {
  return { key: 0, value: undefined };
}

export const TreasureItemRow_MainTargetsEntry: MessageFns<TreasureItemRow_MainTargetsEntry> = {
  encode(message: TreasureItemRow_MainTargetsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      TreasureItemTarget.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TreasureItemRow_MainTargetsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasureItemRow_MainTargetsEntry();
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

          message.value = TreasureItemTarget.decode(reader, reader.uint32());
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

  fromJSON(object: any): TreasureItemRow_MainTargetsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TreasureItemTarget.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TreasureItemRow_MainTargetsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TreasureItemTarget.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TreasureItemRow_MainTargetsEntry>, I>>(
    base?: I,
  ): TreasureItemRow_MainTargetsEntry {
    return TreasureItemRow_MainTargetsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TreasureItemRow_MainTargetsEntry>, I>>(
    object: I,
  ): TreasureItemRow_MainTargetsEntry {
    const message = createBaseTreasureItemRow_MainTargetsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TreasureItemTarget.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseTreasureItemRow_SubTargetsEntry(): TreasureItemRow_SubTargetsEntry {
  return { key: 0, value: undefined };
}

export const TreasureItemRow_SubTargetsEntry: MessageFns<TreasureItemRow_SubTargetsEntry> = {
  encode(message: TreasureItemRow_SubTargetsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      TreasureItemTarget.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TreasureItemRow_SubTargetsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasureItemRow_SubTargetsEntry();
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

          message.value = TreasureItemTarget.decode(reader, reader.uint32());
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

  fromJSON(object: any): TreasureItemRow_SubTargetsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TreasureItemTarget.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TreasureItemRow_SubTargetsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TreasureItemTarget.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TreasureItemRow_SubTargetsEntry>, I>>(base?: I): TreasureItemRow_SubTargetsEntry {
    return TreasureItemRow_SubTargetsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TreasureItemRow_SubTargetsEntry>, I>>(
    object: I,
  ): TreasureItemRow_SubTargetsEntry {
    const message = createBaseTreasureItemRow_SubTargetsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TreasureItemTarget.fromPartial(object.value)
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
