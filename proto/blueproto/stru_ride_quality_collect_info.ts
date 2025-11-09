/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface RideQualityCollectInfo {
  qualityCount: { [key: number]: number };
}

export interface RideQualityCollectInfo_QualityCountEntry {
  key: number;
  value: number;
}

function createBaseRideQualityCollectInfo(): RideQualityCollectInfo {
  return { qualityCount: {} };
}

export const RideQualityCollectInfo: MessageFns<RideQualityCollectInfo> = {
  encode(message: RideQualityCollectInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.qualityCount).forEach(([key, value]) => {
      RideQualityCollectInfo_QualityCountEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideQualityCollectInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideQualityCollectInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = RideQualityCollectInfo_QualityCountEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.qualityCount[entry1.key] = entry1.value;
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

  fromJSON(object: any): RideQualityCollectInfo {
    return {
      qualityCount: isObject(object.qualityCount)
        ? Object.entries(object.qualityCount).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: RideQualityCollectInfo): unknown {
    const obj: any = {};
    if (message.qualityCount) {
      const entries = Object.entries(message.qualityCount);
      if (entries.length > 0) {
        obj.qualityCount = {};
        entries.forEach(([k, v]) => {
          obj.qualityCount[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideQualityCollectInfo>, I>>(base?: I): RideQualityCollectInfo {
    return RideQualityCollectInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideQualityCollectInfo>, I>>(object: I): RideQualityCollectInfo {
    const message = createBaseRideQualityCollectInfo();
    message.qualityCount = Object.entries(object.qualityCount ?? {}).reduce<{ [key: number]: number }>(
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

function createBaseRideQualityCollectInfo_QualityCountEntry(): RideQualityCollectInfo_QualityCountEntry {
  return { key: 0, value: 0 };
}

export const RideQualityCollectInfo_QualityCountEntry: MessageFns<RideQualityCollectInfo_QualityCountEntry> = {
  encode(message: RideQualityCollectInfo_QualityCountEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideQualityCollectInfo_QualityCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideQualityCollectInfo_QualityCountEntry();
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

  fromJSON(object: any): RideQualityCollectInfo_QualityCountEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: RideQualityCollectInfo_QualityCountEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideQualityCollectInfo_QualityCountEntry>, I>>(
    base?: I,
  ): RideQualityCollectInfo_QualityCountEntry {
    return RideQualityCollectInfo_QualityCountEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideQualityCollectInfo_QualityCountEntry>, I>>(
    object: I,
  ): RideQualityCollectInfo_QualityCountEntry {
    const message = createBaseRideQualityCollectInfo_QualityCountEntry();
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
