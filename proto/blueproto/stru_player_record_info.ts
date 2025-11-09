/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PlayerRecordSingle } from "./stru_player_record_single";

export const protobufPackage = "zproto";

export interface PlayerRecordInfo {
  playerRecords: { [key: number]: PlayerRecordSingle };
}

export interface PlayerRecordInfo_PlayerRecordsEntry {
  key: number;
  value: PlayerRecordSingle | undefined;
}

function createBasePlayerRecordInfo(): PlayerRecordInfo {
  return { playerRecords: {} };
}

export const PlayerRecordInfo: MessageFns<PlayerRecordInfo> = {
  encode(message: PlayerRecordInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.playerRecords).forEach(([key, value]) => {
      PlayerRecordInfo_PlayerRecordsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerRecordInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRecordInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PlayerRecordInfo_PlayerRecordsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.playerRecords[entry1.key] = entry1.value;
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

  fromJSON(object: any): PlayerRecordInfo {
    return {
      playerRecords: isObject(object.playerRecords)
        ? Object.entries(object.playerRecords).reduce<{ [key: number]: PlayerRecordSingle }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = PlayerRecordSingle.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PlayerRecordInfo): unknown {
    const obj: any = {};
    if (message.playerRecords) {
      const entries = Object.entries(message.playerRecords);
      if (entries.length > 0) {
        obj.playerRecords = {};
        entries.forEach(([k, v]) => {
          obj.playerRecords[k] = PlayerRecordSingle.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerRecordInfo>, I>>(base?: I): PlayerRecordInfo {
    return PlayerRecordInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerRecordInfo>, I>>(object: I): PlayerRecordInfo {
    const message = createBasePlayerRecordInfo();
    message.playerRecords = Object.entries(object.playerRecords ?? {}).reduce<{ [key: number]: PlayerRecordSingle }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = PlayerRecordSingle.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePlayerRecordInfo_PlayerRecordsEntry(): PlayerRecordInfo_PlayerRecordsEntry {
  return { key: 0, value: undefined };
}

export const PlayerRecordInfo_PlayerRecordsEntry: MessageFns<PlayerRecordInfo_PlayerRecordsEntry> = {
  encode(message: PlayerRecordInfo_PlayerRecordsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PlayerRecordSingle.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerRecordInfo_PlayerRecordsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRecordInfo_PlayerRecordsEntry();
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

          message.value = PlayerRecordSingle.decode(reader, reader.uint32());
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

  fromJSON(object: any): PlayerRecordInfo_PlayerRecordsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PlayerRecordSingle.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PlayerRecordInfo_PlayerRecordsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PlayerRecordSingle.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerRecordInfo_PlayerRecordsEntry>, I>>(
    base?: I,
  ): PlayerRecordInfo_PlayerRecordsEntry {
    return PlayerRecordInfo_PlayerRecordsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerRecordInfo_PlayerRecordsEntry>, I>>(
    object: I,
  ): PlayerRecordInfo_PlayerRecordsEntry {
    const message = createBasePlayerRecordInfo_PlayerRecordsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayerRecordSingle.fromPartial(object.value)
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
