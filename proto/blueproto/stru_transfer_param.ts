/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { EUserTransferType, eUserTransferTypeFromJSON, eUserTransferTypeToJSON } from "./enum_e_user_transfer_type";
import { PositionParam } from "./stru_position_param";

export const protobufPackage = "zproto";

export interface TransferParam {
  sceneId: number;
  transferType: EUserTransferType;
  positionParam: PositionParam | undefined;
  changeFlag: Long;
  isServerSwitch: boolean;
  visualLayerConfigId: number;
  sceneGuid: string;
  connectGuid: string;
  subSceneUuid: Long;
  isRevive: boolean;
}

function createBaseTransferParam(): TransferParam {
  return {
    sceneId: 0,
    transferType: 0,
    positionParam: undefined,
    changeFlag: Long.ZERO,
    isServerSwitch: false,
    visualLayerConfigId: 0,
    sceneGuid: "",
    connectGuid: "",
    subSceneUuid: Long.ZERO,
    isRevive: false,
  };
}

export const TransferParam: MessageFns<TransferParam> = {
  encode(message: TransferParam, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sceneId !== 0) {
      writer.uint32(8).int32(message.sceneId);
    }
    if (message.transferType !== 0) {
      writer.uint32(16).int32(message.transferType);
    }
    if (message.positionParam !== undefined) {
      PositionParam.encode(message.positionParam, writer.uint32(26).fork()).join();
    }
    if (!message.changeFlag.equals(Long.ZERO)) {
      writer.uint32(32).int64(message.changeFlag.toString());
    }
    if (message.isServerSwitch !== false) {
      writer.uint32(40).bool(message.isServerSwitch);
    }
    if (message.visualLayerConfigId !== 0) {
      writer.uint32(48).int32(message.visualLayerConfigId);
    }
    if (message.sceneGuid !== "") {
      writer.uint32(58).string(message.sceneGuid);
    }
    if (message.connectGuid !== "") {
      writer.uint32(66).string(message.connectGuid);
    }
    if (!message.subSceneUuid.equals(Long.ZERO)) {
      writer.uint32(72).int64(message.subSceneUuid.toString());
    }
    if (message.isRevive !== false) {
      writer.uint32(80).bool(message.isRevive);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransferParam {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.sceneId = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.transferType = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.positionParam = PositionParam.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.changeFlag = Long.fromString(reader.int64().toString());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.isServerSwitch = reader.bool();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.visualLayerConfigId = reader.int32();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.sceneGuid = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.connectGuid = reader.string();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.subSceneUuid = Long.fromString(reader.int64().toString());
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.isRevive = reader.bool();
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

  fromJSON(object: any): TransferParam {
    return {
      sceneId: isSet(object.sceneId) ? globalThis.Number(object.sceneId) : 0,
      transferType: isSet(object.transferType) ? eUserTransferTypeFromJSON(object.transferType) : 0,
      positionParam: isSet(object.positionParam) ? PositionParam.fromJSON(object.positionParam) : undefined,
      changeFlag: isSet(object.changeFlag) ? Long.fromValue(object.changeFlag) : Long.ZERO,
      isServerSwitch: isSet(object.isServerSwitch) ? globalThis.Boolean(object.isServerSwitch) : false,
      visualLayerConfigId: isSet(object.visualLayerConfigId) ? globalThis.Number(object.visualLayerConfigId) : 0,
      sceneGuid: isSet(object.sceneGuid) ? globalThis.String(object.sceneGuid) : "",
      connectGuid: isSet(object.connectGuid) ? globalThis.String(object.connectGuid) : "",
      subSceneUuid: isSet(object.subSceneUuid) ? Long.fromValue(object.subSceneUuid) : Long.ZERO,
      isRevive: isSet(object.isRevive) ? globalThis.Boolean(object.isRevive) : false,
    };
  },

  toJSON(message: TransferParam): unknown {
    const obj: any = {};
    if (message.sceneId !== 0) {
      obj.sceneId = Math.round(message.sceneId);
    }
    if (message.transferType !== 0) {
      obj.transferType = eUserTransferTypeToJSON(message.transferType);
    }
    if (message.positionParam !== undefined) {
      obj.positionParam = PositionParam.toJSON(message.positionParam);
    }
    if (!message.changeFlag.equals(Long.ZERO)) {
      obj.changeFlag = (message.changeFlag || Long.ZERO).toString();
    }
    if (message.isServerSwitch !== false) {
      obj.isServerSwitch = message.isServerSwitch;
    }
    if (message.visualLayerConfigId !== 0) {
      obj.visualLayerConfigId = Math.round(message.visualLayerConfigId);
    }
    if (message.sceneGuid !== "") {
      obj.sceneGuid = message.sceneGuid;
    }
    if (message.connectGuid !== "") {
      obj.connectGuid = message.connectGuid;
    }
    if (!message.subSceneUuid.equals(Long.ZERO)) {
      obj.subSceneUuid = (message.subSceneUuid || Long.ZERO).toString();
    }
    if (message.isRevive !== false) {
      obj.isRevive = message.isRevive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransferParam>, I>>(base?: I): TransferParam {
    return TransferParam.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransferParam>, I>>(object: I): TransferParam {
    const message = createBaseTransferParam();
    message.sceneId = object.sceneId ?? 0;
    message.transferType = object.transferType ?? 0;
    message.positionParam = (object.positionParam !== undefined && object.positionParam !== null)
      ? PositionParam.fromPartial(object.positionParam)
      : undefined;
    message.changeFlag = (object.changeFlag !== undefined && object.changeFlag !== null)
      ? Long.fromValue(object.changeFlag)
      : Long.ZERO;
    message.isServerSwitch = object.isServerSwitch ?? false;
    message.visualLayerConfigId = object.visualLayerConfigId ?? 0;
    message.sceneGuid = object.sceneGuid ?? "";
    message.connectGuid = object.connectGuid ?? "";
    message.subSceneUuid = (object.subSceneUuid !== undefined && object.subSceneUuid !== null)
      ? Long.fromValue(object.subSceneUuid)
      : Long.ZERO;
    message.isRevive = object.isRevive ?? false;
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
