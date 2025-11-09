/* eslint-disable */

export const protobufPackage = "zproto";

export enum ETeamMemberType {
  ETeamMemberTypeFive = 0,
  ETeamMemberTypeTwenty = 1,
  UNRECOGNIZED = -1,
}

export function eTeamMemberTypeFromJSON(object: any): ETeamMemberType {
  switch (object) {
    case 0:
    case "ETeamMemberTypeFive":
      return ETeamMemberType.ETeamMemberTypeFive;
    case 1:
    case "ETeamMemberTypeTwenty":
      return ETeamMemberType.ETeamMemberTypeTwenty;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ETeamMemberType.UNRECOGNIZED;
  }
}

export function eTeamMemberTypeToJSON(object: ETeamMemberType): string {
  switch (object) {
    case ETeamMemberType.ETeamMemberTypeFive:
      return "ETeamMemberTypeFive";
    case ETeamMemberType.ETeamMemberTypeTwenty:
      return "ETeamMemberTypeTwenty";
    case ETeamMemberType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
