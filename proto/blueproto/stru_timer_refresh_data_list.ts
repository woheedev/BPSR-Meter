/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TimerRefreshList } from "./stru_timer_refresh_list";

export const protobufPackage = "zproto";

export interface TimerRefreshDataList {
  refreshDataList: { [key: number]: TimerRefreshList };
}

export interface TimerRefreshDataList_RefreshDataListEntry {
  key: number;
  value: TimerRefreshList | undefined;
}

function createBaseTimerRefreshDataList(): TimerRefreshDataList {
  return { refreshDataList: {} };
}

export const TimerRefreshDataList: MessageFns<TimerRefreshDataList> = {
  encode(message: TimerRefreshDataList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.refreshDataList).forEach(([key, value]) => {
      TimerRefreshDataList_RefreshDataListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimerRefreshDataList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerRefreshDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = TimerRefreshDataList_RefreshDataListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.refreshDataList[entry1.key] = entry1.value;
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

  fromJSON(object: any): TimerRefreshDataList {
    return {
      refreshDataList: isObject(object.refreshDataList)
        ? Object.entries(object.refreshDataList).reduce<{ [key: number]: TimerRefreshList }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = TimerRefreshList.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TimerRefreshDataList): unknown {
    const obj: any = {};
    if (message.refreshDataList) {
      const entries = Object.entries(message.refreshDataList);
      if (entries.length > 0) {
        obj.refreshDataList = {};
        entries.forEach(([k, v]) => {
          obj.refreshDataList[k] = TimerRefreshList.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimerRefreshDataList>, I>>(base?: I): TimerRefreshDataList {
    return TimerRefreshDataList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimerRefreshDataList>, I>>(object: I): TimerRefreshDataList {
    const message = createBaseTimerRefreshDataList();
    message.refreshDataList = Object.entries(object.refreshDataList ?? {}).reduce<{ [key: number]: TimerRefreshList }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = TimerRefreshList.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseTimerRefreshDataList_RefreshDataListEntry(): TimerRefreshDataList_RefreshDataListEntry {
  return { key: 0, value: undefined };
}

export const TimerRefreshDataList_RefreshDataListEntry: MessageFns<TimerRefreshDataList_RefreshDataListEntry> = {
  encode(message: TimerRefreshDataList_RefreshDataListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      TimerRefreshList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimerRefreshDataList_RefreshDataListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerRefreshDataList_RefreshDataListEntry();
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

          message.value = TimerRefreshList.decode(reader, reader.uint32());
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

  fromJSON(object: any): TimerRefreshDataList_RefreshDataListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TimerRefreshList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TimerRefreshDataList_RefreshDataListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TimerRefreshList.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimerRefreshDataList_RefreshDataListEntry>, I>>(
    base?: I,
  ): TimerRefreshDataList_RefreshDataListEntry {
    return TimerRefreshDataList_RefreshDataListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimerRefreshDataList_RefreshDataListEntry>, I>>(
    object: I,
  ): TimerRefreshDataList_RefreshDataListEntry {
    const message = createBaseTimerRefreshDataList_RefreshDataListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TimerRefreshList.fromPartial(object.value)
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
