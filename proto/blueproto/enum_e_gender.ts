/* eslint-disable */

export const protobufPackage = "zproto";

export enum EGender {
  GenderNull = 0,
  GenderMale = 1,
  GenderFemale = 2,
  UNRECOGNIZED = -1,
}

export function eGenderFromJSON(object: any): EGender {
  switch (object) {
    case 0:
    case "GenderNull":
      return EGender.GenderNull;
    case 1:
    case "GenderMale":
      return EGender.GenderMale;
    case 2:
    case "GenderFemale":
      return EGender.GenderFemale;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EGender.UNRECOGNIZED;
  }
}

export function eGenderToJSON(object: EGender): string {
  switch (object) {
    case EGender.GenderNull:
      return "GenderNull";
    case EGender.GenderMale:
      return "GenderMale";
    case EGender.GenderFemale:
      return "GenderFemale";
    case EGender.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
