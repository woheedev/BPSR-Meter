/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TreasureItemRow } from "./stru_treasure_item_row";

export const protobufPackage = "zproto";

export interface Treasure {
  rows: { [key: number]: TreasureItemRow };
  historyRows: { [key: number]: TreasureItemRow };
  flag: boolean;
  refreshTime: Long;
  selectedReward: number[];
  seasonId: number;
  lastSeasonId: number;
  lastRefreshTime: Long;
}

export interface Treasure_RowsEntry {
  key: number;
  value: TreasureItemRow | undefined;
}

export interface Treasure_HistoryRowsEntry {
  key: number;
  value: TreasureItemRow | undefined;
}

function createBaseTreasure(): Treasure {
  return {
    rows: {},
    historyRows: {},
    flag: false,
    refreshTime: Long.ZERO,
    selectedReward: [],
    seasonId: 0,
    lastSeasonId: 0,
    lastRefreshTime: Long.ZERO,
  };
}

export const Treasure: MessageFns<Treasure> = {
  encode(message: Treasure, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.rows).forEach(([key, value]) => {
      Treasure_RowsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.historyRows).forEach(([key, value]) => {
      Treasure_HistoryRowsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.flag !== false) {
      writer.uint32(24).bool(message.flag);
    }
    if (!message.refreshTime.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.refreshTime.toString());
    }
    writer.uint32(42).fork();
    for (const v of message.selectedReward) {
      writer.int32(v);
    }
    writer.join();
    if (message.seasonId !== 0) {
      writer.uint32(48).int32(message.seasonId);
    }
    if (message.lastSeasonId !== 0) {
      writer.uint32(56).int32(message.lastSeasonId);
    }
    if (!message.lastRefreshTime.equals(Long.ZERO)) {
      writer.uint32(64).int64(message.lastRefreshTime.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Treasure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = Treasure_RowsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.rows[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = Treasure_HistoryRowsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.historyRows[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.flag = reader.bool();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.refreshTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag === 40) {
            message.selectedReward.push(reader.int32());

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.selectedReward.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.seasonId = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.lastSeasonId = reader.int32();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.lastRefreshTime = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): Treasure {
    return {
      rows: isObject(object.rows)
        ? Object.entries(object.rows).reduce<{ [key: number]: TreasureItemRow }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = TreasureItemRow.fromJSON(value);
          return acc;
        }, {})
        : {},
      historyRows: isObject(object.historyRows)
        ? Object.entries(object.historyRows).reduce<{ [key: number]: TreasureItemRow }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = TreasureItemRow.fromJSON(value);
          return acc;
        }, {})
        : {},
      flag: isSet(object.flag) ? globalThis.Boolean(object.flag) : false,
      refreshTime: isSet(object.refreshTime) ? Long.fromValue(object.refreshTime) : Long.ZERO,
      selectedReward: globalThis.Array.isArray(object?.selectedReward)
        ? object.selectedReward.map((e: any) => globalThis.Number(e))
        : [],
      seasonId: isSet(object.seasonId) ? globalThis.Number(object.seasonId) : 0,
      lastSeasonId: isSet(object.lastSeasonId) ? globalThis.Number(object.lastSeasonId) : 0,
      lastRefreshTime: isSet(object.lastRefreshTime) ? Long.fromValue(object.lastRefreshTime) : Long.ZERO,
    };
  },

  toJSON(message: Treasure): unknown {
    const obj: any = {};
    if (message.rows) {
      const entries = Object.entries(message.rows);
      if (entries.length > 0) {
        obj.rows = {};
        entries.forEach(([k, v]) => {
          obj.rows[k] = TreasureItemRow.toJSON(v);
        });
      }
    }
    if (message.historyRows) {
      const entries = Object.entries(message.historyRows);
      if (entries.length > 0) {
        obj.historyRows = {};
        entries.forEach(([k, v]) => {
          obj.historyRows[k] = TreasureItemRow.toJSON(v);
        });
      }
    }
    if (message.flag !== false) {
      obj.flag = message.flag;
    }
    if (!message.refreshTime.equals(Long.ZERO)) {
      obj.refreshTime = (message.refreshTime || Long.ZERO).toString();
    }
    if (message.selectedReward?.length) {
      obj.selectedReward = message.selectedReward.map((e) => Math.round(e));
    }
    if (message.seasonId !== 0) {
      obj.seasonId = Math.round(message.seasonId);
    }
    if (message.lastSeasonId !== 0) {
      obj.lastSeasonId = Math.round(message.lastSeasonId);
    }
    if (!message.lastRefreshTime.equals(Long.ZERO)) {
      obj.lastRefreshTime = (message.lastRefreshTime || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Treasure>, I>>(base?: I): Treasure {
    return Treasure.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Treasure>, I>>(object: I): Treasure {
    const message = createBaseTreasure();
    message.rows = Object.entries(object.rows ?? {}).reduce<{ [key: number]: TreasureItemRow }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = TreasureItemRow.fromPartial(value);
      }
      return acc;
    }, {});
    message.historyRows = Object.entries(object.historyRows ?? {}).reduce<{ [key: number]: TreasureItemRow }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = TreasureItemRow.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.flag = object.flag ?? false;
    message.refreshTime = (object.refreshTime !== undefined && object.refreshTime !== null)
      ? Long.fromValue(object.refreshTime)
      : Long.ZERO;
    message.selectedReward = object.selectedReward?.map((e) => e) || [];
    message.seasonId = object.seasonId ?? 0;
    message.lastSeasonId = object.lastSeasonId ?? 0;
    message.lastRefreshTime = (object.lastRefreshTime !== undefined && object.lastRefreshTime !== null)
      ? Long.fromValue(object.lastRefreshTime)
      : Long.ZERO;
    return message;
  },
};

function createBaseTreasure_RowsEntry(): Treasure_RowsEntry {
  return { key: 0, value: undefined };
}

export const Treasure_RowsEntry: MessageFns<Treasure_RowsEntry> = {
  encode(message: Treasure_RowsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      TreasureItemRow.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Treasure_RowsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasure_RowsEntry();
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

          message.value = TreasureItemRow.decode(reader, reader.uint32());
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

  fromJSON(object: any): Treasure_RowsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TreasureItemRow.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Treasure_RowsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TreasureItemRow.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Treasure_RowsEntry>, I>>(base?: I): Treasure_RowsEntry {
    return Treasure_RowsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Treasure_RowsEntry>, I>>(object: I): Treasure_RowsEntry {
    const message = createBaseTreasure_RowsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TreasureItemRow.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseTreasure_HistoryRowsEntry(): Treasure_HistoryRowsEntry {
  return { key: 0, value: undefined };
}

export const Treasure_HistoryRowsEntry: MessageFns<Treasure_HistoryRowsEntry> = {
  encode(message: Treasure_HistoryRowsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      TreasureItemRow.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Treasure_HistoryRowsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasure_HistoryRowsEntry();
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

          message.value = TreasureItemRow.decode(reader, reader.uint32());
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

  fromJSON(object: any): Treasure_HistoryRowsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TreasureItemRow.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Treasure_HistoryRowsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TreasureItemRow.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Treasure_HistoryRowsEntry>, I>>(base?: I): Treasure_HistoryRowsEntry {
    return Treasure_HistoryRowsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Treasure_HistoryRowsEntry>, I>>(object: I): Treasure_HistoryRowsEntry {
    const message = createBaseTreasure_HistoryRowsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TreasureItemRow.fromPartial(object.value)
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
