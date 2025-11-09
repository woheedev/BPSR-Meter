/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PioneerInfo } from "./stru_pioneer_info";

export const protobufPackage = "zproto";

export interface PioneerData {
  infoMap: { [key: number]: PioneerInfo };
}

export interface PioneerData_InfoMapEntry {
  key: number;
  value: PioneerInfo | undefined;
}

function createBasePioneerData(): PioneerData {
  return { infoMap: {} };
}

export const PioneerData: MessageFns<PioneerData> = {
  encode(message: PioneerData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.infoMap).forEach(([key, value]) => {
      PioneerData_InfoMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PioneerData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePioneerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PioneerData_InfoMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.infoMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): PioneerData {
    return {
      infoMap: isObject(object.infoMap)
        ? Object.entries(object.infoMap).reduce<{ [key: number]: PioneerInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = PioneerInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PioneerData): unknown {
    const obj: any = {};
    if (message.infoMap) {
      const entries = Object.entries(message.infoMap);
      if (entries.length > 0) {
        obj.infoMap = {};
        entries.forEach(([k, v]) => {
          obj.infoMap[k] = PioneerInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PioneerData>, I>>(base?: I): PioneerData {
    return PioneerData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PioneerData>, I>>(object: I): PioneerData {
    const message = createBasePioneerData();
    message.infoMap = Object.entries(object.infoMap ?? {}).reduce<{ [key: number]: PioneerInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = PioneerInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePioneerData_InfoMapEntry(): PioneerData_InfoMapEntry {
  return { key: 0, value: undefined };
}

export const PioneerData_InfoMapEntry: MessageFns<PioneerData_InfoMapEntry> = {
  encode(message: PioneerData_InfoMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      PioneerInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PioneerData_InfoMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePioneerData_InfoMapEntry();
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

          message.value = PioneerInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PioneerData_InfoMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PioneerInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PioneerData_InfoMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PioneerInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PioneerData_InfoMapEntry>, I>>(base?: I): PioneerData_InfoMapEntry {
    return PioneerData_InfoMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PioneerData_InfoMapEntry>, I>>(object: I): PioneerData_InfoMapEntry {
    const message = createBasePioneerData_InfoMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PioneerInfo.fromPartial(object.value)
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
