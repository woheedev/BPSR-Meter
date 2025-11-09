/* eslint-disable */

export const protobufPackage = "zproto";

export enum EReceiveRewardStatus {
  EReceiveRewardStatusNotReceive = 0,
  EReceiveRewardStatusCanReceive = 1,
  EReceiveRewardStatusReceived = 2,
  UNRECOGNIZED = -1,
}

export function eReceiveRewardStatusFromJSON(object: any): EReceiveRewardStatus {
  switch (object) {
    case 0:
    case "EReceiveRewardStatusNotReceive":
      return EReceiveRewardStatus.EReceiveRewardStatusNotReceive;
    case 1:
    case "EReceiveRewardStatusCanReceive":
      return EReceiveRewardStatus.EReceiveRewardStatusCanReceive;
    case 2:
    case "EReceiveRewardStatusReceived":
      return EReceiveRewardStatus.EReceiveRewardStatusReceived;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EReceiveRewardStatus.UNRECOGNIZED;
  }
}

export function eReceiveRewardStatusToJSON(object: EReceiveRewardStatus): string {
  switch (object) {
    case EReceiveRewardStatus.EReceiveRewardStatusNotReceive:
      return "EReceiveRewardStatusNotReceive";
    case EReceiveRewardStatus.EReceiveRewardStatusCanReceive:
      return "EReceiveRewardStatusCanReceive";
    case EReceiveRewardStatus.EReceiveRewardStatusReceived:
      return "EReceiveRewardStatusReceived";
    case EReceiveRewardStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
