/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EQuestStepStatus, eQuestStepStatusFromJSON, eQuestStepStatusToJSON } from "./enum_e_quest_step_status";

export const protobufPackage = "zproto";

export interface QuestData {
  id: number;
  stepId: number;
  state: number;
  targetNum: { [key: number]: number };
  targetMaxNum: { [key: number]: number };
  stepLimitTime: Long;
  stepStatus: EQuestStepStatus;
  addLimitTime: number;
  targetType: { [key: number]: number };
}

export interface QuestData_TargetNumEntry {
  key: number;
  value: number;
}

export interface QuestData_TargetMaxNumEntry {
  key: number;
  value: number;
}

export interface QuestData_TargetTypeEntry {
  key: number;
  value: number;
}

function createBaseQuestData(): QuestData {
  return {
    id: 0,
    stepId: 0,
    state: 0,
    targetNum: {},
    targetMaxNum: {},
    stepLimitTime: Long.ZERO,
    stepStatus: 0,
    addLimitTime: 0,
    targetType: {},
  };
}

export const QuestData: MessageFns<QuestData> = {
  encode(message: QuestData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.stepId !== 0) {
      writer.uint32(16).uint32(message.stepId);
    }
    if (message.state !== 0) {
      writer.uint32(24).uint32(message.state);
    }
    Object.entries(message.targetNum).forEach(([key, value]) => {
      QuestData_TargetNumEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.targetMaxNum).forEach(([key, value]) => {
      QuestData_TargetMaxNumEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (!message.stepLimitTime.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.stepLimitTime.toString());
    }
    if (message.stepStatus !== 0) {
      writer.uint32(56).int32(message.stepStatus);
    }
    if (message.addLimitTime !== 0) {
      writer.uint32(64).uint32(message.addLimitTime);
    }
    Object.entries(message.targetType).forEach(([key, value]) => {
      QuestData_TargetTypeEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.stepId = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.state = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = QuestData_TargetNumEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.targetNum[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = QuestData_TargetMaxNumEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.targetMaxNum[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.stepLimitTime = Long.fromString(reader.int64().toString());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.stepStatus = reader.int32() as any;
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.addLimitTime = reader.uint32();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          const entry9 = QuestData_TargetTypeEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.targetType[entry9.key] = entry9.value;
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

  fromJSON(object: any): QuestData {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      stepId: isSet(object.stepId) ? globalThis.Number(object.stepId) : 0,
      state: isSet(object.state) ? globalThis.Number(object.state) : 0,
      targetNum: isObject(object.targetNum)
        ? Object.entries(object.targetNum).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      targetMaxNum: isObject(object.targetMaxNum)
        ? Object.entries(object.targetMaxNum).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      stepLimitTime: isSet(object.stepLimitTime) ? Long.fromValue(object.stepLimitTime) : Long.ZERO,
      stepStatus: isSet(object.stepStatus) ? eQuestStepStatusFromJSON(object.stepStatus) : 0,
      addLimitTime: isSet(object.addLimitTime) ? globalThis.Number(object.addLimitTime) : 0,
      targetType: isObject(object.targetType)
        ? Object.entries(object.targetType).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: QuestData): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.stepId !== 0) {
      obj.stepId = Math.round(message.stepId);
    }
    if (message.state !== 0) {
      obj.state = Math.round(message.state);
    }
    if (message.targetNum) {
      const entries = Object.entries(message.targetNum);
      if (entries.length > 0) {
        obj.targetNum = {};
        entries.forEach(([k, v]) => {
          obj.targetNum[k] = Math.round(v);
        });
      }
    }
    if (message.targetMaxNum) {
      const entries = Object.entries(message.targetMaxNum);
      if (entries.length > 0) {
        obj.targetMaxNum = {};
        entries.forEach(([k, v]) => {
          obj.targetMaxNum[k] = Math.round(v);
        });
      }
    }
    if (!message.stepLimitTime.equals(Long.ZERO)) {
      obj.stepLimitTime = (message.stepLimitTime || Long.ZERO).toString();
    }
    if (message.stepStatus !== 0) {
      obj.stepStatus = eQuestStepStatusToJSON(message.stepStatus);
    }
    if (message.addLimitTime !== 0) {
      obj.addLimitTime = Math.round(message.addLimitTime);
    }
    if (message.targetType) {
      const entries = Object.entries(message.targetType);
      if (entries.length > 0) {
        obj.targetType = {};
        entries.forEach(([k, v]) => {
          obj.targetType[k] = Math.round(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestData>, I>>(base?: I): QuestData {
    return QuestData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestData>, I>>(object: I): QuestData {
    const message = createBaseQuestData();
    message.id = object.id ?? 0;
    message.stepId = object.stepId ?? 0;
    message.state = object.state ?? 0;
    message.targetNum = Object.entries(object.targetNum ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.targetMaxNum = Object.entries(object.targetMaxNum ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.stepLimitTime = (object.stepLimitTime !== undefined && object.stepLimitTime !== null)
      ? Long.fromValue(object.stepLimitTime)
      : Long.ZERO;
    message.stepStatus = object.stepStatus ?? 0;
    message.addLimitTime = object.addLimitTime ?? 0;
    message.targetType = Object.entries(object.targetType ?? {}).reduce<{ [key: number]: number }>(
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

function createBaseQuestData_TargetNumEntry(): QuestData_TargetNumEntry {
  return { key: 0, value: 0 };
}

export const QuestData_TargetNumEntry: MessageFns<QuestData_TargetNumEntry> = {
  encode(message: QuestData_TargetNumEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestData_TargetNumEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestData_TargetNumEntry();
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

          message.value = reader.int32();
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

  fromJSON(object: any): QuestData_TargetNumEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestData_TargetNumEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestData_TargetNumEntry>, I>>(base?: I): QuestData_TargetNumEntry {
    return QuestData_TargetNumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestData_TargetNumEntry>, I>>(object: I): QuestData_TargetNumEntry {
    const message = createBaseQuestData_TargetNumEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseQuestData_TargetMaxNumEntry(): QuestData_TargetMaxNumEntry {
  return { key: 0, value: 0 };
}

export const QuestData_TargetMaxNumEntry: MessageFns<QuestData_TargetMaxNumEntry> = {
  encode(message: QuestData_TargetMaxNumEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestData_TargetMaxNumEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestData_TargetMaxNumEntry();
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

          message.value = reader.int32();
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

  fromJSON(object: any): QuestData_TargetMaxNumEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestData_TargetMaxNumEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestData_TargetMaxNumEntry>, I>>(base?: I): QuestData_TargetMaxNumEntry {
    return QuestData_TargetMaxNumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestData_TargetMaxNumEntry>, I>>(object: I): QuestData_TargetMaxNumEntry {
    const message = createBaseQuestData_TargetMaxNumEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseQuestData_TargetTypeEntry(): QuestData_TargetTypeEntry {
  return { key: 0, value: 0 };
}

export const QuestData_TargetTypeEntry: MessageFns<QuestData_TargetTypeEntry> = {
  encode(message: QuestData_TargetTypeEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestData_TargetTypeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestData_TargetTypeEntry();
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

          message.value = reader.int32();
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

  fromJSON(object: any): QuestData_TargetTypeEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestData_TargetTypeEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestData_TargetTypeEntry>, I>>(base?: I): QuestData_TargetTypeEntry {
    return QuestData_TargetTypeEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestData_TargetTypeEntry>, I>>(object: I): QuestData_TargetTypeEntry {
    const message = createBaseQuestData_TargetTypeEntry();
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
