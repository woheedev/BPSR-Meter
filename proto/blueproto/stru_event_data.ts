/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface EventData {
  eventType: number;
  intParams: number[];
  longParams: Long[];
  floatParams: number[];
  strParams: string[];
}

function createBaseEventData(): EventData {
  return { eventType: 0, intParams: [], longParams: [], floatParams: [], strParams: [] };
}

export const EventData: MessageFns<EventData> = {
  encode(message: EventData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.eventType !== 0) {
      writer.uint32(8).int32(message.eventType);
    }
    writer.uint32(18).fork();
    for (const v of message.intParams) {
      writer.int32(v);
    }
    writer.join();
    writer.uint32(26).fork();
    for (const v of message.longParams) {
      writer.int64(v.toString());
    }
    writer.join();
    writer.uint32(34).fork();
    for (const v of message.floatParams) {
      writer.float(v);
    }
    writer.join();
    for (const v of message.strParams) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.eventType = reader.int32();
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.intParams.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.intParams.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 3: {
          if (tag === 24) {
            message.longParams.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.longParams.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag === 37) {
            message.floatParams.push(reader.float());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.floatParams.push(reader.float());
            }

            continue;
          }

          break;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.strParams.push(reader.string());
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

  fromJSON(object: any): EventData {
    return {
      eventType: isSet(object.eventType) ? globalThis.Number(object.eventType) : 0,
      intParams: globalThis.Array.isArray(object?.intParams)
        ? object.intParams.map((e: any) => globalThis.Number(e))
        : [],
      longParams: globalThis.Array.isArray(object?.longParams)
        ? object.longParams.map((e: any) => Long.fromValue(e))
        : [],
      floatParams: globalThis.Array.isArray(object?.floatParams)
        ? object.floatParams.map((e: any) => globalThis.Number(e))
        : [],
      strParams: globalThis.Array.isArray(object?.strParams)
        ? object.strParams.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: EventData): unknown {
    const obj: any = {};
    if (message.eventType !== 0) {
      obj.eventType = Math.round(message.eventType);
    }
    if (message.intParams?.length) {
      obj.intParams = message.intParams.map((e) => Math.round(e));
    }
    if (message.longParams?.length) {
      obj.longParams = message.longParams.map((e) => (e || Long.ZERO).toString());
    }
    if (message.floatParams?.length) {
      obj.floatParams = message.floatParams;
    }
    if (message.strParams?.length) {
      obj.strParams = message.strParams;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventData>, I>>(base?: I): EventData {
    return EventData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventData>, I>>(object: I): EventData {
    const message = createBaseEventData();
    message.eventType = object.eventType ?? 0;
    message.intParams = object.intParams?.map((e) => e) || [];
    message.longParams = object.longParams?.map((e) => Long.fromValue(e)) || [];
    message.floatParams = object.floatParams?.map((e) => e) || [];
    message.strParams = object.strParams?.map((e) => e) || [];
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
