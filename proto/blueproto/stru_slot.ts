/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SlotInfo } from "./stru_slot_info";

export const protobufPackage = "zproto";

export interface Slot {
  slots: { [key: number]: SlotInfo };
}

export interface Slot_SlotsEntry {
  key: number;
  value: SlotInfo | undefined;
}

function createBaseSlot(): Slot {
  return { slots: {} };
}

export const Slot: MessageFns<Slot> = {
  encode(message: Slot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.slots).forEach(([key, value]) => {
      Slot_SlotsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Slot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = Slot_SlotsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.slots[entry1.key] = entry1.value;
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

  fromJSON(object: any): Slot {
    return {
      slots: isObject(object.slots)
        ? Object.entries(object.slots).reduce<{ [key: number]: SlotInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SlotInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Slot): unknown {
    const obj: any = {};
    if (message.slots) {
      const entries = Object.entries(message.slots);
      if (entries.length > 0) {
        obj.slots = {};
        entries.forEach(([k, v]) => {
          obj.slots[k] = SlotInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slot>, I>>(base?: I): Slot {
    return Slot.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slot>, I>>(object: I): Slot {
    const message = createBaseSlot();
    message.slots = Object.entries(object.slots ?? {}).reduce<{ [key: number]: SlotInfo }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = SlotInfo.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSlot_SlotsEntry(): Slot_SlotsEntry {
  return { key: 0, value: undefined };
}

export const Slot_SlotsEntry: MessageFns<Slot_SlotsEntry> = {
  encode(message: Slot_SlotsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      SlotInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Slot_SlotsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlot_SlotsEntry();
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

          message.value = SlotInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): Slot_SlotsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SlotInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Slot_SlotsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SlotInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slot_SlotsEntry>, I>>(base?: I): Slot_SlotsEntry {
    return Slot_SlotsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slot_SlotsEntry>, I>>(object: I): Slot_SlotsEntry {
    const message = createBaseSlot_SlotsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SlotInfo.fromPartial(object.value)
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
