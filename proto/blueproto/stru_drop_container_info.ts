/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DropAwardHistory } from "./stru_drop_award_history";
import { DropContainerSingle } from "./stru_drop_container_single";

export const protobufPackage = "zproto";

export interface DropContainerInfo {
  dropContainers: { [key: number]: DropContainerSingle };
  dropAwardHistories: { [key: number]: DropAwardHistory };
}

export interface DropContainerInfo_DropContainersEntry {
  key: number;
  value: DropContainerSingle | undefined;
}

export interface DropContainerInfo_DropAwardHistoriesEntry {
  key: number;
  value: DropAwardHistory | undefined;
}

function createBaseDropContainerInfo(): DropContainerInfo {
  return { dropContainers: {}, dropAwardHistories: {} };
}

export const DropContainerInfo: MessageFns<DropContainerInfo> = {
  encode(message: DropContainerInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.dropContainers).forEach(([key, value]) => {
      DropContainerInfo_DropContainersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.dropAwardHistories).forEach(([key, value]) => {
      DropContainerInfo_DropAwardHistoriesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DropContainerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropContainerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = DropContainerInfo_DropContainersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dropContainers[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = DropContainerInfo_DropAwardHistoriesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.dropAwardHistories[entry2.key] = entry2.value;
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

  fromJSON(object: any): DropContainerInfo {
    return {
      dropContainers: isObject(object.dropContainers)
        ? Object.entries(object.dropContainers).reduce<{ [key: number]: DropContainerSingle }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = DropContainerSingle.fromJSON(value);
          return acc;
        }, {})
        : {},
      dropAwardHistories: isObject(object.dropAwardHistories)
        ? Object.entries(object.dropAwardHistories).reduce<{ [key: number]: DropAwardHistory }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = DropAwardHistory.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: DropContainerInfo): unknown {
    const obj: any = {};
    if (message.dropContainers) {
      const entries = Object.entries(message.dropContainers);
      if (entries.length > 0) {
        obj.dropContainers = {};
        entries.forEach(([k, v]) => {
          obj.dropContainers[k] = DropContainerSingle.toJSON(v);
        });
      }
    }
    if (message.dropAwardHistories) {
      const entries = Object.entries(message.dropAwardHistories);
      if (entries.length > 0) {
        obj.dropAwardHistories = {};
        entries.forEach(([k, v]) => {
          obj.dropAwardHistories[k] = DropAwardHistory.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropContainerInfo>, I>>(base?: I): DropContainerInfo {
    return DropContainerInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropContainerInfo>, I>>(object: I): DropContainerInfo {
    const message = createBaseDropContainerInfo();
    message.dropContainers = Object.entries(object.dropContainers ?? {}).reduce<{ [key: number]: DropContainerSingle }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = DropContainerSingle.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.dropAwardHistories = Object.entries(object.dropAwardHistories ?? {}).reduce<
      { [key: number]: DropAwardHistory }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = DropAwardHistory.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseDropContainerInfo_DropContainersEntry(): DropContainerInfo_DropContainersEntry {
  return { key: 0, value: undefined };
}

export const DropContainerInfo_DropContainersEntry: MessageFns<DropContainerInfo_DropContainersEntry> = {
  encode(message: DropContainerInfo_DropContainersEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DropContainerSingle.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DropContainerInfo_DropContainersEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropContainerInfo_DropContainersEntry();
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

          message.value = DropContainerSingle.decode(reader, reader.uint32());
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

  fromJSON(object: any): DropContainerInfo_DropContainersEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DropContainerSingle.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DropContainerInfo_DropContainersEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DropContainerSingle.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropContainerInfo_DropContainersEntry>, I>>(
    base?: I,
  ): DropContainerInfo_DropContainersEntry {
    return DropContainerInfo_DropContainersEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropContainerInfo_DropContainersEntry>, I>>(
    object: I,
  ): DropContainerInfo_DropContainersEntry {
    const message = createBaseDropContainerInfo_DropContainersEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DropContainerSingle.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseDropContainerInfo_DropAwardHistoriesEntry(): DropContainerInfo_DropAwardHistoriesEntry {
  return { key: 0, value: undefined };
}

export const DropContainerInfo_DropAwardHistoriesEntry: MessageFns<DropContainerInfo_DropAwardHistoriesEntry> = {
  encode(message: DropContainerInfo_DropAwardHistoriesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      DropAwardHistory.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DropContainerInfo_DropAwardHistoriesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropContainerInfo_DropAwardHistoriesEntry();
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

          message.value = DropAwardHistory.decode(reader, reader.uint32());
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

  fromJSON(object: any): DropContainerInfo_DropAwardHistoriesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? DropAwardHistory.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DropContainerInfo_DropAwardHistoriesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = DropAwardHistory.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropContainerInfo_DropAwardHistoriesEntry>, I>>(
    base?: I,
  ): DropContainerInfo_DropAwardHistoriesEntry {
    return DropContainerInfo_DropAwardHistoriesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropContainerInfo_DropAwardHistoriesEntry>, I>>(
    object: I,
  ): DropContainerInfo_DropAwardHistoriesEntry {
    const message = createBaseDropContainerInfo_DropAwardHistoriesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? DropAwardHistory.fromPartial(object.value)
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
