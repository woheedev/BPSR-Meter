/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface GashaGuaranteeInfo {
  id: number;
  guaranteex: number;
  guaranteey: number;
  residueGuaranteeTimex: number;
  residueGuaranteeTimey: number;
  residueGuaranteeTimez: number;
  guaranteez: number;
}

function createBaseGashaGuaranteeInfo(): GashaGuaranteeInfo {
  return {
    id: 0,
    guaranteex: 0,
    guaranteey: 0,
    residueGuaranteeTimex: 0,
    residueGuaranteeTimey: 0,
    residueGuaranteeTimez: 0,
    guaranteez: 0,
  };
}

export const GashaGuaranteeInfo: MessageFns<GashaGuaranteeInfo> = {
  encode(message: GashaGuaranteeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.guaranteex !== 0) {
      writer.uint32(16).uint32(message.guaranteex);
    }
    if (message.guaranteey !== 0) {
      writer.uint32(24).uint32(message.guaranteey);
    }
    if (message.residueGuaranteeTimex !== 0) {
      writer.uint32(32).int32(message.residueGuaranteeTimex);
    }
    if (message.residueGuaranteeTimey !== 0) {
      writer.uint32(40).int32(message.residueGuaranteeTimey);
    }
    if (message.residueGuaranteeTimez !== 0) {
      writer.uint32(48).int32(message.residueGuaranteeTimez);
    }
    if (message.guaranteez !== 0) {
      writer.uint32(56).uint32(message.guaranteez);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GashaGuaranteeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGashaGuaranteeInfo();
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

          message.guaranteex = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.guaranteey = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.residueGuaranteeTimex = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.residueGuaranteeTimey = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.residueGuaranteeTimez = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.guaranteez = reader.uint32();
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

  fromJSON(object: any): GashaGuaranteeInfo {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      guaranteex: isSet(object.guaranteex) ? globalThis.Number(object.guaranteex) : 0,
      guaranteey: isSet(object.guaranteey) ? globalThis.Number(object.guaranteey) : 0,
      residueGuaranteeTimex: isSet(object.residueGuaranteeTimex) ? globalThis.Number(object.residueGuaranteeTimex) : 0,
      residueGuaranteeTimey: isSet(object.residueGuaranteeTimey) ? globalThis.Number(object.residueGuaranteeTimey) : 0,
      residueGuaranteeTimez: isSet(object.residueGuaranteeTimez) ? globalThis.Number(object.residueGuaranteeTimez) : 0,
      guaranteez: isSet(object.guaranteez) ? globalThis.Number(object.guaranteez) : 0,
    };
  },

  toJSON(message: GashaGuaranteeInfo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.guaranteex !== 0) {
      obj.guaranteex = Math.round(message.guaranteex);
    }
    if (message.guaranteey !== 0) {
      obj.guaranteey = Math.round(message.guaranteey);
    }
    if (message.residueGuaranteeTimex !== 0) {
      obj.residueGuaranteeTimex = Math.round(message.residueGuaranteeTimex);
    }
    if (message.residueGuaranteeTimey !== 0) {
      obj.residueGuaranteeTimey = Math.round(message.residueGuaranteeTimey);
    }
    if (message.residueGuaranteeTimez !== 0) {
      obj.residueGuaranteeTimez = Math.round(message.residueGuaranteeTimez);
    }
    if (message.guaranteez !== 0) {
      obj.guaranteez = Math.round(message.guaranteez);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GashaGuaranteeInfo>, I>>(base?: I): GashaGuaranteeInfo {
    return GashaGuaranteeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GashaGuaranteeInfo>, I>>(object: I): GashaGuaranteeInfo {
    const message = createBaseGashaGuaranteeInfo();
    message.id = object.id ?? 0;
    message.guaranteex = object.guaranteex ?? 0;
    message.guaranteey = object.guaranteey ?? 0;
    message.residueGuaranteeTimex = object.residueGuaranteeTimex ?? 0;
    message.residueGuaranteeTimey = object.residueGuaranteeTimey ?? 0;
    message.residueGuaranteeTimez = object.residueGuaranteeTimez ?? 0;
    message.guaranteez = object.guaranteez ?? 0;
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
