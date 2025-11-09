/* eslint-disable */

export const protobufPackage = "zproto";

export enum EEntityType {
  EntErrType = 0,
  EntMonster = 1,
  EntNpc = 2,
  EntSceneObject = 3,
  EntZone = 5,
  EntBullet = 6,
  EntClientBullet = 7,
  EntPet = 8,
  EntChar = 10,
  EntDummy = 11,
  EntDrop = 12,
  EntField = 14,
  EntTrap = 15,
  EntCollection = 16,
  EntStaticObject = 18,
  EntVehicle = 19,
  EntToy = 20,
  EntCommunityHouse = 21,
  EntHouseItem = 22,
  EntCount = 23,
  UNRECOGNIZED = -1,
}

export function eEntityTypeFromJSON(object: any): EEntityType {
  switch (object) {
    case 0:
    case "EntErrType":
      return EEntityType.EntErrType;
    case 1:
    case "EntMonster":
      return EEntityType.EntMonster;
    case 2:
    case "EntNpc":
      return EEntityType.EntNpc;
    case 3:
    case "EntSceneObject":
      return EEntityType.EntSceneObject;
    case 5:
    case "EntZone":
      return EEntityType.EntZone;
    case 6:
    case "EntBullet":
      return EEntityType.EntBullet;
    case 7:
    case "EntClientBullet":
      return EEntityType.EntClientBullet;
    case 8:
    case "EntPet":
      return EEntityType.EntPet;
    case 10:
    case "EntChar":
      return EEntityType.EntChar;
    case 11:
    case "EntDummy":
      return EEntityType.EntDummy;
    case 12:
    case "EntDrop":
      return EEntityType.EntDrop;
    case 14:
    case "EntField":
      return EEntityType.EntField;
    case 15:
    case "EntTrap":
      return EEntityType.EntTrap;
    case 16:
    case "EntCollection":
      return EEntityType.EntCollection;
    case 18:
    case "EntStaticObject":
      return EEntityType.EntStaticObject;
    case 19:
    case "EntVehicle":
      return EEntityType.EntVehicle;
    case 20:
    case "EntToy":
      return EEntityType.EntToy;
    case 21:
    case "EntCommunityHouse":
      return EEntityType.EntCommunityHouse;
    case 22:
    case "EntHouseItem":
      return EEntityType.EntHouseItem;
    case 23:
    case "EntCount":
      return EEntityType.EntCount;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EEntityType.UNRECOGNIZED;
  }
}

export function eEntityTypeToJSON(object: EEntityType): string {
  switch (object) {
    case EEntityType.EntErrType:
      return "EntErrType";
    case EEntityType.EntMonster:
      return "EntMonster";
    case EEntityType.EntNpc:
      return "EntNpc";
    case EEntityType.EntSceneObject:
      return "EntSceneObject";
    case EEntityType.EntZone:
      return "EntZone";
    case EEntityType.EntBullet:
      return "EntBullet";
    case EEntityType.EntClientBullet:
      return "EntClientBullet";
    case EEntityType.EntPet:
      return "EntPet";
    case EEntityType.EntChar:
      return "EntChar";
    case EEntityType.EntDummy:
      return "EntDummy";
    case EEntityType.EntDrop:
      return "EntDrop";
    case EEntityType.EntField:
      return "EntField";
    case EEntityType.EntTrap:
      return "EntTrap";
    case EEntityType.EntCollection:
      return "EntCollection";
    case EEntityType.EntStaticObject:
      return "EntStaticObject";
    case EEntityType.EntVehicle:
      return "EntVehicle";
    case EEntityType.EntToy:
      return "EntToy";
    case EEntityType.EntCommunityHouse:
      return "EntCommunityHouse";
    case EEntityType.EntHouseItem:
      return "EntHouseItem";
    case EEntityType.EntCount:
      return "EntCount";
    case EEntityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
