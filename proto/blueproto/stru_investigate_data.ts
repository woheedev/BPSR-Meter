/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { InvestigateStep } from "./stru_investigate_step";

export const protobufPackage = "zproto";

export interface InvestigateData {
  id: number;
  stepIds: { [key: number]: InvestigateStep };
}

export interface InvestigateData_StepIdsEntry {
  key: number;
  value: InvestigateStep | undefined;
}

function createBaseInvestigateData(): InvestigateData {
  return { id: 0, stepIds: {} };
}

export const InvestigateData: MessageFns<InvestigateData> = {
  encode(message: InvestigateData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    Object.entries(message.stepIds).forEach(([key, value]) => {
      InvestigateData_StepIdsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvestigateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvestigateData();
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
          if (tag !== 18) {
            break;
          }

          const entry2 = InvestigateData_StepIdsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.stepIds[entry2.key] = entry2.value;
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

  fromJSON(object: any): InvestigateData {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      stepIds: isObject(object.stepIds)
        ? Object.entries(object.stepIds).reduce<{ [key: number]: InvestigateStep }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = InvestigateStep.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: InvestigateData): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.stepIds) {
      const entries = Object.entries(message.stepIds);
      if (entries.length > 0) {
        obj.stepIds = {};
        entries.forEach(([k, v]) => {
          obj.stepIds[k] = InvestigateStep.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestigateData>, I>>(base?: I): InvestigateData {
    return InvestigateData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvestigateData>, I>>(object: I): InvestigateData {
    const message = createBaseInvestigateData();
    message.id = object.id ?? 0;
    message.stepIds = Object.entries(object.stepIds ?? {}).reduce<{ [key: number]: InvestigateStep }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = InvestigateStep.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseInvestigateData_StepIdsEntry(): InvestigateData_StepIdsEntry {
  return { key: 0, value: undefined };
}

export const InvestigateData_StepIdsEntry: MessageFns<InvestigateData_StepIdsEntry> = {
  encode(message: InvestigateData_StepIdsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      InvestigateStep.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InvestigateData_StepIdsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvestigateData_StepIdsEntry();
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

          message.value = InvestigateStep.decode(reader, reader.uint32());
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

  fromJSON(object: any): InvestigateData_StepIdsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? InvestigateStep.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: InvestigateData_StepIdsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = InvestigateStep.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestigateData_StepIdsEntry>, I>>(base?: I): InvestigateData_StepIdsEntry {
    return InvestigateData_StepIdsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InvestigateData_StepIdsEntry>, I>>(object: I): InvestigateData_StepIdsEntry {
    const message = createBaseInvestigateData_StepIdsEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? InvestigateStep.fromPartial(object.value)
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
