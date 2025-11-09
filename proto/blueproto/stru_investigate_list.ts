/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { InvestigateData } from "./stru_investigate_data";

export const protobufPackage = "zproto";

export interface InvestigateList {
  investigateMap: { [key: number]: InvestigateData };
  compInvestigateMap: { [key: number]: boolean };
  compReasoningMap: number[];
}

export interface InvestigateList_InvestigateMapEntry {
  key: number;
  value: InvestigateData | undefined;
}

export interface InvestigateList_CompInvestigateMapEntry {
  key: number;
  value: boolean;
}

function createBaseInvestigateList(): InvestigateList {
  return { investigateMap: {}, compInvestigateMap: {}, compReasoningMap: [] };
}

export const InvestigateList: MessageFns<InvestigateList> = {
  encode(message: InvestigateList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.investigateMap).forEach(([key, value]) => {
      InvestigateList_InvestigateMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.compInvestigateMap).forEach(([key, value]) => {
      InvestigateList_CompInvestigateMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    writer.uint32(26).fork();
    for (const v of message.compReasoningMap) {
      writer.uint32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvestigateList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvestigateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = InvestigateList_InvestigateMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.investigateMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = InvestigateList_CompInvestigateMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.compInvestigateMap[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag === 24) {
            message.compReasoningMap.push(reader.uint32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.compReasoningMap.push(reader.uint32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InvestigateList {
    return {
      investigateMap: isObject(object.investigateMap)
        ? Object.entries(object.investigateMap).reduce<{ [key: number]: InvestigateData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = InvestigateData.fromJSON(value);
          return acc;
        }, {})
        : {},
      compInvestigateMap: isObject(object.compInvestigateMap)
        ? Object.entries(object.compInvestigateMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      compReasoningMap: globalThis.Array.isArray(object?.compReasoningMap)
        ? object.compReasoningMap.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: InvestigateList): unknown {
    const obj: any = {};
    if (message.investigateMap) {
      const entries = Object.entries(message.investigateMap);
      if (entries.length > 0) {
        obj.investigateMap = {};
        entries.forEach(([k, v]) => {
          obj.investigateMap[k] = InvestigateData.toJSON(v);
        });
      }
    }
    if (message.compInvestigateMap) {
      const entries = Object.entries(message.compInvestigateMap);
      if (entries.length > 0) {
        obj.compInvestigateMap = {};
        entries.forEach(([k, v]) => {
          obj.compInvestigateMap[k] = v;
        });
      }
    }
    if (message.compReasoningMap?.length) {
      obj.compReasoningMap = message.compReasoningMap.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestigateList>, I>>(base?: I): InvestigateList {
    return InvestigateList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvestigateList>, I>>(object: I): InvestigateList {
    const message = createBaseInvestigateList();
    message.investigateMap = Object.entries(object.investigateMap ?? {}).reduce<{ [key: number]: InvestigateData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = InvestigateData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.compInvestigateMap = Object.entries(object.compInvestigateMap ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.compReasoningMap = object.compReasoningMap?.map((e) => e) || [];
    return message;
  },
};

function createBaseInvestigateList_InvestigateMapEntry(): InvestigateList_InvestigateMapEntry {
  return { key: 0, value: undefined };
}

export const InvestigateList_InvestigateMapEntry: MessageFns<InvestigateList_InvestigateMapEntry> = {
  encode(message: InvestigateList_InvestigateMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      InvestigateData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvestigateList_InvestigateMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvestigateList_InvestigateMapEntry();
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

          message.value = InvestigateData.decode(reader, reader.uint32());
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

  fromJSON(object: any): InvestigateList_InvestigateMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? InvestigateData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: InvestigateList_InvestigateMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = InvestigateData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestigateList_InvestigateMapEntry>, I>>(
    base?: I,
  ): InvestigateList_InvestigateMapEntry {
    return InvestigateList_InvestigateMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvestigateList_InvestigateMapEntry>, I>>(
    object: I,
  ): InvestigateList_InvestigateMapEntry {
    const message = createBaseInvestigateList_InvestigateMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? InvestigateData.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseInvestigateList_CompInvestigateMapEntry(): InvestigateList_CompInvestigateMapEntry {
  return { key: 0, value: false };
}

export const InvestigateList_CompInvestigateMapEntry: MessageFns<InvestigateList_CompInvestigateMapEntry> = {
  encode(message: InvestigateList_CompInvestigateMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvestigateList_CompInvestigateMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvestigateList_CompInvestigateMapEntry();
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
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
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

  fromJSON(object: any): InvestigateList_CompInvestigateMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: InvestigateList_CompInvestigateMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestigateList_CompInvestigateMapEntry>, I>>(
    base?: I,
  ): InvestigateList_CompInvestigateMapEntry {
    return InvestigateList_CompInvestigateMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvestigateList_CompInvestigateMapEntry>, I>>(
    object: I,
  ): InvestigateList_CompInvestigateMapEntry {
    const message = createBaseInvestigateList_CompInvestigateMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
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
