/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AntiAddictionInfo } from "./stru_anti_addiction_info";
import { BattlePassData } from "./stru_battle_pass_data";
import { BubbleActData } from "./stru_bubble_act_data";
import { BuffDBInfo } from "./stru_buff_d_b_info";
import { ChallengeDungeonInfo } from "./stru_challenge_dungeon_info";
import { CharBaseInfo } from "./stru_char_base_info";
import { CharStatisticsData } from "./stru_char_statistics_data";
import { CollectionBook } from "./stru_collection_book";
import { CommunityHomeData } from "./stru_community_home_data";
import { CompensationStatistics } from "./stru_compensation_statistics";
import { CookList } from "./stru_cook_list";
import { CounterList } from "./stru_counter_list";
import { CraftEnergyRecord } from "./stru_craft_energy_record";
import { CutSceneInfos } from "./stru_cut_scene_infos";
import { CutsState } from "./stru_cuts_state";
import { DropContainerInfo } from "./stru_drop_container_info";
import { DungeonList } from "./stru_dungeon_list";
import { EnergyItem } from "./stru_energy_item";
import { EquipList } from "./stru_equip_list";
import { ExchangeItem } from "./stru_exchange_item";
import { FashionBenefit } from "./stru_fashion_benefit";
import { FashionMgr } from "./stru_fashion_mgr";
import { FightPoint } from "./stru_fight_point";
import { FishSetting } from "./stru_fish_setting";
import { FreightData } from "./stru_freight_data";
import { FunctionData } from "./stru_function_data";
import { GashaData } from "./stru_gasha_data";
import { HandbookData } from "./stru_handbook_data";
import { InteractionInfo } from "./stru_interaction_info";
import { InvestigateList } from "./stru_investigate_list";
import { ItemCurrency } from "./stru_item_currency";
import { ItemPackage } from "./stru_item_package";
import { LaunchPrivilegeData } from "./stru_launch_privilege_data";
import { LifeProfession } from "./stru_life_profession";
import { LifeProfessionWork } from "./stru_life_profession_work";
import { LuckyValueMgr } from "./stru_lucky_value_mgr";
import { MailClaimedInfo } from "./stru_mail_claimed_info";
import { MapBookInfoList } from "./stru_map_book_info_list";
import { MapData } from "./stru_map_data";
import { MasterModeDungeonInfo } from "./stru_master_mode_dungeon_info";
import { MiscInfo } from "./stru_misc_info";
import { Mod } from "./stru_mod";
import { MonsterExploreList } from "./stru_monster_explore_list";
import { MonsterHuntInfo } from "./stru_monster_hunt_info";
import { MonthlyCard } from "./stru_monthly_card";
import { NewbieData } from "./stru_newbie_data";
import { NotGetProceedAwardInfo } from "./stru_not_get_proceed_award_info";
import { ParkourRecordList } from "./stru_parkour_record_list";
import { PayOrderList } from "./stru_pay_order_list";
import { PersonalObject } from "./stru_personal_object";
import { PersonalWorldBossInfo } from "./stru_personal_world_boss_info";
import { PersonalZone } from "./stru_personal_zone";
import { PioneerData } from "./stru_pioneer_data";
import { Pivot } from "./stru_pivot";
import { PlanetMemory } from "./stru_planet_memory";
import { PlayHelper } from "./stru_play_helper";
import { PlayerBox } from "./stru_player_box";
import { PlayerOrderComtainerInfo } from "./stru_player_order_comtainer_info";
import { PlayerRecord } from "./stru_player_record";
import { PrivilegeEffectData } from "./stru_privilege_effect_data";
import { ProfessionList } from "./stru_profession_list";
import { ProfileList } from "./stru_profile_list";
import { QuestDataList } from "./stru_quest_data_list";
import { RechargeData } from "./stru_recharge_data";
import { RedDotData } from "./stru_red_dot_data";
import { Resonance } from "./stru_resonance";
import { RideList } from "./stru_ride_list";
import { RoleFace } from "./stru_role_face";
import { RoleLevel } from "./stru_role_level";
import { SceneData } from "./stru_scene_data";
import { SceneLuaData } from "./stru_scene_lua_data";
import { SeasonAchievementList } from "./stru_season_achievement_list";
import { SeasonActivation } from "./stru_season_activation";
import { SeasonCenter } from "./stru_season_center";
import { SeasonMedalInfo } from "./stru_season_medal_info";
import { SeasonQuestList } from "./stru_season_quest_list";
import { SeasonRankList } from "./stru_season_rank_list";
import { SeasonTarget } from "./stru_season_target";
import { SettingData } from "./stru_setting_data";
import { ShopData } from "./stru_shop_data";
import { ShowPieceData } from "./stru_show_piece_data";
import { SignInfo } from "./stru_sign_info";
import { Slot } from "./stru_slot";
import { StatisticsData } from "./stru_statistics_data";
import { SyncAwardData } from "./stru_sync_award_data";
import { TimerRefreshDataList } from "./stru_timer_refresh_data_list";
import { TransferPoint } from "./stru_transfer_point";
import { Treasure } from "./stru_treasure";
import { TrialRoad } from "./stru_trial_road";
import { UnlockEmojiData } from "./stru_unlock_emoji_data";
import { UserActivityList } from "./stru_user_activity_list";
import { UserFightAttr } from "./stru_user_fight_attr";
import { UserRecommendPlayData } from "./stru_user_recommend_play_data";
import { WeeklyTowerRecord } from "./stru_weekly_tower_record";
import { WorldEventMap } from "./stru_world_event_map";

export const protobufPackage = "zproto";

export interface CharSerialize {
  charId: Long;
  charBase: CharBaseInfo | undefined;
  sceneData: SceneData | undefined;
  sceneLuaData: SceneLuaData | undefined;
  pioneerData: PioneerData | undefined;
  buffInfo: BuffDBInfo | undefined;
  itemPackage: ItemPackage | undefined;
  questList: QuestDataList | undefined;
  settingData: SettingData | undefined;
  miscInfo: MiscInfo | undefined;
  exchangeItems: ExchangeItem | undefined;
  equip: EquipList | undefined;
  energyItem: EnergyItem | undefined;
  mapData: MapData | undefined;
  dungeonList: DungeonList | undefined;
  attr: UserFightAttr | undefined;
  fashion: FashionMgr | undefined;
  profileList: ProfileList | undefined;
  help: PlayHelper | undefined;
  counterList: CounterList | undefined;
  personalObj: PersonalObject | undefined;
  roleLevel: RoleLevel | undefined;
  pivot: Pivot | undefined;
  transferPoint: TransferPoint | undefined;
  planetMemory: PlanetMemory | undefined;
  planetMemoryTarget: SeasonTarget | undefined;
  redDot: RedDotData | undefined;
  resonance: Resonance | undefined;
  cutsState: CutsState | undefined;
  investigateList: InvestigateList | undefined;
  records: ParkourRecordList | undefined;
  interaction: InteractionInfo | undefined;
  seasonQuestList: SeasonQuestList | undefined;
  roleFace: RoleFace | undefined;
  mapBookList: MapBookInfoList | undefined;
  functionData: FunctionData | undefined;
  antiInfo: AntiAddictionInfo | undefined;
  monsterExploreList: MonsterExploreList | undefined;
  showPieceData: ShowPieceData | undefined;
  collectionBook: CollectionBook | undefined;
  notGetProceedAwardTimes: NotGetProceedAwardInfo | undefined;
  cookList: CookList | undefined;
  refreshDataList: TimerRefreshDataList | undefined;
  challengeDungeonInfo: ChallengeDungeonInfo | undefined;
  syncAwardData: SyncAwardData | undefined;
  seasonAchievementList: SeasonAchievementList | undefined;
  seasonRankList: SeasonRankList | undefined;
  seasonCenter: SeasonCenter | undefined;
  personalZone: PersonalZone | undefined;
  seasonMedalInfo: SeasonMedalInfo | undefined;
  communityHomeInfo: CommunityHomeData | undefined;
  seasonActivation: SeasonActivation | undefined;
  slots: Slot | undefined;
  monsterHuntInfo: MonsterHuntInfo | undefined;
  mod: Mod | undefined;
  worldEventMap: WorldEventMap | undefined;
  fishSetting: FishSetting | undefined;
  freightData: FreightData | undefined;
  professionList: ProfessionList | undefined;
  trialRoad: TrialRoad | undefined;
  gashaData: GashaData | undefined;
  shopData: ShopData | undefined;
  personalWorldBossInfo: PersonalWorldBossInfo | undefined;
  craftEnergy: CraftEnergyRecord | undefined;
  weeklyTower: WeeklyTowerRecord | undefined;
  cutSceneInfos: CutSceneInfos | undefined;
  recommendPlayData: UserRecommendPlayData | undefined;
  rideList: RideList | undefined;
  payOrderList: PayOrderList | undefined;
  lifeProfession: LifeProfession | undefined;
  lifeProfessionWork: LifeProfessionWork | undefined;
  userActivityList: UserActivityList | undefined;
  playerRecord: PlayerRecord | undefined;
  dropContainer: DropContainerInfo | undefined;
  monthlyCard: MonthlyCard | undefined;
  fashionBenefit: FashionBenefit | undefined;
  itemCurrency: ItemCurrency | undefined;
  privilegeEffectData: PrivilegeEffectData | undefined;
  treasure: Treasure | undefined;
  unlockEmojiData: UnlockEmojiData | undefined;
  playerOrderComtainerInfo: PlayerOrderComtainerInfo | undefined;
  playerBox: PlayerBox | undefined;
  launchPrivilegeData: LaunchPrivilegeData | undefined;
  battlePassData: BattlePassData | undefined;
  rechargeData: RechargeData | undefined;
  luckyValueMgr: LuckyValueMgr | undefined;
  handbookData: HandbookData | undefined;
  masterModeDungeonInfo: MasterModeDungeonInfo | undefined;
  statisticsData: StatisticsData | undefined;
  compenstionStatistics: CompensationStatistics | undefined;
  bubbleActData: BubbleActData | undefined;
  mailClaimedInfo: MailClaimedInfo | undefined;
  newbieData: NewbieData | undefined;
  fightPoint: FightPoint | undefined;
  sign: SignInfo | undefined;
  charStatisticsData: CharStatisticsData | undefined;
}

function createBaseCharSerialize(): CharSerialize {
  return {
    charId: Long.ZERO,
    charBase: undefined,
    sceneData: undefined,
    sceneLuaData: undefined,
    pioneerData: undefined,
    buffInfo: undefined,
    itemPackage: undefined,
    questList: undefined,
    settingData: undefined,
    miscInfo: undefined,
    exchangeItems: undefined,
    equip: undefined,
    energyItem: undefined,
    mapData: undefined,
    dungeonList: undefined,
    attr: undefined,
    fashion: undefined,
    profileList: undefined,
    help: undefined,
    counterList: undefined,
    personalObj: undefined,
    roleLevel: undefined,
    pivot: undefined,
    transferPoint: undefined,
    planetMemory: undefined,
    planetMemoryTarget: undefined,
    redDot: undefined,
    resonance: undefined,
    cutsState: undefined,
    investigateList: undefined,
    records: undefined,
    interaction: undefined,
    seasonQuestList: undefined,
    roleFace: undefined,
    mapBookList: undefined,
    functionData: undefined,
    antiInfo: undefined,
    monsterExploreList: undefined,
    showPieceData: undefined,
    collectionBook: undefined,
    notGetProceedAwardTimes: undefined,
    cookList: undefined,
    refreshDataList: undefined,
    challengeDungeonInfo: undefined,
    syncAwardData: undefined,
    seasonAchievementList: undefined,
    seasonRankList: undefined,
    seasonCenter: undefined,
    personalZone: undefined,
    seasonMedalInfo: undefined,
    communityHomeInfo: undefined,
    seasonActivation: undefined,
    slots: undefined,
    monsterHuntInfo: undefined,
    mod: undefined,
    worldEventMap: undefined,
    fishSetting: undefined,
    freightData: undefined,
    professionList: undefined,
    trialRoad: undefined,
    gashaData: undefined,
    shopData: undefined,
    personalWorldBossInfo: undefined,
    craftEnergy: undefined,
    weeklyTower: undefined,
    cutSceneInfos: undefined,
    recommendPlayData: undefined,
    rideList: undefined,
    payOrderList: undefined,
    lifeProfession: undefined,
    lifeProfessionWork: undefined,
    userActivityList: undefined,
    playerRecord: undefined,
    dropContainer: undefined,
    monthlyCard: undefined,
    fashionBenefit: undefined,
    itemCurrency: undefined,
    privilegeEffectData: undefined,
    treasure: undefined,
    unlockEmojiData: undefined,
    playerOrderComtainerInfo: undefined,
    playerBox: undefined,
    launchPrivilegeData: undefined,
    battlePassData: undefined,
    rechargeData: undefined,
    luckyValueMgr: undefined,
    handbookData: undefined,
    masterModeDungeonInfo: undefined,
    statisticsData: undefined,
    compenstionStatistics: undefined,
    bubbleActData: undefined,
    mailClaimedInfo: undefined,
    newbieData: undefined,
    fightPoint: undefined,
    sign: undefined,
    charStatisticsData: undefined,
  };
}

export const CharSerialize: MessageFns<CharSerialize> = {
  encode(message: CharSerialize, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.charId.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.charId.toString());
    }
    if (message.charBase !== undefined) {
      CharBaseInfo.encode(message.charBase, writer.uint32(18).fork()).join();
    }
    if (message.sceneData !== undefined) {
      SceneData.encode(message.sceneData, writer.uint32(26).fork()).join();
    }
    if (message.sceneLuaData !== undefined) {
      SceneLuaData.encode(message.sceneLuaData, writer.uint32(34).fork()).join();
    }
    if (message.pioneerData !== undefined) {
      PioneerData.encode(message.pioneerData, writer.uint32(42).fork()).join();
    }
    if (message.buffInfo !== undefined) {
      BuffDBInfo.encode(message.buffInfo, writer.uint32(50).fork()).join();
    }
    if (message.itemPackage !== undefined) {
      ItemPackage.encode(message.itemPackage, writer.uint32(58).fork()).join();
    }
    if (message.questList !== undefined) {
      QuestDataList.encode(message.questList, writer.uint32(66).fork()).join();
    }
    if (message.settingData !== undefined) {
      SettingData.encode(message.settingData, writer.uint32(74).fork()).join();
    }
    if (message.miscInfo !== undefined) {
      MiscInfo.encode(message.miscInfo, writer.uint32(82).fork()).join();
    }
    if (message.exchangeItems !== undefined) {
      ExchangeItem.encode(message.exchangeItems, writer.uint32(90).fork()).join();
    }
    if (message.equip !== undefined) {
      EquipList.encode(message.equip, writer.uint32(98).fork()).join();
    }
    if (message.energyItem !== undefined) {
      EnergyItem.encode(message.energyItem, writer.uint32(106).fork()).join();
    }
    if (message.mapData !== undefined) {
      MapData.encode(message.mapData, writer.uint32(114).fork()).join();
    }
    if (message.dungeonList !== undefined) {
      DungeonList.encode(message.dungeonList, writer.uint32(122).fork()).join();
    }
    if (message.attr !== undefined) {
      UserFightAttr.encode(message.attr, writer.uint32(130).fork()).join();
    }
    if (message.fashion !== undefined) {
      FashionMgr.encode(message.fashion, writer.uint32(138).fork()).join();
    }
    if (message.profileList !== undefined) {
      ProfileList.encode(message.profileList, writer.uint32(146).fork()).join();
    }
    if (message.help !== undefined) {
      PlayHelper.encode(message.help, writer.uint32(154).fork()).join();
    }
    if (message.counterList !== undefined) {
      CounterList.encode(message.counterList, writer.uint32(162).fork()).join();
    }
    if (message.personalObj !== undefined) {
      PersonalObject.encode(message.personalObj, writer.uint32(170).fork()).join();
    }
    if (message.roleLevel !== undefined) {
      RoleLevel.encode(message.roleLevel, writer.uint32(178).fork()).join();
    }
    if (message.pivot !== undefined) {
      Pivot.encode(message.pivot, writer.uint32(186).fork()).join();
    }
    if (message.transferPoint !== undefined) {
      TransferPoint.encode(message.transferPoint, writer.uint32(194).fork()).join();
    }
    if (message.planetMemory !== undefined) {
      PlanetMemory.encode(message.planetMemory, writer.uint32(202).fork()).join();
    }
    if (message.planetMemoryTarget !== undefined) {
      SeasonTarget.encode(message.planetMemoryTarget, writer.uint32(210).fork()).join();
    }
    if (message.redDot !== undefined) {
      RedDotData.encode(message.redDot, writer.uint32(218).fork()).join();
    }
    if (message.resonance !== undefined) {
      Resonance.encode(message.resonance, writer.uint32(226).fork()).join();
    }
    if (message.cutsState !== undefined) {
      CutsState.encode(message.cutsState, writer.uint32(234).fork()).join();
    }
    if (message.investigateList !== undefined) {
      InvestigateList.encode(message.investigateList, writer.uint32(242).fork()).join();
    }
    if (message.records !== undefined) {
      ParkourRecordList.encode(message.records, writer.uint32(250).fork()).join();
    }
    if (message.interaction !== undefined) {
      InteractionInfo.encode(message.interaction, writer.uint32(258).fork()).join();
    }
    if (message.seasonQuestList !== undefined) {
      SeasonQuestList.encode(message.seasonQuestList, writer.uint32(266).fork()).join();
    }
    if (message.roleFace !== undefined) {
      RoleFace.encode(message.roleFace, writer.uint32(274).fork()).join();
    }
    if (message.mapBookList !== undefined) {
      MapBookInfoList.encode(message.mapBookList, writer.uint32(282).fork()).join();
    }
    if (message.functionData !== undefined) {
      FunctionData.encode(message.functionData, writer.uint32(290).fork()).join();
    }
    if (message.antiInfo !== undefined) {
      AntiAddictionInfo.encode(message.antiInfo, writer.uint32(298).fork()).join();
    }
    if (message.monsterExploreList !== undefined) {
      MonsterExploreList.encode(message.monsterExploreList, writer.uint32(306).fork()).join();
    }
    if (message.showPieceData !== undefined) {
      ShowPieceData.encode(message.showPieceData, writer.uint32(314).fork()).join();
    }
    if (message.collectionBook !== undefined) {
      CollectionBook.encode(message.collectionBook, writer.uint32(338).fork()).join();
    }
    if (message.notGetProceedAwardTimes !== undefined) {
      NotGetProceedAwardInfo.encode(message.notGetProceedAwardTimes, writer.uint32(346).fork()).join();
    }
    if (message.cookList !== undefined) {
      CookList.encode(message.cookList, writer.uint32(354).fork()).join();
    }
    if (message.refreshDataList !== undefined) {
      TimerRefreshDataList.encode(message.refreshDataList, writer.uint32(362).fork()).join();
    }
    if (message.challengeDungeonInfo !== undefined) {
      ChallengeDungeonInfo.encode(message.challengeDungeonInfo, writer.uint32(370).fork()).join();
    }
    if (message.syncAwardData !== undefined) {
      SyncAwardData.encode(message.syncAwardData, writer.uint32(378).fork()).join();
    }
    if (message.seasonAchievementList !== undefined) {
      SeasonAchievementList.encode(message.seasonAchievementList, writer.uint32(386).fork()).join();
    }
    if (message.seasonRankList !== undefined) {
      SeasonRankList.encode(message.seasonRankList, writer.uint32(394).fork()).join();
    }
    if (message.seasonCenter !== undefined) {
      SeasonCenter.encode(message.seasonCenter, writer.uint32(402).fork()).join();
    }
    if (message.personalZone !== undefined) {
      PersonalZone.encode(message.personalZone, writer.uint32(410).fork()).join();
    }
    if (message.seasonMedalInfo !== undefined) {
      SeasonMedalInfo.encode(message.seasonMedalInfo, writer.uint32(418).fork()).join();
    }
    if (message.communityHomeInfo !== undefined) {
      CommunityHomeData.encode(message.communityHomeInfo, writer.uint32(426).fork()).join();
    }
    if (message.seasonActivation !== undefined) {
      SeasonActivation.encode(message.seasonActivation, writer.uint32(434).fork()).join();
    }
    if (message.slots !== undefined) {
      Slot.encode(message.slots, writer.uint32(442).fork()).join();
    }
    if (message.monsterHuntInfo !== undefined) {
      MonsterHuntInfo.encode(message.monsterHuntInfo, writer.uint32(450).fork()).join();
    }
    if (message.mod !== undefined) {
      Mod.encode(message.mod, writer.uint32(458).fork()).join();
    }
    if (message.worldEventMap !== undefined) {
      WorldEventMap.encode(message.worldEventMap, writer.uint32(466).fork()).join();
    }
    if (message.fishSetting !== undefined) {
      FishSetting.encode(message.fishSetting, writer.uint32(474).fork()).join();
    }
    if (message.freightData !== undefined) {
      FreightData.encode(message.freightData, writer.uint32(482).fork()).join();
    }
    if (message.professionList !== undefined) {
      ProfessionList.encode(message.professionList, writer.uint32(490).fork()).join();
    }
    if (message.trialRoad !== undefined) {
      TrialRoad.encode(message.trialRoad, writer.uint32(498).fork()).join();
    }
    if (message.gashaData !== undefined) {
      GashaData.encode(message.gashaData, writer.uint32(506).fork()).join();
    }
    if (message.shopData !== undefined) {
      ShopData.encode(message.shopData, writer.uint32(514).fork()).join();
    }
    if (message.personalWorldBossInfo !== undefined) {
      PersonalWorldBossInfo.encode(message.personalWorldBossInfo, writer.uint32(522).fork()).join();
    }
    if (message.craftEnergy !== undefined) {
      CraftEnergyRecord.encode(message.craftEnergy, writer.uint32(530).fork()).join();
    }
    if (message.weeklyTower !== undefined) {
      WeeklyTowerRecord.encode(message.weeklyTower, writer.uint32(538).fork()).join();
    }
    if (message.cutSceneInfos !== undefined) {
      CutSceneInfos.encode(message.cutSceneInfos, writer.uint32(546).fork()).join();
    }
    if (message.recommendPlayData !== undefined) {
      UserRecommendPlayData.encode(message.recommendPlayData, writer.uint32(554).fork()).join();
    }
    if (message.rideList !== undefined) {
      RideList.encode(message.rideList, writer.uint32(562).fork()).join();
    }
    if (message.payOrderList !== undefined) {
      PayOrderList.encode(message.payOrderList, writer.uint32(570).fork()).join();
    }
    if (message.lifeProfession !== undefined) {
      LifeProfession.encode(message.lifeProfession, writer.uint32(578).fork()).join();
    }
    if (message.lifeProfessionWork !== undefined) {
      LifeProfessionWork.encode(message.lifeProfessionWork, writer.uint32(586).fork()).join();
    }
    if (message.userActivityList !== undefined) {
      UserActivityList.encode(message.userActivityList, writer.uint32(594).fork()).join();
    }
    if (message.playerRecord !== undefined) {
      PlayerRecord.encode(message.playerRecord, writer.uint32(602).fork()).join();
    }
    if (message.dropContainer !== undefined) {
      DropContainerInfo.encode(message.dropContainer, writer.uint32(610).fork()).join();
    }
    if (message.monthlyCard !== undefined) {
      MonthlyCard.encode(message.monthlyCard, writer.uint32(618).fork()).join();
    }
    if (message.fashionBenefit !== undefined) {
      FashionBenefit.encode(message.fashionBenefit, writer.uint32(626).fork()).join();
    }
    if (message.itemCurrency !== undefined) {
      ItemCurrency.encode(message.itemCurrency, writer.uint32(634).fork()).join();
    }
    if (message.privilegeEffectData !== undefined) {
      PrivilegeEffectData.encode(message.privilegeEffectData, writer.uint32(642).fork()).join();
    }
    if (message.treasure !== undefined) {
      Treasure.encode(message.treasure, writer.uint32(650).fork()).join();
    }
    if (message.unlockEmojiData !== undefined) {
      UnlockEmojiData.encode(message.unlockEmojiData, writer.uint32(658).fork()).join();
    }
    if (message.playerOrderComtainerInfo !== undefined) {
      PlayerOrderComtainerInfo.encode(message.playerOrderComtainerInfo, writer.uint32(666).fork()).join();
    }
    if (message.playerBox !== undefined) {
      PlayerBox.encode(message.playerBox, writer.uint32(674).fork()).join();
    }
    if (message.launchPrivilegeData !== undefined) {
      LaunchPrivilegeData.encode(message.launchPrivilegeData, writer.uint32(682).fork()).join();
    }
    if (message.battlePassData !== undefined) {
      BattlePassData.encode(message.battlePassData, writer.uint32(690).fork()).join();
    }
    if (message.rechargeData !== undefined) {
      RechargeData.encode(message.rechargeData, writer.uint32(698).fork()).join();
    }
    if (message.luckyValueMgr !== undefined) {
      LuckyValueMgr.encode(message.luckyValueMgr, writer.uint32(706).fork()).join();
    }
    if (message.handbookData !== undefined) {
      HandbookData.encode(message.handbookData, writer.uint32(714).fork()).join();
    }
    if (message.masterModeDungeonInfo !== undefined) {
      MasterModeDungeonInfo.encode(message.masterModeDungeonInfo, writer.uint32(722).fork()).join();
    }
    if (message.statisticsData !== undefined) {
      StatisticsData.encode(message.statisticsData, writer.uint32(730).fork()).join();
    }
    if (message.compenstionStatistics !== undefined) {
      CompensationStatistics.encode(message.compenstionStatistics, writer.uint32(738).fork()).join();
    }
    if (message.bubbleActData !== undefined) {
      BubbleActData.encode(message.bubbleActData, writer.uint32(746).fork()).join();
    }
    if (message.mailClaimedInfo !== undefined) {
      MailClaimedInfo.encode(message.mailClaimedInfo, writer.uint32(754).fork()).join();
    }
    if (message.newbieData !== undefined) {
      NewbieData.encode(message.newbieData, writer.uint32(762).fork()).join();
    }
    if (message.fightPoint !== undefined) {
      FightPoint.encode(message.fightPoint, writer.uint32(770).fork()).join();
    }
    if (message.sign !== undefined) {
      SignInfo.encode(message.sign, writer.uint32(778).fork()).join();
    }
    if (message.charStatisticsData !== undefined) {
      CharStatisticsData.encode(message.charStatisticsData, writer.uint32(786).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CharSerialize {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharSerialize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.charId = Long.fromString(reader.int64().toString());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.charBase = CharBaseInfo.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.sceneData = SceneData.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.sceneLuaData = SceneLuaData.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.pioneerData = PioneerData.decode(reader, reader.uint32());
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.buffInfo = BuffDBInfo.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.itemPackage = ItemPackage.decode(reader, reader.uint32());
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.questList = QuestDataList.decode(reader, reader.uint32());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.settingData = SettingData.decode(reader, reader.uint32());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.miscInfo = MiscInfo.decode(reader, reader.uint32());
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.exchangeItems = ExchangeItem.decode(reader, reader.uint32());
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.equip = EquipList.decode(reader, reader.uint32());
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.energyItem = EnergyItem.decode(reader, reader.uint32());
          continue;
        }
        case 14: {
          if (tag !== 114) {
            break;
          }

          message.mapData = MapData.decode(reader, reader.uint32());
          continue;
        }
        case 15: {
          if (tag !== 122) {
            break;
          }

          message.dungeonList = DungeonList.decode(reader, reader.uint32());
          continue;
        }
        case 16: {
          if (tag !== 130) {
            break;
          }

          message.attr = UserFightAttr.decode(reader, reader.uint32());
          continue;
        }
        case 17: {
          if (tag !== 138) {
            break;
          }

          message.fashion = FashionMgr.decode(reader, reader.uint32());
          continue;
        }
        case 18: {
          if (tag !== 146) {
            break;
          }

          message.profileList = ProfileList.decode(reader, reader.uint32());
          continue;
        }
        case 19: {
          if (tag !== 154) {
            break;
          }

          message.help = PlayHelper.decode(reader, reader.uint32());
          continue;
        }
        case 20: {
          if (tag !== 162) {
            break;
          }

          message.counterList = CounterList.decode(reader, reader.uint32());
          continue;
        }
        case 21: {
          if (tag !== 170) {
            break;
          }

          message.personalObj = PersonalObject.decode(reader, reader.uint32());
          continue;
        }
        case 22: {
          if (tag !== 178) {
            break;
          }

          message.roleLevel = RoleLevel.decode(reader, reader.uint32());
          continue;
        }
        case 23: {
          if (tag !== 186) {
            break;
          }

          message.pivot = Pivot.decode(reader, reader.uint32());
          continue;
        }
        case 24: {
          if (tag !== 194) {
            break;
          }

          message.transferPoint = TransferPoint.decode(reader, reader.uint32());
          continue;
        }
        case 25: {
          if (tag !== 202) {
            break;
          }

          message.planetMemory = PlanetMemory.decode(reader, reader.uint32());
          continue;
        }
        case 26: {
          if (tag !== 210) {
            break;
          }

          message.planetMemoryTarget = SeasonTarget.decode(reader, reader.uint32());
          continue;
        }
        case 27: {
          if (tag !== 218) {
            break;
          }

          message.redDot = RedDotData.decode(reader, reader.uint32());
          continue;
        }
        case 28: {
          if (tag !== 226) {
            break;
          }

          message.resonance = Resonance.decode(reader, reader.uint32());
          continue;
        }
        case 29: {
          if (tag !== 234) {
            break;
          }

          message.cutsState = CutsState.decode(reader, reader.uint32());
          continue;
        }
        case 30: {
          if (tag !== 242) {
            break;
          }

          message.investigateList = InvestigateList.decode(reader, reader.uint32());
          continue;
        }
        case 31: {
          if (tag !== 250) {
            break;
          }

          message.records = ParkourRecordList.decode(reader, reader.uint32());
          continue;
        }
        case 32: {
          if (tag !== 258) {
            break;
          }

          message.interaction = InteractionInfo.decode(reader, reader.uint32());
          continue;
        }
        case 33: {
          if (tag !== 266) {
            break;
          }

          message.seasonQuestList = SeasonQuestList.decode(reader, reader.uint32());
          continue;
        }
        case 34: {
          if (tag !== 274) {
            break;
          }

          message.roleFace = RoleFace.decode(reader, reader.uint32());
          continue;
        }
        case 35: {
          if (tag !== 282) {
            break;
          }

          message.mapBookList = MapBookInfoList.decode(reader, reader.uint32());
          continue;
        }
        case 36: {
          if (tag !== 290) {
            break;
          }

          message.functionData = FunctionData.decode(reader, reader.uint32());
          continue;
        }
        case 37: {
          if (tag !== 298) {
            break;
          }

          message.antiInfo = AntiAddictionInfo.decode(reader, reader.uint32());
          continue;
        }
        case 38: {
          if (tag !== 306) {
            break;
          }

          message.monsterExploreList = MonsterExploreList.decode(reader, reader.uint32());
          continue;
        }
        case 39: {
          if (tag !== 314) {
            break;
          }

          message.showPieceData = ShowPieceData.decode(reader, reader.uint32());
          continue;
        }
        case 42: {
          if (tag !== 338) {
            break;
          }

          message.collectionBook = CollectionBook.decode(reader, reader.uint32());
          continue;
        }
        case 43: {
          if (tag !== 346) {
            break;
          }

          message.notGetProceedAwardTimes = NotGetProceedAwardInfo.decode(reader, reader.uint32());
          continue;
        }
        case 44: {
          if (tag !== 354) {
            break;
          }

          message.cookList = CookList.decode(reader, reader.uint32());
          continue;
        }
        case 45: {
          if (tag !== 362) {
            break;
          }

          message.refreshDataList = TimerRefreshDataList.decode(reader, reader.uint32());
          continue;
        }
        case 46: {
          if (tag !== 370) {
            break;
          }

          message.challengeDungeonInfo = ChallengeDungeonInfo.decode(reader, reader.uint32());
          continue;
        }
        case 47: {
          if (tag !== 378) {
            break;
          }

          message.syncAwardData = SyncAwardData.decode(reader, reader.uint32());
          continue;
        }
        case 48: {
          if (tag !== 386) {
            break;
          }

          message.seasonAchievementList = SeasonAchievementList.decode(reader, reader.uint32());
          continue;
        }
        case 49: {
          if (tag !== 394) {
            break;
          }

          message.seasonRankList = SeasonRankList.decode(reader, reader.uint32());
          continue;
        }
        case 50: {
          if (tag !== 402) {
            break;
          }

          message.seasonCenter = SeasonCenter.decode(reader, reader.uint32());
          continue;
        }
        case 51: {
          if (tag !== 410) {
            break;
          }

          message.personalZone = PersonalZone.decode(reader, reader.uint32());
          continue;
        }
        case 52: {
          if (tag !== 418) {
            break;
          }

          message.seasonMedalInfo = SeasonMedalInfo.decode(reader, reader.uint32());
          continue;
        }
        case 53: {
          if (tag !== 426) {
            break;
          }

          message.communityHomeInfo = CommunityHomeData.decode(reader, reader.uint32());
          continue;
        }
        case 54: {
          if (tag !== 434) {
            break;
          }

          message.seasonActivation = SeasonActivation.decode(reader, reader.uint32());
          continue;
        }
        case 55: {
          if (tag !== 442) {
            break;
          }

          message.slots = Slot.decode(reader, reader.uint32());
          continue;
        }
        case 56: {
          if (tag !== 450) {
            break;
          }

          message.monsterHuntInfo = MonsterHuntInfo.decode(reader, reader.uint32());
          continue;
        }
        case 57: {
          if (tag !== 458) {
            break;
          }

          message.mod = Mod.decode(reader, reader.uint32());
          continue;
        }
        case 58: {
          if (tag !== 466) {
            break;
          }

          message.worldEventMap = WorldEventMap.decode(reader, reader.uint32());
          continue;
        }
        case 59: {
          if (tag !== 474) {
            break;
          }

          message.fishSetting = FishSetting.decode(reader, reader.uint32());
          continue;
        }
        case 60: {
          if (tag !== 482) {
            break;
          }

          message.freightData = FreightData.decode(reader, reader.uint32());
          continue;
        }
        case 61: {
          if (tag !== 490) {
            break;
          }

          message.professionList = ProfessionList.decode(reader, reader.uint32());
          continue;
        }
        case 62: {
          if (tag !== 498) {
            break;
          }

          message.trialRoad = TrialRoad.decode(reader, reader.uint32());
          continue;
        }
        case 63: {
          if (tag !== 506) {
            break;
          }

          message.gashaData = GashaData.decode(reader, reader.uint32());
          continue;
        }
        case 64: {
          if (tag !== 514) {
            break;
          }

          message.shopData = ShopData.decode(reader, reader.uint32());
          continue;
        }
        case 65: {
          if (tag !== 522) {
            break;
          }

          message.personalWorldBossInfo = PersonalWorldBossInfo.decode(reader, reader.uint32());
          continue;
        }
        case 66: {
          if (tag !== 530) {
            break;
          }

          message.craftEnergy = CraftEnergyRecord.decode(reader, reader.uint32());
          continue;
        }
        case 67: {
          if (tag !== 538) {
            break;
          }

          message.weeklyTower = WeeklyTowerRecord.decode(reader, reader.uint32());
          continue;
        }
        case 68: {
          if (tag !== 546) {
            break;
          }

          message.cutSceneInfos = CutSceneInfos.decode(reader, reader.uint32());
          continue;
        }
        case 69: {
          if (tag !== 554) {
            break;
          }

          message.recommendPlayData = UserRecommendPlayData.decode(reader, reader.uint32());
          continue;
        }
        case 70: {
          if (tag !== 562) {
            break;
          }

          message.rideList = RideList.decode(reader, reader.uint32());
          continue;
        }
        case 71: {
          if (tag !== 570) {
            break;
          }

          message.payOrderList = PayOrderList.decode(reader, reader.uint32());
          continue;
        }
        case 72: {
          if (tag !== 578) {
            break;
          }

          message.lifeProfession = LifeProfession.decode(reader, reader.uint32());
          continue;
        }
        case 73: {
          if (tag !== 586) {
            break;
          }

          message.lifeProfessionWork = LifeProfessionWork.decode(reader, reader.uint32());
          continue;
        }
        case 74: {
          if (tag !== 594) {
            break;
          }

          message.userActivityList = UserActivityList.decode(reader, reader.uint32());
          continue;
        }
        case 75: {
          if (tag !== 602) {
            break;
          }

          message.playerRecord = PlayerRecord.decode(reader, reader.uint32());
          continue;
        }
        case 76: {
          if (tag !== 610) {
            break;
          }

          message.dropContainer = DropContainerInfo.decode(reader, reader.uint32());
          continue;
        }
        case 77: {
          if (tag !== 618) {
            break;
          }

          message.monthlyCard = MonthlyCard.decode(reader, reader.uint32());
          continue;
        }
        case 78: {
          if (tag !== 626) {
            break;
          }

          message.fashionBenefit = FashionBenefit.decode(reader, reader.uint32());
          continue;
        }
        case 79: {
          if (tag !== 634) {
            break;
          }

          message.itemCurrency = ItemCurrency.decode(reader, reader.uint32());
          continue;
        }
        case 80: {
          if (tag !== 642) {
            break;
          }

          message.privilegeEffectData = PrivilegeEffectData.decode(reader, reader.uint32());
          continue;
        }
        case 81: {
          if (tag !== 650) {
            break;
          }

          message.treasure = Treasure.decode(reader, reader.uint32());
          continue;
        }
        case 82: {
          if (tag !== 658) {
            break;
          }

          message.unlockEmojiData = UnlockEmojiData.decode(reader, reader.uint32());
          continue;
        }
        case 83: {
          if (tag !== 666) {
            break;
          }

          message.playerOrderComtainerInfo = PlayerOrderComtainerInfo.decode(reader, reader.uint32());
          continue;
        }
        case 84: {
          if (tag !== 674) {
            break;
          }

          message.playerBox = PlayerBox.decode(reader, reader.uint32());
          continue;
        }
        case 85: {
          if (tag !== 682) {
            break;
          }

          message.launchPrivilegeData = LaunchPrivilegeData.decode(reader, reader.uint32());
          continue;
        }
        case 86: {
          if (tag !== 690) {
            break;
          }

          message.battlePassData = BattlePassData.decode(reader, reader.uint32());
          continue;
        }
        case 87: {
          if (tag !== 698) {
            break;
          }

          message.rechargeData = RechargeData.decode(reader, reader.uint32());
          continue;
        }
        case 88: {
          if (tag !== 706) {
            break;
          }

          message.luckyValueMgr = LuckyValueMgr.decode(reader, reader.uint32());
          continue;
        }
        case 89: {
          if (tag !== 714) {
            break;
          }

          message.handbookData = HandbookData.decode(reader, reader.uint32());
          continue;
        }
        case 90: {
          if (tag !== 722) {
            break;
          }

          message.masterModeDungeonInfo = MasterModeDungeonInfo.decode(reader, reader.uint32());
          continue;
        }
        case 91: {
          if (tag !== 730) {
            break;
          }

          message.statisticsData = StatisticsData.decode(reader, reader.uint32());
          continue;
        }
        case 92: {
          if (tag !== 738) {
            break;
          }

          message.compenstionStatistics = CompensationStatistics.decode(reader, reader.uint32());
          continue;
        }
        case 93: {
          if (tag !== 746) {
            break;
          }

          message.bubbleActData = BubbleActData.decode(reader, reader.uint32());
          continue;
        }
        case 94: {
          if (tag !== 754) {
            break;
          }

          message.mailClaimedInfo = MailClaimedInfo.decode(reader, reader.uint32());
          continue;
        }
        case 95: {
          if (tag !== 762) {
            break;
          }

          message.newbieData = NewbieData.decode(reader, reader.uint32());
          continue;
        }
        case 96: {
          if (tag !== 770) {
            break;
          }

          message.fightPoint = FightPoint.decode(reader, reader.uint32());
          continue;
        }
        case 97: {
          if (tag !== 778) {
            break;
          }

          message.sign = SignInfo.decode(reader, reader.uint32());
          continue;
        }
        case 98: {
          if (tag !== 786) {
            break;
          }

          message.charStatisticsData = CharStatisticsData.decode(reader, reader.uint32());
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

  fromJSON(object: any): CharSerialize {
    return {
      charId: isSet(object.charId) ? Long.fromValue(object.charId) : Long.ZERO,
      charBase: isSet(object.charBase) ? CharBaseInfo.fromJSON(object.charBase) : undefined,
      sceneData: isSet(object.sceneData) ? SceneData.fromJSON(object.sceneData) : undefined,
      sceneLuaData: isSet(object.sceneLuaData) ? SceneLuaData.fromJSON(object.sceneLuaData) : undefined,
      pioneerData: isSet(object.pioneerData) ? PioneerData.fromJSON(object.pioneerData) : undefined,
      buffInfo: isSet(object.buffInfo) ? BuffDBInfo.fromJSON(object.buffInfo) : undefined,
      itemPackage: isSet(object.itemPackage) ? ItemPackage.fromJSON(object.itemPackage) : undefined,
      questList: isSet(object.questList) ? QuestDataList.fromJSON(object.questList) : undefined,
      settingData: isSet(object.settingData) ? SettingData.fromJSON(object.settingData) : undefined,
      miscInfo: isSet(object.miscInfo) ? MiscInfo.fromJSON(object.miscInfo) : undefined,
      exchangeItems: isSet(object.exchangeItems) ? ExchangeItem.fromJSON(object.exchangeItems) : undefined,
      equip: isSet(object.equip) ? EquipList.fromJSON(object.equip) : undefined,
      energyItem: isSet(object.energyItem) ? EnergyItem.fromJSON(object.energyItem) : undefined,
      mapData: isSet(object.mapData) ? MapData.fromJSON(object.mapData) : undefined,
      dungeonList: isSet(object.dungeonList) ? DungeonList.fromJSON(object.dungeonList) : undefined,
      attr: isSet(object.attr) ? UserFightAttr.fromJSON(object.attr) : undefined,
      fashion: isSet(object.fashion) ? FashionMgr.fromJSON(object.fashion) : undefined,
      profileList: isSet(object.profileList) ? ProfileList.fromJSON(object.profileList) : undefined,
      help: isSet(object.help) ? PlayHelper.fromJSON(object.help) : undefined,
      counterList: isSet(object.counterList) ? CounterList.fromJSON(object.counterList) : undefined,
      personalObj: isSet(object.personalObj) ? PersonalObject.fromJSON(object.personalObj) : undefined,
      roleLevel: isSet(object.roleLevel) ? RoleLevel.fromJSON(object.roleLevel) : undefined,
      pivot: isSet(object.pivot) ? Pivot.fromJSON(object.pivot) : undefined,
      transferPoint: isSet(object.transferPoint) ? TransferPoint.fromJSON(object.transferPoint) : undefined,
      planetMemory: isSet(object.planetMemory) ? PlanetMemory.fromJSON(object.planetMemory) : undefined,
      planetMemoryTarget: isSet(object.planetMemoryTarget)
        ? SeasonTarget.fromJSON(object.planetMemoryTarget)
        : undefined,
      redDot: isSet(object.redDot) ? RedDotData.fromJSON(object.redDot) : undefined,
      resonance: isSet(object.resonance) ? Resonance.fromJSON(object.resonance) : undefined,
      cutsState: isSet(object.cutsState) ? CutsState.fromJSON(object.cutsState) : undefined,
      investigateList: isSet(object.investigateList) ? InvestigateList.fromJSON(object.investigateList) : undefined,
      records: isSet(object.records) ? ParkourRecordList.fromJSON(object.records) : undefined,
      interaction: isSet(object.interaction) ? InteractionInfo.fromJSON(object.interaction) : undefined,
      seasonQuestList: isSet(object.seasonQuestList) ? SeasonQuestList.fromJSON(object.seasonQuestList) : undefined,
      roleFace: isSet(object.roleFace) ? RoleFace.fromJSON(object.roleFace) : undefined,
      mapBookList: isSet(object.mapBookList) ? MapBookInfoList.fromJSON(object.mapBookList) : undefined,
      functionData: isSet(object.functionData) ? FunctionData.fromJSON(object.functionData) : undefined,
      antiInfo: isSet(object.antiInfo) ? AntiAddictionInfo.fromJSON(object.antiInfo) : undefined,
      monsterExploreList: isSet(object.monsterExploreList)
        ? MonsterExploreList.fromJSON(object.monsterExploreList)
        : undefined,
      showPieceData: isSet(object.showPieceData) ? ShowPieceData.fromJSON(object.showPieceData) : undefined,
      collectionBook: isSet(object.collectionBook) ? CollectionBook.fromJSON(object.collectionBook) : undefined,
      notGetProceedAwardTimes: isSet(object.notGetProceedAwardTimes)
        ? NotGetProceedAwardInfo.fromJSON(object.notGetProceedAwardTimes)
        : undefined,
      cookList: isSet(object.cookList) ? CookList.fromJSON(object.cookList) : undefined,
      refreshDataList: isSet(object.refreshDataList)
        ? TimerRefreshDataList.fromJSON(object.refreshDataList)
        : undefined,
      challengeDungeonInfo: isSet(object.challengeDungeonInfo)
        ? ChallengeDungeonInfo.fromJSON(object.challengeDungeonInfo)
        : undefined,
      syncAwardData: isSet(object.syncAwardData) ? SyncAwardData.fromJSON(object.syncAwardData) : undefined,
      seasonAchievementList: isSet(object.seasonAchievementList)
        ? SeasonAchievementList.fromJSON(object.seasonAchievementList)
        : undefined,
      seasonRankList: isSet(object.seasonRankList) ? SeasonRankList.fromJSON(object.seasonRankList) : undefined,
      seasonCenter: isSet(object.seasonCenter) ? SeasonCenter.fromJSON(object.seasonCenter) : undefined,
      personalZone: isSet(object.personalZone) ? PersonalZone.fromJSON(object.personalZone) : undefined,
      seasonMedalInfo: isSet(object.seasonMedalInfo) ? SeasonMedalInfo.fromJSON(object.seasonMedalInfo) : undefined,
      communityHomeInfo: isSet(object.communityHomeInfo)
        ? CommunityHomeData.fromJSON(object.communityHomeInfo)
        : undefined,
      seasonActivation: isSet(object.seasonActivation) ? SeasonActivation.fromJSON(object.seasonActivation) : undefined,
      slots: isSet(object.slots) ? Slot.fromJSON(object.slots) : undefined,
      monsterHuntInfo: isSet(object.monsterHuntInfo) ? MonsterHuntInfo.fromJSON(object.monsterHuntInfo) : undefined,
      mod: isSet(object.mod) ? Mod.fromJSON(object.mod) : undefined,
      worldEventMap: isSet(object.worldEventMap) ? WorldEventMap.fromJSON(object.worldEventMap) : undefined,
      fishSetting: isSet(object.fishSetting) ? FishSetting.fromJSON(object.fishSetting) : undefined,
      freightData: isSet(object.freightData) ? FreightData.fromJSON(object.freightData) : undefined,
      professionList: isSet(object.professionList) ? ProfessionList.fromJSON(object.professionList) : undefined,
      trialRoad: isSet(object.trialRoad) ? TrialRoad.fromJSON(object.trialRoad) : undefined,
      gashaData: isSet(object.gashaData) ? GashaData.fromJSON(object.gashaData) : undefined,
      shopData: isSet(object.shopData) ? ShopData.fromJSON(object.shopData) : undefined,
      personalWorldBossInfo: isSet(object.personalWorldBossInfo)
        ? PersonalWorldBossInfo.fromJSON(object.personalWorldBossInfo)
        : undefined,
      craftEnergy: isSet(object.craftEnergy) ? CraftEnergyRecord.fromJSON(object.craftEnergy) : undefined,
      weeklyTower: isSet(object.weeklyTower) ? WeeklyTowerRecord.fromJSON(object.weeklyTower) : undefined,
      cutSceneInfos: isSet(object.cutSceneInfos) ? CutSceneInfos.fromJSON(object.cutSceneInfos) : undefined,
      recommendPlayData: isSet(object.recommendPlayData)
        ? UserRecommendPlayData.fromJSON(object.recommendPlayData)
        : undefined,
      rideList: isSet(object.rideList) ? RideList.fromJSON(object.rideList) : undefined,
      payOrderList: isSet(object.payOrderList) ? PayOrderList.fromJSON(object.payOrderList) : undefined,
      lifeProfession: isSet(object.lifeProfession) ? LifeProfession.fromJSON(object.lifeProfession) : undefined,
      lifeProfessionWork: isSet(object.lifeProfessionWork)
        ? LifeProfessionWork.fromJSON(object.lifeProfessionWork)
        : undefined,
      userActivityList: isSet(object.userActivityList) ? UserActivityList.fromJSON(object.userActivityList) : undefined,
      playerRecord: isSet(object.playerRecord) ? PlayerRecord.fromJSON(object.playerRecord) : undefined,
      dropContainer: isSet(object.dropContainer) ? DropContainerInfo.fromJSON(object.dropContainer) : undefined,
      monthlyCard: isSet(object.monthlyCard) ? MonthlyCard.fromJSON(object.monthlyCard) : undefined,
      fashionBenefit: isSet(object.fashionBenefit) ? FashionBenefit.fromJSON(object.fashionBenefit) : undefined,
      itemCurrency: isSet(object.itemCurrency) ? ItemCurrency.fromJSON(object.itemCurrency) : undefined,
      privilegeEffectData: isSet(object.privilegeEffectData)
        ? PrivilegeEffectData.fromJSON(object.privilegeEffectData)
        : undefined,
      treasure: isSet(object.treasure) ? Treasure.fromJSON(object.treasure) : undefined,
      unlockEmojiData: isSet(object.unlockEmojiData) ? UnlockEmojiData.fromJSON(object.unlockEmojiData) : undefined,
      playerOrderComtainerInfo: isSet(object.playerOrderComtainerInfo)
        ? PlayerOrderComtainerInfo.fromJSON(object.playerOrderComtainerInfo)
        : undefined,
      playerBox: isSet(object.playerBox) ? PlayerBox.fromJSON(object.playerBox) : undefined,
      launchPrivilegeData: isSet(object.launchPrivilegeData)
        ? LaunchPrivilegeData.fromJSON(object.launchPrivilegeData)
        : undefined,
      battlePassData: isSet(object.battlePassData) ? BattlePassData.fromJSON(object.battlePassData) : undefined,
      rechargeData: isSet(object.rechargeData) ? RechargeData.fromJSON(object.rechargeData) : undefined,
      luckyValueMgr: isSet(object.luckyValueMgr) ? LuckyValueMgr.fromJSON(object.luckyValueMgr) : undefined,
      handbookData: isSet(object.handbookData) ? HandbookData.fromJSON(object.handbookData) : undefined,
      masterModeDungeonInfo: isSet(object.masterModeDungeonInfo)
        ? MasterModeDungeonInfo.fromJSON(object.masterModeDungeonInfo)
        : undefined,
      statisticsData: isSet(object.statisticsData) ? StatisticsData.fromJSON(object.statisticsData) : undefined,
      compenstionStatistics: isSet(object.compenstionStatistics)
        ? CompensationStatistics.fromJSON(object.compenstionStatistics)
        : undefined,
      bubbleActData: isSet(object.bubbleActData) ? BubbleActData.fromJSON(object.bubbleActData) : undefined,
      mailClaimedInfo: isSet(object.mailClaimedInfo) ? MailClaimedInfo.fromJSON(object.mailClaimedInfo) : undefined,
      newbieData: isSet(object.newbieData) ? NewbieData.fromJSON(object.newbieData) : undefined,
      fightPoint: isSet(object.fightPoint) ? FightPoint.fromJSON(object.fightPoint) : undefined,
      sign: isSet(object.sign) ? SignInfo.fromJSON(object.sign) : undefined,
      charStatisticsData: isSet(object.charStatisticsData)
        ? CharStatisticsData.fromJSON(object.charStatisticsData)
        : undefined,
    };
  },

  toJSON(message: CharSerialize): unknown {
    const obj: any = {};
    if (!message.charId.equals(Long.ZERO)) {
      obj.charId = (message.charId || Long.ZERO).toString();
    }
    if (message.charBase !== undefined) {
      obj.charBase = CharBaseInfo.toJSON(message.charBase);
    }
    if (message.sceneData !== undefined) {
      obj.sceneData = SceneData.toJSON(message.sceneData);
    }
    if (message.sceneLuaData !== undefined) {
      obj.sceneLuaData = SceneLuaData.toJSON(message.sceneLuaData);
    }
    if (message.pioneerData !== undefined) {
      obj.pioneerData = PioneerData.toJSON(message.pioneerData);
    }
    if (message.buffInfo !== undefined) {
      obj.buffInfo = BuffDBInfo.toJSON(message.buffInfo);
    }
    if (message.itemPackage !== undefined) {
      obj.itemPackage = ItemPackage.toJSON(message.itemPackage);
    }
    if (message.questList !== undefined) {
      obj.questList = QuestDataList.toJSON(message.questList);
    }
    if (message.settingData !== undefined) {
      obj.settingData = SettingData.toJSON(message.settingData);
    }
    if (message.miscInfo !== undefined) {
      obj.miscInfo = MiscInfo.toJSON(message.miscInfo);
    }
    if (message.exchangeItems !== undefined) {
      obj.exchangeItems = ExchangeItem.toJSON(message.exchangeItems);
    }
    if (message.equip !== undefined) {
      obj.equip = EquipList.toJSON(message.equip);
    }
    if (message.energyItem !== undefined) {
      obj.energyItem = EnergyItem.toJSON(message.energyItem);
    }
    if (message.mapData !== undefined) {
      obj.mapData = MapData.toJSON(message.mapData);
    }
    if (message.dungeonList !== undefined) {
      obj.dungeonList = DungeonList.toJSON(message.dungeonList);
    }
    if (message.attr !== undefined) {
      obj.attr = UserFightAttr.toJSON(message.attr);
    }
    if (message.fashion !== undefined) {
      obj.fashion = FashionMgr.toJSON(message.fashion);
    }
    if (message.profileList !== undefined) {
      obj.profileList = ProfileList.toJSON(message.profileList);
    }
    if (message.help !== undefined) {
      obj.help = PlayHelper.toJSON(message.help);
    }
    if (message.counterList !== undefined) {
      obj.counterList = CounterList.toJSON(message.counterList);
    }
    if (message.personalObj !== undefined) {
      obj.personalObj = PersonalObject.toJSON(message.personalObj);
    }
    if (message.roleLevel !== undefined) {
      obj.roleLevel = RoleLevel.toJSON(message.roleLevel);
    }
    if (message.pivot !== undefined) {
      obj.pivot = Pivot.toJSON(message.pivot);
    }
    if (message.transferPoint !== undefined) {
      obj.transferPoint = TransferPoint.toJSON(message.transferPoint);
    }
    if (message.planetMemory !== undefined) {
      obj.planetMemory = PlanetMemory.toJSON(message.planetMemory);
    }
    if (message.planetMemoryTarget !== undefined) {
      obj.planetMemoryTarget = SeasonTarget.toJSON(message.planetMemoryTarget);
    }
    if (message.redDot !== undefined) {
      obj.redDot = RedDotData.toJSON(message.redDot);
    }
    if (message.resonance !== undefined) {
      obj.resonance = Resonance.toJSON(message.resonance);
    }
    if (message.cutsState !== undefined) {
      obj.cutsState = CutsState.toJSON(message.cutsState);
    }
    if (message.investigateList !== undefined) {
      obj.investigateList = InvestigateList.toJSON(message.investigateList);
    }
    if (message.records !== undefined) {
      obj.records = ParkourRecordList.toJSON(message.records);
    }
    if (message.interaction !== undefined) {
      obj.interaction = InteractionInfo.toJSON(message.interaction);
    }
    if (message.seasonQuestList !== undefined) {
      obj.seasonQuestList = SeasonQuestList.toJSON(message.seasonQuestList);
    }
    if (message.roleFace !== undefined) {
      obj.roleFace = RoleFace.toJSON(message.roleFace);
    }
    if (message.mapBookList !== undefined) {
      obj.mapBookList = MapBookInfoList.toJSON(message.mapBookList);
    }
    if (message.functionData !== undefined) {
      obj.functionData = FunctionData.toJSON(message.functionData);
    }
    if (message.antiInfo !== undefined) {
      obj.antiInfo = AntiAddictionInfo.toJSON(message.antiInfo);
    }
    if (message.monsterExploreList !== undefined) {
      obj.monsterExploreList = MonsterExploreList.toJSON(message.monsterExploreList);
    }
    if (message.showPieceData !== undefined) {
      obj.showPieceData = ShowPieceData.toJSON(message.showPieceData);
    }
    if (message.collectionBook !== undefined) {
      obj.collectionBook = CollectionBook.toJSON(message.collectionBook);
    }
    if (message.notGetProceedAwardTimes !== undefined) {
      obj.notGetProceedAwardTimes = NotGetProceedAwardInfo.toJSON(message.notGetProceedAwardTimes);
    }
    if (message.cookList !== undefined) {
      obj.cookList = CookList.toJSON(message.cookList);
    }
    if (message.refreshDataList !== undefined) {
      obj.refreshDataList = TimerRefreshDataList.toJSON(message.refreshDataList);
    }
    if (message.challengeDungeonInfo !== undefined) {
      obj.challengeDungeonInfo = ChallengeDungeonInfo.toJSON(message.challengeDungeonInfo);
    }
    if (message.syncAwardData !== undefined) {
      obj.syncAwardData = SyncAwardData.toJSON(message.syncAwardData);
    }
    if (message.seasonAchievementList !== undefined) {
      obj.seasonAchievementList = SeasonAchievementList.toJSON(message.seasonAchievementList);
    }
    if (message.seasonRankList !== undefined) {
      obj.seasonRankList = SeasonRankList.toJSON(message.seasonRankList);
    }
    if (message.seasonCenter !== undefined) {
      obj.seasonCenter = SeasonCenter.toJSON(message.seasonCenter);
    }
    if (message.personalZone !== undefined) {
      obj.personalZone = PersonalZone.toJSON(message.personalZone);
    }
    if (message.seasonMedalInfo !== undefined) {
      obj.seasonMedalInfo = SeasonMedalInfo.toJSON(message.seasonMedalInfo);
    }
    if (message.communityHomeInfo !== undefined) {
      obj.communityHomeInfo = CommunityHomeData.toJSON(message.communityHomeInfo);
    }
    if (message.seasonActivation !== undefined) {
      obj.seasonActivation = SeasonActivation.toJSON(message.seasonActivation);
    }
    if (message.slots !== undefined) {
      obj.slots = Slot.toJSON(message.slots);
    }
    if (message.monsterHuntInfo !== undefined) {
      obj.monsterHuntInfo = MonsterHuntInfo.toJSON(message.monsterHuntInfo);
    }
    if (message.mod !== undefined) {
      obj.mod = Mod.toJSON(message.mod);
    }
    if (message.worldEventMap !== undefined) {
      obj.worldEventMap = WorldEventMap.toJSON(message.worldEventMap);
    }
    if (message.fishSetting !== undefined) {
      obj.fishSetting = FishSetting.toJSON(message.fishSetting);
    }
    if (message.freightData !== undefined) {
      obj.freightData = FreightData.toJSON(message.freightData);
    }
    if (message.professionList !== undefined) {
      obj.professionList = ProfessionList.toJSON(message.professionList);
    }
    if (message.trialRoad !== undefined) {
      obj.trialRoad = TrialRoad.toJSON(message.trialRoad);
    }
    if (message.gashaData !== undefined) {
      obj.gashaData = GashaData.toJSON(message.gashaData);
    }
    if (message.shopData !== undefined) {
      obj.shopData = ShopData.toJSON(message.shopData);
    }
    if (message.personalWorldBossInfo !== undefined) {
      obj.personalWorldBossInfo = PersonalWorldBossInfo.toJSON(message.personalWorldBossInfo);
    }
    if (message.craftEnergy !== undefined) {
      obj.craftEnergy = CraftEnergyRecord.toJSON(message.craftEnergy);
    }
    if (message.weeklyTower !== undefined) {
      obj.weeklyTower = WeeklyTowerRecord.toJSON(message.weeklyTower);
    }
    if (message.cutSceneInfos !== undefined) {
      obj.cutSceneInfos = CutSceneInfos.toJSON(message.cutSceneInfos);
    }
    if (message.recommendPlayData !== undefined) {
      obj.recommendPlayData = UserRecommendPlayData.toJSON(message.recommendPlayData);
    }
    if (message.rideList !== undefined) {
      obj.rideList = RideList.toJSON(message.rideList);
    }
    if (message.payOrderList !== undefined) {
      obj.payOrderList = PayOrderList.toJSON(message.payOrderList);
    }
    if (message.lifeProfession !== undefined) {
      obj.lifeProfession = LifeProfession.toJSON(message.lifeProfession);
    }
    if (message.lifeProfessionWork !== undefined) {
      obj.lifeProfessionWork = LifeProfessionWork.toJSON(message.lifeProfessionWork);
    }
    if (message.userActivityList !== undefined) {
      obj.userActivityList = UserActivityList.toJSON(message.userActivityList);
    }
    if (message.playerRecord !== undefined) {
      obj.playerRecord = PlayerRecord.toJSON(message.playerRecord);
    }
    if (message.dropContainer !== undefined) {
      obj.dropContainer = DropContainerInfo.toJSON(message.dropContainer);
    }
    if (message.monthlyCard !== undefined) {
      obj.monthlyCard = MonthlyCard.toJSON(message.monthlyCard);
    }
    if (message.fashionBenefit !== undefined) {
      obj.fashionBenefit = FashionBenefit.toJSON(message.fashionBenefit);
    }
    if (message.itemCurrency !== undefined) {
      obj.itemCurrency = ItemCurrency.toJSON(message.itemCurrency);
    }
    if (message.privilegeEffectData !== undefined) {
      obj.privilegeEffectData = PrivilegeEffectData.toJSON(message.privilegeEffectData);
    }
    if (message.treasure !== undefined) {
      obj.treasure = Treasure.toJSON(message.treasure);
    }
    if (message.unlockEmojiData !== undefined) {
      obj.unlockEmojiData = UnlockEmojiData.toJSON(message.unlockEmojiData);
    }
    if (message.playerOrderComtainerInfo !== undefined) {
      obj.playerOrderComtainerInfo = PlayerOrderComtainerInfo.toJSON(message.playerOrderComtainerInfo);
    }
    if (message.playerBox !== undefined) {
      obj.playerBox = PlayerBox.toJSON(message.playerBox);
    }
    if (message.launchPrivilegeData !== undefined) {
      obj.launchPrivilegeData = LaunchPrivilegeData.toJSON(message.launchPrivilegeData);
    }
    if (message.battlePassData !== undefined) {
      obj.battlePassData = BattlePassData.toJSON(message.battlePassData);
    }
    if (message.rechargeData !== undefined) {
      obj.rechargeData = RechargeData.toJSON(message.rechargeData);
    }
    if (message.luckyValueMgr !== undefined) {
      obj.luckyValueMgr = LuckyValueMgr.toJSON(message.luckyValueMgr);
    }
    if (message.handbookData !== undefined) {
      obj.handbookData = HandbookData.toJSON(message.handbookData);
    }
    if (message.masterModeDungeonInfo !== undefined) {
      obj.masterModeDungeonInfo = MasterModeDungeonInfo.toJSON(message.masterModeDungeonInfo);
    }
    if (message.statisticsData !== undefined) {
      obj.statisticsData = StatisticsData.toJSON(message.statisticsData);
    }
    if (message.compenstionStatistics !== undefined) {
      obj.compenstionStatistics = CompensationStatistics.toJSON(message.compenstionStatistics);
    }
    if (message.bubbleActData !== undefined) {
      obj.bubbleActData = BubbleActData.toJSON(message.bubbleActData);
    }
    if (message.mailClaimedInfo !== undefined) {
      obj.mailClaimedInfo = MailClaimedInfo.toJSON(message.mailClaimedInfo);
    }
    if (message.newbieData !== undefined) {
      obj.newbieData = NewbieData.toJSON(message.newbieData);
    }
    if (message.fightPoint !== undefined) {
      obj.fightPoint = FightPoint.toJSON(message.fightPoint);
    }
    if (message.sign !== undefined) {
      obj.sign = SignInfo.toJSON(message.sign);
    }
    if (message.charStatisticsData !== undefined) {
      obj.charStatisticsData = CharStatisticsData.toJSON(message.charStatisticsData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CharSerialize>, I>>(base?: I): CharSerialize {
    return CharSerialize.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CharSerialize>, I>>(object: I): CharSerialize {
    const message = createBaseCharSerialize();
    message.charId = (object.charId !== undefined && object.charId !== null)
      ? Long.fromValue(object.charId)
      : Long.ZERO;
    message.charBase = (object.charBase !== undefined && object.charBase !== null)
      ? CharBaseInfo.fromPartial(object.charBase)
      : undefined;
    message.sceneData = (object.sceneData !== undefined && object.sceneData !== null)
      ? SceneData.fromPartial(object.sceneData)
      : undefined;
    message.sceneLuaData = (object.sceneLuaData !== undefined && object.sceneLuaData !== null)
      ? SceneLuaData.fromPartial(object.sceneLuaData)
      : undefined;
    message.pioneerData = (object.pioneerData !== undefined && object.pioneerData !== null)
      ? PioneerData.fromPartial(object.pioneerData)
      : undefined;
    message.buffInfo = (object.buffInfo !== undefined && object.buffInfo !== null)
      ? BuffDBInfo.fromPartial(object.buffInfo)
      : undefined;
    message.itemPackage = (object.itemPackage !== undefined && object.itemPackage !== null)
      ? ItemPackage.fromPartial(object.itemPackage)
      : undefined;
    message.questList = (object.questList !== undefined && object.questList !== null)
      ? QuestDataList.fromPartial(object.questList)
      : undefined;
    message.settingData = (object.settingData !== undefined && object.settingData !== null)
      ? SettingData.fromPartial(object.settingData)
      : undefined;
    message.miscInfo = (object.miscInfo !== undefined && object.miscInfo !== null)
      ? MiscInfo.fromPartial(object.miscInfo)
      : undefined;
    message.exchangeItems = (object.exchangeItems !== undefined && object.exchangeItems !== null)
      ? ExchangeItem.fromPartial(object.exchangeItems)
      : undefined;
    message.equip = (object.equip !== undefined && object.equip !== null)
      ? EquipList.fromPartial(object.equip)
      : undefined;
    message.energyItem = (object.energyItem !== undefined && object.energyItem !== null)
      ? EnergyItem.fromPartial(object.energyItem)
      : undefined;
    message.mapData = (object.mapData !== undefined && object.mapData !== null)
      ? MapData.fromPartial(object.mapData)
      : undefined;
    message.dungeonList = (object.dungeonList !== undefined && object.dungeonList !== null)
      ? DungeonList.fromPartial(object.dungeonList)
      : undefined;
    message.attr = (object.attr !== undefined && object.attr !== null)
      ? UserFightAttr.fromPartial(object.attr)
      : undefined;
    message.fashion = (object.fashion !== undefined && object.fashion !== null)
      ? FashionMgr.fromPartial(object.fashion)
      : undefined;
    message.profileList = (object.profileList !== undefined && object.profileList !== null)
      ? ProfileList.fromPartial(object.profileList)
      : undefined;
    message.help = (object.help !== undefined && object.help !== null)
      ? PlayHelper.fromPartial(object.help)
      : undefined;
    message.counterList = (object.counterList !== undefined && object.counterList !== null)
      ? CounterList.fromPartial(object.counterList)
      : undefined;
    message.personalObj = (object.personalObj !== undefined && object.personalObj !== null)
      ? PersonalObject.fromPartial(object.personalObj)
      : undefined;
    message.roleLevel = (object.roleLevel !== undefined && object.roleLevel !== null)
      ? RoleLevel.fromPartial(object.roleLevel)
      : undefined;
    message.pivot = (object.pivot !== undefined && object.pivot !== null) ? Pivot.fromPartial(object.pivot) : undefined;
    message.transferPoint = (object.transferPoint !== undefined && object.transferPoint !== null)
      ? TransferPoint.fromPartial(object.transferPoint)
      : undefined;
    message.planetMemory = (object.planetMemory !== undefined && object.planetMemory !== null)
      ? PlanetMemory.fromPartial(object.planetMemory)
      : undefined;
    message.planetMemoryTarget = (object.planetMemoryTarget !== undefined && object.planetMemoryTarget !== null)
      ? SeasonTarget.fromPartial(object.planetMemoryTarget)
      : undefined;
    message.redDot = (object.redDot !== undefined && object.redDot !== null)
      ? RedDotData.fromPartial(object.redDot)
      : undefined;
    message.resonance = (object.resonance !== undefined && object.resonance !== null)
      ? Resonance.fromPartial(object.resonance)
      : undefined;
    message.cutsState = (object.cutsState !== undefined && object.cutsState !== null)
      ? CutsState.fromPartial(object.cutsState)
      : undefined;
    message.investigateList = (object.investigateList !== undefined && object.investigateList !== null)
      ? InvestigateList.fromPartial(object.investigateList)
      : undefined;
    message.records = (object.records !== undefined && object.records !== null)
      ? ParkourRecordList.fromPartial(object.records)
      : undefined;
    message.interaction = (object.interaction !== undefined && object.interaction !== null)
      ? InteractionInfo.fromPartial(object.interaction)
      : undefined;
    message.seasonQuestList = (object.seasonQuestList !== undefined && object.seasonQuestList !== null)
      ? SeasonQuestList.fromPartial(object.seasonQuestList)
      : undefined;
    message.roleFace = (object.roleFace !== undefined && object.roleFace !== null)
      ? RoleFace.fromPartial(object.roleFace)
      : undefined;
    message.mapBookList = (object.mapBookList !== undefined && object.mapBookList !== null)
      ? MapBookInfoList.fromPartial(object.mapBookList)
      : undefined;
    message.functionData = (object.functionData !== undefined && object.functionData !== null)
      ? FunctionData.fromPartial(object.functionData)
      : undefined;
    message.antiInfo = (object.antiInfo !== undefined && object.antiInfo !== null)
      ? AntiAddictionInfo.fromPartial(object.antiInfo)
      : undefined;
    message.monsterExploreList = (object.monsterExploreList !== undefined && object.monsterExploreList !== null)
      ? MonsterExploreList.fromPartial(object.monsterExploreList)
      : undefined;
    message.showPieceData = (object.showPieceData !== undefined && object.showPieceData !== null)
      ? ShowPieceData.fromPartial(object.showPieceData)
      : undefined;
    message.collectionBook = (object.collectionBook !== undefined && object.collectionBook !== null)
      ? CollectionBook.fromPartial(object.collectionBook)
      : undefined;
    message.notGetProceedAwardTimes =
      (object.notGetProceedAwardTimes !== undefined && object.notGetProceedAwardTimes !== null)
        ? NotGetProceedAwardInfo.fromPartial(object.notGetProceedAwardTimes)
        : undefined;
    message.cookList = (object.cookList !== undefined && object.cookList !== null)
      ? CookList.fromPartial(object.cookList)
      : undefined;
    message.refreshDataList = (object.refreshDataList !== undefined && object.refreshDataList !== null)
      ? TimerRefreshDataList.fromPartial(object.refreshDataList)
      : undefined;
    message.challengeDungeonInfo = (object.challengeDungeonInfo !== undefined && object.challengeDungeonInfo !== null)
      ? ChallengeDungeonInfo.fromPartial(object.challengeDungeonInfo)
      : undefined;
    message.syncAwardData = (object.syncAwardData !== undefined && object.syncAwardData !== null)
      ? SyncAwardData.fromPartial(object.syncAwardData)
      : undefined;
    message.seasonAchievementList =
      (object.seasonAchievementList !== undefined && object.seasonAchievementList !== null)
        ? SeasonAchievementList.fromPartial(object.seasonAchievementList)
        : undefined;
    message.seasonRankList = (object.seasonRankList !== undefined && object.seasonRankList !== null)
      ? SeasonRankList.fromPartial(object.seasonRankList)
      : undefined;
    message.seasonCenter = (object.seasonCenter !== undefined && object.seasonCenter !== null)
      ? SeasonCenter.fromPartial(object.seasonCenter)
      : undefined;
    message.personalZone = (object.personalZone !== undefined && object.personalZone !== null)
      ? PersonalZone.fromPartial(object.personalZone)
      : undefined;
    message.seasonMedalInfo = (object.seasonMedalInfo !== undefined && object.seasonMedalInfo !== null)
      ? SeasonMedalInfo.fromPartial(object.seasonMedalInfo)
      : undefined;
    message.communityHomeInfo = (object.communityHomeInfo !== undefined && object.communityHomeInfo !== null)
      ? CommunityHomeData.fromPartial(object.communityHomeInfo)
      : undefined;
    message.seasonActivation = (object.seasonActivation !== undefined && object.seasonActivation !== null)
      ? SeasonActivation.fromPartial(object.seasonActivation)
      : undefined;
    message.slots = (object.slots !== undefined && object.slots !== null) ? Slot.fromPartial(object.slots) : undefined;
    message.monsterHuntInfo = (object.monsterHuntInfo !== undefined && object.monsterHuntInfo !== null)
      ? MonsterHuntInfo.fromPartial(object.monsterHuntInfo)
      : undefined;
    message.mod = (object.mod !== undefined && object.mod !== null) ? Mod.fromPartial(object.mod) : undefined;
    message.worldEventMap = (object.worldEventMap !== undefined && object.worldEventMap !== null)
      ? WorldEventMap.fromPartial(object.worldEventMap)
      : undefined;
    message.fishSetting = (object.fishSetting !== undefined && object.fishSetting !== null)
      ? FishSetting.fromPartial(object.fishSetting)
      : undefined;
    message.freightData = (object.freightData !== undefined && object.freightData !== null)
      ? FreightData.fromPartial(object.freightData)
      : undefined;
    message.professionList = (object.professionList !== undefined && object.professionList !== null)
      ? ProfessionList.fromPartial(object.professionList)
      : undefined;
    message.trialRoad = (object.trialRoad !== undefined && object.trialRoad !== null)
      ? TrialRoad.fromPartial(object.trialRoad)
      : undefined;
    message.gashaData = (object.gashaData !== undefined && object.gashaData !== null)
      ? GashaData.fromPartial(object.gashaData)
      : undefined;
    message.shopData = (object.shopData !== undefined && object.shopData !== null)
      ? ShopData.fromPartial(object.shopData)
      : undefined;
    message.personalWorldBossInfo =
      (object.personalWorldBossInfo !== undefined && object.personalWorldBossInfo !== null)
        ? PersonalWorldBossInfo.fromPartial(object.personalWorldBossInfo)
        : undefined;
    message.craftEnergy = (object.craftEnergy !== undefined && object.craftEnergy !== null)
      ? CraftEnergyRecord.fromPartial(object.craftEnergy)
      : undefined;
    message.weeklyTower = (object.weeklyTower !== undefined && object.weeklyTower !== null)
      ? WeeklyTowerRecord.fromPartial(object.weeklyTower)
      : undefined;
    message.cutSceneInfos = (object.cutSceneInfos !== undefined && object.cutSceneInfos !== null)
      ? CutSceneInfos.fromPartial(object.cutSceneInfos)
      : undefined;
    message.recommendPlayData = (object.recommendPlayData !== undefined && object.recommendPlayData !== null)
      ? UserRecommendPlayData.fromPartial(object.recommendPlayData)
      : undefined;
    message.rideList = (object.rideList !== undefined && object.rideList !== null)
      ? RideList.fromPartial(object.rideList)
      : undefined;
    message.payOrderList = (object.payOrderList !== undefined && object.payOrderList !== null)
      ? PayOrderList.fromPartial(object.payOrderList)
      : undefined;
    message.lifeProfession = (object.lifeProfession !== undefined && object.lifeProfession !== null)
      ? LifeProfession.fromPartial(object.lifeProfession)
      : undefined;
    message.lifeProfessionWork = (object.lifeProfessionWork !== undefined && object.lifeProfessionWork !== null)
      ? LifeProfessionWork.fromPartial(object.lifeProfessionWork)
      : undefined;
    message.userActivityList = (object.userActivityList !== undefined && object.userActivityList !== null)
      ? UserActivityList.fromPartial(object.userActivityList)
      : undefined;
    message.playerRecord = (object.playerRecord !== undefined && object.playerRecord !== null)
      ? PlayerRecord.fromPartial(object.playerRecord)
      : undefined;
    message.dropContainer = (object.dropContainer !== undefined && object.dropContainer !== null)
      ? DropContainerInfo.fromPartial(object.dropContainer)
      : undefined;
    message.monthlyCard = (object.monthlyCard !== undefined && object.monthlyCard !== null)
      ? MonthlyCard.fromPartial(object.monthlyCard)
      : undefined;
    message.fashionBenefit = (object.fashionBenefit !== undefined && object.fashionBenefit !== null)
      ? FashionBenefit.fromPartial(object.fashionBenefit)
      : undefined;
    message.itemCurrency = (object.itemCurrency !== undefined && object.itemCurrency !== null)
      ? ItemCurrency.fromPartial(object.itemCurrency)
      : undefined;
    message.privilegeEffectData = (object.privilegeEffectData !== undefined && object.privilegeEffectData !== null)
      ? PrivilegeEffectData.fromPartial(object.privilegeEffectData)
      : undefined;
    message.treasure = (object.treasure !== undefined && object.treasure !== null)
      ? Treasure.fromPartial(object.treasure)
      : undefined;
    message.unlockEmojiData = (object.unlockEmojiData !== undefined && object.unlockEmojiData !== null)
      ? UnlockEmojiData.fromPartial(object.unlockEmojiData)
      : undefined;
    message.playerOrderComtainerInfo =
      (object.playerOrderComtainerInfo !== undefined && object.playerOrderComtainerInfo !== null)
        ? PlayerOrderComtainerInfo.fromPartial(object.playerOrderComtainerInfo)
        : undefined;
    message.playerBox = (object.playerBox !== undefined && object.playerBox !== null)
      ? PlayerBox.fromPartial(object.playerBox)
      : undefined;
    message.launchPrivilegeData = (object.launchPrivilegeData !== undefined && object.launchPrivilegeData !== null)
      ? LaunchPrivilegeData.fromPartial(object.launchPrivilegeData)
      : undefined;
    message.battlePassData = (object.battlePassData !== undefined && object.battlePassData !== null)
      ? BattlePassData.fromPartial(object.battlePassData)
      : undefined;
    message.rechargeData = (object.rechargeData !== undefined && object.rechargeData !== null)
      ? RechargeData.fromPartial(object.rechargeData)
      : undefined;
    message.luckyValueMgr = (object.luckyValueMgr !== undefined && object.luckyValueMgr !== null)
      ? LuckyValueMgr.fromPartial(object.luckyValueMgr)
      : undefined;
    message.handbookData = (object.handbookData !== undefined && object.handbookData !== null)
      ? HandbookData.fromPartial(object.handbookData)
      : undefined;
    message.masterModeDungeonInfo =
      (object.masterModeDungeonInfo !== undefined && object.masterModeDungeonInfo !== null)
        ? MasterModeDungeonInfo.fromPartial(object.masterModeDungeonInfo)
        : undefined;
    message.statisticsData = (object.statisticsData !== undefined && object.statisticsData !== null)
      ? StatisticsData.fromPartial(object.statisticsData)
      : undefined;
    message.compenstionStatistics =
      (object.compenstionStatistics !== undefined && object.compenstionStatistics !== null)
        ? CompensationStatistics.fromPartial(object.compenstionStatistics)
        : undefined;
    message.bubbleActData = (object.bubbleActData !== undefined && object.bubbleActData !== null)
      ? BubbleActData.fromPartial(object.bubbleActData)
      : undefined;
    message.mailClaimedInfo = (object.mailClaimedInfo !== undefined && object.mailClaimedInfo !== null)
      ? MailClaimedInfo.fromPartial(object.mailClaimedInfo)
      : undefined;
    message.newbieData = (object.newbieData !== undefined && object.newbieData !== null)
      ? NewbieData.fromPartial(object.newbieData)
      : undefined;
    message.fightPoint = (object.fightPoint !== undefined && object.fightPoint !== null)
      ? FightPoint.fromPartial(object.fightPoint)
      : undefined;
    message.sign = (object.sign !== undefined && object.sign !== null) ? SignInfo.fromPartial(object.sign) : undefined;
    message.charStatisticsData = (object.charStatisticsData !== undefined && object.charStatisticsData !== null)
      ? CharStatisticsData.fromPartial(object.charStatisticsData)
      : undefined;
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
