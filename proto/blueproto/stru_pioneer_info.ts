/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EErrorCode, eErrorCodeFromJSON, eErrorCodeToJSON } from "./enum_e_error_code";

export const protobufPackage = "zproto";

export interface PioneerInfo {
  currentTotal: number;
  targets: { [key: number]: number };
  awards: { [key: number]: boolean };
  enteredZones: { [key: number]: boolean };
  id: number;
  errCode: EErrorCode;
}

export interface PioneerInfo_TargetsEntry {
  key: number;
  value: number;
}

export interface PioneerInfo_AwardsEntry {
  key: number;
  value: boolean;
}

export interface PioneerInfo_EnteredZonesEntry {
  key: number;
  value: boolean;
}

function createBasePioneerInfo(): PioneerInfo {
  return { currentTotal: 0, targets: {}, awards: {}, enteredZones: {}, id: 0, errCode: 0 };
}

export const PioneerInfo: MessageFns<PioneerInfo> = {
  encode(message: PioneerInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.currentTotal !== 0) {
      writer.uint32(8).uint32(message.currentTotal);
    }
    Object.entries(message.targets).forEach(([key, value]) => {
      PioneerInfo_TargetsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.awards).forEach(([key, value]) => {
      PioneerInfo_AwardsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    Object.entries(message.enteredZones).forEach(([key, value]) => {
      PioneerInfo_EnteredZonesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    if (message.id !== 0) {
      writer.uint32(40).uint32(message.id);
    }
    if (message.errCode !== 0) {
      writer.uint32(48).int32(message.errCode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PioneerInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePioneerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.currentTotal = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = PioneerInfo_TargetsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.targets[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = PioneerInfo_AwardsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.awards[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = PioneerInfo_EnteredZonesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.enteredZones[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.id = reader.uint32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.errCode = reader.int32() as any;
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

  fromJSON(object: any): PioneerInfo {
    return {
      currentTotal: isSet(object.currentTotal) ? globalThis.Number(object.currentTotal) : 0,
      targets: isObject(object.targets)
        ? Object.entries(object.targets).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      awards: isObject(object.awards)
        ? Object.entries(object.awards).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      enteredZones: isObject(object.enteredZones)
        ? Object.entries(object.enteredZones).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      errCode: isSet(object.errCode) ? eErrorCodeFromJSON(object.errCode) : 0,
    };
  },

  toJSON(message: PioneerInfo): unknown {
    const obj: any = {};
    if (message.currentTotal !== 0) {
      obj.currentTotal = Math.round(message.currentTotal);
    }
    if (message.targets) {
      const entries = Object.entries(message.targets);
      if (entries.length > 0) {
        obj.targets = {};
        entries.forEach(([k, v]) => {
          obj.targets[k] = Math.round(v);
        });
      }
    }
    if (message.awards) {
      const entries = Object.entries(message.awards);
      if (entries.length > 0) {
        obj.awards = {};
        entries.forEach(([k, v]) => {
          obj.awards[k] = v;
        });
      }
    }
    if (message.enteredZones) {
      const entries = Object.entries(message.enteredZones);
      if (entries.length > 0) {
        obj.enteredZones = {};
        entries.forEach(([k, v]) => {
          obj.enteredZones[k] = v;
        });
      }
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.errCode !== 0) {
      obj.errCode = eErrorCodeToJSON(message.errCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PioneerInfo>, I>>(base?: I): PioneerInfo {
    return PioneerInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PioneerInfo>, I>>(object: I): PioneerInfo {
    const message = createBasePioneerInfo();
    message.currentTotal = object.currentTotal ?? 0;
    message.targets = Object.entries(object.targets ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.awards = Object.entries(object.awards ?? {}).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Boolean(value);
      }
      return acc;
    }, {});
    message.enteredZones = Object.entries(object.enteredZones ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.id = object.id ?? 0;
    message.errCode = object.errCode ?? 0;
    return message;
  },
};

function createBasePioneerInfo_TargetsEntry(): PioneerInfo_TargetsEntry {
  return { key: 0, value: 0 };
}

export const PioneerInfo_TargetsEntry: MessageFns<PioneerInfo_TargetsEntry> = {
  encode(message: PioneerInfo_TargetsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PioneerInfo_TargetsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePioneerInfo_TargetsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): PioneerInfo_TargetsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: PioneerInfo_TargetsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PioneerInfo_TargetsEntry>, I>>(base?: I): PioneerInfo_TargetsEntry {
    return PioneerInfo_TargetsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PioneerInfo_TargetsEntry>, I>>(object: I): PioneerInfo_TargetsEntry {
    const message = createBasePioneerInfo_TargetsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePioneerInfo_AwardsEntry(): PioneerInfo_AwardsEntry {
  return { key: 0, value: false };
}

export const PioneerInfo_AwardsEntry: MessageFns<PioneerInfo_AwardsEntry> = {
  encode(message: PioneerInfo_AwardsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PioneerInfo_AwardsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePioneerInfo_AwardsEntry();
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

  fromJSON(object: any): PioneerInfo_AwardsEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: PioneerInfo_AwardsEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PioneerInfo_AwardsEntry>, I>>(base?: I): PioneerInfo_AwardsEntry {
    return PioneerInfo_AwardsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PioneerInfo_AwardsEntry>, I>>(object: I): PioneerInfo_AwardsEntry {
    const message = createBasePioneerInfo_AwardsEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBasePioneerInfo_EnteredZonesEntry(): PioneerInfo_EnteredZonesEntry {
  return { key: 0, value: false };
}

export const PioneerInfo_EnteredZonesEntry: MessageFns<PioneerInfo_EnteredZonesEntry> = {
  encode(message: PioneerInfo_EnteredZonesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PioneerInfo_EnteredZonesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePioneerInfo_EnteredZonesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
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

  fromJSON(object: any): PioneerInfo_EnteredZonesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: PioneerInfo_EnteredZonesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PioneerInfo_EnteredZonesEntry>, I>>(base?: I): PioneerInfo_EnteredZonesEntry {
    return PioneerInfo_EnteredZonesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PioneerInfo_EnteredZonesEntry>, I>>(
    object: I,
  ): PioneerInfo_EnteredZonesEntry {
    const message = createBasePioneerInfo_EnteredZonesEntry();
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
