/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LiftProfessionSpecialization } from "./stru_lift_profession_specialization";

export const protobufPackage = "zproto";

export interface LifeProfessionBasic {
  id: number;
  level: number;
  exp: number;
  specialization: { [key: number]: LiftProfessionSpecialization };
  currentSpecializationPoint: number;
}

export interface LifeProfessionBasic_SpecializationEntry {
  key: number;
  value: LiftProfessionSpecialization | undefined;
}

function createBaseLifeProfessionBasic(): LifeProfessionBasic {
  return { id: 0, level: 0, exp: 0, specialization: {}, currentSpecializationPoint: 0 };
}

export const LifeProfessionBasic: MessageFns<LifeProfessionBasic> = {
  encode(message: LifeProfessionBasic, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.exp !== 0) {
      writer.uint32(24).int32(message.exp);
    }
    Object.entries(message.specialization).forEach(([key, value]) => {
      LifeProfessionBasic_SpecializationEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (message.currentSpecializationPoint !== 0) {
      writer.uint32(48).int32(message.currentSpecializationPoint);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfessionBasic {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfessionBasic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.exp = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = LifeProfessionBasic_SpecializationEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.specialization[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.currentSpecializationPoint = reader.int32();
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

  fromJSON(object: any): LifeProfessionBasic {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      exp: isSet(object.exp) ? globalThis.Number(object.exp) : 0,
      specialization: isObject(object.specialization)
        ? Object.entries(object.specialization).reduce<{ [key: number]: LiftProfessionSpecialization }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = LiftProfessionSpecialization.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      currentSpecializationPoint: isSet(object.currentSpecializationPoint)
        ? globalThis.Number(object.currentSpecializationPoint)
        : 0,
    };
  },

  toJSON(message: LifeProfessionBasic): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.exp !== 0) {
      obj.exp = Math.round(message.exp);
    }
    if (message.specialization) {
      const entries = Object.entries(message.specialization);
      if (entries.length > 0) {
        obj.specialization = {};
        entries.forEach(([k, v]) => {
          obj.specialization[k] = LiftProfessionSpecialization.toJSON(v);
        });
      }
    }
    if (message.currentSpecializationPoint !== 0) {
      obj.currentSpecializationPoint = Math.round(message.currentSpecializationPoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfessionBasic>, I>>(base?: I): LifeProfessionBasic {
    return LifeProfessionBasic.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfessionBasic>, I>>(object: I): LifeProfessionBasic {
    const message = createBaseLifeProfessionBasic();
    message.id = object.id ?? 0;
    message.level = object.level ?? 0;
    message.exp = object.exp ?? 0;
    message.specialization = Object.entries(object.specialization ?? {}).reduce<
      { [key: number]: LiftProfessionSpecialization }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = LiftProfessionSpecialization.fromPartial(value);
      }
      return acc;
    }, {});
    message.currentSpecializationPoint = object.currentSpecializationPoint ?? 0;
    return message;
  },
};

function createBaseLifeProfessionBasic_SpecializationEntry(): LifeProfessionBasic_SpecializationEntry {
  return { key: 0, value: undefined };
}

export const LifeProfessionBasic_SpecializationEntry: MessageFns<LifeProfessionBasic_SpecializationEntry> = {
  encode(message: LifeProfessionBasic_SpecializationEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      LiftProfessionSpecialization.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfessionBasic_SpecializationEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfessionBasic_SpecializationEntry();
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

          message.value = LiftProfessionSpecialization.decode(reader, reader.uint32());
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

  fromJSON(object: any): LifeProfessionBasic_SpecializationEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? LiftProfessionSpecialization.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LifeProfessionBasic_SpecializationEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = LiftProfessionSpecialization.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfessionBasic_SpecializationEntry>, I>>(
    base?: I,
  ): LifeProfessionBasic_SpecializationEntry {
    return LifeProfessionBasic_SpecializationEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfessionBasic_SpecializationEntry>, I>>(
    object: I,
  ): LifeProfessionBasic_SpecializationEntry {
    const message = createBaseLifeProfessionBasic_SpecializationEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? LiftProfessionSpecialization.fromPartial(object.value)
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
