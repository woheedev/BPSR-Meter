/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface SettingData {
  settingMap: { [key: number]: string };
}

export interface SettingData_SettingMapEntry {
  key: number;
  value: string;
}

function createBaseSettingData(): SettingData {
  return { settingMap: {} };
}

export const SettingData: MessageFns<SettingData> = {
  encode(message: SettingData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.settingMap).forEach(([key, value]) => {
      SettingData_SettingMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SettingData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettingData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = SettingData_SettingMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.settingMap[entry1.key] = entry1.value;
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

  fromJSON(object: any): SettingData {
    return {
      settingMap: isObject(object.settingMap)
        ? Object.entries(object.settingMap).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SettingData): unknown {
    const obj: any = {};
    if (message.settingMap) {
      const entries = Object.entries(message.settingMap);
      if (entries.length > 0) {
        obj.settingMap = {};
        entries.forEach(([k, v]) => {
          obj.settingMap[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SettingData>, I>>(base?: I): SettingData {
    return SettingData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SettingData>, I>>(object: I): SettingData {
    const message = createBaseSettingData();
    message.settingMap = Object.entries(object.settingMap ?? {}).reduce<{ [key: number]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSettingData_SettingMapEntry(): SettingData_SettingMapEntry {
  return { key: 0, value: "" };
}

export const SettingData_SettingMapEntry: MessageFns<SettingData_SettingMapEntry> = {
  encode(message: SettingData_SettingMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SettingData_SettingMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettingData_SettingMapEntry();
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

          message.value = reader.string();
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

  fromJSON(object: any): SettingData_SettingMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: SettingData_SettingMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SettingData_SettingMapEntry>, I>>(base?: I): SettingData_SettingMapEntry {
    return SettingData_SettingMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SettingData_SettingMapEntry>, I>>(object: I): SettingData_SettingMapEntry {
    const message = createBaseSettingData_SettingMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
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
