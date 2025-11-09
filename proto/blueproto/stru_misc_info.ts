/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MiscInfo {
  expressionIdsLearned: { [key: number]: number };
}

export interface MiscInfo_ExpressionIdsLearnedEntry {
  key: number;
  value: number;
}

function createBaseMiscInfo(): MiscInfo {
  return { expressionIdsLearned: {} };
}

export const MiscInfo: MessageFns<MiscInfo> = {
  encode(message: MiscInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.expressionIdsLearned).forEach(([key, value]) => {
      MiscInfo_ExpressionIdsLearnedEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MiscInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMiscInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = MiscInfo_ExpressionIdsLearnedEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.expressionIdsLearned[entry1.key] = entry1.value;
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

  fromJSON(object: any): MiscInfo {
    return {
      expressionIdsLearned: isObject(object.expressionIdsLearned)
        ? Object.entries(object.expressionIdsLearned).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MiscInfo): unknown {
    const obj: any = {};
    if (message.expressionIdsLearned) {
      const entries = Object.entries(message.expressionIdsLearned);
      if (entries.length > 0) {
        obj.expressionIdsLearned = {};
        entries.forEach(([k, v]) => {
          obj.expressionIdsLearned[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MiscInfo>, I>>(base?: I): MiscInfo {
    return MiscInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MiscInfo>, I>>(object: I): MiscInfo {
    const message = createBaseMiscInfo();
    message.expressionIdsLearned = Object.entries(object.expressionIdsLearned ?? {}).reduce<{ [key: number]: number }>(
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

function createBaseMiscInfo_ExpressionIdsLearnedEntry(): MiscInfo_ExpressionIdsLearnedEntry {
  return { key: 0, value: 0 };
}

export const MiscInfo_ExpressionIdsLearnedEntry: MessageFns<MiscInfo_ExpressionIdsLearnedEntry> = {
  encode(message: MiscInfo_ExpressionIdsLearnedEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MiscInfo_ExpressionIdsLearnedEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMiscInfo_ExpressionIdsLearnedEntry();
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

  fromJSON(object: any): MiscInfo_ExpressionIdsLearnedEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: MiscInfo_ExpressionIdsLearnedEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MiscInfo_ExpressionIdsLearnedEntry>, I>>(
    base?: I,
  ): MiscInfo_ExpressionIdsLearnedEntry {
    return MiscInfo_ExpressionIdsLearnedEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MiscInfo_ExpressionIdsLearnedEntry>, I>>(
    object: I,
  ): MiscInfo_ExpressionIdsLearnedEntry {
    const message = createBaseMiscInfo_ExpressionIdsLearnedEntry();
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
