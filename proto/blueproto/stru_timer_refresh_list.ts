/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TimerRefreshInfo } from "./stru_timer_refresh_info";

export const protobufPackage = "zproto";

export interface TimerRefreshList {
  refreshData: { [key: number]: TimerRefreshInfo };
}

export interface TimerRefreshList_RefreshDataEntry {
  key: number;
  value: TimerRefreshInfo | undefined;
}

function createBaseTimerRefreshList(): TimerRefreshList {
  return { refreshData: {} };
}

export const TimerRefreshList: MessageFns<TimerRefreshList> = {
  encode(message: TimerRefreshList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.refreshData).forEach(([key, value]) => {
      TimerRefreshList_RefreshDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimerRefreshList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerRefreshList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = TimerRefreshList_RefreshDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.refreshData[entry1.key] = entry1.value;
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

  fromJSON(object: any): TimerRefreshList {
    return {
      refreshData: isObject(object.refreshData)
        ? Object.entries(object.refreshData).reduce<{ [key: number]: TimerRefreshInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = TimerRefreshInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TimerRefreshList): unknown {
    const obj: any = {};
    if (message.refreshData) {
      const entries = Object.entries(message.refreshData);
      if (entries.length > 0) {
        obj.refreshData = {};
        entries.forEach(([k, v]) => {
          obj.refreshData[k] = TimerRefreshInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimerRefreshList>, I>>(base?: I): TimerRefreshList {
    return TimerRefreshList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimerRefreshList>, I>>(object: I): TimerRefreshList {
    const message = createBaseTimerRefreshList();
    message.refreshData = Object.entries(object.refreshData ?? {}).reduce<{ [key: number]: TimerRefreshInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = TimerRefreshInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseTimerRefreshList_RefreshDataEntry(): TimerRefreshList_RefreshDataEntry {
  return { key: 0, value: undefined };
}

export const TimerRefreshList_RefreshDataEntry: MessageFns<TimerRefreshList_RefreshDataEntry> = {
  encode(message: TimerRefreshList_RefreshDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      TimerRefreshInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimerRefreshList_RefreshDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerRefreshList_RefreshDataEntry();
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

          message.value = TimerRefreshInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): TimerRefreshList_RefreshDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TimerRefreshInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TimerRefreshList_RefreshDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TimerRefreshInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimerRefreshList_RefreshDataEntry>, I>>(
    base?: I,
  ): TimerRefreshList_RefreshDataEntry {
    return TimerRefreshList_RefreshDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimerRefreshList_RefreshDataEntry>, I>>(
    object: I,
  ): TimerRefreshList_RefreshDataEntry {
    const message = createBaseTimerRefreshList_RefreshDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TimerRefreshInfo.fromPartial(object.value)
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
