/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ShowPieceIdList } from "./stru_show_piece_id_list";
import { ShowPiecePair } from "./stru_show_piece_pair";

export const protobufPackage = "zproto";

export interface ShowPieceData {
  oftenUseTypeList: { [key: number]: ShowPieceIdList };
  unlockTypeList: { [key: number]: ShowPieceIdList };
  roulettePosPieceInfo: { [key: number]: ShowPiecePair };
}

export interface ShowPieceData_OftenUseTypeListEntry {
  key: number;
  value: ShowPieceIdList | undefined;
}

export interface ShowPieceData_UnlockTypeListEntry {
  key: number;
  value: ShowPieceIdList | undefined;
}

export interface ShowPieceData_RoulettePosPieceInfoEntry {
  key: number;
  value: ShowPiecePair | undefined;
}

function createBaseShowPieceData(): ShowPieceData {
  return { oftenUseTypeList: {}, unlockTypeList: {}, roulettePosPieceInfo: {} };
}

export const ShowPieceData: MessageFns<ShowPieceData> = {
  encode(message: ShowPieceData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.oftenUseTypeList).forEach(([key, value]) => {
      ShowPieceData_OftenUseTypeListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.unlockTypeList).forEach(([key, value]) => {
      ShowPieceData_UnlockTypeListEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.roulettePosPieceInfo).forEach(([key, value]) => {
      ShowPieceData_RoulettePosPieceInfoEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShowPieceData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowPieceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ShowPieceData_OftenUseTypeListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.oftenUseTypeList[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = ShowPieceData_UnlockTypeListEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.unlockTypeList[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = ShowPieceData_RoulettePosPieceInfoEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.roulettePosPieceInfo[entry3.key] = entry3.value;
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

  fromJSON(object: any): ShowPieceData {
    return {
      oftenUseTypeList: isObject(object.oftenUseTypeList)
        ? Object.entries(object.oftenUseTypeList).reduce<{ [key: number]: ShowPieceIdList }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ShowPieceIdList.fromJSON(value);
          return acc;
        }, {})
        : {},
      unlockTypeList: isObject(object.unlockTypeList)
        ? Object.entries(object.unlockTypeList).reduce<{ [key: number]: ShowPieceIdList }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ShowPieceIdList.fromJSON(value);
          return acc;
        }, {})
        : {},
      roulettePosPieceInfo: isObject(object.roulettePosPieceInfo)
        ? Object.entries(object.roulettePosPieceInfo).reduce<{ [key: number]: ShowPiecePair }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = ShowPiecePair.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ShowPieceData): unknown {
    const obj: any = {};
    if (message.oftenUseTypeList) {
      const entries = Object.entries(message.oftenUseTypeList);
      if (entries.length > 0) {
        obj.oftenUseTypeList = {};
        entries.forEach(([k, v]) => {
          obj.oftenUseTypeList[k] = ShowPieceIdList.toJSON(v);
        });
      }
    }
    if (message.unlockTypeList) {
      const entries = Object.entries(message.unlockTypeList);
      if (entries.length > 0) {
        obj.unlockTypeList = {};
        entries.forEach(([k, v]) => {
          obj.unlockTypeList[k] = ShowPieceIdList.toJSON(v);
        });
      }
    }
    if (message.roulettePosPieceInfo) {
      const entries = Object.entries(message.roulettePosPieceInfo);
      if (entries.length > 0) {
        obj.roulettePosPieceInfo = {};
        entries.forEach(([k, v]) => {
          obj.roulettePosPieceInfo[k] = ShowPiecePair.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShowPieceData>, I>>(base?: I): ShowPieceData {
    return ShowPieceData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShowPieceData>, I>>(object: I): ShowPieceData {
    const message = createBaseShowPieceData();
    message.oftenUseTypeList = Object.entries(object.oftenUseTypeList ?? {}).reduce<{ [key: number]: ShowPieceIdList }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ShowPieceIdList.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.unlockTypeList = Object.entries(object.unlockTypeList ?? {}).reduce<{ [key: number]: ShowPieceIdList }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = ShowPieceIdList.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.roulettePosPieceInfo = Object.entries(object.roulettePosPieceInfo ?? {}).reduce<
      { [key: number]: ShowPiecePair }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = ShowPiecePair.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseShowPieceData_OftenUseTypeListEntry(): ShowPieceData_OftenUseTypeListEntry {
  return { key: 0, value: undefined };
}

export const ShowPieceData_OftenUseTypeListEntry: MessageFns<ShowPieceData_OftenUseTypeListEntry> = {
  encode(message: ShowPieceData_OftenUseTypeListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ShowPieceIdList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShowPieceData_OftenUseTypeListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowPieceData_OftenUseTypeListEntry();
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

          message.value = ShowPieceIdList.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShowPieceData_OftenUseTypeListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ShowPieceIdList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShowPieceData_OftenUseTypeListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ShowPieceIdList.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShowPieceData_OftenUseTypeListEntry>, I>>(
    base?: I,
  ): ShowPieceData_OftenUseTypeListEntry {
    return ShowPieceData_OftenUseTypeListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShowPieceData_OftenUseTypeListEntry>, I>>(
    object: I,
  ): ShowPieceData_OftenUseTypeListEntry {
    const message = createBaseShowPieceData_OftenUseTypeListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ShowPieceIdList.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseShowPieceData_UnlockTypeListEntry(): ShowPieceData_UnlockTypeListEntry {
  return { key: 0, value: undefined };
}

export const ShowPieceData_UnlockTypeListEntry: MessageFns<ShowPieceData_UnlockTypeListEntry> = {
  encode(message: ShowPieceData_UnlockTypeListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ShowPieceIdList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShowPieceData_UnlockTypeListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowPieceData_UnlockTypeListEntry();
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

          message.value = ShowPieceIdList.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShowPieceData_UnlockTypeListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ShowPieceIdList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShowPieceData_UnlockTypeListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ShowPieceIdList.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShowPieceData_UnlockTypeListEntry>, I>>(
    base?: I,
  ): ShowPieceData_UnlockTypeListEntry {
    return ShowPieceData_UnlockTypeListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShowPieceData_UnlockTypeListEntry>, I>>(
    object: I,
  ): ShowPieceData_UnlockTypeListEntry {
    const message = createBaseShowPieceData_UnlockTypeListEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ShowPieceIdList.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseShowPieceData_RoulettePosPieceInfoEntry(): ShowPieceData_RoulettePosPieceInfoEntry {
  return { key: 0, value: undefined };
}

export const ShowPieceData_RoulettePosPieceInfoEntry: MessageFns<ShowPieceData_RoulettePosPieceInfoEntry> = {
  encode(message: ShowPieceData_RoulettePosPieceInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ShowPiecePair.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShowPieceData_RoulettePosPieceInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowPieceData_RoulettePosPieceInfoEntry();
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

          message.value = ShowPiecePair.decode(reader, reader.uint32());
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

  fromJSON(object: any): ShowPieceData_RoulettePosPieceInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? ShowPiecePair.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ShowPieceData_RoulettePosPieceInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ShowPiecePair.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShowPieceData_RoulettePosPieceInfoEntry>, I>>(
    base?: I,
  ): ShowPieceData_RoulettePosPieceInfoEntry {
    return ShowPieceData_RoulettePosPieceInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShowPieceData_RoulettePosPieceInfoEntry>, I>>(
    object: I,
  ): ShowPieceData_RoulettePosPieceInfoEntry {
    const message = createBaseShowPieceData_RoulettePosPieceInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ShowPiecePair.fromPartial(object.value)
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
