/* eslint-disable */

export const protobufPackage = "zproto";

export enum EQuestStepStatus {
  QuestStepGoing = 0,
  QuestStepFinish = 1,
  QuestStepFail = 2,
  UNRECOGNIZED = -1,
}

export function eQuestStepStatusFromJSON(object: any): EQuestStepStatus {
  switch (object) {
    case 0:
    case "QuestStepGoing":
      return EQuestStepStatus.QuestStepGoing;
    case 1:
    case "QuestStepFinish":
      return EQuestStepStatus.QuestStepFinish;
    case 2:
    case "QuestStepFail":
      return EQuestStepStatus.QuestStepFail;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EQuestStepStatus.UNRECOGNIZED;
  }
}

export function eQuestStepStatusToJSON(object: EQuestStepStatus): string {
  switch (object) {
    case EQuestStepStatus.QuestStepGoing:
      return "QuestStepGoing";
    case EQuestStepStatus.QuestStepFinish:
      return "QuestStepFinish";
    case EQuestStepStatus.QuestStepFail:
      return "QuestStepFail";
    case EQuestStepStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
