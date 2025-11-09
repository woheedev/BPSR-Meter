/* eslint-disable */

export const protobufPackage = "zproto";

export enum EDisappearType {
  EDisappearNormal = 0,
  EDisappearDead = 1,
  EDisappearDestroy = 2,
  EDisappearTransferLeave = 3,
  EDisappearTransferPassLineLeave = 4,
  UNRECOGNIZED = -1,
}

export function eDisappearTypeFromJSON(object: any): EDisappearType {
  switch (object) {
    case 0:
    case "EDisappearNormal":
      return EDisappearType.EDisappearNormal;
    case 1:
    case "EDisappearDead":
      return EDisappearType.EDisappearDead;
    case 2:
    case "EDisappearDestroy":
      return EDisappearType.EDisappearDestroy;
    case 3:
    case "EDisappearTransferLeave":
      return EDisappearType.EDisappearTransferLeave;
    case 4:
    case "EDisappearTransferPassLineLeave":
      return EDisappearType.EDisappearTransferPassLineLeave;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EDisappearType.UNRECOGNIZED;
  }
}

export function eDisappearTypeToJSON(object: EDisappearType): string {
  switch (object) {
    case EDisappearType.EDisappearNormal:
      return "EDisappearNormal";
    case EDisappearType.EDisappearDead:
      return "EDisappearDead";
    case EDisappearType.EDisappearDestroy:
      return "EDisappearDestroy";
    case EDisappearType.EDisappearTransferLeave:
      return "EDisappearTransferLeave";
    case EDisappearType.EDisappearTransferPassLineLeave:
      return "EDisappearTransferPassLineLeave";
    case EDisappearType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
