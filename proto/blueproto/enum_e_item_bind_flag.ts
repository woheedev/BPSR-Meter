/* eslint-disable */

export const protobufPackage = "zproto";

export enum EItemBindFlag {
  ItemBindNone = 0,
  ItemNotBind = 1,
  ItemBindAll = 2,
  UNRECOGNIZED = -1,
}

export function eItemBindFlagFromJSON(object: any): EItemBindFlag {
  switch (object) {
    case 0:
    case "ItemBindNone":
      return EItemBindFlag.ItemBindNone;
    case 1:
    case "ItemNotBind":
      return EItemBindFlag.ItemNotBind;
    case 2:
    case "ItemBindAll":
      return EItemBindFlag.ItemBindAll;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EItemBindFlag.UNRECOGNIZED;
  }
}

export function eItemBindFlagToJSON(object: EItemBindFlag): string {
  switch (object) {
    case EItemBindFlag.ItemBindNone:
      return "ItemBindNone";
    case EItemBindFlag.ItemNotBind:
      return "ItemNotBind";
    case EItemBindFlag.ItemBindAll:
      return "ItemBindAll";
    case EItemBindFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
