/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LifeProfessionAlchemyInfo } from "./stru_life_profession_alchemy_info";
import { LifeProfessionBasic } from "./stru_life_profession_basic";
import { LifeProfessionRecipe } from "./stru_life_profession_recipe";
import { LifeProfessionTargetInfo } from "./stru_life_profession_target_info";

export const protobufPackage = "zproto";

export interface LifeProfession {
  professionInfo: { [key: number]: LifeProfessionBasic };
  lifeTargetInfo: { [key: number]: LifeProfessionTargetInfo };
  lifeProfessionRecipe: { [key: number]: LifeProfessionRecipe };
  lifeProfessionAlchemyInfo: LifeProfessionAlchemyInfo | undefined;
  spareEnergy: { [key: number]: number };
  point: number;
}

export interface LifeProfession_ProfessionInfoEntry {
  key: number;
  value: LifeProfessionBasic | undefined;
}

export interface LifeProfession_LifeTargetInfoEntry {
  key: number;
  value: LifeProfessionTargetInfo | undefined;
}

export interface LifeProfession_LifeProfessionRecipeEntry {
  key: number;
  value: LifeProfessionRecipe | undefined;
}

export interface LifeProfession_SpareEnergyEntry {
  key: number;
  value: number;
}

function createBaseLifeProfession(): LifeProfession {
  return {
    professionInfo: {},
    lifeTargetInfo: {},
    lifeProfessionRecipe: {},
    lifeProfessionAlchemyInfo: undefined,
    spareEnergy: {},
    point: 0,
  };
}

export const LifeProfession: MessageFns<LifeProfession> = {
  encode(message: LifeProfession, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.professionInfo).forEach(([key, value]) => {
      LifeProfession_ProfessionInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.lifeTargetInfo).forEach(([key, value]) => {
      LifeProfession_LifeTargetInfoEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.lifeProfessionRecipe).forEach(([key, value]) => {
      LifeProfession_LifeProfessionRecipeEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    if (message.lifeProfessionAlchemyInfo !== undefined) {
      LifeProfessionAlchemyInfo.encode(message.lifeProfessionAlchemyInfo, writer.uint32(34).fork()).join();
    }
    Object.entries(message.spareEnergy).forEach(([key, value]) => {
      LifeProfession_SpareEnergyEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (message.point !== 0) {
      writer.uint32(48).int32(message.point);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfession {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = LifeProfession_ProfessionInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.professionInfo[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = LifeProfession_LifeTargetInfoEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.lifeTargetInfo[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = LifeProfession_LifeProfessionRecipeEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.lifeProfessionRecipe[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.lifeProfessionAlchemyInfo = LifeProfessionAlchemyInfo.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = LifeProfession_SpareEnergyEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.spareEnergy[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.point = reader.int32();
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

  fromJSON(object: any): LifeProfession {
    return {
      professionInfo: isObject(object.professionInfo)
        ? Object.entries(object.professionInfo).reduce<{ [key: number]: LifeProfessionBasic }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = LifeProfessionBasic.fromJSON(value);
          return acc;
        }, {})
        : {},
      lifeTargetInfo: isObject(object.lifeTargetInfo)
        ? Object.entries(object.lifeTargetInfo).reduce<{ [key: number]: LifeProfessionTargetInfo }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = LifeProfessionTargetInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      lifeProfessionRecipe: isObject(object.lifeProfessionRecipe)
        ? Object.entries(object.lifeProfessionRecipe).reduce<{ [key: number]: LifeProfessionRecipe }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = LifeProfessionRecipe.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      lifeProfessionAlchemyInfo: isSet(object.lifeProfessionAlchemyInfo)
        ? LifeProfessionAlchemyInfo.fromJSON(object.lifeProfessionAlchemyInfo)
        : undefined,
      spareEnergy: isObject(object.spareEnergy)
        ? Object.entries(object.spareEnergy).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      point: isSet(object.point) ? globalThis.Number(object.point) : 0,
    };
  },

  toJSON(message: LifeProfession): unknown {
    const obj: any = {};
    if (message.professionInfo) {
      const entries = Object.entries(message.professionInfo);
      if (entries.length > 0) {
        obj.professionInfo = {};
        entries.forEach(([k, v]) => {
          obj.professionInfo[k] = LifeProfessionBasic.toJSON(v);
        });
      }
    }
    if (message.lifeTargetInfo) {
      const entries = Object.entries(message.lifeTargetInfo);
      if (entries.length > 0) {
        obj.lifeTargetInfo = {};
        entries.forEach(([k, v]) => {
          obj.lifeTargetInfo[k] = LifeProfessionTargetInfo.toJSON(v);
        });
      }
    }
    if (message.lifeProfessionRecipe) {
      const entries = Object.entries(message.lifeProfessionRecipe);
      if (entries.length > 0) {
        obj.lifeProfessionRecipe = {};
        entries.forEach(([k, v]) => {
          obj.lifeProfessionRecipe[k] = LifeProfessionRecipe.toJSON(v);
        });
      }
    }
    if (message.lifeProfessionAlchemyInfo !== undefined) {
      obj.lifeProfessionAlchemyInfo = LifeProfessionAlchemyInfo.toJSON(message.lifeProfessionAlchemyInfo);
    }
    if (message.spareEnergy) {
      const entries = Object.entries(message.spareEnergy);
      if (entries.length > 0) {
        obj.spareEnergy = {};
        entries.forEach(([k, v]) => {
          obj.spareEnergy[k] = Math.round(v);
        });
      }
    }
    if (message.point !== 0) {
      obj.point = Math.round(message.point);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfession>, I>>(base?: I): LifeProfession {
    return LifeProfession.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfession>, I>>(object: I): LifeProfession {
    const message = createBaseLifeProfession();
    message.professionInfo = Object.entries(object.professionInfo ?? {}).reduce<{ [key: number]: LifeProfessionBasic }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = LifeProfessionBasic.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.lifeTargetInfo = Object.entries(object.lifeTargetInfo ?? {}).reduce<
      { [key: number]: LifeProfessionTargetInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = LifeProfessionTargetInfo.fromPartial(value);
      }
      return acc;
    }, {});
    message.lifeProfessionRecipe = Object.entries(object.lifeProfessionRecipe ?? {}).reduce<
      { [key: number]: LifeProfessionRecipe }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = LifeProfessionRecipe.fromPartial(value);
      }
      return acc;
    }, {});
    message.lifeProfessionAlchemyInfo =
      (object.lifeProfessionAlchemyInfo !== undefined && object.lifeProfessionAlchemyInfo !== null)
        ? LifeProfessionAlchemyInfo.fromPartial(object.lifeProfessionAlchemyInfo)
        : undefined;
    message.spareEnergy = Object.entries(object.spareEnergy ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.point = object.point ?? 0;
    return message;
  },
};

function createBaseLifeProfession_ProfessionInfoEntry(): LifeProfession_ProfessionInfoEntry {
  return { key: 0, value: undefined };
}

export const LifeProfession_ProfessionInfoEntry: MessageFns<LifeProfession_ProfessionInfoEntry> = {
  encode(message: LifeProfession_ProfessionInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      LifeProfessionBasic.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfession_ProfessionInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfession_ProfessionInfoEntry();
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

          message.value = LifeProfessionBasic.decode(reader, reader.uint32());
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

  fromJSON(object: any): LifeProfession_ProfessionInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? LifeProfessionBasic.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LifeProfession_ProfessionInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = LifeProfessionBasic.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfession_ProfessionInfoEntry>, I>>(
    base?: I,
  ): LifeProfession_ProfessionInfoEntry {
    return LifeProfession_ProfessionInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfession_ProfessionInfoEntry>, I>>(
    object: I,
  ): LifeProfession_ProfessionInfoEntry {
    const message = createBaseLifeProfession_ProfessionInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? LifeProfessionBasic.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseLifeProfession_LifeTargetInfoEntry(): LifeProfession_LifeTargetInfoEntry {
  return { key: 0, value: undefined };
}

export const LifeProfession_LifeTargetInfoEntry: MessageFns<LifeProfession_LifeTargetInfoEntry> = {
  encode(message: LifeProfession_LifeTargetInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      LifeProfessionTargetInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfession_LifeTargetInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfession_LifeTargetInfoEntry();
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

          message.value = LifeProfessionTargetInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): LifeProfession_LifeTargetInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? LifeProfessionTargetInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LifeProfession_LifeTargetInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = LifeProfessionTargetInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfession_LifeTargetInfoEntry>, I>>(
    base?: I,
  ): LifeProfession_LifeTargetInfoEntry {
    return LifeProfession_LifeTargetInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfession_LifeTargetInfoEntry>, I>>(
    object: I,
  ): LifeProfession_LifeTargetInfoEntry {
    const message = createBaseLifeProfession_LifeTargetInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? LifeProfessionTargetInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseLifeProfession_LifeProfessionRecipeEntry(): LifeProfession_LifeProfessionRecipeEntry {
  return { key: 0, value: undefined };
}

export const LifeProfession_LifeProfessionRecipeEntry: MessageFns<LifeProfession_LifeProfessionRecipeEntry> = {
  encode(message: LifeProfession_LifeProfessionRecipeEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      LifeProfessionRecipe.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfession_LifeProfessionRecipeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfession_LifeProfessionRecipeEntry();
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

          message.value = LifeProfessionRecipe.decode(reader, reader.uint32());
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

  fromJSON(object: any): LifeProfession_LifeProfessionRecipeEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? LifeProfessionRecipe.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LifeProfession_LifeProfessionRecipeEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = LifeProfessionRecipe.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfession_LifeProfessionRecipeEntry>, I>>(
    base?: I,
  ): LifeProfession_LifeProfessionRecipeEntry {
    return LifeProfession_LifeProfessionRecipeEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfession_LifeProfessionRecipeEntry>, I>>(
    object: I,
  ): LifeProfession_LifeProfessionRecipeEntry {
    const message = createBaseLifeProfession_LifeProfessionRecipeEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? LifeProfessionRecipe.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseLifeProfession_SpareEnergyEntry(): LifeProfession_SpareEnergyEntry {
  return { key: 0, value: 0 };
}

export const LifeProfession_SpareEnergyEntry: MessageFns<LifeProfession_SpareEnergyEntry> = {
  encode(message: LifeProfession_SpareEnergyEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfession_SpareEnergyEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfession_SpareEnergyEntry();
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

  fromJSON(object: any): LifeProfession_SpareEnergyEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: LifeProfession_SpareEnergyEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfession_SpareEnergyEntry>, I>>(base?: I): LifeProfession_SpareEnergyEntry {
    return LifeProfession_SpareEnergyEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfession_SpareEnergyEntry>, I>>(
    object: I,
  ): LifeProfession_SpareEnergyEntry {
    const message = createBaseLifeProfession_SpareEnergyEntry();
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
