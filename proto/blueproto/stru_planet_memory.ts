/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PlanetMemory {
  passRoom: number[];
}

function createBasePlanetMemory(): PlanetMemory {
  return { passRoom: [] };
}

export const PlanetMemory: MessageFns<PlanetMemory> = {
  encode(message: PlanetMemory, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.passRoom) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlanetMemory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanetMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.passRoom.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.passRoom.push(reader.int32());
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

  fromJSON(object: any): PlanetMemory {
    return {
      passRoom: globalThis.Array.isArray(object?.passRoom) ? object.passRoom.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: PlanetMemory): unknown {
    const obj: any = {};
    if (message.passRoom?.length) {
      obj.passRoom = message.passRoom.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlanetMemory>, I>>(base?: I): PlanetMemory {
    return PlanetMemory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlanetMemory>, I>>(object: I): PlanetMemory {
    const message = createBasePlanetMemory();
    message.passRoom = object.passRoom?.map((e) => e) || [];
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
