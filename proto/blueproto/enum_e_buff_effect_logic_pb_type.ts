/* eslint-disable */

export const protobufPackage = "zproto";

export enum EBuffEffectLogicPbType {
  PlayEffect = 0,
  Gravity = 1,
  ParabolaEffect = 2,
  Linking = 3,
  ConfusionEffect = 4,
  ZoomScale = 5,
  BuffProfessionEffect = 7,
  TeleportBelt = 8,
  BuffEffectRainbow = 9,
  BuffEffectAttrHUD = 11,
  BuffEffectStop = 12,
  BuffEffectProgress = 13,
  BuffEffectEnergyDisplay = 14,
  BuffEffectStopAll = 15,
  BuffEffectLayerChange = 16,
  Tension = 17,
  UNRECOGNIZED = -1,
}

export function eBuffEffectLogicPbTypeFromJSON(object: any): EBuffEffectLogicPbType {
  switch (object) {
    case 0:
    case "PlayEffect":
      return EBuffEffectLogicPbType.PlayEffect;
    case 1:
    case "Gravity":
      return EBuffEffectLogicPbType.Gravity;
    case 2:
    case "ParabolaEffect":
      return EBuffEffectLogicPbType.ParabolaEffect;
    case 3:
    case "Linking":
      return EBuffEffectLogicPbType.Linking;
    case 4:
    case "ConfusionEffect":
      return EBuffEffectLogicPbType.ConfusionEffect;
    case 5:
    case "ZoomScale":
      return EBuffEffectLogicPbType.ZoomScale;
    case 7:
    case "BuffProfessionEffect":
      return EBuffEffectLogicPbType.BuffProfessionEffect;
    case 8:
    case "TeleportBelt":
      return EBuffEffectLogicPbType.TeleportBelt;
    case 9:
    case "BuffEffectRainbow":
      return EBuffEffectLogicPbType.BuffEffectRainbow;
    case 11:
    case "BuffEffectAttrHUD":
      return EBuffEffectLogicPbType.BuffEffectAttrHUD;
    case 12:
    case "BuffEffectStop":
      return EBuffEffectLogicPbType.BuffEffectStop;
    case 13:
    case "BuffEffectProgress":
      return EBuffEffectLogicPbType.BuffEffectProgress;
    case 14:
    case "BuffEffectEnergyDisplay":
      return EBuffEffectLogicPbType.BuffEffectEnergyDisplay;
    case 15:
    case "BuffEffectStopAll":
      return EBuffEffectLogicPbType.BuffEffectStopAll;
    case 16:
    case "BuffEffectLayerChange":
      return EBuffEffectLogicPbType.BuffEffectLayerChange;
    case 17:
    case "Tension":
      return EBuffEffectLogicPbType.Tension;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EBuffEffectLogicPbType.UNRECOGNIZED;
  }
}

export function eBuffEffectLogicPbTypeToJSON(object: EBuffEffectLogicPbType): string {
  switch (object) {
    case EBuffEffectLogicPbType.PlayEffect:
      return "PlayEffect";
    case EBuffEffectLogicPbType.Gravity:
      return "Gravity";
    case EBuffEffectLogicPbType.ParabolaEffect:
      return "ParabolaEffect";
    case EBuffEffectLogicPbType.Linking:
      return "Linking";
    case EBuffEffectLogicPbType.ConfusionEffect:
      return "ConfusionEffect";
    case EBuffEffectLogicPbType.ZoomScale:
      return "ZoomScale";
    case EBuffEffectLogicPbType.BuffProfessionEffect:
      return "BuffProfessionEffect";
    case EBuffEffectLogicPbType.TeleportBelt:
      return "TeleportBelt";
    case EBuffEffectLogicPbType.BuffEffectRainbow:
      return "BuffEffectRainbow";
    case EBuffEffectLogicPbType.BuffEffectAttrHUD:
      return "BuffEffectAttrHUD";
    case EBuffEffectLogicPbType.BuffEffectStop:
      return "BuffEffectStop";
    case EBuffEffectLogicPbType.BuffEffectProgress:
      return "BuffEffectProgress";
    case EBuffEffectLogicPbType.BuffEffectEnergyDisplay:
      return "BuffEffectEnergyDisplay";
    case EBuffEffectLogicPbType.BuffEffectStopAll:
      return "BuffEffectStopAll";
    case EBuffEffectLogicPbType.BuffEffectLayerChange:
      return "BuffEffectLayerChange";
    case EBuffEffectLogicPbType.Tension:
      return "Tension";
    case EBuffEffectLogicPbType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
