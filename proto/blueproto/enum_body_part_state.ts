/* eslint-disable */

export const protobufPackage = "zproto";

export enum BodyPartState {
  BodyPartStateDefault = 0,
  BodyPartStateInjury = 1,
  BodyPartStateDead = 2,
  UNRECOGNIZED = -1,
}

export function bodyPartStateFromJSON(object: any): BodyPartState {
  switch (object) {
    case 0:
    case "BodyPartStateDefault":
      return BodyPartState.BodyPartStateDefault;
    case 1:
    case "BodyPartStateInjury":
      return BodyPartState.BodyPartStateInjury;
    case 2:
    case "BodyPartStateDead":
      return BodyPartState.BodyPartStateDead;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BodyPartState.UNRECOGNIZED;
  }
}

export function bodyPartStateToJSON(object: BodyPartState): string {
  switch (object) {
    case BodyPartState.BodyPartStateDefault:
      return "BodyPartStateDefault";
    case BodyPartState.BodyPartStateInjury:
      return "BodyPartStateInjury";
    case BodyPartState.BodyPartStateDead:
      return "BodyPartStateDead";
    case BodyPartState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
