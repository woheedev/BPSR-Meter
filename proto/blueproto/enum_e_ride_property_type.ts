/* eslint-disable */

export const protobufPackage = "zproto";

export enum ERidePropertyType {
  RidePropertyTypeNone = 0,
  RidePropertyTypeLand = 11,
  RidePropertyTypeWater = 12,
  RidePropertyTypeMax = 13,
  UNRECOGNIZED = -1,
}

export function eRidePropertyTypeFromJSON(object: any): ERidePropertyType {
  switch (object) {
    case 0:
    case "RidePropertyTypeNone":
      return ERidePropertyType.RidePropertyTypeNone;
    case 11:
    case "RidePropertyTypeLand":
      return ERidePropertyType.RidePropertyTypeLand;
    case 12:
    case "RidePropertyTypeWater":
      return ERidePropertyType.RidePropertyTypeWater;
    case 13:
    case "RidePropertyTypeMax":
      return ERidePropertyType.RidePropertyTypeMax;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ERidePropertyType.UNRECOGNIZED;
  }
}

export function eRidePropertyTypeToJSON(object: ERidePropertyType): string {
  switch (object) {
    case ERidePropertyType.RidePropertyTypeNone:
      return "RidePropertyTypeNone";
    case ERidePropertyType.RidePropertyTypeLand:
      return "RidePropertyTypeLand";
    case ERidePropertyType.RidePropertyTypeWater:
      return "RidePropertyTypeWater";
    case ERidePropertyType.RidePropertyTypeMax:
      return "RidePropertyTypeMax";
    case ERidePropertyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
