/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PlayerRefreshShopRecord {
  items: number[];
}

function createBasePlayerRefreshShopRecord(): PlayerRefreshShopRecord {
  return { items: [] };
}

export const PlayerRefreshShopRecord: MessageFns<PlayerRefreshShopRecord> = {
  encode(message: PlayerRefreshShopRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(18).fork();
    for (const v of message.items) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerRefreshShopRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRefreshShopRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2: {
          if (tag === 16) {
            message.items.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.items.push(reader.int32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlayerRefreshShopRecord {
    return { items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => globalThis.Number(e)) : [] };
  },

  toJSON(message: PlayerRefreshShopRecord): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerRefreshShopRecord>, I>>(base?: I): PlayerRefreshShopRecord {
    return PlayerRefreshShopRecord.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlayerRefreshShopRecord>, I>>(object: I): PlayerRefreshShopRecord {
    const message = createBasePlayerRefreshShopRecord();
    message.items = object.items?.map((e) => e) || [];
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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
