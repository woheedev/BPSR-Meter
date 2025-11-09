/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SignStatusList } from "./stru_sign_status_list";

export const protobufPackage = "zproto";

export interface SignInfo {
  signInfo: { [key: number]: SignStatusList };
}

export interface SignInfo_SignInfoEntry {
  key: number;
  value: SignStatusList | undefined;
}

function createBaseSignInfo(): SignInfo {
  return { signInfo: {} };
}

export const SignInfo: MessageFns<SignInfo> = {
  encode(message: SignInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.signInfo).forEach(([key, value]) => {
      SignInfo_SignInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SignInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SignInfo_SignInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.signInfo[entry1.key] = entry1.value;
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

  fromJSON(object: any): SignInfo {
    return {
      signInfo: isObject(object.signInfo)
        ? Object.entries(object.signInfo).reduce<{ [key: number]: SignStatusList }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = SignStatusList.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SignInfo): unknown {
    const obj: any = {};
    if (message.signInfo) {
      const entries = Object.entries(message.signInfo);
      if (entries.length > 0) {
        obj.signInfo = {};
        entries.forEach(([k, v]) => {
          obj.signInfo[k] = SignStatusList.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignInfo>, I>>(base?: I): SignInfo {
    return SignInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignInfo>, I>>(object: I): SignInfo {
    const message = createBaseSignInfo();
    message.signInfo = Object.entries(object.signInfo ?? {}).reduce<{ [key: number]: SignStatusList }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = SignStatusList.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSignInfo_SignInfoEntry(): SignInfo_SignInfoEntry {
  return { key: 0, value: undefined };
}

export const SignInfo_SignInfoEntry: MessageFns<SignInfo_SignInfoEntry> = {
  encode(message: SignInfo_SignInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      SignStatusList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SignInfo_SignInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInfo_SignInfoEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = SignStatusList.decode(reader, reader.uint32());
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

  fromJSON(object: any): SignInfo_SignInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? SignStatusList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SignInfo_SignInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = SignStatusList.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignInfo_SignInfoEntry>, I>>(base?: I): SignInfo_SignInfoEntry {
    return SignInfo_SignInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignInfo_SignInfoEntry>, I>>(object: I): SignInfo_SignInfoEntry {
    const message = createBaseSignInfo_SignInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? SignStatusList.fromPartial(object.value)
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
