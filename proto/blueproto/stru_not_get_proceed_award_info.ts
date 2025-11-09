/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface NotGetProceedAwardInfo {
  awardIdTimes: { [key: number]: number };
}

export interface NotGetProceedAwardInfo_AwardIdTimesEntry {
  key: number;
  value: number;
}

function createBaseNotGetProceedAwardInfo(): NotGetProceedAwardInfo {
  return { awardIdTimes: {} };
}

export const NotGetProceedAwardInfo: MessageFns<NotGetProceedAwardInfo> = {
  encode(message: NotGetProceedAwardInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.awardIdTimes).forEach(([key, value]) => {
      NotGetProceedAwardInfo_AwardIdTimesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotGetProceedAwardInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotGetProceedAwardInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = NotGetProceedAwardInfo_AwardIdTimesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.awardIdTimes[entry1.key] = entry1.value;
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

  fromJSON(object: any): NotGetProceedAwardInfo {
    return {
      awardIdTimes: isObject(object.awardIdTimes)
        ? Object.entries(object.awardIdTimes).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: NotGetProceedAwardInfo): unknown {
    const obj: any = {};
    if (message.awardIdTimes) {
      const entries = Object.entries(message.awardIdTimes);
      if (entries.length > 0) {
        obj.awardIdTimes = {};
        entries.forEach(([k, v]) => {
          obj.awardIdTimes[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotGetProceedAwardInfo>, I>>(base?: I): NotGetProceedAwardInfo {
    return NotGetProceedAwardInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotGetProceedAwardInfo>, I>>(object: I): NotGetProceedAwardInfo {
    const message = createBaseNotGetProceedAwardInfo();
    message.awardIdTimes = Object.entries(object.awardIdTimes ?? {}).reduce<{ [key: number]: number }>(
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

function createBaseNotGetProceedAwardInfo_AwardIdTimesEntry(): NotGetProceedAwardInfo_AwardIdTimesEntry {
  return { key: 0, value: 0 };
}

export const NotGetProceedAwardInfo_AwardIdTimesEntry: MessageFns<NotGetProceedAwardInfo_AwardIdTimesEntry> = {
  encode(message: NotGetProceedAwardInfo_AwardIdTimesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NotGetProceedAwardInfo_AwardIdTimesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotGetProceedAwardInfo_AwardIdTimesEntry();
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

          message.value = reader.uint32();
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

  fromJSON(object: any): NotGetProceedAwardInfo_AwardIdTimesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: NotGetProceedAwardInfo_AwardIdTimesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NotGetProceedAwardInfo_AwardIdTimesEntry>, I>>(
    base?: I,
  ): NotGetProceedAwardInfo_AwardIdTimesEntry {
    return NotGetProceedAwardInfo_AwardIdTimesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NotGetProceedAwardInfo_AwardIdTimesEntry>, I>>(
    object: I,
  ): NotGetProceedAwardInfo_AwardIdTimesEntry {
    const message = createBaseNotGetProceedAwardInfo_AwardIdTimesEntry();
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
