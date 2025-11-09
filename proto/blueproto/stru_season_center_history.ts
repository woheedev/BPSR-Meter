/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { BattlePass } from "./stru_battle_pass";
import { SeasonBpQuestList } from "./stru_season_bp_quest_list";

export const protobufPackage = "zproto";

export interface SeasonCenterHistory {
  battlePass: BattlePass | undefined;
  bpQuestList: SeasonBpQuestList | undefined;
}

function createBaseSeasonCenterHistory(): SeasonCenterHistory {
  return { battlePass: undefined, bpQuestList: undefined };
}

export const SeasonCenterHistory: MessageFns<SeasonCenterHistory> = {
  encode(message: SeasonCenterHistory, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.battlePass !== undefined) {
      BattlePass.encode(message.battlePass, writer.uint32(10).fork()).join();
    }
    if (message.bpQuestList !== undefined) {
      SeasonBpQuestList.encode(message.bpQuestList, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SeasonCenterHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeasonCenterHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.battlePass = BattlePass.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.bpQuestList = SeasonBpQuestList.decode(reader, reader.uint32());
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

  fromJSON(object: any): SeasonCenterHistory {
    return {
      battlePass: isSet(object.battlePass) ? BattlePass.fromJSON(object.battlePass) : undefined,
      bpQuestList: isSet(object.bpQuestList) ? SeasonBpQuestList.fromJSON(object.bpQuestList) : undefined,
    };
  },

  toJSON(message: SeasonCenterHistory): unknown {
    const obj: any = {};
    if (message.battlePass !== undefined) {
      obj.battlePass = BattlePass.toJSON(message.battlePass);
    }
    if (message.bpQuestList !== undefined) {
      obj.bpQuestList = SeasonBpQuestList.toJSON(message.bpQuestList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeasonCenterHistory>, I>>(base?: I): SeasonCenterHistory {
    return SeasonCenterHistory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeasonCenterHistory>, I>>(object: I): SeasonCenterHistory {
    const message = createBaseSeasonCenterHistory();
    message.battlePass = (object.battlePass !== undefined && object.battlePass !== null)
      ? BattlePass.fromPartial(object.battlePass)
      : undefined;
    message.bpQuestList = (object.bpQuestList !== undefined && object.bpQuestList !== null)
      ? SeasonBpQuestList.fromPartial(object.bpQuestList)
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
