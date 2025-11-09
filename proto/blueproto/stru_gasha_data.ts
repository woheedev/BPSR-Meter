/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { GashaGuaranteeInfo } from "./stru_gasha_guarantee_info";
import { GashaInfo } from "./stru_gasha_info";

export const protobufPackage = "zproto";

export interface GashaData {
  gashaInfos: { [key: number]: GashaInfo };
  gashaGuaranteeInfos: { [key: number]: GashaGuaranteeInfo };
}

export interface GashaData_GashaInfosEntry {
  key: number;
  value: GashaInfo | undefined;
}

export interface GashaData_GashaGuaranteeInfosEntry {
  key: number;
  value: GashaGuaranteeInfo | undefined;
}

function createBaseGashaData(): GashaData {
  return { gashaInfos: {}, gashaGuaranteeInfos: {} };
}

export const GashaData: MessageFns<GashaData> = {
  encode(message: GashaData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.gashaInfos).forEach(([key, value]) => {
      GashaData_GashaInfosEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.gashaGuaranteeInfos).forEach(([key, value]) => {
      GashaData_GashaGuaranteeInfosEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GashaData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGashaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = GashaData_GashaInfosEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.gashaInfos[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = GashaData_GashaGuaranteeInfosEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.gashaGuaranteeInfos[entry2.key] = entry2.value;
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

  fromJSON(object: any): GashaData {
    return {
      gashaInfos: isObject(object.gashaInfos)
        ? Object.entries(object.gashaInfos).reduce<{ [key: number]: GashaInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = GashaInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      gashaGuaranteeInfos: isObject(object.gashaGuaranteeInfos)
        ? Object.entries(object.gashaGuaranteeInfos).reduce<{ [key: number]: GashaGuaranteeInfo }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = GashaGuaranteeInfo.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: GashaData): unknown {
    const obj: any = {};
    if (message.gashaInfos) {
      const entries = Object.entries(message.gashaInfos);
      if (entries.length > 0) {
        obj.gashaInfos = {};
        entries.forEach(([k, v]) => {
          obj.gashaInfos[k] = GashaInfo.toJSON(v);
        });
      }
    }
    if (message.gashaGuaranteeInfos) {
      const entries = Object.entries(message.gashaGuaranteeInfos);
      if (entries.length > 0) {
        obj.gashaGuaranteeInfos = {};
        entries.forEach(([k, v]) => {
          obj.gashaGuaranteeInfos[k] = GashaGuaranteeInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GashaData>, I>>(base?: I): GashaData {
    return GashaData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GashaData>, I>>(object: I): GashaData {
    const message = createBaseGashaData();
    message.gashaInfos = Object.entries(object.gashaInfos ?? {}).reduce<{ [key: number]: GashaInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = GashaInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.gashaGuaranteeInfos = Object.entries(object.gashaGuaranteeInfos ?? {}).reduce<
      { [key: number]: GashaGuaranteeInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = GashaGuaranteeInfo.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGashaData_GashaInfosEntry(): GashaData_GashaInfosEntry {
  return { key: 0, value: undefined };
}

export const GashaData_GashaInfosEntry: MessageFns<GashaData_GashaInfosEntry> = {
  encode(message: GashaData_GashaInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      GashaInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GashaData_GashaInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGashaData_GashaInfosEntry();
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

          message.value = GashaInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): GashaData_GashaInfosEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? GashaInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GashaData_GashaInfosEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = GashaInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GashaData_GashaInfosEntry>, I>>(base?: I): GashaData_GashaInfosEntry {
    return GashaData_GashaInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GashaData_GashaInfosEntry>, I>>(object: I): GashaData_GashaInfosEntry {
    const message = createBaseGashaData_GashaInfosEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? GashaInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseGashaData_GashaGuaranteeInfosEntry(): GashaData_GashaGuaranteeInfosEntry {
  return { key: 0, value: undefined };
}

export const GashaData_GashaGuaranteeInfosEntry: MessageFns<GashaData_GashaGuaranteeInfosEntry> = {
  encode(message: GashaData_GashaGuaranteeInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      GashaGuaranteeInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GashaData_GashaGuaranteeInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGashaData_GashaGuaranteeInfosEntry();
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

          message.value = GashaGuaranteeInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): GashaData_GashaGuaranteeInfosEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? GashaGuaranteeInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GashaData_GashaGuaranteeInfosEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = GashaGuaranteeInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GashaData_GashaGuaranteeInfosEntry>, I>>(
    base?: I,
  ): GashaData_GashaGuaranteeInfosEntry {
    return GashaData_GashaGuaranteeInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GashaData_GashaGuaranteeInfosEntry>, I>>(
    object: I,
  ): GashaData_GashaGuaranteeInfosEntry {
    const message = createBaseGashaData_GashaGuaranteeInfosEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? GashaGuaranteeInfo.fromPartial(object.value)
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
