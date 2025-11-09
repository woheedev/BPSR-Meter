/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface Resonance {
  resonances: { [key: number]: Long };
  installed: number[];
}

export interface Resonance_ResonancesEntry {
  key: number;
  value: Long;
}

function createBaseResonance(): Resonance {
  return { resonances: {}, installed: [] };
}

export const Resonance: MessageFns<Resonance> = {
  encode(message: Resonance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.resonances).forEach(([key, value]) => {
      Resonance_ResonancesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    writer.uint32(18).fork();
    for (const v of message.installed) {
      writer.uint32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Resonance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResonance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = Resonance_ResonancesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.resonances[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.installed.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.installed.push(reader.uint32());
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

  fromJSON(object: any): Resonance {
    return {
      resonances: isObject(object.resonances)
        ? Object.entries(object.resonances).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
      installed: globalThis.Array.isArray(object?.installed)
        ? object.installed.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: Resonance): unknown {
    const obj: any = {};
    if (message.resonances) {
      const entries = Object.entries(message.resonances);
      if (entries.length > 0) {
        obj.resonances = {};
        entries.forEach(([k, v]) => {
          obj.resonances[k] = v.toString();
        });
      }
    }
    if (message.installed?.length) {
      obj.installed = message.installed.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resonance>, I>>(base?: I): Resonance {
    return Resonance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resonance>, I>>(object: I): Resonance {
    const message = createBaseResonance();
    message.resonances = Object.entries(object.resonances ?? {}).reduce<{ [key: number]: Long }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = Long.fromValue(value);
        }
        return acc;
      },
      {},
    );
    message.installed = object.installed?.map((e) => e) || [];
    return message;
  },
};

function createBaseResonance_ResonancesEntry(): Resonance_ResonancesEntry {
  return { key: 0, value: Long.ZERO };
}

export const Resonance_ResonancesEntry: MessageFns<Resonance_ResonancesEntry> = {
  encode(message: Resonance_ResonancesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Resonance_ResonancesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResonance_ResonancesEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): Resonance_ResonancesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: Resonance_ResonancesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Resonance_ResonancesEntry>, I>>(base?: I): Resonance_ResonancesEntry {
    return Resonance_ResonancesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Resonance_ResonancesEntry>, I>>(object: I): Resonance_ResonancesEntry {
    const message = createBaseResonance_ResonancesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
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
