/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { CommunityHomelandRecipe } from "./stru_community_homeland_recipe";

export const protobufPackage = "zproto";

export interface CommunityHomeData {
  communityId: Long;
  homelandId: Long;
  buyCount: number;
  unlockedRecipes: { [key: number]: CommunityHomelandRecipe };
  level: number;
}

export interface CommunityHomeData_UnlockedRecipesEntry {
  key: number;
  value: CommunityHomelandRecipe | undefined;
}

function createBaseCommunityHomeData(): CommunityHomeData {
  return { communityId: Long.ZERO, homelandId: Long.ZERO, buyCount: 0, unlockedRecipes: {}, level: 0 };
}

export const CommunityHomeData: MessageFns<CommunityHomeData> = {
  encode(message: CommunityHomeData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.communityId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.communityId.toString());
    }
    if (!message.homelandId.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.homelandId.toString());
    }
    if (message.buyCount !== 0) {
      writer.uint32(24).int32(message.buyCount);
    }
    Object.entries(message.unlockedRecipes).forEach(([key, value]) => {
      CommunityHomeData_UnlockedRecipesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    if (message.level !== 0) {
      writer.uint32(40).int32(message.level);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CommunityHomeData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityHomeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.communityId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.homelandId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.buyCount = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = CommunityHomeData_UnlockedRecipesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.unlockedRecipes[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.level = reader.int32();
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

  fromJSON(object: any): CommunityHomeData {
    return {
      communityId: isSet(object.communityId) ? Long.fromValue(object.communityId) : Long.ZERO,
      homelandId: isSet(object.homelandId) ? Long.fromValue(object.homelandId) : Long.ZERO,
      buyCount: isSet(object.buyCount) ? globalThis.Number(object.buyCount) : 0,
      unlockedRecipes: isObject(object.unlockedRecipes)
        ? Object.entries(object.unlockedRecipes).reduce<{ [key: number]: CommunityHomelandRecipe }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = CommunityHomelandRecipe.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
    };
  },

  toJSON(message: CommunityHomeData): unknown {
    const obj: any = {};
    if (!message.communityId.equals(Long.ZERO)) {
      obj.communityId = (message.communityId || Long.ZERO).toString();
    }
    if (!message.homelandId.equals(Long.ZERO)) {
      obj.homelandId = (message.homelandId || Long.ZERO).toString();
    }
    if (message.buyCount !== 0) {
      obj.buyCount = Math.round(message.buyCount);
    }
    if (message.unlockedRecipes) {
      const entries = Object.entries(message.unlockedRecipes);
      if (entries.length > 0) {
        obj.unlockedRecipes = {};
        entries.forEach(([k, v]) => {
          obj.unlockedRecipes[k] = CommunityHomelandRecipe.toJSON(v);
        });
      }
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunityHomeData>, I>>(base?: I): CommunityHomeData {
    return CommunityHomeData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommunityHomeData>, I>>(object: I): CommunityHomeData {
    const message = createBaseCommunityHomeData();
    message.communityId = (object.communityId !== undefined && object.communityId !== null)
      ? Long.fromValue(object.communityId)
      : Long.ZERO;
    message.homelandId = (object.homelandId !== undefined && object.homelandId !== null)
      ? Long.fromValue(object.homelandId)
      : Long.ZERO;
    message.buyCount = object.buyCount ?? 0;
    message.unlockedRecipes = Object.entries(object.unlockedRecipes ?? {}).reduce<
      { [key: number]: CommunityHomelandRecipe }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = CommunityHomelandRecipe.fromPartial(value);
      }
      return acc;
    }, {});
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseCommunityHomeData_UnlockedRecipesEntry(): CommunityHomeData_UnlockedRecipesEntry {
  return { key: 0, value: undefined };
}

export const CommunityHomeData_UnlockedRecipesEntry: MessageFns<CommunityHomeData_UnlockedRecipesEntry> = {
  encode(message: CommunityHomeData_UnlockedRecipesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      CommunityHomelandRecipe.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CommunityHomeData_UnlockedRecipesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityHomeData_UnlockedRecipesEntry();
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

          message.value = CommunityHomelandRecipe.decode(reader, reader.uint32());
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

  fromJSON(object: any): CommunityHomeData_UnlockedRecipesEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? CommunityHomelandRecipe.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CommunityHomeData_UnlockedRecipesEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = CommunityHomelandRecipe.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CommunityHomeData_UnlockedRecipesEntry>, I>>(
    base?: I,
  ): CommunityHomeData_UnlockedRecipesEntry {
    return CommunityHomeData_UnlockedRecipesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CommunityHomeData_UnlockedRecipesEntry>, I>>(
    object: I,
  ): CommunityHomeData_UnlockedRecipesEntry {
    const message = createBaseCommunityHomeData_UnlockedRecipesEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? CommunityHomelandRecipe.fromPartial(object.value)
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
