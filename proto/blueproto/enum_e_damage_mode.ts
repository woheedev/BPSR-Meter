/* eslint-disable */

export const protobufPackage = "zproto";

export enum EDamageMode {
  DamageNormal = 0,
  DamagePhysical = 1,
  DamageMagical = 2,
  UNRECOGNIZED = -1,
}

export function eDamageModeFromJSON(object: any): EDamageMode {
  switch (object) {
    case 0:
    case "DamageNormal":
      return EDamageMode.DamageNormal;
    case 1:
    case "DamagePhysical":
      return EDamageMode.DamagePhysical;
    case 2:
    case "DamageMagical":
      return EDamageMode.DamageMagical;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EDamageMode.UNRECOGNIZED;
  }
}

export function eDamageModeToJSON(object: EDamageMode): string {
  switch (object) {
    case EDamageMode.DamageNormal:
      return "DamageNormal";
    case EDamageMode.DamagePhysical:
      return "DamagePhysical";
    case EDamageMode.DamageMagical:
      return "DamageMagical";
    case EDamageMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
