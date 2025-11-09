/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface RedDotData {
  permanentClosedRedDot: { [key: number]: boolean };
  redDotCount: { [key: number]: number };
}

export interface RedDotData_PermanentClosedRedDotEntry {
  key: number;
  value: boolean;
}

export interface RedDotData_RedDotCountEntry {
  key: number;
  value: number;
}

function createBaseRedDotData(): RedDotData {
  return { permanentClosedRedDot: {}, redDotCount: {} };
}

export const RedDotData: MessageFns<RedDotData> = {
  encode(message: RedDotData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.permanentClosedRedDot).forEach(([key, value]) => {
      RedDotData_PermanentClosedRedDotEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.redDotCount).forEach(([key, value]) => {
      RedDotData_RedDotCountEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RedDotData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedDotData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = RedDotData_PermanentClosedRedDotEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.permanentClosedRedDot[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = RedDotData_RedDotCountEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.redDotCount[entry2.key] = entry2.value;
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

  fromJSON(object: any): RedDotData {
    return {
      permanentClosedRedDot: isObject(object.permanentClosedRedDot)
        ? Object.entries(object.permanentClosedRedDot).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      redDotCount: isObject(object.redDotCount)
        ? Object.entries(object.redDotCount).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: RedDotData): unknown {
    const obj: any = {};
    if (message.permanentClosedRedDot) {
      const entries = Object.entries(message.permanentClosedRedDot);
      if (entries.length > 0) {
        obj.permanentClosedRedDot = {};
        entries.forEach(([k, v]) => {
          obj.permanentClosedRedDot[k] = v;
        });
      }
    }
    if (message.redDotCount) {
      const entries = Object.entries(message.redDotCount);
      if (entries.length > 0) {
        obj.redDotCount = {};
        entries.forEach(([k, v]) => {
          obj.redDotCount[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RedDotData>, I>>(base?: I): RedDotData {
    return RedDotData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RedDotData>, I>>(object: I): RedDotData {
    const message = createBaseRedDotData();
    message.permanentClosedRedDot = Object.entries(object.permanentClosedRedDot ?? {}).reduce<
      { [key: number]: boolean }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Boolean(value);
      }
      return acc;
    }, {});
    message.redDotCount = Object.entries(object.redDotCount ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseRedDotData_PermanentClosedRedDotEntry(): RedDotData_PermanentClosedRedDotEntry {
  return { key: 0, value: false };
}

export const RedDotData_PermanentClosedRedDotEntry: MessageFns<RedDotData_PermanentClosedRedDotEntry> = {
  encode(message: RedDotData_PermanentClosedRedDotEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RedDotData_PermanentClosedRedDotEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedDotData_PermanentClosedRedDotEntry();
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

  fromJSON(object: any): RedDotData_PermanentClosedRedDotEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: RedDotData_PermanentClosedRedDotEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RedDotData_PermanentClosedRedDotEntry>, I>>(
    base?: I,
  ): RedDotData_PermanentClosedRedDotEntry {
    return RedDotData_PermanentClosedRedDotEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RedDotData_PermanentClosedRedDotEntry>, I>>(
    object: I,
  ): RedDotData_PermanentClosedRedDotEntry {
    const message = createBaseRedDotData_PermanentClosedRedDotEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseRedDotData_RedDotCountEntry(): RedDotData_RedDotCountEntry {
  return { key: 0, value: 0 };
}

export const RedDotData_RedDotCountEntry: MessageFns<RedDotData_RedDotCountEntry> = {
  encode(message: RedDotData_RedDotCountEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RedDotData_RedDotCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedDotData_RedDotCountEntry();
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

          message.value = reader.int32();
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

  fromJSON(object: any): RedDotData_RedDotCountEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: RedDotData_RedDotCountEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RedDotData_RedDotCountEntry>, I>>(base?: I): RedDotData_RedDotCountEntry {
    return RedDotData_RedDotCountEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RedDotData_RedDotCountEntry>, I>>(object: I): RedDotData_RedDotCountEntry {
    const message = createBaseRedDotData_RedDotCountEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
