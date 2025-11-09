/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface MailClaimedInfo {
  attachmentMailList: Long[];
  claimedMails: Map<Long, Long>;
}

export interface MailClaimedInfo_ClaimedMailsEntry {
  key: Long;
  value: Long;
}

function createBaseMailClaimedInfo(): MailClaimedInfo {
  return { attachmentMailList: [], claimedMails: new Map() };
}

export const MailClaimedInfo: MessageFns<MailClaimedInfo> = {
  encode(message: MailClaimedInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.attachmentMailList) {
      writer.int64(v.toString());
    }
    writer.join();
    message.claimedMails.forEach((value, key) => {
      MailClaimedInfo_ClaimedMailsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MailClaimedInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailClaimedInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.attachmentMailList.push(Long.fromString(reader.int64().toString()));

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.attachmentMailList.push(Long.fromString(reader.int64().toString()));
            }

            continue;
          }

          break;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = MailClaimedInfo_ClaimedMailsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.claimedMails.set(entry2.key, entry2.value);
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

  fromJSON(object: any): MailClaimedInfo {
    return {
      attachmentMailList: globalThis.Array.isArray(object?.attachmentMailList)
        ? object.attachmentMailList.map((e: any) => Long.fromValue(e))
        : [],
      claimedMails: isObject(object.claimedMails)
        ? Object.entries(object.claimedMails).reduce<Map<Long, Long>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Long.fromValue(value as Long | string));
          return acc;
        }, new Map())
        : new Map(),
    };
  },

  toJSON(message: MailClaimedInfo): unknown {
    const obj: any = {};
    if (message.attachmentMailList?.length) {
      obj.attachmentMailList = message.attachmentMailList.map((e) => (e || Long.ZERO).toString());
    }
    if (message.claimedMails?.size) {
      obj.claimedMails = {};
      message.claimedMails.forEach((v, k) => {
        obj.claimedMails[longToNumber(k)] = v.toString();
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MailClaimedInfo>, I>>(base?: I): MailClaimedInfo {
    return MailClaimedInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MailClaimedInfo>, I>>(object: I): MailClaimedInfo {
    const message = createBaseMailClaimedInfo();
    message.attachmentMailList = object.attachmentMailList?.map((e) => Long.fromValue(e)) || [];
    message.claimedMails = (() => {
      const m = new Map();
      (object.claimedMails as Map<Long, Long> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Long.fromValue(value));
        }
      });
      return m;
    })();
    return message;
  },
};

function createBaseMailClaimedInfo_ClaimedMailsEntry(): MailClaimedInfo_ClaimedMailsEntry {
  return { key: Long.ZERO, value: Long.ZERO };
}

export const MailClaimedInfo_ClaimedMailsEntry: MessageFns<MailClaimedInfo_ClaimedMailsEntry> = {
  encode(message: MailClaimedInfo_ClaimedMailsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.key.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.key.toString());
    }
    if (!message.value.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.value.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MailClaimedInfo_ClaimedMailsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailClaimedInfo_ClaimedMailsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = Long.fromString(reader.int64().toString());
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

  fromJSON(object: any): MailClaimedInfo_ClaimedMailsEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
    };
  },

  toJSON(message: MailClaimedInfo_ClaimedMailsEntry): unknown {
    const obj: any = {};
    if (!message.key.equals(Long.ZERO)) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (!message.value.equals(Long.ZERO)) {
      obj.value = (message.value || Long.ZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MailClaimedInfo_ClaimedMailsEntry>, I>>(
    base?: I,
  ): MailClaimedInfo_ClaimedMailsEntry {
    return MailClaimedInfo_ClaimedMailsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MailClaimedInfo_ClaimedMailsEntry>, I>>(
    object: I,
  ): MailClaimedInfo_ClaimedMailsEntry {
    const message = createBaseMailClaimedInfo_ClaimedMailsEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
