/* eslint-disable */

export const protobufPackage = "zproto";

export enum LaunchPlatform {
  LaunchPlatformNull = 0,
  LaunchPlatformWeXin = 1001,
  LaunchPlatformQq = 1002,
  UNRECOGNIZED = -1,
}

export function launchPlatformFromJSON(object: any): LaunchPlatform {
  switch (object) {
    case 0:
    case "LaunchPlatformNull":
      return LaunchPlatform.LaunchPlatformNull;
    case 1001:
    case "LaunchPlatformWeXin":
      return LaunchPlatform.LaunchPlatformWeXin;
    case 1002:
    case "LaunchPlatformQq":
      return LaunchPlatform.LaunchPlatformQq;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LaunchPlatform.UNRECOGNIZED;
  }
}

export function launchPlatformToJSON(object: LaunchPlatform): string {
  switch (object) {
    case LaunchPlatform.LaunchPlatformNull:
      return "LaunchPlatformNull";
    case LaunchPlatform.LaunchPlatformWeXin:
      return "LaunchPlatformWeXin";
    case LaunchPlatform.LaunchPlatformQq:
      return "LaunchPlatformQq";
    case LaunchPlatform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
