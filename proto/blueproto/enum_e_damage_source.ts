/* eslint-disable */

export const protobufPackage = "zproto";

export enum EDamageSource {
  EDamageSourceSkill = 0,
  EDamageSourceBullet = 1,
  EDamageSourceBuff = 2,
  EDamageSourceFall = 3,
  EDamageSourceFakeBullet = 4,
  EDamageSourceOther = 100,
  UNRECOGNIZED = -1,
}

export function eDamageSourceFromJSON(object: any): EDamageSource {
  switch (object) {
    case 0:
    case "EDamageSourceSkill":
      return EDamageSource.EDamageSourceSkill;
    case 1:
    case "EDamageSourceBullet":
      return EDamageSource.EDamageSourceBullet;
    case 2:
    case "EDamageSourceBuff":
      return EDamageSource.EDamageSourceBuff;
    case 3:
    case "EDamageSourceFall":
      return EDamageSource.EDamageSourceFall;
    case 4:
    case "EDamageSourceFakeBullet":
      return EDamageSource.EDamageSourceFakeBullet;
    case 100:
    case "EDamageSourceOther":
      return EDamageSource.EDamageSourceOther;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EDamageSource.UNRECOGNIZED;
  }
}

export function eDamageSourceToJSON(object: EDamageSource): string {
  switch (object) {
    case EDamageSource.EDamageSourceSkill:
      return "EDamageSourceSkill";
    case EDamageSource.EDamageSourceBullet:
      return "EDamageSourceBullet";
    case EDamageSource.EDamageSourceBuff:
      return "EDamageSourceBuff";
    case EDamageSource.EDamageSourceFall:
      return "EDamageSourceFall";
    case EDamageSource.EDamageSourceFakeBullet:
      return "EDamageSourceFakeBullet";
    case EDamageSource.EDamageSourceOther:
      return "EDamageSourceOther";
    case EDamageSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
