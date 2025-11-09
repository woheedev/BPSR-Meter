/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EShowPieceType, eShowPieceTypeFromJSON, eShowPieceTypeToJSON } from "./enum_e_show_piece_type";

export const protobufPackage = "zproto";

export interface ShowPiecePair {
  pieceType: EShowPieceType;
  pieceId: number;
}

function createBaseShowPiecePair(): ShowPiecePair {
  return { pieceType: 0, pieceId: 0 };
}

export const ShowPiecePair: MessageFns<ShowPiecePair> = {
  encode(message: ShowPiecePair, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pieceType !== 0) {
      writer.uint32(8).int32(message.pieceType);
    }
    if (message.pieceId !== 0) {
      writer.uint32(16).int32(message.pieceId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ShowPiecePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowPiecePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.pieceType = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.pieceId = reader.int32();
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

  fromJSON(object: any): ShowPiecePair {
    return {
      pieceType: isSet(object.pieceType) ? eShowPieceTypeFromJSON(object.pieceType) : 0,
      pieceId: isSet(object.pieceId) ? globalThis.Number(object.pieceId) : 0,
    };
  },

  toJSON(message: ShowPiecePair): unknown {
    const obj: any = {};
    if (message.pieceType !== 0) {
      obj.pieceType = eShowPieceTypeToJSON(message.pieceType);
    }
    if (message.pieceId !== 0) {
      obj.pieceId = Math.round(message.pieceId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShowPiecePair>, I>>(base?: I): ShowPiecePair {
    return ShowPiecePair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShowPiecePair>, I>>(object: I): ShowPiecePair {
    const message = createBaseShowPiecePair();
    message.pieceType = object.pieceType ?? 0;
    message.pieceId = object.pieceId ?? 0;
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
