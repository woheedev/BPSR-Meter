/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { TrialRoadRoomTargetAward } from "./stru_trial_road_room_target_award";
import { TrialRoadTargetAward } from "./stru_trial_road_target_award";

export const protobufPackage = "zproto";

export interface TrialRoad {
  passRoom: number[];
  roomTargetAward: { [key: number]: TrialRoadRoomTargetAward };
  targetAward: TrialRoadTargetAward | undefined;
}

export interface TrialRoad_RoomTargetAwardEntry {
  key: number;
  value: TrialRoadRoomTargetAward | undefined;
}

function createBaseTrialRoad(): TrialRoad {
  return { passRoom: [], roomTargetAward: {}, targetAward: undefined };
}

export const TrialRoad: MessageFns<TrialRoad> = {
  encode(message: TrialRoad, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.passRoom) {
      writer.int32(v);
    }
    writer.join();
    Object.entries(message.roomTargetAward).forEach(([key, value]) => {
      TrialRoad_RoomTargetAwardEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.targetAward !== undefined) {
      TrialRoadTargetAward.encode(message.targetAward, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrialRoad {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrialRoad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag === 8) {
            message.passRoom.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.passRoom.push(reader.int32());
            }

            continue;
          }

          break;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = TrialRoad_RoomTargetAwardEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.roomTargetAward[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.targetAward = TrialRoadTargetAward.decode(reader, reader.uint32());
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

  fromJSON(object: any): TrialRoad {
    return {
      passRoom: globalThis.Array.isArray(object?.passRoom) ? object.passRoom.map((e: any) => globalThis.Number(e)) : [],
      roomTargetAward: isObject(object.roomTargetAward)
        ? Object.entries(object.roomTargetAward).reduce<{ [key: number]: TrialRoadRoomTargetAward }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = TrialRoadRoomTargetAward.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      targetAward: isSet(object.targetAward) ? TrialRoadTargetAward.fromJSON(object.targetAward) : undefined,
    };
  },

  toJSON(message: TrialRoad): unknown {
    const obj: any = {};
    if (message.passRoom?.length) {
      obj.passRoom = message.passRoom.map((e) => Math.round(e));
    }
    if (message.roomTargetAward) {
      const entries = Object.entries(message.roomTargetAward);
      if (entries.length > 0) {
        obj.roomTargetAward = {};
        entries.forEach(([k, v]) => {
          obj.roomTargetAward[k] = TrialRoadRoomTargetAward.toJSON(v);
        });
      }
    }
    if (message.targetAward !== undefined) {
      obj.targetAward = TrialRoadTargetAward.toJSON(message.targetAward);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TrialRoad>, I>>(base?: I): TrialRoad {
    return TrialRoad.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrialRoad>, I>>(object: I): TrialRoad {
    const message = createBaseTrialRoad();
    message.passRoom = object.passRoom?.map((e) => e) || [];
    message.roomTargetAward = Object.entries(object.roomTargetAward ?? {}).reduce<
      { [key: number]: TrialRoadRoomTargetAward }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = TrialRoadRoomTargetAward.fromPartial(value);
      }
      return acc;
    }, {});
    message.targetAward = (object.targetAward !== undefined && object.targetAward !== null)
      ? TrialRoadTargetAward.fromPartial(object.targetAward)
      : undefined;
    return message;
  },
};

function createBaseTrialRoad_RoomTargetAwardEntry(): TrialRoad_RoomTargetAwardEntry {
  return { key: 0, value: undefined };
}

export const TrialRoad_RoomTargetAwardEntry: MessageFns<TrialRoad_RoomTargetAwardEntry> = {
  encode(message: TrialRoad_RoomTargetAwardEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      TrialRoadRoomTargetAward.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrialRoad_RoomTargetAwardEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrialRoad_RoomTargetAwardEntry();
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

          message.value = TrialRoadRoomTargetAward.decode(reader, reader.uint32());
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

  fromJSON(object: any): TrialRoad_RoomTargetAwardEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? TrialRoadRoomTargetAward.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TrialRoad_RoomTargetAwardEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = TrialRoadRoomTargetAward.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TrialRoad_RoomTargetAwardEntry>, I>>(base?: I): TrialRoad_RoomTargetAwardEntry {
    return TrialRoad_RoomTargetAwardEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrialRoad_RoomTargetAwardEntry>, I>>(
    object: I,
  ): TrialRoad_RoomTargetAwardEntry {
    const message = createBaseTrialRoad_RoomTargetAwardEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? TrialRoadRoomTargetAward.fromPartial(object.value)
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
