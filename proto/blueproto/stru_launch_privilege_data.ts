/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { LaunchPlatform, launchPlatformFromJSON, launchPlatformToJSON } from "./enum_launch_platform";

export const protobufPackage = "zproto";

export interface LaunchPrivilegeData {
  launchPlatform: LaunchPlatform;
  isPrivilege: boolean;
  bakLaunchPlatform: LaunchPlatform;
  bakPrivilege: boolean;
}

function createBaseLaunchPrivilegeData(): LaunchPrivilegeData {
  return { launchPlatform: 0, isPrivilege: false, bakLaunchPlatform: 0, bakPrivilege: false };
}

export const LaunchPrivilegeData: MessageFns<LaunchPrivilegeData> = {
  encode(message: LaunchPrivilegeData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.launchPlatform !== 0) {
      writer.uint32(8).int32(message.launchPlatform);
    }
    if (message.isPrivilege !== false) {
      writer.uint32(16).bool(message.isPrivilege);
    }
    if (message.bakLaunchPlatform !== 0) {
      writer.uint32(24).int32(message.bakLaunchPlatform);
    }
    if (message.bakPrivilege !== false) {
      writer.uint32(32).bool(message.bakPrivilege);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LaunchPrivilegeData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLaunchPrivilegeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.launchPlatform = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.isPrivilege = reader.bool();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.bakLaunchPlatform = reader.int32() as any;
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.bakPrivilege = reader.bool();
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

  fromJSON(object: any): LaunchPrivilegeData {
    return {
      launchPlatform: isSet(object.launchPlatform) ? launchPlatformFromJSON(object.launchPlatform) : 0,
      isPrivilege: isSet(object.isPrivilege) ? globalThis.Boolean(object.isPrivilege) : false,
      bakLaunchPlatform: isSet(object.bakLaunchPlatform) ? launchPlatformFromJSON(object.bakLaunchPlatform) : 0,
      bakPrivilege: isSet(object.bakPrivilege) ? globalThis.Boolean(object.bakPrivilege) : false,
    };
  },

  toJSON(message: LaunchPrivilegeData): unknown {
    const obj: any = {};
    if (message.launchPlatform !== 0) {
      obj.launchPlatform = launchPlatformToJSON(message.launchPlatform);
    }
    if (message.isPrivilege !== false) {
      obj.isPrivilege = message.isPrivilege;
    }
    if (message.bakLaunchPlatform !== 0) {
      obj.bakLaunchPlatform = launchPlatformToJSON(message.bakLaunchPlatform);
    }
    if (message.bakPrivilege !== false) {
      obj.bakPrivilege = message.bakPrivilege;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LaunchPrivilegeData>, I>>(base?: I): LaunchPrivilegeData {
    return LaunchPrivilegeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LaunchPrivilegeData>, I>>(object: I): LaunchPrivilegeData {
    const message = createBaseLaunchPrivilegeData();
    message.launchPlatform = object.launchPlatform ?? 0;
    message.isPrivilege = object.isPrivilege ?? false;
    message.bakLaunchPlatform = object.bakLaunchPlatform ?? 0;
    message.bakPrivilege = object.bakPrivilege ?? false;
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
