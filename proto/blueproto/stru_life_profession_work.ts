/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LifeProfessionWorkInfo } from "./stru_life_profession_work_info";

export const protobufPackage = "zproto";

export interface LifeProfessionWork {
  lifeProfessionWorkInfo: LifeProfessionWorkInfo | undefined;
  lifeProfessionWorkHistoryInfo: LifeProfessionWorkInfo[];
}

function createBaseLifeProfessionWork(): LifeProfessionWork {
  return { lifeProfessionWorkInfo: undefined, lifeProfessionWorkHistoryInfo: [] };
}

export const LifeProfessionWork: MessageFns<LifeProfessionWork> = {
  encode(message: LifeProfessionWork, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.lifeProfessionWorkInfo !== undefined) {
      LifeProfessionWorkInfo.encode(message.lifeProfessionWorkInfo, writer.uint32(10).fork()).join();
    }
    for (const v of message.lifeProfessionWorkHistoryInfo) {
      LifeProfessionWorkInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LifeProfessionWork {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLifeProfessionWork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.lifeProfessionWorkInfo = LifeProfessionWorkInfo.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.lifeProfessionWorkHistoryInfo.push(LifeProfessionWorkInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LifeProfessionWork {
    return {
      lifeProfessionWorkInfo: isSet(object.lifeProfessionWorkInfo)
        ? LifeProfessionWorkInfo.fromJSON(object.lifeProfessionWorkInfo)
        : undefined,
      lifeProfessionWorkHistoryInfo: globalThis.Array.isArray(object?.lifeProfessionWorkHistoryInfo)
        ? object.lifeProfessionWorkHistoryInfo.map((e: any) => LifeProfessionWorkInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LifeProfessionWork): unknown {
    const obj: any = {};
    if (message.lifeProfessionWorkInfo !== undefined) {
      obj.lifeProfessionWorkInfo = LifeProfessionWorkInfo.toJSON(message.lifeProfessionWorkInfo);
    }
    if (message.lifeProfessionWorkHistoryInfo?.length) {
      obj.lifeProfessionWorkHistoryInfo = message.lifeProfessionWorkHistoryInfo.map((e) =>
        LifeProfessionWorkInfo.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LifeProfessionWork>, I>>(base?: I): LifeProfessionWork {
    return LifeProfessionWork.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LifeProfessionWork>, I>>(object: I): LifeProfessionWork {
    const message = createBaseLifeProfessionWork();
    message.lifeProfessionWorkInfo =
      (object.lifeProfessionWorkInfo !== undefined && object.lifeProfessionWorkInfo !== null)
        ? LifeProfessionWorkInfo.fromPartial(object.lifeProfessionWorkInfo)
        : undefined;
    message.lifeProfessionWorkHistoryInfo =
      object.lifeProfessionWorkHistoryInfo?.map((e) => LifeProfessionWorkInfo.fromPartial(e)) || [];
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
