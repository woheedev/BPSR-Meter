/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { QuestData } from "./stru_quest_data";
import { QuestHistory } from "./stru_quest_history";
import { WorldQuestInfo } from "./stru_world_quest_info";
import { worldQuestList } from "./stru_world_quest_list";

export const protobufPackage = "zproto";

export interface QuestDataList {
  questMap: { [key: number]: QuestData };
  finishQuest: { [key: number]: boolean };
  trackingId: number;
  finishResetQuest: { [key: number]: number };
  historyMap: { [key: number]: QuestHistory };
  worldQuestTimeStamp: Long;
  worldQuestInfo: { [key: number]: WorldQuestInfo };
  allWorldQuestList: { [key: number]: number };
  blueWorldQuestMap: { [key: number]: number };
  filterEventId: { [key: number]: worldQuestList };
  acceptQuestList: number[];
  followWorldQuestList: number[];
  trackOptionalQuest: { [key: number]: number };
  finishResetQuestCount: { [key: number]: number };
  acceptQuestMap: { [key: number]: boolean };
  version: Long;
}

export interface QuestDataList_QuestMapEntry {
  key: number;
  value: QuestData | undefined;
}

export interface QuestDataList_FinishQuestEntry {
  key: number;
  value: boolean;
}

export interface QuestDataList_FinishResetQuestEntry {
  key: number;
  value: number;
}

export interface QuestDataList_HistoryMapEntry {
  key: number;
  value: QuestHistory | undefined;
}

export interface QuestDataList_WorldQuestInfoEntry {
  key: number;
  value: WorldQuestInfo | undefined;
}

export interface QuestDataList_AllWorldQuestListEntry {
  key: number;
  value: number;
}

export interface QuestDataList_BlueWorldQuestMapEntry {
  key: number;
  value: number;
}

export interface QuestDataList_FilterEventIdEntry {
  key: number;
  value: worldQuestList | undefined;
}

export interface QuestDataList_TrackOptionalQuestEntry {
  key: number;
  value: number;
}

export interface QuestDataList_FinishResetQuestCountEntry {
  key: number;
  value: number;
}

export interface QuestDataList_AcceptQuestMapEntry {
  key: number;
  value: boolean;
}

function createBaseQuestDataList(): QuestDataList {
  return {
    questMap: {},
    finishQuest: {},
    trackingId: 0,
    finishResetQuest: {},
    historyMap: {},
    worldQuestTimeStamp: Long.ZERO,
    worldQuestInfo: {},
    allWorldQuestList: {},
    blueWorldQuestMap: {},
    filterEventId: {},
    acceptQuestList: [],
    followWorldQuestList: [],
    trackOptionalQuest: {},
    finishResetQuestCount: {},
    acceptQuestMap: {},
    version: Long.UZERO,
  };
}

export const QuestDataList: MessageFns<QuestDataList> = {
  encode(message: QuestDataList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.questMap).forEach(([key, value]) => {
      QuestDataList_QuestMapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    Object.entries(message.finishQuest).forEach(([key, value]) => {
      QuestDataList_FinishQuestEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    if (message.trackingId !== 0) {
      writer.uint32(24).uint32(message.trackingId);
    }
    Object.entries(message.finishResetQuest).forEach(([key, value]) => {
      QuestDataList_FinishResetQuestEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).join();
    });
    Object.entries(message.historyMap).forEach(([key, value]) => {
      QuestDataList_HistoryMapEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).join();
    });
    if (!message.worldQuestTimeStamp.equals(Long.ZERO)) {
      writer.uint32(48).int64(message.worldQuestTimeStamp.toString());
    }
    Object.entries(message.worldQuestInfo).forEach(([key, value]) => {
      QuestDataList_WorldQuestInfoEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).join();
    });
    Object.entries(message.allWorldQuestList).forEach(([key, value]) => {
      QuestDataList_AllWorldQuestListEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).join();
    });
    Object.entries(message.blueWorldQuestMap).forEach(([key, value]) => {
      QuestDataList_BlueWorldQuestMapEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).join();
    });
    Object.entries(message.filterEventId).forEach(([key, value]) => {
      QuestDataList_FilterEventIdEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).join();
    });
    writer.uint32(90).fork();
    for (const v of message.acceptQuestList) {
      writer.uint32(v);
    }
    writer.join();
    writer.uint32(98).fork();
    for (const v of message.followWorldQuestList) {
      writer.uint32(v);
    }
    writer.join();
    Object.entries(message.trackOptionalQuest).forEach(([key, value]) => {
      QuestDataList_TrackOptionalQuestEntry.encode({ key: key as any, value }, writer.uint32(106).fork()).join();
    });
    Object.entries(message.finishResetQuestCount).forEach(([key, value]) => {
      QuestDataList_FinishResetQuestCountEntry.encode({ key: key as any, value }, writer.uint32(114).fork()).join();
    });
    Object.entries(message.acceptQuestMap).forEach(([key, value]) => {
      QuestDataList_AcceptQuestMapEntry.encode({ key: key as any, value }, writer.uint32(122).fork()).join();
    });
    if (!message.version.equals(Long.UZERO)) {
      writer.uint32(128).uint64(message.version.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          const entry1 = QuestDataList_QuestMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.questMap[entry1.key] = entry1.value;
          }
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = QuestDataList_FinishQuestEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.finishQuest[entry2.key] = entry2.value;
          }
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.trackingId = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          const entry4 = QuestDataList_FinishResetQuestEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.finishResetQuest[entry4.key] = entry4.value;
          }
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          const entry5 = QuestDataList_HistoryMapEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.historyMap[entry5.key] = entry5.value;
          }
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.worldQuestTimeStamp = Long.fromString(reader.int64().toString());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          const entry7 = QuestDataList_WorldQuestInfoEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.worldQuestInfo[entry7.key] = entry7.value;
          }
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          const entry8 = QuestDataList_AllWorldQuestListEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.allWorldQuestList[entry8.key] = entry8.value;
          }
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          const entry9 = QuestDataList_BlueWorldQuestMapEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.blueWorldQuestMap[entry9.key] = entry9.value;
          }
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          const entry10 = QuestDataList_FilterEventIdEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.filterEventId[entry10.key] = entry10.value;
          }
          continue;
        }
        case 11: {
          if (tag === 88) {
            message.acceptQuestList.push(reader.uint32());

            continue;
          }

          if (tag === 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.acceptQuestList.push(reader.uint32());
            }

            continue;
          }

          break;
        }
        case 12: {
          if (tag === 96) {
            message.followWorldQuestList.push(reader.uint32());

            continue;
          }

          if (tag === 98) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.followWorldQuestList.push(reader.uint32());
            }

            continue;
          }

          break;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          const entry13 = QuestDataList_TrackOptionalQuestEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.trackOptionalQuest[entry13.key] = entry13.value;
          }
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          const entry14 = QuestDataList_FinishResetQuestCountEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.finishResetQuestCount[entry14.key] = entry14.value;
          }
          continue;
        }
        case 15: {
          if (tag !== 122) {
            break;
          }

          const entry15 = QuestDataList_AcceptQuestMapEntry.decode(reader, reader.uint32());
          if (entry15.value !== undefined) {
            message.acceptQuestMap[entry15.key] = entry15.value;
          }
          continue;
        }
        case 16: {
          if (tag !== 128) {
            break;
          }

          message.version = Long.fromString(reader.uint64().toString(), true);
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

  fromJSON(object: any): QuestDataList {
    return {
      questMap: isObject(object.questMap)
        ? Object.entries(object.questMap).reduce<{ [key: number]: QuestData }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = QuestData.fromJSON(value);
          return acc;
        }, {})
        : {},
      finishQuest: isObject(object.finishQuest)
        ? Object.entries(object.finishQuest).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      trackingId: isSet(object.trackingId) ? globalThis.Number(object.trackingId) : 0,
      finishResetQuest: isObject(object.finishResetQuest)
        ? Object.entries(object.finishResetQuest).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      historyMap: isObject(object.historyMap)
        ? Object.entries(object.historyMap).reduce<{ [key: number]: QuestHistory }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = QuestHistory.fromJSON(value);
          return acc;
        }, {})
        : {},
      worldQuestTimeStamp: isSet(object.worldQuestTimeStamp) ? Long.fromValue(object.worldQuestTimeStamp) : Long.ZERO,
      worldQuestInfo: isObject(object.worldQuestInfo)
        ? Object.entries(object.worldQuestInfo).reduce<{ [key: number]: WorldQuestInfo }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = WorldQuestInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
      allWorldQuestList: isObject(object.allWorldQuestList)
        ? Object.entries(object.allWorldQuestList).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      blueWorldQuestMap: isObject(object.blueWorldQuestMap)
        ? Object.entries(object.blueWorldQuestMap).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      filterEventId: isObject(object.filterEventId)
        ? Object.entries(object.filterEventId).reduce<{ [key: number]: worldQuestList }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = worldQuestList.fromJSON(value);
          return acc;
        }, {})
        : {},
      acceptQuestList: globalThis.Array.isArray(object?.acceptQuestList)
        ? object.acceptQuestList.map((e: any) => globalThis.Number(e))
        : [],
      followWorldQuestList: globalThis.Array.isArray(object?.followWorldQuestList)
        ? object.followWorldQuestList.map((e: any) => globalThis.Number(e))
        : [],
      trackOptionalQuest: isObject(object.trackOptionalQuest)
        ? Object.entries(object.trackOptionalQuest).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      finishResetQuestCount: isObject(object.finishResetQuestCount)
        ? Object.entries(object.finishResetQuestCount).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      acceptQuestMap: isObject(object.acceptQuestMap)
        ? Object.entries(object.acceptQuestMap).reduce<{ [key: number]: boolean }>((acc, [key, value]) => {
          acc[globalThis.Number(key)] = Boolean(value);
          return acc;
        }, {})
        : {},
      version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
    };
  },

  toJSON(message: QuestDataList): unknown {
    const obj: any = {};
    if (message.questMap) {
      const entries = Object.entries(message.questMap);
      if (entries.length > 0) {
        obj.questMap = {};
        entries.forEach(([k, v]) => {
          obj.questMap[k] = QuestData.toJSON(v);
        });
      }
    }
    if (message.finishQuest) {
      const entries = Object.entries(message.finishQuest);
      if (entries.length > 0) {
        obj.finishQuest = {};
        entries.forEach(([k, v]) => {
          obj.finishQuest[k] = v;
        });
      }
    }
    if (message.trackingId !== 0) {
      obj.trackingId = Math.round(message.trackingId);
    }
    if (message.finishResetQuest) {
      const entries = Object.entries(message.finishResetQuest);
      if (entries.length > 0) {
        obj.finishResetQuest = {};
        entries.forEach(([k, v]) => {
          obj.finishResetQuest[k] = Math.round(v);
        });
      }
    }
    if (message.historyMap) {
      const entries = Object.entries(message.historyMap);
      if (entries.length > 0) {
        obj.historyMap = {};
        entries.forEach(([k, v]) => {
          obj.historyMap[k] = QuestHistory.toJSON(v);
        });
      }
    }
    if (!message.worldQuestTimeStamp.equals(Long.ZERO)) {
      obj.worldQuestTimeStamp = (message.worldQuestTimeStamp || Long.ZERO).toString();
    }
    if (message.worldQuestInfo) {
      const entries = Object.entries(message.worldQuestInfo);
      if (entries.length > 0) {
        obj.worldQuestInfo = {};
        entries.forEach(([k, v]) => {
          obj.worldQuestInfo[k] = WorldQuestInfo.toJSON(v);
        });
      }
    }
    if (message.allWorldQuestList) {
      const entries = Object.entries(message.allWorldQuestList);
      if (entries.length > 0) {
        obj.allWorldQuestList = {};
        entries.forEach(([k, v]) => {
          obj.allWorldQuestList[k] = Math.round(v);
        });
      }
    }
    if (message.blueWorldQuestMap) {
      const entries = Object.entries(message.blueWorldQuestMap);
      if (entries.length > 0) {
        obj.blueWorldQuestMap = {};
        entries.forEach(([k, v]) => {
          obj.blueWorldQuestMap[k] = Math.round(v);
        });
      }
    }
    if (message.filterEventId) {
      const entries = Object.entries(message.filterEventId);
      if (entries.length > 0) {
        obj.filterEventId = {};
        entries.forEach(([k, v]) => {
          obj.filterEventId[k] = worldQuestList.toJSON(v);
        });
      }
    }
    if (message.acceptQuestList?.length) {
      obj.acceptQuestList = message.acceptQuestList.map((e) => Math.round(e));
    }
    if (message.followWorldQuestList?.length) {
      obj.followWorldQuestList = message.followWorldQuestList.map((e) => Math.round(e));
    }
    if (message.trackOptionalQuest) {
      const entries = Object.entries(message.trackOptionalQuest);
      if (entries.length > 0) {
        obj.trackOptionalQuest = {};
        entries.forEach(([k, v]) => {
          obj.trackOptionalQuest[k] = Math.round(v);
        });
      }
    }
    if (message.finishResetQuestCount) {
      const entries = Object.entries(message.finishResetQuestCount);
      if (entries.length > 0) {
        obj.finishResetQuestCount = {};
        entries.forEach(([k, v]) => {
          obj.finishResetQuestCount[k] = Math.round(v);
        });
      }
    }
    if (message.acceptQuestMap) {
      const entries = Object.entries(message.acceptQuestMap);
      if (entries.length > 0) {
        obj.acceptQuestMap = {};
        entries.forEach(([k, v]) => {
          obj.acceptQuestMap[k] = v;
        });
      }
    }
    if (!message.version.equals(Long.UZERO)) {
      obj.version = (message.version || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList>, I>>(base?: I): QuestDataList {
    return QuestDataList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList>, I>>(object: I): QuestDataList {
    const message = createBaseQuestDataList();
    message.questMap = Object.entries(object.questMap ?? {}).reduce<{ [key: number]: QuestData }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = QuestData.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.finishQuest = Object.entries(object.finishQuest ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.trackingId = object.trackingId ?? 0;
    message.finishResetQuest = Object.entries(object.finishResetQuest ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.historyMap = Object.entries(object.historyMap ?? {}).reduce<{ [key: number]: QuestHistory }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = QuestHistory.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.worldQuestTimeStamp = (object.worldQuestTimeStamp !== undefined && object.worldQuestTimeStamp !== null)
      ? Long.fromValue(object.worldQuestTimeStamp)
      : Long.ZERO;
    message.worldQuestInfo = Object.entries(object.worldQuestInfo ?? {}).reduce<{ [key: number]: WorldQuestInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = WorldQuestInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.allWorldQuestList = Object.entries(object.allWorldQuestList ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.blueWorldQuestMap = Object.entries(object.blueWorldQuestMap ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.filterEventId = Object.entries(object.filterEventId ?? {}).reduce<{ [key: number]: worldQuestList }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = worldQuestList.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.acceptQuestList = object.acceptQuestList?.map((e) => e) || [];
    message.followWorldQuestList = object.followWorldQuestList?.map((e) => e) || [];
    message.trackOptionalQuest = Object.entries(object.trackOptionalQuest ?? {}).reduce<{ [key: number]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Number(value);
        }
        return acc;
      },
      {},
    );
    message.finishResetQuestCount = Object.entries(object.finishResetQuestCount ?? {}).reduce<
      { [key: number]: number }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = globalThis.Number(value);
      }
      return acc;
    }, {});
    message.acceptQuestMap = Object.entries(object.acceptQuestMap ?? {}).reduce<{ [key: number]: boolean }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[globalThis.Number(key)] = globalThis.Boolean(value);
        }
        return acc;
      },
      {},
    );
    message.version = (object.version !== undefined && object.version !== null)
      ? Long.fromValue(object.version)
      : Long.UZERO;
    return message;
  },
};

function createBaseQuestDataList_QuestMapEntry(): QuestDataList_QuestMapEntry {
  return { key: 0, value: undefined };
}

export const QuestDataList_QuestMapEntry: MessageFns<QuestDataList_QuestMapEntry> = {
  encode(message: QuestDataList_QuestMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      QuestData.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_QuestMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_QuestMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = QuestData.decode(reader, reader.uint32());
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

  fromJSON(object: any): QuestDataList_QuestMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? QuestData.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: QuestDataList_QuestMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = QuestData.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_QuestMapEntry>, I>>(base?: I): QuestDataList_QuestMapEntry {
    return QuestDataList_QuestMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_QuestMapEntry>, I>>(object: I): QuestDataList_QuestMapEntry {
    const message = createBaseQuestDataList_QuestMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? QuestData.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQuestDataList_FinishQuestEntry(): QuestDataList_FinishQuestEntry {
  return { key: 0, value: false };
}

export const QuestDataList_FinishQuestEntry: MessageFns<QuestDataList_FinishQuestEntry> = {
  encode(message: QuestDataList_FinishQuestEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_FinishQuestEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_FinishQuestEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
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

  fromJSON(object: any): QuestDataList_FinishQuestEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: QuestDataList_FinishQuestEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_FinishQuestEntry>, I>>(base?: I): QuestDataList_FinishQuestEntry {
    return QuestDataList_FinishQuestEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_FinishQuestEntry>, I>>(
    object: I,
  ): QuestDataList_FinishQuestEntry {
    const message = createBaseQuestDataList_FinishQuestEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseQuestDataList_FinishResetQuestEntry(): QuestDataList_FinishResetQuestEntry {
  return { key: 0, value: 0 };
}

export const QuestDataList_FinishResetQuestEntry: MessageFns<QuestDataList_FinishResetQuestEntry> = {
  encode(message: QuestDataList_FinishResetQuestEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_FinishResetQuestEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_FinishResetQuestEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): QuestDataList_FinishResetQuestEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestDataList_FinishResetQuestEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_FinishResetQuestEntry>, I>>(
    base?: I,
  ): QuestDataList_FinishResetQuestEntry {
    return QuestDataList_FinishResetQuestEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_FinishResetQuestEntry>, I>>(
    object: I,
  ): QuestDataList_FinishResetQuestEntry {
    const message = createBaseQuestDataList_FinishResetQuestEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseQuestDataList_HistoryMapEntry(): QuestDataList_HistoryMapEntry {
  return { key: 0, value: undefined };
}

export const QuestDataList_HistoryMapEntry: MessageFns<QuestDataList_HistoryMapEntry> = {
  encode(message: QuestDataList_HistoryMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      QuestHistory.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_HistoryMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_HistoryMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = QuestHistory.decode(reader, reader.uint32());
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

  fromJSON(object: any): QuestDataList_HistoryMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? QuestHistory.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: QuestDataList_HistoryMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = QuestHistory.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_HistoryMapEntry>, I>>(base?: I): QuestDataList_HistoryMapEntry {
    return QuestDataList_HistoryMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_HistoryMapEntry>, I>>(
    object: I,
  ): QuestDataList_HistoryMapEntry {
    const message = createBaseQuestDataList_HistoryMapEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? QuestHistory.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQuestDataList_WorldQuestInfoEntry(): QuestDataList_WorldQuestInfoEntry {
  return { key: 0, value: undefined };
}

export const QuestDataList_WorldQuestInfoEntry: MessageFns<QuestDataList_WorldQuestInfoEntry> = {
  encode(message: QuestDataList_WorldQuestInfoEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== undefined) {
      WorldQuestInfo.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_WorldQuestInfoEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_WorldQuestInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = WorldQuestInfo.decode(reader, reader.uint32());
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

  fromJSON(object: any): QuestDataList_WorldQuestInfoEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? WorldQuestInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: QuestDataList_WorldQuestInfoEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = WorldQuestInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_WorldQuestInfoEntry>, I>>(
    base?: I,
  ): QuestDataList_WorldQuestInfoEntry {
    return QuestDataList_WorldQuestInfoEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_WorldQuestInfoEntry>, I>>(
    object: I,
  ): QuestDataList_WorldQuestInfoEntry {
    const message = createBaseQuestDataList_WorldQuestInfoEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? WorldQuestInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQuestDataList_AllWorldQuestListEntry(): QuestDataList_AllWorldQuestListEntry {
  return { key: 0, value: 0 };
}

export const QuestDataList_AllWorldQuestListEntry: MessageFns<QuestDataList_AllWorldQuestListEntry> = {
  encode(message: QuestDataList_AllWorldQuestListEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_AllWorldQuestListEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_AllWorldQuestListEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): QuestDataList_AllWorldQuestListEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestDataList_AllWorldQuestListEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_AllWorldQuestListEntry>, I>>(
    base?: I,
  ): QuestDataList_AllWorldQuestListEntry {
    return QuestDataList_AllWorldQuestListEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_AllWorldQuestListEntry>, I>>(
    object: I,
  ): QuestDataList_AllWorldQuestListEntry {
    const message = createBaseQuestDataList_AllWorldQuestListEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseQuestDataList_BlueWorldQuestMapEntry(): QuestDataList_BlueWorldQuestMapEntry {
  return { key: 0, value: 0 };
}

export const QuestDataList_BlueWorldQuestMapEntry: MessageFns<QuestDataList_BlueWorldQuestMapEntry> = {
  encode(message: QuestDataList_BlueWorldQuestMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_BlueWorldQuestMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_BlueWorldQuestMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): QuestDataList_BlueWorldQuestMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestDataList_BlueWorldQuestMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_BlueWorldQuestMapEntry>, I>>(
    base?: I,
  ): QuestDataList_BlueWorldQuestMapEntry {
    return QuestDataList_BlueWorldQuestMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_BlueWorldQuestMapEntry>, I>>(
    object: I,
  ): QuestDataList_BlueWorldQuestMapEntry {
    const message = createBaseQuestDataList_BlueWorldQuestMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseQuestDataList_FilterEventIdEntry(): QuestDataList_FilterEventIdEntry {
  return { key: 0, value: undefined };
}

export const QuestDataList_FilterEventIdEntry: MessageFns<QuestDataList_FilterEventIdEntry> = {
  encode(message: QuestDataList_FilterEventIdEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      worldQuestList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_FilterEventIdEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_FilterEventIdEntry();
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

          message.value = worldQuestList.decode(reader, reader.uint32());
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

  fromJSON(object: any): QuestDataList_FilterEventIdEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? worldQuestList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: QuestDataList_FilterEventIdEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = worldQuestList.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_FilterEventIdEntry>, I>>(
    base?: I,
  ): QuestDataList_FilterEventIdEntry {
    return QuestDataList_FilterEventIdEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_FilterEventIdEntry>, I>>(
    object: I,
  ): QuestDataList_FilterEventIdEntry {
    const message = createBaseQuestDataList_FilterEventIdEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? worldQuestList.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQuestDataList_TrackOptionalQuestEntry(): QuestDataList_TrackOptionalQuestEntry {
  return { key: 0, value: 0 };
}

export const QuestDataList_TrackOptionalQuestEntry: MessageFns<QuestDataList_TrackOptionalQuestEntry> = {
  encode(message: QuestDataList_TrackOptionalQuestEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_TrackOptionalQuestEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_TrackOptionalQuestEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): QuestDataList_TrackOptionalQuestEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestDataList_TrackOptionalQuestEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_TrackOptionalQuestEntry>, I>>(
    base?: I,
  ): QuestDataList_TrackOptionalQuestEntry {
    return QuestDataList_TrackOptionalQuestEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_TrackOptionalQuestEntry>, I>>(
    object: I,
  ): QuestDataList_TrackOptionalQuestEntry {
    const message = createBaseQuestDataList_TrackOptionalQuestEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseQuestDataList_FinishResetQuestCountEntry(): QuestDataList_FinishResetQuestCountEntry {
  return { key: 0, value: 0 };
}

export const QuestDataList_FinishResetQuestCountEntry: MessageFns<QuestDataList_FinishResetQuestCountEntry> = {
  encode(message: QuestDataList_FinishResetQuestCountEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_FinishResetQuestCountEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_FinishResetQuestCountEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.value = reader.uint32();
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

  fromJSON(object: any): QuestDataList_FinishResetQuestCountEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: QuestDataList_FinishResetQuestCountEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_FinishResetQuestCountEntry>, I>>(
    base?: I,
  ): QuestDataList_FinishResetQuestCountEntry {
    return QuestDataList_FinishResetQuestCountEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_FinishResetQuestCountEntry>, I>>(
    object: I,
  ): QuestDataList_FinishResetQuestCountEntry {
    const message = createBaseQuestDataList_FinishResetQuestCountEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseQuestDataList_AcceptQuestMapEntry(): QuestDataList_AcceptQuestMapEntry {
  return { key: 0, value: false };
}

export const QuestDataList_AcceptQuestMapEntry: MessageFns<QuestDataList_AcceptQuestMapEntry> = {
  encode(message: QuestDataList_AcceptQuestMapEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== false) {
      writer.uint32(16).bool(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuestDataList_AcceptQuestMapEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestDataList_AcceptQuestMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.key = reader.uint32();
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

  fromJSON(object: any): QuestDataList_AcceptQuestMapEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
    };
  },

  toJSON(message: QuestDataList_AcceptQuestMapEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== false) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestDataList_AcceptQuestMapEntry>, I>>(
    base?: I,
  ): QuestDataList_AcceptQuestMapEntry {
    return QuestDataList_AcceptQuestMapEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuestDataList_AcceptQuestMapEntry>, I>>(
    object: I,
  ): QuestDataList_AcceptQuestMapEntry {
    const message = createBaseQuestDataList_AcceptQuestMapEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? false;
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
