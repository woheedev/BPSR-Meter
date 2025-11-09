/* eslint-disable */

export const protobufPackage = "zproto";

export enum EAppearType {
  EAppearNull = 0,
  EAppearTransferIn = 1,
  EAppearTransferPassLineIn = 2,
  UNRECOGNIZED = -1,
}

export function eAppearTypeFromJSON(object: any): EAppearType {
  switch (object) {
    case 0:
    case "EAppearNull":
      return EAppearType.EAppearNull;
    case 1:
    case "EAppearTransferIn":
      return EAppearType.EAppearTransferIn;
    case 2:
    case "EAppearTransferPassLineIn":
      return EAppearType.EAppearTransferPassLineIn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAppearType.UNRECOGNIZED;
  }
}

export function eAppearTypeToJSON(object: EAppearType): string {
  switch (object) {
    case EAppearType.EAppearNull:
      return "EAppearNull";
    case EAppearType.EAppearTransferIn:
      return "EAppearTransferIn";
    case EAppearType.EAppearTransferPassLineIn:
      return "EAppearTransferPassLineIn";
    case EAppearType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
