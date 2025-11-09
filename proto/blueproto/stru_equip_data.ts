/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EquipNine } from "./stru_equip_nine";

export const protobufPackage = "zproto";

export interface EquipData {
  equipInfos: EquipNine[];
}

function createBaseEquipData(): EquipData {
  return { equipInfos: [] };
}

export const EquipData: MessageFns<EquipData> = {
  encode(message: EquipData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.equipInfos) {
      EquipNine.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EquipData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquipData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.equipInfos.push(EquipNine.decode(reader, reader.uint32()));
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

  fromJSON(object: any): EquipData {
    return {
      equipInfos: globalThis.Array.isArray(object?.equipInfos)
        ? object.equipInfos.map((e: any) => EquipNine.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EquipData): unknown {
    const obj: any = {};
    if (message.equipInfos?.length) {
      obj.equipInfos = message.equipInfos.map((e) => EquipNine.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EquipData>, I>>(base?: I): EquipData {
    return EquipData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EquipData>, I>>(object: I): EquipData {
    const message = createBaseEquipData();
    message.equipInfos = object.equipInfos?.map((e) => EquipNine.fromPartial(e)) || [];
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
