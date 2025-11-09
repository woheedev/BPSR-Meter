/* eslint-disable */

export const protobufPackage = "zproto";

export enum MonsterTargetAward {
  MonsterTargetAwardNull = 0,
  MonsterTargetAwardGet = 1,
  MonsterTargetAwardReceived = 2,
  UNRECOGNIZED = -1,
}

export function monsterTargetAwardFromJSON(object: any): MonsterTargetAward {
  switch (object) {
    case 0:
    case "MonsterTargetAwardNull":
      return MonsterTargetAward.MonsterTargetAwardNull;
    case 1:
    case "MonsterTargetAwardGet":
      return MonsterTargetAward.MonsterTargetAwardGet;
    case 2:
    case "MonsterTargetAwardReceived":
      return MonsterTargetAward.MonsterTargetAwardReceived;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MonsterTargetAward.UNRECOGNIZED;
  }
}

export function monsterTargetAwardToJSON(object: MonsterTargetAward): string {
  switch (object) {
    case MonsterTargetAward.MonsterTargetAwardNull:
      return "MonsterTargetAwardNull";
    case MonsterTargetAward.MonsterTargetAwardGet:
      return "MonsterTargetAwardGet";
    case MonsterTargetAward.MonsterTargetAwardReceived:
      return "MonsterTargetAwardReceived";
    case MonsterTargetAward.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
