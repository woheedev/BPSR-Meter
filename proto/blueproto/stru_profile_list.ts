/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ProfileList {
  unlockProfileList: { [key: number]: boolean };
}

export interface ProfileList_UnlockProfileListEntry {
  key: number;
  value: boolean;
}

function createBaseProfileList(): ProfileList {
  return { unlockProfileList: {} };
}

export const ProfileList: MessageFns<ProfileList> = {
  encode(message: ProfileList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.unlockProfileList).forEach(([key, value]) => {
      ProfileList_UnlockProfileListEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfileList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = ProfileList_UnlockProfileListEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.unlockProfileList[entry1.key] = entry1.value;
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

  fromJSON(object: any): ProfileList {
    return {
      unlockProfileList: isObject(object.unlockProfileList)
        ? Object.entries(object.unlockProfileList).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProfileList): unknown {
    const obj: any = {};
    if (message.unlockProfileList) {
      const entries = Object.entries(message.unlockProfileList);
      if (entries.length > 0) {
        obj.unlockProfileList = {};
        entries.forEach(([k, v]) => {
          obj.unlockProfileList[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileList>, I>>(base?: I): ProfileList {
    return ProfileList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileList>, I>>(object: I): ProfileList {
    const message = createBaseProfileList();
    message.unlockProfileList = Object.entries(object.unlockProfileList ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseProfileList_UnlockProfileListEntry(): ProfileList_UnlockProfileListEntry {
  return { key: 0, value: false };
}

export const ProfileList_UnlockProfileListEntry: MessageFns<ProfileList_UnlockProfileListEntry> = {
  encode(message: ProfileList_UnlockProfileListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfileList_UnlockProfileListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileList_UnlockProfileListEntry();
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

          message.value = reader.bool();
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

  fromJSON(object: any): ProfileList_UnlockProfileListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: ProfileList_UnlockProfileListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfileList_UnlockProfileListEntry>, I>>(
    base?: I,
  ): ProfileList_UnlockProfileListEntry {
    return ProfileList_UnlockProfileListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfileList_UnlockProfileListEntry>, I>>(
    object: I,
  ): ProfileList_UnlockProfileListEntry {
    const message = createBaseProfileList_UnlockProfileListEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
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
