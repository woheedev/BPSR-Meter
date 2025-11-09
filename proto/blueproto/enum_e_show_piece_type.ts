/* eslint-disable */

export const protobufPackage = "zproto";

export enum EShowPieceType {
  ShowPieceNull = 0,
  ShowPieceNormalAction = 1,
  ShowPieceEmote = 2,
  ShowPieceDoubleAction = 3,
  ShowPieceSticker = 4,
  UNRECOGNIZED = -1,
}

export function eShowPieceTypeFromJSON(object: any): EShowPieceType {
  switch (object) {
    case 0:
    case "ShowPieceNull":
      return EShowPieceType.ShowPieceNull;
    case 1:
    case "ShowPieceNormalAction":
      return EShowPieceType.ShowPieceNormalAction;
    case 2:
    case "ShowPieceEmote":
      return EShowPieceType.ShowPieceEmote;
    case 3:
    case "ShowPieceDoubleAction":
      return EShowPieceType.ShowPieceDoubleAction;
    case 4:
    case "ShowPieceSticker":
      return EShowPieceType.ShowPieceSticker;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EShowPieceType.UNRECOGNIZED;
  }
}

export function eShowPieceTypeToJSON(object: EShowPieceType): string {
  switch (object) {
    case EShowPieceType.ShowPieceNull:
      return "ShowPieceNull";
    case EShowPieceType.ShowPieceNormalAction:
      return "ShowPieceNormalAction";
    case EShowPieceType.ShowPieceEmote:
      return "ShowPieceEmote";
    case EShowPieceType.ShowPieceDoubleAction:
      return "ShowPieceDoubleAction";
    case EShowPieceType.ShowPieceSticker:
      return "ShowPieceSticker";
    case EShowPieceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
