/* eslint-disable */

export const protobufPackage = "zproto";

export enum EDamageType {
  Normal = 0,
  Miss = 1,
  Heal = 2,
  Immune = 3,
  Fall = 4,
  Absorbed = 5,
  UNRECOGNIZED = -1,
}

export function eDamageTypeFromJSON(object: any): EDamageType {
  switch (object) {
    case 0:
    case "Normal":
      return EDamageType.Normal;
    case 1:
    case "Miss":
      return EDamageType.Miss;
    case 2:
    case "Heal":
      return EDamageType.Heal;
    case 3:
    case "Immune":
      return EDamageType.Immune;
    case 4:
    case "Fall":
      return EDamageType.Fall;
    case 5:
    case "Absorbed":
      return EDamageType.Absorbed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EDamageType.UNRECOGNIZED;
  }
}

export function eDamageTypeToJSON(object: EDamageType): string {
  switch (object) {
    case EDamageType.Normal:
      return "Normal";
    case EDamageType.Miss:
      return "Miss";
    case EDamageType.Heal:
      return "Heal";
    case EDamageType.Immune:
      return "Immune";
    case EDamageType.Fall:
      return "Fall";
    case EDamageType.Absorbed:
      return "Absorbed";
    case EDamageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
