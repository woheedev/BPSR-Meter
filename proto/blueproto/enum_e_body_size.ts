/* eslint-disable */

export const protobufPackage = "zproto";

export enum EBodySize {
  BodySizeNull = 0,
  BodySizeS = 1,
  BodySizeM = 2,
  BodySizeL = 3,
  UNRECOGNIZED = -1,
}

export function eBodySizeFromJSON(object: any): EBodySize {
  switch (object) {
    case 0:
    case "BodySizeNull":
      return EBodySize.BodySizeNull;
    case 1:
    case "BodySizeS":
      return EBodySize.BodySizeS;
    case 2:
    case "BodySizeM":
      return EBodySize.BodySizeM;
    case 3:
    case "BodySizeL":
      return EBodySize.BodySizeL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBodySize.UNRECOGNIZED;
  }
}

export function eBodySizeToJSON(object: EBodySize): string {
  switch (object) {
    case EBodySize.BodySizeNull:
      return "BodySizeNull";
    case EBodySize.BodySizeS:
      return "BodySizeS";
    case EBodySize.BodySizeM:
      return "BodySizeM";
    case EBodySize.BodySizeL:
      return "BodySizeL";
    case EBodySize.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
