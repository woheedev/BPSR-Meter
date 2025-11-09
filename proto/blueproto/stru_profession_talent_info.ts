/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "zproto";

export interface ProfessionTalentInfo {
  usedTalentPoints: number;
  talentNodeIds: number[];
  talentStageCfgId: number;
  talentIlegalResetCount: number;
}

function createBaseProfessionTalentInfo(): ProfessionTalentInfo {
  return { usedTalentPoints: 0, talentNodeIds: [], talentStageCfgId: 0, talentIlegalResetCount: 0 };
}

export const ProfessionTalentInfo: MessageFns<ProfessionTalentInfo> = {
  encode(message: ProfessionTalentInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.usedTalentPoints !== 0) {
      writer.uint32(8).uint32(message.usedTalentPoints);
    }
    writer.uint32(18).fork();
    for (const v of message.talentNodeIds) {
      writer.uint32(v);
    }
    writer.join();
    if (message.talentStageCfgId !== 0) {
      writer.uint32(32).int32(message.talentStageCfgId);
    }
    if (message.talentIlegalResetCount !== 0) {
      writer.uint32(40).int32(message.talentIlegalResetCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProfessionTalentInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfessionTalentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.usedTalentPoints = reader.uint32();
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.talentNodeIds.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.talentNodeIds.push(reader.uint32());
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.talentStageCfgId = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.talentIlegalResetCount = reader.int32();
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

  fromJSON(object: any): ProfessionTalentInfo {
    return {
      usedTalentPoints: isSet(object.usedTalentPoints) ? globalThis.Number(object.usedTalentPoints) : 0,
      talentNodeIds: globalThis.Array.isArray(object?.talentNodeIds)
        ? object.talentNodeIds.map((e: any) => globalThis.Number(e))
        : [],
      talentStageCfgId: isSet(object.talentStageCfgId) ? globalThis.Number(object.talentStageCfgId) : 0,
      talentIlegalResetCount: isSet(object.talentIlegalResetCount)
        ? globalThis.Number(object.talentIlegalResetCount)
        : 0,
    };
  },

  toJSON(message: ProfessionTalentInfo): unknown {
    const obj: any = {};
    if (message.usedTalentPoints !== 0) {
      obj.usedTalentPoints = Math.round(message.usedTalentPoints);
    }
    if (message.talentNodeIds?.length) {
      obj.talentNodeIds = message.talentNodeIds.map((e) => Math.round(e));
    }
    if (message.talentStageCfgId !== 0) {
      obj.talentStageCfgId = Math.round(message.talentStageCfgId);
    }
    if (message.talentIlegalResetCount !== 0) {
      obj.talentIlegalResetCount = Math.round(message.talentIlegalResetCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProfessionTalentInfo>, I>>(base?: I): ProfessionTalentInfo {
    return ProfessionTalentInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProfessionTalentInfo>, I>>(object: I): ProfessionTalentInfo {
    const message = createBaseProfessionTalentInfo();
    message.usedTalentPoints = object.usedTalentPoints ?? 0;
    message.talentNodeIds = object.talentNodeIds?.map((e) => e) || [];
    message.talentStageCfgId = object.talentStageCfgId ?? 0;
    message.talentIlegalResetCount = object.talentIlegalResetCount ?? 0;
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
