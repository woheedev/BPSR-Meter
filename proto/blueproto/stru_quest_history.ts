/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface QuestHistory {
  stepHistory: { [key: number]: number };
}

export interface QuestHistory_StepHistoryEntry {
  key: number;
  value: number;
}

function createBaseQuestHistory(): QuestHistory {
  return { stepHistory: {} };
}

export const QuestHistory: MessageFns<QuestHistory> = {
  encode(message: QuestHistory, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.stepHistory).forEach(([key, value]) => {
      QuestHistory_StepHistoryEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = QuestHistory_StepHistoryEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.stepHistory[entry1.key] = entry1.value;
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

  fromJSON(object: any): QuestHistory {
    return {
      stepHistory: isObject(object.stepHistory)
        ? Object.entries(object.stepHistory).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: QuestHistory): unknown {
    const obj: any = {};
    if (message.stepHistory) {
      const entries = Object.entries(message.stepHistory);
      if (entries.length > 0) {
        obj.stepHistory = {};
        entries.forEach(([k, v]) => {
          obj.stepHistory[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestHistory>, I>>(base?: I): QuestHistory {
    return QuestHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestHistory>, I>>(object: I): QuestHistory {
    const message = createBaseQuestHistory();
    message.stepHistory = Object.entries(object.stepHistory ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseQuestHistory_StepHistoryEntry(): QuestHistory_StepHistoryEntry {
  return { key: 0, value: 0 };
}

export const QuestHistory_StepHistoryEntry: MessageFns<QuestHistory_StepHistoryEntry> = {
  encode(message: QuestHistory_StepHistoryEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestHistory_StepHistoryEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestHistory_StepHistoryEntry();
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

          message.value = reader.uint32();
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

  fromJSON(object: any): QuestHistory_StepHistoryEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestHistory_StepHistoryEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestHistory_StepHistoryEntry>, I>>(base?: I): QuestHistory_StepHistoryEntry {
    return QuestHistory_StepHistoryEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestHistory_StepHistoryEntry>, I>>(
    object: I,
  ): QuestHistory_StepHistoryEntry {
    const message = createBaseQuestHistory_StepHistoryEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
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
