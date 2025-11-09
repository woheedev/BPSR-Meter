/* eslint-disable */

export const protobufPackage = "zproto";

export enum EDamageProperty {
  General = 0,
  Fire = 1,
  Water = 2,
  Electricity = 3,
  Wood = 4,
  Wind = 5,
  Rock = 6,
  Light = 7,
  Dark = 8,
  Count = 9,
  UNRECOGNIZED = -1,
}

export function eDamagePropertyFromJSON(object: any): EDamageProperty {
  switch (object) {
    case 0:
    case "General":
      return EDamageProperty.General;
    case 1:
    case "Fire":
      return EDamageProperty.Fire;
    case 2:
    case "Water":
      return EDamageProperty.Water;
    case 3:
    case "Electricity":
      return EDamageProperty.Electricity;
    case 4:
    case "Wood":
      return EDamageProperty.Wood;
    case 5:
    case "Wind":
      return EDamageProperty.Wind;
    case 6:
    case "Rock":
      return EDamageProperty.Rock;
    case 7:
    case "Light":
      return EDamageProperty.Light;
    case 8:
    case "Dark":
      return EDamageProperty.Dark;
    case 9:
    case "Count":
      return EDamageProperty.Count;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EDamageProperty.UNRECOGNIZED;
  }
}

export function eDamagePropertyToJSON(object: EDamageProperty): string {
  switch (object) {
    case EDamageProperty.General:
      return "General";
    case EDamageProperty.Fire:
      return "Fire";
    case EDamageProperty.Water:
      return "Water";
    case EDamageProperty.Electricity:
      return "Electricity";
    case EDamageProperty.Wood:
      return "Wood";
    case EDamageProperty.Wind:
      return "Wind";
    case EDamageProperty.Rock:
      return "Rock";
    case EDamageProperty.Light:
      return "Light";
    case EDamageProperty.Dark:
      return "Dark";
    case EDamageProperty.Count:
      return "Count";
    case EDamageProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
