/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PlayHelper {
  displayedHelperList: { [key: number]: boolean };
  completedGuide: { [key: number]: boolean };
}

export interface PlayHelper_DisplayedHelperListEntry {
  key: number;
  value: boolean;
}

export interface PlayHelper_CompletedGuideEntry {
  key: number;
  value: boolean;
}

function createBasePlayHelper(): PlayHelper {
  return { displayedHelperList: {}, completedGuide: {} };
}

export const PlayHelper: MessageFns<PlayHelper> = {
  encode(message: PlayHelper, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.displayedHelperList).forEach(([key, value]) => {
      PlayHelper_DisplayedHelperListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.completedGuide).forEach(([key, value]) => {
      PlayHelper_CompletedGuideEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayHelper {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayHelper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = PlayHelper_DisplayedHelperListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.displayedHelperList[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = PlayHelper_CompletedGuideEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.completedGuide[entry2.key] = entry2.value;
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

  fromJSON(object: any): PlayHelper {
    return {
      displayedHelperList: isObject(object.displayedHelperList)
        ? Object.entries(object.displayedHelperList).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      completedGuide: isObject(object.completedGuide)
        ? Object.entries(object.completedGuide).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PlayHelper): unknown {
    const obj: any = {};
    if (message.displayedHelperList) {
      const entries = Object.entries(message.displayedHelperList);
      if (entries.length > 0) {
        obj.displayedHelperList = {};
        entries.forEach(([k, v]) => {
          obj.displayedHelperList[k] = v;
        });
      }
    }
    if (message.completedGuide) {
      const entries = Object.entries(message.completedGuide);
      if (entries.length > 0) {
        obj.completedGuide = {};
        entries.forEach(([k, v]) => {
          obj.completedGuide[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayHelper>, I>>(base?: I): PlayHelper {
    return PlayHelper.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayHelper>, I>>(object: I): PlayHelper {
    const message = createBasePlayHelper();
    message.displayedHelperList = Object.entries(object.displayedHelperList ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.completedGuide = Object.entries(object.completedGuide ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePlayHelper_DisplayedHelperListEntry(): PlayHelper_DisplayedHelperListEntry {
  return { key: 0, value: false };
}

export const PlayHelper_DisplayedHelperListEntry: MessageFns<PlayHelper_DisplayedHelperListEntry> = {
  encode(message: PlayHelper_DisplayedHelperListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayHelper_DisplayedHelperListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayHelper_DisplayedHelperListEntry();
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

  fromJSON(object: any): PlayHelper_DisplayedHelperListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: PlayHelper_DisplayedHelperListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayHelper_DisplayedHelperListEntry>, I>>(
    base?: I,
  ): PlayHelper_DisplayedHelperListEntry {
    return PlayHelper_DisplayedHelperListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayHelper_DisplayedHelperListEntry>, I>>(
    object: I,
  ): PlayHelper_DisplayedHelperListEntry {
    const message = createBasePlayHelper_DisplayedHelperListEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBasePlayHelper_CompletedGuideEntry(): PlayHelper_CompletedGuideEntry {
  return { key: 0, value: false };
}

export const PlayHelper_CompletedGuideEntry: MessageFns<PlayHelper_CompletedGuideEntry> = {
  encode(message: PlayHelper_CompletedGuideEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayHelper_CompletedGuideEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayHelper_CompletedGuideEntry();
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

  fromJSON(object: any): PlayHelper_CompletedGuideEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: PlayHelper_CompletedGuideEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayHelper_CompletedGuideEntry>, I>>(base?: I): PlayHelper_CompletedGuideEntry {
    return PlayHelper_CompletedGuideEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayHelper_CompletedGuideEntry>, I>>(
    object: I,
  ): PlayHelper_CompletedGuideEntry {
    const message = createBasePlayHelper_CompletedGuideEntry();
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
