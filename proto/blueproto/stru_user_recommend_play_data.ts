/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface UserRecommendPlayData {
  playMail: { [key: number]: Long };
}

export interface UserRecommendPlayData_PlayMailEntry {
  key: number;
  value: Long;
}

function createBaseUserRecommendPlayData(): UserRecommendPlayData {
  return { playMail: {} };
}

export const UserRecommendPlayData: MessageFns<UserRecommendPlayData> = {
  encode(message: UserRecommendPlayData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.playMail).forEach(([key, value]) => {
      UserRecommendPlayData_PlayMailEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserRecommendPlayData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRecommendPlayData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = UserRecommendPlayData_PlayMailEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.playMail[entry1.key] = entry1.value;
          }
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

  fromJSON(object: any): UserRecommendPlayData {
    return {
      playMail: isObject(object.playMail)
        ? Object.entries(object.playMail).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Long.fromValue(value as Long | string);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UserRecommendPlayData): unknown {
    const obj: any = {};
    if (message.playMail) {
      const entries = Object.entries(message.playMail);
      if (entries.length > 0) {
        obj.playMail = {};
        entries.forEach(([k, v]) => {
          obj.playMail[k] = v.toString();
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRecommendPlayData>, I>>(base?: I): UserRecommendPlayData {
    return UserRecommendPlayData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserRecommendPlayData>, I>>(object: I): UserRecommendPlayData {
    const message = createBaseUserRecommendPlayData();
    message.playMail = Object.entries(object.playMail ?? {}).reduce<{ [key: number]: Long }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = Long.fromValue(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseUserRecommendPlayData_PlayMailEntry(): UserRecommendPlayData_PlayMailEntry {
  return { key: 0, value: Long.ZERO };
}

export const UserRecommendPlayData_PlayMailEntry: MessageFns<UserRecommendPlayData_PlayMailEntry> = {
  encode(message: UserRecommendPlayData_PlayMailEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserRecommendPlayData_PlayMailEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRecommendPlayData_PlayMailEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): UserRecommendPlayData_PlayMailEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: UserRecommendPlayData_PlayMailEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRecommendPlayData_PlayMailEntry>, I>>(
    base?: I,
  ): UserRecommendPlayData_PlayMailEntry {
    return UserRecommendPlayData_PlayMailEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserRecommendPlayData_PlayMailEntry>, I>>(
    object: I,
  ): UserRecommendPlayData_PlayMailEntry {
    const message = createBaseUserRecommendPlayData_PlayMailEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.ZERO;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
