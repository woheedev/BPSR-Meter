/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface FishRecord {
  fishId: number;
  firstFlag: boolean;
  size: number;
  millisecond: Long;
  research: number;
  count: number;
  minSize: number;
  minSizemillisecond: Long;
  starCnts: { [key: number]: Long };
}

export interface FishRecord_StarCntsEntry {
  key: number;
  value: Long;
}

function createBaseFishRecord(): FishRecord {
  return {
    fishId: 0,
    firstFlag: false,
    size: 0,
    millisecond: Long.ZERO,
    research: 0,
    count: 0,
    minSize: 0,
    minSizemillisecond: Long.ZERO,
    starCnts: {},
  };
}

export const FishRecord: MessageFns<FishRecord> = {
  encode(message: FishRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.fishId !== 0) {
      writer.uint32(8).int32(message.fishId);
    }
    if (message.firstFlag !== false) {
      writer.uint32(16).bool(message.firstFlag);
    }
    if (message.size !== 0) {
      writer.uint32(24).int32(message.size);
    }
    if (!message.millisecond.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.millisecond.toString());
    }
    if (message.research !== 0) {
      writer.uint32(40).int32(message.research);
    }
    if (message.count !== 0) {
      writer.uint32(48).uint32(message.count);
    }
    if (message.minSize !== 0) {
      writer.uint32(56).int32(message.minSize);
    }
    if (!message.minSizemillisecond.equals(Long.ZERO)) {
      writer.uint32(64).int64(message.minSizemillisecond.toString());
    }
    Object.entries(message.starCnts).forEach(([key, value]) => {
      FishRecord_StarCntsEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.fishId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.firstFlag = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.size = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.millisecond = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.research = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.count = reader.uint32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.minSize = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.minSizemillisecond = Long.fromString(reader.int64().toString());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          const entry9 = FishRecord_StarCntsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.starCnts[entry9.key] = entry9.value;
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

  fromJSON(object: any): FishRecord {
    return {
      fishId: isSet(object.fishId) ? globalThis.Number(object.fishId) : 0,
      firstFlag: isSet(object.firstFlag) ? globalThis.Boolean(object.firstFlag) : false,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      millisecond: isSet(object.millisecond) ? Long.fromValue(object.millisecond) : Long.ZERO,
      research: isSet(object.research) ? globalThis.Number(object.research) : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
      minSize: isSet(object.minSize) ? globalThis.Number(object.minSize) : 0,
      minSizemillisecond: isSet(object.minSizemillisecond) ? Long.fromValue(object.minSizemillisecond) : Long.ZERO,
      starCnts: isObject(object.starCnts)
        ? Object.entries(object.starCnts).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FishRecord): unknown {
    const obj: any = {};
    if (message.fishId !== 0) {
      obj.fishId = Math.round(message.fishId);
    }
    if (message.firstFlag !== false) {
      obj.firstFlag = message.firstFlag;
    }
    if (message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    if (!message.millisecond.equals(Long.ZERO)) {
      obj.millisecond = (message.millisecond || Long.ZERO).toString();
    }
    if (message.research !== 0) {
      obj.research = Math.round(message.research);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    if (message.minSize !== 0) {
      obj.minSize = Math.round(message.minSize);
    }
    if (!message.minSizemillisecond.equals(Long.ZERO)) {
      obj.minSizemillisecond = (message.minSizemillisecond || Long.ZERO).toString();
    }
    if (message.starCnts) {
      const entries = Object.entries(message.starCnts);
      if (entries.length > 0) {
        obj.starCnts = {};
        entries.forEach(([k, v]) => {
          obj.starCnts[k] = v.toString();
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishRecord>, I>>(base?: I): FishRecord {
    return FishRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishRecord>, I>>(object: I): FishRecord {
    const message = createBaseFishRecord();
    message.fishId = object.fishId ?? 0;
    message.firstFlag = object.firstFlag ?? false;
    message.size = object.size ?? 0;
    message.millisecond = (object.millisecond !== undefined && object.millisecond !== null)
      ? Long.fromValue(object.millisecond)
      : Long.ZERO;
    message.research = object.research ?? 0;
    message.count = object.count ?? 0;
    message.minSize = object.minSize ?? 0;
    message.minSizemillisecond = (object.minSizemillisecond !== undefined && object.minSizemillisecond !== null)
      ? Long.fromValue(object.minSizemillisecond)
      : Long.ZERO;
    message.starCnts = Object.entries(object.starCnts ?? {}).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Long.fromValue(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseFishRecord_StarCntsEntry(): FishRecord_StarCntsEntry {
  return { key: 0, value: Long.ZERO };
}

export const FishRecord_StarCntsEntry: MessageFns<FishRecord_StarCntsEntry> = {
  encode(message: FishRecord_StarCntsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FishRecord_StarCntsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFishRecord_StarCntsEntry();
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

  fromJSON(object: any): FishRecord_StarCntsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: FishRecord_StarCntsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FishRecord_StarCntsEntry>, I>>(base?: I): FishRecord_StarCntsEntry {
    return FishRecord_StarCntsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FishRecord_StarCntsEntry>, I>>(object: I): FishRecord_StarCntsEntry {
    const message = createBaseFishRecord_StarCntsEntry();
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
