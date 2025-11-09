/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ERidePropertyType, eRidePropertyTypeFromJSON, eRidePropertyTypeToJSON } from "./enum_e_ride_property_type";
import { RideData } from "./stru_ride_data";
import { RideSkinContainer } from "./stru_ride_skin_container";

export const protobufPackage = "zproto";

export interface RideList {
  rides: { [key: number]: RideData };
  type: ERidePropertyType;
  skinData: { [key: number]: RideSkinContainer };
}

export interface RideList_RidesEntry {
  key: number;
  value: RideData | undefined;
}

export interface RideList_SkinDataEntry {
  key: number;
  value: RideSkinContainer | undefined;
}

function createBaseRideList(): RideList {
  return { rides: {}, type: 0, skinData: {} };
}

export const RideList: MessageFns<RideList> = {
  encode(message: RideList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.rides).forEach(([key, value]) => {
      RideList_RidesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    Object.entries(message.skinData).forEach(([key, value]) => {
      RideList_SkinDataEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = RideList_RidesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.rides[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = RideList_SkinDataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.skinData[entry3.key] = entry3.value;
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

  fromJSON(object: any): RideList {
    return {
      rides: isObject(object.rides)
        ? Object.entries(object.rides).reduce<{ [key: number]: RideData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = RideData.fromJSON(value);
          return acc;
        }, {})
        : {},
      type: isSet(object.type) ? eRidePropertyTypeFromJSON(object.type) : 0,
      skinData: isObject(object.skinData)
        ? Object.entries(object.skinData).reduce<{ [key: number]: RideSkinContainer }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = RideSkinContainer.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: RideList): unknown {
    const obj: any = {};
    if (message.rides) {
      const entries = Object.entries(message.rides);
      if (entries.length > 0) {
        obj.rides = {};
        entries.forEach(([k, v]) => {
          obj.rides[k] = RideData.toJSON(v);
        });
      }
    }
    if (message.type !== 0) {
      obj.type = eRidePropertyTypeToJSON(message.type);
    }
    if (message.skinData) {
      const entries = Object.entries(message.skinData);
      if (entries.length > 0) {
        obj.skinData = {};
        entries.forEach(([k, v]) => {
          obj.skinData[k] = RideSkinContainer.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideList>, I>>(base?: I): RideList {
    return RideList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideList>, I>>(object: I): RideList {
    const message = createBaseRideList();
    message.rides = Object.entries(object.rides ?? {}).reduce<{ [key: number]: RideData }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = RideData.fromPartial(value);
      }
      return acc;
    }, {});
    message.type = object.type ?? 0;
    message.skinData = Object.entries(object.skinData ?? {}).reduce<{ [key: number]: RideSkinContainer }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = RideSkinContainer.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseRideList_RidesEntry(): RideList_RidesEntry {
  return { key: 0, value: undefined };
}

export const RideList_RidesEntry: MessageFns<RideList_RidesEntry> = {
  encode(message: RideList_RidesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      RideData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideList_RidesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideList_RidesEntry();
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

          message.value = RideData.decode(reader, reader.uint32());
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

  fromJSON(object: any): RideList_RidesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? RideData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: RideList_RidesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = RideData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideList_RidesEntry>, I>>(base?: I): RideList_RidesEntry {
    return RideList_RidesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideList_RidesEntry>, I>>(object: I): RideList_RidesEntry {
    const message = createBaseRideList_RidesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? RideData.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseRideList_SkinDataEntry(): RideList_SkinDataEntry {
  return { key: 0, value: undefined };
}

export const RideList_SkinDataEntry: MessageFns<RideList_SkinDataEntry> = {
  encode(message: RideList_SkinDataEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      RideSkinContainer.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RideList_SkinDataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRideList_SkinDataEntry();
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

          message.value = RideSkinContainer.decode(reader, reader.uint32());
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

  fromJSON(object: any): RideList_SkinDataEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? RideSkinContainer.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: RideList_SkinDataEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = RideSkinContainer.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RideList_SkinDataEntry>, I>>(base?: I): RideList_SkinDataEntry {
    return RideList_SkinDataEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RideList_SkinDataEntry>, I>>(object: I): RideList_SkinDataEntry {
    const message = createBaseRideList_SkinDataEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? RideSkinContainer.fromPartial(object.value)
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
