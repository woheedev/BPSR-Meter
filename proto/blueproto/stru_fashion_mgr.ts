/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { FashionAdvanceInfo } from "./stru_fashion_advance_info";
import { FashionColorInfo } from "./stru_fashion_color_info";
import { UnlockColorInfo } from "./stru_unlock_color_info";

export const protobufPackage = "zproto";

export interface FashionMgr {
  wearInfo: { [key: number]: number };
  fashionDatas: { [key: number]: FashionColorInfo };
  unlockColor: { [key: number]: UnlockColorInfo };
  fashionReward: { [key: number]: boolean };
  allFashion: { [key: number]: boolean };
  allRide: { [key: number]: boolean };
  allWeaponSkin: { [key: number]: boolean };
  fashionAdvance: { [key: number]: FashionAdvanceInfo };
  fashionCollectPoint: number;
  rideCollectPoint: number;
  weaponSkinCollectPoint: number;
  allFashionNum: { [key: number]: number };
  allRideNum: { [key: number]: number };
  allWeaponSkinNum: { [key: number]: number };
  isFashionInit: boolean;
  isRideInit: boolean;
  isWeaponSkinInit: boolean;
}

export interface FashionMgr_WearInfoEntry {
  key: number;
  value: number;
}

export interface FashionMgr_FashionDatasEntry {
  key: number;
  value: FashionColorInfo | undefined;
}

export interface FashionMgr_UnlockColorEntry {
  key: number;
  value: UnlockColorInfo | undefined;
}

export interface FashionMgr_FashionRewardEntry {
  key: number;
  value: boolean;
}

export interface FashionMgr_AllFashionEntry {
  key: number;
  value: boolean;
}

export interface FashionMgr_AllRideEntry {
  key: number;
  value: boolean;
}

export interface FashionMgr_AllWeaponSkinEntry {
  key: number;
  value: boolean;
}

export interface FashionMgr_FashionAdvanceEntry {
  key: number;
  value: FashionAdvanceInfo | undefined;
}

export interface FashionMgr_AllFashionNumEntry {
  key: number;
  value: number;
}

export interface FashionMgr_AllRideNumEntry {
  key: number;
  value: number;
}

export interface FashionMgr_AllWeaponSkinNumEntry {
  key: number;
  value: number;
}

function createBaseFashionMgr(): FashionMgr {
  return {
    wearInfo: {},
    fashionDatas: {},
    unlockColor: {},
    fashionReward: {},
    allFashion: {},
    allRide: {},
    allWeaponSkin: {},
    fashionAdvance: {},
    fashionCollectPoint: 0,
    rideCollectPoint: 0,
    weaponSkinCollectPoint: 0,
    allFashionNum: {},
    allRideNum: {},
    allWeaponSkinNum: {},
    isFashionInit: false,
    isRideInit: false,
    isWeaponSkinInit: false,
  };
}

export const FashionMgr: MessageFns<FashionMgr> = {
  encode(message: FashionMgr, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.wearInfo).forEach(([key, value]) => {
      FashionMgr_WearInfoEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.fashionDatas).forEach(([key, value]) => {
      FashionMgr_FashionDatasEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    Object.entries(message.unlockColor).forEach(([key, value]) => {
      FashionMgr_UnlockColorEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).join();
    });
    Object.entries(message.fashionReward).forEach(([key, value]) => {
      FashionMgr_FashionRewardEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.allFashion).forEach(([key, value]) => {
      FashionMgr_AllFashionEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    Object.entries(message.allRide).forEach(([key, value]) => {
      FashionMgr_AllRideEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).join();
    });
    Object.entries(message.allWeaponSkin).forEach(([key, value]) => {
      FashionMgr_AllWeaponSkinEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
    });
    Object.entries(message.fashionAdvance).forEach(([key, value]) => {
      FashionMgr_FashionAdvanceEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).join();
    });
    if (message.fashionCollectPoint !== 0) {
      writer.uint32(72).int32(message.fashionCollectPoint);
    }
    if (message.rideCollectPoint !== 0) {
      writer.uint32(80).int32(message.rideCollectPoint);
    }
    if (message.weaponSkinCollectPoint !== 0) {
      writer.uint32(88).int32(message.weaponSkinCollectPoint);
    }
    Object.entries(message.allFashionNum).forEach(([key, value]) => {
      FashionMgr_AllFashionNumEntry.encode({ key: key as any, value }, writer.uint32(98).fork()).join();
    });
    Object.entries(message.allRideNum).forEach(([key, value]) => {
      FashionMgr_AllRideNumEntry.encode({ key: key as any, value }, writer.uint32(106).fork()).join();
    });
    Object.entries(message.allWeaponSkinNum).forEach(([key, value]) => {
      FashionMgr_AllWeaponSkinNumEntry.encode({ key: key as any, value }, writer.uint32(114).fork()).join();
    });
    if (message.isFashionInit !== false) {
      writer.uint32(120).bool(message.isFashionInit);
    }
    if (message.isRideInit !== false) {
      writer.uint32(128).bool(message.isRideInit);
    }
    if (message.isWeaponSkinInit !== false) {
      writer.uint32(136).bool(message.isWeaponSkinInit);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = FashionMgr_WearInfoEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.wearInfo[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = FashionMgr_FashionDatasEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.fashionDatas[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = FashionMgr_UnlockColorEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.unlockColor[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = FashionMgr_FashionRewardEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.fashionReward[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = FashionMgr_AllFashionEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.allFashion[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          const entry6 = FashionMgr_AllRideEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.allRide[entry6.key] = entry6.value;
          }
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          const entry7 = FashionMgr_AllWeaponSkinEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.allWeaponSkin[entry7.key] = entry7.value;
          }
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          const entry8 = FashionMgr_FashionAdvanceEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.fashionAdvance[entry8.key] = entry8.value;
          }
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.fashionCollectPoint = reader.int32();
          continue;
        }
        case 10: {
          if (tag !== 80) {
            break;
          }

          message.rideCollectPoint = reader.int32();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.weaponSkinCollectPoint = reader.int32();
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          const entry12 = FashionMgr_AllFashionNumEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.allFashionNum[entry12.key] = entry12.value;
          }
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          const entry13 = FashionMgr_AllRideNumEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.allRideNum[entry13.key] = entry13.value;
          }
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          const entry14 = FashionMgr_AllWeaponSkinNumEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.allWeaponSkinNum[entry14.key] = entry14.value;
          }
          continue;
        }
        case 15: {
          if (tag !== 120) {
            break;
          }

          message.isFashionInit = reader.bool();
          continue;
        }
        case 16: {
          if (tag !== 128) {
            break;
          }

          message.isRideInit = reader.bool();
          continue;
        }
        case 17: {
          if (tag !== 136) {
            break;
          }

          message.isWeaponSkinInit = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr {
    return {
      wearInfo: isObject(object.wearInfo)
        ? Object.entries(object.wearInfo).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      fashionDatas: isObject(object.fashionDatas)
        ? Object.entries(object.fashionDatas).reduce<{ [key: number]: FashionColorInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FashionColorInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      unlockColor: isObject(object.unlockColor)
        ? Object.entries(object.unlockColor).reduce<{ [key: number]: UnlockColorInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = UnlockColorInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      fashionReward: isObject(object.fashionReward)
        ? Object.entries(object.fashionReward).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      allFashion: isObject(object.allFashion)
        ? Object.entries(object.allFashion).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      allRide: isObject(object.allRide)
        ? Object.entries(object.allRide).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      allWeaponSkin: isObject(object.allWeaponSkin)
        ? Object.entries(object.allWeaponSkin).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      fashionAdvance: isObject(object.fashionAdvance)
        ? Object.entries(object.fashionAdvance).reduce<{ [key: number]: FashionAdvanceInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = FashionAdvanceInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      fashionCollectPoint: isSet(object.fashionCollectPoint) ? globalThis.Number(object.fashionCollectPoint) : 0,
      rideCollectPoint: isSet(object.rideCollectPoint) ? globalThis.Number(object.rideCollectPoint) : 0,
      weaponSkinCollectPoint: isSet(object.weaponSkinCollectPoint)
        ? globalThis.Number(object.weaponSkinCollectPoint)
        : 0,
      allFashionNum: isObject(object.allFashionNum)
        ? Object.entries(object.allFashionNum).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      allRideNum: isObject(object.allRideNum)
        ? Object.entries(object.allRideNum).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      allWeaponSkinNum: isObject(object.allWeaponSkinNum)
        ? Object.entries(object.allWeaponSkinNum).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      isFashionInit: isSet(object.isFashionInit) ? globalThis.Boolean(object.isFashionInit) : false,
      isRideInit: isSet(object.isRideInit) ? globalThis.Boolean(object.isRideInit) : false,
      isWeaponSkinInit: isSet(object.isWeaponSkinInit) ? globalThis.Boolean(object.isWeaponSkinInit) : false,
    };
  },

  toJSON(message: FashionMgr): unknown {
    const obj: any = {};
    if (message.wearInfo) {
      const entries = Object.entries(message.wearInfo);
      if (entries.length > 0) {
        obj.wearInfo = {};
        entries.forEach(([k, v]) => {
          obj.wearInfo[k] = Math.round(v);
        });
      }
    }
    if (message.fashionDatas) {
      const entries = Object.entries(message.fashionDatas);
      if (entries.length > 0) {
        obj.fashionDatas = {};
        entries.forEach(([k, v]) => {
          obj.fashionDatas[k] = FashionColorInfo.toJSON(v);
        });
      }
    }
    if (message.unlockColor) {
      const entries = Object.entries(message.unlockColor);
      if (entries.length > 0) {
        obj.unlockColor = {};
        entries.forEach(([k, v]) => {
          obj.unlockColor[k] = UnlockColorInfo.toJSON(v);
        });
      }
    }
    if (message.fashionReward) {
      const entries = Object.entries(message.fashionReward);
      if (entries.length > 0) {
        obj.fashionReward = {};
        entries.forEach(([k, v]) => {
          obj.fashionReward[k] = v;
        });
      }
    }
    if (message.allFashion) {
      const entries = Object.entries(message.allFashion);
      if (entries.length > 0) {
        obj.allFashion = {};
        entries.forEach(([k, v]) => {
          obj.allFashion[k] = v;
        });
      }
    }
    if (message.allRide) {
      const entries = Object.entries(message.allRide);
      if (entries.length > 0) {
        obj.allRide = {};
        entries.forEach(([k, v]) => {
          obj.allRide[k] = v;
        });
      }
    }
    if (message.allWeaponSkin) {
      const entries = Object.entries(message.allWeaponSkin);
      if (entries.length > 0) {
        obj.allWeaponSkin = {};
        entries.forEach(([k, v]) => {
          obj.allWeaponSkin[k] = v;
        });
      }
    }
    if (message.fashionAdvance) {
      const entries = Object.entries(message.fashionAdvance);
      if (entries.length > 0) {
        obj.fashionAdvance = {};
        entries.forEach(([k, v]) => {
          obj.fashionAdvance[k] = FashionAdvanceInfo.toJSON(v);
        });
      }
    }
    if (message.fashionCollectPoint !== 0) {
      obj.fashionCollectPoint = Math.round(message.fashionCollectPoint);
    }
    if (message.rideCollectPoint !== 0) {
      obj.rideCollectPoint = Math.round(message.rideCollectPoint);
    }
    if (message.weaponSkinCollectPoint !== 0) {
      obj.weaponSkinCollectPoint = Math.round(message.weaponSkinCollectPoint);
    }
    if (message.allFashionNum) {
      const entries = Object.entries(message.allFashionNum);
      if (entries.length > 0) {
        obj.allFashionNum = {};
        entries.forEach(([k, v]) => {
          obj.allFashionNum[k] = Math.round(v);
        });
      }
    }
    if (message.allRideNum) {
      const entries = Object.entries(message.allRideNum);
      if (entries.length > 0) {
        obj.allRideNum = {};
        entries.forEach(([k, v]) => {
          obj.allRideNum[k] = Math.round(v);
        });
      }
    }
    if (message.allWeaponSkinNum) {
      const entries = Object.entries(message.allWeaponSkinNum);
      if (entries.length > 0) {
        obj.allWeaponSkinNum = {};
        entries.forEach(([k, v]) => {
          obj.allWeaponSkinNum[k] = Math.round(v);
        });
      }
    }
    if (message.isFashionInit !== false) {
      obj.isFashionInit = message.isFashionInit;
    }
    if (message.isRideInit !== false) {
      obj.isRideInit = message.isRideInit;
    }
    if (message.isWeaponSkinInit !== false) {
      obj.isWeaponSkinInit = message.isWeaponSkinInit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr>, I>>(base?: I): FashionMgr {
    return FashionMgr.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr>, I>>(object: I): FashionMgr {
    const message = createBaseFashionMgr();
    message.wearInfo = Object.entries(object.wearInfo ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.fashionDatas = Object.entries(object.fashionDatas ?? {}).reduce<{ [key: number]: FashionColorInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FashionColorInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.unlockColor = Object.entries(object.unlockColor ?? {}).reduce<{ [key: number]: UnlockColorInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = UnlockColorInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.fashionReward = Object.entries(object.fashionReward ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.allFashion = Object.entries(object.allFashion ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.allRide = Object.entries(object.allRide ?? {}).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Boolean(value);
      }
      return acc;
    }, {});
    message.allWeaponSkin = Object.entries(object.allWeaponSkin ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.fashionAdvance = Object.entries(object.fashionAdvance ?? {}).reduce<{ [key: number]: FashionAdvanceInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = FashionAdvanceInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.fashionCollectPoint = object.fashionCollectPoint ?? 0;
    message.rideCollectPoint = object.rideCollectPoint ?? 0;
    message.weaponSkinCollectPoint = object.weaponSkinCollectPoint ?? 0;
    message.allFashionNum = Object.entries(object.allFashionNum ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.allRideNum = Object.entries(object.allRideNum ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.allWeaponSkinNum = Object.entries(object.allWeaponSkinNum ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.isFashionInit = object.isFashionInit ?? false;
    message.isRideInit = object.isRideInit ?? false;
    message.isWeaponSkinInit = object.isWeaponSkinInit ?? false;
    return message;
  },
};

function createBaseFashionMgr_WearInfoEntry(): FashionMgr_WearInfoEntry {
  return { key: 0, value: 0 };
}

export const FashionMgr_WearInfoEntry: MessageFns<FashionMgr_WearInfoEntry> = {
  encode(message: FashionMgr_WearInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_WearInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_WearInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_WearInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: FashionMgr_WearInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_WearInfoEntry>, I>>(base?: I): FashionMgr_WearInfoEntry {
    return FashionMgr_WearInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_WearInfoEntry>, I>>(object: I): FashionMgr_WearInfoEntry {
    const message = createBaseFashionMgr_WearInfoEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseFashionMgr_FashionDatasEntry(): FashionMgr_FashionDatasEntry {
  return { key: 0, value: undefined };
}

export const FashionMgr_FashionDatasEntry: MessageFns<FashionMgr_FashionDatasEntry> = {
  encode(message: FashionMgr_FashionDatasEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FashionColorInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_FashionDatasEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_FashionDatasEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = FashionColorInfo.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_FashionDatasEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FashionColorInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FashionMgr_FashionDatasEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FashionColorInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_FashionDatasEntry>, I>>(base?: I): FashionMgr_FashionDatasEntry {
    return FashionMgr_FashionDatasEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_FashionDatasEntry>, I>>(object: I): FashionMgr_FashionDatasEntry {
    const message = createBaseFashionMgr_FashionDatasEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FashionColorInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseFashionMgr_UnlockColorEntry(): FashionMgr_UnlockColorEntry {
  return { key: 0, value: undefined };
}

export const FashionMgr_UnlockColorEntry: MessageFns<FashionMgr_UnlockColorEntry> = {
  encode(message: FashionMgr_UnlockColorEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      UnlockColorInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_UnlockColorEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_UnlockColorEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = UnlockColorInfo.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_UnlockColorEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? UnlockColorInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FashionMgr_UnlockColorEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = UnlockColorInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_UnlockColorEntry>, I>>(base?: I): FashionMgr_UnlockColorEntry {
    return FashionMgr_UnlockColorEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_UnlockColorEntry>, I>>(object: I): FashionMgr_UnlockColorEntry {
    const message = createBaseFashionMgr_UnlockColorEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? UnlockColorInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseFashionMgr_FashionRewardEntry(): FashionMgr_FashionRewardEntry {
  return { key: 0, value: false };
}

export const FashionMgr_FashionRewardEntry: MessageFns<FashionMgr_FashionRewardEntry> = {
  encode(message: FashionMgr_FashionRewardEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_FashionRewardEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_FashionRewardEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_FashionRewardEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: FashionMgr_FashionRewardEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_FashionRewardEntry>, I>>(base?: I): FashionMgr_FashionRewardEntry {
    return FashionMgr_FashionRewardEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_FashionRewardEntry>, I>>(
    object: I,
  ): FashionMgr_FashionRewardEntry {
    const message = createBaseFashionMgr_FashionRewardEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseFashionMgr_AllFashionEntry(): FashionMgr_AllFashionEntry {
  return { key: 0, value: false };
}

export const FashionMgr_AllFashionEntry: MessageFns<FashionMgr_AllFashionEntry> = {
  encode(message: FashionMgr_AllFashionEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_AllFashionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_AllFashionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_AllFashionEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: FashionMgr_AllFashionEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_AllFashionEntry>, I>>(base?: I): FashionMgr_AllFashionEntry {
    return FashionMgr_AllFashionEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_AllFashionEntry>, I>>(object: I): FashionMgr_AllFashionEntry {
    const message = createBaseFashionMgr_AllFashionEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseFashionMgr_AllRideEntry(): FashionMgr_AllRideEntry {
  return { key: 0, value: false };
}

export const FashionMgr_AllRideEntry: MessageFns<FashionMgr_AllRideEntry> = {
  encode(message: FashionMgr_AllRideEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_AllRideEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_AllRideEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_AllRideEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: FashionMgr_AllRideEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_AllRideEntry>, I>>(base?: I): FashionMgr_AllRideEntry {
    return FashionMgr_AllRideEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_AllRideEntry>, I>>(object: I): FashionMgr_AllRideEntry {
    const message = createBaseFashionMgr_AllRideEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseFashionMgr_AllWeaponSkinEntry(): FashionMgr_AllWeaponSkinEntry {
  return { key: 0, value: false };
}

export const FashionMgr_AllWeaponSkinEntry: MessageFns<FashionMgr_AllWeaponSkinEntry> = {
  encode(message: FashionMgr_AllWeaponSkinEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_AllWeaponSkinEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_AllWeaponSkinEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_AllWeaponSkinEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: FashionMgr_AllWeaponSkinEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_AllWeaponSkinEntry>, I>>(base?: I): FashionMgr_AllWeaponSkinEntry {
    return FashionMgr_AllWeaponSkinEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_AllWeaponSkinEntry>, I>>(
    object: I,
  ): FashionMgr_AllWeaponSkinEntry {
    const message = createBaseFashionMgr_AllWeaponSkinEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseFashionMgr_FashionAdvanceEntry(): FashionMgr_FashionAdvanceEntry {
  return { key: 0, value: undefined };
}

export const FashionMgr_FashionAdvanceEntry: MessageFns<FashionMgr_FashionAdvanceEntry> = {
  encode(message: FashionMgr_FashionAdvanceEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      FashionAdvanceInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_FashionAdvanceEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_FashionAdvanceEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = FashionAdvanceInfo.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_FashionAdvanceEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? FashionAdvanceInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FashionMgr_FashionAdvanceEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = FashionAdvanceInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_FashionAdvanceEntry>, I>>(base?: I): FashionMgr_FashionAdvanceEntry {
    return FashionMgr_FashionAdvanceEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_FashionAdvanceEntry>, I>>(
    object: I,
  ): FashionMgr_FashionAdvanceEntry {
    const message = createBaseFashionMgr_FashionAdvanceEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? FashionAdvanceInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseFashionMgr_AllFashionNumEntry(): FashionMgr_AllFashionNumEntry {
  return { key: 0, value: 0 };
}

export const FashionMgr_AllFashionNumEntry: MessageFns<FashionMgr_AllFashionNumEntry> = {
  encode(message: FashionMgr_AllFashionNumEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_AllFashionNumEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_AllFashionNumEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_AllFashionNumEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: FashionMgr_AllFashionNumEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_AllFashionNumEntry>, I>>(base?: I): FashionMgr_AllFashionNumEntry {
    return FashionMgr_AllFashionNumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_AllFashionNumEntry>, I>>(
    object: I,
  ): FashionMgr_AllFashionNumEntry {
    const message = createBaseFashionMgr_AllFashionNumEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseFashionMgr_AllRideNumEntry(): FashionMgr_AllRideNumEntry {
  return { key: 0, value: 0 };
}

export const FashionMgr_AllRideNumEntry: MessageFns<FashionMgr_AllRideNumEntry> = {
  encode(message: FashionMgr_AllRideNumEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_AllRideNumEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_AllRideNumEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_AllRideNumEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: FashionMgr_AllRideNumEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_AllRideNumEntry>, I>>(base?: I): FashionMgr_AllRideNumEntry {
    return FashionMgr_AllRideNumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_AllRideNumEntry>, I>>(object: I): FashionMgr_AllRideNumEntry {
    const message = createBaseFashionMgr_AllRideNumEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseFashionMgr_AllWeaponSkinNumEntry(): FashionMgr_AllWeaponSkinNumEntry {
  return { key: 0, value: 0 };
}

export const FashionMgr_AllWeaponSkinNumEntry: MessageFns<FashionMgr_AllWeaponSkinNumEntry> = {
  encode(message: FashionMgr_AllWeaponSkinNumEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FashionMgr_AllWeaponSkinNumEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFashionMgr_AllWeaponSkinNumEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FashionMgr_AllWeaponSkinNumEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: FashionMgr_AllWeaponSkinNumEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FashionMgr_AllWeaponSkinNumEntry>, I>>(
    base?: I,
  ): FashionMgr_AllWeaponSkinNumEntry {
    return FashionMgr_AllWeaponSkinNumEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FashionMgr_AllWeaponSkinNumEntry>, I>>(
    object: I,
  ): FashionMgr_AllWeaponSkinNumEntry {
    const message = createBaseFashionMgr_AllWeaponSkinNumEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
