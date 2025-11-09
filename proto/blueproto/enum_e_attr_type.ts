/* eslint-disable */

export const protobufPackage = "zproto";

export enum EAttrType {
  AttrUnknown = 0,
  AttrName = 1,
  AttrAimDir = 6,
  AttrScale = 8,
  AttrScaleAddRatio = 9,
  AttrId = 10,
  AttrState = 11,
  AttrCamp = 13,
  AttrLayer = 15,
  AttrIsBodySeparate = 16,
  AttrConfigUid = 17,
  AttrTableUid = 18,
  AttrVisualLayers = 19,
  AttrVisualLayer = 20,
  AttrVisualLayerUid = 21,
  AttrSummonFlag = 22,
  AttrTargetId = 30,
  AttrTargetPartId = 31,
  AttrIsBot = 32,
  AttrBasicFleshyType = 33,
  AttrDir = 50,
  AttrTargetDir = 51,
  AttrPos = 52,
  AttrTargetPos = 53,
  AttrSummonerPos = 61,
  AttrVelocity = 70,
  AttrMoveType = 71,
  AttrTurnVelocity = 72,
  AttrReviveCurProgressValue = 73,
  AttrReviveMaxProgressValue = 74,
  AttrUnbreakableLevel = 75,
  AttrStateTime = 77,
  AttrDeadType = 78,
  AttrMoveForce = 79,
  AttrSummonerId = 90,
  AttrTopSummonerId = 91,
  AttrIsUnderGround = 92,
  AttrOffset = 93,
  AttrInheritingType = 94,
  AttrFightSourceInfo = 95,
  AttrSkillId = 100,
  AttrSkillStage = 101,
  AttrInAccumulate = 102,
  AttrSkillLevel = 103,
  AttrCombatState = 104,
  AttrSkillStageBeginTime = 105,
  AttrSkillBeginTime = 106,
  AttrSkillSpeed = 107,
  AttrSkillStageNum = 108,
  AttrReplaceSkillList = 109,
  AttrFinalTargetDir = 110,
  AttrSkillUuid = 111,
  AttrIsCurStageNeedStopMove = 112,
  AttrSkillShowState = 113,
  AttrCombatStateTime = 114,
  AttrSwitchSkill = 115,
  AttrSkillLevelIdList = 116,
  AttrCantSilence = 117,
  AttrFinalTargetPos = 118,
  AttrTargetPartPos = 119,
  AttrDmgTargetPos = 120,
  AttrSkillRemodelLevel = 121,
  AttrIsInteractionActive = 150,
  AttrInteractionId = 151,
  AttrInteractionUuid = 153,
  AttrInteractionStage = 154,
  AttrInteractionSeat = 155,
  AttrInteractionInfo = 156,
  AttrActionTime = 170,
  AttrActionId = 171,
  AttrActionUpperTime = 172,
  AttrActionUpperId = 173,
  AttrActionSource = 174,
  AttrActionLongName = 175,
  AttrMountId = 176,
  AttrMountSize = 177,
  AttrAiming = 180,
  AttrGender = 181,
  AttrInBattleShow = 182,
  AttrFaceData = 183,
  AttrProfile = 184,
  AttrBodySize = 185,
  AttrRoleLevel = 186,
  AttrOfflineTime = 187,
  AttrClimbType = 188,
  AttrClimbNormal = 189,
  AttrClimbDir = 190,
  AttrClimbTime = 191,
  AttrPlaneId = 192,
  AttrCanSwitchLayer = 193,
  AttrTeamId = 194,
  AttrTeamMemberNums = 195,
  AttrSeasonLv = 196,
  AttrUseItemState = 197,
  AttrProfessionSwitchTime = 198,
  AttrProfessionHitType = 199,
  AttrEquipData = 200,
  AttrFashionData = 201,
  AttrAppearanceData = 202,
  AttrCommonSkillList = 205,
  AttrDeadTime = 206,
  AttrResourceLeft = 207,
  AttrResourceRight = 208,
  AttrShowPieceAttrList = 210,
  AttrSceneInteractionInfo = 211,
  AttrWeather = 212,
  AttrDayNightSwitch = 213,
  AttrRankId = 215,
  AttrEmoteTime = 216,
  AttrEmoteId = 217,
  AttrProfessionId = 220,
  AttrSwitchProfessionCD = 221,
  AttrProfessionSkinId = 222,
  AttrShowId = 225,
  AttrSlot = 226,
  AttrShowRankStar = 227,
  AttrFishingData = 228,
  AttrPersonalTitle = 229,
  AttrReviveCount = 230,
  AttrSceneAreaId = 231,
  AttrSkillSkinIds = 232,
  AttrToy = 234,
  AttrIsNewbie = 235,
  AttrMoveVersion = 236,
  AttrPersonalObjData = 237,
  AttrParkourStep = 240,
  AttrParkourFallenJump = 241,
  AttrParkourShimmyJump = 242,
  AttrParkourFiveJump = 243,
  AttrParkourKickWallJump = 244,
  AttrParkourPedalWall = 245,
  AttrParkourRun = 246,
  AttrParkourLazyJump = 247,
  AttrParkourLevitation = 248,
  AttrShimmyJumpPac = 249,
  AttrMaxShimmyJumpPac = 250,
  AttrJumpStep = 260,
  AttrJumpDir = 261,
  AttrVerVelocity = 262,
  AttrHorVelocity = 263,
  AttrJumpType = 264,
  AttrGravity = 265,
  AttrBounceJumpId = 266,
  AttrJumpExCount = 267,
  AttrRushDirection = 270,
  AttrBattleRushChargeBegin = 271,
  AttrRushMaxCount = 272,
  AttrRushCountClearInterval = 273,
  AttrRushCD = 274,
  AttrGlideVelocityH = 280,
  AttrGlideVelocityV = 281,
  AttrGlideRotAngle = 282,
  AttrWallNormal = 290,
  AttrPedalWallDir = 291,
  AttrPedalWallStage = 292,
  AttrInsightFlag = 300,
  AttrAttachVelocity = 310,
  AttrAttachVelocityDirX = 311,
  AttrAttachVelocityDirY = 312,
  AttrAttachVelocityDirZ = 313,
  AttrAttachVelocitySource = 314,
  AttrAttachSourceEntUuid = 315,
  AttrTunnelMoveStage = 320,
  AttrTunnelId = 321,
  AttrTunnelPointIndex = 322,
  AttrTunnelPointT = 323,
  AttrSwimStage = 330,
  AttrSceneName = 340,
  AttrSceneBasicId = 341,
  AttrSceneUuid = 342,
  AttrSceneChannel = 343,
  AttrSceneWeather = 344,
  AttrSceneLevelId = 345,
  AttrSceneDayNightSwitch = 346,
  AttrFireworkStartTimeSeconds = 347,
  AttrDeathCount = 348,
  AttrDeathSubTimeSecond = 349,
  AttrFireworkType = 350,
  AttrSceneLineKickUserEndTime = 351,
  AttrObjState = 360,
  AttrObjCounter = 361,
  AttrOwner = 362,
  AttrToyState = 363,
  AttrDynamicInteractionId = 365,
  AttrZoneParam = 370,
  AttrDataType = 373,
  AttrRotation = 374,
  AttrShape = 375,
  AttrGMGod = 380,
  AttrShapeshiftType = 390,
  AttrShapeshiftConfigId = 391,
  AttrShapeshiftProfessionId = 392,
  AttrShapeshiftSkillIds = 393,
  AttrShapeshiftReplaceAttr = 394,
  AttrNpcTest = 400,
  AttrHostId = 410,
  AttrEventId = 411,
  AttrEffectType = 412,
  AttrBulletTargetPos = 413,
  AttrRayCount = 416,
  AttrRotate = 420,
  AttrSummonGroup = 423,
  AttrSummonIndex = 424,
  AttrSummonGroupCount = 425,
  AttrBulletStage = 426,
  AttrBulletCanMove = 427,
  AttrBulletCantHit = 428,
  AttrBulletZoomType = 429,
  AttrBulletOrientationType = 430,
  AttrBanDestroyShow = 431,
  AttrBulletSpeedChangePCT = 432,
  AttrDirX = 433,
  AttrDirZ = 434,
  AttrTargetDirX = 435,
  AttrTargetDirZ = 436,
  AttrMaxExtinction = 440,
  AttrExtinction = 441,
  AttrMaxStunned = 442,
  AttrStunned = 443,
  AttrInOverdrive = 444,
  AttrIsLockStunned = 445,
  AttrTargetUuid = 450,
  AttrAlertIncreaseSpeed = 451,
  AttrAlertValue = 452,
  AttrStopBreakingBarTickingFlag = 453,
  AttrIsStopBehvTree = 454,
  AttrBreakingStage = 455,
  AttrFirstAttack = 456,
  AttrDungeonScoreExtraMultiple = 457,
  AttrDungeonScoreExtraAddValue = 458,
  AttrIsMonsterRankEnable = 459,
  AttrMonsterRank = 460,
  SupplementaryRewardIndex = 461,
  AttrHatedCharId = 471,
  AttrHatedJob = 472,
  AttrHatedName = 473,
  AttrHateList = 474,
  AttrDropType = 480,
  AttrItemId = 481,
  AttrAwardId = 482,
  AttrAni = 483,
  AttrItemData = 484,
  AttrInteractionActor = 485,
  AttrCollectCounter = 500,
  AttrTransferType = 510,
  AttrStiffType = 550,
  AttrStiffStage = 551,
  AttrStiffStageTime = 552,
  AttrStiffDir = 553,
  AttrStiffTime = 554,
  AttrStiffDownTime = 555,
  AttrStiffHangTime = 556,
  AttrStiffTarget = 557,
  AttrStiffFlowSpeed = 558,
  AttrStiffFlowOffset = 559,
  AttrStiffFlowRadius = 560,
  AttrStiffHorSpeed = 561,
  AttrStiffHorAccSpeed = 562,
  AttrStiffVerSpeedUp = 563,
  AttrStiffVerAccSpeedUp = 564,
  AttrStiffVerSpeedDown = 565,
  AttrStiffVerAccSpeedDown = 566,
  AttrStiffHorSpeedMinimum = 567,
  AttrStiffDamageWeight = 568,
  AttrTargetPosIsEnd = 569,
  AttrStiffThrowMoveInfo = 570,
  AttrStiffDamageStrength = 571,
  AttrRideId = 600,
  AttrIsCantRide = 601,
  AttrRideIndex = 602,
  AttrRideStage = 603,
  AttrRideType = 604,
  AttrRideUuid = 605,
  AttrRideAttachEnable = 606,
  AttrRideMagneticEnable = 607,
  AttrRideMagneticQueueId = 608,
  AttrIsForceRide = 609,
  AttrControllerUuid = 650,
  AttrPassengerList = 651,
  AttrIsSilence = 680,
  AttrIsConfine = 681,
  AttrRideSeatCantTransfer = 700,
  AttrCantSwim = 701,
  AttrGMCantHit = 702,
  AttrCantStiff = 703,
  AttrCantStiffBack = 704,
  AttrCantStiffDown = 705,
  AttrCantStiffAir = 706,
  AttrCantNormalAttack = 707,
  AttrCantSkill = 708,
  AttrCantMove = 709,
  AttrCantTurn = 710,
  AttrCantJump = 711,
  AttrCantRush = 712,
  AttrCantGravitational = 713,
  AttrCantStiffFlow = 714,
  AttrCantChangeProfession = 715,
  AttrCantInteraction = 716,
  AttrCantFallDamage = 717,
  AttrCanFlow = 718,
  AttrCanGlide = 719,
  AttrCanBeHit = 720,
  AttrCanLessenHP = 721,
  AttrCanIntoCombat = 722,
  AttrCantHit = 723,
  AttrCanBeHatredTarget = 724,
  AttrCanHitNum = 725,
  AttrCanHitObj = 726,
  AttrCanPathFinding = 727,
  AttrCantNormalAttackInput = 728,
  AttrCantSkillInput = 729,
  AttrCantMoveInput = 730,
  AttrCantJumpInput = 731,
  AttrCantRushInput = 732,
  AttrCantUseToy = 733,
  AttrTopSummonerSkillSkin = 750,
  AttrSummonSkillId = 751,
  AttrSceneServStateObjData = 800,
  AttrCommunityDataMap = 1001,
  AttrOwnership = 1002,
  AttrHomeId = 1003,
  DecorationInfo = 1004,
  AttrLevel = 10000,
  AttrGS = 10010,
  AttrLastMaxGS = 10020,
  AttrFightPoint = 10030,
  AttrFightPointTotal = 10031,
  AttrFightPointAdd = 10032,
  AttrFightPointExAdd = 10033,
  AttrFightPointPer = 10034,
  AttrFightPointExPer = 10035,
  AttrFightCapability = 10040,
  AttrFightCapabilityTotal = 10041,
  AttrFightCapabilityAdd = 10042,
  AttrFightCapabilityExAdd = 10043,
  AttrFightCapabilityPer = 10044,
  AttrFightCapabilityExPer = 10045,
  AttrSurvivalCapability = 10050,
  AttrSurvivalCapabilityTotal = 10051,
  AttrSurvivalCapabilityAdd = 10052,
  AttrSurvivalCapabilityExAdd = 10053,
  AttrSurvivalCapabilityPer = 10054,
  AttrSurvivalCapabilityExPer = 10055,
  AttrRankLevel = 10060,
  AttrWalkVelocity = 10200,
  AttrWalkVelocityTotal = 10201,
  AttrWalkVelocityAdd = 10202,
  AttrWalkVelocityExAdd = 10203,
  AttrWalkVelocityPer = 10204,
  AttrWalkVelocityExPer = 10205,
  AttrRunVelocity = 10210,
  AttrRunVelocityTotal = 10211,
  AttrRunVelocityAdd = 10212,
  AttrRunVelocityExAdd = 10213,
  AttrRunVelocityPer = 10214,
  AttrRunVelocityExPer = 10215,
  AttrDashVelocity = 10220,
  AttrDashVelocityTotal = 10221,
  AttrDashVelocityAdd = 10222,
  AttrDashVelocityExAdd = 10223,
  AttrDashVelocityPer = 10224,
  AttrDashVelocityExPer = 10225,
  AttrReviveTimeConsumePCT = 10230,
  AttrReviveTimeConsumePCTTotal = 10231,
  AttrReviveTimeConsumePCTAdd = 10232,
  AttrReviveTimeConsumePCTExAdd = 10233,
  AttrReviveTimeConsumePCTPer = 10234,
  AttrReviveTimeConsumePCTExPer = 10235,
  AttrRideWalkVelocity = 10240,
  AttrRideWalkVelocityTotal = 10241,
  AttrRideWalkVelocityAdd = 10242,
  AttrRideWalkVelocityExAdd = 10243,
  AttrRideWalkVelocityPer = 10244,
  AttrRideWalkVelocityExPer = 10245,
  AttrRideRunVelocity = 10250,
  AttrRideRunVelocityTotal = 10251,
  AttrRideRunVelocityAdd = 10252,
  AttrRideRunVelocityExAdd = 10253,
  AttrRideRunVelocityPer = 10254,
  AttrRideRunVelocityExPer = 10255,
  AttrRideDashVelocity = 10260,
  AttrRideDashVelocityTotal = 10261,
  AttrRideDashVelocityAdd = 10262,
  AttrRideDashVelocityExAdd = 10263,
  AttrRideDashVelocityPer = 10264,
  AttrRideDashVelocityExPer = 10265,
  AttrReviveInterTimeConsumePCT = 10270,
  AttrReviveInterTimeConsumePCTTotal = 10271,
  AttrReviveInterTimeConsumePCTAdd = 10272,
  AttrReviveInterTimeConsumePCTExAdd = 10273,
  AttrReviveInterTimeConsumePCTPer = 10274,
  AttrReviveInterTimeConsumePCTExPer = 10275,
  AttrStrength = 11010,
  AttrStrengthTotal = 11011,
  AttrStrengthAdd = 11012,
  AttrStrengthExAdd = 11013,
  AttrStrengthPer = 11014,
  AttrStrengthExPer = 11015,
  AttrIntelligence = 11020,
  AttrIntelligenceTotal = 11021,
  AttrIntelligenceAdd = 11022,
  AttrIntelligenceExAdd = 11023,
  AttrIntelligencePer = 11024,
  AttrIntelligenceExPer = 11025,
  AttrDexterity = 11030,
  AttrDexterityTotal = 11031,
  AttrDexterityAdd = 11032,
  AttrDexterityExAdd = 11033,
  AttrDexterityPer = 11034,
  AttrDexterityExPer = 11035,
  AttrVitality = 11040,
  AttrVitalityTotal = 11041,
  AttrVitalityAdd = 11042,
  AttrVitalityExAdd = 11043,
  AttrVitalityPer = 11044,
  AttrVitalityExPer = 11045,
  AttrCri = 11110,
  AttrCriTotal = 11111,
  AttrCriAdd = 11112,
  AttrCriExAdd = 11113,
  AttrCriPer = 11114,
  AttrCriExPer = 11115,
  AttrHaste = 11120,
  AttrHasteTotal = 11121,
  AttrHasteAdd = 11122,
  AttrHasteExAdd = 11123,
  AttrHastePer = 11124,
  AttrHasteExPer = 11125,
  AttrLuck = 11130,
  AttrLuckTotal = 11131,
  AttrLuckAdd = 11132,
  AttrLuckExAdd = 11133,
  AttrLuckPer = 11134,
  AttrLuckExPer = 11135,
  AttrMastery = 11140,
  AttrMasteryTotal = 11141,
  AttrMasteryAdd = 11142,
  AttrMasteryExAdd = 11143,
  AttrMasteryPer = 11144,
  AttrMasteryExPer = 11145,
  AttrVersatility = 11150,
  AttrVersatilityTotal = 11151,
  AttrVersatilityAdd = 11152,
  AttrVersatilityExAdd = 11153,
  AttrVersatilityPer = 11154,
  AttrVersatilityExPer = 11155,
  AttrHit = 11160,
  AttrHitTotal = 11161,
  AttrHitAdd = 11162,
  AttrHitExAdd = 11163,
  AttrHitPer = 11164,
  AttrHitExPer = 11165,
  AttrBlock = 11170,
  AttrBlockTotal = 11171,
  AttrBlockAdd = 11172,
  AttrBlockExAdd = 11173,
  AttrBlockPer = 11174,
  AttrBlockExPer = 11175,
  AttrHp = 11310,
  AttrMaxHp = 11320,
  AttrMaxHpTotal = 11321,
  AttrMaxHpAdd = 11322,
  AttrMaxHpExAdd = 11323,
  AttrMaxHpPer = 11324,
  AttrMaxHpExPer = 11325,
  AttrAttack = 11330,
  AttrAttackTotal = 11331,
  AttrAttackAdd = 11332,
  AttrAttackExAdd = 11333,
  AttrAttackPer = 11334,
  AttrAttackExPer = 11335,
  AttrMAttack = 11340,
  AttrMAttackTotal = 11341,
  AttrMAttackAdd = 11342,
  AttrMAttackExAdd = 11343,
  AttrMAttackPer = 11344,
  AttrMAttackExPer = 11345,
  AttrDefense = 11350,
  AttrDefenseTotal = 11351,
  AttrDefenseAdd = 11352,
  AttrDefenseExAdd = 11353,
  AttrDefensePer = 11354,
  AttrDefenseExPer = 11355,
  AttrMDefense = 11360,
  AttrMDefenseTotal = 11361,
  AttrMDefenseAdd = 11362,
  AttrMDefenseExAdd = 11363,
  AttrMDefensePer = 11364,
  AttrMDefenseExPer = 11365,
  AttrIgnoreDefense = 11370,
  AttrIgnoreDefenseTotal = 11371,
  AttrIgnoreDefenseAdd = 11372,
  AttrIgnoreDefenseExAdd = 11373,
  AttrIgnoreDefensePer = 11374,
  AttrIgnoreDefenseExPer = 11375,
  AttrIgnoreMDefense = 11380,
  AttrIgnoreMDefenseTotal = 11381,
  AttrIgnoreMDefenseAdd = 11382,
  AttrIgnoreMDefenseExAdd = 11383,
  AttrIgnoreMDefensePer = 11384,
  AttrIgnoreMDefenseExPer = 11385,
  AttrIgnoreDefensePCT = 11390,
  AttrIgnoreDefensePCTTotal = 11391,
  AttrIgnoreDefensePCTAdd = 11392,
  AttrIgnoreDefensePCTExAdd = 11393,
  AttrIgnoreDefensePCTPer = 11394,
  AttrIgnoreDefensePCTExPer = 11395,
  AttrIgnoreMDefensePCT = 11400,
  AttrIgnoreMDefensePCTTotal = 11401,
  AttrIgnoreMDefensePCTAdd = 11402,
  AttrIgnoreMDefensePCTExAdd = 11403,
  AttrIgnoreMDefensePCTPer = 11404,
  AttrIgnoreMDefensePCTExPer = 11405,
  AttrRefineAttack = 11410,
  AttrRefineAttackTotal = 11411,
  AttrRefineAttackAdd = 11412,
  AttrRefineAttackExAdd = 11413,
  AttrRefineAttackPer = 11414,
  AttrRefineAttackExPer = 11415,
  AttrRefineDefense = 11420,
  AttrRefineDefenseTotal = 11421,
  AttrRefineDefenseAdd = 11422,
  AttrRefineDefenseExAdd = 11423,
  AttrRefineDefensePer = 11424,
  AttrRefineDefenseExPer = 11425,
  AttrRefineMAttack = 11430,
  AttrRefineMAttackTotal = 11431,
  AttrRefineMAttackAdd = 11432,
  AttrRefineMAttackExAdd = 11433,
  AttrRefineMAttackPer = 11434,
  AttrRefineMAttackExPer = 11435,
  AttrElementAtk = 11500,
  AttrElementAtkTotal = 11501,
  AttrElementAtkAdd = 11502,
  AttrElementAtkExAdd = 11503,
  AttrElementAtkPer = 11504,
  AttrElementAtkExPer = 11505,
  AttrFireAtk = 11510,
  AttrFireAtkTotal = 11511,
  AttrFireAtkAdd = 11512,
  AttrFireAtkExAdd = 11513,
  AttrFireAtkPer = 11514,
  AttrFireAtkExPer = 11515,
  AttrWaterAtk = 11520,
  AttrWaterAtkTotal = 11521,
  AttrWaterAtkAdd = 11522,
  AttrWaterAtkExAdd = 11523,
  AttrWaterAtkPer = 11524,
  AttrWaterAtkExPer = 11525,
  AttrWoodAtk = 11530,
  AttrWoodAtkTotal = 11531,
  AttrWoodAtkAdd = 11532,
  AttrWoodAtkExAdd = 11533,
  AttrWoodAtkPer = 11534,
  AttrWoodAtkExPer = 11535,
  AttrElectricityAtk = 11540,
  AttrElectricityAtkTotal = 11541,
  AttrElectricityAtkAdd = 11542,
  AttrElectricityAtkExAdd = 11543,
  AttrElectricityAtkPer = 11544,
  AttrElectricityAtkExPer = 11545,
  AttrWindAtk = 11550,
  AttrWindAtkTotal = 11551,
  AttrWindAtkAdd = 11552,
  AttrWindAtkExAdd = 11553,
  AttrWindAtkPer = 11554,
  AttrWindAtkExPer = 11555,
  AttrRockAtk = 11560,
  AttrRockAtkTotal = 11561,
  AttrRockAtkAdd = 11562,
  AttrRockAtkExAdd = 11563,
  AttrRockAtkPer = 11564,
  AttrRockAtkExPer = 11565,
  AttrLightAtk = 11570,
  AttrLightAtkTotal = 11571,
  AttrLightAtkAdd = 11572,
  AttrLightAtkExAdd = 11573,
  AttrLightAtkPer = 11574,
  AttrLightAtkExPer = 11575,
  AttrDarkAtk = 11580,
  AttrDarkAtkTotal = 11581,
  AttrDarkAtkAdd = 11582,
  AttrDarkAtkExAdd = 11583,
  AttrDarkAtkPer = 11584,
  AttrDarkAtkExPer = 11585,
  AttrCrit = 11710,
  AttrCritTotal = 11711,
  AttrCritAdd = 11712,
  AttrCritExAdd = 11713,
  AttrCritPer = 11714,
  AttrCritExPer = 11715,
  AttrAttackSpeedPCT = 11720,
  AttrAttackSpeedPCTTotal = 11721,
  AttrAttackSpeedPCTAdd = 11722,
  AttrAttackSpeedPCTExAdd = 11723,
  AttrAttackSpeedPCTPer = 11724,
  AttrAttackSpeedPCTExPer = 11725,
  AttrCastSpeedPCT = 11730,
  AttrCastSpeedPCTTotal = 11731,
  AttrCastSpeedPCTAdd = 11732,
  AttrCastSpeedPCTExAdd = 11733,
  AttrCastSpeedPCTPer = 11734,
  AttrCastSpeedPCTExPer = 11735,
  AttrChargeSpeedPCT = 11740,
  AttrChargeSpeedPCTTotal = 11741,
  AttrChargeSpeedPCTAdd = 11742,
  AttrChargeSpeedPCTExAdd = 11743,
  AttrChargeSpeedPCTPer = 11744,
  AttrChargeSpeedPCTExPer = 11745,
  AttrSkillCD = 11750,
  AttrSkillCDTotal = 11751,
  AttrSkillCDAdd = 11752,
  AttrSkillCDExAdd = 11753,
  AttrSkillCDPer = 11754,
  AttrSkillCDExPer = 11755,
  AttrSkillCDPCT = 11760,
  AttrSkillCDPCTTotal = 11761,
  AttrSkillCDPCTAdd = 11762,
  AttrSkillCDPCTExAdd = 11763,
  AttrSkillCDPCTPer = 11764,
  AttrSkillCDPCTExPer = 11765,
  AttrDotTime = 11770,
  AttrDotTimeTotal = 11771,
  AttrDotTimeAdd = 11772,
  AttrDotTimeExAdd = 11773,
  AttrDotTimePer = 11774,
  AttrDotTimeExPer = 11775,
  AttrLuckyStrikeProb = 11780,
  AttrLuckyStrikeProbTotal = 11781,
  AttrLuckyStrikeProbAdd = 11782,
  AttrLuckyStrikeProbExAdd = 11783,
  AttrLuckyStrikeProbPer = 11784,
  AttrLuckyStrikeProbExPer = 11785,
  AttrHeal = 11790,
  AttrHealTotal = 11791,
  AttrHealAdd = 11792,
  AttrHealExAdd = 11793,
  AttrHealPer = 11794,
  AttrHealExPer = 11795,
  AttrHealed = 11800,
  AttrHealedTotal = 11801,
  AttrHealedAdd = 11802,
  AttrHealedExAdd = 11803,
  AttrHealedPer = 11804,
  AttrHealedExPer = 11805,
  AttrShieldAddPCT = 11810,
  AttrShieldAddPCTTotal = 11811,
  AttrShieldAddPCTAdd = 11812,
  AttrShieldAddPCTExAdd = 11813,
  AttrShieldAddPCTPer = 11814,
  AttrShieldAddPCTExPer = 11815,
  AttrShieldGainPCT = 11820,
  AttrShieldGainPCTTotal = 11821,
  AttrShieldGainPCTAdd = 11822,
  AttrShieldGainPCTExAdd = 11823,
  AttrShieldGainPCTPer = 11824,
  AttrShieldGainPCTExPer = 11825,
  AttrStunnedDamagePCT = 11830,
  AttrStunnedDamagePCTTotal = 11831,
  AttrStunnedDamagePCTAdd = 11832,
  AttrStunnedDamagePCTExAdd = 11833,
  AttrStunnedDamagePCTPer = 11834,
  AttrStunnedDamagePCTExPer = 11835,
  AttrExtDamInc = 11840,
  AttrExtDamIncTotal = 11841,
  AttrExtDamIncAdd = 11842,
  AttrExtDamIncExAdd = 11843,
  AttrExtDamIncPer = 11844,
  AttrExtDamIncExPer = 11845,
  AttrExtDamRes = 11850,
  AttrExtDamResTotal = 11851,
  AttrExtDamResAdd = 11852,
  AttrExtDamResExAdd = 11853,
  AttrExtDamResPer = 11854,
  AttrExtDamResExPer = 11855,
  AttrDpsOwnEffectStr = 11860,
  AttrDpsOwnEffectStrTotal = 11861,
  AttrDpsOwnEffectStrAdd = 11862,
  AttrDpsOwnEffectStrExAdd = 11863,
  AttrDpsOwnEffectStrPer = 11864,
  AttrDpsOwnEffectStrExPer = 11865,
  AttrRainbowDamage = 11870,
  AttrRainbowDamageTotal = 11871,
  AttrRainbowDamageAdd = 11872,
  AttrRainbowDamageExAdd = 11873,
  AttrRainbowDamagePer = 11874,
  AttrRainbowDamageExPer = 11875,
  AttrSuppressDamInc = 11880,
  AttrSuppressDamIncTotal = 11881,
  AttrSuppressDamIncAdd = 11882,
  AttrSuppressDamIncExAdd = 11883,
  AttrSuppressDamIncPer = 11884,
  AttrSuppressDamIncExPer = 11885,
  AttrSuppressDamRes = 11890,
  AttrSuppressDamResTotal = 11891,
  AttrSuppressDamResAdd = 11892,
  AttrSuppressDamResExAdd = 11893,
  AttrSuppressDamResPer = 11894,
  AttrSuppressDamResExPer = 11895,
  AttrInspirePct = 11900,
  AttrInspirePctTotal = 11901,
  AttrInspirePctAdd = 11902,
  AttrInspirePctExAdd = 11903,
  AttrInspirePctPer = 11904,
  AttrInspirePctExPer = 11905,
  AttrHateRatePTC = 11910,
  AttrHateRatePTCTotal = 11911,
  AttrHateRatePTCAdd = 11912,
  AttrHateRatePTCExAdd = 11913,
  AttrHateRatePTCPer = 11914,
  AttrHateRatePTCExPer = 11915,
  AttrHastePct = 11930,
  AttrHastePctTotal = 11931,
  AttrHastePctAdd = 11932,
  AttrHastePctExAdd = 11933,
  AttrHastePctPer = 11934,
  AttrHastePctExPer = 11935,
  AttrMasteryPct = 11940,
  AttrMasteryPctTotal = 11941,
  AttrMasteryPctAdd = 11942,
  AttrMasteryPctExAdd = 11943,
  AttrMasteryPctPer = 11944,
  AttrMasteryPctExPer = 11945,
  AttrVersatilityPct = 11950,
  AttrVersatilityPctTotal = 11951,
  AttrVersatilityPctAdd = 11952,
  AttrVersatilityPctExAdd = 11953,
  AttrVersatilityPctPer = 11954,
  AttrVersatilityPctExPer = 11955,
  AttrCdAcceleratePct = 11960,
  AttrCdAcceleratePctTotal = 11961,
  AttrCdAcceleratePctAdd = 11962,
  AttrCdAcceleratePctExAdd = 11963,
  AttrCdAcceleratePctPer = 11964,
  AttrCdAcceleratePctExPer = 11965,
  AttrBlockPct = 11970,
  AttrBlockPctTotal = 11971,
  AttrBlockPctAdd = 11972,
  AttrBlockPctExAdd = 11973,
  AttrBlockPctPer = 11974,
  AttrBlockPctExPer = 11975,
  AttrFightResCdSpeedPct = 11980,
  AttrFightResCdSpeedPctTotal = 11981,
  AttrFightResCdSpeedPctAdd = 11982,
  AttrFightResCdSpeedPctExAdd = 11983,
  AttrFightResCdSpeedPctPer = 11984,
  AttrFightResCdSpeedPctExPer = 11985,
  AttrPetAttackSpeedPCT = 11990,
  AttrPetAttackSpeedPCTTotal = 11991,
  AttrPetAttackSpeedPCTAdd = 11992,
  AttrPetAttackSpeedPCTExAdd = 11993,
  AttrPetAttackSpeedPCTPer = 11994,
  AttrPetAttackSpeedPCTExPer = 11995,
  AttrCritDamage = 12510,
  AttrCritDamageTotal = 12511,
  AttrCritDamageAdd = 12512,
  AttrCritDamageExAdd = 12513,
  AttrCritDamagePer = 12514,
  AttrCritDamageExPer = 12515,
  AttrCritDamageRes = 12520,
  AttrCritDamageResTotal = 12521,
  AttrCritDamageResAdd = 12522,
  AttrCritDamageResExAdd = 12523,
  AttrCritDamageResPer = 12524,
  AttrCritDamageResExPer = 12525,
  AttrLuckDamInc = 12530,
  AttrLuckDamIncTotal = 12531,
  AttrLuckDamIncAdd = 12532,
  AttrLuckDamIncExAdd = 12533,
  AttrLuckDamIncPer = 12534,
  AttrLuckDamIncExPer = 12535,
  AttrBlockDamRes = 12540,
  AttrBlockDamResTotal = 12541,
  AttrBlockDamResAdd = 12542,
  AttrBlockDamResExAdd = 12543,
  AttrBlockDamResPer = 12544,
  AttrBlockDamResExPer = 12545,
  AttrDamInc = 12550,
  AttrDamIncTotal = 12551,
  AttrDamIncAdd = 12552,
  AttrDamIncExAdd = 12553,
  AttrDamIncPer = 12554,
  AttrDamIncExPer = 12555,
  AttrDamRes = 12560,
  AttrDamResTotal = 12561,
  AttrDamResAdd = 12562,
  AttrDamResExAdd = 12563,
  AttrDamResPer = 12564,
  AttrDamResExPer = 12565,
  AttrMdamInc = 12570,
  AttrMdamIncTotal = 12571,
  AttrMdamIncAdd = 12572,
  AttrMdamIncExAdd = 12573,
  AttrMdamIncPer = 12574,
  AttrMdamIncExPer = 12575,
  AttrMdamRes = 12580,
  AttrMdamResTotal = 12581,
  AttrMdamResAdd = 12582,
  AttrMdamResExAdd = 12583,
  AttrMdamResPer = 12584,
  AttrMdamResExPer = 12585,
  AttrNearDamage = 12590,
  AttrNearDamageTotal = 12591,
  AttrNearDamageAdd = 12592,
  AttrNearDamageExAdd = 12593,
  AttrNearDamagePer = 12594,
  AttrNearDamageExPer = 12595,
  AttrNearDamageReduction = 12600,
  AttrNearDamageReductionTotal = 12601,
  AttrNearDamageReductionAdd = 12602,
  AttrNearDamageReductionExAdd = 12603,
  AttrNearDamageReductionPer = 12604,
  AttrNearDamageReductionExPer = 12605,
  AttrFarDamage = 12610,
  AttrFarDamageTotal = 12611,
  AttrFarDamageAdd = 12612,
  AttrFarDamageExAdd = 12613,
  AttrFarDamagePer = 12614,
  AttrFarDamageExPer = 12615,
  AttrFarDamageReduction = 12620,
  AttrFarDamageReductionTotal = 12621,
  AttrFarDamageReductionAdd = 12622,
  AttrFarDamageReductionExAdd = 12623,
  AttrFarDamageReductionPer = 12624,
  AttrFarDamageReductionExPer = 12625,
  AttrBossDamInc = 12630,
  AttrBossDamIncTotal = 12631,
  AttrBossDamIncAdd = 12632,
  AttrBossDamIncExAdd = 12633,
  AttrBossDamIncPer = 12634,
  AttrBossDamIncExPer = 12635,
  AttrBossDamRes = 12640,
  AttrBossDamResTotal = 12641,
  AttrBossDamResAdd = 12642,
  AttrBossDamResExAdd = 12643,
  AttrBossDamResPer = 12644,
  AttrBossDamResExPer = 12645,
  AttrShieldDamagePCT = 12650,
  AttrShieldDamagePCTTotal = 12651,
  AttrShieldDamagePCTAdd = 12652,
  AttrShieldDamagePCTExAdd = 12653,
  AttrShieldDamagePCTPer = 12654,
  AttrShieldDamagePCTExPer = 12655,
  AttrShieldDamageReductionPCT = 12660,
  AttrShieldDamageReductionPCTTotal = 12661,
  AttrShieldDamageReductionPCTAdd = 12662,
  AttrShieldDamageReductionPCTExAdd = 12663,
  AttrShieldDamageReductionPCTPer = 12664,
  AttrShieldDamageReductionPCTExPer = 12665,
  AttrOtherDamInc = 12670,
  AttrOtherDamIncTotal = 12671,
  AttrOtherDamIncAdd = 12672,
  AttrOtherDamIncExAdd = 12673,
  AttrOtherDamIncTPer = 12674,
  AttrOtherDamIncExPer = 12675,
  AttrOtherDamRes = 12680,
  AttrOtherDamResTotal = 12681,
  AttrOtherDamResAdd = 12682,
  AttrOtherDamResExAdd = 12683,
  AttrOtherDamResTPer = 12684,
  AttrOtherDamResExPer = 12685,
  AttrSeasonDamInc = 12690,
  AttrSeasonDamIncTotal = 12691,
  AttrSeasonDamIncAdd = 12692,
  AttrSeasonDamIncExAdd = 12693,
  AttrSeasonDamIncTPer = 12694,
  AttrSeasonDamIncExPer = 12695,
  AttrSeasonDamRes = 12700,
  AttrSeasonDamResTotal = 12701,
  AttrSeasonDamResAdd = 12702,
  AttrSeasonDamResExAdd = 12703,
  AttrSeasonDamResTPer = 12704,
  AttrSeasonDamResExPer = 12705,
  AttrMultipliesDamPct = 12710,
  AttrMultipliesDamPctTotal = 12711,
  AttrMultipliesDamPctAdd = 12712,
  AttrMultipliesDamPctExAdd = 12713,
  AttrMultipliesDamPctTPer = 12714,
  AttrMultipliesDamPctExPer = 12715,
  AttrLuckHealInc = 12720,
  AttrLuckHealIncTotal = 12721,
  AttrLuckHealIncAdd = 12722,
  AttrLuckHealIncExAdd = 12723,
  AttrLuckHealIncPer = 12724,
  AttrLuckHealIncExPer = 12725,
  AttrPetDamInc = 12730,
  AttrPetDamIncTotal = 12731,
  AttrPetDamIncAdd = 12732,
  AttrPetDamIncExAdd = 12733,
  AttrPetDamIncPer = 12734,
  AttrPetDamIncExPer = 12735,
  AttrCritHeal = 12740,
  AttrCritHealTotal = 12741,
  AttrCritHealAdd = 12742,
  AttrCritHealExAdd = 12743,
  AttrCritHealPer = 12744,
  AttrCritHealExPer = 12745,
  AttrSpDamInc = 12750,
  AttrSpDamIncTotal = 12751,
  AttrSpDamIncAdd = 12752,
  AttrSpDamIncExAdd = 12753,
  AttrSpDamIncPer = 12754,
  AttrSpDamIncExPer = 12755,
  AttrSpDamRes = 12760,
  AttrSpDamResTotal = 12761,
  AttrSpDamResAdd = 12762,
  AttrSpDamResExAdd = 12763,
  AttrSpDamResPer = 12764,
  AttrSpDamResExPer = 12765,
  AttrHealBanPct = 12770,
  AttrHealBanPctTotal = 12771,
  AttrHealBanPctAdd = 12772,
  AttrHealBanPctExAdd = 12773,
  AttrHealBanPctPer = 12774,
  AttrHealBanPctExPer = 12775,
  AttrHealedBanPct = 12780,
  AttrHealedBanPctTotal = 12781,
  AttrHealedBanPctAdd = 12782,
  AttrHealedBanPctExAdd = 12783,
  AttrHealedBanPctPer = 12784,
  AttrHealedBanPctExPer = 12785,
  AttrElementPower = 13000,
  AttrElementPowerTotal = 13001,
  AttrElementPowerAdd = 13002,
  AttrElementPowerExAdd = 13003,
  AttrElementPowerPer = 13004,
  AttrElementPowerExPer = 13005,
  AttrFirePower = 13010,
  AttrFirePowerTotal = 13011,
  AttrFirePowerAdd = 13012,
  AttrFirePowerExAdd = 13013,
  AttrFirePowerPer = 13014,
  AttrFirePowerExPer = 13015,
  AttrWaterPower = 13020,
  AttrWaterPowerTotal = 13021,
  AttrWaterPowerAdd = 13022,
  AttrWaterPowerExAdd = 13023,
  AttrWaterPowerPer = 13024,
  AttrWaterPowerExPer = 13025,
  AttrWoodPower = 13030,
  AttrWoodPowerTotal = 13031,
  AttrWoodPowerAdd = 13032,
  AttrWoodPowerExAdd = 13033,
  AttrWoodPowerPer = 13034,
  AttrWoodPowerExPer = 13035,
  AttrElectricityPower = 13040,
  AttrElectricityPowerTotal = 13041,
  AttrElectricityPowerAdd = 13042,
  AttrElectricityPowerExAdd = 13043,
  AttrElectricityPowerPer = 13044,
  AttrElectricityPowerExPer = 13045,
  AttrWindPower = 13050,
  AttrWindPowerTotal = 13051,
  AttrWindPowerAdd = 13052,
  AttrWindPowerExAdd = 13053,
  AttrWindPowerPer = 13054,
  AttrWindPowerExPer = 13055,
  AttrRockPower = 13060,
  AttrRockPowerTotal = 13061,
  AttrRockPowerAdd = 13062,
  AttrRockPowerExAdd = 13063,
  AttrRockPowerPer = 13064,
  AttrRockPowerExPer = 13065,
  AttrLightPower = 13070,
  AttrLightPowerTotal = 13071,
  AttrLightPowerAdd = 13072,
  AttrLightPowerExAdd = 13073,
  AttrLightPowerPer = 13074,
  AttrLightPowerExPer = 13075,
  AttrDarkPower = 13080,
  AttrDarkPowerTotal = 13081,
  AttrDarkPowerAdd = 13082,
  AttrDarkPowerExAdd = 13083,
  AttrDarkPowerPer = 13084,
  AttrDarkPowerExPer = 13085,
  AttrElementDamage = 13100,
  AttrElementDamageTotal = 13101,
  AttrElementDamageAdd = 13102,
  AttrElementDamageExAdd = 13103,
  AttrElementDamagePer = 13104,
  AttrElementDamageExPer = 13105,
  AttrFireDamage = 13110,
  AttrFireDamageTotal = 13111,
  AttrFireDamageAdd = 13112,
  AttrFireDamageExAdd = 13113,
  AttrFireDamagePer = 13114,
  AttrFireDamageExPer = 13115,
  AttrWaterDamage = 13120,
  AttrWaterDamageTotal = 13121,
  AttrWaterDamageAdd = 13122,
  AttrWaterDamageExAdd = 13123,
  AttrWaterDamagePer = 13124,
  AttrWaterDamageExPer = 13125,
  AttrWoodDamage = 13130,
  AttrWoodDamageTotal = 13131,
  AttrWoodDamageAdd = 13132,
  AttrWoodDamageExAdd = 13133,
  AttrWoodDamagePer = 13134,
  AttrWoodDamageExPer = 13135,
  AttrElectricityDamage = 13140,
  AttrElectricityDamageTotal = 13141,
  AttrElectricityDamageAdd = 13142,
  AttrElectricityDamageExAdd = 13143,
  AttrElectricityDamagePer = 13144,
  AttrElectricityDamageExPer = 13145,
  AttrWindDamage = 13150,
  AttrWindDamageTotal = 13151,
  AttrWindDamageAdd = 13152,
  AttrWindDamageExAdd = 13153,
  AttrWindDamagePer = 13154,
  AttrWindDamageExPer = 13155,
  AttrRockDamage = 13160,
  AttrRockDamageTotal = 13161,
  AttrRockDamageAdd = 13162,
  AttrRockDamageExAdd = 13163,
  AttrRockDamagePer = 13164,
  AttrRockDamageExPer = 13165,
  AttrLightDamage = 13170,
  AttrLightDamageTotal = 13171,
  AttrLightDamageAdd = 13172,
  AttrLightDamageExAdd = 13173,
  AttrLightDamagePer = 13174,
  AttrLightDamageExPer = 13175,
  AttrDarkDamage = 13180,
  AttrDarkDamageTotal = 13181,
  AttrDarkDamageAdd = 13182,
  AttrDarkDamageExAdd = 13183,
  AttrDarkDamagePer = 13184,
  AttrDarkDamageExPer = 13185,
  AttrElementDefense = 13200,
  AttrElementDefenseTotal = 13201,
  AttrElementDefenseAdd = 13202,
  AttrElementDefenseExAdd = 13203,
  AttrElementDefensePer = 13204,
  AttrElementDefenseExPer = 13205,
  AttrFireDefense = 13210,
  AttrFireDefenseTotal = 13211,
  AttrFireDefenseAdd = 13212,
  AttrFireDefenseExAdd = 13213,
  AttrFireDefensePer = 13214,
  AttrFireDefenseExPer = 13215,
  AttrWaterDefense = 13220,
  AttrWaterDefenseTotal = 13221,
  AttrWaterDefenseAdd = 13222,
  AttrWaterDefenseExAdd = 13223,
  AttrWaterDefensePer = 13224,
  AttrWaterDefenseExPer = 13225,
  AttrWoodDefense = 13230,
  AttrWoodDefenseTotal = 13231,
  AttrWoodDefenseAdd = 13232,
  AttrWoodDefenseExAdd = 13233,
  AttrWoodDefensePer = 13234,
  AttrWoodDefenseExPer = 13235,
  AttrElectricityDefense = 13240,
  AttrElectricityDefenseTotal = 13241,
  AttrElectricityDefenseAdd = 13242,
  AttrElectricityDefenseExAdd = 13243,
  AttrElectricityDefensePer = 13244,
  AttrElectricityDefenseExPer = 13245,
  AttrWindDefense = 13250,
  AttrWindDefenseTotal = 13251,
  AttrWindDefenseAdd = 13252,
  AttrWindDefenseExAdd = 13253,
  AttrWindDefensePer = 13254,
  AttrWindDefenseExPer = 13255,
  AttrRockDefense = 13260,
  AttrRockDefenseTotal = 13261,
  AttrRockDefenseAdd = 13262,
  AttrRockDefenseExAdd = 13263,
  AttrRockDefensePer = 13264,
  AttrRockDefenseExPer = 13265,
  AttrLightDefense = 13270,
  AttrLightDefenseTotal = 13271,
  AttrLightDefenseAdd = 13272,
  AttrLightDefenseExAdd = 13273,
  AttrLightDefensePer = 13274,
  AttrLightDefenseExPer = 13275,
  AttrDarkDefense = 13280,
  AttrDarkDefenseTotal = 13281,
  AttrDarkDefenseAdd = 13282,
  AttrDarkDefenseExAdd = 13283,
  AttrDarkDefensePer = 13284,
  AttrDarkDefenseExPer = 13285,
  AttrElementDamRes = 13310,
  AttrElementDamResTotal = 13311,
  AttrElementDamResAdd = 13312,
  AttrElementDamResExAdd = 13313,
  AttrElementDamResPer = 13314,
  AttrElementDamResExPer = 13315,
  AttrFireDamageReduction = 13320,
  AttrFireDamageReductionTotal = 13321,
  AttrFireDamageReductionAdd = 13322,
  AttrFireDamageReductionExAdd = 13323,
  AttrFireDamageReductionPer = 13324,
  AttrFireDamageReductionExPer = 13325,
  AttrWaterDamageReduction = 13330,
  AttrWaterDamageReductionTotal = 13331,
  AttrWaterDamageReductionAdd = 13332,
  AttrWaterDamageReductionExAdd = 13333,
  AttrWaterDamageReductionPer = 13334,
  AttrWaterDamageReductionExPer = 13335,
  AttrWoodDamageReduction = 13340,
  AttrWoodDamageReductionTotal = 13341,
  AttrWoodDamageReductionAdd = 13342,
  AttrWoodDamageReductionExAdd = 13343,
  AttrWoodDamageReductionPer = 13344,
  AttrWoodDamageReductionExPer = 13345,
  AttrElectricityDamageReduction = 13350,
  AttrElectricityDamageReductionTotal = 13351,
  AttrElectricityDamageReductionAdd = 13352,
  AttrElectricityDamageReductionExAdd = 13353,
  AttrElectricityDamageReductionPer = 13354,
  AttrElectricityDamageReductionExPer = 13355,
  AttrWindDamageReduction = 13360,
  AttrWindDamageReductionTotal = 13361,
  AttrWindDamageReductionAdd = 13362,
  AttrWindDamageReductionExAdd = 13363,
  AttrWindDamageReductionPer = 13364,
  AttrWindDamageReductionExPer = 13365,
  AttrRockDamageReduction = 13370,
  AttrRockDamageReductionTotal = 13371,
  AttrRockDamageReductionAdd = 13372,
  AttrRockDamageReductionExAdd = 13373,
  AttrRockDamageReductionPer = 13374,
  AttrRockDamageReductionExPer = 13375,
  AttrLightDamageReduction = 13380,
  AttrLightDamageReductionTotal = 13381,
  AttrLightDamageReductionAdd = 13382,
  AttrLightDamageReductionExAdd = 13383,
  AttrLightDamageReductionPer = 13384,
  AttrLightDamageReductionExPer = 13385,
  AttrDarkDamageReduction = 13390,
  AttrDarkDamageReductionTotal = 13391,
  AttrDarkDamageReductionAdd = 13392,
  AttrDarkDamageReductionExAdd = 13393,
  AttrDarkDamageReductionPer = 13394,
  AttrDarkDamageReductionExPer = 13395,
  AttrOriginEnergy = 20010,
  AttrMaxOriginEnergy = 20020,
  AttrMaxOriginEnergyTotal = 20021,
  AttrMaxOriginEnergyAdd = 20022,
  AttrMaxOriginEnergyExAdd = 20023,
  AttrMaxOriginEnergyPer = 20024,
  AttrMaxOriginEnergyExPer = 20025,
  AttrOriginEnergyConsumeRate = 20030,
  AttrParkourStandbyOriginEnergyRecovery = 20040,
  AttrParkourStandbyOriginEnergyRecoveryTotal = 20041,
  AttrParkourStandbyOriginEnergyRecoveryAdd = 20042,
  AttrParkourStandbyOriginEnergyRecoveryExAdd = 20043,
  AttrParkourStandbyOriginEnergyRecoveryPer = 20044,
  AttrParkourStandbyOriginEnergyRecoveryExPer = 20045,
  AttrParkourOriginEnergyRecovery = 20050,
  AttrParkourOriginEnergyRecoveryTotal = 20051,
  AttrParkourOriginEnergyRecoveryAdd = 20052,
  AttrParkourOriginEnergyRecoveryExAdd = 20053,
  AttrParkourOriginEnergyRecoveryPer = 20054,
  AttrParkourOriginEnergyRecoveryExPer = 20055,
  AttrParkourRunPhaseOneAcceleration = 20060,
  AttrParkourRunPhaseOneAccelerationTotal = 20061,
  AttrParkourRunPhaseOneAccelerationAdd = 20062,
  AttrParkourRunPhaseOneAccelerationExAdd = 20063,
  AttrParkourRunPhaseOneAccelerationPer = 20064,
  AttrParkourRunPhaseOneAccelerationExPer = 20065,
  AttrParkourRunPhaseOneSpeedLimit = 20070,
  AttrParkourRunPhaseOneSpeedLimitTotal = 20071,
  AttrParkourRunPhaseOneSpeedLimitAdd = 20072,
  AttrParkourRunPhaseOneSpeedLimitExAdd = 20073,
  AttrParkourRunPhaseOneSpeedLimitPer = 20074,
  AttrParkourRunPhaseOneSpeedLimitExPer = 20075,
  AttrParkourRunPhaseTwoAcceleration = 20080,
  AttrParkourRunPhaseTwoAccelerationTotal = 20081,
  AttrParkourRunPhaseTwoAccelerationAdd = 20082,
  AttrParkourRunPhaseTwoAccelerationExAdd = 20083,
  AttrParkourRunPhaseTwoAccelerationPer = 20084,
  AttrParkourRunPhaseTwoAccelerationExPer = 20085,
  AttrParkourRunPhaseTwoSpeedLimit = 20090,
  AttrParkourRunPhaseTwoSpeedLimitTotal = 20091,
  AttrParkourRunPhaseTwoSpeedLimitAdd = 20092,
  AttrParkourRunPhaseTwoSpeedLimitExAdd = 20093,
  AttrParkourRunPhaseTwoSpeedLimitPer = 20094,
  AttrParkourRunPhaseTwoSpeedLimitExPer = 20095,
  AttrParkourRunPhaseThreeAcceleration = 20100,
  AttrParkourRunPhaseThreeAccelerationTotal = 20101,
  AttrParkourRunPhaseThreeAccelerationAdd = 20102,
  AttrParkourRunPhaseThreeAccelerationExAdd = 20103,
  AttrParkourRunPhaseThreeAccelerationPer = 20104,
  AttrParkourRunPhaseThreeAccelerationExPer = 20105,
  AttrParkourRunPhaseThreeSpeedLimit = 20110,
  AttrParkourRunPhaseThreeSpeedLimitTotal = 20111,
  AttrParkourRunPhaseThreeSpeedLimitAdd = 20112,
  AttrParkourRunPhaseThreeSpeedLimitExAdd = 20113,
  AttrParkourRunPhaseThreeSpeedLimitPer = 20114,
  AttrParkourRunPhaseThreeSpeedLimitExPer = 20115,
  AttrInBattleParkourStandbyOriginEnergyRecovery = 20120,
  AttrInBattleParkourStandbyOriginEnergyRecoveryTotal = 20121,
  AttrInBattleParkourStandbyOriginEnergyRecoveryAdd = 20122,
  AttrInBattleParkourStandbyOriginEnergyRecoveryExAdd = 20123,
  AttrInBattleParkourStandbyOriginEnergyRecoveryPer = 20124,
  AttrInBattleParkourStandbyOriginEnergyRecoveryExPer = 20125,
  AttrInBattleParkourOriginEnergyRecovery = 20130,
  AttrInBattleParkourOriginEnergyRecoveryTotal = 20131,
  AttrInBattleParkourOriginEnergyRecoveryAdd = 20132,
  AttrInBattleParkourOriginEnergyRecoveryExAdd = 20133,
  AttrInBattleParkourOriginEnergyRecoveryPer = 20134,
  AttrInBattleParkourOriginEnergyRecoveryExPer = 20135,
  AttrFallDamageReduction = 20200,
  AttrDelayDie = 20201,
  AttrFightResourceIds = 50001,
  AttrFightResources = 50002,
  AttrFightResNoUp = 50003,
  AttrFightResNoDown = 50004,
  AttrFreezeFrame = 60020,
  AttrShieldList = 60050,
  AttrPressingOpen = 60070,
  AttrUpLift = 60071,
  UNRECOGNIZED = -1,
}

export function eAttrTypeFromJSON(object: any): EAttrType {
  switch (object) {
    case 0:
    case "AttrUnknown":
      return EAttrType.AttrUnknown;
    case 1:
    case "AttrName":
      return EAttrType.AttrName;
    case 6:
    case "AttrAimDir":
      return EAttrType.AttrAimDir;
    case 8:
    case "AttrScale":
      return EAttrType.AttrScale;
    case 9:
    case "AttrScaleAddRatio":
      return EAttrType.AttrScaleAddRatio;
    case 10:
    case "AttrId":
      return EAttrType.AttrId;
    case 11:
    case "AttrState":
      return EAttrType.AttrState;
    case 13:
    case "AttrCamp":
      return EAttrType.AttrCamp;
    case 15:
    case "AttrLayer":
      return EAttrType.AttrLayer;
    case 16:
    case "AttrIsBodySeparate":
      return EAttrType.AttrIsBodySeparate;
    case 17:
    case "AttrConfigUid":
      return EAttrType.AttrConfigUid;
    case 18:
    case "AttrTableUid":
      return EAttrType.AttrTableUid;
    case 19:
    case "AttrVisualLayers":
      return EAttrType.AttrVisualLayers;
    case 20:
    case "AttrVisualLayer":
      return EAttrType.AttrVisualLayer;
    case 21:
    case "AttrVisualLayerUid":
      return EAttrType.AttrVisualLayerUid;
    case 22:
    case "AttrSummonFlag":
      return EAttrType.AttrSummonFlag;
    case 30:
    case "AttrTargetId":
      return EAttrType.AttrTargetId;
    case 31:
    case "AttrTargetPartId":
      return EAttrType.AttrTargetPartId;
    case 32:
    case "AttrIsBot":
      return EAttrType.AttrIsBot;
    case 33:
    case "AttrBasicFleshyType":
      return EAttrType.AttrBasicFleshyType;
    case 50:
    case "AttrDir":
      return EAttrType.AttrDir;
    case 51:
    case "AttrTargetDir":
      return EAttrType.AttrTargetDir;
    case 52:
    case "AttrPos":
      return EAttrType.AttrPos;
    case 53:
    case "AttrTargetPos":
      return EAttrType.AttrTargetPos;
    case 61:
    case "AttrSummonerPos":
      return EAttrType.AttrSummonerPos;
    case 70:
    case "AttrVelocity":
      return EAttrType.AttrVelocity;
    case 71:
    case "AttrMoveType":
      return EAttrType.AttrMoveType;
    case 72:
    case "AttrTurnVelocity":
      return EAttrType.AttrTurnVelocity;
    case 73:
    case "AttrReviveCurProgressValue":
      return EAttrType.AttrReviveCurProgressValue;
    case 74:
    case "AttrReviveMaxProgressValue":
      return EAttrType.AttrReviveMaxProgressValue;
    case 75:
    case "AttrUnbreakableLevel":
      return EAttrType.AttrUnbreakableLevel;
    case 77:
    case "AttrStateTime":
      return EAttrType.AttrStateTime;
    case 78:
    case "AttrDeadType":
      return EAttrType.AttrDeadType;
    case 79:
    case "AttrMoveForce":
      return EAttrType.AttrMoveForce;
    case 90:
    case "AttrSummonerId":
      return EAttrType.AttrSummonerId;
    case 91:
    case "AttrTopSummonerId":
      return EAttrType.AttrTopSummonerId;
    case 92:
    case "AttrIsUnderGround":
      return EAttrType.AttrIsUnderGround;
    case 93:
    case "AttrOffset":
      return EAttrType.AttrOffset;
    case 94:
    case "AttrInheritingType":
      return EAttrType.AttrInheritingType;
    case 95:
    case "AttrFightSourceInfo":
      return EAttrType.AttrFightSourceInfo;
    case 100:
    case "AttrSkillId":
      return EAttrType.AttrSkillId;
    case 101:
    case "AttrSkillStage":
      return EAttrType.AttrSkillStage;
    case 102:
    case "AttrInAccumulate":
      return EAttrType.AttrInAccumulate;
    case 103:
    case "AttrSkillLevel":
      return EAttrType.AttrSkillLevel;
    case 104:
    case "AttrCombatState":
      return EAttrType.AttrCombatState;
    case 105:
    case "AttrSkillStageBeginTime":
      return EAttrType.AttrSkillStageBeginTime;
    case 106:
    case "AttrSkillBeginTime":
      return EAttrType.AttrSkillBeginTime;
    case 107:
    case "AttrSkillSpeed":
      return EAttrType.AttrSkillSpeed;
    case 108:
    case "AttrSkillStageNum":
      return EAttrType.AttrSkillStageNum;
    case 109:
    case "AttrReplaceSkillList":
      return EAttrType.AttrReplaceSkillList;
    case 110:
    case "AttrFinalTargetDir":
      return EAttrType.AttrFinalTargetDir;
    case 111:
    case "AttrSkillUuid":
      return EAttrType.AttrSkillUuid;
    case 112:
    case "AttrIsCurStageNeedStopMove":
      return EAttrType.AttrIsCurStageNeedStopMove;
    case 113:
    case "AttrSkillShowState":
      return EAttrType.AttrSkillShowState;
    case 114:
    case "AttrCombatStateTime":
      return EAttrType.AttrCombatStateTime;
    case 115:
    case "AttrSwitchSkill":
      return EAttrType.AttrSwitchSkill;
    case 116:
    case "AttrSkillLevelIdList":
      return EAttrType.AttrSkillLevelIdList;
    case 117:
    case "AttrCantSilence":
      return EAttrType.AttrCantSilence;
    case 118:
    case "AttrFinalTargetPos":
      return EAttrType.AttrFinalTargetPos;
    case 119:
    case "AttrTargetPartPos":
      return EAttrType.AttrTargetPartPos;
    case 120:
    case "AttrDmgTargetPos":
      return EAttrType.AttrDmgTargetPos;
    case 121:
    case "AttrSkillRemodelLevel":
      return EAttrType.AttrSkillRemodelLevel;
    case 150:
    case "AttrIsInteractionActive":
      return EAttrType.AttrIsInteractionActive;
    case 151:
    case "AttrInteractionId":
      return EAttrType.AttrInteractionId;
    case 153:
    case "AttrInteractionUuid":
      return EAttrType.AttrInteractionUuid;
    case 154:
    case "AttrInteractionStage":
      return EAttrType.AttrInteractionStage;
    case 155:
    case "AttrInteractionSeat":
      return EAttrType.AttrInteractionSeat;
    case 156:
    case "AttrInteractionInfo":
      return EAttrType.AttrInteractionInfo;
    case 170:
    case "AttrActionTime":
      return EAttrType.AttrActionTime;
    case 171:
    case "AttrActionId":
      return EAttrType.AttrActionId;
    case 172:
    case "AttrActionUpperTime":
      return EAttrType.AttrActionUpperTime;
    case 173:
    case "AttrActionUpperId":
      return EAttrType.AttrActionUpperId;
    case 174:
    case "AttrActionSource":
      return EAttrType.AttrActionSource;
    case 175:
    case "AttrActionLongName":
      return EAttrType.AttrActionLongName;
    case 176:
    case "AttrMountId":
      return EAttrType.AttrMountId;
    case 177:
    case "AttrMountSize":
      return EAttrType.AttrMountSize;
    case 180:
    case "AttrAiming":
      return EAttrType.AttrAiming;
    case 181:
    case "AttrGender":
      return EAttrType.AttrGender;
    case 182:
    case "AttrInBattleShow":
      return EAttrType.AttrInBattleShow;
    case 183:
    case "AttrFaceData":
      return EAttrType.AttrFaceData;
    case 184:
    case "AttrProfile":
      return EAttrType.AttrProfile;
    case 185:
    case "AttrBodySize":
      return EAttrType.AttrBodySize;
    case 186:
    case "AttrRoleLevel":
      return EAttrType.AttrRoleLevel;
    case 187:
    case "AttrOfflineTime":
      return EAttrType.AttrOfflineTime;
    case 188:
    case "AttrClimbType":
      return EAttrType.AttrClimbType;
    case 189:
    case "AttrClimbNormal":
      return EAttrType.AttrClimbNormal;
    case 190:
    case "AttrClimbDir":
      return EAttrType.AttrClimbDir;
    case 191:
    case "AttrClimbTime":
      return EAttrType.AttrClimbTime;
    case 192:
    case "AttrPlaneId":
      return EAttrType.AttrPlaneId;
    case 193:
    case "AttrCanSwitchLayer":
      return EAttrType.AttrCanSwitchLayer;
    case 194:
    case "AttrTeamId":
      return EAttrType.AttrTeamId;
    case 195:
    case "AttrTeamMemberNums":
      return EAttrType.AttrTeamMemberNums;
    case 196:
    case "AttrSeasonLv":
      return EAttrType.AttrSeasonLv;
    case 197:
    case "AttrUseItemState":
      return EAttrType.AttrUseItemState;
    case 198:
    case "AttrProfessionSwitchTime":
      return EAttrType.AttrProfessionSwitchTime;
    case 199:
    case "AttrProfessionHitType":
      return EAttrType.AttrProfessionHitType;
    case 200:
    case "AttrEquipData":
      return EAttrType.AttrEquipData;
    case 201:
    case "AttrFashionData":
      return EAttrType.AttrFashionData;
    case 202:
    case "AttrAppearanceData":
      return EAttrType.AttrAppearanceData;
    case 205:
    case "AttrCommonSkillList":
      return EAttrType.AttrCommonSkillList;
    case 206:
    case "AttrDeadTime":
      return EAttrType.AttrDeadTime;
    case 207:
    case "AttrResourceLeft":
      return EAttrType.AttrResourceLeft;
    case 208:
    case "AttrResourceRight":
      return EAttrType.AttrResourceRight;
    case 210:
    case "AttrShowPieceAttrList":
      return EAttrType.AttrShowPieceAttrList;
    case 211:
    case "AttrSceneInteractionInfo":
      return EAttrType.AttrSceneInteractionInfo;
    case 212:
    case "AttrWeather":
      return EAttrType.AttrWeather;
    case 213:
    case "AttrDayNightSwitch":
      return EAttrType.AttrDayNightSwitch;
    case 215:
    case "AttrRankId":
      return EAttrType.AttrRankId;
    case 216:
    case "AttrEmoteTime":
      return EAttrType.AttrEmoteTime;
    case 217:
    case "AttrEmoteId":
      return EAttrType.AttrEmoteId;
    case 220:
    case "AttrProfessionId":
      return EAttrType.AttrProfessionId;
    case 221:
    case "AttrSwitchProfessionCD":
      return EAttrType.AttrSwitchProfessionCD;
    case 222:
    case "AttrProfessionSkinId":
      return EAttrType.AttrProfessionSkinId;
    case 225:
    case "AttrShowId":
      return EAttrType.AttrShowId;
    case 226:
    case "AttrSlot":
      return EAttrType.AttrSlot;
    case 227:
    case "AttrShowRankStar":
      return EAttrType.AttrShowRankStar;
    case 228:
    case "AttrFishingData":
      return EAttrType.AttrFishingData;
    case 229:
    case "AttrPersonalTitle":
      return EAttrType.AttrPersonalTitle;
    case 230:
    case "AttrReviveCount":
      return EAttrType.AttrReviveCount;
    case 231:
    case "AttrSceneAreaId":
      return EAttrType.AttrSceneAreaId;
    case 232:
    case "AttrSkillSkinIds":
      return EAttrType.AttrSkillSkinIds;
    case 234:
    case "AttrToy":
      return EAttrType.AttrToy;
    case 235:
    case "AttrIsNewbie":
      return EAttrType.AttrIsNewbie;
    case 236:
    case "AttrMoveVersion":
      return EAttrType.AttrMoveVersion;
    case 237:
    case "AttrPersonalObjData":
      return EAttrType.AttrPersonalObjData;
    case 240:
    case "AttrParkourStep":
      return EAttrType.AttrParkourStep;
    case 241:
    case "AttrParkourFallenJump":
      return EAttrType.AttrParkourFallenJump;
    case 242:
    case "AttrParkourShimmyJump":
      return EAttrType.AttrParkourShimmyJump;
    case 243:
    case "AttrParkourFiveJump":
      return EAttrType.AttrParkourFiveJump;
    case 244:
    case "AttrParkourKickWallJump":
      return EAttrType.AttrParkourKickWallJump;
    case 245:
    case "AttrParkourPedalWall":
      return EAttrType.AttrParkourPedalWall;
    case 246:
    case "AttrParkourRun":
      return EAttrType.AttrParkourRun;
    case 247:
    case "AttrParkourLazyJump":
      return EAttrType.AttrParkourLazyJump;
    case 248:
    case "AttrParkourLevitation":
      return EAttrType.AttrParkourLevitation;
    case 249:
    case "AttrShimmyJumpPac":
      return EAttrType.AttrShimmyJumpPac;
    case 250:
    case "AttrMaxShimmyJumpPac":
      return EAttrType.AttrMaxShimmyJumpPac;
    case 260:
    case "AttrJumpStep":
      return EAttrType.AttrJumpStep;
    case 261:
    case "AttrJumpDir":
      return EAttrType.AttrJumpDir;
    case 262:
    case "AttrVerVelocity":
      return EAttrType.AttrVerVelocity;
    case 263:
    case "AttrHorVelocity":
      return EAttrType.AttrHorVelocity;
    case 264:
    case "AttrJumpType":
      return EAttrType.AttrJumpType;
    case 265:
    case "AttrGravity":
      return EAttrType.AttrGravity;
    case 266:
    case "AttrBounceJumpId":
      return EAttrType.AttrBounceJumpId;
    case 267:
    case "AttrJumpExCount":
      return EAttrType.AttrJumpExCount;
    case 270:
    case "AttrRushDirection":
      return EAttrType.AttrRushDirection;
    case 271:
    case "AttrBattleRushChargeBegin":
      return EAttrType.AttrBattleRushChargeBegin;
    case 272:
    case "AttrRushMaxCount":
      return EAttrType.AttrRushMaxCount;
    case 273:
    case "AttrRushCountClearInterval":
      return EAttrType.AttrRushCountClearInterval;
    case 274:
    case "AttrRushCD":
      return EAttrType.AttrRushCD;
    case 280:
    case "AttrGlideVelocityH":
      return EAttrType.AttrGlideVelocityH;
    case 281:
    case "AttrGlideVelocityV":
      return EAttrType.AttrGlideVelocityV;
    case 282:
    case "AttrGlideRotAngle":
      return EAttrType.AttrGlideRotAngle;
    case 290:
    case "AttrWallNormal":
      return EAttrType.AttrWallNormal;
    case 291:
    case "AttrPedalWallDir":
      return EAttrType.AttrPedalWallDir;
    case 292:
    case "AttrPedalWallStage":
      return EAttrType.AttrPedalWallStage;
    case 300:
    case "AttrInsightFlag":
      return EAttrType.AttrInsightFlag;
    case 310:
    case "AttrAttachVelocity":
      return EAttrType.AttrAttachVelocity;
    case 311:
    case "AttrAttachVelocityDirX":
      return EAttrType.AttrAttachVelocityDirX;
    case 312:
    case "AttrAttachVelocityDirY":
      return EAttrType.AttrAttachVelocityDirY;
    case 313:
    case "AttrAttachVelocityDirZ":
      return EAttrType.AttrAttachVelocityDirZ;
    case 314:
    case "AttrAttachVelocitySource":
      return EAttrType.AttrAttachVelocitySource;
    case 315:
    case "AttrAttachSourceEntUuid":
      return EAttrType.AttrAttachSourceEntUuid;
    case 320:
    case "AttrTunnelMoveStage":
      return EAttrType.AttrTunnelMoveStage;
    case 321:
    case "AttrTunnelId":
      return EAttrType.AttrTunnelId;
    case 322:
    case "AttrTunnelPointIndex":
      return EAttrType.AttrTunnelPointIndex;
    case 323:
    case "AttrTunnelPointT":
      return EAttrType.AttrTunnelPointT;
    case 330:
    case "AttrSwimStage":
      return EAttrType.AttrSwimStage;
    case 340:
    case "AttrSceneName":
      return EAttrType.AttrSceneName;
    case 341:
    case "AttrSceneBasicId":
      return EAttrType.AttrSceneBasicId;
    case 342:
    case "AttrSceneUuid":
      return EAttrType.AttrSceneUuid;
    case 343:
    case "AttrSceneChannel":
      return EAttrType.AttrSceneChannel;
    case 344:
    case "AttrSceneWeather":
      return EAttrType.AttrSceneWeather;
    case 345:
    case "AttrSceneLevelId":
      return EAttrType.AttrSceneLevelId;
    case 346:
    case "AttrSceneDayNightSwitch":
      return EAttrType.AttrSceneDayNightSwitch;
    case 347:
    case "AttrFireworkStartTimeSeconds":
      return EAttrType.AttrFireworkStartTimeSeconds;
    case 348:
    case "AttrDeathCount":
      return EAttrType.AttrDeathCount;
    case 349:
    case "AttrDeathSubTimeSecond":
      return EAttrType.AttrDeathSubTimeSecond;
    case 350:
    case "AttrFireworkType":
      return EAttrType.AttrFireworkType;
    case 351:
    case "AttrSceneLineKickUserEndTime":
      return EAttrType.AttrSceneLineKickUserEndTime;
    case 360:
    case "AttrObjState":
      return EAttrType.AttrObjState;
    case 361:
    case "AttrObjCounter":
      return EAttrType.AttrObjCounter;
    case 362:
    case "AttrOwner":
      return EAttrType.AttrOwner;
    case 363:
    case "AttrToyState":
      return EAttrType.AttrToyState;
    case 365:
    case "AttrDynamicInteractionId":
      return EAttrType.AttrDynamicInteractionId;
    case 370:
    case "AttrZoneParam":
      return EAttrType.AttrZoneParam;
    case 373:
    case "AttrDataType":
      return EAttrType.AttrDataType;
    case 374:
    case "AttrRotation":
      return EAttrType.AttrRotation;
    case 375:
    case "AttrShape":
      return EAttrType.AttrShape;
    case 380:
    case "AttrGMGod":
      return EAttrType.AttrGMGod;
    case 390:
    case "AttrShapeshiftType":
      return EAttrType.AttrShapeshiftType;
    case 391:
    case "AttrShapeshiftConfigId":
      return EAttrType.AttrShapeshiftConfigId;
    case 392:
    case "AttrShapeshiftProfessionId":
      return EAttrType.AttrShapeshiftProfessionId;
    case 393:
    case "AttrShapeshiftSkillIds":
      return EAttrType.AttrShapeshiftSkillIds;
    case 394:
    case "AttrShapeshiftReplaceAttr":
      return EAttrType.AttrShapeshiftReplaceAttr;
    case 400:
    case "AttrNpcTest":
      return EAttrType.AttrNpcTest;
    case 410:
    case "AttrHostId":
      return EAttrType.AttrHostId;
    case 411:
    case "AttrEventId":
      return EAttrType.AttrEventId;
    case 412:
    case "AttrEffectType":
      return EAttrType.AttrEffectType;
    case 413:
    case "AttrBulletTargetPos":
      return EAttrType.AttrBulletTargetPos;
    case 416:
    case "AttrRayCount":
      return EAttrType.AttrRayCount;
    case 420:
    case "AttrRotate":
      return EAttrType.AttrRotate;
    case 423:
    case "AttrSummonGroup":
      return EAttrType.AttrSummonGroup;
    case 424:
    case "AttrSummonIndex":
      return EAttrType.AttrSummonIndex;
    case 425:
    case "AttrSummonGroupCount":
      return EAttrType.AttrSummonGroupCount;
    case 426:
    case "AttrBulletStage":
      return EAttrType.AttrBulletStage;
    case 427:
    case "AttrBulletCanMove":
      return EAttrType.AttrBulletCanMove;
    case 428:
    case "AttrBulletCantHit":
      return EAttrType.AttrBulletCantHit;
    case 429:
    case "AttrBulletZoomType":
      return EAttrType.AttrBulletZoomType;
    case 430:
    case "AttrBulletOrientationType":
      return EAttrType.AttrBulletOrientationType;
    case 431:
    case "AttrBanDestroyShow":
      return EAttrType.AttrBanDestroyShow;
    case 432:
    case "AttrBulletSpeedChangePCT":
      return EAttrType.AttrBulletSpeedChangePCT;
    case 433:
    case "AttrDirX":
      return EAttrType.AttrDirX;
    case 434:
    case "AttrDirZ":
      return EAttrType.AttrDirZ;
    case 435:
    case "AttrTargetDirX":
      return EAttrType.AttrTargetDirX;
    case 436:
    case "AttrTargetDirZ":
      return EAttrType.AttrTargetDirZ;
    case 440:
    case "AttrMaxExtinction":
      return EAttrType.AttrMaxExtinction;
    case 441:
    case "AttrExtinction":
      return EAttrType.AttrExtinction;
    case 442:
    case "AttrMaxStunned":
      return EAttrType.AttrMaxStunned;
    case 443:
    case "AttrStunned":
      return EAttrType.AttrStunned;
    case 444:
    case "AttrInOverdrive":
      return EAttrType.AttrInOverdrive;
    case 445:
    case "AttrIsLockStunned":
      return EAttrType.AttrIsLockStunned;
    case 450:
    case "AttrTargetUuid":
      return EAttrType.AttrTargetUuid;
    case 451:
    case "AttrAlertIncreaseSpeed":
      return EAttrType.AttrAlertIncreaseSpeed;
    case 452:
    case "AttrAlertValue":
      return EAttrType.AttrAlertValue;
    case 453:
    case "AttrStopBreakingBarTickingFlag":
      return EAttrType.AttrStopBreakingBarTickingFlag;
    case 454:
    case "AttrIsStopBehvTree":
      return EAttrType.AttrIsStopBehvTree;
    case 455:
    case "AttrBreakingStage":
      return EAttrType.AttrBreakingStage;
    case 456:
    case "AttrFirstAttack":
      return EAttrType.AttrFirstAttack;
    case 457:
    case "AttrDungeonScoreExtraMultiple":
      return EAttrType.AttrDungeonScoreExtraMultiple;
    case 458:
    case "AttrDungeonScoreExtraAddValue":
      return EAttrType.AttrDungeonScoreExtraAddValue;
    case 459:
    case "AttrIsMonsterRankEnable":
      return EAttrType.AttrIsMonsterRankEnable;
    case 460:
    case "AttrMonsterRank":
      return EAttrType.AttrMonsterRank;
    case 461:
    case "SupplementaryRewardIndex":
      return EAttrType.SupplementaryRewardIndex;
    case 471:
    case "AttrHatedCharId":
      return EAttrType.AttrHatedCharId;
    case 472:
    case "AttrHatedJob":
      return EAttrType.AttrHatedJob;
    case 473:
    case "AttrHatedName":
      return EAttrType.AttrHatedName;
    case 474:
    case "AttrHateList":
      return EAttrType.AttrHateList;
    case 480:
    case "AttrDropType":
      return EAttrType.AttrDropType;
    case 481:
    case "AttrItemId":
      return EAttrType.AttrItemId;
    case 482:
    case "AttrAwardId":
      return EAttrType.AttrAwardId;
    case 483:
    case "AttrAni":
      return EAttrType.AttrAni;
    case 484:
    case "AttrItemData":
      return EAttrType.AttrItemData;
    case 485:
    case "AttrInteractionActor":
      return EAttrType.AttrInteractionActor;
    case 500:
    case "AttrCollectCounter":
      return EAttrType.AttrCollectCounter;
    case 510:
    case "AttrTransferType":
      return EAttrType.AttrTransferType;
    case 550:
    case "AttrStiffType":
      return EAttrType.AttrStiffType;
    case 551:
    case "AttrStiffStage":
      return EAttrType.AttrStiffStage;
    case 552:
    case "AttrStiffStageTime":
      return EAttrType.AttrStiffStageTime;
    case 553:
    case "AttrStiffDir":
      return EAttrType.AttrStiffDir;
    case 554:
    case "AttrStiffTime":
      return EAttrType.AttrStiffTime;
    case 555:
    case "AttrStiffDownTime":
      return EAttrType.AttrStiffDownTime;
    case 556:
    case "AttrStiffHangTime":
      return EAttrType.AttrStiffHangTime;
    case 557:
    case "AttrStiffTarget":
      return EAttrType.AttrStiffTarget;
    case 558:
    case "AttrStiffFlowSpeed":
      return EAttrType.AttrStiffFlowSpeed;
    case 559:
    case "AttrStiffFlowOffset":
      return EAttrType.AttrStiffFlowOffset;
    case 560:
    case "AttrStiffFlowRadius":
      return EAttrType.AttrStiffFlowRadius;
    case 561:
    case "AttrStiffHorSpeed":
      return EAttrType.AttrStiffHorSpeed;
    case 562:
    case "AttrStiffHorAccSpeed":
      return EAttrType.AttrStiffHorAccSpeed;
    case 563:
    case "AttrStiffVerSpeedUp":
      return EAttrType.AttrStiffVerSpeedUp;
    case 564:
    case "AttrStiffVerAccSpeedUp":
      return EAttrType.AttrStiffVerAccSpeedUp;
    case 565:
    case "AttrStiffVerSpeedDown":
      return EAttrType.AttrStiffVerSpeedDown;
    case 566:
    case "AttrStiffVerAccSpeedDown":
      return EAttrType.AttrStiffVerAccSpeedDown;
    case 567:
    case "AttrStiffHorSpeedMinimum":
      return EAttrType.AttrStiffHorSpeedMinimum;
    case 568:
    case "AttrStiffDamageWeight":
      return EAttrType.AttrStiffDamageWeight;
    case 569:
    case "AttrTargetPosIsEnd":
      return EAttrType.AttrTargetPosIsEnd;
    case 570:
    case "AttrStiffThrowMoveInfo":
      return EAttrType.AttrStiffThrowMoveInfo;
    case 571:
    case "AttrStiffDamageStrength":
      return EAttrType.AttrStiffDamageStrength;
    case 600:
    case "AttrRideId":
      return EAttrType.AttrRideId;
    case 601:
    case "AttrIsCantRide":
      return EAttrType.AttrIsCantRide;
    case 602:
    case "AttrRideIndex":
      return EAttrType.AttrRideIndex;
    case 603:
    case "AttrRideStage":
      return EAttrType.AttrRideStage;
    case 604:
    case "AttrRideType":
      return EAttrType.AttrRideType;
    case 605:
    case "AttrRideUuid":
      return EAttrType.AttrRideUuid;
    case 606:
    case "AttrRideAttachEnable":
      return EAttrType.AttrRideAttachEnable;
    case 607:
    case "AttrRideMagneticEnable":
      return EAttrType.AttrRideMagneticEnable;
    case 608:
    case "AttrRideMagneticQueueId":
      return EAttrType.AttrRideMagneticQueueId;
    case 609:
    case "AttrIsForceRide":
      return EAttrType.AttrIsForceRide;
    case 650:
    case "AttrControllerUuid":
      return EAttrType.AttrControllerUuid;
    case 651:
    case "AttrPassengerList":
      return EAttrType.AttrPassengerList;
    case 680:
    case "AttrIsSilence":
      return EAttrType.AttrIsSilence;
    case 681:
    case "AttrIsConfine":
      return EAttrType.AttrIsConfine;
    case 700:
    case "AttrRideSeatCantTransfer":
      return EAttrType.AttrRideSeatCantTransfer;
    case 701:
    case "AttrCantSwim":
      return EAttrType.AttrCantSwim;
    case 702:
    case "AttrGMCantHit":
      return EAttrType.AttrGMCantHit;
    case 703:
    case "AttrCantStiff":
      return EAttrType.AttrCantStiff;
    case 704:
    case "AttrCantStiffBack":
      return EAttrType.AttrCantStiffBack;
    case 705:
    case "AttrCantStiffDown":
      return EAttrType.AttrCantStiffDown;
    case 706:
    case "AttrCantStiffAir":
      return EAttrType.AttrCantStiffAir;
    case 707:
    case "AttrCantNormalAttack":
      return EAttrType.AttrCantNormalAttack;
    case 708:
    case "AttrCantSkill":
      return EAttrType.AttrCantSkill;
    case 709:
    case "AttrCantMove":
      return EAttrType.AttrCantMove;
    case 710:
    case "AttrCantTurn":
      return EAttrType.AttrCantTurn;
    case 711:
    case "AttrCantJump":
      return EAttrType.AttrCantJump;
    case 712:
    case "AttrCantRush":
      return EAttrType.AttrCantRush;
    case 713:
    case "AttrCantGravitational":
      return EAttrType.AttrCantGravitational;
    case 714:
    case "AttrCantStiffFlow":
      return EAttrType.AttrCantStiffFlow;
    case 715:
    case "AttrCantChangeProfession":
      return EAttrType.AttrCantChangeProfession;
    case 716:
    case "AttrCantInteraction":
      return EAttrType.AttrCantInteraction;
    case 717:
    case "AttrCantFallDamage":
      return EAttrType.AttrCantFallDamage;
    case 718:
    case "AttrCanFlow":
      return EAttrType.AttrCanFlow;
    case 719:
    case "AttrCanGlide":
      return EAttrType.AttrCanGlide;
    case 720:
    case "AttrCanBeHit":
      return EAttrType.AttrCanBeHit;
    case 721:
    case "AttrCanLessenHP":
      return EAttrType.AttrCanLessenHP;
    case 722:
    case "AttrCanIntoCombat":
      return EAttrType.AttrCanIntoCombat;
    case 723:
    case "AttrCantHit":
      return EAttrType.AttrCantHit;
    case 724:
    case "AttrCanBeHatredTarget":
      return EAttrType.AttrCanBeHatredTarget;
    case 725:
    case "AttrCanHitNum":
      return EAttrType.AttrCanHitNum;
    case 726:
    case "AttrCanHitObj":
      return EAttrType.AttrCanHitObj;
    case 727:
    case "AttrCanPathFinding":
      return EAttrType.AttrCanPathFinding;
    case 728:
    case "AttrCantNormalAttackInput":
      return EAttrType.AttrCantNormalAttackInput;
    case 729:
    case "AttrCantSkillInput":
      return EAttrType.AttrCantSkillInput;
    case 730:
    case "AttrCantMoveInput":
      return EAttrType.AttrCantMoveInput;
    case 731:
    case "AttrCantJumpInput":
      return EAttrType.AttrCantJumpInput;
    case 732:
    case "AttrCantRushInput":
      return EAttrType.AttrCantRushInput;
    case 733:
    case "AttrCantUseToy":
      return EAttrType.AttrCantUseToy;
    case 750:
    case "AttrTopSummonerSkillSkin":
      return EAttrType.AttrTopSummonerSkillSkin;
    case 751:
    case "AttrSummonSkillId":
      return EAttrType.AttrSummonSkillId;
    case 800:
    case "AttrSceneServStateObjData":
      return EAttrType.AttrSceneServStateObjData;
    case 1001:
    case "AttrCommunityDataMap":
      return EAttrType.AttrCommunityDataMap;
    case 1002:
    case "AttrOwnership":
      return EAttrType.AttrOwnership;
    case 1003:
    case "AttrHomeId":
      return EAttrType.AttrHomeId;
    case 1004:
    case "DecorationInfo":
      return EAttrType.DecorationInfo;
    case 10000:
    case "AttrLevel":
      return EAttrType.AttrLevel;
    case 10010:
    case "AttrGS":
      return EAttrType.AttrGS;
    case 10020:
    case "AttrLastMaxGS":
      return EAttrType.AttrLastMaxGS;
    case 10030:
    case "AttrFightPoint":
      return EAttrType.AttrFightPoint;
    case 10031:
    case "AttrFightPointTotal":
      return EAttrType.AttrFightPointTotal;
    case 10032:
    case "AttrFightPointAdd":
      return EAttrType.AttrFightPointAdd;
    case 10033:
    case "AttrFightPointExAdd":
      return EAttrType.AttrFightPointExAdd;
    case 10034:
    case "AttrFightPointPer":
      return EAttrType.AttrFightPointPer;
    case 10035:
    case "AttrFightPointExPer":
      return EAttrType.AttrFightPointExPer;
    case 10040:
    case "AttrFightCapability":
      return EAttrType.AttrFightCapability;
    case 10041:
    case "AttrFightCapabilityTotal":
      return EAttrType.AttrFightCapabilityTotal;
    case 10042:
    case "AttrFightCapabilityAdd":
      return EAttrType.AttrFightCapabilityAdd;
    case 10043:
    case "AttrFightCapabilityExAdd":
      return EAttrType.AttrFightCapabilityExAdd;
    case 10044:
    case "AttrFightCapabilityPer":
      return EAttrType.AttrFightCapabilityPer;
    case 10045:
    case "AttrFightCapabilityExPer":
      return EAttrType.AttrFightCapabilityExPer;
    case 10050:
    case "AttrSurvivalCapability":
      return EAttrType.AttrSurvivalCapability;
    case 10051:
    case "AttrSurvivalCapabilityTotal":
      return EAttrType.AttrSurvivalCapabilityTotal;
    case 10052:
    case "AttrSurvivalCapabilityAdd":
      return EAttrType.AttrSurvivalCapabilityAdd;
    case 10053:
    case "AttrSurvivalCapabilityExAdd":
      return EAttrType.AttrSurvivalCapabilityExAdd;
    case 10054:
    case "AttrSurvivalCapabilityPer":
      return EAttrType.AttrSurvivalCapabilityPer;
    case 10055:
    case "AttrSurvivalCapabilityExPer":
      return EAttrType.AttrSurvivalCapabilityExPer;
    case 10060:
    case "AttrRankLevel":
      return EAttrType.AttrRankLevel;
    case 10200:
    case "AttrWalkVelocity":
      return EAttrType.AttrWalkVelocity;
    case 10201:
    case "AttrWalkVelocityTotal":
      return EAttrType.AttrWalkVelocityTotal;
    case 10202:
    case "AttrWalkVelocityAdd":
      return EAttrType.AttrWalkVelocityAdd;
    case 10203:
    case "AttrWalkVelocityExAdd":
      return EAttrType.AttrWalkVelocityExAdd;
    case 10204:
    case "AttrWalkVelocityPer":
      return EAttrType.AttrWalkVelocityPer;
    case 10205:
    case "AttrWalkVelocityExPer":
      return EAttrType.AttrWalkVelocityExPer;
    case 10210:
    case "AttrRunVelocity":
      return EAttrType.AttrRunVelocity;
    case 10211:
    case "AttrRunVelocityTotal":
      return EAttrType.AttrRunVelocityTotal;
    case 10212:
    case "AttrRunVelocityAdd":
      return EAttrType.AttrRunVelocityAdd;
    case 10213:
    case "AttrRunVelocityExAdd":
      return EAttrType.AttrRunVelocityExAdd;
    case 10214:
    case "AttrRunVelocityPer":
      return EAttrType.AttrRunVelocityPer;
    case 10215:
    case "AttrRunVelocityExPer":
      return EAttrType.AttrRunVelocityExPer;
    case 10220:
    case "AttrDashVelocity":
      return EAttrType.AttrDashVelocity;
    case 10221:
    case "AttrDashVelocityTotal":
      return EAttrType.AttrDashVelocityTotal;
    case 10222:
    case "AttrDashVelocityAdd":
      return EAttrType.AttrDashVelocityAdd;
    case 10223:
    case "AttrDashVelocityExAdd":
      return EAttrType.AttrDashVelocityExAdd;
    case 10224:
    case "AttrDashVelocityPer":
      return EAttrType.AttrDashVelocityPer;
    case 10225:
    case "AttrDashVelocityExPer":
      return EAttrType.AttrDashVelocityExPer;
    case 10230:
    case "AttrReviveTimeConsumePCT":
      return EAttrType.AttrReviveTimeConsumePCT;
    case 10231:
    case "AttrReviveTimeConsumePCTTotal":
      return EAttrType.AttrReviveTimeConsumePCTTotal;
    case 10232:
    case "AttrReviveTimeConsumePCTAdd":
      return EAttrType.AttrReviveTimeConsumePCTAdd;
    case 10233:
    case "AttrReviveTimeConsumePCTExAdd":
      return EAttrType.AttrReviveTimeConsumePCTExAdd;
    case 10234:
    case "AttrReviveTimeConsumePCTPer":
      return EAttrType.AttrReviveTimeConsumePCTPer;
    case 10235:
    case "AttrReviveTimeConsumePCTExPer":
      return EAttrType.AttrReviveTimeConsumePCTExPer;
    case 10240:
    case "AttrRideWalkVelocity":
      return EAttrType.AttrRideWalkVelocity;
    case 10241:
    case "AttrRideWalkVelocityTotal":
      return EAttrType.AttrRideWalkVelocityTotal;
    case 10242:
    case "AttrRideWalkVelocityAdd":
      return EAttrType.AttrRideWalkVelocityAdd;
    case 10243:
    case "AttrRideWalkVelocityExAdd":
      return EAttrType.AttrRideWalkVelocityExAdd;
    case 10244:
    case "AttrRideWalkVelocityPer":
      return EAttrType.AttrRideWalkVelocityPer;
    case 10245:
    case "AttrRideWalkVelocityExPer":
      return EAttrType.AttrRideWalkVelocityExPer;
    case 10250:
    case "AttrRideRunVelocity":
      return EAttrType.AttrRideRunVelocity;
    case 10251:
    case "AttrRideRunVelocityTotal":
      return EAttrType.AttrRideRunVelocityTotal;
    case 10252:
    case "AttrRideRunVelocityAdd":
      return EAttrType.AttrRideRunVelocityAdd;
    case 10253:
    case "AttrRideRunVelocityExAdd":
      return EAttrType.AttrRideRunVelocityExAdd;
    case 10254:
    case "AttrRideRunVelocityPer":
      return EAttrType.AttrRideRunVelocityPer;
    case 10255:
    case "AttrRideRunVelocityExPer":
      return EAttrType.AttrRideRunVelocityExPer;
    case 10260:
    case "AttrRideDashVelocity":
      return EAttrType.AttrRideDashVelocity;
    case 10261:
    case "AttrRideDashVelocityTotal":
      return EAttrType.AttrRideDashVelocityTotal;
    case 10262:
    case "AttrRideDashVelocityAdd":
      return EAttrType.AttrRideDashVelocityAdd;
    case 10263:
    case "AttrRideDashVelocityExAdd":
      return EAttrType.AttrRideDashVelocityExAdd;
    case 10264:
    case "AttrRideDashVelocityPer":
      return EAttrType.AttrRideDashVelocityPer;
    case 10265:
    case "AttrRideDashVelocityExPer":
      return EAttrType.AttrRideDashVelocityExPer;
    case 10270:
    case "AttrReviveInterTimeConsumePCT":
      return EAttrType.AttrReviveInterTimeConsumePCT;
    case 10271:
    case "AttrReviveInterTimeConsumePCTTotal":
      return EAttrType.AttrReviveInterTimeConsumePCTTotal;
    case 10272:
    case "AttrReviveInterTimeConsumePCTAdd":
      return EAttrType.AttrReviveInterTimeConsumePCTAdd;
    case 10273:
    case "AttrReviveInterTimeConsumePCTExAdd":
      return EAttrType.AttrReviveInterTimeConsumePCTExAdd;
    case 10274:
    case "AttrReviveInterTimeConsumePCTPer":
      return EAttrType.AttrReviveInterTimeConsumePCTPer;
    case 10275:
    case "AttrReviveInterTimeConsumePCTExPer":
      return EAttrType.AttrReviveInterTimeConsumePCTExPer;
    case 11010:
    case "AttrStrength":
      return EAttrType.AttrStrength;
    case 11011:
    case "AttrStrengthTotal":
      return EAttrType.AttrStrengthTotal;
    case 11012:
    case "AttrStrengthAdd":
      return EAttrType.AttrStrengthAdd;
    case 11013:
    case "AttrStrengthExAdd":
      return EAttrType.AttrStrengthExAdd;
    case 11014:
    case "AttrStrengthPer":
      return EAttrType.AttrStrengthPer;
    case 11015:
    case "AttrStrengthExPer":
      return EAttrType.AttrStrengthExPer;
    case 11020:
    case "AttrIntelligence":
      return EAttrType.AttrIntelligence;
    case 11021:
    case "AttrIntelligenceTotal":
      return EAttrType.AttrIntelligenceTotal;
    case 11022:
    case "AttrIntelligenceAdd":
      return EAttrType.AttrIntelligenceAdd;
    case 11023:
    case "AttrIntelligenceExAdd":
      return EAttrType.AttrIntelligenceExAdd;
    case 11024:
    case "AttrIntelligencePer":
      return EAttrType.AttrIntelligencePer;
    case 11025:
    case "AttrIntelligenceExPer":
      return EAttrType.AttrIntelligenceExPer;
    case 11030:
    case "AttrDexterity":
      return EAttrType.AttrDexterity;
    case 11031:
    case "AttrDexterityTotal":
      return EAttrType.AttrDexterityTotal;
    case 11032:
    case "AttrDexterityAdd":
      return EAttrType.AttrDexterityAdd;
    case 11033:
    case "AttrDexterityExAdd":
      return EAttrType.AttrDexterityExAdd;
    case 11034:
    case "AttrDexterityPer":
      return EAttrType.AttrDexterityPer;
    case 11035:
    case "AttrDexterityExPer":
      return EAttrType.AttrDexterityExPer;
    case 11040:
    case "AttrVitality":
      return EAttrType.AttrVitality;
    case 11041:
    case "AttrVitalityTotal":
      return EAttrType.AttrVitalityTotal;
    case 11042:
    case "AttrVitalityAdd":
      return EAttrType.AttrVitalityAdd;
    case 11043:
    case "AttrVitalityExAdd":
      return EAttrType.AttrVitalityExAdd;
    case 11044:
    case "AttrVitalityPer":
      return EAttrType.AttrVitalityPer;
    case 11045:
    case "AttrVitalityExPer":
      return EAttrType.AttrVitalityExPer;
    case 11110:
    case "AttrCri":
      return EAttrType.AttrCri;
    case 11111:
    case "AttrCriTotal":
      return EAttrType.AttrCriTotal;
    case 11112:
    case "AttrCriAdd":
      return EAttrType.AttrCriAdd;
    case 11113:
    case "AttrCriExAdd":
      return EAttrType.AttrCriExAdd;
    case 11114:
    case "AttrCriPer":
      return EAttrType.AttrCriPer;
    case 11115:
    case "AttrCriExPer":
      return EAttrType.AttrCriExPer;
    case 11120:
    case "AttrHaste":
      return EAttrType.AttrHaste;
    case 11121:
    case "AttrHasteTotal":
      return EAttrType.AttrHasteTotal;
    case 11122:
    case "AttrHasteAdd":
      return EAttrType.AttrHasteAdd;
    case 11123:
    case "AttrHasteExAdd":
      return EAttrType.AttrHasteExAdd;
    case 11124:
    case "AttrHastePer":
      return EAttrType.AttrHastePer;
    case 11125:
    case "AttrHasteExPer":
      return EAttrType.AttrHasteExPer;
    case 11130:
    case "AttrLuck":
      return EAttrType.AttrLuck;
    case 11131:
    case "AttrLuckTotal":
      return EAttrType.AttrLuckTotal;
    case 11132:
    case "AttrLuckAdd":
      return EAttrType.AttrLuckAdd;
    case 11133:
    case "AttrLuckExAdd":
      return EAttrType.AttrLuckExAdd;
    case 11134:
    case "AttrLuckPer":
      return EAttrType.AttrLuckPer;
    case 11135:
    case "AttrLuckExPer":
      return EAttrType.AttrLuckExPer;
    case 11140:
    case "AttrMastery":
      return EAttrType.AttrMastery;
    case 11141:
    case "AttrMasteryTotal":
      return EAttrType.AttrMasteryTotal;
    case 11142:
    case "AttrMasteryAdd":
      return EAttrType.AttrMasteryAdd;
    case 11143:
    case "AttrMasteryExAdd":
      return EAttrType.AttrMasteryExAdd;
    case 11144:
    case "AttrMasteryPer":
      return EAttrType.AttrMasteryPer;
    case 11145:
    case "AttrMasteryExPer":
      return EAttrType.AttrMasteryExPer;
    case 11150:
    case "AttrVersatility":
      return EAttrType.AttrVersatility;
    case 11151:
    case "AttrVersatilityTotal":
      return EAttrType.AttrVersatilityTotal;
    case 11152:
    case "AttrVersatilityAdd":
      return EAttrType.AttrVersatilityAdd;
    case 11153:
    case "AttrVersatilityExAdd":
      return EAttrType.AttrVersatilityExAdd;
    case 11154:
    case "AttrVersatilityPer":
      return EAttrType.AttrVersatilityPer;
    case 11155:
    case "AttrVersatilityExPer":
      return EAttrType.AttrVersatilityExPer;
    case 11160:
    case "AttrHit":
      return EAttrType.AttrHit;
    case 11161:
    case "AttrHitTotal":
      return EAttrType.AttrHitTotal;
    case 11162:
    case "AttrHitAdd":
      return EAttrType.AttrHitAdd;
    case 11163:
    case "AttrHitExAdd":
      return EAttrType.AttrHitExAdd;
    case 11164:
    case "AttrHitPer":
      return EAttrType.AttrHitPer;
    case 11165:
    case "AttrHitExPer":
      return EAttrType.AttrHitExPer;
    case 11170:
    case "AttrBlock":
      return EAttrType.AttrBlock;
    case 11171:
    case "AttrBlockTotal":
      return EAttrType.AttrBlockTotal;
    case 11172:
    case "AttrBlockAdd":
      return EAttrType.AttrBlockAdd;
    case 11173:
    case "AttrBlockExAdd":
      return EAttrType.AttrBlockExAdd;
    case 11174:
    case "AttrBlockPer":
      return EAttrType.AttrBlockPer;
    case 11175:
    case "AttrBlockExPer":
      return EAttrType.AttrBlockExPer;
    case 11310:
    case "AttrHp":
      return EAttrType.AttrHp;
    case 11320:
    case "AttrMaxHp":
      return EAttrType.AttrMaxHp;
    case 11321:
    case "AttrMaxHpTotal":
      return EAttrType.AttrMaxHpTotal;
    case 11322:
    case "AttrMaxHpAdd":
      return EAttrType.AttrMaxHpAdd;
    case 11323:
    case "AttrMaxHpExAdd":
      return EAttrType.AttrMaxHpExAdd;
    case 11324:
    case "AttrMaxHpPer":
      return EAttrType.AttrMaxHpPer;
    case 11325:
    case "AttrMaxHpExPer":
      return EAttrType.AttrMaxHpExPer;
    case 11330:
    case "AttrAttack":
      return EAttrType.AttrAttack;
    case 11331:
    case "AttrAttackTotal":
      return EAttrType.AttrAttackTotal;
    case 11332:
    case "AttrAttackAdd":
      return EAttrType.AttrAttackAdd;
    case 11333:
    case "AttrAttackExAdd":
      return EAttrType.AttrAttackExAdd;
    case 11334:
    case "AttrAttackPer":
      return EAttrType.AttrAttackPer;
    case 11335:
    case "AttrAttackExPer":
      return EAttrType.AttrAttackExPer;
    case 11340:
    case "AttrMAttack":
      return EAttrType.AttrMAttack;
    case 11341:
    case "AttrMAttackTotal":
      return EAttrType.AttrMAttackTotal;
    case 11342:
    case "AttrMAttackAdd":
      return EAttrType.AttrMAttackAdd;
    case 11343:
    case "AttrMAttackExAdd":
      return EAttrType.AttrMAttackExAdd;
    case 11344:
    case "AttrMAttackPer":
      return EAttrType.AttrMAttackPer;
    case 11345:
    case "AttrMAttackExPer":
      return EAttrType.AttrMAttackExPer;
    case 11350:
    case "AttrDefense":
      return EAttrType.AttrDefense;
    case 11351:
    case "AttrDefenseTotal":
      return EAttrType.AttrDefenseTotal;
    case 11352:
    case "AttrDefenseAdd":
      return EAttrType.AttrDefenseAdd;
    case 11353:
    case "AttrDefenseExAdd":
      return EAttrType.AttrDefenseExAdd;
    case 11354:
    case "AttrDefensePer":
      return EAttrType.AttrDefensePer;
    case 11355:
    case "AttrDefenseExPer":
      return EAttrType.AttrDefenseExPer;
    case 11360:
    case "AttrMDefense":
      return EAttrType.AttrMDefense;
    case 11361:
    case "AttrMDefenseTotal":
      return EAttrType.AttrMDefenseTotal;
    case 11362:
    case "AttrMDefenseAdd":
      return EAttrType.AttrMDefenseAdd;
    case 11363:
    case "AttrMDefenseExAdd":
      return EAttrType.AttrMDefenseExAdd;
    case 11364:
    case "AttrMDefensePer":
      return EAttrType.AttrMDefensePer;
    case 11365:
    case "AttrMDefenseExPer":
      return EAttrType.AttrMDefenseExPer;
    case 11370:
    case "AttrIgnoreDefense":
      return EAttrType.AttrIgnoreDefense;
    case 11371:
    case "AttrIgnoreDefenseTotal":
      return EAttrType.AttrIgnoreDefenseTotal;
    case 11372:
    case "AttrIgnoreDefenseAdd":
      return EAttrType.AttrIgnoreDefenseAdd;
    case 11373:
    case "AttrIgnoreDefenseExAdd":
      return EAttrType.AttrIgnoreDefenseExAdd;
    case 11374:
    case "AttrIgnoreDefensePer":
      return EAttrType.AttrIgnoreDefensePer;
    case 11375:
    case "AttrIgnoreDefenseExPer":
      return EAttrType.AttrIgnoreDefenseExPer;
    case 11380:
    case "AttrIgnoreMDefense":
      return EAttrType.AttrIgnoreMDefense;
    case 11381:
    case "AttrIgnoreMDefenseTotal":
      return EAttrType.AttrIgnoreMDefenseTotal;
    case 11382:
    case "AttrIgnoreMDefenseAdd":
      return EAttrType.AttrIgnoreMDefenseAdd;
    case 11383:
    case "AttrIgnoreMDefenseExAdd":
      return EAttrType.AttrIgnoreMDefenseExAdd;
    case 11384:
    case "AttrIgnoreMDefensePer":
      return EAttrType.AttrIgnoreMDefensePer;
    case 11385:
    case "AttrIgnoreMDefenseExPer":
      return EAttrType.AttrIgnoreMDefenseExPer;
    case 11390:
    case "AttrIgnoreDefensePCT":
      return EAttrType.AttrIgnoreDefensePCT;
    case 11391:
    case "AttrIgnoreDefensePCTTotal":
      return EAttrType.AttrIgnoreDefensePCTTotal;
    case 11392:
    case "AttrIgnoreDefensePCTAdd":
      return EAttrType.AttrIgnoreDefensePCTAdd;
    case 11393:
    case "AttrIgnoreDefensePCTExAdd":
      return EAttrType.AttrIgnoreDefensePCTExAdd;
    case 11394:
    case "AttrIgnoreDefensePCTPer":
      return EAttrType.AttrIgnoreDefensePCTPer;
    case 11395:
    case "AttrIgnoreDefensePCTExPer":
      return EAttrType.AttrIgnoreDefensePCTExPer;
    case 11400:
    case "AttrIgnoreMDefensePCT":
      return EAttrType.AttrIgnoreMDefensePCT;
    case 11401:
    case "AttrIgnoreMDefensePCTTotal":
      return EAttrType.AttrIgnoreMDefensePCTTotal;
    case 11402:
    case "AttrIgnoreMDefensePCTAdd":
      return EAttrType.AttrIgnoreMDefensePCTAdd;
    case 11403:
    case "AttrIgnoreMDefensePCTExAdd":
      return EAttrType.AttrIgnoreMDefensePCTExAdd;
    case 11404:
    case "AttrIgnoreMDefensePCTPer":
      return EAttrType.AttrIgnoreMDefensePCTPer;
    case 11405:
    case "AttrIgnoreMDefensePCTExPer":
      return EAttrType.AttrIgnoreMDefensePCTExPer;
    case 11410:
    case "AttrRefineAttack":
      return EAttrType.AttrRefineAttack;
    case 11411:
    case "AttrRefineAttackTotal":
      return EAttrType.AttrRefineAttackTotal;
    case 11412:
    case "AttrRefineAttackAdd":
      return EAttrType.AttrRefineAttackAdd;
    case 11413:
    case "AttrRefineAttackExAdd":
      return EAttrType.AttrRefineAttackExAdd;
    case 11414:
    case "AttrRefineAttackPer":
      return EAttrType.AttrRefineAttackPer;
    case 11415:
    case "AttrRefineAttackExPer":
      return EAttrType.AttrRefineAttackExPer;
    case 11420:
    case "AttrRefineDefense":
      return EAttrType.AttrRefineDefense;
    case 11421:
    case "AttrRefineDefenseTotal":
      return EAttrType.AttrRefineDefenseTotal;
    case 11422:
    case "AttrRefineDefenseAdd":
      return EAttrType.AttrRefineDefenseAdd;
    case 11423:
    case "AttrRefineDefenseExAdd":
      return EAttrType.AttrRefineDefenseExAdd;
    case 11424:
    case "AttrRefineDefensePer":
      return EAttrType.AttrRefineDefensePer;
    case 11425:
    case "AttrRefineDefenseExPer":
      return EAttrType.AttrRefineDefenseExPer;
    case 11430:
    case "AttrRefineMAttack":
      return EAttrType.AttrRefineMAttack;
    case 11431:
    case "AttrRefineMAttackTotal":
      return EAttrType.AttrRefineMAttackTotal;
    case 11432:
    case "AttrRefineMAttackAdd":
      return EAttrType.AttrRefineMAttackAdd;
    case 11433:
    case "AttrRefineMAttackExAdd":
      return EAttrType.AttrRefineMAttackExAdd;
    case 11434:
    case "AttrRefineMAttackPer":
      return EAttrType.AttrRefineMAttackPer;
    case 11435:
    case "AttrRefineMAttackExPer":
      return EAttrType.AttrRefineMAttackExPer;
    case 11500:
    case "AttrElementAtk":
      return EAttrType.AttrElementAtk;
    case 11501:
    case "AttrElementAtkTotal":
      return EAttrType.AttrElementAtkTotal;
    case 11502:
    case "AttrElementAtkAdd":
      return EAttrType.AttrElementAtkAdd;
    case 11503:
    case "AttrElementAtkExAdd":
      return EAttrType.AttrElementAtkExAdd;
    case 11504:
    case "AttrElementAtkPer":
      return EAttrType.AttrElementAtkPer;
    case 11505:
    case "AttrElementAtkExPer":
      return EAttrType.AttrElementAtkExPer;
    case 11510:
    case "AttrFireAtk":
      return EAttrType.AttrFireAtk;
    case 11511:
    case "AttrFireAtkTotal":
      return EAttrType.AttrFireAtkTotal;
    case 11512:
    case "AttrFireAtkAdd":
      return EAttrType.AttrFireAtkAdd;
    case 11513:
    case "AttrFireAtkExAdd":
      return EAttrType.AttrFireAtkExAdd;
    case 11514:
    case "AttrFireAtkPer":
      return EAttrType.AttrFireAtkPer;
    case 11515:
    case "AttrFireAtkExPer":
      return EAttrType.AttrFireAtkExPer;
    case 11520:
    case "AttrWaterAtk":
      return EAttrType.AttrWaterAtk;
    case 11521:
    case "AttrWaterAtkTotal":
      return EAttrType.AttrWaterAtkTotal;
    case 11522:
    case "AttrWaterAtkAdd":
      return EAttrType.AttrWaterAtkAdd;
    case 11523:
    case "AttrWaterAtkExAdd":
      return EAttrType.AttrWaterAtkExAdd;
    case 11524:
    case "AttrWaterAtkPer":
      return EAttrType.AttrWaterAtkPer;
    case 11525:
    case "AttrWaterAtkExPer":
      return EAttrType.AttrWaterAtkExPer;
    case 11530:
    case "AttrWoodAtk":
      return EAttrType.AttrWoodAtk;
    case 11531:
    case "AttrWoodAtkTotal":
      return EAttrType.AttrWoodAtkTotal;
    case 11532:
    case "AttrWoodAtkAdd":
      return EAttrType.AttrWoodAtkAdd;
    case 11533:
    case "AttrWoodAtkExAdd":
      return EAttrType.AttrWoodAtkExAdd;
    case 11534:
    case "AttrWoodAtkPer":
      return EAttrType.AttrWoodAtkPer;
    case 11535:
    case "AttrWoodAtkExPer":
      return EAttrType.AttrWoodAtkExPer;
    case 11540:
    case "AttrElectricityAtk":
      return EAttrType.AttrElectricityAtk;
    case 11541:
    case "AttrElectricityAtkTotal":
      return EAttrType.AttrElectricityAtkTotal;
    case 11542:
    case "AttrElectricityAtkAdd":
      return EAttrType.AttrElectricityAtkAdd;
    case 11543:
    case "AttrElectricityAtkExAdd":
      return EAttrType.AttrElectricityAtkExAdd;
    case 11544:
    case "AttrElectricityAtkPer":
      return EAttrType.AttrElectricityAtkPer;
    case 11545:
    case "AttrElectricityAtkExPer":
      return EAttrType.AttrElectricityAtkExPer;
    case 11550:
    case "AttrWindAtk":
      return EAttrType.AttrWindAtk;
    case 11551:
    case "AttrWindAtkTotal":
      return EAttrType.AttrWindAtkTotal;
    case 11552:
    case "AttrWindAtkAdd":
      return EAttrType.AttrWindAtkAdd;
    case 11553:
    case "AttrWindAtkExAdd":
      return EAttrType.AttrWindAtkExAdd;
    case 11554:
    case "AttrWindAtkPer":
      return EAttrType.AttrWindAtkPer;
    case 11555:
    case "AttrWindAtkExPer":
      return EAttrType.AttrWindAtkExPer;
    case 11560:
    case "AttrRockAtk":
      return EAttrType.AttrRockAtk;
    case 11561:
    case "AttrRockAtkTotal":
      return EAttrType.AttrRockAtkTotal;
    case 11562:
    case "AttrRockAtkAdd":
      return EAttrType.AttrRockAtkAdd;
    case 11563:
    case "AttrRockAtkExAdd":
      return EAttrType.AttrRockAtkExAdd;
    case 11564:
    case "AttrRockAtkPer":
      return EAttrType.AttrRockAtkPer;
    case 11565:
    case "AttrRockAtkExPer":
      return EAttrType.AttrRockAtkExPer;
    case 11570:
    case "AttrLightAtk":
      return EAttrType.AttrLightAtk;
    case 11571:
    case "AttrLightAtkTotal":
      return EAttrType.AttrLightAtkTotal;
    case 11572:
    case "AttrLightAtkAdd":
      return EAttrType.AttrLightAtkAdd;
    case 11573:
    case "AttrLightAtkExAdd":
      return EAttrType.AttrLightAtkExAdd;
    case 11574:
    case "AttrLightAtkPer":
      return EAttrType.AttrLightAtkPer;
    case 11575:
    case "AttrLightAtkExPer":
      return EAttrType.AttrLightAtkExPer;
    case 11580:
    case "AttrDarkAtk":
      return EAttrType.AttrDarkAtk;
    case 11581:
    case "AttrDarkAtkTotal":
      return EAttrType.AttrDarkAtkTotal;
    case 11582:
    case "AttrDarkAtkAdd":
      return EAttrType.AttrDarkAtkAdd;
    case 11583:
    case "AttrDarkAtkExAdd":
      return EAttrType.AttrDarkAtkExAdd;
    case 11584:
    case "AttrDarkAtkPer":
      return EAttrType.AttrDarkAtkPer;
    case 11585:
    case "AttrDarkAtkExPer":
      return EAttrType.AttrDarkAtkExPer;
    case 11710:
    case "AttrCrit":
      return EAttrType.AttrCrit;
    case 11711:
    case "AttrCritTotal":
      return EAttrType.AttrCritTotal;
    case 11712:
    case "AttrCritAdd":
      return EAttrType.AttrCritAdd;
    case 11713:
    case "AttrCritExAdd":
      return EAttrType.AttrCritExAdd;
    case 11714:
    case "AttrCritPer":
      return EAttrType.AttrCritPer;
    case 11715:
    case "AttrCritExPer":
      return EAttrType.AttrCritExPer;
    case 11720:
    case "AttrAttackSpeedPCT":
      return EAttrType.AttrAttackSpeedPCT;
    case 11721:
    case "AttrAttackSpeedPCTTotal":
      return EAttrType.AttrAttackSpeedPCTTotal;
    case 11722:
    case "AttrAttackSpeedPCTAdd":
      return EAttrType.AttrAttackSpeedPCTAdd;
    case 11723:
    case "AttrAttackSpeedPCTExAdd":
      return EAttrType.AttrAttackSpeedPCTExAdd;
    case 11724:
    case "AttrAttackSpeedPCTPer":
      return EAttrType.AttrAttackSpeedPCTPer;
    case 11725:
    case "AttrAttackSpeedPCTExPer":
      return EAttrType.AttrAttackSpeedPCTExPer;
    case 11730:
    case "AttrCastSpeedPCT":
      return EAttrType.AttrCastSpeedPCT;
    case 11731:
    case "AttrCastSpeedPCTTotal":
      return EAttrType.AttrCastSpeedPCTTotal;
    case 11732:
    case "AttrCastSpeedPCTAdd":
      return EAttrType.AttrCastSpeedPCTAdd;
    case 11733:
    case "AttrCastSpeedPCTExAdd":
      return EAttrType.AttrCastSpeedPCTExAdd;
    case 11734:
    case "AttrCastSpeedPCTPer":
      return EAttrType.AttrCastSpeedPCTPer;
    case 11735:
    case "AttrCastSpeedPCTExPer":
      return EAttrType.AttrCastSpeedPCTExPer;
    case 11740:
    case "AttrChargeSpeedPCT":
      return EAttrType.AttrChargeSpeedPCT;
    case 11741:
    case "AttrChargeSpeedPCTTotal":
      return EAttrType.AttrChargeSpeedPCTTotal;
    case 11742:
    case "AttrChargeSpeedPCTAdd":
      return EAttrType.AttrChargeSpeedPCTAdd;
    case 11743:
    case "AttrChargeSpeedPCTExAdd":
      return EAttrType.AttrChargeSpeedPCTExAdd;
    case 11744:
    case "AttrChargeSpeedPCTPer":
      return EAttrType.AttrChargeSpeedPCTPer;
    case 11745:
    case "AttrChargeSpeedPCTExPer":
      return EAttrType.AttrChargeSpeedPCTExPer;
    case 11750:
    case "AttrSkillCD":
      return EAttrType.AttrSkillCD;
    case 11751:
    case "AttrSkillCDTotal":
      return EAttrType.AttrSkillCDTotal;
    case 11752:
    case "AttrSkillCDAdd":
      return EAttrType.AttrSkillCDAdd;
    case 11753:
    case "AttrSkillCDExAdd":
      return EAttrType.AttrSkillCDExAdd;
    case 11754:
    case "AttrSkillCDPer":
      return EAttrType.AttrSkillCDPer;
    case 11755:
    case "AttrSkillCDExPer":
      return EAttrType.AttrSkillCDExPer;
    case 11760:
    case "AttrSkillCDPCT":
      return EAttrType.AttrSkillCDPCT;
    case 11761:
    case "AttrSkillCDPCTTotal":
      return EAttrType.AttrSkillCDPCTTotal;
    case 11762:
    case "AttrSkillCDPCTAdd":
      return EAttrType.AttrSkillCDPCTAdd;
    case 11763:
    case "AttrSkillCDPCTExAdd":
      return EAttrType.AttrSkillCDPCTExAdd;
    case 11764:
    case "AttrSkillCDPCTPer":
      return EAttrType.AttrSkillCDPCTPer;
    case 11765:
    case "AttrSkillCDPCTExPer":
      return EAttrType.AttrSkillCDPCTExPer;
    case 11770:
    case "AttrDotTime":
      return EAttrType.AttrDotTime;
    case 11771:
    case "AttrDotTimeTotal":
      return EAttrType.AttrDotTimeTotal;
    case 11772:
    case "AttrDotTimeAdd":
      return EAttrType.AttrDotTimeAdd;
    case 11773:
    case "AttrDotTimeExAdd":
      return EAttrType.AttrDotTimeExAdd;
    case 11774:
    case "AttrDotTimePer":
      return EAttrType.AttrDotTimePer;
    case 11775:
    case "AttrDotTimeExPer":
      return EAttrType.AttrDotTimeExPer;
    case 11780:
    case "AttrLuckyStrikeProb":
      return EAttrType.AttrLuckyStrikeProb;
    case 11781:
    case "AttrLuckyStrikeProbTotal":
      return EAttrType.AttrLuckyStrikeProbTotal;
    case 11782:
    case "AttrLuckyStrikeProbAdd":
      return EAttrType.AttrLuckyStrikeProbAdd;
    case 11783:
    case "AttrLuckyStrikeProbExAdd":
      return EAttrType.AttrLuckyStrikeProbExAdd;
    case 11784:
    case "AttrLuckyStrikeProbPer":
      return EAttrType.AttrLuckyStrikeProbPer;
    case 11785:
    case "AttrLuckyStrikeProbExPer":
      return EAttrType.AttrLuckyStrikeProbExPer;
    case 11790:
    case "AttrHeal":
      return EAttrType.AttrHeal;
    case 11791:
    case "AttrHealTotal":
      return EAttrType.AttrHealTotal;
    case 11792:
    case "AttrHealAdd":
      return EAttrType.AttrHealAdd;
    case 11793:
    case "AttrHealExAdd":
      return EAttrType.AttrHealExAdd;
    case 11794:
    case "AttrHealPer":
      return EAttrType.AttrHealPer;
    case 11795:
    case "AttrHealExPer":
      return EAttrType.AttrHealExPer;
    case 11800:
    case "AttrHealed":
      return EAttrType.AttrHealed;
    case 11801:
    case "AttrHealedTotal":
      return EAttrType.AttrHealedTotal;
    case 11802:
    case "AttrHealedAdd":
      return EAttrType.AttrHealedAdd;
    case 11803:
    case "AttrHealedExAdd":
      return EAttrType.AttrHealedExAdd;
    case 11804:
    case "AttrHealedPer":
      return EAttrType.AttrHealedPer;
    case 11805:
    case "AttrHealedExPer":
      return EAttrType.AttrHealedExPer;
    case 11810:
    case "AttrShieldAddPCT":
      return EAttrType.AttrShieldAddPCT;
    case 11811:
    case "AttrShieldAddPCTTotal":
      return EAttrType.AttrShieldAddPCTTotal;
    case 11812:
    case "AttrShieldAddPCTAdd":
      return EAttrType.AttrShieldAddPCTAdd;
    case 11813:
    case "AttrShieldAddPCTExAdd":
      return EAttrType.AttrShieldAddPCTExAdd;
    case 11814:
    case "AttrShieldAddPCTPer":
      return EAttrType.AttrShieldAddPCTPer;
    case 11815:
    case "AttrShieldAddPCTExPer":
      return EAttrType.AttrShieldAddPCTExPer;
    case 11820:
    case "AttrShieldGainPCT":
      return EAttrType.AttrShieldGainPCT;
    case 11821:
    case "AttrShieldGainPCTTotal":
      return EAttrType.AttrShieldGainPCTTotal;
    case 11822:
    case "AttrShieldGainPCTAdd":
      return EAttrType.AttrShieldGainPCTAdd;
    case 11823:
    case "AttrShieldGainPCTExAdd":
      return EAttrType.AttrShieldGainPCTExAdd;
    case 11824:
    case "AttrShieldGainPCTPer":
      return EAttrType.AttrShieldGainPCTPer;
    case 11825:
    case "AttrShieldGainPCTExPer":
      return EAttrType.AttrShieldGainPCTExPer;
    case 11830:
    case "AttrStunnedDamagePCT":
      return EAttrType.AttrStunnedDamagePCT;
    case 11831:
    case "AttrStunnedDamagePCTTotal":
      return EAttrType.AttrStunnedDamagePCTTotal;
    case 11832:
    case "AttrStunnedDamagePCTAdd":
      return EAttrType.AttrStunnedDamagePCTAdd;
    case 11833:
    case "AttrStunnedDamagePCTExAdd":
      return EAttrType.AttrStunnedDamagePCTExAdd;
    case 11834:
    case "AttrStunnedDamagePCTPer":
      return EAttrType.AttrStunnedDamagePCTPer;
    case 11835:
    case "AttrStunnedDamagePCTExPer":
      return EAttrType.AttrStunnedDamagePCTExPer;
    case 11840:
    case "AttrExtDamInc":
      return EAttrType.AttrExtDamInc;
    case 11841:
    case "AttrExtDamIncTotal":
      return EAttrType.AttrExtDamIncTotal;
    case 11842:
    case "AttrExtDamIncAdd":
      return EAttrType.AttrExtDamIncAdd;
    case 11843:
    case "AttrExtDamIncExAdd":
      return EAttrType.AttrExtDamIncExAdd;
    case 11844:
    case "AttrExtDamIncPer":
      return EAttrType.AttrExtDamIncPer;
    case 11845:
    case "AttrExtDamIncExPer":
      return EAttrType.AttrExtDamIncExPer;
    case 11850:
    case "AttrExtDamRes":
      return EAttrType.AttrExtDamRes;
    case 11851:
    case "AttrExtDamResTotal":
      return EAttrType.AttrExtDamResTotal;
    case 11852:
    case "AttrExtDamResAdd":
      return EAttrType.AttrExtDamResAdd;
    case 11853:
    case "AttrExtDamResExAdd":
      return EAttrType.AttrExtDamResExAdd;
    case 11854:
    case "AttrExtDamResPer":
      return EAttrType.AttrExtDamResPer;
    case 11855:
    case "AttrExtDamResExPer":
      return EAttrType.AttrExtDamResExPer;
    case 11860:
    case "AttrDpsOwnEffectStr":
      return EAttrType.AttrDpsOwnEffectStr;
    case 11861:
    case "AttrDpsOwnEffectStrTotal":
      return EAttrType.AttrDpsOwnEffectStrTotal;
    case 11862:
    case "AttrDpsOwnEffectStrAdd":
      return EAttrType.AttrDpsOwnEffectStrAdd;
    case 11863:
    case "AttrDpsOwnEffectStrExAdd":
      return EAttrType.AttrDpsOwnEffectStrExAdd;
    case 11864:
    case "AttrDpsOwnEffectStrPer":
      return EAttrType.AttrDpsOwnEffectStrPer;
    case 11865:
    case "AttrDpsOwnEffectStrExPer":
      return EAttrType.AttrDpsOwnEffectStrExPer;
    case 11870:
    case "AttrRainbowDamage":
      return EAttrType.AttrRainbowDamage;
    case 11871:
    case "AttrRainbowDamageTotal":
      return EAttrType.AttrRainbowDamageTotal;
    case 11872:
    case "AttrRainbowDamageAdd":
      return EAttrType.AttrRainbowDamageAdd;
    case 11873:
    case "AttrRainbowDamageExAdd":
      return EAttrType.AttrRainbowDamageExAdd;
    case 11874:
    case "AttrRainbowDamagePer":
      return EAttrType.AttrRainbowDamagePer;
    case 11875:
    case "AttrRainbowDamageExPer":
      return EAttrType.AttrRainbowDamageExPer;
    case 11880:
    case "AttrSuppressDamInc":
      return EAttrType.AttrSuppressDamInc;
    case 11881:
    case "AttrSuppressDamIncTotal":
      return EAttrType.AttrSuppressDamIncTotal;
    case 11882:
    case "AttrSuppressDamIncAdd":
      return EAttrType.AttrSuppressDamIncAdd;
    case 11883:
    case "AttrSuppressDamIncExAdd":
      return EAttrType.AttrSuppressDamIncExAdd;
    case 11884:
    case "AttrSuppressDamIncPer":
      return EAttrType.AttrSuppressDamIncPer;
    case 11885:
    case "AttrSuppressDamIncExPer":
      return EAttrType.AttrSuppressDamIncExPer;
    case 11890:
    case "AttrSuppressDamRes":
      return EAttrType.AttrSuppressDamRes;
    case 11891:
    case "AttrSuppressDamResTotal":
      return EAttrType.AttrSuppressDamResTotal;
    case 11892:
    case "AttrSuppressDamResAdd":
      return EAttrType.AttrSuppressDamResAdd;
    case 11893:
    case "AttrSuppressDamResExAdd":
      return EAttrType.AttrSuppressDamResExAdd;
    case 11894:
    case "AttrSuppressDamResPer":
      return EAttrType.AttrSuppressDamResPer;
    case 11895:
    case "AttrSuppressDamResExPer":
      return EAttrType.AttrSuppressDamResExPer;
    case 11900:
    case "AttrInspirePct":
      return EAttrType.AttrInspirePct;
    case 11901:
    case "AttrInspirePctTotal":
      return EAttrType.AttrInspirePctTotal;
    case 11902:
    case "AttrInspirePctAdd":
      return EAttrType.AttrInspirePctAdd;
    case 11903:
    case "AttrInspirePctExAdd":
      return EAttrType.AttrInspirePctExAdd;
    case 11904:
    case "AttrInspirePctPer":
      return EAttrType.AttrInspirePctPer;
    case 11905:
    case "AttrInspirePctExPer":
      return EAttrType.AttrInspirePctExPer;
    case 11910:
    case "AttrHateRatePTC":
      return EAttrType.AttrHateRatePTC;
    case 11911:
    case "AttrHateRatePTCTotal":
      return EAttrType.AttrHateRatePTCTotal;
    case 11912:
    case "AttrHateRatePTCAdd":
      return EAttrType.AttrHateRatePTCAdd;
    case 11913:
    case "AttrHateRatePTCExAdd":
      return EAttrType.AttrHateRatePTCExAdd;
    case 11914:
    case "AttrHateRatePTCPer":
      return EAttrType.AttrHateRatePTCPer;
    case 11915:
    case "AttrHateRatePTCExPer":
      return EAttrType.AttrHateRatePTCExPer;
    case 11930:
    case "AttrHastePct":
      return EAttrType.AttrHastePct;
    case 11931:
    case "AttrHastePctTotal":
      return EAttrType.AttrHastePctTotal;
    case 11932:
    case "AttrHastePctAdd":
      return EAttrType.AttrHastePctAdd;
    case 11933:
    case "AttrHastePctExAdd":
      return EAttrType.AttrHastePctExAdd;
    case 11934:
    case "AttrHastePctPer":
      return EAttrType.AttrHastePctPer;
    case 11935:
    case "AttrHastePctExPer":
      return EAttrType.AttrHastePctExPer;
    case 11940:
    case "AttrMasteryPct":
      return EAttrType.AttrMasteryPct;
    case 11941:
    case "AttrMasteryPctTotal":
      return EAttrType.AttrMasteryPctTotal;
    case 11942:
    case "AttrMasteryPctAdd":
      return EAttrType.AttrMasteryPctAdd;
    case 11943:
    case "AttrMasteryPctExAdd":
      return EAttrType.AttrMasteryPctExAdd;
    case 11944:
    case "AttrMasteryPctPer":
      return EAttrType.AttrMasteryPctPer;
    case 11945:
    case "AttrMasteryPctExPer":
      return EAttrType.AttrMasteryPctExPer;
    case 11950:
    case "AttrVersatilityPct":
      return EAttrType.AttrVersatilityPct;
    case 11951:
    case "AttrVersatilityPctTotal":
      return EAttrType.AttrVersatilityPctTotal;
    case 11952:
    case "AttrVersatilityPctAdd":
      return EAttrType.AttrVersatilityPctAdd;
    case 11953:
    case "AttrVersatilityPctExAdd":
      return EAttrType.AttrVersatilityPctExAdd;
    case 11954:
    case "AttrVersatilityPctPer":
      return EAttrType.AttrVersatilityPctPer;
    case 11955:
    case "AttrVersatilityPctExPer":
      return EAttrType.AttrVersatilityPctExPer;
    case 11960:
    case "AttrCdAcceleratePct":
      return EAttrType.AttrCdAcceleratePct;
    case 11961:
    case "AttrCdAcceleratePctTotal":
      return EAttrType.AttrCdAcceleratePctTotal;
    case 11962:
    case "AttrCdAcceleratePctAdd":
      return EAttrType.AttrCdAcceleratePctAdd;
    case 11963:
    case "AttrCdAcceleratePctExAdd":
      return EAttrType.AttrCdAcceleratePctExAdd;
    case 11964:
    case "AttrCdAcceleratePctPer":
      return EAttrType.AttrCdAcceleratePctPer;
    case 11965:
    case "AttrCdAcceleratePctExPer":
      return EAttrType.AttrCdAcceleratePctExPer;
    case 11970:
    case "AttrBlockPct":
      return EAttrType.AttrBlockPct;
    case 11971:
    case "AttrBlockPctTotal":
      return EAttrType.AttrBlockPctTotal;
    case 11972:
    case "AttrBlockPctAdd":
      return EAttrType.AttrBlockPctAdd;
    case 11973:
    case "AttrBlockPctExAdd":
      return EAttrType.AttrBlockPctExAdd;
    case 11974:
    case "AttrBlockPctPer":
      return EAttrType.AttrBlockPctPer;
    case 11975:
    case "AttrBlockPctExPer":
      return EAttrType.AttrBlockPctExPer;
    case 11980:
    case "AttrFightResCdSpeedPct":
      return EAttrType.AttrFightResCdSpeedPct;
    case 11981:
    case "AttrFightResCdSpeedPctTotal":
      return EAttrType.AttrFightResCdSpeedPctTotal;
    case 11982:
    case "AttrFightResCdSpeedPctAdd":
      return EAttrType.AttrFightResCdSpeedPctAdd;
    case 11983:
    case "AttrFightResCdSpeedPctExAdd":
      return EAttrType.AttrFightResCdSpeedPctExAdd;
    case 11984:
    case "AttrFightResCdSpeedPctPer":
      return EAttrType.AttrFightResCdSpeedPctPer;
    case 11985:
    case "AttrFightResCdSpeedPctExPer":
      return EAttrType.AttrFightResCdSpeedPctExPer;
    case 11990:
    case "AttrPetAttackSpeedPCT":
      return EAttrType.AttrPetAttackSpeedPCT;
    case 11991:
    case "AttrPetAttackSpeedPCTTotal":
      return EAttrType.AttrPetAttackSpeedPCTTotal;
    case 11992:
    case "AttrPetAttackSpeedPCTAdd":
      return EAttrType.AttrPetAttackSpeedPCTAdd;
    case 11993:
    case "AttrPetAttackSpeedPCTExAdd":
      return EAttrType.AttrPetAttackSpeedPCTExAdd;
    case 11994:
    case "AttrPetAttackSpeedPCTPer":
      return EAttrType.AttrPetAttackSpeedPCTPer;
    case 11995:
    case "AttrPetAttackSpeedPCTExPer":
      return EAttrType.AttrPetAttackSpeedPCTExPer;
    case 12510:
    case "AttrCritDamage":
      return EAttrType.AttrCritDamage;
    case 12511:
    case "AttrCritDamageTotal":
      return EAttrType.AttrCritDamageTotal;
    case 12512:
    case "AttrCritDamageAdd":
      return EAttrType.AttrCritDamageAdd;
    case 12513:
    case "AttrCritDamageExAdd":
      return EAttrType.AttrCritDamageExAdd;
    case 12514:
    case "AttrCritDamagePer":
      return EAttrType.AttrCritDamagePer;
    case 12515:
    case "AttrCritDamageExPer":
      return EAttrType.AttrCritDamageExPer;
    case 12520:
    case "AttrCritDamageRes":
      return EAttrType.AttrCritDamageRes;
    case 12521:
    case "AttrCritDamageResTotal":
      return EAttrType.AttrCritDamageResTotal;
    case 12522:
    case "AttrCritDamageResAdd":
      return EAttrType.AttrCritDamageResAdd;
    case 12523:
    case "AttrCritDamageResExAdd":
      return EAttrType.AttrCritDamageResExAdd;
    case 12524:
    case "AttrCritDamageResPer":
      return EAttrType.AttrCritDamageResPer;
    case 12525:
    case "AttrCritDamageResExPer":
      return EAttrType.AttrCritDamageResExPer;
    case 12530:
    case "AttrLuckDamInc":
      return EAttrType.AttrLuckDamInc;
    case 12531:
    case "AttrLuckDamIncTotal":
      return EAttrType.AttrLuckDamIncTotal;
    case 12532:
    case "AttrLuckDamIncAdd":
      return EAttrType.AttrLuckDamIncAdd;
    case 12533:
    case "AttrLuckDamIncExAdd":
      return EAttrType.AttrLuckDamIncExAdd;
    case 12534:
    case "AttrLuckDamIncPer":
      return EAttrType.AttrLuckDamIncPer;
    case 12535:
    case "AttrLuckDamIncExPer":
      return EAttrType.AttrLuckDamIncExPer;
    case 12540:
    case "AttrBlockDamRes":
      return EAttrType.AttrBlockDamRes;
    case 12541:
    case "AttrBlockDamResTotal":
      return EAttrType.AttrBlockDamResTotal;
    case 12542:
    case "AttrBlockDamResAdd":
      return EAttrType.AttrBlockDamResAdd;
    case 12543:
    case "AttrBlockDamResExAdd":
      return EAttrType.AttrBlockDamResExAdd;
    case 12544:
    case "AttrBlockDamResPer":
      return EAttrType.AttrBlockDamResPer;
    case 12545:
    case "AttrBlockDamResExPer":
      return EAttrType.AttrBlockDamResExPer;
    case 12550:
    case "AttrDamInc":
      return EAttrType.AttrDamInc;
    case 12551:
    case "AttrDamIncTotal":
      return EAttrType.AttrDamIncTotal;
    case 12552:
    case "AttrDamIncAdd":
      return EAttrType.AttrDamIncAdd;
    case 12553:
    case "AttrDamIncExAdd":
      return EAttrType.AttrDamIncExAdd;
    case 12554:
    case "AttrDamIncPer":
      return EAttrType.AttrDamIncPer;
    case 12555:
    case "AttrDamIncExPer":
      return EAttrType.AttrDamIncExPer;
    case 12560:
    case "AttrDamRes":
      return EAttrType.AttrDamRes;
    case 12561:
    case "AttrDamResTotal":
      return EAttrType.AttrDamResTotal;
    case 12562:
    case "AttrDamResAdd":
      return EAttrType.AttrDamResAdd;
    case 12563:
    case "AttrDamResExAdd":
      return EAttrType.AttrDamResExAdd;
    case 12564:
    case "AttrDamResPer":
      return EAttrType.AttrDamResPer;
    case 12565:
    case "AttrDamResExPer":
      return EAttrType.AttrDamResExPer;
    case 12570:
    case "AttrMdamInc":
      return EAttrType.AttrMdamInc;
    case 12571:
    case "AttrMdamIncTotal":
      return EAttrType.AttrMdamIncTotal;
    case 12572:
    case "AttrMdamIncAdd":
      return EAttrType.AttrMdamIncAdd;
    case 12573:
    case "AttrMdamIncExAdd":
      return EAttrType.AttrMdamIncExAdd;
    case 12574:
    case "AttrMdamIncPer":
      return EAttrType.AttrMdamIncPer;
    case 12575:
    case "AttrMdamIncExPer":
      return EAttrType.AttrMdamIncExPer;
    case 12580:
    case "AttrMdamRes":
      return EAttrType.AttrMdamRes;
    case 12581:
    case "AttrMdamResTotal":
      return EAttrType.AttrMdamResTotal;
    case 12582:
    case "AttrMdamResAdd":
      return EAttrType.AttrMdamResAdd;
    case 12583:
    case "AttrMdamResExAdd":
      return EAttrType.AttrMdamResExAdd;
    case 12584:
    case "AttrMdamResPer":
      return EAttrType.AttrMdamResPer;
    case 12585:
    case "AttrMdamResExPer":
      return EAttrType.AttrMdamResExPer;
    case 12590:
    case "AttrNearDamage":
      return EAttrType.AttrNearDamage;
    case 12591:
    case "AttrNearDamageTotal":
      return EAttrType.AttrNearDamageTotal;
    case 12592:
    case "AttrNearDamageAdd":
      return EAttrType.AttrNearDamageAdd;
    case 12593:
    case "AttrNearDamageExAdd":
      return EAttrType.AttrNearDamageExAdd;
    case 12594:
    case "AttrNearDamagePer":
      return EAttrType.AttrNearDamagePer;
    case 12595:
    case "AttrNearDamageExPer":
      return EAttrType.AttrNearDamageExPer;
    case 12600:
    case "AttrNearDamageReduction":
      return EAttrType.AttrNearDamageReduction;
    case 12601:
    case "AttrNearDamageReductionTotal":
      return EAttrType.AttrNearDamageReductionTotal;
    case 12602:
    case "AttrNearDamageReductionAdd":
      return EAttrType.AttrNearDamageReductionAdd;
    case 12603:
    case "AttrNearDamageReductionExAdd":
      return EAttrType.AttrNearDamageReductionExAdd;
    case 12604:
    case "AttrNearDamageReductionPer":
      return EAttrType.AttrNearDamageReductionPer;
    case 12605:
    case "AttrNearDamageReductionExPer":
      return EAttrType.AttrNearDamageReductionExPer;
    case 12610:
    case "AttrFarDamage":
      return EAttrType.AttrFarDamage;
    case 12611:
    case "AttrFarDamageTotal":
      return EAttrType.AttrFarDamageTotal;
    case 12612:
    case "AttrFarDamageAdd":
      return EAttrType.AttrFarDamageAdd;
    case 12613:
    case "AttrFarDamageExAdd":
      return EAttrType.AttrFarDamageExAdd;
    case 12614:
    case "AttrFarDamagePer":
      return EAttrType.AttrFarDamagePer;
    case 12615:
    case "AttrFarDamageExPer":
      return EAttrType.AttrFarDamageExPer;
    case 12620:
    case "AttrFarDamageReduction":
      return EAttrType.AttrFarDamageReduction;
    case 12621:
    case "AttrFarDamageReductionTotal":
      return EAttrType.AttrFarDamageReductionTotal;
    case 12622:
    case "AttrFarDamageReductionAdd":
      return EAttrType.AttrFarDamageReductionAdd;
    case 12623:
    case "AttrFarDamageReductionExAdd":
      return EAttrType.AttrFarDamageReductionExAdd;
    case 12624:
    case "AttrFarDamageReductionPer":
      return EAttrType.AttrFarDamageReductionPer;
    case 12625:
    case "AttrFarDamageReductionExPer":
      return EAttrType.AttrFarDamageReductionExPer;
    case 12630:
    case "AttrBossDamInc":
      return EAttrType.AttrBossDamInc;
    case 12631:
    case "AttrBossDamIncTotal":
      return EAttrType.AttrBossDamIncTotal;
    case 12632:
    case "AttrBossDamIncAdd":
      return EAttrType.AttrBossDamIncAdd;
    case 12633:
    case "AttrBossDamIncExAdd":
      return EAttrType.AttrBossDamIncExAdd;
    case 12634:
    case "AttrBossDamIncPer":
      return EAttrType.AttrBossDamIncPer;
    case 12635:
    case "AttrBossDamIncExPer":
      return EAttrType.AttrBossDamIncExPer;
    case 12640:
    case "AttrBossDamRes":
      return EAttrType.AttrBossDamRes;
    case 12641:
    case "AttrBossDamResTotal":
      return EAttrType.AttrBossDamResTotal;
    case 12642:
    case "AttrBossDamResAdd":
      return EAttrType.AttrBossDamResAdd;
    case 12643:
    case "AttrBossDamResExAdd":
      return EAttrType.AttrBossDamResExAdd;
    case 12644:
    case "AttrBossDamResPer":
      return EAttrType.AttrBossDamResPer;
    case 12645:
    case "AttrBossDamResExPer":
      return EAttrType.AttrBossDamResExPer;
    case 12650:
    case "AttrShieldDamagePCT":
      return EAttrType.AttrShieldDamagePCT;
    case 12651:
    case "AttrShieldDamagePCTTotal":
      return EAttrType.AttrShieldDamagePCTTotal;
    case 12652:
    case "AttrShieldDamagePCTAdd":
      return EAttrType.AttrShieldDamagePCTAdd;
    case 12653:
    case "AttrShieldDamagePCTExAdd":
      return EAttrType.AttrShieldDamagePCTExAdd;
    case 12654:
    case "AttrShieldDamagePCTPer":
      return EAttrType.AttrShieldDamagePCTPer;
    case 12655:
    case "AttrShieldDamagePCTExPer":
      return EAttrType.AttrShieldDamagePCTExPer;
    case 12660:
    case "AttrShieldDamageReductionPCT":
      return EAttrType.AttrShieldDamageReductionPCT;
    case 12661:
    case "AttrShieldDamageReductionPCTTotal":
      return EAttrType.AttrShieldDamageReductionPCTTotal;
    case 12662:
    case "AttrShieldDamageReductionPCTAdd":
      return EAttrType.AttrShieldDamageReductionPCTAdd;
    case 12663:
    case "AttrShieldDamageReductionPCTExAdd":
      return EAttrType.AttrShieldDamageReductionPCTExAdd;
    case 12664:
    case "AttrShieldDamageReductionPCTPer":
      return EAttrType.AttrShieldDamageReductionPCTPer;
    case 12665:
    case "AttrShieldDamageReductionPCTExPer":
      return EAttrType.AttrShieldDamageReductionPCTExPer;
    case 12670:
    case "AttrOtherDamInc":
      return EAttrType.AttrOtherDamInc;
    case 12671:
    case "AttrOtherDamIncTotal":
      return EAttrType.AttrOtherDamIncTotal;
    case 12672:
    case "AttrOtherDamIncAdd":
      return EAttrType.AttrOtherDamIncAdd;
    case 12673:
    case "AttrOtherDamIncExAdd":
      return EAttrType.AttrOtherDamIncExAdd;
    case 12674:
    case "AttrOtherDamIncTPer":
      return EAttrType.AttrOtherDamIncTPer;
    case 12675:
    case "AttrOtherDamIncExPer":
      return EAttrType.AttrOtherDamIncExPer;
    case 12680:
    case "AttrOtherDamRes":
      return EAttrType.AttrOtherDamRes;
    case 12681:
    case "AttrOtherDamResTotal":
      return EAttrType.AttrOtherDamResTotal;
    case 12682:
    case "AttrOtherDamResAdd":
      return EAttrType.AttrOtherDamResAdd;
    case 12683:
    case "AttrOtherDamResExAdd":
      return EAttrType.AttrOtherDamResExAdd;
    case 12684:
    case "AttrOtherDamResTPer":
      return EAttrType.AttrOtherDamResTPer;
    case 12685:
    case "AttrOtherDamResExPer":
      return EAttrType.AttrOtherDamResExPer;
    case 12690:
    case "AttrSeasonDamInc":
      return EAttrType.AttrSeasonDamInc;
    case 12691:
    case "AttrSeasonDamIncTotal":
      return EAttrType.AttrSeasonDamIncTotal;
    case 12692:
    case "AttrSeasonDamIncAdd":
      return EAttrType.AttrSeasonDamIncAdd;
    case 12693:
    case "AttrSeasonDamIncExAdd":
      return EAttrType.AttrSeasonDamIncExAdd;
    case 12694:
    case "AttrSeasonDamIncTPer":
      return EAttrType.AttrSeasonDamIncTPer;
    case 12695:
    case "AttrSeasonDamIncExPer":
      return EAttrType.AttrSeasonDamIncExPer;
    case 12700:
    case "AttrSeasonDamRes":
      return EAttrType.AttrSeasonDamRes;
    case 12701:
    case "AttrSeasonDamResTotal":
      return EAttrType.AttrSeasonDamResTotal;
    case 12702:
    case "AttrSeasonDamResAdd":
      return EAttrType.AttrSeasonDamResAdd;
    case 12703:
    case "AttrSeasonDamResExAdd":
      return EAttrType.AttrSeasonDamResExAdd;
    case 12704:
    case "AttrSeasonDamResTPer":
      return EAttrType.AttrSeasonDamResTPer;
    case 12705:
    case "AttrSeasonDamResExPer":
      return EAttrType.AttrSeasonDamResExPer;
    case 12710:
    case "AttrMultipliesDamPct":
      return EAttrType.AttrMultipliesDamPct;
    case 12711:
    case "AttrMultipliesDamPctTotal":
      return EAttrType.AttrMultipliesDamPctTotal;
    case 12712:
    case "AttrMultipliesDamPctAdd":
      return EAttrType.AttrMultipliesDamPctAdd;
    case 12713:
    case "AttrMultipliesDamPctExAdd":
      return EAttrType.AttrMultipliesDamPctExAdd;
    case 12714:
    case "AttrMultipliesDamPctTPer":
      return EAttrType.AttrMultipliesDamPctTPer;
    case 12715:
    case "AttrMultipliesDamPctExPer":
      return EAttrType.AttrMultipliesDamPctExPer;
    case 12720:
    case "AttrLuckHealInc":
      return EAttrType.AttrLuckHealInc;
    case 12721:
    case "AttrLuckHealIncTotal":
      return EAttrType.AttrLuckHealIncTotal;
    case 12722:
    case "AttrLuckHealIncAdd":
      return EAttrType.AttrLuckHealIncAdd;
    case 12723:
    case "AttrLuckHealIncExAdd":
      return EAttrType.AttrLuckHealIncExAdd;
    case 12724:
    case "AttrLuckHealIncPer":
      return EAttrType.AttrLuckHealIncPer;
    case 12725:
    case "AttrLuckHealIncExPer":
      return EAttrType.AttrLuckHealIncExPer;
    case 12730:
    case "AttrPetDamInc":
      return EAttrType.AttrPetDamInc;
    case 12731:
    case "AttrPetDamIncTotal":
      return EAttrType.AttrPetDamIncTotal;
    case 12732:
    case "AttrPetDamIncAdd":
      return EAttrType.AttrPetDamIncAdd;
    case 12733:
    case "AttrPetDamIncExAdd":
      return EAttrType.AttrPetDamIncExAdd;
    case 12734:
    case "AttrPetDamIncPer":
      return EAttrType.AttrPetDamIncPer;
    case 12735:
    case "AttrPetDamIncExPer":
      return EAttrType.AttrPetDamIncExPer;
    case 12740:
    case "AttrCritHeal":
      return EAttrType.AttrCritHeal;
    case 12741:
    case "AttrCritHealTotal":
      return EAttrType.AttrCritHealTotal;
    case 12742:
    case "AttrCritHealAdd":
      return EAttrType.AttrCritHealAdd;
    case 12743:
    case "AttrCritHealExAdd":
      return EAttrType.AttrCritHealExAdd;
    case 12744:
    case "AttrCritHealPer":
      return EAttrType.AttrCritHealPer;
    case 12745:
    case "AttrCritHealExPer":
      return EAttrType.AttrCritHealExPer;
    case 12750:
    case "AttrSpDamInc":
      return EAttrType.AttrSpDamInc;
    case 12751:
    case "AttrSpDamIncTotal":
      return EAttrType.AttrSpDamIncTotal;
    case 12752:
    case "AttrSpDamIncAdd":
      return EAttrType.AttrSpDamIncAdd;
    case 12753:
    case "AttrSpDamIncExAdd":
      return EAttrType.AttrSpDamIncExAdd;
    case 12754:
    case "AttrSpDamIncPer":
      return EAttrType.AttrSpDamIncPer;
    case 12755:
    case "AttrSpDamIncExPer":
      return EAttrType.AttrSpDamIncExPer;
    case 12760:
    case "AttrSpDamRes":
      return EAttrType.AttrSpDamRes;
    case 12761:
    case "AttrSpDamResTotal":
      return EAttrType.AttrSpDamResTotal;
    case 12762:
    case "AttrSpDamResAdd":
      return EAttrType.AttrSpDamResAdd;
    case 12763:
    case "AttrSpDamResExAdd":
      return EAttrType.AttrSpDamResExAdd;
    case 12764:
    case "AttrSpDamResPer":
      return EAttrType.AttrSpDamResPer;
    case 12765:
    case "AttrSpDamResExPer":
      return EAttrType.AttrSpDamResExPer;
    case 12770:
    case "AttrHealBanPct":
      return EAttrType.AttrHealBanPct;
    case 12771:
    case "AttrHealBanPctTotal":
      return EAttrType.AttrHealBanPctTotal;
    case 12772:
    case "AttrHealBanPctAdd":
      return EAttrType.AttrHealBanPctAdd;
    case 12773:
    case "AttrHealBanPctExAdd":
      return EAttrType.AttrHealBanPctExAdd;
    case 12774:
    case "AttrHealBanPctPer":
      return EAttrType.AttrHealBanPctPer;
    case 12775:
    case "AttrHealBanPctExPer":
      return EAttrType.AttrHealBanPctExPer;
    case 12780:
    case "AttrHealedBanPct":
      return EAttrType.AttrHealedBanPct;
    case 12781:
    case "AttrHealedBanPctTotal":
      return EAttrType.AttrHealedBanPctTotal;
    case 12782:
    case "AttrHealedBanPctAdd":
      return EAttrType.AttrHealedBanPctAdd;
    case 12783:
    case "AttrHealedBanPctExAdd":
      return EAttrType.AttrHealedBanPctExAdd;
    case 12784:
    case "AttrHealedBanPctPer":
      return EAttrType.AttrHealedBanPctPer;
    case 12785:
    case "AttrHealedBanPctExPer":
      return EAttrType.AttrHealedBanPctExPer;
    case 13000:
    case "AttrElementPower":
      return EAttrType.AttrElementPower;
    case 13001:
    case "AttrElementPowerTotal":
      return EAttrType.AttrElementPowerTotal;
    case 13002:
    case "AttrElementPowerAdd":
      return EAttrType.AttrElementPowerAdd;
    case 13003:
    case "AttrElementPowerExAdd":
      return EAttrType.AttrElementPowerExAdd;
    case 13004:
    case "AttrElementPowerPer":
      return EAttrType.AttrElementPowerPer;
    case 13005:
    case "AttrElementPowerExPer":
      return EAttrType.AttrElementPowerExPer;
    case 13010:
    case "AttrFirePower":
      return EAttrType.AttrFirePower;
    case 13011:
    case "AttrFirePowerTotal":
      return EAttrType.AttrFirePowerTotal;
    case 13012:
    case "AttrFirePowerAdd":
      return EAttrType.AttrFirePowerAdd;
    case 13013:
    case "AttrFirePowerExAdd":
      return EAttrType.AttrFirePowerExAdd;
    case 13014:
    case "AttrFirePowerPer":
      return EAttrType.AttrFirePowerPer;
    case 13015:
    case "AttrFirePowerExPer":
      return EAttrType.AttrFirePowerExPer;
    case 13020:
    case "AttrWaterPower":
      return EAttrType.AttrWaterPower;
    case 13021:
    case "AttrWaterPowerTotal":
      return EAttrType.AttrWaterPowerTotal;
    case 13022:
    case "AttrWaterPowerAdd":
      return EAttrType.AttrWaterPowerAdd;
    case 13023:
    case "AttrWaterPowerExAdd":
      return EAttrType.AttrWaterPowerExAdd;
    case 13024:
    case "AttrWaterPowerPer":
      return EAttrType.AttrWaterPowerPer;
    case 13025:
    case "AttrWaterPowerExPer":
      return EAttrType.AttrWaterPowerExPer;
    case 13030:
    case "AttrWoodPower":
      return EAttrType.AttrWoodPower;
    case 13031:
    case "AttrWoodPowerTotal":
      return EAttrType.AttrWoodPowerTotal;
    case 13032:
    case "AttrWoodPowerAdd":
      return EAttrType.AttrWoodPowerAdd;
    case 13033:
    case "AttrWoodPowerExAdd":
      return EAttrType.AttrWoodPowerExAdd;
    case 13034:
    case "AttrWoodPowerPer":
      return EAttrType.AttrWoodPowerPer;
    case 13035:
    case "AttrWoodPowerExPer":
      return EAttrType.AttrWoodPowerExPer;
    case 13040:
    case "AttrElectricityPower":
      return EAttrType.AttrElectricityPower;
    case 13041:
    case "AttrElectricityPowerTotal":
      return EAttrType.AttrElectricityPowerTotal;
    case 13042:
    case "AttrElectricityPowerAdd":
      return EAttrType.AttrElectricityPowerAdd;
    case 13043:
    case "AttrElectricityPowerExAdd":
      return EAttrType.AttrElectricityPowerExAdd;
    case 13044:
    case "AttrElectricityPowerPer":
      return EAttrType.AttrElectricityPowerPer;
    case 13045:
    case "AttrElectricityPowerExPer":
      return EAttrType.AttrElectricityPowerExPer;
    case 13050:
    case "AttrWindPower":
      return EAttrType.AttrWindPower;
    case 13051:
    case "AttrWindPowerTotal":
      return EAttrType.AttrWindPowerTotal;
    case 13052:
    case "AttrWindPowerAdd":
      return EAttrType.AttrWindPowerAdd;
    case 13053:
    case "AttrWindPowerExAdd":
      return EAttrType.AttrWindPowerExAdd;
    case 13054:
    case "AttrWindPowerPer":
      return EAttrType.AttrWindPowerPer;
    case 13055:
    case "AttrWindPowerExPer":
      return EAttrType.AttrWindPowerExPer;
    case 13060:
    case "AttrRockPower":
      return EAttrType.AttrRockPower;
    case 13061:
    case "AttrRockPowerTotal":
      return EAttrType.AttrRockPowerTotal;
    case 13062:
    case "AttrRockPowerAdd":
      return EAttrType.AttrRockPowerAdd;
    case 13063:
    case "AttrRockPowerExAdd":
      return EAttrType.AttrRockPowerExAdd;
    case 13064:
    case "AttrRockPowerPer":
      return EAttrType.AttrRockPowerPer;
    case 13065:
    case "AttrRockPowerExPer":
      return EAttrType.AttrRockPowerExPer;
    case 13070:
    case "AttrLightPower":
      return EAttrType.AttrLightPower;
    case 13071:
    case "AttrLightPowerTotal":
      return EAttrType.AttrLightPowerTotal;
    case 13072:
    case "AttrLightPowerAdd":
      return EAttrType.AttrLightPowerAdd;
    case 13073:
    case "AttrLightPowerExAdd":
      return EAttrType.AttrLightPowerExAdd;
    case 13074:
    case "AttrLightPowerPer":
      return EAttrType.AttrLightPowerPer;
    case 13075:
    case "AttrLightPowerExPer":
      return EAttrType.AttrLightPowerExPer;
    case 13080:
    case "AttrDarkPower":
      return EAttrType.AttrDarkPower;
    case 13081:
    case "AttrDarkPowerTotal":
      return EAttrType.AttrDarkPowerTotal;
    case 13082:
    case "AttrDarkPowerAdd":
      return EAttrType.AttrDarkPowerAdd;
    case 13083:
    case "AttrDarkPowerExAdd":
      return EAttrType.AttrDarkPowerExAdd;
    case 13084:
    case "AttrDarkPowerPer":
      return EAttrType.AttrDarkPowerPer;
    case 13085:
    case "AttrDarkPowerExPer":
      return EAttrType.AttrDarkPowerExPer;
    case 13100:
    case "AttrElementDamage":
      return EAttrType.AttrElementDamage;
    case 13101:
    case "AttrElementDamageTotal":
      return EAttrType.AttrElementDamageTotal;
    case 13102:
    case "AttrElementDamageAdd":
      return EAttrType.AttrElementDamageAdd;
    case 13103:
    case "AttrElementDamageExAdd":
      return EAttrType.AttrElementDamageExAdd;
    case 13104:
    case "AttrElementDamagePer":
      return EAttrType.AttrElementDamagePer;
    case 13105:
    case "AttrElementDamageExPer":
      return EAttrType.AttrElementDamageExPer;
    case 13110:
    case "AttrFireDamage":
      return EAttrType.AttrFireDamage;
    case 13111:
    case "AttrFireDamageTotal":
      return EAttrType.AttrFireDamageTotal;
    case 13112:
    case "AttrFireDamageAdd":
      return EAttrType.AttrFireDamageAdd;
    case 13113:
    case "AttrFireDamageExAdd":
      return EAttrType.AttrFireDamageExAdd;
    case 13114:
    case "AttrFireDamagePer":
      return EAttrType.AttrFireDamagePer;
    case 13115:
    case "AttrFireDamageExPer":
      return EAttrType.AttrFireDamageExPer;
    case 13120:
    case "AttrWaterDamage":
      return EAttrType.AttrWaterDamage;
    case 13121:
    case "AttrWaterDamageTotal":
      return EAttrType.AttrWaterDamageTotal;
    case 13122:
    case "AttrWaterDamageAdd":
      return EAttrType.AttrWaterDamageAdd;
    case 13123:
    case "AttrWaterDamageExAdd":
      return EAttrType.AttrWaterDamageExAdd;
    case 13124:
    case "AttrWaterDamagePer":
      return EAttrType.AttrWaterDamagePer;
    case 13125:
    case "AttrWaterDamageExPer":
      return EAttrType.AttrWaterDamageExPer;
    case 13130:
    case "AttrWoodDamage":
      return EAttrType.AttrWoodDamage;
    case 13131:
    case "AttrWoodDamageTotal":
      return EAttrType.AttrWoodDamageTotal;
    case 13132:
    case "AttrWoodDamageAdd":
      return EAttrType.AttrWoodDamageAdd;
    case 13133:
    case "AttrWoodDamageExAdd":
      return EAttrType.AttrWoodDamageExAdd;
    case 13134:
    case "AttrWoodDamagePer":
      return EAttrType.AttrWoodDamagePer;
    case 13135:
    case "AttrWoodDamageExPer":
      return EAttrType.AttrWoodDamageExPer;
    case 13140:
    case "AttrElectricityDamage":
      return EAttrType.AttrElectricityDamage;
    case 13141:
    case "AttrElectricityDamageTotal":
      return EAttrType.AttrElectricityDamageTotal;
    case 13142:
    case "AttrElectricityDamageAdd":
      return EAttrType.AttrElectricityDamageAdd;
    case 13143:
    case "AttrElectricityDamageExAdd":
      return EAttrType.AttrElectricityDamageExAdd;
    case 13144:
    case "AttrElectricityDamagePer":
      return EAttrType.AttrElectricityDamagePer;
    case 13145:
    case "AttrElectricityDamageExPer":
      return EAttrType.AttrElectricityDamageExPer;
    case 13150:
    case "AttrWindDamage":
      return EAttrType.AttrWindDamage;
    case 13151:
    case "AttrWindDamageTotal":
      return EAttrType.AttrWindDamageTotal;
    case 13152:
    case "AttrWindDamageAdd":
      return EAttrType.AttrWindDamageAdd;
    case 13153:
    case "AttrWindDamageExAdd":
      return EAttrType.AttrWindDamageExAdd;
    case 13154:
    case "AttrWindDamagePer":
      return EAttrType.AttrWindDamagePer;
    case 13155:
    case "AttrWindDamageExPer":
      return EAttrType.AttrWindDamageExPer;
    case 13160:
    case "AttrRockDamage":
      return EAttrType.AttrRockDamage;
    case 13161:
    case "AttrRockDamageTotal":
      return EAttrType.AttrRockDamageTotal;
    case 13162:
    case "AttrRockDamageAdd":
      return EAttrType.AttrRockDamageAdd;
    case 13163:
    case "AttrRockDamageExAdd":
      return EAttrType.AttrRockDamageExAdd;
    case 13164:
    case "AttrRockDamagePer":
      return EAttrType.AttrRockDamagePer;
    case 13165:
    case "AttrRockDamageExPer":
      return EAttrType.AttrRockDamageExPer;
    case 13170:
    case "AttrLightDamage":
      return EAttrType.AttrLightDamage;
    case 13171:
    case "AttrLightDamageTotal":
      return EAttrType.AttrLightDamageTotal;
    case 13172:
    case "AttrLightDamageAdd":
      return EAttrType.AttrLightDamageAdd;
    case 13173:
    case "AttrLightDamageExAdd":
      return EAttrType.AttrLightDamageExAdd;
    case 13174:
    case "AttrLightDamagePer":
      return EAttrType.AttrLightDamagePer;
    case 13175:
    case "AttrLightDamageExPer":
      return EAttrType.AttrLightDamageExPer;
    case 13180:
    case "AttrDarkDamage":
      return EAttrType.AttrDarkDamage;
    case 13181:
    case "AttrDarkDamageTotal":
      return EAttrType.AttrDarkDamageTotal;
    case 13182:
    case "AttrDarkDamageAdd":
      return EAttrType.AttrDarkDamageAdd;
    case 13183:
    case "AttrDarkDamageExAdd":
      return EAttrType.AttrDarkDamageExAdd;
    case 13184:
    case "AttrDarkDamagePer":
      return EAttrType.AttrDarkDamagePer;
    case 13185:
    case "AttrDarkDamageExPer":
      return EAttrType.AttrDarkDamageExPer;
    case 13200:
    case "AttrElementDefense":
      return EAttrType.AttrElementDefense;
    case 13201:
    case "AttrElementDefenseTotal":
      return EAttrType.AttrElementDefenseTotal;
    case 13202:
    case "AttrElementDefenseAdd":
      return EAttrType.AttrElementDefenseAdd;
    case 13203:
    case "AttrElementDefenseExAdd":
      return EAttrType.AttrElementDefenseExAdd;
    case 13204:
    case "AttrElementDefensePer":
      return EAttrType.AttrElementDefensePer;
    case 13205:
    case "AttrElementDefenseExPer":
      return EAttrType.AttrElementDefenseExPer;
    case 13210:
    case "AttrFireDefense":
      return EAttrType.AttrFireDefense;
    case 13211:
    case "AttrFireDefenseTotal":
      return EAttrType.AttrFireDefenseTotal;
    case 13212:
    case "AttrFireDefenseAdd":
      return EAttrType.AttrFireDefenseAdd;
    case 13213:
    case "AttrFireDefenseExAdd":
      return EAttrType.AttrFireDefenseExAdd;
    case 13214:
    case "AttrFireDefensePer":
      return EAttrType.AttrFireDefensePer;
    case 13215:
    case "AttrFireDefenseExPer":
      return EAttrType.AttrFireDefenseExPer;
    case 13220:
    case "AttrWaterDefense":
      return EAttrType.AttrWaterDefense;
    case 13221:
    case "AttrWaterDefenseTotal":
      return EAttrType.AttrWaterDefenseTotal;
    case 13222:
    case "AttrWaterDefenseAdd":
      return EAttrType.AttrWaterDefenseAdd;
    case 13223:
    case "AttrWaterDefenseExAdd":
      return EAttrType.AttrWaterDefenseExAdd;
    case 13224:
    case "AttrWaterDefensePer":
      return EAttrType.AttrWaterDefensePer;
    case 13225:
    case "AttrWaterDefenseExPer":
      return EAttrType.AttrWaterDefenseExPer;
    case 13230:
    case "AttrWoodDefense":
      return EAttrType.AttrWoodDefense;
    case 13231:
    case "AttrWoodDefenseTotal":
      return EAttrType.AttrWoodDefenseTotal;
    case 13232:
    case "AttrWoodDefenseAdd":
      return EAttrType.AttrWoodDefenseAdd;
    case 13233:
    case "AttrWoodDefenseExAdd":
      return EAttrType.AttrWoodDefenseExAdd;
    case 13234:
    case "AttrWoodDefensePer":
      return EAttrType.AttrWoodDefensePer;
    case 13235:
    case "AttrWoodDefenseExPer":
      return EAttrType.AttrWoodDefenseExPer;
    case 13240:
    case "AttrElectricityDefense":
      return EAttrType.AttrElectricityDefense;
    case 13241:
    case "AttrElectricityDefenseTotal":
      return EAttrType.AttrElectricityDefenseTotal;
    case 13242:
    case "AttrElectricityDefenseAdd":
      return EAttrType.AttrElectricityDefenseAdd;
    case 13243:
    case "AttrElectricityDefenseExAdd":
      return EAttrType.AttrElectricityDefenseExAdd;
    case 13244:
    case "AttrElectricityDefensePer":
      return EAttrType.AttrElectricityDefensePer;
    case 13245:
    case "AttrElectricityDefenseExPer":
      return EAttrType.AttrElectricityDefenseExPer;
    case 13250:
    case "AttrWindDefense":
      return EAttrType.AttrWindDefense;
    case 13251:
    case "AttrWindDefenseTotal":
      return EAttrType.AttrWindDefenseTotal;
    case 13252:
    case "AttrWindDefenseAdd":
      return EAttrType.AttrWindDefenseAdd;
    case 13253:
    case "AttrWindDefenseExAdd":
      return EAttrType.AttrWindDefenseExAdd;
    case 13254:
    case "AttrWindDefensePer":
      return EAttrType.AttrWindDefensePer;
    case 13255:
    case "AttrWindDefenseExPer":
      return EAttrType.AttrWindDefenseExPer;
    case 13260:
    case "AttrRockDefense":
      return EAttrType.AttrRockDefense;
    case 13261:
    case "AttrRockDefenseTotal":
      return EAttrType.AttrRockDefenseTotal;
    case 13262:
    case "AttrRockDefenseAdd":
      return EAttrType.AttrRockDefenseAdd;
    case 13263:
    case "AttrRockDefenseExAdd":
      return EAttrType.AttrRockDefenseExAdd;
    case 13264:
    case "AttrRockDefensePer":
      return EAttrType.AttrRockDefensePer;
    case 13265:
    case "AttrRockDefenseExPer":
      return EAttrType.AttrRockDefenseExPer;
    case 13270:
    case "AttrLightDefense":
      return EAttrType.AttrLightDefense;
    case 13271:
    case "AttrLightDefenseTotal":
      return EAttrType.AttrLightDefenseTotal;
    case 13272:
    case "AttrLightDefenseAdd":
      return EAttrType.AttrLightDefenseAdd;
    case 13273:
    case "AttrLightDefenseExAdd":
      return EAttrType.AttrLightDefenseExAdd;
    case 13274:
    case "AttrLightDefensePer":
      return EAttrType.AttrLightDefensePer;
    case 13275:
    case "AttrLightDefenseExPer":
      return EAttrType.AttrLightDefenseExPer;
    case 13280:
    case "AttrDarkDefense":
      return EAttrType.AttrDarkDefense;
    case 13281:
    case "AttrDarkDefenseTotal":
      return EAttrType.AttrDarkDefenseTotal;
    case 13282:
    case "AttrDarkDefenseAdd":
      return EAttrType.AttrDarkDefenseAdd;
    case 13283:
    case "AttrDarkDefenseExAdd":
      return EAttrType.AttrDarkDefenseExAdd;
    case 13284:
    case "AttrDarkDefensePer":
      return EAttrType.AttrDarkDefensePer;
    case 13285:
    case "AttrDarkDefenseExPer":
      return EAttrType.AttrDarkDefenseExPer;
    case 13310:
    case "AttrElementDamRes":
      return EAttrType.AttrElementDamRes;
    case 13311:
    case "AttrElementDamResTotal":
      return EAttrType.AttrElementDamResTotal;
    case 13312:
    case "AttrElementDamResAdd":
      return EAttrType.AttrElementDamResAdd;
    case 13313:
    case "AttrElementDamResExAdd":
      return EAttrType.AttrElementDamResExAdd;
    case 13314:
    case "AttrElementDamResPer":
      return EAttrType.AttrElementDamResPer;
    case 13315:
    case "AttrElementDamResExPer":
      return EAttrType.AttrElementDamResExPer;
    case 13320:
    case "AttrFireDamageReduction":
      return EAttrType.AttrFireDamageReduction;
    case 13321:
    case "AttrFireDamageReductionTotal":
      return EAttrType.AttrFireDamageReductionTotal;
    case 13322:
    case "AttrFireDamageReductionAdd":
      return EAttrType.AttrFireDamageReductionAdd;
    case 13323:
    case "AttrFireDamageReductionExAdd":
      return EAttrType.AttrFireDamageReductionExAdd;
    case 13324:
    case "AttrFireDamageReductionPer":
      return EAttrType.AttrFireDamageReductionPer;
    case 13325:
    case "AttrFireDamageReductionExPer":
      return EAttrType.AttrFireDamageReductionExPer;
    case 13330:
    case "AttrWaterDamageReduction":
      return EAttrType.AttrWaterDamageReduction;
    case 13331:
    case "AttrWaterDamageReductionTotal":
      return EAttrType.AttrWaterDamageReductionTotal;
    case 13332:
    case "AttrWaterDamageReductionAdd":
      return EAttrType.AttrWaterDamageReductionAdd;
    case 13333:
    case "AttrWaterDamageReductionExAdd":
      return EAttrType.AttrWaterDamageReductionExAdd;
    case 13334:
    case "AttrWaterDamageReductionPer":
      return EAttrType.AttrWaterDamageReductionPer;
    case 13335:
    case "AttrWaterDamageReductionExPer":
      return EAttrType.AttrWaterDamageReductionExPer;
    case 13340:
    case "AttrWoodDamageReduction":
      return EAttrType.AttrWoodDamageReduction;
    case 13341:
    case "AttrWoodDamageReductionTotal":
      return EAttrType.AttrWoodDamageReductionTotal;
    case 13342:
    case "AttrWoodDamageReductionAdd":
      return EAttrType.AttrWoodDamageReductionAdd;
    case 13343:
    case "AttrWoodDamageReductionExAdd":
      return EAttrType.AttrWoodDamageReductionExAdd;
    case 13344:
    case "AttrWoodDamageReductionPer":
      return EAttrType.AttrWoodDamageReductionPer;
    case 13345:
    case "AttrWoodDamageReductionExPer":
      return EAttrType.AttrWoodDamageReductionExPer;
    case 13350:
    case "AttrElectricityDamageReduction":
      return EAttrType.AttrElectricityDamageReduction;
    case 13351:
    case "AttrElectricityDamageReductionTotal":
      return EAttrType.AttrElectricityDamageReductionTotal;
    case 13352:
    case "AttrElectricityDamageReductionAdd":
      return EAttrType.AttrElectricityDamageReductionAdd;
    case 13353:
    case "AttrElectricityDamageReductionExAdd":
      return EAttrType.AttrElectricityDamageReductionExAdd;
    case 13354:
    case "AttrElectricityDamageReductionPer":
      return EAttrType.AttrElectricityDamageReductionPer;
    case 13355:
    case "AttrElectricityDamageReductionExPer":
      return EAttrType.AttrElectricityDamageReductionExPer;
    case 13360:
    case "AttrWindDamageReduction":
      return EAttrType.AttrWindDamageReduction;
    case 13361:
    case "AttrWindDamageReductionTotal":
      return EAttrType.AttrWindDamageReductionTotal;
    case 13362:
    case "AttrWindDamageReductionAdd":
      return EAttrType.AttrWindDamageReductionAdd;
    case 13363:
    case "AttrWindDamageReductionExAdd":
      return EAttrType.AttrWindDamageReductionExAdd;
    case 13364:
    case "AttrWindDamageReductionPer":
      return EAttrType.AttrWindDamageReductionPer;
    case 13365:
    case "AttrWindDamageReductionExPer":
      return EAttrType.AttrWindDamageReductionExPer;
    case 13370:
    case "AttrRockDamageReduction":
      return EAttrType.AttrRockDamageReduction;
    case 13371:
    case "AttrRockDamageReductionTotal":
      return EAttrType.AttrRockDamageReductionTotal;
    case 13372:
    case "AttrRockDamageReductionAdd":
      return EAttrType.AttrRockDamageReductionAdd;
    case 13373:
    case "AttrRockDamageReductionExAdd":
      return EAttrType.AttrRockDamageReductionExAdd;
    case 13374:
    case "AttrRockDamageReductionPer":
      return EAttrType.AttrRockDamageReductionPer;
    case 13375:
    case "AttrRockDamageReductionExPer":
      return EAttrType.AttrRockDamageReductionExPer;
    case 13380:
    case "AttrLightDamageReduction":
      return EAttrType.AttrLightDamageReduction;
    case 13381:
    case "AttrLightDamageReductionTotal":
      return EAttrType.AttrLightDamageReductionTotal;
    case 13382:
    case "AttrLightDamageReductionAdd":
      return EAttrType.AttrLightDamageReductionAdd;
    case 13383:
    case "AttrLightDamageReductionExAdd":
      return EAttrType.AttrLightDamageReductionExAdd;
    case 13384:
    case "AttrLightDamageReductionPer":
      return EAttrType.AttrLightDamageReductionPer;
    case 13385:
    case "AttrLightDamageReductionExPer":
      return EAttrType.AttrLightDamageReductionExPer;
    case 13390:
    case "AttrDarkDamageReduction":
      return EAttrType.AttrDarkDamageReduction;
    case 13391:
    case "AttrDarkDamageReductionTotal":
      return EAttrType.AttrDarkDamageReductionTotal;
    case 13392:
    case "AttrDarkDamageReductionAdd":
      return EAttrType.AttrDarkDamageReductionAdd;
    case 13393:
    case "AttrDarkDamageReductionExAdd":
      return EAttrType.AttrDarkDamageReductionExAdd;
    case 13394:
    case "AttrDarkDamageReductionPer":
      return EAttrType.AttrDarkDamageReductionPer;
    case 13395:
    case "AttrDarkDamageReductionExPer":
      return EAttrType.AttrDarkDamageReductionExPer;
    case 20010:
    case "AttrOriginEnergy":
      return EAttrType.AttrOriginEnergy;
    case 20020:
    case "AttrMaxOriginEnergy":
      return EAttrType.AttrMaxOriginEnergy;
    case 20021:
    case "AttrMaxOriginEnergyTotal":
      return EAttrType.AttrMaxOriginEnergyTotal;
    case 20022:
    case "AttrMaxOriginEnergyAdd":
      return EAttrType.AttrMaxOriginEnergyAdd;
    case 20023:
    case "AttrMaxOriginEnergyExAdd":
      return EAttrType.AttrMaxOriginEnergyExAdd;
    case 20024:
    case "AttrMaxOriginEnergyPer":
      return EAttrType.AttrMaxOriginEnergyPer;
    case 20025:
    case "AttrMaxOriginEnergyExPer":
      return EAttrType.AttrMaxOriginEnergyExPer;
    case 20030:
    case "AttrOriginEnergyConsumeRate":
      return EAttrType.AttrOriginEnergyConsumeRate;
    case 20040:
    case "AttrParkourStandbyOriginEnergyRecovery":
      return EAttrType.AttrParkourStandbyOriginEnergyRecovery;
    case 20041:
    case "AttrParkourStandbyOriginEnergyRecoveryTotal":
      return EAttrType.AttrParkourStandbyOriginEnergyRecoveryTotal;
    case 20042:
    case "AttrParkourStandbyOriginEnergyRecoveryAdd":
      return EAttrType.AttrParkourStandbyOriginEnergyRecoveryAdd;
    case 20043:
    case "AttrParkourStandbyOriginEnergyRecoveryExAdd":
      return EAttrType.AttrParkourStandbyOriginEnergyRecoveryExAdd;
    case 20044:
    case "AttrParkourStandbyOriginEnergyRecoveryPer":
      return EAttrType.AttrParkourStandbyOriginEnergyRecoveryPer;
    case 20045:
    case "AttrParkourStandbyOriginEnergyRecoveryExPer":
      return EAttrType.AttrParkourStandbyOriginEnergyRecoveryExPer;
    case 20050:
    case "AttrParkourOriginEnergyRecovery":
      return EAttrType.AttrParkourOriginEnergyRecovery;
    case 20051:
    case "AttrParkourOriginEnergyRecoveryTotal":
      return EAttrType.AttrParkourOriginEnergyRecoveryTotal;
    case 20052:
    case "AttrParkourOriginEnergyRecoveryAdd":
      return EAttrType.AttrParkourOriginEnergyRecoveryAdd;
    case 20053:
    case "AttrParkourOriginEnergyRecoveryExAdd":
      return EAttrType.AttrParkourOriginEnergyRecoveryExAdd;
    case 20054:
    case "AttrParkourOriginEnergyRecoveryPer":
      return EAttrType.AttrParkourOriginEnergyRecoveryPer;
    case 20055:
    case "AttrParkourOriginEnergyRecoveryExPer":
      return EAttrType.AttrParkourOriginEnergyRecoveryExPer;
    case 20060:
    case "AttrParkourRunPhaseOneAcceleration":
      return EAttrType.AttrParkourRunPhaseOneAcceleration;
    case 20061:
    case "AttrParkourRunPhaseOneAccelerationTotal":
      return EAttrType.AttrParkourRunPhaseOneAccelerationTotal;
    case 20062:
    case "AttrParkourRunPhaseOneAccelerationAdd":
      return EAttrType.AttrParkourRunPhaseOneAccelerationAdd;
    case 20063:
    case "AttrParkourRunPhaseOneAccelerationExAdd":
      return EAttrType.AttrParkourRunPhaseOneAccelerationExAdd;
    case 20064:
    case "AttrParkourRunPhaseOneAccelerationPer":
      return EAttrType.AttrParkourRunPhaseOneAccelerationPer;
    case 20065:
    case "AttrParkourRunPhaseOneAccelerationExPer":
      return EAttrType.AttrParkourRunPhaseOneAccelerationExPer;
    case 20070:
    case "AttrParkourRunPhaseOneSpeedLimit":
      return EAttrType.AttrParkourRunPhaseOneSpeedLimit;
    case 20071:
    case "AttrParkourRunPhaseOneSpeedLimitTotal":
      return EAttrType.AttrParkourRunPhaseOneSpeedLimitTotal;
    case 20072:
    case "AttrParkourRunPhaseOneSpeedLimitAdd":
      return EAttrType.AttrParkourRunPhaseOneSpeedLimitAdd;
    case 20073:
    case "AttrParkourRunPhaseOneSpeedLimitExAdd":
      return EAttrType.AttrParkourRunPhaseOneSpeedLimitExAdd;
    case 20074:
    case "AttrParkourRunPhaseOneSpeedLimitPer":
      return EAttrType.AttrParkourRunPhaseOneSpeedLimitPer;
    case 20075:
    case "AttrParkourRunPhaseOneSpeedLimitExPer":
      return EAttrType.AttrParkourRunPhaseOneSpeedLimitExPer;
    case 20080:
    case "AttrParkourRunPhaseTwoAcceleration":
      return EAttrType.AttrParkourRunPhaseTwoAcceleration;
    case 20081:
    case "AttrParkourRunPhaseTwoAccelerationTotal":
      return EAttrType.AttrParkourRunPhaseTwoAccelerationTotal;
    case 20082:
    case "AttrParkourRunPhaseTwoAccelerationAdd":
      return EAttrType.AttrParkourRunPhaseTwoAccelerationAdd;
    case 20083:
    case "AttrParkourRunPhaseTwoAccelerationExAdd":
      return EAttrType.AttrParkourRunPhaseTwoAccelerationExAdd;
    case 20084:
    case "AttrParkourRunPhaseTwoAccelerationPer":
      return EAttrType.AttrParkourRunPhaseTwoAccelerationPer;
    case 20085:
    case "AttrParkourRunPhaseTwoAccelerationExPer":
      return EAttrType.AttrParkourRunPhaseTwoAccelerationExPer;
    case 20090:
    case "AttrParkourRunPhaseTwoSpeedLimit":
      return EAttrType.AttrParkourRunPhaseTwoSpeedLimit;
    case 20091:
    case "AttrParkourRunPhaseTwoSpeedLimitTotal":
      return EAttrType.AttrParkourRunPhaseTwoSpeedLimitTotal;
    case 20092:
    case "AttrParkourRunPhaseTwoSpeedLimitAdd":
      return EAttrType.AttrParkourRunPhaseTwoSpeedLimitAdd;
    case 20093:
    case "AttrParkourRunPhaseTwoSpeedLimitExAdd":
      return EAttrType.AttrParkourRunPhaseTwoSpeedLimitExAdd;
    case 20094:
    case "AttrParkourRunPhaseTwoSpeedLimitPer":
      return EAttrType.AttrParkourRunPhaseTwoSpeedLimitPer;
    case 20095:
    case "AttrParkourRunPhaseTwoSpeedLimitExPer":
      return EAttrType.AttrParkourRunPhaseTwoSpeedLimitExPer;
    case 20100:
    case "AttrParkourRunPhaseThreeAcceleration":
      return EAttrType.AttrParkourRunPhaseThreeAcceleration;
    case 20101:
    case "AttrParkourRunPhaseThreeAccelerationTotal":
      return EAttrType.AttrParkourRunPhaseThreeAccelerationTotal;
    case 20102:
    case "AttrParkourRunPhaseThreeAccelerationAdd":
      return EAttrType.AttrParkourRunPhaseThreeAccelerationAdd;
    case 20103:
    case "AttrParkourRunPhaseThreeAccelerationExAdd":
      return EAttrType.AttrParkourRunPhaseThreeAccelerationExAdd;
    case 20104:
    case "AttrParkourRunPhaseThreeAccelerationPer":
      return EAttrType.AttrParkourRunPhaseThreeAccelerationPer;
    case 20105:
    case "AttrParkourRunPhaseThreeAccelerationExPer":
      return EAttrType.AttrParkourRunPhaseThreeAccelerationExPer;
    case 20110:
    case "AttrParkourRunPhaseThreeSpeedLimit":
      return EAttrType.AttrParkourRunPhaseThreeSpeedLimit;
    case 20111:
    case "AttrParkourRunPhaseThreeSpeedLimitTotal":
      return EAttrType.AttrParkourRunPhaseThreeSpeedLimitTotal;
    case 20112:
    case "AttrParkourRunPhaseThreeSpeedLimitAdd":
      return EAttrType.AttrParkourRunPhaseThreeSpeedLimitAdd;
    case 20113:
    case "AttrParkourRunPhaseThreeSpeedLimitExAdd":
      return EAttrType.AttrParkourRunPhaseThreeSpeedLimitExAdd;
    case 20114:
    case "AttrParkourRunPhaseThreeSpeedLimitPer":
      return EAttrType.AttrParkourRunPhaseThreeSpeedLimitPer;
    case 20115:
    case "AttrParkourRunPhaseThreeSpeedLimitExPer":
      return EAttrType.AttrParkourRunPhaseThreeSpeedLimitExPer;
    case 20120:
    case "AttrInBattleParkourStandbyOriginEnergyRecovery":
      return EAttrType.AttrInBattleParkourStandbyOriginEnergyRecovery;
    case 20121:
    case "AttrInBattleParkourStandbyOriginEnergyRecoveryTotal":
      return EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryTotal;
    case 20122:
    case "AttrInBattleParkourStandbyOriginEnergyRecoveryAdd":
      return EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryAdd;
    case 20123:
    case "AttrInBattleParkourStandbyOriginEnergyRecoveryExAdd":
      return EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryExAdd;
    case 20124:
    case "AttrInBattleParkourStandbyOriginEnergyRecoveryPer":
      return EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryPer;
    case 20125:
    case "AttrInBattleParkourStandbyOriginEnergyRecoveryExPer":
      return EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryExPer;
    case 20130:
    case "AttrInBattleParkourOriginEnergyRecovery":
      return EAttrType.AttrInBattleParkourOriginEnergyRecovery;
    case 20131:
    case "AttrInBattleParkourOriginEnergyRecoveryTotal":
      return EAttrType.AttrInBattleParkourOriginEnergyRecoveryTotal;
    case 20132:
    case "AttrInBattleParkourOriginEnergyRecoveryAdd":
      return EAttrType.AttrInBattleParkourOriginEnergyRecoveryAdd;
    case 20133:
    case "AttrInBattleParkourOriginEnergyRecoveryExAdd":
      return EAttrType.AttrInBattleParkourOriginEnergyRecoveryExAdd;
    case 20134:
    case "AttrInBattleParkourOriginEnergyRecoveryPer":
      return EAttrType.AttrInBattleParkourOriginEnergyRecoveryPer;
    case 20135:
    case "AttrInBattleParkourOriginEnergyRecoveryExPer":
      return EAttrType.AttrInBattleParkourOriginEnergyRecoveryExPer;
    case 20200:
    case "AttrFallDamageReduction":
      return EAttrType.AttrFallDamageReduction;
    case 20201:
    case "AttrDelayDie":
      return EAttrType.AttrDelayDie;
    case 50001:
    case "AttrFightResourceIds":
      return EAttrType.AttrFightResourceIds;
    case 50002:
    case "AttrFightResources":
      return EAttrType.AttrFightResources;
    case 50003:
    case "AttrFightResNoUp":
      return EAttrType.AttrFightResNoUp;
    case 50004:
    case "AttrFightResNoDown":
      return EAttrType.AttrFightResNoDown;
    case 60020:
    case "AttrFreezeFrame":
      return EAttrType.AttrFreezeFrame;
    case 60050:
    case "AttrShieldList":
      return EAttrType.AttrShieldList;
    case 60070:
    case "AttrPressingOpen":
      return EAttrType.AttrPressingOpen;
    case 60071:
    case "AttrUpLift":
      return EAttrType.AttrUpLift;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAttrType.UNRECOGNIZED;
  }
}

export function eAttrTypeToJSON(object: EAttrType): string {
  switch (object) {
    case EAttrType.AttrUnknown:
      return "AttrUnknown";
    case EAttrType.AttrName:
      return "AttrName";
    case EAttrType.AttrAimDir:
      return "AttrAimDir";
    case EAttrType.AttrScale:
      return "AttrScale";
    case EAttrType.AttrScaleAddRatio:
      return "AttrScaleAddRatio";
    case EAttrType.AttrId:
      return "AttrId";
    case EAttrType.AttrState:
      return "AttrState";
    case EAttrType.AttrCamp:
      return "AttrCamp";
    case EAttrType.AttrLayer:
      return "AttrLayer";
    case EAttrType.AttrIsBodySeparate:
      return "AttrIsBodySeparate";
    case EAttrType.AttrConfigUid:
      return "AttrConfigUid";
    case EAttrType.AttrTableUid:
      return "AttrTableUid";
    case EAttrType.AttrVisualLayers:
      return "AttrVisualLayers";
    case EAttrType.AttrVisualLayer:
      return "AttrVisualLayer";
    case EAttrType.AttrVisualLayerUid:
      return "AttrVisualLayerUid";
    case EAttrType.AttrSummonFlag:
      return "AttrSummonFlag";
    case EAttrType.AttrTargetId:
      return "AttrTargetId";
    case EAttrType.AttrTargetPartId:
      return "AttrTargetPartId";
    case EAttrType.AttrIsBot:
      return "AttrIsBot";
    case EAttrType.AttrBasicFleshyType:
      return "AttrBasicFleshyType";
    case EAttrType.AttrDir:
      return "AttrDir";
    case EAttrType.AttrTargetDir:
      return "AttrTargetDir";
    case EAttrType.AttrPos:
      return "AttrPos";
    case EAttrType.AttrTargetPos:
      return "AttrTargetPos";
    case EAttrType.AttrSummonerPos:
      return "AttrSummonerPos";
    case EAttrType.AttrVelocity:
      return "AttrVelocity";
    case EAttrType.AttrMoveType:
      return "AttrMoveType";
    case EAttrType.AttrTurnVelocity:
      return "AttrTurnVelocity";
    case EAttrType.AttrReviveCurProgressValue:
      return "AttrReviveCurProgressValue";
    case EAttrType.AttrReviveMaxProgressValue:
      return "AttrReviveMaxProgressValue";
    case EAttrType.AttrUnbreakableLevel:
      return "AttrUnbreakableLevel";
    case EAttrType.AttrStateTime:
      return "AttrStateTime";
    case EAttrType.AttrDeadType:
      return "AttrDeadType";
    case EAttrType.AttrMoveForce:
      return "AttrMoveForce";
    case EAttrType.AttrSummonerId:
      return "AttrSummonerId";
    case EAttrType.AttrTopSummonerId:
      return "AttrTopSummonerId";
    case EAttrType.AttrIsUnderGround:
      return "AttrIsUnderGround";
    case EAttrType.AttrOffset:
      return "AttrOffset";
    case EAttrType.AttrInheritingType:
      return "AttrInheritingType";
    case EAttrType.AttrFightSourceInfo:
      return "AttrFightSourceInfo";
    case EAttrType.AttrSkillId:
      return "AttrSkillId";
    case EAttrType.AttrSkillStage:
      return "AttrSkillStage";
    case EAttrType.AttrInAccumulate:
      return "AttrInAccumulate";
    case EAttrType.AttrSkillLevel:
      return "AttrSkillLevel";
    case EAttrType.AttrCombatState:
      return "AttrCombatState";
    case EAttrType.AttrSkillStageBeginTime:
      return "AttrSkillStageBeginTime";
    case EAttrType.AttrSkillBeginTime:
      return "AttrSkillBeginTime";
    case EAttrType.AttrSkillSpeed:
      return "AttrSkillSpeed";
    case EAttrType.AttrSkillStageNum:
      return "AttrSkillStageNum";
    case EAttrType.AttrReplaceSkillList:
      return "AttrReplaceSkillList";
    case EAttrType.AttrFinalTargetDir:
      return "AttrFinalTargetDir";
    case EAttrType.AttrSkillUuid:
      return "AttrSkillUuid";
    case EAttrType.AttrIsCurStageNeedStopMove:
      return "AttrIsCurStageNeedStopMove";
    case EAttrType.AttrSkillShowState:
      return "AttrSkillShowState";
    case EAttrType.AttrCombatStateTime:
      return "AttrCombatStateTime";
    case EAttrType.AttrSwitchSkill:
      return "AttrSwitchSkill";
    case EAttrType.AttrSkillLevelIdList:
      return "AttrSkillLevelIdList";
    case EAttrType.AttrCantSilence:
      return "AttrCantSilence";
    case EAttrType.AttrFinalTargetPos:
      return "AttrFinalTargetPos";
    case EAttrType.AttrTargetPartPos:
      return "AttrTargetPartPos";
    case EAttrType.AttrDmgTargetPos:
      return "AttrDmgTargetPos";
    case EAttrType.AttrSkillRemodelLevel:
      return "AttrSkillRemodelLevel";
    case EAttrType.AttrIsInteractionActive:
      return "AttrIsInteractionActive";
    case EAttrType.AttrInteractionId:
      return "AttrInteractionId";
    case EAttrType.AttrInteractionUuid:
      return "AttrInteractionUuid";
    case EAttrType.AttrInteractionStage:
      return "AttrInteractionStage";
    case EAttrType.AttrInteractionSeat:
      return "AttrInteractionSeat";
    case EAttrType.AttrInteractionInfo:
      return "AttrInteractionInfo";
    case EAttrType.AttrActionTime:
      return "AttrActionTime";
    case EAttrType.AttrActionId:
      return "AttrActionId";
    case EAttrType.AttrActionUpperTime:
      return "AttrActionUpperTime";
    case EAttrType.AttrActionUpperId:
      return "AttrActionUpperId";
    case EAttrType.AttrActionSource:
      return "AttrActionSource";
    case EAttrType.AttrActionLongName:
      return "AttrActionLongName";
    case EAttrType.AttrMountId:
      return "AttrMountId";
    case EAttrType.AttrMountSize:
      return "AttrMountSize";
    case EAttrType.AttrAiming:
      return "AttrAiming";
    case EAttrType.AttrGender:
      return "AttrGender";
    case EAttrType.AttrInBattleShow:
      return "AttrInBattleShow";
    case EAttrType.AttrFaceData:
      return "AttrFaceData";
    case EAttrType.AttrProfile:
      return "AttrProfile";
    case EAttrType.AttrBodySize:
      return "AttrBodySize";
    case EAttrType.AttrRoleLevel:
      return "AttrRoleLevel";
    case EAttrType.AttrOfflineTime:
      return "AttrOfflineTime";
    case EAttrType.AttrClimbType:
      return "AttrClimbType";
    case EAttrType.AttrClimbNormal:
      return "AttrClimbNormal";
    case EAttrType.AttrClimbDir:
      return "AttrClimbDir";
    case EAttrType.AttrClimbTime:
      return "AttrClimbTime";
    case EAttrType.AttrPlaneId:
      return "AttrPlaneId";
    case EAttrType.AttrCanSwitchLayer:
      return "AttrCanSwitchLayer";
    case EAttrType.AttrTeamId:
      return "AttrTeamId";
    case EAttrType.AttrTeamMemberNums:
      return "AttrTeamMemberNums";
    case EAttrType.AttrSeasonLv:
      return "AttrSeasonLv";
    case EAttrType.AttrUseItemState:
      return "AttrUseItemState";
    case EAttrType.AttrProfessionSwitchTime:
      return "AttrProfessionSwitchTime";
    case EAttrType.AttrProfessionHitType:
      return "AttrProfessionHitType";
    case EAttrType.AttrEquipData:
      return "AttrEquipData";
    case EAttrType.AttrFashionData:
      return "AttrFashionData";
    case EAttrType.AttrAppearanceData:
      return "AttrAppearanceData";
    case EAttrType.AttrCommonSkillList:
      return "AttrCommonSkillList";
    case EAttrType.AttrDeadTime:
      return "AttrDeadTime";
    case EAttrType.AttrResourceLeft:
      return "AttrResourceLeft";
    case EAttrType.AttrResourceRight:
      return "AttrResourceRight";
    case EAttrType.AttrShowPieceAttrList:
      return "AttrShowPieceAttrList";
    case EAttrType.AttrSceneInteractionInfo:
      return "AttrSceneInteractionInfo";
    case EAttrType.AttrWeather:
      return "AttrWeather";
    case EAttrType.AttrDayNightSwitch:
      return "AttrDayNightSwitch";
    case EAttrType.AttrRankId:
      return "AttrRankId";
    case EAttrType.AttrEmoteTime:
      return "AttrEmoteTime";
    case EAttrType.AttrEmoteId:
      return "AttrEmoteId";
    case EAttrType.AttrProfessionId:
      return "AttrProfessionId";
    case EAttrType.AttrSwitchProfessionCD:
      return "AttrSwitchProfessionCD";
    case EAttrType.AttrProfessionSkinId:
      return "AttrProfessionSkinId";
    case EAttrType.AttrShowId:
      return "AttrShowId";
    case EAttrType.AttrSlot:
      return "AttrSlot";
    case EAttrType.AttrShowRankStar:
      return "AttrShowRankStar";
    case EAttrType.AttrFishingData:
      return "AttrFishingData";
    case EAttrType.AttrPersonalTitle:
      return "AttrPersonalTitle";
    case EAttrType.AttrReviveCount:
      return "AttrReviveCount";
    case EAttrType.AttrSceneAreaId:
      return "AttrSceneAreaId";
    case EAttrType.AttrSkillSkinIds:
      return "AttrSkillSkinIds";
    case EAttrType.AttrToy:
      return "AttrToy";
    case EAttrType.AttrIsNewbie:
      return "AttrIsNewbie";
    case EAttrType.AttrMoveVersion:
      return "AttrMoveVersion";
    case EAttrType.AttrPersonalObjData:
      return "AttrPersonalObjData";
    case EAttrType.AttrParkourStep:
      return "AttrParkourStep";
    case EAttrType.AttrParkourFallenJump:
      return "AttrParkourFallenJump";
    case EAttrType.AttrParkourShimmyJump:
      return "AttrParkourShimmyJump";
    case EAttrType.AttrParkourFiveJump:
      return "AttrParkourFiveJump";
    case EAttrType.AttrParkourKickWallJump:
      return "AttrParkourKickWallJump";
    case EAttrType.AttrParkourPedalWall:
      return "AttrParkourPedalWall";
    case EAttrType.AttrParkourRun:
      return "AttrParkourRun";
    case EAttrType.AttrParkourLazyJump:
      return "AttrParkourLazyJump";
    case EAttrType.AttrParkourLevitation:
      return "AttrParkourLevitation";
    case EAttrType.AttrShimmyJumpPac:
      return "AttrShimmyJumpPac";
    case EAttrType.AttrMaxShimmyJumpPac:
      return "AttrMaxShimmyJumpPac";
    case EAttrType.AttrJumpStep:
      return "AttrJumpStep";
    case EAttrType.AttrJumpDir:
      return "AttrJumpDir";
    case EAttrType.AttrVerVelocity:
      return "AttrVerVelocity";
    case EAttrType.AttrHorVelocity:
      return "AttrHorVelocity";
    case EAttrType.AttrJumpType:
      return "AttrJumpType";
    case EAttrType.AttrGravity:
      return "AttrGravity";
    case EAttrType.AttrBounceJumpId:
      return "AttrBounceJumpId";
    case EAttrType.AttrJumpExCount:
      return "AttrJumpExCount";
    case EAttrType.AttrRushDirection:
      return "AttrRushDirection";
    case EAttrType.AttrBattleRushChargeBegin:
      return "AttrBattleRushChargeBegin";
    case EAttrType.AttrRushMaxCount:
      return "AttrRushMaxCount";
    case EAttrType.AttrRushCountClearInterval:
      return "AttrRushCountClearInterval";
    case EAttrType.AttrRushCD:
      return "AttrRushCD";
    case EAttrType.AttrGlideVelocityH:
      return "AttrGlideVelocityH";
    case EAttrType.AttrGlideVelocityV:
      return "AttrGlideVelocityV";
    case EAttrType.AttrGlideRotAngle:
      return "AttrGlideRotAngle";
    case EAttrType.AttrWallNormal:
      return "AttrWallNormal";
    case EAttrType.AttrPedalWallDir:
      return "AttrPedalWallDir";
    case EAttrType.AttrPedalWallStage:
      return "AttrPedalWallStage";
    case EAttrType.AttrInsightFlag:
      return "AttrInsightFlag";
    case EAttrType.AttrAttachVelocity:
      return "AttrAttachVelocity";
    case EAttrType.AttrAttachVelocityDirX:
      return "AttrAttachVelocityDirX";
    case EAttrType.AttrAttachVelocityDirY:
      return "AttrAttachVelocityDirY";
    case EAttrType.AttrAttachVelocityDirZ:
      return "AttrAttachVelocityDirZ";
    case EAttrType.AttrAttachVelocitySource:
      return "AttrAttachVelocitySource";
    case EAttrType.AttrAttachSourceEntUuid:
      return "AttrAttachSourceEntUuid";
    case EAttrType.AttrTunnelMoveStage:
      return "AttrTunnelMoveStage";
    case EAttrType.AttrTunnelId:
      return "AttrTunnelId";
    case EAttrType.AttrTunnelPointIndex:
      return "AttrTunnelPointIndex";
    case EAttrType.AttrTunnelPointT:
      return "AttrTunnelPointT";
    case EAttrType.AttrSwimStage:
      return "AttrSwimStage";
    case EAttrType.AttrSceneName:
      return "AttrSceneName";
    case EAttrType.AttrSceneBasicId:
      return "AttrSceneBasicId";
    case EAttrType.AttrSceneUuid:
      return "AttrSceneUuid";
    case EAttrType.AttrSceneChannel:
      return "AttrSceneChannel";
    case EAttrType.AttrSceneWeather:
      return "AttrSceneWeather";
    case EAttrType.AttrSceneLevelId:
      return "AttrSceneLevelId";
    case EAttrType.AttrSceneDayNightSwitch:
      return "AttrSceneDayNightSwitch";
    case EAttrType.AttrFireworkStartTimeSeconds:
      return "AttrFireworkStartTimeSeconds";
    case EAttrType.AttrDeathCount:
      return "AttrDeathCount";
    case EAttrType.AttrDeathSubTimeSecond:
      return "AttrDeathSubTimeSecond";
    case EAttrType.AttrFireworkType:
      return "AttrFireworkType";
    case EAttrType.AttrSceneLineKickUserEndTime:
      return "AttrSceneLineKickUserEndTime";
    case EAttrType.AttrObjState:
      return "AttrObjState";
    case EAttrType.AttrObjCounter:
      return "AttrObjCounter";
    case EAttrType.AttrOwner:
      return "AttrOwner";
    case EAttrType.AttrToyState:
      return "AttrToyState";
    case EAttrType.AttrDynamicInteractionId:
      return "AttrDynamicInteractionId";
    case EAttrType.AttrZoneParam:
      return "AttrZoneParam";
    case EAttrType.AttrDataType:
      return "AttrDataType";
    case EAttrType.AttrRotation:
      return "AttrRotation";
    case EAttrType.AttrShape:
      return "AttrShape";
    case EAttrType.AttrGMGod:
      return "AttrGMGod";
    case EAttrType.AttrShapeshiftType:
      return "AttrShapeshiftType";
    case EAttrType.AttrShapeshiftConfigId:
      return "AttrShapeshiftConfigId";
    case EAttrType.AttrShapeshiftProfessionId:
      return "AttrShapeshiftProfessionId";
    case EAttrType.AttrShapeshiftSkillIds:
      return "AttrShapeshiftSkillIds";
    case EAttrType.AttrShapeshiftReplaceAttr:
      return "AttrShapeshiftReplaceAttr";
    case EAttrType.AttrNpcTest:
      return "AttrNpcTest";
    case EAttrType.AttrHostId:
      return "AttrHostId";
    case EAttrType.AttrEventId:
      return "AttrEventId";
    case EAttrType.AttrEffectType:
      return "AttrEffectType";
    case EAttrType.AttrBulletTargetPos:
      return "AttrBulletTargetPos";
    case EAttrType.AttrRayCount:
      return "AttrRayCount";
    case EAttrType.AttrRotate:
      return "AttrRotate";
    case EAttrType.AttrSummonGroup:
      return "AttrSummonGroup";
    case EAttrType.AttrSummonIndex:
      return "AttrSummonIndex";
    case EAttrType.AttrSummonGroupCount:
      return "AttrSummonGroupCount";
    case EAttrType.AttrBulletStage:
      return "AttrBulletStage";
    case EAttrType.AttrBulletCanMove:
      return "AttrBulletCanMove";
    case EAttrType.AttrBulletCantHit:
      return "AttrBulletCantHit";
    case EAttrType.AttrBulletZoomType:
      return "AttrBulletZoomType";
    case EAttrType.AttrBulletOrientationType:
      return "AttrBulletOrientationType";
    case EAttrType.AttrBanDestroyShow:
      return "AttrBanDestroyShow";
    case EAttrType.AttrBulletSpeedChangePCT:
      return "AttrBulletSpeedChangePCT";
    case EAttrType.AttrDirX:
      return "AttrDirX";
    case EAttrType.AttrDirZ:
      return "AttrDirZ";
    case EAttrType.AttrTargetDirX:
      return "AttrTargetDirX";
    case EAttrType.AttrTargetDirZ:
      return "AttrTargetDirZ";
    case EAttrType.AttrMaxExtinction:
      return "AttrMaxExtinction";
    case EAttrType.AttrExtinction:
      return "AttrExtinction";
    case EAttrType.AttrMaxStunned:
      return "AttrMaxStunned";
    case EAttrType.AttrStunned:
      return "AttrStunned";
    case EAttrType.AttrInOverdrive:
      return "AttrInOverdrive";
    case EAttrType.AttrIsLockStunned:
      return "AttrIsLockStunned";
    case EAttrType.AttrTargetUuid:
      return "AttrTargetUuid";
    case EAttrType.AttrAlertIncreaseSpeed:
      return "AttrAlertIncreaseSpeed";
    case EAttrType.AttrAlertValue:
      return "AttrAlertValue";
    case EAttrType.AttrStopBreakingBarTickingFlag:
      return "AttrStopBreakingBarTickingFlag";
    case EAttrType.AttrIsStopBehvTree:
      return "AttrIsStopBehvTree";
    case EAttrType.AttrBreakingStage:
      return "AttrBreakingStage";
    case EAttrType.AttrFirstAttack:
      return "AttrFirstAttack";
    case EAttrType.AttrDungeonScoreExtraMultiple:
      return "AttrDungeonScoreExtraMultiple";
    case EAttrType.AttrDungeonScoreExtraAddValue:
      return "AttrDungeonScoreExtraAddValue";
    case EAttrType.AttrIsMonsterRankEnable:
      return "AttrIsMonsterRankEnable";
    case EAttrType.AttrMonsterRank:
      return "AttrMonsterRank";
    case EAttrType.SupplementaryRewardIndex:
      return "SupplementaryRewardIndex";
    case EAttrType.AttrHatedCharId:
      return "AttrHatedCharId";
    case EAttrType.AttrHatedJob:
      return "AttrHatedJob";
    case EAttrType.AttrHatedName:
      return "AttrHatedName";
    case EAttrType.AttrHateList:
      return "AttrHateList";
    case EAttrType.AttrDropType:
      return "AttrDropType";
    case EAttrType.AttrItemId:
      return "AttrItemId";
    case EAttrType.AttrAwardId:
      return "AttrAwardId";
    case EAttrType.AttrAni:
      return "AttrAni";
    case EAttrType.AttrItemData:
      return "AttrItemData";
    case EAttrType.AttrInteractionActor:
      return "AttrInteractionActor";
    case EAttrType.AttrCollectCounter:
      return "AttrCollectCounter";
    case EAttrType.AttrTransferType:
      return "AttrTransferType";
    case EAttrType.AttrStiffType:
      return "AttrStiffType";
    case EAttrType.AttrStiffStage:
      return "AttrStiffStage";
    case EAttrType.AttrStiffStageTime:
      return "AttrStiffStageTime";
    case EAttrType.AttrStiffDir:
      return "AttrStiffDir";
    case EAttrType.AttrStiffTime:
      return "AttrStiffTime";
    case EAttrType.AttrStiffDownTime:
      return "AttrStiffDownTime";
    case EAttrType.AttrStiffHangTime:
      return "AttrStiffHangTime";
    case EAttrType.AttrStiffTarget:
      return "AttrStiffTarget";
    case EAttrType.AttrStiffFlowSpeed:
      return "AttrStiffFlowSpeed";
    case EAttrType.AttrStiffFlowOffset:
      return "AttrStiffFlowOffset";
    case EAttrType.AttrStiffFlowRadius:
      return "AttrStiffFlowRadius";
    case EAttrType.AttrStiffHorSpeed:
      return "AttrStiffHorSpeed";
    case EAttrType.AttrStiffHorAccSpeed:
      return "AttrStiffHorAccSpeed";
    case EAttrType.AttrStiffVerSpeedUp:
      return "AttrStiffVerSpeedUp";
    case EAttrType.AttrStiffVerAccSpeedUp:
      return "AttrStiffVerAccSpeedUp";
    case EAttrType.AttrStiffVerSpeedDown:
      return "AttrStiffVerSpeedDown";
    case EAttrType.AttrStiffVerAccSpeedDown:
      return "AttrStiffVerAccSpeedDown";
    case EAttrType.AttrStiffHorSpeedMinimum:
      return "AttrStiffHorSpeedMinimum";
    case EAttrType.AttrStiffDamageWeight:
      return "AttrStiffDamageWeight";
    case EAttrType.AttrTargetPosIsEnd:
      return "AttrTargetPosIsEnd";
    case EAttrType.AttrStiffThrowMoveInfo:
      return "AttrStiffThrowMoveInfo";
    case EAttrType.AttrStiffDamageStrength:
      return "AttrStiffDamageStrength";
    case EAttrType.AttrRideId:
      return "AttrRideId";
    case EAttrType.AttrIsCantRide:
      return "AttrIsCantRide";
    case EAttrType.AttrRideIndex:
      return "AttrRideIndex";
    case EAttrType.AttrRideStage:
      return "AttrRideStage";
    case EAttrType.AttrRideType:
      return "AttrRideType";
    case EAttrType.AttrRideUuid:
      return "AttrRideUuid";
    case EAttrType.AttrRideAttachEnable:
      return "AttrRideAttachEnable";
    case EAttrType.AttrRideMagneticEnable:
      return "AttrRideMagneticEnable";
    case EAttrType.AttrRideMagneticQueueId:
      return "AttrRideMagneticQueueId";
    case EAttrType.AttrIsForceRide:
      return "AttrIsForceRide";
    case EAttrType.AttrControllerUuid:
      return "AttrControllerUuid";
    case EAttrType.AttrPassengerList:
      return "AttrPassengerList";
    case EAttrType.AttrIsSilence:
      return "AttrIsSilence";
    case EAttrType.AttrIsConfine:
      return "AttrIsConfine";
    case EAttrType.AttrRideSeatCantTransfer:
      return "AttrRideSeatCantTransfer";
    case EAttrType.AttrCantSwim:
      return "AttrCantSwim";
    case EAttrType.AttrGMCantHit:
      return "AttrGMCantHit";
    case EAttrType.AttrCantStiff:
      return "AttrCantStiff";
    case EAttrType.AttrCantStiffBack:
      return "AttrCantStiffBack";
    case EAttrType.AttrCantStiffDown:
      return "AttrCantStiffDown";
    case EAttrType.AttrCantStiffAir:
      return "AttrCantStiffAir";
    case EAttrType.AttrCantNormalAttack:
      return "AttrCantNormalAttack";
    case EAttrType.AttrCantSkill:
      return "AttrCantSkill";
    case EAttrType.AttrCantMove:
      return "AttrCantMove";
    case EAttrType.AttrCantTurn:
      return "AttrCantTurn";
    case EAttrType.AttrCantJump:
      return "AttrCantJump";
    case EAttrType.AttrCantRush:
      return "AttrCantRush";
    case EAttrType.AttrCantGravitational:
      return "AttrCantGravitational";
    case EAttrType.AttrCantStiffFlow:
      return "AttrCantStiffFlow";
    case EAttrType.AttrCantChangeProfession:
      return "AttrCantChangeProfession";
    case EAttrType.AttrCantInteraction:
      return "AttrCantInteraction";
    case EAttrType.AttrCantFallDamage:
      return "AttrCantFallDamage";
    case EAttrType.AttrCanFlow:
      return "AttrCanFlow";
    case EAttrType.AttrCanGlide:
      return "AttrCanGlide";
    case EAttrType.AttrCanBeHit:
      return "AttrCanBeHit";
    case EAttrType.AttrCanLessenHP:
      return "AttrCanLessenHP";
    case EAttrType.AttrCanIntoCombat:
      return "AttrCanIntoCombat";
    case EAttrType.AttrCantHit:
      return "AttrCantHit";
    case EAttrType.AttrCanBeHatredTarget:
      return "AttrCanBeHatredTarget";
    case EAttrType.AttrCanHitNum:
      return "AttrCanHitNum";
    case EAttrType.AttrCanHitObj:
      return "AttrCanHitObj";
    case EAttrType.AttrCanPathFinding:
      return "AttrCanPathFinding";
    case EAttrType.AttrCantNormalAttackInput:
      return "AttrCantNormalAttackInput";
    case EAttrType.AttrCantSkillInput:
      return "AttrCantSkillInput";
    case EAttrType.AttrCantMoveInput:
      return "AttrCantMoveInput";
    case EAttrType.AttrCantJumpInput:
      return "AttrCantJumpInput";
    case EAttrType.AttrCantRushInput:
      return "AttrCantRushInput";
    case EAttrType.AttrCantUseToy:
      return "AttrCantUseToy";
    case EAttrType.AttrTopSummonerSkillSkin:
      return "AttrTopSummonerSkillSkin";
    case EAttrType.AttrSummonSkillId:
      return "AttrSummonSkillId";
    case EAttrType.AttrSceneServStateObjData:
      return "AttrSceneServStateObjData";
    case EAttrType.AttrCommunityDataMap:
      return "AttrCommunityDataMap";
    case EAttrType.AttrOwnership:
      return "AttrOwnership";
    case EAttrType.AttrHomeId:
      return "AttrHomeId";
    case EAttrType.DecorationInfo:
      return "DecorationInfo";
    case EAttrType.AttrLevel:
      return "AttrLevel";
    case EAttrType.AttrGS:
      return "AttrGS";
    case EAttrType.AttrLastMaxGS:
      return "AttrLastMaxGS";
    case EAttrType.AttrFightPoint:
      return "AttrFightPoint";
    case EAttrType.AttrFightPointTotal:
      return "AttrFightPointTotal";
    case EAttrType.AttrFightPointAdd:
      return "AttrFightPointAdd";
    case EAttrType.AttrFightPointExAdd:
      return "AttrFightPointExAdd";
    case EAttrType.AttrFightPointPer:
      return "AttrFightPointPer";
    case EAttrType.AttrFightPointExPer:
      return "AttrFightPointExPer";
    case EAttrType.AttrFightCapability:
      return "AttrFightCapability";
    case EAttrType.AttrFightCapabilityTotal:
      return "AttrFightCapabilityTotal";
    case EAttrType.AttrFightCapabilityAdd:
      return "AttrFightCapabilityAdd";
    case EAttrType.AttrFightCapabilityExAdd:
      return "AttrFightCapabilityExAdd";
    case EAttrType.AttrFightCapabilityPer:
      return "AttrFightCapabilityPer";
    case EAttrType.AttrFightCapabilityExPer:
      return "AttrFightCapabilityExPer";
    case EAttrType.AttrSurvivalCapability:
      return "AttrSurvivalCapability";
    case EAttrType.AttrSurvivalCapabilityTotal:
      return "AttrSurvivalCapabilityTotal";
    case EAttrType.AttrSurvivalCapabilityAdd:
      return "AttrSurvivalCapabilityAdd";
    case EAttrType.AttrSurvivalCapabilityExAdd:
      return "AttrSurvivalCapabilityExAdd";
    case EAttrType.AttrSurvivalCapabilityPer:
      return "AttrSurvivalCapabilityPer";
    case EAttrType.AttrSurvivalCapabilityExPer:
      return "AttrSurvivalCapabilityExPer";
    case EAttrType.AttrRankLevel:
      return "AttrRankLevel";
    case EAttrType.AttrWalkVelocity:
      return "AttrWalkVelocity";
    case EAttrType.AttrWalkVelocityTotal:
      return "AttrWalkVelocityTotal";
    case EAttrType.AttrWalkVelocityAdd:
      return "AttrWalkVelocityAdd";
    case EAttrType.AttrWalkVelocityExAdd:
      return "AttrWalkVelocityExAdd";
    case EAttrType.AttrWalkVelocityPer:
      return "AttrWalkVelocityPer";
    case EAttrType.AttrWalkVelocityExPer:
      return "AttrWalkVelocityExPer";
    case EAttrType.AttrRunVelocity:
      return "AttrRunVelocity";
    case EAttrType.AttrRunVelocityTotal:
      return "AttrRunVelocityTotal";
    case EAttrType.AttrRunVelocityAdd:
      return "AttrRunVelocityAdd";
    case EAttrType.AttrRunVelocityExAdd:
      return "AttrRunVelocityExAdd";
    case EAttrType.AttrRunVelocityPer:
      return "AttrRunVelocityPer";
    case EAttrType.AttrRunVelocityExPer:
      return "AttrRunVelocityExPer";
    case EAttrType.AttrDashVelocity:
      return "AttrDashVelocity";
    case EAttrType.AttrDashVelocityTotal:
      return "AttrDashVelocityTotal";
    case EAttrType.AttrDashVelocityAdd:
      return "AttrDashVelocityAdd";
    case EAttrType.AttrDashVelocityExAdd:
      return "AttrDashVelocityExAdd";
    case EAttrType.AttrDashVelocityPer:
      return "AttrDashVelocityPer";
    case EAttrType.AttrDashVelocityExPer:
      return "AttrDashVelocityExPer";
    case EAttrType.AttrReviveTimeConsumePCT:
      return "AttrReviveTimeConsumePCT";
    case EAttrType.AttrReviveTimeConsumePCTTotal:
      return "AttrReviveTimeConsumePCTTotal";
    case EAttrType.AttrReviveTimeConsumePCTAdd:
      return "AttrReviveTimeConsumePCTAdd";
    case EAttrType.AttrReviveTimeConsumePCTExAdd:
      return "AttrReviveTimeConsumePCTExAdd";
    case EAttrType.AttrReviveTimeConsumePCTPer:
      return "AttrReviveTimeConsumePCTPer";
    case EAttrType.AttrReviveTimeConsumePCTExPer:
      return "AttrReviveTimeConsumePCTExPer";
    case EAttrType.AttrRideWalkVelocity:
      return "AttrRideWalkVelocity";
    case EAttrType.AttrRideWalkVelocityTotal:
      return "AttrRideWalkVelocityTotal";
    case EAttrType.AttrRideWalkVelocityAdd:
      return "AttrRideWalkVelocityAdd";
    case EAttrType.AttrRideWalkVelocityExAdd:
      return "AttrRideWalkVelocityExAdd";
    case EAttrType.AttrRideWalkVelocityPer:
      return "AttrRideWalkVelocityPer";
    case EAttrType.AttrRideWalkVelocityExPer:
      return "AttrRideWalkVelocityExPer";
    case EAttrType.AttrRideRunVelocity:
      return "AttrRideRunVelocity";
    case EAttrType.AttrRideRunVelocityTotal:
      return "AttrRideRunVelocityTotal";
    case EAttrType.AttrRideRunVelocityAdd:
      return "AttrRideRunVelocityAdd";
    case EAttrType.AttrRideRunVelocityExAdd:
      return "AttrRideRunVelocityExAdd";
    case EAttrType.AttrRideRunVelocityPer:
      return "AttrRideRunVelocityPer";
    case EAttrType.AttrRideRunVelocityExPer:
      return "AttrRideRunVelocityExPer";
    case EAttrType.AttrRideDashVelocity:
      return "AttrRideDashVelocity";
    case EAttrType.AttrRideDashVelocityTotal:
      return "AttrRideDashVelocityTotal";
    case EAttrType.AttrRideDashVelocityAdd:
      return "AttrRideDashVelocityAdd";
    case EAttrType.AttrRideDashVelocityExAdd:
      return "AttrRideDashVelocityExAdd";
    case EAttrType.AttrRideDashVelocityPer:
      return "AttrRideDashVelocityPer";
    case EAttrType.AttrRideDashVelocityExPer:
      return "AttrRideDashVelocityExPer";
    case EAttrType.AttrReviveInterTimeConsumePCT:
      return "AttrReviveInterTimeConsumePCT";
    case EAttrType.AttrReviveInterTimeConsumePCTTotal:
      return "AttrReviveInterTimeConsumePCTTotal";
    case EAttrType.AttrReviveInterTimeConsumePCTAdd:
      return "AttrReviveInterTimeConsumePCTAdd";
    case EAttrType.AttrReviveInterTimeConsumePCTExAdd:
      return "AttrReviveInterTimeConsumePCTExAdd";
    case EAttrType.AttrReviveInterTimeConsumePCTPer:
      return "AttrReviveInterTimeConsumePCTPer";
    case EAttrType.AttrReviveInterTimeConsumePCTExPer:
      return "AttrReviveInterTimeConsumePCTExPer";
    case EAttrType.AttrStrength:
      return "AttrStrength";
    case EAttrType.AttrStrengthTotal:
      return "AttrStrengthTotal";
    case EAttrType.AttrStrengthAdd:
      return "AttrStrengthAdd";
    case EAttrType.AttrStrengthExAdd:
      return "AttrStrengthExAdd";
    case EAttrType.AttrStrengthPer:
      return "AttrStrengthPer";
    case EAttrType.AttrStrengthExPer:
      return "AttrStrengthExPer";
    case EAttrType.AttrIntelligence:
      return "AttrIntelligence";
    case EAttrType.AttrIntelligenceTotal:
      return "AttrIntelligenceTotal";
    case EAttrType.AttrIntelligenceAdd:
      return "AttrIntelligenceAdd";
    case EAttrType.AttrIntelligenceExAdd:
      return "AttrIntelligenceExAdd";
    case EAttrType.AttrIntelligencePer:
      return "AttrIntelligencePer";
    case EAttrType.AttrIntelligenceExPer:
      return "AttrIntelligenceExPer";
    case EAttrType.AttrDexterity:
      return "AttrDexterity";
    case EAttrType.AttrDexterityTotal:
      return "AttrDexterityTotal";
    case EAttrType.AttrDexterityAdd:
      return "AttrDexterityAdd";
    case EAttrType.AttrDexterityExAdd:
      return "AttrDexterityExAdd";
    case EAttrType.AttrDexterityPer:
      return "AttrDexterityPer";
    case EAttrType.AttrDexterityExPer:
      return "AttrDexterityExPer";
    case EAttrType.AttrVitality:
      return "AttrVitality";
    case EAttrType.AttrVitalityTotal:
      return "AttrVitalityTotal";
    case EAttrType.AttrVitalityAdd:
      return "AttrVitalityAdd";
    case EAttrType.AttrVitalityExAdd:
      return "AttrVitalityExAdd";
    case EAttrType.AttrVitalityPer:
      return "AttrVitalityPer";
    case EAttrType.AttrVitalityExPer:
      return "AttrVitalityExPer";
    case EAttrType.AttrCri:
      return "AttrCri";
    case EAttrType.AttrCriTotal:
      return "AttrCriTotal";
    case EAttrType.AttrCriAdd:
      return "AttrCriAdd";
    case EAttrType.AttrCriExAdd:
      return "AttrCriExAdd";
    case EAttrType.AttrCriPer:
      return "AttrCriPer";
    case EAttrType.AttrCriExPer:
      return "AttrCriExPer";
    case EAttrType.AttrHaste:
      return "AttrHaste";
    case EAttrType.AttrHasteTotal:
      return "AttrHasteTotal";
    case EAttrType.AttrHasteAdd:
      return "AttrHasteAdd";
    case EAttrType.AttrHasteExAdd:
      return "AttrHasteExAdd";
    case EAttrType.AttrHastePer:
      return "AttrHastePer";
    case EAttrType.AttrHasteExPer:
      return "AttrHasteExPer";
    case EAttrType.AttrLuck:
      return "AttrLuck";
    case EAttrType.AttrLuckTotal:
      return "AttrLuckTotal";
    case EAttrType.AttrLuckAdd:
      return "AttrLuckAdd";
    case EAttrType.AttrLuckExAdd:
      return "AttrLuckExAdd";
    case EAttrType.AttrLuckPer:
      return "AttrLuckPer";
    case EAttrType.AttrLuckExPer:
      return "AttrLuckExPer";
    case EAttrType.AttrMastery:
      return "AttrMastery";
    case EAttrType.AttrMasteryTotal:
      return "AttrMasteryTotal";
    case EAttrType.AttrMasteryAdd:
      return "AttrMasteryAdd";
    case EAttrType.AttrMasteryExAdd:
      return "AttrMasteryExAdd";
    case EAttrType.AttrMasteryPer:
      return "AttrMasteryPer";
    case EAttrType.AttrMasteryExPer:
      return "AttrMasteryExPer";
    case EAttrType.AttrVersatility:
      return "AttrVersatility";
    case EAttrType.AttrVersatilityTotal:
      return "AttrVersatilityTotal";
    case EAttrType.AttrVersatilityAdd:
      return "AttrVersatilityAdd";
    case EAttrType.AttrVersatilityExAdd:
      return "AttrVersatilityExAdd";
    case EAttrType.AttrVersatilityPer:
      return "AttrVersatilityPer";
    case EAttrType.AttrVersatilityExPer:
      return "AttrVersatilityExPer";
    case EAttrType.AttrHit:
      return "AttrHit";
    case EAttrType.AttrHitTotal:
      return "AttrHitTotal";
    case EAttrType.AttrHitAdd:
      return "AttrHitAdd";
    case EAttrType.AttrHitExAdd:
      return "AttrHitExAdd";
    case EAttrType.AttrHitPer:
      return "AttrHitPer";
    case EAttrType.AttrHitExPer:
      return "AttrHitExPer";
    case EAttrType.AttrBlock:
      return "AttrBlock";
    case EAttrType.AttrBlockTotal:
      return "AttrBlockTotal";
    case EAttrType.AttrBlockAdd:
      return "AttrBlockAdd";
    case EAttrType.AttrBlockExAdd:
      return "AttrBlockExAdd";
    case EAttrType.AttrBlockPer:
      return "AttrBlockPer";
    case EAttrType.AttrBlockExPer:
      return "AttrBlockExPer";
    case EAttrType.AttrHp:
      return "AttrHp";
    case EAttrType.AttrMaxHp:
      return "AttrMaxHp";
    case EAttrType.AttrMaxHpTotal:
      return "AttrMaxHpTotal";
    case EAttrType.AttrMaxHpAdd:
      return "AttrMaxHpAdd";
    case EAttrType.AttrMaxHpExAdd:
      return "AttrMaxHpExAdd";
    case EAttrType.AttrMaxHpPer:
      return "AttrMaxHpPer";
    case EAttrType.AttrMaxHpExPer:
      return "AttrMaxHpExPer";
    case EAttrType.AttrAttack:
      return "AttrAttack";
    case EAttrType.AttrAttackTotal:
      return "AttrAttackTotal";
    case EAttrType.AttrAttackAdd:
      return "AttrAttackAdd";
    case EAttrType.AttrAttackExAdd:
      return "AttrAttackExAdd";
    case EAttrType.AttrAttackPer:
      return "AttrAttackPer";
    case EAttrType.AttrAttackExPer:
      return "AttrAttackExPer";
    case EAttrType.AttrMAttack:
      return "AttrMAttack";
    case EAttrType.AttrMAttackTotal:
      return "AttrMAttackTotal";
    case EAttrType.AttrMAttackAdd:
      return "AttrMAttackAdd";
    case EAttrType.AttrMAttackExAdd:
      return "AttrMAttackExAdd";
    case EAttrType.AttrMAttackPer:
      return "AttrMAttackPer";
    case EAttrType.AttrMAttackExPer:
      return "AttrMAttackExPer";
    case EAttrType.AttrDefense:
      return "AttrDefense";
    case EAttrType.AttrDefenseTotal:
      return "AttrDefenseTotal";
    case EAttrType.AttrDefenseAdd:
      return "AttrDefenseAdd";
    case EAttrType.AttrDefenseExAdd:
      return "AttrDefenseExAdd";
    case EAttrType.AttrDefensePer:
      return "AttrDefensePer";
    case EAttrType.AttrDefenseExPer:
      return "AttrDefenseExPer";
    case EAttrType.AttrMDefense:
      return "AttrMDefense";
    case EAttrType.AttrMDefenseTotal:
      return "AttrMDefenseTotal";
    case EAttrType.AttrMDefenseAdd:
      return "AttrMDefenseAdd";
    case EAttrType.AttrMDefenseExAdd:
      return "AttrMDefenseExAdd";
    case EAttrType.AttrMDefensePer:
      return "AttrMDefensePer";
    case EAttrType.AttrMDefenseExPer:
      return "AttrMDefenseExPer";
    case EAttrType.AttrIgnoreDefense:
      return "AttrIgnoreDefense";
    case EAttrType.AttrIgnoreDefenseTotal:
      return "AttrIgnoreDefenseTotal";
    case EAttrType.AttrIgnoreDefenseAdd:
      return "AttrIgnoreDefenseAdd";
    case EAttrType.AttrIgnoreDefenseExAdd:
      return "AttrIgnoreDefenseExAdd";
    case EAttrType.AttrIgnoreDefensePer:
      return "AttrIgnoreDefensePer";
    case EAttrType.AttrIgnoreDefenseExPer:
      return "AttrIgnoreDefenseExPer";
    case EAttrType.AttrIgnoreMDefense:
      return "AttrIgnoreMDefense";
    case EAttrType.AttrIgnoreMDefenseTotal:
      return "AttrIgnoreMDefenseTotal";
    case EAttrType.AttrIgnoreMDefenseAdd:
      return "AttrIgnoreMDefenseAdd";
    case EAttrType.AttrIgnoreMDefenseExAdd:
      return "AttrIgnoreMDefenseExAdd";
    case EAttrType.AttrIgnoreMDefensePer:
      return "AttrIgnoreMDefensePer";
    case EAttrType.AttrIgnoreMDefenseExPer:
      return "AttrIgnoreMDefenseExPer";
    case EAttrType.AttrIgnoreDefensePCT:
      return "AttrIgnoreDefensePCT";
    case EAttrType.AttrIgnoreDefensePCTTotal:
      return "AttrIgnoreDefensePCTTotal";
    case EAttrType.AttrIgnoreDefensePCTAdd:
      return "AttrIgnoreDefensePCTAdd";
    case EAttrType.AttrIgnoreDefensePCTExAdd:
      return "AttrIgnoreDefensePCTExAdd";
    case EAttrType.AttrIgnoreDefensePCTPer:
      return "AttrIgnoreDefensePCTPer";
    case EAttrType.AttrIgnoreDefensePCTExPer:
      return "AttrIgnoreDefensePCTExPer";
    case EAttrType.AttrIgnoreMDefensePCT:
      return "AttrIgnoreMDefensePCT";
    case EAttrType.AttrIgnoreMDefensePCTTotal:
      return "AttrIgnoreMDefensePCTTotal";
    case EAttrType.AttrIgnoreMDefensePCTAdd:
      return "AttrIgnoreMDefensePCTAdd";
    case EAttrType.AttrIgnoreMDefensePCTExAdd:
      return "AttrIgnoreMDefensePCTExAdd";
    case EAttrType.AttrIgnoreMDefensePCTPer:
      return "AttrIgnoreMDefensePCTPer";
    case EAttrType.AttrIgnoreMDefensePCTExPer:
      return "AttrIgnoreMDefensePCTExPer";
    case EAttrType.AttrRefineAttack:
      return "AttrRefineAttack";
    case EAttrType.AttrRefineAttackTotal:
      return "AttrRefineAttackTotal";
    case EAttrType.AttrRefineAttackAdd:
      return "AttrRefineAttackAdd";
    case EAttrType.AttrRefineAttackExAdd:
      return "AttrRefineAttackExAdd";
    case EAttrType.AttrRefineAttackPer:
      return "AttrRefineAttackPer";
    case EAttrType.AttrRefineAttackExPer:
      return "AttrRefineAttackExPer";
    case EAttrType.AttrRefineDefense:
      return "AttrRefineDefense";
    case EAttrType.AttrRefineDefenseTotal:
      return "AttrRefineDefenseTotal";
    case EAttrType.AttrRefineDefenseAdd:
      return "AttrRefineDefenseAdd";
    case EAttrType.AttrRefineDefenseExAdd:
      return "AttrRefineDefenseExAdd";
    case EAttrType.AttrRefineDefensePer:
      return "AttrRefineDefensePer";
    case EAttrType.AttrRefineDefenseExPer:
      return "AttrRefineDefenseExPer";
    case EAttrType.AttrRefineMAttack:
      return "AttrRefineMAttack";
    case EAttrType.AttrRefineMAttackTotal:
      return "AttrRefineMAttackTotal";
    case EAttrType.AttrRefineMAttackAdd:
      return "AttrRefineMAttackAdd";
    case EAttrType.AttrRefineMAttackExAdd:
      return "AttrRefineMAttackExAdd";
    case EAttrType.AttrRefineMAttackPer:
      return "AttrRefineMAttackPer";
    case EAttrType.AttrRefineMAttackExPer:
      return "AttrRefineMAttackExPer";
    case EAttrType.AttrElementAtk:
      return "AttrElementAtk";
    case EAttrType.AttrElementAtkTotal:
      return "AttrElementAtkTotal";
    case EAttrType.AttrElementAtkAdd:
      return "AttrElementAtkAdd";
    case EAttrType.AttrElementAtkExAdd:
      return "AttrElementAtkExAdd";
    case EAttrType.AttrElementAtkPer:
      return "AttrElementAtkPer";
    case EAttrType.AttrElementAtkExPer:
      return "AttrElementAtkExPer";
    case EAttrType.AttrFireAtk:
      return "AttrFireAtk";
    case EAttrType.AttrFireAtkTotal:
      return "AttrFireAtkTotal";
    case EAttrType.AttrFireAtkAdd:
      return "AttrFireAtkAdd";
    case EAttrType.AttrFireAtkExAdd:
      return "AttrFireAtkExAdd";
    case EAttrType.AttrFireAtkPer:
      return "AttrFireAtkPer";
    case EAttrType.AttrFireAtkExPer:
      return "AttrFireAtkExPer";
    case EAttrType.AttrWaterAtk:
      return "AttrWaterAtk";
    case EAttrType.AttrWaterAtkTotal:
      return "AttrWaterAtkTotal";
    case EAttrType.AttrWaterAtkAdd:
      return "AttrWaterAtkAdd";
    case EAttrType.AttrWaterAtkExAdd:
      return "AttrWaterAtkExAdd";
    case EAttrType.AttrWaterAtkPer:
      return "AttrWaterAtkPer";
    case EAttrType.AttrWaterAtkExPer:
      return "AttrWaterAtkExPer";
    case EAttrType.AttrWoodAtk:
      return "AttrWoodAtk";
    case EAttrType.AttrWoodAtkTotal:
      return "AttrWoodAtkTotal";
    case EAttrType.AttrWoodAtkAdd:
      return "AttrWoodAtkAdd";
    case EAttrType.AttrWoodAtkExAdd:
      return "AttrWoodAtkExAdd";
    case EAttrType.AttrWoodAtkPer:
      return "AttrWoodAtkPer";
    case EAttrType.AttrWoodAtkExPer:
      return "AttrWoodAtkExPer";
    case EAttrType.AttrElectricityAtk:
      return "AttrElectricityAtk";
    case EAttrType.AttrElectricityAtkTotal:
      return "AttrElectricityAtkTotal";
    case EAttrType.AttrElectricityAtkAdd:
      return "AttrElectricityAtkAdd";
    case EAttrType.AttrElectricityAtkExAdd:
      return "AttrElectricityAtkExAdd";
    case EAttrType.AttrElectricityAtkPer:
      return "AttrElectricityAtkPer";
    case EAttrType.AttrElectricityAtkExPer:
      return "AttrElectricityAtkExPer";
    case EAttrType.AttrWindAtk:
      return "AttrWindAtk";
    case EAttrType.AttrWindAtkTotal:
      return "AttrWindAtkTotal";
    case EAttrType.AttrWindAtkAdd:
      return "AttrWindAtkAdd";
    case EAttrType.AttrWindAtkExAdd:
      return "AttrWindAtkExAdd";
    case EAttrType.AttrWindAtkPer:
      return "AttrWindAtkPer";
    case EAttrType.AttrWindAtkExPer:
      return "AttrWindAtkExPer";
    case EAttrType.AttrRockAtk:
      return "AttrRockAtk";
    case EAttrType.AttrRockAtkTotal:
      return "AttrRockAtkTotal";
    case EAttrType.AttrRockAtkAdd:
      return "AttrRockAtkAdd";
    case EAttrType.AttrRockAtkExAdd:
      return "AttrRockAtkExAdd";
    case EAttrType.AttrRockAtkPer:
      return "AttrRockAtkPer";
    case EAttrType.AttrRockAtkExPer:
      return "AttrRockAtkExPer";
    case EAttrType.AttrLightAtk:
      return "AttrLightAtk";
    case EAttrType.AttrLightAtkTotal:
      return "AttrLightAtkTotal";
    case EAttrType.AttrLightAtkAdd:
      return "AttrLightAtkAdd";
    case EAttrType.AttrLightAtkExAdd:
      return "AttrLightAtkExAdd";
    case EAttrType.AttrLightAtkPer:
      return "AttrLightAtkPer";
    case EAttrType.AttrLightAtkExPer:
      return "AttrLightAtkExPer";
    case EAttrType.AttrDarkAtk:
      return "AttrDarkAtk";
    case EAttrType.AttrDarkAtkTotal:
      return "AttrDarkAtkTotal";
    case EAttrType.AttrDarkAtkAdd:
      return "AttrDarkAtkAdd";
    case EAttrType.AttrDarkAtkExAdd:
      return "AttrDarkAtkExAdd";
    case EAttrType.AttrDarkAtkPer:
      return "AttrDarkAtkPer";
    case EAttrType.AttrDarkAtkExPer:
      return "AttrDarkAtkExPer";
    case EAttrType.AttrCrit:
      return "AttrCrit";
    case EAttrType.AttrCritTotal:
      return "AttrCritTotal";
    case EAttrType.AttrCritAdd:
      return "AttrCritAdd";
    case EAttrType.AttrCritExAdd:
      return "AttrCritExAdd";
    case EAttrType.AttrCritPer:
      return "AttrCritPer";
    case EAttrType.AttrCritExPer:
      return "AttrCritExPer";
    case EAttrType.AttrAttackSpeedPCT:
      return "AttrAttackSpeedPCT";
    case EAttrType.AttrAttackSpeedPCTTotal:
      return "AttrAttackSpeedPCTTotal";
    case EAttrType.AttrAttackSpeedPCTAdd:
      return "AttrAttackSpeedPCTAdd";
    case EAttrType.AttrAttackSpeedPCTExAdd:
      return "AttrAttackSpeedPCTExAdd";
    case EAttrType.AttrAttackSpeedPCTPer:
      return "AttrAttackSpeedPCTPer";
    case EAttrType.AttrAttackSpeedPCTExPer:
      return "AttrAttackSpeedPCTExPer";
    case EAttrType.AttrCastSpeedPCT:
      return "AttrCastSpeedPCT";
    case EAttrType.AttrCastSpeedPCTTotal:
      return "AttrCastSpeedPCTTotal";
    case EAttrType.AttrCastSpeedPCTAdd:
      return "AttrCastSpeedPCTAdd";
    case EAttrType.AttrCastSpeedPCTExAdd:
      return "AttrCastSpeedPCTExAdd";
    case EAttrType.AttrCastSpeedPCTPer:
      return "AttrCastSpeedPCTPer";
    case EAttrType.AttrCastSpeedPCTExPer:
      return "AttrCastSpeedPCTExPer";
    case EAttrType.AttrChargeSpeedPCT:
      return "AttrChargeSpeedPCT";
    case EAttrType.AttrChargeSpeedPCTTotal:
      return "AttrChargeSpeedPCTTotal";
    case EAttrType.AttrChargeSpeedPCTAdd:
      return "AttrChargeSpeedPCTAdd";
    case EAttrType.AttrChargeSpeedPCTExAdd:
      return "AttrChargeSpeedPCTExAdd";
    case EAttrType.AttrChargeSpeedPCTPer:
      return "AttrChargeSpeedPCTPer";
    case EAttrType.AttrChargeSpeedPCTExPer:
      return "AttrChargeSpeedPCTExPer";
    case EAttrType.AttrSkillCD:
      return "AttrSkillCD";
    case EAttrType.AttrSkillCDTotal:
      return "AttrSkillCDTotal";
    case EAttrType.AttrSkillCDAdd:
      return "AttrSkillCDAdd";
    case EAttrType.AttrSkillCDExAdd:
      return "AttrSkillCDExAdd";
    case EAttrType.AttrSkillCDPer:
      return "AttrSkillCDPer";
    case EAttrType.AttrSkillCDExPer:
      return "AttrSkillCDExPer";
    case EAttrType.AttrSkillCDPCT:
      return "AttrSkillCDPCT";
    case EAttrType.AttrSkillCDPCTTotal:
      return "AttrSkillCDPCTTotal";
    case EAttrType.AttrSkillCDPCTAdd:
      return "AttrSkillCDPCTAdd";
    case EAttrType.AttrSkillCDPCTExAdd:
      return "AttrSkillCDPCTExAdd";
    case EAttrType.AttrSkillCDPCTPer:
      return "AttrSkillCDPCTPer";
    case EAttrType.AttrSkillCDPCTExPer:
      return "AttrSkillCDPCTExPer";
    case EAttrType.AttrDotTime:
      return "AttrDotTime";
    case EAttrType.AttrDotTimeTotal:
      return "AttrDotTimeTotal";
    case EAttrType.AttrDotTimeAdd:
      return "AttrDotTimeAdd";
    case EAttrType.AttrDotTimeExAdd:
      return "AttrDotTimeExAdd";
    case EAttrType.AttrDotTimePer:
      return "AttrDotTimePer";
    case EAttrType.AttrDotTimeExPer:
      return "AttrDotTimeExPer";
    case EAttrType.AttrLuckyStrikeProb:
      return "AttrLuckyStrikeProb";
    case EAttrType.AttrLuckyStrikeProbTotal:
      return "AttrLuckyStrikeProbTotal";
    case EAttrType.AttrLuckyStrikeProbAdd:
      return "AttrLuckyStrikeProbAdd";
    case EAttrType.AttrLuckyStrikeProbExAdd:
      return "AttrLuckyStrikeProbExAdd";
    case EAttrType.AttrLuckyStrikeProbPer:
      return "AttrLuckyStrikeProbPer";
    case EAttrType.AttrLuckyStrikeProbExPer:
      return "AttrLuckyStrikeProbExPer";
    case EAttrType.AttrHeal:
      return "AttrHeal";
    case EAttrType.AttrHealTotal:
      return "AttrHealTotal";
    case EAttrType.AttrHealAdd:
      return "AttrHealAdd";
    case EAttrType.AttrHealExAdd:
      return "AttrHealExAdd";
    case EAttrType.AttrHealPer:
      return "AttrHealPer";
    case EAttrType.AttrHealExPer:
      return "AttrHealExPer";
    case EAttrType.AttrHealed:
      return "AttrHealed";
    case EAttrType.AttrHealedTotal:
      return "AttrHealedTotal";
    case EAttrType.AttrHealedAdd:
      return "AttrHealedAdd";
    case EAttrType.AttrHealedExAdd:
      return "AttrHealedExAdd";
    case EAttrType.AttrHealedPer:
      return "AttrHealedPer";
    case EAttrType.AttrHealedExPer:
      return "AttrHealedExPer";
    case EAttrType.AttrShieldAddPCT:
      return "AttrShieldAddPCT";
    case EAttrType.AttrShieldAddPCTTotal:
      return "AttrShieldAddPCTTotal";
    case EAttrType.AttrShieldAddPCTAdd:
      return "AttrShieldAddPCTAdd";
    case EAttrType.AttrShieldAddPCTExAdd:
      return "AttrShieldAddPCTExAdd";
    case EAttrType.AttrShieldAddPCTPer:
      return "AttrShieldAddPCTPer";
    case EAttrType.AttrShieldAddPCTExPer:
      return "AttrShieldAddPCTExPer";
    case EAttrType.AttrShieldGainPCT:
      return "AttrShieldGainPCT";
    case EAttrType.AttrShieldGainPCTTotal:
      return "AttrShieldGainPCTTotal";
    case EAttrType.AttrShieldGainPCTAdd:
      return "AttrShieldGainPCTAdd";
    case EAttrType.AttrShieldGainPCTExAdd:
      return "AttrShieldGainPCTExAdd";
    case EAttrType.AttrShieldGainPCTPer:
      return "AttrShieldGainPCTPer";
    case EAttrType.AttrShieldGainPCTExPer:
      return "AttrShieldGainPCTExPer";
    case EAttrType.AttrStunnedDamagePCT:
      return "AttrStunnedDamagePCT";
    case EAttrType.AttrStunnedDamagePCTTotal:
      return "AttrStunnedDamagePCTTotal";
    case EAttrType.AttrStunnedDamagePCTAdd:
      return "AttrStunnedDamagePCTAdd";
    case EAttrType.AttrStunnedDamagePCTExAdd:
      return "AttrStunnedDamagePCTExAdd";
    case EAttrType.AttrStunnedDamagePCTPer:
      return "AttrStunnedDamagePCTPer";
    case EAttrType.AttrStunnedDamagePCTExPer:
      return "AttrStunnedDamagePCTExPer";
    case EAttrType.AttrExtDamInc:
      return "AttrExtDamInc";
    case EAttrType.AttrExtDamIncTotal:
      return "AttrExtDamIncTotal";
    case EAttrType.AttrExtDamIncAdd:
      return "AttrExtDamIncAdd";
    case EAttrType.AttrExtDamIncExAdd:
      return "AttrExtDamIncExAdd";
    case EAttrType.AttrExtDamIncPer:
      return "AttrExtDamIncPer";
    case EAttrType.AttrExtDamIncExPer:
      return "AttrExtDamIncExPer";
    case EAttrType.AttrExtDamRes:
      return "AttrExtDamRes";
    case EAttrType.AttrExtDamResTotal:
      return "AttrExtDamResTotal";
    case EAttrType.AttrExtDamResAdd:
      return "AttrExtDamResAdd";
    case EAttrType.AttrExtDamResExAdd:
      return "AttrExtDamResExAdd";
    case EAttrType.AttrExtDamResPer:
      return "AttrExtDamResPer";
    case EAttrType.AttrExtDamResExPer:
      return "AttrExtDamResExPer";
    case EAttrType.AttrDpsOwnEffectStr:
      return "AttrDpsOwnEffectStr";
    case EAttrType.AttrDpsOwnEffectStrTotal:
      return "AttrDpsOwnEffectStrTotal";
    case EAttrType.AttrDpsOwnEffectStrAdd:
      return "AttrDpsOwnEffectStrAdd";
    case EAttrType.AttrDpsOwnEffectStrExAdd:
      return "AttrDpsOwnEffectStrExAdd";
    case EAttrType.AttrDpsOwnEffectStrPer:
      return "AttrDpsOwnEffectStrPer";
    case EAttrType.AttrDpsOwnEffectStrExPer:
      return "AttrDpsOwnEffectStrExPer";
    case EAttrType.AttrRainbowDamage:
      return "AttrRainbowDamage";
    case EAttrType.AttrRainbowDamageTotal:
      return "AttrRainbowDamageTotal";
    case EAttrType.AttrRainbowDamageAdd:
      return "AttrRainbowDamageAdd";
    case EAttrType.AttrRainbowDamageExAdd:
      return "AttrRainbowDamageExAdd";
    case EAttrType.AttrRainbowDamagePer:
      return "AttrRainbowDamagePer";
    case EAttrType.AttrRainbowDamageExPer:
      return "AttrRainbowDamageExPer";
    case EAttrType.AttrSuppressDamInc:
      return "AttrSuppressDamInc";
    case EAttrType.AttrSuppressDamIncTotal:
      return "AttrSuppressDamIncTotal";
    case EAttrType.AttrSuppressDamIncAdd:
      return "AttrSuppressDamIncAdd";
    case EAttrType.AttrSuppressDamIncExAdd:
      return "AttrSuppressDamIncExAdd";
    case EAttrType.AttrSuppressDamIncPer:
      return "AttrSuppressDamIncPer";
    case EAttrType.AttrSuppressDamIncExPer:
      return "AttrSuppressDamIncExPer";
    case EAttrType.AttrSuppressDamRes:
      return "AttrSuppressDamRes";
    case EAttrType.AttrSuppressDamResTotal:
      return "AttrSuppressDamResTotal";
    case EAttrType.AttrSuppressDamResAdd:
      return "AttrSuppressDamResAdd";
    case EAttrType.AttrSuppressDamResExAdd:
      return "AttrSuppressDamResExAdd";
    case EAttrType.AttrSuppressDamResPer:
      return "AttrSuppressDamResPer";
    case EAttrType.AttrSuppressDamResExPer:
      return "AttrSuppressDamResExPer";
    case EAttrType.AttrInspirePct:
      return "AttrInspirePct";
    case EAttrType.AttrInspirePctTotal:
      return "AttrInspirePctTotal";
    case EAttrType.AttrInspirePctAdd:
      return "AttrInspirePctAdd";
    case EAttrType.AttrInspirePctExAdd:
      return "AttrInspirePctExAdd";
    case EAttrType.AttrInspirePctPer:
      return "AttrInspirePctPer";
    case EAttrType.AttrInspirePctExPer:
      return "AttrInspirePctExPer";
    case EAttrType.AttrHateRatePTC:
      return "AttrHateRatePTC";
    case EAttrType.AttrHateRatePTCTotal:
      return "AttrHateRatePTCTotal";
    case EAttrType.AttrHateRatePTCAdd:
      return "AttrHateRatePTCAdd";
    case EAttrType.AttrHateRatePTCExAdd:
      return "AttrHateRatePTCExAdd";
    case EAttrType.AttrHateRatePTCPer:
      return "AttrHateRatePTCPer";
    case EAttrType.AttrHateRatePTCExPer:
      return "AttrHateRatePTCExPer";
    case EAttrType.AttrHastePct:
      return "AttrHastePct";
    case EAttrType.AttrHastePctTotal:
      return "AttrHastePctTotal";
    case EAttrType.AttrHastePctAdd:
      return "AttrHastePctAdd";
    case EAttrType.AttrHastePctExAdd:
      return "AttrHastePctExAdd";
    case EAttrType.AttrHastePctPer:
      return "AttrHastePctPer";
    case EAttrType.AttrHastePctExPer:
      return "AttrHastePctExPer";
    case EAttrType.AttrMasteryPct:
      return "AttrMasteryPct";
    case EAttrType.AttrMasteryPctTotal:
      return "AttrMasteryPctTotal";
    case EAttrType.AttrMasteryPctAdd:
      return "AttrMasteryPctAdd";
    case EAttrType.AttrMasteryPctExAdd:
      return "AttrMasteryPctExAdd";
    case EAttrType.AttrMasteryPctPer:
      return "AttrMasteryPctPer";
    case EAttrType.AttrMasteryPctExPer:
      return "AttrMasteryPctExPer";
    case EAttrType.AttrVersatilityPct:
      return "AttrVersatilityPct";
    case EAttrType.AttrVersatilityPctTotal:
      return "AttrVersatilityPctTotal";
    case EAttrType.AttrVersatilityPctAdd:
      return "AttrVersatilityPctAdd";
    case EAttrType.AttrVersatilityPctExAdd:
      return "AttrVersatilityPctExAdd";
    case EAttrType.AttrVersatilityPctPer:
      return "AttrVersatilityPctPer";
    case EAttrType.AttrVersatilityPctExPer:
      return "AttrVersatilityPctExPer";
    case EAttrType.AttrCdAcceleratePct:
      return "AttrCdAcceleratePct";
    case EAttrType.AttrCdAcceleratePctTotal:
      return "AttrCdAcceleratePctTotal";
    case EAttrType.AttrCdAcceleratePctAdd:
      return "AttrCdAcceleratePctAdd";
    case EAttrType.AttrCdAcceleratePctExAdd:
      return "AttrCdAcceleratePctExAdd";
    case EAttrType.AttrCdAcceleratePctPer:
      return "AttrCdAcceleratePctPer";
    case EAttrType.AttrCdAcceleratePctExPer:
      return "AttrCdAcceleratePctExPer";
    case EAttrType.AttrBlockPct:
      return "AttrBlockPct";
    case EAttrType.AttrBlockPctTotal:
      return "AttrBlockPctTotal";
    case EAttrType.AttrBlockPctAdd:
      return "AttrBlockPctAdd";
    case EAttrType.AttrBlockPctExAdd:
      return "AttrBlockPctExAdd";
    case EAttrType.AttrBlockPctPer:
      return "AttrBlockPctPer";
    case EAttrType.AttrBlockPctExPer:
      return "AttrBlockPctExPer";
    case EAttrType.AttrFightResCdSpeedPct:
      return "AttrFightResCdSpeedPct";
    case EAttrType.AttrFightResCdSpeedPctTotal:
      return "AttrFightResCdSpeedPctTotal";
    case EAttrType.AttrFightResCdSpeedPctAdd:
      return "AttrFightResCdSpeedPctAdd";
    case EAttrType.AttrFightResCdSpeedPctExAdd:
      return "AttrFightResCdSpeedPctExAdd";
    case EAttrType.AttrFightResCdSpeedPctPer:
      return "AttrFightResCdSpeedPctPer";
    case EAttrType.AttrFightResCdSpeedPctExPer:
      return "AttrFightResCdSpeedPctExPer";
    case EAttrType.AttrPetAttackSpeedPCT:
      return "AttrPetAttackSpeedPCT";
    case EAttrType.AttrPetAttackSpeedPCTTotal:
      return "AttrPetAttackSpeedPCTTotal";
    case EAttrType.AttrPetAttackSpeedPCTAdd:
      return "AttrPetAttackSpeedPCTAdd";
    case EAttrType.AttrPetAttackSpeedPCTExAdd:
      return "AttrPetAttackSpeedPCTExAdd";
    case EAttrType.AttrPetAttackSpeedPCTPer:
      return "AttrPetAttackSpeedPCTPer";
    case EAttrType.AttrPetAttackSpeedPCTExPer:
      return "AttrPetAttackSpeedPCTExPer";
    case EAttrType.AttrCritDamage:
      return "AttrCritDamage";
    case EAttrType.AttrCritDamageTotal:
      return "AttrCritDamageTotal";
    case EAttrType.AttrCritDamageAdd:
      return "AttrCritDamageAdd";
    case EAttrType.AttrCritDamageExAdd:
      return "AttrCritDamageExAdd";
    case EAttrType.AttrCritDamagePer:
      return "AttrCritDamagePer";
    case EAttrType.AttrCritDamageExPer:
      return "AttrCritDamageExPer";
    case EAttrType.AttrCritDamageRes:
      return "AttrCritDamageRes";
    case EAttrType.AttrCritDamageResTotal:
      return "AttrCritDamageResTotal";
    case EAttrType.AttrCritDamageResAdd:
      return "AttrCritDamageResAdd";
    case EAttrType.AttrCritDamageResExAdd:
      return "AttrCritDamageResExAdd";
    case EAttrType.AttrCritDamageResPer:
      return "AttrCritDamageResPer";
    case EAttrType.AttrCritDamageResExPer:
      return "AttrCritDamageResExPer";
    case EAttrType.AttrLuckDamInc:
      return "AttrLuckDamInc";
    case EAttrType.AttrLuckDamIncTotal:
      return "AttrLuckDamIncTotal";
    case EAttrType.AttrLuckDamIncAdd:
      return "AttrLuckDamIncAdd";
    case EAttrType.AttrLuckDamIncExAdd:
      return "AttrLuckDamIncExAdd";
    case EAttrType.AttrLuckDamIncPer:
      return "AttrLuckDamIncPer";
    case EAttrType.AttrLuckDamIncExPer:
      return "AttrLuckDamIncExPer";
    case EAttrType.AttrBlockDamRes:
      return "AttrBlockDamRes";
    case EAttrType.AttrBlockDamResTotal:
      return "AttrBlockDamResTotal";
    case EAttrType.AttrBlockDamResAdd:
      return "AttrBlockDamResAdd";
    case EAttrType.AttrBlockDamResExAdd:
      return "AttrBlockDamResExAdd";
    case EAttrType.AttrBlockDamResPer:
      return "AttrBlockDamResPer";
    case EAttrType.AttrBlockDamResExPer:
      return "AttrBlockDamResExPer";
    case EAttrType.AttrDamInc:
      return "AttrDamInc";
    case EAttrType.AttrDamIncTotal:
      return "AttrDamIncTotal";
    case EAttrType.AttrDamIncAdd:
      return "AttrDamIncAdd";
    case EAttrType.AttrDamIncExAdd:
      return "AttrDamIncExAdd";
    case EAttrType.AttrDamIncPer:
      return "AttrDamIncPer";
    case EAttrType.AttrDamIncExPer:
      return "AttrDamIncExPer";
    case EAttrType.AttrDamRes:
      return "AttrDamRes";
    case EAttrType.AttrDamResTotal:
      return "AttrDamResTotal";
    case EAttrType.AttrDamResAdd:
      return "AttrDamResAdd";
    case EAttrType.AttrDamResExAdd:
      return "AttrDamResExAdd";
    case EAttrType.AttrDamResPer:
      return "AttrDamResPer";
    case EAttrType.AttrDamResExPer:
      return "AttrDamResExPer";
    case EAttrType.AttrMdamInc:
      return "AttrMdamInc";
    case EAttrType.AttrMdamIncTotal:
      return "AttrMdamIncTotal";
    case EAttrType.AttrMdamIncAdd:
      return "AttrMdamIncAdd";
    case EAttrType.AttrMdamIncExAdd:
      return "AttrMdamIncExAdd";
    case EAttrType.AttrMdamIncPer:
      return "AttrMdamIncPer";
    case EAttrType.AttrMdamIncExPer:
      return "AttrMdamIncExPer";
    case EAttrType.AttrMdamRes:
      return "AttrMdamRes";
    case EAttrType.AttrMdamResTotal:
      return "AttrMdamResTotal";
    case EAttrType.AttrMdamResAdd:
      return "AttrMdamResAdd";
    case EAttrType.AttrMdamResExAdd:
      return "AttrMdamResExAdd";
    case EAttrType.AttrMdamResPer:
      return "AttrMdamResPer";
    case EAttrType.AttrMdamResExPer:
      return "AttrMdamResExPer";
    case EAttrType.AttrNearDamage:
      return "AttrNearDamage";
    case EAttrType.AttrNearDamageTotal:
      return "AttrNearDamageTotal";
    case EAttrType.AttrNearDamageAdd:
      return "AttrNearDamageAdd";
    case EAttrType.AttrNearDamageExAdd:
      return "AttrNearDamageExAdd";
    case EAttrType.AttrNearDamagePer:
      return "AttrNearDamagePer";
    case EAttrType.AttrNearDamageExPer:
      return "AttrNearDamageExPer";
    case EAttrType.AttrNearDamageReduction:
      return "AttrNearDamageReduction";
    case EAttrType.AttrNearDamageReductionTotal:
      return "AttrNearDamageReductionTotal";
    case EAttrType.AttrNearDamageReductionAdd:
      return "AttrNearDamageReductionAdd";
    case EAttrType.AttrNearDamageReductionExAdd:
      return "AttrNearDamageReductionExAdd";
    case EAttrType.AttrNearDamageReductionPer:
      return "AttrNearDamageReductionPer";
    case EAttrType.AttrNearDamageReductionExPer:
      return "AttrNearDamageReductionExPer";
    case EAttrType.AttrFarDamage:
      return "AttrFarDamage";
    case EAttrType.AttrFarDamageTotal:
      return "AttrFarDamageTotal";
    case EAttrType.AttrFarDamageAdd:
      return "AttrFarDamageAdd";
    case EAttrType.AttrFarDamageExAdd:
      return "AttrFarDamageExAdd";
    case EAttrType.AttrFarDamagePer:
      return "AttrFarDamagePer";
    case EAttrType.AttrFarDamageExPer:
      return "AttrFarDamageExPer";
    case EAttrType.AttrFarDamageReduction:
      return "AttrFarDamageReduction";
    case EAttrType.AttrFarDamageReductionTotal:
      return "AttrFarDamageReductionTotal";
    case EAttrType.AttrFarDamageReductionAdd:
      return "AttrFarDamageReductionAdd";
    case EAttrType.AttrFarDamageReductionExAdd:
      return "AttrFarDamageReductionExAdd";
    case EAttrType.AttrFarDamageReductionPer:
      return "AttrFarDamageReductionPer";
    case EAttrType.AttrFarDamageReductionExPer:
      return "AttrFarDamageReductionExPer";
    case EAttrType.AttrBossDamInc:
      return "AttrBossDamInc";
    case EAttrType.AttrBossDamIncTotal:
      return "AttrBossDamIncTotal";
    case EAttrType.AttrBossDamIncAdd:
      return "AttrBossDamIncAdd";
    case EAttrType.AttrBossDamIncExAdd:
      return "AttrBossDamIncExAdd";
    case EAttrType.AttrBossDamIncPer:
      return "AttrBossDamIncPer";
    case EAttrType.AttrBossDamIncExPer:
      return "AttrBossDamIncExPer";
    case EAttrType.AttrBossDamRes:
      return "AttrBossDamRes";
    case EAttrType.AttrBossDamResTotal:
      return "AttrBossDamResTotal";
    case EAttrType.AttrBossDamResAdd:
      return "AttrBossDamResAdd";
    case EAttrType.AttrBossDamResExAdd:
      return "AttrBossDamResExAdd";
    case EAttrType.AttrBossDamResPer:
      return "AttrBossDamResPer";
    case EAttrType.AttrBossDamResExPer:
      return "AttrBossDamResExPer";
    case EAttrType.AttrShieldDamagePCT:
      return "AttrShieldDamagePCT";
    case EAttrType.AttrShieldDamagePCTTotal:
      return "AttrShieldDamagePCTTotal";
    case EAttrType.AttrShieldDamagePCTAdd:
      return "AttrShieldDamagePCTAdd";
    case EAttrType.AttrShieldDamagePCTExAdd:
      return "AttrShieldDamagePCTExAdd";
    case EAttrType.AttrShieldDamagePCTPer:
      return "AttrShieldDamagePCTPer";
    case EAttrType.AttrShieldDamagePCTExPer:
      return "AttrShieldDamagePCTExPer";
    case EAttrType.AttrShieldDamageReductionPCT:
      return "AttrShieldDamageReductionPCT";
    case EAttrType.AttrShieldDamageReductionPCTTotal:
      return "AttrShieldDamageReductionPCTTotal";
    case EAttrType.AttrShieldDamageReductionPCTAdd:
      return "AttrShieldDamageReductionPCTAdd";
    case EAttrType.AttrShieldDamageReductionPCTExAdd:
      return "AttrShieldDamageReductionPCTExAdd";
    case EAttrType.AttrShieldDamageReductionPCTPer:
      return "AttrShieldDamageReductionPCTPer";
    case EAttrType.AttrShieldDamageReductionPCTExPer:
      return "AttrShieldDamageReductionPCTExPer";
    case EAttrType.AttrOtherDamInc:
      return "AttrOtherDamInc";
    case EAttrType.AttrOtherDamIncTotal:
      return "AttrOtherDamIncTotal";
    case EAttrType.AttrOtherDamIncAdd:
      return "AttrOtherDamIncAdd";
    case EAttrType.AttrOtherDamIncExAdd:
      return "AttrOtherDamIncExAdd";
    case EAttrType.AttrOtherDamIncTPer:
      return "AttrOtherDamIncTPer";
    case EAttrType.AttrOtherDamIncExPer:
      return "AttrOtherDamIncExPer";
    case EAttrType.AttrOtherDamRes:
      return "AttrOtherDamRes";
    case EAttrType.AttrOtherDamResTotal:
      return "AttrOtherDamResTotal";
    case EAttrType.AttrOtherDamResAdd:
      return "AttrOtherDamResAdd";
    case EAttrType.AttrOtherDamResExAdd:
      return "AttrOtherDamResExAdd";
    case EAttrType.AttrOtherDamResTPer:
      return "AttrOtherDamResTPer";
    case EAttrType.AttrOtherDamResExPer:
      return "AttrOtherDamResExPer";
    case EAttrType.AttrSeasonDamInc:
      return "AttrSeasonDamInc";
    case EAttrType.AttrSeasonDamIncTotal:
      return "AttrSeasonDamIncTotal";
    case EAttrType.AttrSeasonDamIncAdd:
      return "AttrSeasonDamIncAdd";
    case EAttrType.AttrSeasonDamIncExAdd:
      return "AttrSeasonDamIncExAdd";
    case EAttrType.AttrSeasonDamIncTPer:
      return "AttrSeasonDamIncTPer";
    case EAttrType.AttrSeasonDamIncExPer:
      return "AttrSeasonDamIncExPer";
    case EAttrType.AttrSeasonDamRes:
      return "AttrSeasonDamRes";
    case EAttrType.AttrSeasonDamResTotal:
      return "AttrSeasonDamResTotal";
    case EAttrType.AttrSeasonDamResAdd:
      return "AttrSeasonDamResAdd";
    case EAttrType.AttrSeasonDamResExAdd:
      return "AttrSeasonDamResExAdd";
    case EAttrType.AttrSeasonDamResTPer:
      return "AttrSeasonDamResTPer";
    case EAttrType.AttrSeasonDamResExPer:
      return "AttrSeasonDamResExPer";
    case EAttrType.AttrMultipliesDamPct:
      return "AttrMultipliesDamPct";
    case EAttrType.AttrMultipliesDamPctTotal:
      return "AttrMultipliesDamPctTotal";
    case EAttrType.AttrMultipliesDamPctAdd:
      return "AttrMultipliesDamPctAdd";
    case EAttrType.AttrMultipliesDamPctExAdd:
      return "AttrMultipliesDamPctExAdd";
    case EAttrType.AttrMultipliesDamPctTPer:
      return "AttrMultipliesDamPctTPer";
    case EAttrType.AttrMultipliesDamPctExPer:
      return "AttrMultipliesDamPctExPer";
    case EAttrType.AttrLuckHealInc:
      return "AttrLuckHealInc";
    case EAttrType.AttrLuckHealIncTotal:
      return "AttrLuckHealIncTotal";
    case EAttrType.AttrLuckHealIncAdd:
      return "AttrLuckHealIncAdd";
    case EAttrType.AttrLuckHealIncExAdd:
      return "AttrLuckHealIncExAdd";
    case EAttrType.AttrLuckHealIncPer:
      return "AttrLuckHealIncPer";
    case EAttrType.AttrLuckHealIncExPer:
      return "AttrLuckHealIncExPer";
    case EAttrType.AttrPetDamInc:
      return "AttrPetDamInc";
    case EAttrType.AttrPetDamIncTotal:
      return "AttrPetDamIncTotal";
    case EAttrType.AttrPetDamIncAdd:
      return "AttrPetDamIncAdd";
    case EAttrType.AttrPetDamIncExAdd:
      return "AttrPetDamIncExAdd";
    case EAttrType.AttrPetDamIncPer:
      return "AttrPetDamIncPer";
    case EAttrType.AttrPetDamIncExPer:
      return "AttrPetDamIncExPer";
    case EAttrType.AttrCritHeal:
      return "AttrCritHeal";
    case EAttrType.AttrCritHealTotal:
      return "AttrCritHealTotal";
    case EAttrType.AttrCritHealAdd:
      return "AttrCritHealAdd";
    case EAttrType.AttrCritHealExAdd:
      return "AttrCritHealExAdd";
    case EAttrType.AttrCritHealPer:
      return "AttrCritHealPer";
    case EAttrType.AttrCritHealExPer:
      return "AttrCritHealExPer";
    case EAttrType.AttrSpDamInc:
      return "AttrSpDamInc";
    case EAttrType.AttrSpDamIncTotal:
      return "AttrSpDamIncTotal";
    case EAttrType.AttrSpDamIncAdd:
      return "AttrSpDamIncAdd";
    case EAttrType.AttrSpDamIncExAdd:
      return "AttrSpDamIncExAdd";
    case EAttrType.AttrSpDamIncPer:
      return "AttrSpDamIncPer";
    case EAttrType.AttrSpDamIncExPer:
      return "AttrSpDamIncExPer";
    case EAttrType.AttrSpDamRes:
      return "AttrSpDamRes";
    case EAttrType.AttrSpDamResTotal:
      return "AttrSpDamResTotal";
    case EAttrType.AttrSpDamResAdd:
      return "AttrSpDamResAdd";
    case EAttrType.AttrSpDamResExAdd:
      return "AttrSpDamResExAdd";
    case EAttrType.AttrSpDamResPer:
      return "AttrSpDamResPer";
    case EAttrType.AttrSpDamResExPer:
      return "AttrSpDamResExPer";
    case EAttrType.AttrHealBanPct:
      return "AttrHealBanPct";
    case EAttrType.AttrHealBanPctTotal:
      return "AttrHealBanPctTotal";
    case EAttrType.AttrHealBanPctAdd:
      return "AttrHealBanPctAdd";
    case EAttrType.AttrHealBanPctExAdd:
      return "AttrHealBanPctExAdd";
    case EAttrType.AttrHealBanPctPer:
      return "AttrHealBanPctPer";
    case EAttrType.AttrHealBanPctExPer:
      return "AttrHealBanPctExPer";
    case EAttrType.AttrHealedBanPct:
      return "AttrHealedBanPct";
    case EAttrType.AttrHealedBanPctTotal:
      return "AttrHealedBanPctTotal";
    case EAttrType.AttrHealedBanPctAdd:
      return "AttrHealedBanPctAdd";
    case EAttrType.AttrHealedBanPctExAdd:
      return "AttrHealedBanPctExAdd";
    case EAttrType.AttrHealedBanPctPer:
      return "AttrHealedBanPctPer";
    case EAttrType.AttrHealedBanPctExPer:
      return "AttrHealedBanPctExPer";
    case EAttrType.AttrElementPower:
      return "AttrElementPower";
    case EAttrType.AttrElementPowerTotal:
      return "AttrElementPowerTotal";
    case EAttrType.AttrElementPowerAdd:
      return "AttrElementPowerAdd";
    case EAttrType.AttrElementPowerExAdd:
      return "AttrElementPowerExAdd";
    case EAttrType.AttrElementPowerPer:
      return "AttrElementPowerPer";
    case EAttrType.AttrElementPowerExPer:
      return "AttrElementPowerExPer";
    case EAttrType.AttrFirePower:
      return "AttrFirePower";
    case EAttrType.AttrFirePowerTotal:
      return "AttrFirePowerTotal";
    case EAttrType.AttrFirePowerAdd:
      return "AttrFirePowerAdd";
    case EAttrType.AttrFirePowerExAdd:
      return "AttrFirePowerExAdd";
    case EAttrType.AttrFirePowerPer:
      return "AttrFirePowerPer";
    case EAttrType.AttrFirePowerExPer:
      return "AttrFirePowerExPer";
    case EAttrType.AttrWaterPower:
      return "AttrWaterPower";
    case EAttrType.AttrWaterPowerTotal:
      return "AttrWaterPowerTotal";
    case EAttrType.AttrWaterPowerAdd:
      return "AttrWaterPowerAdd";
    case EAttrType.AttrWaterPowerExAdd:
      return "AttrWaterPowerExAdd";
    case EAttrType.AttrWaterPowerPer:
      return "AttrWaterPowerPer";
    case EAttrType.AttrWaterPowerExPer:
      return "AttrWaterPowerExPer";
    case EAttrType.AttrWoodPower:
      return "AttrWoodPower";
    case EAttrType.AttrWoodPowerTotal:
      return "AttrWoodPowerTotal";
    case EAttrType.AttrWoodPowerAdd:
      return "AttrWoodPowerAdd";
    case EAttrType.AttrWoodPowerExAdd:
      return "AttrWoodPowerExAdd";
    case EAttrType.AttrWoodPowerPer:
      return "AttrWoodPowerPer";
    case EAttrType.AttrWoodPowerExPer:
      return "AttrWoodPowerExPer";
    case EAttrType.AttrElectricityPower:
      return "AttrElectricityPower";
    case EAttrType.AttrElectricityPowerTotal:
      return "AttrElectricityPowerTotal";
    case EAttrType.AttrElectricityPowerAdd:
      return "AttrElectricityPowerAdd";
    case EAttrType.AttrElectricityPowerExAdd:
      return "AttrElectricityPowerExAdd";
    case EAttrType.AttrElectricityPowerPer:
      return "AttrElectricityPowerPer";
    case EAttrType.AttrElectricityPowerExPer:
      return "AttrElectricityPowerExPer";
    case EAttrType.AttrWindPower:
      return "AttrWindPower";
    case EAttrType.AttrWindPowerTotal:
      return "AttrWindPowerTotal";
    case EAttrType.AttrWindPowerAdd:
      return "AttrWindPowerAdd";
    case EAttrType.AttrWindPowerExAdd:
      return "AttrWindPowerExAdd";
    case EAttrType.AttrWindPowerPer:
      return "AttrWindPowerPer";
    case EAttrType.AttrWindPowerExPer:
      return "AttrWindPowerExPer";
    case EAttrType.AttrRockPower:
      return "AttrRockPower";
    case EAttrType.AttrRockPowerTotal:
      return "AttrRockPowerTotal";
    case EAttrType.AttrRockPowerAdd:
      return "AttrRockPowerAdd";
    case EAttrType.AttrRockPowerExAdd:
      return "AttrRockPowerExAdd";
    case EAttrType.AttrRockPowerPer:
      return "AttrRockPowerPer";
    case EAttrType.AttrRockPowerExPer:
      return "AttrRockPowerExPer";
    case EAttrType.AttrLightPower:
      return "AttrLightPower";
    case EAttrType.AttrLightPowerTotal:
      return "AttrLightPowerTotal";
    case EAttrType.AttrLightPowerAdd:
      return "AttrLightPowerAdd";
    case EAttrType.AttrLightPowerExAdd:
      return "AttrLightPowerExAdd";
    case EAttrType.AttrLightPowerPer:
      return "AttrLightPowerPer";
    case EAttrType.AttrLightPowerExPer:
      return "AttrLightPowerExPer";
    case EAttrType.AttrDarkPower:
      return "AttrDarkPower";
    case EAttrType.AttrDarkPowerTotal:
      return "AttrDarkPowerTotal";
    case EAttrType.AttrDarkPowerAdd:
      return "AttrDarkPowerAdd";
    case EAttrType.AttrDarkPowerExAdd:
      return "AttrDarkPowerExAdd";
    case EAttrType.AttrDarkPowerPer:
      return "AttrDarkPowerPer";
    case EAttrType.AttrDarkPowerExPer:
      return "AttrDarkPowerExPer";
    case EAttrType.AttrElementDamage:
      return "AttrElementDamage";
    case EAttrType.AttrElementDamageTotal:
      return "AttrElementDamageTotal";
    case EAttrType.AttrElementDamageAdd:
      return "AttrElementDamageAdd";
    case EAttrType.AttrElementDamageExAdd:
      return "AttrElementDamageExAdd";
    case EAttrType.AttrElementDamagePer:
      return "AttrElementDamagePer";
    case EAttrType.AttrElementDamageExPer:
      return "AttrElementDamageExPer";
    case EAttrType.AttrFireDamage:
      return "AttrFireDamage";
    case EAttrType.AttrFireDamageTotal:
      return "AttrFireDamageTotal";
    case EAttrType.AttrFireDamageAdd:
      return "AttrFireDamageAdd";
    case EAttrType.AttrFireDamageExAdd:
      return "AttrFireDamageExAdd";
    case EAttrType.AttrFireDamagePer:
      return "AttrFireDamagePer";
    case EAttrType.AttrFireDamageExPer:
      return "AttrFireDamageExPer";
    case EAttrType.AttrWaterDamage:
      return "AttrWaterDamage";
    case EAttrType.AttrWaterDamageTotal:
      return "AttrWaterDamageTotal";
    case EAttrType.AttrWaterDamageAdd:
      return "AttrWaterDamageAdd";
    case EAttrType.AttrWaterDamageExAdd:
      return "AttrWaterDamageExAdd";
    case EAttrType.AttrWaterDamagePer:
      return "AttrWaterDamagePer";
    case EAttrType.AttrWaterDamageExPer:
      return "AttrWaterDamageExPer";
    case EAttrType.AttrWoodDamage:
      return "AttrWoodDamage";
    case EAttrType.AttrWoodDamageTotal:
      return "AttrWoodDamageTotal";
    case EAttrType.AttrWoodDamageAdd:
      return "AttrWoodDamageAdd";
    case EAttrType.AttrWoodDamageExAdd:
      return "AttrWoodDamageExAdd";
    case EAttrType.AttrWoodDamagePer:
      return "AttrWoodDamagePer";
    case EAttrType.AttrWoodDamageExPer:
      return "AttrWoodDamageExPer";
    case EAttrType.AttrElectricityDamage:
      return "AttrElectricityDamage";
    case EAttrType.AttrElectricityDamageTotal:
      return "AttrElectricityDamageTotal";
    case EAttrType.AttrElectricityDamageAdd:
      return "AttrElectricityDamageAdd";
    case EAttrType.AttrElectricityDamageExAdd:
      return "AttrElectricityDamageExAdd";
    case EAttrType.AttrElectricityDamagePer:
      return "AttrElectricityDamagePer";
    case EAttrType.AttrElectricityDamageExPer:
      return "AttrElectricityDamageExPer";
    case EAttrType.AttrWindDamage:
      return "AttrWindDamage";
    case EAttrType.AttrWindDamageTotal:
      return "AttrWindDamageTotal";
    case EAttrType.AttrWindDamageAdd:
      return "AttrWindDamageAdd";
    case EAttrType.AttrWindDamageExAdd:
      return "AttrWindDamageExAdd";
    case EAttrType.AttrWindDamagePer:
      return "AttrWindDamagePer";
    case EAttrType.AttrWindDamageExPer:
      return "AttrWindDamageExPer";
    case EAttrType.AttrRockDamage:
      return "AttrRockDamage";
    case EAttrType.AttrRockDamageTotal:
      return "AttrRockDamageTotal";
    case EAttrType.AttrRockDamageAdd:
      return "AttrRockDamageAdd";
    case EAttrType.AttrRockDamageExAdd:
      return "AttrRockDamageExAdd";
    case EAttrType.AttrRockDamagePer:
      return "AttrRockDamagePer";
    case EAttrType.AttrRockDamageExPer:
      return "AttrRockDamageExPer";
    case EAttrType.AttrLightDamage:
      return "AttrLightDamage";
    case EAttrType.AttrLightDamageTotal:
      return "AttrLightDamageTotal";
    case EAttrType.AttrLightDamageAdd:
      return "AttrLightDamageAdd";
    case EAttrType.AttrLightDamageExAdd:
      return "AttrLightDamageExAdd";
    case EAttrType.AttrLightDamagePer:
      return "AttrLightDamagePer";
    case EAttrType.AttrLightDamageExPer:
      return "AttrLightDamageExPer";
    case EAttrType.AttrDarkDamage:
      return "AttrDarkDamage";
    case EAttrType.AttrDarkDamageTotal:
      return "AttrDarkDamageTotal";
    case EAttrType.AttrDarkDamageAdd:
      return "AttrDarkDamageAdd";
    case EAttrType.AttrDarkDamageExAdd:
      return "AttrDarkDamageExAdd";
    case EAttrType.AttrDarkDamagePer:
      return "AttrDarkDamagePer";
    case EAttrType.AttrDarkDamageExPer:
      return "AttrDarkDamageExPer";
    case EAttrType.AttrElementDefense:
      return "AttrElementDefense";
    case EAttrType.AttrElementDefenseTotal:
      return "AttrElementDefenseTotal";
    case EAttrType.AttrElementDefenseAdd:
      return "AttrElementDefenseAdd";
    case EAttrType.AttrElementDefenseExAdd:
      return "AttrElementDefenseExAdd";
    case EAttrType.AttrElementDefensePer:
      return "AttrElementDefensePer";
    case EAttrType.AttrElementDefenseExPer:
      return "AttrElementDefenseExPer";
    case EAttrType.AttrFireDefense:
      return "AttrFireDefense";
    case EAttrType.AttrFireDefenseTotal:
      return "AttrFireDefenseTotal";
    case EAttrType.AttrFireDefenseAdd:
      return "AttrFireDefenseAdd";
    case EAttrType.AttrFireDefenseExAdd:
      return "AttrFireDefenseExAdd";
    case EAttrType.AttrFireDefensePer:
      return "AttrFireDefensePer";
    case EAttrType.AttrFireDefenseExPer:
      return "AttrFireDefenseExPer";
    case EAttrType.AttrWaterDefense:
      return "AttrWaterDefense";
    case EAttrType.AttrWaterDefenseTotal:
      return "AttrWaterDefenseTotal";
    case EAttrType.AttrWaterDefenseAdd:
      return "AttrWaterDefenseAdd";
    case EAttrType.AttrWaterDefenseExAdd:
      return "AttrWaterDefenseExAdd";
    case EAttrType.AttrWaterDefensePer:
      return "AttrWaterDefensePer";
    case EAttrType.AttrWaterDefenseExPer:
      return "AttrWaterDefenseExPer";
    case EAttrType.AttrWoodDefense:
      return "AttrWoodDefense";
    case EAttrType.AttrWoodDefenseTotal:
      return "AttrWoodDefenseTotal";
    case EAttrType.AttrWoodDefenseAdd:
      return "AttrWoodDefenseAdd";
    case EAttrType.AttrWoodDefenseExAdd:
      return "AttrWoodDefenseExAdd";
    case EAttrType.AttrWoodDefensePer:
      return "AttrWoodDefensePer";
    case EAttrType.AttrWoodDefenseExPer:
      return "AttrWoodDefenseExPer";
    case EAttrType.AttrElectricityDefense:
      return "AttrElectricityDefense";
    case EAttrType.AttrElectricityDefenseTotal:
      return "AttrElectricityDefenseTotal";
    case EAttrType.AttrElectricityDefenseAdd:
      return "AttrElectricityDefenseAdd";
    case EAttrType.AttrElectricityDefenseExAdd:
      return "AttrElectricityDefenseExAdd";
    case EAttrType.AttrElectricityDefensePer:
      return "AttrElectricityDefensePer";
    case EAttrType.AttrElectricityDefenseExPer:
      return "AttrElectricityDefenseExPer";
    case EAttrType.AttrWindDefense:
      return "AttrWindDefense";
    case EAttrType.AttrWindDefenseTotal:
      return "AttrWindDefenseTotal";
    case EAttrType.AttrWindDefenseAdd:
      return "AttrWindDefenseAdd";
    case EAttrType.AttrWindDefenseExAdd:
      return "AttrWindDefenseExAdd";
    case EAttrType.AttrWindDefensePer:
      return "AttrWindDefensePer";
    case EAttrType.AttrWindDefenseExPer:
      return "AttrWindDefenseExPer";
    case EAttrType.AttrRockDefense:
      return "AttrRockDefense";
    case EAttrType.AttrRockDefenseTotal:
      return "AttrRockDefenseTotal";
    case EAttrType.AttrRockDefenseAdd:
      return "AttrRockDefenseAdd";
    case EAttrType.AttrRockDefenseExAdd:
      return "AttrRockDefenseExAdd";
    case EAttrType.AttrRockDefensePer:
      return "AttrRockDefensePer";
    case EAttrType.AttrRockDefenseExPer:
      return "AttrRockDefenseExPer";
    case EAttrType.AttrLightDefense:
      return "AttrLightDefense";
    case EAttrType.AttrLightDefenseTotal:
      return "AttrLightDefenseTotal";
    case EAttrType.AttrLightDefenseAdd:
      return "AttrLightDefenseAdd";
    case EAttrType.AttrLightDefenseExAdd:
      return "AttrLightDefenseExAdd";
    case EAttrType.AttrLightDefensePer:
      return "AttrLightDefensePer";
    case EAttrType.AttrLightDefenseExPer:
      return "AttrLightDefenseExPer";
    case EAttrType.AttrDarkDefense:
      return "AttrDarkDefense";
    case EAttrType.AttrDarkDefenseTotal:
      return "AttrDarkDefenseTotal";
    case EAttrType.AttrDarkDefenseAdd:
      return "AttrDarkDefenseAdd";
    case EAttrType.AttrDarkDefenseExAdd:
      return "AttrDarkDefenseExAdd";
    case EAttrType.AttrDarkDefensePer:
      return "AttrDarkDefensePer";
    case EAttrType.AttrDarkDefenseExPer:
      return "AttrDarkDefenseExPer";
    case EAttrType.AttrElementDamRes:
      return "AttrElementDamRes";
    case EAttrType.AttrElementDamResTotal:
      return "AttrElementDamResTotal";
    case EAttrType.AttrElementDamResAdd:
      return "AttrElementDamResAdd";
    case EAttrType.AttrElementDamResExAdd:
      return "AttrElementDamResExAdd";
    case EAttrType.AttrElementDamResPer:
      return "AttrElementDamResPer";
    case EAttrType.AttrElementDamResExPer:
      return "AttrElementDamResExPer";
    case EAttrType.AttrFireDamageReduction:
      return "AttrFireDamageReduction";
    case EAttrType.AttrFireDamageReductionTotal:
      return "AttrFireDamageReductionTotal";
    case EAttrType.AttrFireDamageReductionAdd:
      return "AttrFireDamageReductionAdd";
    case EAttrType.AttrFireDamageReductionExAdd:
      return "AttrFireDamageReductionExAdd";
    case EAttrType.AttrFireDamageReductionPer:
      return "AttrFireDamageReductionPer";
    case EAttrType.AttrFireDamageReductionExPer:
      return "AttrFireDamageReductionExPer";
    case EAttrType.AttrWaterDamageReduction:
      return "AttrWaterDamageReduction";
    case EAttrType.AttrWaterDamageReductionTotal:
      return "AttrWaterDamageReductionTotal";
    case EAttrType.AttrWaterDamageReductionAdd:
      return "AttrWaterDamageReductionAdd";
    case EAttrType.AttrWaterDamageReductionExAdd:
      return "AttrWaterDamageReductionExAdd";
    case EAttrType.AttrWaterDamageReductionPer:
      return "AttrWaterDamageReductionPer";
    case EAttrType.AttrWaterDamageReductionExPer:
      return "AttrWaterDamageReductionExPer";
    case EAttrType.AttrWoodDamageReduction:
      return "AttrWoodDamageReduction";
    case EAttrType.AttrWoodDamageReductionTotal:
      return "AttrWoodDamageReductionTotal";
    case EAttrType.AttrWoodDamageReductionAdd:
      return "AttrWoodDamageReductionAdd";
    case EAttrType.AttrWoodDamageReductionExAdd:
      return "AttrWoodDamageReductionExAdd";
    case EAttrType.AttrWoodDamageReductionPer:
      return "AttrWoodDamageReductionPer";
    case EAttrType.AttrWoodDamageReductionExPer:
      return "AttrWoodDamageReductionExPer";
    case EAttrType.AttrElectricityDamageReduction:
      return "AttrElectricityDamageReduction";
    case EAttrType.AttrElectricityDamageReductionTotal:
      return "AttrElectricityDamageReductionTotal";
    case EAttrType.AttrElectricityDamageReductionAdd:
      return "AttrElectricityDamageReductionAdd";
    case EAttrType.AttrElectricityDamageReductionExAdd:
      return "AttrElectricityDamageReductionExAdd";
    case EAttrType.AttrElectricityDamageReductionPer:
      return "AttrElectricityDamageReductionPer";
    case EAttrType.AttrElectricityDamageReductionExPer:
      return "AttrElectricityDamageReductionExPer";
    case EAttrType.AttrWindDamageReduction:
      return "AttrWindDamageReduction";
    case EAttrType.AttrWindDamageReductionTotal:
      return "AttrWindDamageReductionTotal";
    case EAttrType.AttrWindDamageReductionAdd:
      return "AttrWindDamageReductionAdd";
    case EAttrType.AttrWindDamageReductionExAdd:
      return "AttrWindDamageReductionExAdd";
    case EAttrType.AttrWindDamageReductionPer:
      return "AttrWindDamageReductionPer";
    case EAttrType.AttrWindDamageReductionExPer:
      return "AttrWindDamageReductionExPer";
    case EAttrType.AttrRockDamageReduction:
      return "AttrRockDamageReduction";
    case EAttrType.AttrRockDamageReductionTotal:
      return "AttrRockDamageReductionTotal";
    case EAttrType.AttrRockDamageReductionAdd:
      return "AttrRockDamageReductionAdd";
    case EAttrType.AttrRockDamageReductionExAdd:
      return "AttrRockDamageReductionExAdd";
    case EAttrType.AttrRockDamageReductionPer:
      return "AttrRockDamageReductionPer";
    case EAttrType.AttrRockDamageReductionExPer:
      return "AttrRockDamageReductionExPer";
    case EAttrType.AttrLightDamageReduction:
      return "AttrLightDamageReduction";
    case EAttrType.AttrLightDamageReductionTotal:
      return "AttrLightDamageReductionTotal";
    case EAttrType.AttrLightDamageReductionAdd:
      return "AttrLightDamageReductionAdd";
    case EAttrType.AttrLightDamageReductionExAdd:
      return "AttrLightDamageReductionExAdd";
    case EAttrType.AttrLightDamageReductionPer:
      return "AttrLightDamageReductionPer";
    case EAttrType.AttrLightDamageReductionExPer:
      return "AttrLightDamageReductionExPer";
    case EAttrType.AttrDarkDamageReduction:
      return "AttrDarkDamageReduction";
    case EAttrType.AttrDarkDamageReductionTotal:
      return "AttrDarkDamageReductionTotal";
    case EAttrType.AttrDarkDamageReductionAdd:
      return "AttrDarkDamageReductionAdd";
    case EAttrType.AttrDarkDamageReductionExAdd:
      return "AttrDarkDamageReductionExAdd";
    case EAttrType.AttrDarkDamageReductionPer:
      return "AttrDarkDamageReductionPer";
    case EAttrType.AttrDarkDamageReductionExPer:
      return "AttrDarkDamageReductionExPer";
    case EAttrType.AttrOriginEnergy:
      return "AttrOriginEnergy";
    case EAttrType.AttrMaxOriginEnergy:
      return "AttrMaxOriginEnergy";
    case EAttrType.AttrMaxOriginEnergyTotal:
      return "AttrMaxOriginEnergyTotal";
    case EAttrType.AttrMaxOriginEnergyAdd:
      return "AttrMaxOriginEnergyAdd";
    case EAttrType.AttrMaxOriginEnergyExAdd:
      return "AttrMaxOriginEnergyExAdd";
    case EAttrType.AttrMaxOriginEnergyPer:
      return "AttrMaxOriginEnergyPer";
    case EAttrType.AttrMaxOriginEnergyExPer:
      return "AttrMaxOriginEnergyExPer";
    case EAttrType.AttrOriginEnergyConsumeRate:
      return "AttrOriginEnergyConsumeRate";
    case EAttrType.AttrParkourStandbyOriginEnergyRecovery:
      return "AttrParkourStandbyOriginEnergyRecovery";
    case EAttrType.AttrParkourStandbyOriginEnergyRecoveryTotal:
      return "AttrParkourStandbyOriginEnergyRecoveryTotal";
    case EAttrType.AttrParkourStandbyOriginEnergyRecoveryAdd:
      return "AttrParkourStandbyOriginEnergyRecoveryAdd";
    case EAttrType.AttrParkourStandbyOriginEnergyRecoveryExAdd:
      return "AttrParkourStandbyOriginEnergyRecoveryExAdd";
    case EAttrType.AttrParkourStandbyOriginEnergyRecoveryPer:
      return "AttrParkourStandbyOriginEnergyRecoveryPer";
    case EAttrType.AttrParkourStandbyOriginEnergyRecoveryExPer:
      return "AttrParkourStandbyOriginEnergyRecoveryExPer";
    case EAttrType.AttrParkourOriginEnergyRecovery:
      return "AttrParkourOriginEnergyRecovery";
    case EAttrType.AttrParkourOriginEnergyRecoveryTotal:
      return "AttrParkourOriginEnergyRecoveryTotal";
    case EAttrType.AttrParkourOriginEnergyRecoveryAdd:
      return "AttrParkourOriginEnergyRecoveryAdd";
    case EAttrType.AttrParkourOriginEnergyRecoveryExAdd:
      return "AttrParkourOriginEnergyRecoveryExAdd";
    case EAttrType.AttrParkourOriginEnergyRecoveryPer:
      return "AttrParkourOriginEnergyRecoveryPer";
    case EAttrType.AttrParkourOriginEnergyRecoveryExPer:
      return "AttrParkourOriginEnergyRecoveryExPer";
    case EAttrType.AttrParkourRunPhaseOneAcceleration:
      return "AttrParkourRunPhaseOneAcceleration";
    case EAttrType.AttrParkourRunPhaseOneAccelerationTotal:
      return "AttrParkourRunPhaseOneAccelerationTotal";
    case EAttrType.AttrParkourRunPhaseOneAccelerationAdd:
      return "AttrParkourRunPhaseOneAccelerationAdd";
    case EAttrType.AttrParkourRunPhaseOneAccelerationExAdd:
      return "AttrParkourRunPhaseOneAccelerationExAdd";
    case EAttrType.AttrParkourRunPhaseOneAccelerationPer:
      return "AttrParkourRunPhaseOneAccelerationPer";
    case EAttrType.AttrParkourRunPhaseOneAccelerationExPer:
      return "AttrParkourRunPhaseOneAccelerationExPer";
    case EAttrType.AttrParkourRunPhaseOneSpeedLimit:
      return "AttrParkourRunPhaseOneSpeedLimit";
    case EAttrType.AttrParkourRunPhaseOneSpeedLimitTotal:
      return "AttrParkourRunPhaseOneSpeedLimitTotal";
    case EAttrType.AttrParkourRunPhaseOneSpeedLimitAdd:
      return "AttrParkourRunPhaseOneSpeedLimitAdd";
    case EAttrType.AttrParkourRunPhaseOneSpeedLimitExAdd:
      return "AttrParkourRunPhaseOneSpeedLimitExAdd";
    case EAttrType.AttrParkourRunPhaseOneSpeedLimitPer:
      return "AttrParkourRunPhaseOneSpeedLimitPer";
    case EAttrType.AttrParkourRunPhaseOneSpeedLimitExPer:
      return "AttrParkourRunPhaseOneSpeedLimitExPer";
    case EAttrType.AttrParkourRunPhaseTwoAcceleration:
      return "AttrParkourRunPhaseTwoAcceleration";
    case EAttrType.AttrParkourRunPhaseTwoAccelerationTotal:
      return "AttrParkourRunPhaseTwoAccelerationTotal";
    case EAttrType.AttrParkourRunPhaseTwoAccelerationAdd:
      return "AttrParkourRunPhaseTwoAccelerationAdd";
    case EAttrType.AttrParkourRunPhaseTwoAccelerationExAdd:
      return "AttrParkourRunPhaseTwoAccelerationExAdd";
    case EAttrType.AttrParkourRunPhaseTwoAccelerationPer:
      return "AttrParkourRunPhaseTwoAccelerationPer";
    case EAttrType.AttrParkourRunPhaseTwoAccelerationExPer:
      return "AttrParkourRunPhaseTwoAccelerationExPer";
    case EAttrType.AttrParkourRunPhaseTwoSpeedLimit:
      return "AttrParkourRunPhaseTwoSpeedLimit";
    case EAttrType.AttrParkourRunPhaseTwoSpeedLimitTotal:
      return "AttrParkourRunPhaseTwoSpeedLimitTotal";
    case EAttrType.AttrParkourRunPhaseTwoSpeedLimitAdd:
      return "AttrParkourRunPhaseTwoSpeedLimitAdd";
    case EAttrType.AttrParkourRunPhaseTwoSpeedLimitExAdd:
      return "AttrParkourRunPhaseTwoSpeedLimitExAdd";
    case EAttrType.AttrParkourRunPhaseTwoSpeedLimitPer:
      return "AttrParkourRunPhaseTwoSpeedLimitPer";
    case EAttrType.AttrParkourRunPhaseTwoSpeedLimitExPer:
      return "AttrParkourRunPhaseTwoSpeedLimitExPer";
    case EAttrType.AttrParkourRunPhaseThreeAcceleration:
      return "AttrParkourRunPhaseThreeAcceleration";
    case EAttrType.AttrParkourRunPhaseThreeAccelerationTotal:
      return "AttrParkourRunPhaseThreeAccelerationTotal";
    case EAttrType.AttrParkourRunPhaseThreeAccelerationAdd:
      return "AttrParkourRunPhaseThreeAccelerationAdd";
    case EAttrType.AttrParkourRunPhaseThreeAccelerationExAdd:
      return "AttrParkourRunPhaseThreeAccelerationExAdd";
    case EAttrType.AttrParkourRunPhaseThreeAccelerationPer:
      return "AttrParkourRunPhaseThreeAccelerationPer";
    case EAttrType.AttrParkourRunPhaseThreeAccelerationExPer:
      return "AttrParkourRunPhaseThreeAccelerationExPer";
    case EAttrType.AttrParkourRunPhaseThreeSpeedLimit:
      return "AttrParkourRunPhaseThreeSpeedLimit";
    case EAttrType.AttrParkourRunPhaseThreeSpeedLimitTotal:
      return "AttrParkourRunPhaseThreeSpeedLimitTotal";
    case EAttrType.AttrParkourRunPhaseThreeSpeedLimitAdd:
      return "AttrParkourRunPhaseThreeSpeedLimitAdd";
    case EAttrType.AttrParkourRunPhaseThreeSpeedLimitExAdd:
      return "AttrParkourRunPhaseThreeSpeedLimitExAdd";
    case EAttrType.AttrParkourRunPhaseThreeSpeedLimitPer:
      return "AttrParkourRunPhaseThreeSpeedLimitPer";
    case EAttrType.AttrParkourRunPhaseThreeSpeedLimitExPer:
      return "AttrParkourRunPhaseThreeSpeedLimitExPer";
    case EAttrType.AttrInBattleParkourStandbyOriginEnergyRecovery:
      return "AttrInBattleParkourStandbyOriginEnergyRecovery";
    case EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryTotal:
      return "AttrInBattleParkourStandbyOriginEnergyRecoveryTotal";
    case EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryAdd:
      return "AttrInBattleParkourStandbyOriginEnergyRecoveryAdd";
    case EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryExAdd:
      return "AttrInBattleParkourStandbyOriginEnergyRecoveryExAdd";
    case EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryPer:
      return "AttrInBattleParkourStandbyOriginEnergyRecoveryPer";
    case EAttrType.AttrInBattleParkourStandbyOriginEnergyRecoveryExPer:
      return "AttrInBattleParkourStandbyOriginEnergyRecoveryExPer";
    case EAttrType.AttrInBattleParkourOriginEnergyRecovery:
      return "AttrInBattleParkourOriginEnergyRecovery";
    case EAttrType.AttrInBattleParkourOriginEnergyRecoveryTotal:
      return "AttrInBattleParkourOriginEnergyRecoveryTotal";
    case EAttrType.AttrInBattleParkourOriginEnergyRecoveryAdd:
      return "AttrInBattleParkourOriginEnergyRecoveryAdd";
    case EAttrType.AttrInBattleParkourOriginEnergyRecoveryExAdd:
      return "AttrInBattleParkourOriginEnergyRecoveryExAdd";
    case EAttrType.AttrInBattleParkourOriginEnergyRecoveryPer:
      return "AttrInBattleParkourOriginEnergyRecoveryPer";
    case EAttrType.AttrInBattleParkourOriginEnergyRecoveryExPer:
      return "AttrInBattleParkourOriginEnergyRecoveryExPer";
    case EAttrType.AttrFallDamageReduction:
      return "AttrFallDamageReduction";
    case EAttrType.AttrDelayDie:
      return "AttrDelayDie";
    case EAttrType.AttrFightResourceIds:
      return "AttrFightResourceIds";
    case EAttrType.AttrFightResources:
      return "AttrFightResources";
    case EAttrType.AttrFightResNoUp:
      return "AttrFightResNoUp";
    case EAttrType.AttrFightResNoDown:
      return "AttrFightResNoDown";
    case EAttrType.AttrFreezeFrame:
      return "AttrFreezeFrame";
    case EAttrType.AttrShieldList:
      return "AttrShieldList";
    case EAttrType.AttrPressingOpen:
      return "AttrPressingOpen";
    case EAttrType.AttrUpLift:
      return "AttrUpLift";
    case EAttrType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
