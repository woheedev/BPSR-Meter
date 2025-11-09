/* eslint-disable */

export const protobufPackage = "zproto";

export enum EEquipEnchantType {
  EEquipEnchantNone = 0,
  EEquipEnchantOrdinary = 1,
  EEquipEnchantIntermediate = 2,
  EEquipEnchantAdvanced = 3,
  UNRECOGNIZED = -1,
}

export function eEquipEnchantTypeFromJSON(object: any): EEquipEnchantType {
  switch (object) {
    case 0:
    case "EEquipEnchantNone":
      return EEquipEnchantType.EEquipEnchantNone;
    case 1:
    case "EEquipEnchantOrdinary":
      return EEquipEnchantType.EEquipEnchantOrdinary;
    case 2:
    case "EEquipEnchantIntermediate":
      return EEquipEnchantType.EEquipEnchantIntermediate;
    case 3:
    case "EEquipEnchantAdvanced":
      return EEquipEnchantType.EEquipEnchantAdvanced;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EEquipEnchantType.UNRECOGNIZED;
  }
}

export function eEquipEnchantTypeToJSON(object: EEquipEnchantType): string {
  switch (object) {
    case EEquipEnchantType.EEquipEnchantNone:
      return "EEquipEnchantNone";
    case EEquipEnchantType.EEquipEnchantOrdinary:
      return "EEquipEnchantOrdinary";
    case EEquipEnchantType.EEquipEnchantIntermediate:
      return "EEquipEnchantIntermediate";
    case EEquipEnchantType.EEquipEnchantAdvanced:
      return "EEquipEnchantAdvanced";
    case EEquipEnchantType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
