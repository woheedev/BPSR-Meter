/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface CutScenePointInfo {
  cutSceneId: number;
}

function createBaseCutScenePointInfo(): CutScenePointInfo {
  return { cutSceneId: 0 };
}

export const CutScenePointInfo: MessageFns<CutScenePointInfo> = {
  encode(message: CutScenePointInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.cutSceneId !== 0) {
      writer.uint32(8).int32(message.cutSceneId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CutScenePointInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCutScenePointInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.cutSceneId = reader.int32();
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

  fromJSON(object: any): CutScenePointInfo {
    return { cutSceneId: isSet(object.cutSceneId) ? globalThis.Number(object.cutSceneId) : 0 };
  },

  toJSON(message: CutScenePointInfo): unknown {
    const obj: any = {};
    if (message.cutSceneId !== 0) {
      obj.cutSceneId = Math.round(message.cutSceneId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CutScenePointInfo>, I>>(base?: I): CutScenePointInfo {
    return CutScenePointInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CutScenePointInfo>, I>>(object: I): CutScenePointInfo {
    const message = createBaseCutScenePointInfo();
    message.cutSceneId = object.cutSceneId ?? 0;
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
