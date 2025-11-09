/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SeasonTargetInfo } from "./stru_season_target_info";

export const protobufPackage = "zproto";

export interface SeasonTarget {
  targetInfo: { [key: number]: SeasonTargetInfo };
}

export interface SeasonTarget_TargetInfoEntry {
  key: number;
  value: SeasonTargetInfo | undefined;
}

function createBaseSeasonTarget(): SeasonTarget {
  return { targetInfo: {} };
}

export const SeasonTarget: MessageFns<SeasonTarget> = {
  encode(message: SeasonTarget, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.targetInfo).forEach(([key, value]) => {
      SeasonTarget_TargetInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonTarget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SeasonTarget_TargetInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.targetInfo[entry1.key] = entry1.value;
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

  fromJSON(object: any): SeasonTarget {
    return {
      targetInfo: isObject(object.targetInfo)
        ? Object.entries(object.targetInfo).reduce<{ [key: number]: SeasonTargetInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SeasonTargetInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SeasonTarget): unknown {
    const obj: any = {};
    if (message.targetInfo) {
      const entries = Object.entries(message.targetInfo);
      if (entries.length > 0) {
        obj.targetInfo = {};
        entries.forEach(([k, v]) => {
          obj.targetInfo[k] = SeasonTargetInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonTarget>, I>>(base?: I): SeasonTarget {
    return SeasonTarget.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonTarget>, I>>(object: I): SeasonTarget {
    const message = createBaseSeasonTarget();
    message.targetInfo = Object.entries(object.targetInfo ?? {}).reduce<{ [key: number]: SeasonTargetInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = SeasonTargetInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSeasonTarget_TargetInfoEntry(): SeasonTarget_TargetInfoEntry {
  return { key: 0, value: undefined };
}

export const SeasonTarget_TargetInfoEntry: MessageFns<SeasonTarget_TargetInfoEntry> = {
  encode(message: SeasonTarget_TargetInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      SeasonTargetInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonTarget_TargetInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonTarget_TargetInfoEntry();
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

          message.value = SeasonTargetInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonTarget_TargetInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SeasonTargetInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonTarget_TargetInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SeasonTargetInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonTarget_TargetInfoEntry>, I>>(base?: I): SeasonTarget_TargetInfoEntry {
    return SeasonTarget_TargetInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonTarget_TargetInfoEntry>, I>>(object: I): SeasonTarget_TargetInfoEntry {
    const message = createBaseSeasonTarget_TargetInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SeasonTargetInfo.fromPartial(object.value)
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
