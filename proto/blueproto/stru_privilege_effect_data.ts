/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface PrivilegeEffectData {
  normalPassId: number;
  primePassId: number;
  normalPassIdMap: { [key: number]: boolean };
  primePassIdMap: { [key: number]: boolean };
}

export interface PrivilegeEffectData_NormalPassIdMapEntry {
  key: number;
  value: boolean;
}

export interface PrivilegeEffectData_PrimePassIdMapEntry {
  key: number;
  value: boolean;
}

function createBasePrivilegeEffectData(): PrivilegeEffectData {
  return { normalPassId: 0, primePassId: 0, normalPassIdMap: {}, primePassIdMap: {} };
}

export const PrivilegeEffectData: MessageFns<PrivilegeEffectData> = {
  encode(message: PrivilegeEffectData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.normalPassId !== 0) {
      writer.uint32(8).int32(message.normalPassId);
    }
    if (message.primePassId !== 0) {
      writer.uint32(16).int32(message.primePassId);
    }
    Object.entries(message.normalPassIdMap).forEach(([key, value]) => {
      PrivilegeEffectData_NormalPassIdMapEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    Object.entries(message.primePassIdMap).forEach(([key, value]) => {
      PrivilegeEffectData_PrimePassIdMapEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PrivilegeEffectData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivilegeEffectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.normalPassId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.primePassId = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = PrivilegeEffectData_NormalPassIdMapEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.normalPassIdMap[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = PrivilegeEffectData_PrimePassIdMapEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.primePassIdMap[entry4.key] = entry4.value;
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

  fromJSON(object: any): PrivilegeEffectData {
    return {
      normalPassId: isSet(object.normalPassId) ? globalThis.Number(object.normalPassId) : 0,
      primePassId: isSet(object.primePassId) ? globalThis.Number(object.primePassId) : 0,
      normalPassIdMap: isObject(object.normalPassIdMap)
        ? Object.entries(object.normalPassIdMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      primePassIdMap: isObject(object.primePassIdMap)
        ? Object.entries(object.primePassIdMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PrivilegeEffectData): unknown {
    const obj: any = {};
    if (message.normalPassId !== 0) {
      obj.normalPassId = Math.round(message.normalPassId);
    }
    if (message.primePassId !== 0) {
      obj.primePassId = Math.round(message.primePassId);
    }
    if (message.normalPassIdMap) {
      const entries = Object.entries(message.normalPassIdMap);
      if (entries.length > 0) {
        obj.normalPassIdMap = {};
        entries.forEach(([k, v]) => {
          obj.normalPassIdMap[k] = v;
        });
      }
    }
    if (message.primePassIdMap) {
      const entries = Object.entries(message.primePassIdMap);
      if (entries.length > 0) {
        obj.primePassIdMap = {};
        entries.forEach(([k, v]) => {
          obj.primePassIdMap[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrivilegeEffectData>, I>>(base?: I): PrivilegeEffectData {
    return PrivilegeEffectData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrivilegeEffectData>, I>>(object: I): PrivilegeEffectData {
    const message = createBasePrivilegeEffectData();
    message.normalPassId = object.normalPassId ?? 0;
    message.primePassId = object.primePassId ?? 0;
    message.normalPassIdMap = Object.entries(object.normalPassIdMap ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.primePassIdMap = Object.entries(object.primePassIdMap ?? {}).reduce<{ [key: number]: boolean }>(
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

function createBasePrivilegeEffectData_NormalPassIdMapEntry(): PrivilegeEffectData_NormalPassIdMapEntry {
  return { key: 0, value: false };
}

export const PrivilegeEffectData_NormalPassIdMapEntry: MessageFns<PrivilegeEffectData_NormalPassIdMapEntry> = {
  encode(message: PrivilegeEffectData_NormalPassIdMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PrivilegeEffectData_NormalPassIdMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivilegeEffectData_NormalPassIdMapEntry();
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

  fromJSON(object: any): PrivilegeEffectData_NormalPassIdMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: PrivilegeEffectData_NormalPassIdMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrivilegeEffectData_NormalPassIdMapEntry>, I>>(
    base?: I,
  ): PrivilegeEffectData_NormalPassIdMapEntry {
    return PrivilegeEffectData_NormalPassIdMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrivilegeEffectData_NormalPassIdMapEntry>, I>>(
    object: I,
  ): PrivilegeEffectData_NormalPassIdMapEntry {
    const message = createBasePrivilegeEffectData_NormalPassIdMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBasePrivilegeEffectData_PrimePassIdMapEntry(): PrivilegeEffectData_PrimePassIdMapEntry {
  return { key: 0, value: false };
}

export const PrivilegeEffectData_PrimePassIdMapEntry: MessageFns<PrivilegeEffectData_PrimePassIdMapEntry> = {
  encode(message: PrivilegeEffectData_PrimePassIdMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PrivilegeEffectData_PrimePassIdMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivilegeEffectData_PrimePassIdMapEntry();
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

  fromJSON(object: any): PrivilegeEffectData_PrimePassIdMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: PrivilegeEffectData_PrimePassIdMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrivilegeEffectData_PrimePassIdMapEntry>, I>>(
    base?: I,
  ): PrivilegeEffectData_PrimePassIdMapEntry {
    return PrivilegeEffectData_PrimePassIdMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrivilegeEffectData_PrimePassIdMapEntry>, I>>(
    object: I,
  ): PrivilegeEffectData_PrimePassIdMapEntry {
    const message = createBasePrivilegeEffectData_PrimePassIdMapEntry();
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
