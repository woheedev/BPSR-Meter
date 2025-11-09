/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ParkourRecord } from "./stru_parkour_record";

export const protobufPackage = "zproto";

export interface ParkourRecordList {
  recordList: { [key: number]: ParkourRecord };
}

export interface ParkourRecordList_RecordListEntry {
  key: number;
  value: ParkourRecord | undefined;
}

function createBaseParkourRecordList(): ParkourRecordList {
  return { recordList: {} };
}

export const ParkourRecordList: MessageFns<ParkourRecordList> = {
  encode(message: ParkourRecordList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.recordList).forEach(([key, value]) => {
      ParkourRecordList_RecordListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ParkourRecordList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParkourRecordList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ParkourRecordList_RecordListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.recordList[entry1.key] = entry1.value;
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

  fromJSON(object: any): ParkourRecordList {
    return {
      recordList: isObject(object.recordList)
        ? Object.entries(object.recordList).reduce<{ [key: number]: ParkourRecord }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ParkourRecord.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ParkourRecordList): unknown {
    const obj: any = {};
    if (message.recordList) {
      const entries = Object.entries(message.recordList);
      if (entries.length > 0) {
        obj.recordList = {};
        entries.forEach(([k, v]) => {
          obj.recordList[k] = ParkourRecord.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParkourRecordList>, I>>(base?: I): ParkourRecordList {
    return ParkourRecordList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParkourRecordList>, I>>(object: I): ParkourRecordList {
    const message = createBaseParkourRecordList();
    message.recordList = Object.entries(object.recordList ?? {}).reduce<{ [key: number]: ParkourRecord }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ParkourRecord.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseParkourRecordList_RecordListEntry(): ParkourRecordList_RecordListEntry {
  return { key: 0, value: undefined };
}

export const ParkourRecordList_RecordListEntry: MessageFns<ParkourRecordList_RecordListEntry> = {
  encode(message: ParkourRecordList_RecordListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      ParkourRecord.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ParkourRecordList_RecordListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParkourRecordList_RecordListEntry();
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

          message.value = ParkourRecord.decode(reader, reader.uint32());
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

  fromJSON(object: any): ParkourRecordList_RecordListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ParkourRecord.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ParkourRecordList_RecordListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ParkourRecord.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParkourRecordList_RecordListEntry>, I>>(
    base?: I,
  ): ParkourRecordList_RecordListEntry {
    return ParkourRecordList_RecordListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParkourRecordList_RecordListEntry>, I>>(
    object: I,
  ): ParkourRecordList_RecordListEntry {
    const message = createBaseParkourRecordList_RecordListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ParkourRecord.fromPartial(object.value)
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
