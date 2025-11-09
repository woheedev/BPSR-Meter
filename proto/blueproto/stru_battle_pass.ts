/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BattlePassAwardInfo } from "./stru_battle_pass_award_info";

export const protobufPackage = "zproto";

export interface BattlePass {
  id: number;
  level: number;
  curexp: number;
  weekExp: number;
  expLastTime: number;
  isUnlock: boolean;
  buyNormalPas: boolean;
  buyPrimePass: boolean;
  award: { [key: number]: BattlePassAwardInfo };
  isValid: boolean;
  isSendedMail: boolean;
}

export interface BattlePass_AwardEntry {
  key: number;
  value: BattlePassAwardInfo | undefined;
}

function createBaseBattlePass(): BattlePass {
  return {
    id: 0,
    level: 0,
    curexp: 0,
    weekExp: 0,
    expLastTime: 0,
    isUnlock: false,
    buyNormalPas: false,
    buyPrimePass: false,
    award: {},
    isValid: false,
    isSendedMail: false,
  };
}

export const BattlePass: MessageFns<BattlePass> = {
  encode(message: BattlePass, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.level !== 0) {
      writer.uint32(16).int32(message.level);
    }
    if (message.curexp !== 0) {
      writer.uint32(24).int32(message.curexp);
    }
    if (message.weekExp !== 0) {
      writer.uint32(32).int32(message.weekExp);
    }
    if (message.expLastTime !== 0) {
      writer.uint32(40).int32(message.expLastTime);
    }
    if (message.isUnlock !== false) {
      writer.uint32(48).bool(message.isUnlock);
    }
    if (message.buyNormalPas !== false) {
      writer.uint32(56).bool(message.buyNormalPas);
    }
    if (message.buyPrimePass !== false) {
      writer.uint32(64).bool(message.buyPrimePass);
    }
    Object.entries(message.award).forEach(([key, value]) => {
      BattlePass_AwardEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).join();
    });
    if (message.isValid !== false) {
      writer.uint32(80).bool(message.isValid);
    }
    if (message.isSendedMail !== false) {
      writer.uint32(88).bool(message.isSendedMail);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BattlePass {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBattlePass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.level = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.curexp = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.weekExp = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.expLastTime = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.isUnlock = reader.bool();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.buyNormalPas = reader.bool();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.buyPrimePass = reader.bool();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          const entry9 = BattlePass_AwardEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.award[entry9.key] = entry9.value;
          }
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.isValid = reader.bool();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.isSendedMail = reader.bool();
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

  fromJSON(object: any): BattlePass {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
      curexp: isSet(object.curexp) ? globalThis.Number(object.curexp) : 0,
      weekExp: isSet(object.weekExp) ? globalThis.Number(object.weekExp) : 0,
      expLastTime: isSet(object.expLastTime) ? globalThis.Number(object.expLastTime) : 0,
      isUnlock: isSet(object.isUnlock) ? globalThis.Boolean(object.isUnlock) : false,
      buyNormalPas: isSet(object.buyNormalPas) ? globalThis.Boolean(object.buyNormalPas) : false,
      buyPrimePass: isSet(object.buyPrimePass) ? globalThis.Boolean(object.buyPrimePass) : false,
      award: isObject(object.award)
        ? Object.entries(object.award).reduce<{ [key: number]: BattlePassAwardInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = BattlePassAwardInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      isValid: isSet(object.isValid) ? globalThis.Boolean(object.isValid) : false,
      isSendedMail: isSet(object.isSendedMail) ? globalThis.Boolean(object.isSendedMail) : false,
    };
  },

  toJSON(message: BattlePass): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.level !== 0) {
      obj.level = Math.round(message.level);
    }
    if (message.curexp !== 0) {
      obj.curexp = Math.round(message.curexp);
    }
    if (message.weekExp !== 0) {
      obj.weekExp = Math.round(message.weekExp);
    }
    if (message.expLastTime !== 0) {
      obj.expLastTime = Math.round(message.expLastTime);
    }
    if (message.isUnlock !== false) {
      obj.isUnlock = message.isUnlock;
    }
    if (message.buyNormalPas !== false) {
      obj.buyNormalPas = message.buyNormalPas;
    }
    if (message.buyPrimePass !== false) {
      obj.buyPrimePass = message.buyPrimePass;
    }
    if (message.award) {
      const entries = Object.entries(message.award);
      if (entries.length > 0) {
        obj.award = {};
        entries.forEach(([k, v]) => {
          obj.award[k] = BattlePassAwardInfo.toJSON(v);
        });
      }
    }
    if (message.isValid !== false) {
      obj.isValid = message.isValid;
    }
    if (message.isSendedMail !== false) {
      obj.isSendedMail = message.isSendedMail;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BattlePass>, I>>(base?: I): BattlePass {
    return BattlePass.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BattlePass>, I>>(object: I): BattlePass {
    const message = createBaseBattlePass();
    message.id = object.id ?? 0;
    message.level = object.level ?? 0;
    message.curexp = object.curexp ?? 0;
    message.weekExp = object.weekExp ?? 0;
    message.expLastTime = object.expLastTime ?? 0;
    message.isUnlock = object.isUnlock ?? false;
    message.buyNormalPas = object.buyNormalPas ?? false;
    message.buyPrimePass = object.buyPrimePass ?? false;
    message.award = Object.entries(object.award ?? {}).reduce<{ [key: number]: BattlePassAwardInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = BattlePassAwardInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.isValid = object.isValid ?? false;
    message.isSendedMail = object.isSendedMail ?? false;
    return message;
  },
};

function createBaseBattlePass_AwardEntry(): BattlePass_AwardEntry {
  return { key: 0, value: undefined };
}

export const BattlePass_AwardEntry: MessageFns<BattlePass_AwardEntry> = {
  encode(message: BattlePass_AwardEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      BattlePassAwardInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BattlePass_AwardEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBattlePass_AwardEntry();
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

          message.value = BattlePassAwardInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): BattlePass_AwardEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? BattlePassAwardInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: BattlePass_AwardEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = BattlePassAwardInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BattlePass_AwardEntry>, I>>(base?: I): BattlePass_AwardEntry {
    return BattlePass_AwardEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BattlePass_AwardEntry>, I>>(object: I): BattlePass_AwardEntry {
    const message = createBaseBattlePass_AwardEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? BattlePassAwardInfo.fromPartial(object.value)
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
