/* eslint-disable */

export const protobufPackage = "zproto";

export enum EUserTransferType {
  EUserTransferTypeDefault = 0,
  EUserTransferTypeScenePosition = 1,
  EUserTransferTypeScenePosId = 2,
  EUserTransferTypePivot = 3,
  EUserTransferTypeCutScene = 4,
  EUserTransferTypeNear = 5,
  UNRECOGNIZED = -1,
}

export function eUserTransferTypeFromJSON(object: any): EUserTransferType {
  switch (object) {
    case 0:
    case "EUserTransferTypeDefault":
      return EUserTransferType.EUserTransferTypeDefault;
    case 1:
    case "EUserTransferTypeScenePosition":
      return EUserTransferType.EUserTransferTypeScenePosition;
    case 2:
    case "EUserTransferTypeScenePosId":
      return EUserTransferType.EUserTransferTypeScenePosId;
    case 3:
    case "EUserTransferTypePivot":
      return EUserTransferType.EUserTransferTypePivot;
    case 4:
    case "EUserTransferTypeCutScene":
      return EUserTransferType.EUserTransferTypeCutScene;
    case 5:
    case "EUserTransferTypeNear":
      return EUserTransferType.EUserTransferTypeNear;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EUserTransferType.UNRECOGNIZED;
  }
}

export function eUserTransferTypeToJSON(object: EUserTransferType): string {
  switch (object) {
    case EUserTransferType.EUserTransferTypeDefault:
      return "EUserTransferTypeDefault";
    case EUserTransferType.EUserTransferTypeScenePosition:
      return "EUserTransferTypeScenePosition";
    case EUserTransferType.EUserTransferTypeScenePosId:
      return "EUserTransferTypeScenePosId";
    case EUserTransferType.EUserTransferTypePivot:
      return "EUserTransferTypePivot";
    case EUserTransferType.EUserTransferTypeCutScene:
      return "EUserTransferTypeCutScene";
    case EUserTransferType.EUserTransferTypeNear:
      return "EUserTransferTypeNear";
    case EUserTransferType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
