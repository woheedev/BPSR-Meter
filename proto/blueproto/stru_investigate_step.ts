/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AnswerList } from "./stru_answer_list";

export const protobufPackage = "zproto";

export interface InvestigateStep {
  clues: number[];
  reasoningMap: { [key: number]: AnswerList };
}

export interface InvestigateStep_ReasoningMapEntry {
  key: number;
  value: AnswerList | undefined;
}

function createBaseInvestigateStep(): InvestigateStep {
  return { clues: [], reasoningMap: {} };
}

export const InvestigateStep: MessageFns<InvestigateStep> = {
  encode(message: InvestigateStep, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.clues) {
      writer.int32(v);
    }
    writer.join();
    Object.entries(message.reasoningMap).forEach(([key, value]) => {
      InvestigateStep_ReasoningMapEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvestigateStep {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvestigateStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.clues.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.clues.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = InvestigateStep_ReasoningMapEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.reasoningMap[entry2.key] = entry2.value;
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

  fromJSON(object: any): InvestigateStep {
    return {
      clues: globalThis.Array.isArray(object?.clues) ? object.clues.map((e: any) => globalThis.Number(e)) : [],
      reasoningMap: isObject(object.reasoningMap)
        ? Object.entries(object.reasoningMap).reduce<{ [key: number]: AnswerList }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = AnswerList.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: InvestigateStep): unknown {
    const obj: any = {};
    if (message.clues?.length) {
      obj.clues = message.clues.map((e) => Math.round(e));
    }
    if (message.reasoningMap) {
      const entries = Object.entries(message.reasoningMap);
      if (entries.length > 0) {
        obj.reasoningMap = {};
        entries.forEach(([k, v]) => {
          obj.reasoningMap[k] = AnswerList.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestigateStep>, I>>(base?: I): InvestigateStep {
    return InvestigateStep.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvestigateStep>, I>>(object: I): InvestigateStep {
    const message = createBaseInvestigateStep();
    message.clues = object.clues?.map((e) => e) || [];
    message.reasoningMap = Object.entries(object.reasoningMap ?? {}).reduce<{ [key: number]: AnswerList }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = AnswerList.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseInvestigateStep_ReasoningMapEntry(): InvestigateStep_ReasoningMapEntry {
  return { key: 0, value: undefined };
}

export const InvestigateStep_ReasoningMapEntry: MessageFns<InvestigateStep_ReasoningMapEntry> = {
  encode(message: InvestigateStep_ReasoningMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      AnswerList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvestigateStep_ReasoningMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvestigateStep_ReasoningMapEntry();
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

          message.value = AnswerList.decode(reader, reader.uint32());
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

  fromJSON(object: any): InvestigateStep_ReasoningMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? AnswerList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: InvestigateStep_ReasoningMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = AnswerList.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestigateStep_ReasoningMapEntry>, I>>(
    base?: I,
  ): InvestigateStep_ReasoningMapEntry {
    return InvestigateStep_ReasoningMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvestigateStep_ReasoningMapEntry>, I>>(
    object: I,
  ): InvestigateStep_ReasoningMapEntry {
    const message = createBaseInvestigateStep_ReasoningMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? AnswerList.fromPartial(object.value)
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
