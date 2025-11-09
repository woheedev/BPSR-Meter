/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BattlePass } from "./stru_battle_pass";

export const protobufPackage = "zproto";

export interface BattlePassData {
  battleMap: { [key: number]: BattlePass };
}

export interface BattlePassData_BattleMapEntry {
  key: number;
  value: BattlePass | undefined;
}

function createBaseBattlePassData(): BattlePassData {
  return { battleMap: {} };
}

export const BattlePassData: MessageFns<BattlePassData> = {
  encode(message: BattlePassData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.battleMap).forEach(([key, value]) => {
      BattlePassData_BattleMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BattlePassData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBattlePassData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = BattlePassData_BattleMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.battleMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): BattlePassData {
    return {
      battleMap: isObject(object.battleMap)
        ? Object.entries(object.battleMap).reduce<{ [key: number]: BattlePass }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = BattlePass.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: BattlePassData): unknown {
    const obj: any = {};
    if (message.battleMap) {
      const entries = Object.entries(message.battleMap);
      if (entries.length > 0) {
        obj.battleMap = {};
        entries.forEach(([k, v]) => {
          obj.battleMap[k] = BattlePass.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BattlePassData>, I>>(base?: I): BattlePassData {
    return BattlePassData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BattlePassData>, I>>(object: I): BattlePassData {
    const message = createBaseBattlePassData();
    message.battleMap = Object.entries(object.battleMap ?? {}).reduce<{ [key: number]: BattlePass }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = BattlePass.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseBattlePassData_BattleMapEntry(): BattlePassData_BattleMapEntry {
  return { key: 0, value: undefined };
}

export const BattlePassData_BattleMapEntry: MessageFns<BattlePassData_BattleMapEntry> = {
  encode(message: BattlePassData_BattleMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      BattlePass.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BattlePassData_BattleMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBattlePassData_BattleMapEntry();
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

          message.value = BattlePass.decode(reader, reader.uint32());
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

  fromJSON(object: any): BattlePassData_BattleMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? BattlePass.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: BattlePassData_BattleMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = BattlePass.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BattlePassData_BattleMapEntry>, I>>(base?: I): BattlePassData_BattleMapEntry {
    return BattlePassData_BattleMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BattlePassData_BattleMapEntry>, I>>(
    object: I,
  ): BattlePassData_BattleMapEntry {
    const message = createBaseBattlePassData_BattleMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? BattlePass.fromPartial(object.value)
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
