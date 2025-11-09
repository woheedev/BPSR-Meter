/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MedalNode {
  nodeId: number;
  nodeLevel: number;
  choose: boolean;
  slot: number;
}

function createBaseMedalNode(): MedalNode {
  return { nodeId: 0, nodeLevel: 0, choose: false, slot: 0 };
}

export const MedalNode: MessageFns<MedalNode> = {
  encode(message: MedalNode, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.nodeId !== 0) {
      writer.uint32(8).uint32(message.nodeId);
    }
    if (message.nodeLevel !== 0) {
      writer.uint32(16).uint32(message.nodeLevel);
    }
    if (message.choose !== false) {
      writer.uint32(24).bool(message.choose);
    }
    if (message.slot !== 0) {
      writer.uint32(32).int32(message.slot);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MedalNode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedalNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.nodeId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.nodeLevel = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.choose = reader.bool();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.slot = reader.int32();
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

  fromJSON(object: any): MedalNode {
    return {
      nodeId: isSet(object.nodeId) ? globalThis.Number(object.nodeId) : 0,
      nodeLevel: isSet(object.nodeLevel) ? globalThis.Number(object.nodeLevel) : 0,
      choose: isSet(object.choose) ? globalThis.Boolean(object.choose) : false,
      slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0,
    };
  },

  toJSON(message: MedalNode): unknown {
    const obj: any = {};
    if (message.nodeId !== 0) {
      obj.nodeId = Math.round(message.nodeId);
    }
    if (message.nodeLevel !== 0) {
      obj.nodeLevel = Math.round(message.nodeLevel);
    }
    if (message.choose !== false) {
      obj.choose = message.choose;
    }
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MedalNode>, I>>(base?: I): MedalNode {
    return MedalNode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MedalNode>, I>>(object: I): MedalNode {
    const message = createBaseMedalNode();
    message.nodeId = object.nodeId ?? 0;
    message.nodeLevel = object.nodeLevel ?? 0;
    message.choose = object.choose ?? false;
    message.slot = object.slot ?? 0;
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
