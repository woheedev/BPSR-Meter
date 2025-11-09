/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PersonalZoneShow {
  medals: { [key: number]: number };
}

export interface PersonalZoneShow_MedalsEntry {
  key: number;
  value: number;
}

function createBasePersonalZoneShow(): PersonalZoneShow {
  return { medals: {} };
}

export const PersonalZoneShow: MessageFns<PersonalZoneShow> = {
  encode(message: PersonalZoneShow, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.medals).forEach(([key, value]) => {
      PersonalZoneShow_MedalsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZoneShow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZoneShow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PersonalZoneShow_MedalsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.medals[entry1.key] = entry1.value;
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

  fromJSON(object: any): PersonalZoneShow {
    return {
      medals: isObject(object.medals)
        ? Object.entries(object.medals).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PersonalZoneShow): unknown {
    const obj: any = {};
    if (message.medals) {
      const entries = Object.entries(message.medals);
      if (entries.length > 0) {
        obj.medals = {};
        entries.forEach(([k, v]) => {
          obj.medals[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZoneShow>, I>>(base?: I): PersonalZoneShow {
    return PersonalZoneShow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZoneShow>, I>>(object: I): PersonalZoneShow {
    const message = createBasePersonalZoneShow();
    message.medals = Object.entries(object.medals ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePersonalZoneShow_MedalsEntry(): PersonalZoneShow_MedalsEntry {
  return { key: 0, value: 0 };
}

export const PersonalZoneShow_MedalsEntry: MessageFns<PersonalZoneShow_MedalsEntry> = {
  encode(message: PersonalZoneShow_MedalsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PersonalZoneShow_MedalsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePersonalZoneShow_MedalsEntry();
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

  fromJSON(object: any): PersonalZoneShow_MedalsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PersonalZoneShow_MedalsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PersonalZoneShow_MedalsEntry>, I>>(base?: I): PersonalZoneShow_MedalsEntry {
    return PersonalZoneShow_MedalsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PersonalZoneShow_MedalsEntry>, I>>(object: I): PersonalZoneShow_MedalsEntry {
    const message = createBasePersonalZoneShow_MedalsEntry();
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
