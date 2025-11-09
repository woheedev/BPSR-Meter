/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PivotInfo } from "./stru_pivot_info";

export const protobufPackage = "zproto";

export interface Pivot {
  pivots: { [key: number]: PivotInfo };
  mapPivots: { [key: number]: PivotInfo };
}

export interface Pivot_PivotsEntry {
  key: number;
  value: PivotInfo | undefined;
}

export interface Pivot_MapPivotsEntry {
  key: number;
  value: PivotInfo | undefined;
}

function createBasePivot(): Pivot {
  return { pivots: {}, mapPivots: {} };
}

export const Pivot: MessageFns<Pivot> = {
  encode(message: Pivot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.pivots).forEach(([key, value]) => {
      Pivot_PivotsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.mapPivots).forEach(([key, value]) => {
      Pivot_MapPivotsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Pivot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePivot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = Pivot_PivotsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.pivots[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = Pivot_MapPivotsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.mapPivots[entry2.key] = entry2.value;
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

  fromJSON(object: any): Pivot {
    return {
      pivots: isObject(object.pivots)
        ? Object.entries(object.pivots).reduce<{ [key: number]: PivotInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = PivotInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      mapPivots: isObject(object.mapPivots)
        ? Object.entries(object.mapPivots).reduce<{ [key: number]: PivotInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = PivotInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Pivot): unknown {
    const obj: any = {};
    if (message.pivots) {
      const entries = Object.entries(message.pivots);
      if (entries.length > 0) {
        obj.pivots = {};
        entries.forEach(([k, v]) => {
          obj.pivots[k] = PivotInfo.toJSON(v);
        });
      }
    }
    if (message.mapPivots) {
      const entries = Object.entries(message.mapPivots);
      if (entries.length > 0) {
        obj.mapPivots = {};
        entries.forEach(([k, v]) => {
          obj.mapPivots[k] = PivotInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pivot>, I>>(base?: I): Pivot {
    return Pivot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pivot>, I>>(object: I): Pivot {
    const message = createBasePivot();
    message.pivots = Object.entries(object.pivots ?? {}).reduce<{ [key: number]: PivotInfo }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = PivotInfo.fromPartial(value);
      }
      return acc;
    }, {});
    message.mapPivots = Object.entries(object.mapPivots ?? {}).reduce<{ [key: number]: PivotInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = PivotInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePivot_PivotsEntry(): Pivot_PivotsEntry {
  return { key: 0, value: undefined };
}

export const Pivot_PivotsEntry: MessageFns<Pivot_PivotsEntry> = {
  encode(message: Pivot_PivotsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PivotInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Pivot_PivotsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePivot_PivotsEntry();
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

          message.value = PivotInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): Pivot_PivotsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PivotInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Pivot_PivotsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PivotInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pivot_PivotsEntry>, I>>(base?: I): Pivot_PivotsEntry {
    return Pivot_PivotsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pivot_PivotsEntry>, I>>(object: I): Pivot_PivotsEntry {
    const message = createBasePivot_PivotsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PivotInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBasePivot_MapPivotsEntry(): Pivot_MapPivotsEntry {
  return { key: 0, value: undefined };
}

export const Pivot_MapPivotsEntry: MessageFns<Pivot_MapPivotsEntry> = {
  encode(message: Pivot_MapPivotsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PivotInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Pivot_MapPivotsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePivot_MapPivotsEntry();
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

          message.value = PivotInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): Pivot_MapPivotsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PivotInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Pivot_MapPivotsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PivotInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pivot_MapPivotsEntry>, I>>(base?: I): Pivot_MapPivotsEntry {
    return Pivot_MapPivotsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pivot_MapPivotsEntry>, I>>(object: I): Pivot_MapPivotsEntry {
    const message = createBasePivot_MapPivotsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PivotInfo.fromPartial(object.value)
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
