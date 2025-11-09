/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EnergyItemInfo } from "./stru_energy_item_info";

export const protobufPackage = "zproto";

export interface EnergyInfo {
  energyValue: number;
  unlockNum: number;
  energyItemInfo: { [key: number]: EnergyItemInfo };
}

export interface EnergyInfo_EnergyItemInfoEntry {
  key: number;
  value: EnergyItemInfo | undefined;
}

function createBaseEnergyInfo(): EnergyInfo {
  return { energyValue: 0, unlockNum: 0, energyItemInfo: {} };
}

export const EnergyInfo: MessageFns<EnergyInfo> = {
  encode(message: EnergyInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.energyValue !== 0) {
      writer.uint32(8).uint32(message.energyValue);
    }
    if (message.unlockNum !== 0) {
      writer.uint32(16).uint32(message.unlockNum);
    }
    Object.entries(message.energyItemInfo).forEach(([key, value]) => {
      EnergyInfo_EnergyItemInfoEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EnergyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.energyValue = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.unlockNum = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = EnergyInfo_EnergyItemInfoEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.energyItemInfo[entry3.key] = entry3.value;
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

  fromJSON(object: any): EnergyInfo {
    return {
      energyValue: isSet(object.energyValue) ? globalThis.Number(object.energyValue) : 0,
      unlockNum: isSet(object.unlockNum) ? globalThis.Number(object.unlockNum) : 0,
      energyItemInfo: isObject(object.energyItemInfo)
        ? Object.entries(object.energyItemInfo).reduce<{ [key: number]: EnergyItemInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = EnergyItemInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: EnergyInfo): unknown {
    const obj: any = {};
    if (message.energyValue !== 0) {
      obj.energyValue = Math.round(message.energyValue);
    }
    if (message.unlockNum !== 0) {
      obj.unlockNum = Math.round(message.unlockNum);
    }
    if (message.energyItemInfo) {
      const entries = Object.entries(message.energyItemInfo);
      if (entries.length > 0) {
        obj.energyItemInfo = {};
        entries.forEach(([k, v]) => {
          obj.energyItemInfo[k] = EnergyItemInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnergyInfo>, I>>(base?: I): EnergyInfo {
    return EnergyInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnergyInfo>, I>>(object: I): EnergyInfo {
    const message = createBaseEnergyInfo();
    message.energyValue = object.energyValue ?? 0;
    message.unlockNum = object.unlockNum ?? 0;
    message.energyItemInfo = Object.entries(object.energyItemInfo ?? {}).reduce<{ [key: number]: EnergyItemInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = EnergyItemInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseEnergyInfo_EnergyItemInfoEntry(): EnergyInfo_EnergyItemInfoEntry {
  return { key: 0, value: undefined };
}

export const EnergyInfo_EnergyItemInfoEntry: MessageFns<EnergyInfo_EnergyItemInfoEntry> = {
  encode(message: EnergyInfo_EnergyItemInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      EnergyItemInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EnergyInfo_EnergyItemInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnergyInfo_EnergyItemInfoEntry();
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

          message.value = EnergyItemInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): EnergyInfo_EnergyItemInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? EnergyItemInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EnergyInfo_EnergyItemInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = EnergyItemInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnergyInfo_EnergyItemInfoEntry>, I>>(base?: I): EnergyInfo_EnergyItemInfoEntry {
    return EnergyInfo_EnergyItemInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnergyInfo_EnergyItemInfoEntry>, I>>(
    object: I,
  ): EnergyInfo_EnergyItemInfoEntry {
    const message = createBaseEnergyInfo_EnergyItemInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? EnergyItemInfo.fromPartial(object.value)
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
