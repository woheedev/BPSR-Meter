/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { SystemType, systemTypeFromJSON, systemTypeToJSON } from "./enum_system_type";

export const protobufPackage = "zproto";

export interface AccountData {
  openId: string;
  sdkType: number;
  accountId: string;
  accountUuid: string;
  os: SystemType;
}

function createBaseAccountData(): AccountData {
  return { openId: "", sdkType: 0, accountId: "", accountUuid: "", os: 0 };
}

export const AccountData: MessageFns<AccountData> = {
  encode(message: AccountData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.openId !== "") {
      writer.uint32(10).string(message.openId);
    }
    if (message.sdkType !== 0) {
      writer.uint32(16).int32(message.sdkType);
    }
    if (message.accountId !== "") {
      writer.uint32(26).string(message.accountId);
    }
    if (message.accountUuid !== "") {
      writer.uint32(34).string(message.accountUuid);
    }
    if (message.os !== 0) {
      writer.uint32(40).int32(message.os);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AccountData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.openId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.sdkType = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.accountId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.accountUuid = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.os = reader.int32() as any;
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

  fromJSON(object: any): AccountData {
    return {
      openId: isSet(object.openId) ? globalThis.String(object.openId) : "",
      sdkType: isSet(object.sdkType) ? globalThis.Number(object.sdkType) : 0,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      accountUuid: isSet(object.accountUuid) ? globalThis.String(object.accountUuid) : "",
      os: isSet(object.os) ? systemTypeFromJSON(object.os) : 0,
    };
  },

  toJSON(message: AccountData): unknown {
    const obj: any = {};
    if (message.openId !== "") {
      obj.openId = message.openId;
    }
    if (message.sdkType !== 0) {
      obj.sdkType = Math.round(message.sdkType);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.accountUuid !== "") {
      obj.accountUuid = message.accountUuid;
    }
    if (message.os !== 0) {
      obj.os = systemTypeToJSON(message.os);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountData>, I>>(base?: I): AccountData {
    return AccountData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountData>, I>>(object: I): AccountData {
    const message = createBaseAccountData();
    message.openId = object.openId ?? "";
    message.sdkType = object.sdkType ?? 0;
    message.accountId = object.accountId ?? "";
    message.accountUuid = object.accountUuid ?? "";
    message.os = object.os ?? 0;
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
