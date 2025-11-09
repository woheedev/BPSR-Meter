/* eslint-disable */

export const protobufPackage = "zproto";

export enum SystemType {
  SystemType_Null = 0,
  SystemType_Android = 1,
  SystemType_Ios = 2,
  SystemType_Web = 3,
  SystemType_Linux = 4,
  SystemType_Windows = 5,
  UNRECOGNIZED = -1,
}

export function systemTypeFromJSON(object: any): SystemType {
  switch (object) {
    case 0:
    case "SystemType_Null":
      return SystemType.SystemType_Null;
    case 1:
    case "SystemType_Android":
      return SystemType.SystemType_Android;
    case 2:
    case "SystemType_Ios":
      return SystemType.SystemType_Ios;
    case 3:
    case "SystemType_Web":
      return SystemType.SystemType_Web;
    case 4:
    case "SystemType_Linux":
      return SystemType.SystemType_Linux;
    case 5:
    case "SystemType_Windows":
      return SystemType.SystemType_Windows;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SystemType.UNRECOGNIZED;
  }
}

export function systemTypeToJSON(object: SystemType): string {
  switch (object) {
    case SystemType.SystemType_Null:
      return "SystemType_Null";
    case SystemType.SystemType_Android:
      return "SystemType_Android";
    case SystemType.SystemType_Ios:
      return "SystemType_Ios";
    case SystemType.SystemType_Web:
      return "SystemType_Web";
    case SystemType.SystemType_Linux:
      return "SystemType_Linux";
    case SystemType.SystemType_Windows:
      return "SystemType_Windows";
    case SystemType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
