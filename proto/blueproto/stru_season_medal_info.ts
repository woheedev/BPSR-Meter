/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MedalHole } from "./stru_medal_hole";
import { MedalNode } from "./stru_medal_node";

export const protobufPackage = "zproto";

export interface SeasonMedalInfo {
  seasonId: number;
  normalHoleInfos: { [key: number]: MedalHole };
  coreHoleInfo: MedalHole | undefined;
  coreHoleNodeInfos: { [key: number]: MedalNode };
}

export interface SeasonMedalInfo_NormalHoleInfosEntry {
  key: number;
  value: MedalHole | undefined;
}

export interface SeasonMedalInfo_CoreHoleNodeInfosEntry {
  key: number;
  value: MedalNode | undefined;
}

function createBaseSeasonMedalInfo(): SeasonMedalInfo {
  return { seasonId: 0, normalHoleInfos: {}, coreHoleInfo: undefined, coreHoleNodeInfos: {} };
}

export const SeasonMedalInfo: MessageFns<SeasonMedalInfo> = {
  encode(message: SeasonMedalInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.seasonId !== 0) {
      writer.uint32(8).uint32(message.seasonId);
    }
    Object.entries(message.normalHoleInfos).forEach(([key, value]) => {
      SeasonMedalInfo_NormalHoleInfosEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.coreHoleInfo !== undefined) {
      MedalHole.encode(message.coreHoleInfo, writer.uint32(26).fork()).join();
    }
    Object.entries(message.coreHoleNodeInfos).forEach(([key, value]) => {
      SeasonMedalInfo_CoreHoleNodeInfosEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonMedalInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonMedalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.seasonId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = SeasonMedalInfo_NormalHoleInfosEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.normalHoleInfos[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.coreHoleInfo = MedalHole.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = SeasonMedalInfo_CoreHoleNodeInfosEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.coreHoleNodeInfos[entry4.key] = entry4.value;
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

  fromJSON(object: any): SeasonMedalInfo {
    return {
      seasonId: isSet(object.seasonId) ? globalThis.Number(object.seasonId) : 0,
      normalHoleInfos: isObject(object.normalHoleInfos)
        ? Object.entries(object.normalHoleInfos).reduce<{ [key: number]: MedalHole }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MedalHole.fromJSON(value);
          return acc;
        }, {})
        : {},
      coreHoleInfo: isSet(object.coreHoleInfo) ? MedalHole.fromJSON(object.coreHoleInfo) : undefined,
      coreHoleNodeInfos: isObject(object.coreHoleNodeInfos)
        ? Object.entries(object.coreHoleNodeInfos).reduce<{ [key: number]: MedalNode }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = MedalNode.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SeasonMedalInfo): unknown {
    const obj: any = {};
    if (message.seasonId !== 0) {
      obj.seasonId = Math.round(message.seasonId);
    }
    if (message.normalHoleInfos) {
      const entries = Object.entries(message.normalHoleInfos);
      if (entries.length > 0) {
        obj.normalHoleInfos = {};
        entries.forEach(([k, v]) => {
          obj.normalHoleInfos[k] = MedalHole.toJSON(v);
        });
      }
    }
    if (message.coreHoleInfo !== undefined) {
      obj.coreHoleInfo = MedalHole.toJSON(message.coreHoleInfo);
    }
    if (message.coreHoleNodeInfos) {
      const entries = Object.entries(message.coreHoleNodeInfos);
      if (entries.length > 0) {
        obj.coreHoleNodeInfos = {};
        entries.forEach(([k, v]) => {
          obj.coreHoleNodeInfos[k] = MedalNode.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonMedalInfo>, I>>(base?: I): SeasonMedalInfo {
    return SeasonMedalInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonMedalInfo>, I>>(object: I): SeasonMedalInfo {
    const message = createBaseSeasonMedalInfo();
    message.seasonId = object.seasonId ?? 0;
    message.normalHoleInfos = Object.entries(object.normalHoleInfos ?? {}).reduce<{ [key: number]: MedalHole }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MedalHole.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.coreHoleInfo = (object.coreHoleInfo !== undefined && object.coreHoleInfo !== null)
      ? MedalHole.fromPartial(object.coreHoleInfo)
      : undefined;
    message.coreHoleNodeInfos = Object.entries(object.coreHoleNodeInfos ?? {}).reduce<{ [key: number]: MedalNode }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = MedalNode.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSeasonMedalInfo_NormalHoleInfosEntry(): SeasonMedalInfo_NormalHoleInfosEntry {
  return { key: 0, value: undefined };
}

export const SeasonMedalInfo_NormalHoleInfosEntry: MessageFns<SeasonMedalInfo_NormalHoleInfosEntry> = {
  encode(message: SeasonMedalInfo_NormalHoleInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      MedalHole.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonMedalInfo_NormalHoleInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonMedalInfo_NormalHoleInfosEntry();
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

          message.value = MedalHole.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonMedalInfo_NormalHoleInfosEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MedalHole.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonMedalInfo_NormalHoleInfosEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MedalHole.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonMedalInfo_NormalHoleInfosEntry>, I>>(
    base?: I,
  ): SeasonMedalInfo_NormalHoleInfosEntry {
    return SeasonMedalInfo_NormalHoleInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonMedalInfo_NormalHoleInfosEntry>, I>>(
    object: I,
  ): SeasonMedalInfo_NormalHoleInfosEntry {
    const message = createBaseSeasonMedalInfo_NormalHoleInfosEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MedalHole.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSeasonMedalInfo_CoreHoleNodeInfosEntry(): SeasonMedalInfo_CoreHoleNodeInfosEntry {
  return { key: 0, value: undefined };
}

export const SeasonMedalInfo_CoreHoleNodeInfosEntry: MessageFns<SeasonMedalInfo_CoreHoleNodeInfosEntry> = {
  encode(message: SeasonMedalInfo_CoreHoleNodeInfosEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      MedalNode.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonMedalInfo_CoreHoleNodeInfosEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonMedalInfo_CoreHoleNodeInfosEntry();
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

          message.value = MedalNode.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonMedalInfo_CoreHoleNodeInfosEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? MedalNode.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SeasonMedalInfo_CoreHoleNodeInfosEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = MedalNode.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonMedalInfo_CoreHoleNodeInfosEntry>, I>>(
    base?: I,
  ): SeasonMedalInfo_CoreHoleNodeInfosEntry {
    return SeasonMedalInfo_CoreHoleNodeInfosEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonMedalInfo_CoreHoleNodeInfosEntry>, I>>(
    object: I,
  ): SeasonMedalInfo_CoreHoleNodeInfosEntry {
    const message = createBaseSeasonMedalInfo_CoreHoleNodeInfosEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? MedalNode.fromPartial(object.value)
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
