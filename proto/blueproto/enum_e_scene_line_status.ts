/* eslint-disable */

export const protobufPackage = "zproto";

export enum ESceneLineStatus {
  SceneLineStatusNone = 0,
  SceneLineStatusLow = 1,
  SceneLineStatusMedium = 2,
  SceneLineStatusHigh = 3,
  SceneLineStatusFull = 4,
  SceneLineStatusRecycle = 5,
  UNRECOGNIZED = -1,
}

export function eSceneLineStatusFromJSON(object: any): ESceneLineStatus {
  switch (object) {
    case 0:
    case "SceneLineStatusNone":
      return ESceneLineStatus.SceneLineStatusNone;
    case 1:
    case "SceneLineStatusLow":
      return ESceneLineStatus.SceneLineStatusLow;
    case 2:
    case "SceneLineStatusMedium":
      return ESceneLineStatus.SceneLineStatusMedium;
    case 3:
    case "SceneLineStatusHigh":
      return ESceneLineStatus.SceneLineStatusHigh;
    case 4:
    case "SceneLineStatusFull":
      return ESceneLineStatus.SceneLineStatusFull;
    case 5:
    case "SceneLineStatusRecycle":
      return ESceneLineStatus.SceneLineStatusRecycle;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ESceneLineStatus.UNRECOGNIZED;
  }
}

export function eSceneLineStatusToJSON(object: ESceneLineStatus): string {
  switch (object) {
    case ESceneLineStatus.SceneLineStatusNone:
      return "SceneLineStatusNone";
    case ESceneLineStatus.SceneLineStatusLow:
      return "SceneLineStatusLow";
    case ESceneLineStatus.SceneLineStatusMedium:
      return "SceneLineStatusMedium";
    case ESceneLineStatus.SceneLineStatusHigh:
      return "SceneLineStatusHigh";
    case ESceneLineStatus.SceneLineStatusFull:
      return "SceneLineStatusFull";
    case ESceneLineStatus.SceneLineStatusRecycle:
      return "SceneLineStatusRecycle";
    case ESceneLineStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
