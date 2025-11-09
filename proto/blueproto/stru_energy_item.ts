/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EnergyInfo } from "./stru_energy_info";

export const protobufPackage = "zproto";

export interface EnergyItem {
  energyLimit: number;
  extraEnergyLimit: number;
  energyInfo: { [key: number]: EnergyInfo };
}

export interface EnergyItem_EnergyInfoEntry {
  key: number;
  value: EnergyInfo | undefined;
}

function createBaseEnergyItem(): EnergyItem {
  return { energyLimit: 0, extraEnergyLimit: 0, energyInfo: {} };
}

export const EnergyItem: MessageFns<EnergyItem> = {
  encode(message: EnergyItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.energyLimit !== 0) {
      writer.uint32(8).uint32(message.energyLimit);
    }
    if (message.extraEnergyLimit !== 0) {
      writer.uint32(16).uint32(message.extraEnergyLimit);
    }
    Object.entries(message.energyInfo).forEach(([key, value]) => {
      EnergyItem_EnergyInfoEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EnergyItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.energyLimit = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.extraEnergyLimit = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = EnergyItem_EnergyInfoEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.energyInfo[entry3.key] = entry3.value;
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

  fromJSON(object: any): EnergyItem {
    return {
      energyLimit: isSet(object.energyLimit) ? globalThis.Number(object.energyLimit) : 0,
      extraEnergyLimit: isSet(object.extraEnergyLimit) ? globalThis.Number(object.extraEnergyLimit) : 0,
      energyInfo: isObject(object.energyInfo)
        ? Object.entries(object.energyInfo).reduce<{ [key: number]: EnergyInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = EnergyInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: EnergyItem): unknown {
    const obj: any = {};
    if (message.energyLimit !== 0) {
      obj.energyLimit = Math.round(message.energyLimit);
    }
    if (message.extraEnergyLimit !== 0) {
      obj.extraEnergyLimit = Math.round(message.extraEnergyLimit);
    }
    if (message.energyInfo) {
      const entries = Object.entries(message.energyInfo);
      if (entries.length > 0) {
        obj.energyInfo = {};
        entries.forEach(([k, v]) => {
          obj.energyInfo[k] = EnergyInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnergyItem>, I>>(base?: I): EnergyItem {
    return EnergyItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnergyItem>, I>>(object: I): EnergyItem {
    const message = createBaseEnergyItem();
    message.energyLimit = object.energyLimit ?? 0;
    message.extraEnergyLimit = object.extraEnergyLimit ?? 0;
    message.energyInfo = Object.entries(object.energyInfo ?? {}).reduce<{ [key: number]: EnergyInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = EnergyInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseEnergyItem_EnergyInfoEntry(): EnergyItem_EnergyInfoEntry {
  return { key: 0, value: undefined };
}

export const EnergyItem_EnergyInfoEntry: MessageFns<EnergyItem_EnergyInfoEntry> = {
  encode(message: EnergyItem_EnergyInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      EnergyInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EnergyItem_EnergyInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyItem_EnergyInfoEntry();
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

          message.value = EnergyInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): EnergyItem_EnergyInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? EnergyInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EnergyItem_EnergyInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = EnergyInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnergyItem_EnergyInfoEntry>, I>>(base?: I): EnergyItem_EnergyInfoEntry {
    return EnergyItem_EnergyInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnergyItem_EnergyInfoEntry>, I>>(object: I): EnergyItem_EnergyInfoEntry {
    const message = createBaseEnergyItem_EnergyInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? EnergyInfo.fromPartial(object.value)
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
