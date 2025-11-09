/* eslint-disable */

export const protobufPackage = "zproto";

export enum ESkillCDType {
  ESkillCDNormal = 0,
  ESkillCDCharge = 1,
  UNRECOGNIZED = -1,
}

export function eSkillCDTypeFromJSON(object: any): ESkillCDType {
  switch (object) {
    case 0:
    case "ESkillCDNormal":
      return ESkillCDType.ESkillCDNormal;
    case 1:
    case "ESkillCDCharge":
      return ESkillCDType.ESkillCDCharge;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESkillCDType.UNRECOGNIZED;
  }
}

export function eSkillCDTypeToJSON(object: ESkillCDType): string {
  switch (object) {
    case ESkillCDType.ESkillCDNormal:
      return "ESkillCDNormal";
    case ESkillCDType.ESkillCDCharge:
      return "ESkillCDCharge";
    case ESkillCDType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
