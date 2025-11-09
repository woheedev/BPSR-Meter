/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { PlayerRecordInfo } from "./stru_player_record_info";

export const protobufPackage = "zproto";

export interface PlayerRecord {
  playerRecordInfos: { [key: number]: PlayerRecordInfo };
}

export interface PlayerRecord_PlayerRecordInfosEntry {
  key: number;
  value: PlayerRecordInfo | undefined;
}

function createBasePlayerRecord(): PlayerRecord {
  return { playerRecordInfos: {} };
}

export const PlayerRecord: MessageFns<PlayerRecord> = {
  encode(message: PlayerRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.playerRecordInfos).forEach(([key, value]) => {
      PlayerRecord_PlayerRecordInfosEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PlayerRecord_PlayerRecordInfosEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.playerRecordInfos[entry1.key] = entry1.value;
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

  fromJSON(object: any): PlayerRecord {
    return {
      playerRecordInfos: isObject(object.playerRecordInfos)
        ? Object.entries(object.playerRecordInfos).reduce<{ [key: number]: PlayerRecordInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = PlayerRecordInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PlayerRecord): unknown {
    const obj: any = {};
    if (message.playerRecordInfos) {
      const entries = Object.entries(message.playerRecordInfos);
      if (entries.length > 0) {
        obj.playerRecordInfos = {};
        entries.forEach(([k, v]) => {
          obj.playerRecordInfos[k] = PlayerRecordInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerRecord>, I>>(base?: I): PlayerRecord {
    return PlayerRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerRecord>, I>>(object: I): PlayerRecord {
    const message = createBasePlayerRecord();
    message.playerRecordInfos = Object.entries(object.playerRecordInfos ?? {}).reduce<
      { [key: number]: PlayerRecordInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = PlayerRecordInfo.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePlayerRecord_PlayerRecordInfosEntry(): PlayerRecord_PlayerRecordInfosEntry {
  return { key: 0, value: undefined };
}

export const PlayerRecord_PlayerRecordInfosEntry: MessageFns<PlayerRecord_PlayerRecordInfosEntry> = {
  encode(message: PlayerRecord_PlayerRecordInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PlayerRecordInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerRecord_PlayerRecordInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRecord_PlayerRecordInfosEntry();
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

          message.value = PlayerRecordInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): PlayerRecord_PlayerRecordInfosEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PlayerRecordInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: PlayerRecord_PlayerRecordInfosEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PlayerRecordInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerRecord_PlayerRecordInfosEntry>, I>>(
    base?: I,
  ): PlayerRecord_PlayerRecordInfosEntry {
    return PlayerRecord_PlayerRecordInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerRecord_PlayerRecordInfosEntry>, I>>(
    object: I,
  ): PlayerRecord_PlayerRecordInfosEntry {
    const message = createBasePlayerRecord_PlayerRecordInfosEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayerRecordInfo.fromPartial(object.value)
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
