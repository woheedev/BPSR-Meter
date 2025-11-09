/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { MarkPosition } from "./stru_mark_position";

export const protobufPackage = "zproto";

export interface MarkInfo {
  tagId: Long;
  title: string;
  content: string;
  iconId: number;
  position: MarkPosition | undefined;
}

function createBaseMarkInfo(): MarkInfo {
  return { tagId: Long.ZERO, title: "", content: "", iconId: 0, position: undefined };
}

export const MarkInfo: MessageFns<MarkInfo> = {
  encode(message: MarkInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.tagId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.tagId.toString());
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    if (message.iconId !== 0) {
      writer.uint32(32).uint32(message.iconId);
    }
    if (message.position !== undefined) {
      MarkPosition.encode(message.position, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MarkInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarkInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.tagId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.content = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.iconId = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.position = MarkPosition.decode(reader, reader.uint32());
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

  fromJSON(object: any): MarkInfo {
    return {
      tagId: isSet(object.tagId) ? Long.fromValue(object.tagId) : Long.ZERO,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      content: isSet(object.content) ? globalThis.String(object.content) : "",
      iconId: isSet(object.iconId) ? globalThis.Number(object.iconId) : 0,
      position: isSet(object.position) ? MarkPosition.fromJSON(object.position) : undefined,
    };
  },

  toJSON(message: MarkInfo): unknown {
    const obj: any = {};
    if (!message.tagId.equals(Long.ZERO)) {
      obj.tagId = (message.tagId || Long.ZERO).toString();
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.iconId !== 0) {
      obj.iconId = Math.round(message.iconId);
    }
    if (message.position !== undefined) {
      obj.position = MarkPosition.toJSON(message.position);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MarkInfo>, I>>(base?: I): MarkInfo {
    return MarkInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MarkInfo>, I>>(object: I): MarkInfo {
    const message = createBaseMarkInfo();
    message.tagId = (object.tagId !== undefined && object.tagId !== null) ? Long.fromValue(object.tagId) : Long.ZERO;
    message.title = object.title ?? "";
    message.content = object.content ?? "";
    message.iconId = object.iconId ?? 0;
    message.position = (object.position !== undefined && object.position !== null)
      ? MarkPosition.fromPartial(object.position)
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
