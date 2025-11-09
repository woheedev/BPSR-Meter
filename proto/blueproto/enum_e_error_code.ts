/* eslint-disable */

export const protobufPackage = "zproto";

export enum EErrorCode {
  ErrSuccess = 0,
  ErrNoRecord = 101,
  ErrExceptionCancel = 102,
  ErrDBException = 103,
  ErrDBSeqException = 104,
  ErrDBSceneException = 105,
  ErrDBTokenException = 106,
  ErrCancelled = 201,
  ErrUnknownRpc = 202,
  ErrInvalidArgument = 203,
  ErrDeadlineExceeded = 204,
  ErrNotFound = 205,
  ErrAlreadyExists = 206,
  ErrPermissionDenied = 207,
  ErrResourceExhausted = 208,
  ErrFailedPrecondition = 209,
  ErrAborted = 210,
  ErrOutOfRange = 211,
  ErrUnimplemented = 212,
  ErrInternal = 213,
  ErrUnavailable = 214,
  ErrDataLoss = 215,
  ErrUnauthenticated = 216,
  ErrSystemMax = 999,
  ErrDBError = 1000,
  ErrCreateOpenInfo = 1001,
  ErrCreateAccountInfo = 1002,
  ErrCreateCharInfo = 1003,
  ErrCreateAccountToken = 1004,
  ErrGetOpenInfo = 1005,
  ErrGetAccountInfo = 1006,
  ErrGetCharInfo = 1007,
  ErrGetAccountToken = 1008,
  ErrLoginInQueue = 1009,
  ErrOtherLogin = 1010,
  ErrServerError = 1011,
  ErrNoAccountInfo = 1012,
  ErrNoCharInfo = 1013,
  ErrTokenExpired = 1014,
  ErrUpdateTokenFail = 1015,
  ErrRegIntoSceneError = 1016,
  ErrLoginTypeErr = 1017,
  ErrChangeMapErr = 1018,
  ErrLoginPlatformErr = 1019,
  ErrVersionErr = 1020,
  ErrDelayOffLineKickOff = 1021,
  ErrServiceLanguageError = 1022,
  NoEnterScene = 1023,
  ModIDNotOpen = 1024,
  ErrFaceData = 1025,
  ErrInitProfession = 1026,
  ErrSceneCloseKickoff = 1027,
  ErrLoginReconnectKick = 1028,
  ErrLoginErrorResume = 1029,
  ErrRepeatedLogin = 1030,
  ErrRestrictLogin = 1031,
  ErrRestrictBlack = 1032,
  ErrSdkVerifyFail = 1033,
  ErrSdkTokenExpired = 1034,
  ErrServerNotOpen = 1035,
  ErrServerEndOpen = 1036,
  ErrNormalKick = 1037,
  ErrServerBusy = 1038,
  ErrServerClose = 1039,
  ErrExitGame = 1040,
  ErrHopeKick = 1041,
  ErrClientVersionError = 1042,
  ErrInvalidDeviceId = 1043,
  ErrInvalidSystemType = 1044,
  ErrDeleteChar = 1045,
  ErrCancelDeleteChar = 1046,
  ErrCancelDeleteCharIsDelete = 1047,
  ErrIntoSceneOwnerFail = 1048,
  ErrLoginNoEnoughToken = 1049,
  ErrSceneQueueUp = 1050,
  ErrProtocolVersionErr = 1051,
  ErrConfigVersionErr = 1052,
  ErrStateEventFailed = 1053,
  ErrSelectCharDoing = 1054,
  ErrSelectCharDeleted = 1055,
  ErrLoginChannelMax = 1056,
  ErrDeleteAccountKick = 1057,
  ErrIsDeleteAccount = 1058,
  ErrIsVersionKick = 1059,
  ErrNotQQChnnel = 1060,
  ErrIncorrectLaunchPlatform = 1061,
  ErrConditionWrong = 1062,
  ErrNotSupportLoginType = 1063,
  ErrSceneNotExist = 2001,
  ErrUserNotExist = 2002,
  ErrComponentNotExist = 2003,
  ErrSceneConfigNotExist = 2004,
  ErrServiceNotExist = 2005,
  ErrDataContainerNotExist = 2006,
  ErrAsynchronousReturn = 2007,
  ErrConfigNotExist = 2008,
  ErrNotUser = 2009,
  ErrConfigError = 2010,
  ErrActorNotExist = 2011,
  ErrCutSceneAlreadyPlayed = 2012,
  ErrFunctionUnlock = 2020,
  ErrFunctionClosed = 2021,
  ErrUserPlayerNotFurniturePackage = 2022,
  ErrSysInnerError = 2200,
  ErrSysWebClientNull = 2201,
  ErrSysWebRequestTimeOut = 2202,
  ErrSysWebReturnError = 2203,
  ErrRequestTooFrequently = 2204,
  ErrArgStringTooLong = 2251,
  ErrArgStringEmpty = 2252,
  ErrArgArrayTooBig = 2253,
  ErrArgArrayEmpty = 2254,
  ErrArgMapTooBig = 2255,
  ErrArgMapEmpty = 2256,
  ErrItemNotExist = 2300,
  ErrPackageNotExist = 2301,
  ErrPackageFull = 2302,
  ErrItemExpireTime = 2303,
  ErrItemPackageGridNotEnough = 2304,
  ErrItemUUIDError = 2305,
  ErrItemNotEnough = 2306,
  ErrOptTypeError = 2307,
  ErrItemInCoolDown = 2308,
  ErrItemNotUse = 2309,
  ErrItemEffectTypeError = 2310,
  ErrItemParamError = 2311,
  ErrItemAddBuffError = 2312,
  ErrItemAdd = 2313,
  ErrUseItemState = 2314,
  ErrBatchUse = 2315,
  ErrFullSendMail = 2316,
  ErrItemNumZero = 2317,
  ErrItemSelectAwardIllegalNum = 2318,
  ErrItemSelectAwardIllegalPos = 2319,
  ErrItemSelectLimit = 2320,
  ErrItemPeriodGainExceeded = 2321,
  ErrItemNoRecycle = 2322,
  ErrItemRecycleBeyondMaxGrid = 2323,
  ErrItemRecycleBeyondMaxNum = 2324,
  ErrItemRecycleIdNoMatchItemId = 2325,
  ErrItemRecycleIllegalId = 2326,
  ErrItemLimitCount = 2327,
  ErrItemFriendPontExceeded = 2328,
  ErrItemToySingleEntUseExceeded = 2329,
  ErrItemToySceneUseExceeded = 2330,
  ErrItemToyUseInDisableArea = 2331,
  ErrItemToySingleCellUseExceeded = 2332,
  ErrItemToyCantUse = 2333,
  ErrItemLifeProfessionExceeded = 2334,
  ErrMonthlyCardNotExists = 2380,
  ErrMonthlyCardDataError = 2381,
  ErrMonthlyCardDayAwardReceived = 2382,
  ErrMonthlyCardLimitCount = 2383,
  ErrCommunityNoHome = 2400,
  ErrNotHouseOwner = 2401,
  ErrHomeLandExisted = 2402,
  ErrHomeLandContentWrongful = 2403,
  ErrHouseLivetogetherCD = 2404,
  ErrHomeLandNotExisted = 2405,
  ErrHomeLandNotInScene = 2406,
  ErrHomeLandIsInvitation = 2407,
  ErrHomeLandInsufficientAuthority = 2408,
  ErrHomeLandTransferRequestPending = 2409,
  ErrHomeLandTransferRequestTimeout = 2410,
  ErrHomeLandTransferCD = 2411,
  ErrHomelandTargetIsHasHome = 2412,
  ErrHomelandTargetIsOwner = 2413,
  ErrHomelandNotOwnerCannotOperate = 2414,
  ErrHomeLandHasHouse = 2415,
  ErrHomeLandContentTooLong = 2416,
  ErrHomeLandClutterNotExist = 2417,
  ErrHouseNameOrStatementCD = 2418,
  ErrHouseIntroductionStatementCD = 2419,
  ErrCommunityBuildInvalidRecipeId = 2420,
  ErrCommunityBuildRecipeIsUnlock = 2421,
  ErrCommunityBuildMax = 2422,
  ErrCommunityBuildNoAuthority = 2423,
  ErrCommunityNotBuildCannotCancel = 2424,
  ErrCommunityBuildNotSelfCannotCancel = 2425,
  ErrCommunityNotBuildCannotAccelerate = 2426,
  ErrCommunityBuildNotSelfCannotAccelerate = 2427,
  ErrCommunityBuildCannotAccelerate = 2428,
  ErrCommunityBuildAlreadyAccelerate = 2429,
  ErrCommunityBuildInDungeon = 2430,
  ErrCommunityBuildRecipeIsLock = 2431,
  ErrCommunityBuildRecipeNotItemUnlock = 2432,
  ErrCommunityBuildInvalidCount = 2433,
  ErrCommunityNotBuildCannotReceive = 2434,
  ErrCommunityCanNotBuild = 2435,
  ErrHomeLandCohabitantLimit = 2436,
  ErrHomeLandRootNotQuitCohabitant = 2437,
  ErrHomeLandNotOwnerCannotQuitCohabitant = 2438,
  ErrHomeLandCohabitantIsExiting = 2439,
  ErrHomeLandCohabitantNotExists = 2440,
  ErrHomeLandCohabitantExitRequestExists = 2441,
  ErrHomeLandCohabitantDismiss = 2442,
  ErrHomeLandNotInvitation = 2443,
  ErrHomeLandCohabitantInvitationTimeout = 2444,
  ErrHomeLandCohabitantNotFriend = 2445,
  ErrHomeLandCohabitantFriendLevel = 2446,
  ErrHomeLandCohabitantLevel = 2447,
  ErrHomeLandInviteCohabitantNotOwner = 2448,
  ErrCommunityWarehouseGridFull = 2451,
  ErrCommunityWarehouseNoAuthority = 2452,
  ErrCommunityWarehouseGridPosItemNoEnough = 2453,
  ErrHomeLandInsufficientFurniture = 2454,
  ErrCommunityWarehouseTakeOutCountLimit = 2455,
  ErrHomeLandTaskNotExist = 2456,
  ErrHomeLandTaskTimeNotEnough = 2457,
  ErrHomeLandTaskAlreadyFinished = 2458,
  ErrHomeLandTaskItemNotEnough = 2459,
  ErrHomeLandCurLevelError = 2461,
  ErrHomeLandExpNotEnough = 2462,
  ErrHomeLandAlreadyMaxLevel = 2463,
  ErrHomeLandLevelLocked = 2464,
  ErrHomeLandLevelConfigError = 2465,
  ErrCommunityEditorNotEditable = 2466,
  ErrCommunityEditorNotFurniture = 2467,
  ErrCommunityEditorNotOutdoor = 2468,
  ErrCommunityEditorNotIndoor = 2469,
  ErrCommunityEditorOverMax = 2470,
  ErrCommunityEditorOverTypeMax = 2471,
  ErrCommunityEditorFurnitureNotEnough = 2472,
  ErrCommunityEditorFurnitureNotExist = 2473,
  ErrCommunityEditorOverMaxGroup = 2474,
  ErrCommunityEditorNoStructure = 2475,
  ErrCommunityEditorGroupMaxStructure = 2476,
  ErrCommunityEditorStructureInGroup = 2477,
  ErrCommunityEditorGroupNotExist = 2478,
  ErrCommunityEditorAlreadyExist = 2479,
  ErrHomeLandSellItemNotExist = 2481,
  ErrHomeLandLeftNumNotEnough = 2482,
  ErrHomeLandSellShopLocked = 2483,
  ErrHomeLandSeedExist = 2486,
  ErrHomeLandItemNotOwner = 2487,
  ErrHomeLandSeedStateError = 2488,
  ErrHomeLandNoSeed = 2489,
  ErrHomeLandNoWater = 2490,
  ErrHomeLandFertilizerMaxNumLimit = 2491,
  ErrHomeLandNotFertilize = 2492,
  ErrHomeLandNotPollen = 2493,
  ErrHomeLandAlreadyPollen = 2494,
  ErrHomeLandNotHarvest = 2495,
  ErrHomeLandPickUpSinglePlayerLimit = 2496,
  ErrHomeLandPickUpTotalLimit = 2497,
  ErrHomeLandPickUpFlowerNotFinished = 2498,
  ErrHomeLandPickUpOwner = 2499,
  ErrHomeLandGainNotOwner = 2500,
  ErrHomeLandItemFullGrid = 2501,
  ErrHomeLandFurnitureFull = 2502,
  ErrCommunityWarehouseNotBindOrCooldown = 2503,
  ErrComposeItemNotEnough = 2571,
  ErrComposeFailed = 2572,
  ErrRedemptionItemNotExist = 2573,
  ErrRedemptionItemMaxCount = 2574,
  ErrRedemptionItemNotEnough = 2575,
  ErrRedemptionItemGender = 2576,
  ErrAwardConfigNotFound = 2600,
  ErrAwardConfigWeightError = 2601,
  ErrAwardConfigLimitAndContentNotMatch = 2602,
  ErrAwardConfigContentSizeError = 2603,
  ErrAwardConfigContentRatesSizeError = 2604,
  ErrAwardConfigContentWeightSizeError = 2605,
  ErrAwardConfigGroupContentEmpty = 2606,
  ErrAwardConfigGroupNumEmpty = 2607,
  ErrAwardConfigGroupContentNoMatchGroupNum = 2608,
  ErrAwardConfigNoRandomDrop = 2609,
  ErrAwardConfigNoSelectAward = 2610,
  ErrAwardConfigSelfSelectContentNoItem = 2611,
  ErrAwardConfigWeightRateMustOne = 2612,
  ErrAwardConfigGroupContentRandomNoMatch = 2613,
  ErrAwardConfigGroupContentError = 2614,
  ErrAwardConfigPackageContentRandomNoMatch = 2615,
  ErrAwardConfigLevelUpPackConfigPackageNoMatch = 2616,
  ErrAwardConfigProItemRuleNoMatch = 2617,
  ErrAwardConfigPackageContentEmpty = 2618,
  ErrAwardConfigDropContentSize = 2619,
  ErrAwardConfigDropContentNum = 2620,
  ErrAwardConfigGroupRateEmpty = 2621,
  ErrAwardConfigGroupWeightEmpty = 2622,
  ErrAwardInnerError = 2623,
  ErrAwardIllegalRandomType = 2624,
  ErrAwardConditionNoMeet = 2625,
  ErrAwardRandomTypeNone = 2626,
  ErrAwardRandomTypeNoMatch = 2627,
  ErrAwardActorIsNull = 2628,
  ErrCounterUpToLimit = 2629,
  ErrEquipWashAttrNotExist = 2700,
  ErrNotEquipInCombat = 2701,
  ErrEquipPart = 2702,
  ErrComposeItemNotExist = 2750,
  ErrPickupDropItemDistance = 2800,
  ErrPickupDropItemPackageFull = 2801,
  ErrPickupDropItemNoAuthority = 2802,
  ErrLayerActorExist = 2851,
  ErrTeamCreateHas = 2900,
  ErrTeamIllTarget = 2901,
  ErrTeamCreateTryLater = 2902,
  ErrTeamGetNo = 2903,
  ErrTeamListEmpty = 2904,
  ErrTeamInner = 2905,
  ErrTeamNoLeader = 2906,
  ErrTeamInMatch = 2907,
  ErrTeamCustomizeTarget = 2908,
  ErrTeamNoOwn = 2909,
  ErrTeamTickSelf = 2910,
  ErrTeamNoMem = 2911,
  ErrTeamApplyingLeader = 2912,
  ErrTeamHasBeLeader = 2913,
  ErrTeamNoTransferSelf = 2914,
  ErrTeamNoLeaderTransfer = 2915,
  ErrTeamHasOwnTeam = 2916,
  ErrTeamNoExist = 2917,
  ErrTeamApplyInCD = 2918,
  ErrTeamApplyExpire = 2919,
  ErrTeamJoinOther = 2920,
  ErrTeamMemMax = 2921,
  ErrTeamNoInvited = 2924,
  ErrTeamIsMatching = 2925,
  ErrTeamIllegalTag = 2926,
  ErrTeamNoMatching = 2927,
  ErrTeamIllegalActivity = 2928,
  ErrTeamInActivity = 2929,
  ErrTeamNoMeetCondition = 2930,
  ErrTeamWaitVoting = 2931,
  ErrTeamDoingActivity = 2932,
  ErrTeamNoInVoting = 2933,
  ErrTeamVoteEnd = 2934,
  ErrTeamHasVoted = 2935,
  ErrTeamInviteCD = 2936,
  ErrTeamApplyLeadCD = 2937,
  ErrTeamMoreMaxWorlds = 2938,
  ErrTeamValidApplyInfo = 2939,
  ErrTeamInMatchCancelCD = 2940,
  ErrTeamMatchFinished = 2941,
  ErrTeamMatchWaitSec = 2942,
  ErrTeamMemWorldFull = 2943,
  ErrTeamMemNotLeader = 2944,
  ErrTeamLeaderNotStaticScene = 2945,
  ErrTeamLeaderCallDoing = 2946,
  ErrTeamIllegalCallOperator = 2947,
  ErrTeamLeaderIllegalCallOperator = 2948,
  ErrTeamNoMemCall = 2949,
  ErrTeamLeaderCallEnd = 2950,
  ErrTeamSameScene = 2951,
  ErrTeamNotSameScene = 2952,
  ErrTeamMemTooMore = 2953,
  ErrTeamMemInDungeon = 2954,
  ErrTeamMemTooLess = 2955,
  ErrTeamIllegalInviteType = 2956,
  ErrTeamMemberNotInScene = 2957,
  ErrTeamLeaderReadyCheckTimeNotReady = 2958,
  ErrTeamExistDungeonCheck = 2959,
  ErrTeamTargetMatchTalentLimit = 2960,
  ErrTeamEditGroupNotAllowed = 2961,
  ErrTeamGroupNotExist = 2962,
  ErrTeamTargetNoMatchMemberType = 2963,
  ErrTeamMemberInDungeon = 2964,
  ErrDecomposeItemNotExist = 3000,
  ErrDecomposeItemNotEnough = 3001,
  ErrRefineEnergyNotEnough = 3002,
  ErrRefineItemMaxCount = 3003,
  ErrRefineItemNotExist = 3004,
  ErrRefineItemColumnNotUnlock = 3005,
  ErrRefineItemColumnUnlock = 3006,
  ErrRefineItemExist = 3007,
  ErrEnergyLimitMax = 3008,
  ErrRefineItemColumnNotEmpty = 3009,
  ErrProfessionNotExist = 3056,
  ErrModSlotNotUnlock = 3058,
  ErrChangeProfessionStateFail = 3065,
  ErrChangeProfessionCDFail = 3066,
  ErrProfessionSkinNotActive = 3071,
  ErrProfessionSkinActive = 3072,
  ErrProfessionNotUseSkin = 3073,
  ErrProfessionSkillSkinActive = 3074,
  ErrProfessionSkillSkinNotActive = 3075,
  ErrProfessionSkillNotActive = 3076,
  ErrCharOffline = 3101,
  ErrUserDataBaseError = 3102,
  ErrCharGetFail = 3103,
  ErrAlreadyAlive = 3200,
  ErrReviveParam = 3201,
  ErrStateIllegal = 3202,
  ErrStateNoChange = 3203,
  ErrReviveConsumeNotEnough = 3204,
  ErrReviveByOtherForbid = 3205,
  ErrReviveTimeNotArrived = 3206,
  ErrReviveBossBattle = 3207,
  ErrReviveCountLimit = 3208,
  ErrReviveInDeadTp = 3209,
  ErrDungeonPlayTypeError = 3301,
  ErrDungeonNotExist = 3302,
  ErrDungeonCreateError = 3303,
  ErrCantChangeDungeon = 3304,
  ErrDungeonLock = 3305,
  ErrPioneerFail = 3306,
  ErrAwardFail = 3307,
  ErrGsNotEnough = 3308,
  ErrQuestNotCompleted = 3309,
  ErrDungeonNotClear = 3310,
  ErrConditionNotExist = 3311,
  ErrAwardReceived = 3312,
  ErrCantRepeatedPlay = 3313,
  ErrNeedPassPreRoom = 3314,
  ErrDungeonEnterCountLimit = 3315,
  ErrDungeonScoreError = 3316,
  ErrDungeonRepeatedVote = 3317,
  ErrDungeonChallengeAwardState = 3318,
  ErrDungeonChallengeAffixNotFound = 3319,
  ErrDungeonStateNotActive = 3320,
  ErrDungeonCantVoteSelf = 3321,
  ErrDungeonPlayerNotEnough = 3322,
  ErrDungeonPlayerFull = 3323,
  ErrDungeonCantHeroKey = 3324,
  ErrDungeonNotSettlement = 3325,
  ErrDungeonNotFindRollItem = 3326,
  ErrDungeonCantRoll = 3327,
  ErrDungeonRollFinish = 3328,
  ErrDungeonSelectError = 3329,
  ErrDungeonAiModeError = 3330,
  ErrDungeonTargetNotFinish = 3331,
  ErrDungeonTargetBeAward = 3332,
  ErrDungeonSinglePlayerMore = 3333,
  ErrDungeonAiGroupNotEnough = 3334,
  ErrDungeonNoPass = 3335,
  ErrDungeonCloseSceneId = 3336,
  ErrDungeonEnterTypeError = 3337,
  ErrDungeonActorCount = 3338,
  ErrDungeonDiffLocked = 3339,
  ErrDungeonPreBattleVoteCd = 3340,
  ErrDungeonBossInvalid = 3341,
  ErrDungeonNoUser = 3342,
  ErrDungeonUserInvalid = 3343,
  ErrDungeonAwardualification = 3344,
  ErrDungeonAwardTriesLimit = 3345,
  ErrFashionIsLimit = 3401,
  ErrFashionNotFound = 3402,
  ErrFashionSlotEmpty = 3403,
  ErrFashionIDNotFound = 3404,
  ErrFashionLock = 3405,
  ErrFashCollectionAwardAlread = 3406,
  ErrFashCollectionScoreNotEnough = 3407,
  ErrFashCollectionAwardAlreadMonth = 3408,
  ErrFashionAlreadUnlock = 3409,
  ErrFashionAdvanceNotExist = 3410,
  ErrFashionBaseNotUnlock = 3411,
  ErrFashionAdvanceAlreadyUnlock = 3412,
  ErrCameraNoExistAlbum = 3501,
  ErrCameraBeyondPhotoNum = 3502,
  ErrCameraBeyondAlumNum = 3503,
  ErrCameraNoAccessRight = 3504,
  ErrCameraNoExistPhoto = 3505,
  ErrCameraBeyondWordNum = 3506,
  ErrCameraPhotoNoInAlbum = 3507,
  ErrCameraInnerError = 3508,
  ErrCameraIllegalRight = 3509,
  ErrCameraNoExistChar = 3510,
  ErrCameraNoDelCloudAlbum = 3511,
  ErrCameraBeyondMaxURlLen = 3512,
  ErrCameraBeyondMaxXMLLen = 3513,
  ErrCameraBeyondMaxNameLen = 3514,
  ErrCameraIllegalUrl = 3515,
  ErrCameraRenderInfoEmpty = 3516,
  ErrCameraBeyondPhotoMaxSize = 3517,
  ErrCameraIllegalPictureType = 3518,
  ErrCameraTypeRepeated = 3519,
  ErrCameraWithoutOriginal = 3520,
  ErrCameraWithoutThumbnailOrRender = 3521,
  ErrCameraPhotoNameEmpty = 3522,
  ErrCameraPhotoNameOutMaxLen = 3523,
  ErrCameraAlbumNameEmpty = 3524,
  ErrCameraPhotoHasDel = 3525,
  ErrCameraSysInnerError = 3526,
  ErrCameraIllegalPictureId = 3527,
  ErrCameraBeyondMaxExtraLen = 3528,
  ErrCameraNoIncludeOriginal = 3529,
  ErrCameraNoDealingPhoto = 3530,
  ErrCameraNoDealingPhotoType = 3531,
  ErrCameraNoAnyAlbum = 3532,
  ErrCameraNoPassReview = 3533,
  ErrCameraPhotoMissImage = 3534,
  ErrCameraWithoutThumbnail = 3535,
  ErrCameraBeyondMaxUploadTimes = 3536,
  ErrInvalidLifeProfessionId = 3601,
  ErrLifeProfessionIsUnlock = 3602,
  ErrLifeProfessionMaxLevel = 3603,
  ErrLifeProfessionLevelNotEnough = 3604,
  ErrLifeProfessionLevelRewardGot = 3605,
  ErrInvalidLifeProfessionSpecializationId = 3606,
  ErrLifeProfessionSpecializationNotEnough = 3607,
  ErrLifeProfessionSpecializationUpgradeError = 3608,
  ErrLifeProfessionPointNotEnough = 3609,
  ErrInvalidLifeProfessionTargetId = 3610,
  ErrLifeProfessionTargetNotEnough = 3611,
  ErrLifeProfessionRewardCanNotGet = 3612,
  ErrLifeProfessionEnergyChange = 3613,
  ErrLifeProfessionRecipeIsUnlock = 3614,
  ErrLifeProfessionRecipeNotExist = 3615,
  ErrLifeProfessionRecipeNotUnlock = 3616,
  ErrLifeProfessionMaxRDRecipeCount = 3617,
  ErrLifeProfessionWorkingNotEnd = 3618,
  ErrLifeProfessionAlreadyWorking = 3619,
  ErrLifeProfessionNotWorking = 3620,
  ErrLifeProfessionWorkingIsEnd = 3621,
  ErrLifeProfessionUnActiveSpecialization = 3622,
  ErrCurLevelConfigNotExist = 4001,
  ErrNeedBreakthrough = 4002,
  ErrExperienceConfigNotExist = 4003,
  ErrExperienceMismatch = 4004,
  ErrNotNeedToBreakthrough = 4005,
  ErrConsumeConfigError = 4006,
  ErrSkillNotExist = 4007,
  ErrSkillLevelMax = 4008,
  ErrSkillLevelNotExist = 4009,
  ErrSkillConfigError = 4010,
  ErrStarNotExist = 4011,
  ErrMaxStar = 4012,
  ErrMaxLevel = 4013,
  ErrSkillLevelNotEnough = 4014,
  ErrCanNotChangeActionState = 4051,
  ErrActionNotExist = 4052,
  ErrIsInteracting = 4053,
  ErrState = 4054,
  ErrRequestExpired = 4055,
  ErrStateSetFailed = 4071,
  ErrCollectIdError = 4072,
  ErrCollectStateFailed = 4073,
  ErrCollectActorErr = 4074,
  ErrCollectOutRange = 4075,
  ErrCollectConditionEquip = 4076,
  ErrCollectConditionQuest = 4077,
  ErrAlreadyCollected = 4078,
  ErrMailGetFailed = 4101,
  ErrMailIllegality = 4102,
  ErrMailIsGet = 4103,
  ErrMailIsDel = 4104,
  ErrMailAcceptorEmpty = 4105,
  ErrMailTokenInvalid = 4106,
  ErrUnRegisterType = 4201,
  ErrIndexNotFound = 4202,
  ErrCantOpenTreasureBox = 4203,
  ErrPersonalStateEnd = 4204,
  ErrPersonalObjectStatus = 4205,
  ErrExp = 4301,
  ErrLevel = 4302,
  ErrAward = 4303,
  ErrReceivedLevelAward = 4304,
  ErrLevelNotEnough = 4305,
  ErrRoleLevelNoRewards = 4306,
  ErrUnionNotHaveLimit = 4401,
  ErrUnionIsNotMember = 4402,
  ErrUnionOfficialNotExits = 4403,
  ErrUnionOfficialTooMany = 4404,
  ErrUnionHas = 4405,
  ErrUnionReqCd = 4406,
  ErrUnionReqHas = 4407,
  ErrUnionFull = 4408,
  ErrUnionFailed = 4409,
  ErrUnionNameWrongful = 4410,
  ErrUnionNameUsed = 4411,
  ErrUnionNameOccupied = 4412,
  ErrApplyMax = 4415,
  ErrUnionChangeNameCD = 4416,
  ErrUnionNameSizeError = 4417,
  ErrDeclarationSize = 4418,
  ErrDeclarationError = 4419,
  ErrOfficialNameRepeat = 4420,
  ErrDeclarationCd = 4421,
  ErrUnionInfoCd = 4422,
  ErrUnionNotExist = 4423,
  ErrUnionIllegalConditionType = 4424,
  ErrUnionRecruitSloganTooLong = 4425,
  ErrUnionRecruitDescriptionTooLong = 4426,
  ErrUnionCreateTooOften = 4427,
  ErrUnionTagNoExist = 4428,
  ErrUnionIconTooMuch = 4429,
  ErrUnionGetListCd = 4430,
  ErrUnionBatchSearchUnionIdsTooMuch = 4431,
  ErrUnionBatchSearchCd = 4432,
  ErrUnionGetCollectedIdsCd = 4433,
  ErrUnionBeyondMaxCollectedNum = 4434,
  ErrUnionIdHasCollected = 4435,
  ErrUnionIdNoCollected = 4436,
  ErrUnionActiveValueNotEnough = 4437,
  ErrUnionIllegalActiveId = 4438,
  ErrUnionTooShortForAwards = 4439,
  ErrUnionHasActiveAwards = 4440,
  ErrUnionNoJoin = 4441,
  ErrUnionOnlyEnterSelf = 4442,
  ErrUnionNoUnlockScene = 4443,
  ErrUnionBuildingMaxLevel = 4444,
  ErrUnionBuildingUpgrading = 4445,
  ErrUnionBuildingUpgradeNoFinish = 4446,
  ErrUnionPrefixBuildNoMeet = 4447,
  ErrUnionExperienceNoEnough = 4448,
  ErrUnionMoneyNoEnough = 4449,
  ErrUnionBuildingNoUpgrading = 4450,
  ErrUnionSpeedUpItemNoEnough = 4451,
  ErrUnionSpeedUpTimesOut = 4452,
  ErrUnionTryLater = 4453,
  ErrUnionSpeedUpLevelError = 4454,
  ErrUnionUpgradeHasCompleted = 4455,
  ErrUnionIllegalBuildIdLv = 4456,
  ErrUnionBeyMaxCount = 4457,
  ErrUnionUserNoApply = 4458,
  ErrUnionNoOneKeyNoMuch = 4459,
  ErrUnionActivityNotStart = 4460,
  ErrUnionActivityNotProgress = 4461,
  ErrUnionActivityAwardGet = 4462,
  ErrUnionActivityNotEnjoy = 4463,
  ErrUnionCreateTimeTooShort = 4464,
  ErrUnionFunctionLock = 4465,
  ErrUnionEScreenLock = 4466,
  ErrUnionEScreenPositionLock = 4467,
  ErrUnionEScreenNoSet = 4468,
  ErrUnionEScreenPositionNoSet = 4469,
  ErrUnionEffectGridLock = 4470,
  ErrUnionEffectIdLock = 4471,
  ErrUnionEffectPosNoSet = 4472,
  ErrUnionEffectPosHasEnd = 4473,
  ErrUnionCrowFuncHasEnd = 4474,
  ErrUnionCrowFuncPosHasUsed = 4475,
  ErrUnionCrowFuncHasJoined = 4476,
  ErrUnionCrowFuncNoBegin = 4477,
  ErrUnionNoFinishBaseBuilding = 4478,
  ErrUnionCrowFuncIllegalFuncPos = 4479,
  ErrUnionEScreenBeyondMaxTimes = 4480,
  ErrUnionTargetFunctionLock = 4481,
  ErrUnionNoMeet = 4482,
  ErrUnionActivityAwardCd = 4483,
  ErrUnionManagerNoKicked = 4484,
  ErrUnionDanceNoBegin = 4485,
  ErrUnionDanceEnd = 4486,
  ErrUnionDanceDrawnBox = 4487,
  ErrUnionDanceBoxDrawn = 4488,
  ErrUnionDanceNoDanceId = 4489,
  ErrUnionNoJoinDance = 4490,
  ErrUnionDanceNoDancing = 4491,
  ErrUnionRejectInvite = 4492,
  ErrUnionActivityHuntEnd = 4493,
  ErrUnionApplyListFull = 4494,
  ErrUionApplyListExist = 4495,
  ErrUnionGroupIvalid = 4496,
  ErrRepeatedRequest = 4501,
  ErrHasBeenBlackened = 4502,
  ErrNotFoundCharInfo = 4503,
  ErrInner = 4504,
  ErrParam = 4505,
  ErrSetShowPicture = 4506,
  ErrSetSignature = 4507,
  ErrSetHobbyMark = 4508,
  ErrSetTimeMark = 4509,
  ErrSetRemind = 4510,
  ErrSetTop = 4511,
  ErrAddFriend = 4512,
  ErrSetProcessed = 4513,
  ErrSetRemark = 4514,
  ErrDeleteFriend = 4515,
  ErrNotFoundGroup = 4516,
  ErrNotExistInGroup = 4517,
  ErrChangeGroup = 4518,
  ErrPersonalState = 4519,
  ErrOtherFriendMax = 4520,
  ErrCurFriendMax = 4521,
  ErrConfig = 4522,
  ErrAlreadyFriend = 4523,
  ErrSearchSelf = 4524,
  ErrSuggestionCd = 4525,
  ErrGroupMax = 4526,
  ErrGroupNotExist = 4527,
  ErrGroupNameEmpty = 4528,
  ErrIllegalCharacter = 4529,
  ErrStringMax = 4530,
  ErrOtherApplicationMax = 4531,
  ErrFriendlinessAwardHasRecord = 4532,
  ErrFriendlinessLevelLowAwardLevel = 4533,
  ErrFriendBeyondAllFriendNum = 4534,
  ErrFriendIsNoUserFriend = 4535,
  ErrFriendlinessIllegalAwardLevel = 4536,
  ErrFriendlinessLevelAwardIsEmpty = 4537,
  ErrFriendBeBlackenedByTarget = 4538,
  ErrFriendApplyEachOther = 4539,
  ErrFriendCallBySmallerCharId = 4540,
  ErrFriendCallByBiggerCharId = 4541,
  ErrFriendBeBlackenedBySmaller = 4542,
  ErrFriendBeBlackenedByBigger = 4543,
  ErrFriendNoApply = 4544,
  ErrFriendApplySelf = 4545,
  ErrUserNameFormat = 4546,
  ErrFriendGetBaseTooOften = 4547,
  ErrFriendOnlyGetSelfBaseInfo = 4548,
  ErrActorGetFailed = 4601,
  ErrPivotIsActive = 4602,
  ErrPivotIsNotActive = 4603,
  ErrBreakPointIsGet = 4604,
  ErrActorIsNotPivot = 4605,
  ErrActorIsNotBreakPoint = 4606,
  ErrActorIsBreakPointNotFull = 4607,
  ErrPivotRewardIsGiven = 4608,
  ErrNotInsight = 4609,
  ErrLearnSkillFail = 4651,
  ErrRemoveSkillFail = 4652,
  ErrUpdateSkillFail = 4653,
  ErrSkillOperatorType = 4654,
  ErrContainerOperator = 4655,
  ErrExchangeFail = 4656,
  ErrExchangeFailInCombat = 4657,
  ErrAvatarBeyondMaxPictureSize = 4671,
  ErrGetTokenFailed = 4672,
  ErrPictureVerifyFailed = 4673,
  ErrPictureIllegalType = 4674,
  ErrPictureErrorInfo = 4675,
  ErrPictureSizeInconsistent = 4676,
  ErrPictureFuncTypeIllegal = 4677,
  ErrPictureCallBackJudgeIllegal = 4678,
  ErrPictureVerifyNoPass = 4679,
  ErrPictureVerifyBackParamIllegal = 4680,
  ErrPictureCallBackParamIllegal = 4681,
  ErrPictureIllegalId = 4682,
  ErrPictureCosErrors = 4683,
  ErrPictureInnerSysErr = 4684,
  ErrPictureNoSetEnvCosSecretId = 4685,
  ErrPictureNoSetEnvCosSecretKey = 4686,
  ErrPictureCheckInMachineLocked = 4687,
  ErrPictureNoTryOutItem = 4688,
  ErrPictureNoUploadItem = 4689,
  ErrPictureNoUnion = 4690,
  ErrNameSizeError = 4701,
  ErrSensitiveContent = 4702,
  ErrChangeNameFail = 4703,
  ErrChangeNameCardNotEnough = 4704,
  ErrChangeSameName = 4705,
  ErrCheckMuteWordsFailed = 4706,
  ErrCheckMuteWordsEmpty = 4708,
  ErrChangeShowIdFail = 4711,
  ErrChangeShowIdDuplicated = 4712,
  ErrChangeShowIdCardNotEnough = 4713,
  ErrFaceItemLock = 4721,
  ErrFaceItemGender = 4722,
  ErrFaceNoUploading = 4723,
  ErrFaceNoSupportFileSuffix = 4724,
  ErrFaceFileSuffixEmpty = 4725,
  ErrFaceIllegalCosKey = 4726,
  ErrFaceParseSuffixFailed = 4727,
  ErrFaceParseShortGuidFailed = 4728,
  ErrProficiencyNeedUnlock = 4751,
  ErrProficiencyUnlock = 4752,
  ErrUnlockItemNotEnough = 4753,
  ErrTaskNotFinish = 4771,
  ErrStickerAwardIsGet = 4772,
  ErrBookAwardIsGet = 4773,
  ErrInCd = 4791,
  ErrMoneyNotEnough = 4801,
  ErrShopItemCantBuy = 4802,
  ErrShopBuyBusy = 4803,
  ErrPaymentConfigNotFound = 4804,
  ErrRefreshShopCountExceed = 4806,
  ErrShopCouponNotEnough = 4807,
  ErrShopCouponLimitNum = 4808,
  ErrShopCantBuyNoPrice = 4809,
  ErrNotFoundMonster = 4901,
  ErrNotMonster = 4902,
  ErrMonsterUnlockExist = 4903,
  ErrMonsterAwardIsGet = 4904,
  ErrMonsterTargetNotFinish = 4905,
  ErrDropTypeNotSupport = 4906,
  ErrCounterNotEnough = 4907,
  ErrDropItemAlreadyPicked = 4908,
  ErrInteractionDoing = 4941,
  ErrInteractionCondition = 4942,
  ErrInteractionNotMore = 4943,
  ErrInteractionExistPos = 4944,
  ErrInteractionNotExist = 4945,
  ErrInteractionEntityNotExist = 4946,
  ErrInteractionHandleNotExist = 4947,
  ErrInteractionType = 4948,
  ErrInteractionBan = 4949,
  ErrInteractionConfig = 4950,
  ErrInteractionNotOneself = 4951,
  ErrInteractionDistance = 4952,
  ErrInteractionNotDoing = 4953,
  ErrShowPieceIllegalPieceType = 4961,
  ErrShowPieceIllegalPieceId = 4962,
  ErrShowPieceNoInOftenUseList = 4963,
  ErrShowPieceNoUnlockList = 4964,
  ErrShowPieceRoulettePositionNoSet = 4965,
  ErrShowPieceBeyondOftenUseMaxLen = 4966,
  ErrShowPieceBeyondOftenRoulettePositionNum = 4967,
  ErrShowPieceNoCommonPiece = 4968,
  ErrShowPieceNoTakeOn = 4969,
  ErrProfessionActivated = 5001,
  ErrProfessionNotHas = 5002,
  ErrProfessionSlotErr = 5003,
  ErrProfessionRemoveErr = 5004,
  ErrProfessionChangePlanFail = 5005,
  ErrProfessionStarConfigNotExist = 5006,
  ErrProfessionStarNodeUnlock = 5007,
  ErrProfessionStarNodeNotUnlock = 5008,
  ErrProfessionReplaceSkillNotExist = 5009,
  ErrProfessionUpgradeNotGreaterCurLevel = 5010,
  ErrProfessionProfessionBeForged = 5011,
  ErrProfessionSlotTwoNotUnlock = 5012,
  ErrProfessionSkillAlreadyActive = 5013,
  ErrProfessionSkillRemodelLevelWrong = 5014,
  ErrAoyiSkillAlreadyActive = 5015,
  ErrAoyiSkillRemodelConfigNotExist = 5016,
  ErrAoyiSkillRemodelLevelWrong = 5017,
  ErrProfessionEquipInCombat = 5018,
  ErrProfessionSwitchInCombat = 5019,
  ErrProfessionDungeonNotAllowSwitch = 5020,
  ErrAoYiDecomposeOverflow = 5021,
  ErrTalentIllegalTalentPoolId = 5101,
  ErrTalentBeyondCurTalentMaxPlanNum = 5102,
  ErrTalentPoolNoActive = 5108,
  ErrTalentPlanNoActive = 5109,
  ErrTalentIllegalTalentId = 5110,
  ErrTalentTalentHasUnlocked = 5111,
  ErrTalentTalentNoUnlocked = 5112,
  ErrTalentChangeLvPassiveTalentMoreThanInPool = 5113,
  ErrTalentRepeatedTalentId = 5114,
  ErrTalentNoPoolPassiveTalent = 5115,
  ErrTalentTalentPointsNoEnough = 5116,
  ErrTalentPassiveTalentListNoEmpty = 5118,
  ErrTalentIllegalTalentLevel = 5119,
  ErrTalentNoMeetUpgradeCondition = 5120,
  ErrTalentNoSupportDownLevelNow = 5121,
  ErrTalentNoMeetPrevTalentLv = 5122,
  ErrTalentNoMeetPrevTalentPoint = 5123,
  ErrTalentTreeNodeBDExclusive = 5124,
  ErrTalentTotalTalentPointNotEnough = 5125,
  ErrTalentPreTalentNodeNotActivated = 5126,
  ErrTalentResetTalentInCombat = 5127,
  ErrTalentActiveTalentInCombat = 5128,
  ErrCookBookNotExist = 5151,
  ErrCookFoodNotEnough = 5152,
  ErrCookTypeMore = 5153,
  ErrCookCountMore = 5154,
  ErrCookHasBook = 5155,
  ErrCookMaterialNotMatch = 5156,
  ErrChatIllegalPrivateChatTarget = 5201,
  ErrChatInTargetBlockList = 5202,
  ErrChatSendMsgBeyondMaxWords = 5203,
  ErrChatWorldChannelIdIsZero = 5204,
  ErrChatWorldChannelIdBeyondMaxId = 5205,
  ErrChatIllegalChannelType = 5206,
  ErrChatIllegalMsgType = 5207,
  ErrChatNoInGoalChannel = 5208,
  ErrChatNeedConfigIdNotZero = 5209,
  ErrChatNeedMsgTextNotEmpty = 5210,
  ErrChatSendCdNoEnd = 5211,
  ErrChatRecordListIsEmpty = 5212,
  ErrChatTargetNotInPrivateList = 5213,
  ErrChatMsgIdMoreThanMaxReadMsgId = 5214,
  ErrChatBeyondBlockListLimit = 5215,
  ErrChatWorldChannelIdBeyondMaxNum = 5216,
  ErrChatBeyondMaxRecordId = 5217,
  ErrChatNoCreatePrivateSession = 5218,
  ErrChatPrivateSessionHasExit = 5219,
  ErrChatBeBan = 5220,
  ErrChatFileIdTooLong = 5221,
  ErrChatFileIdEmpty = 5222,
  ErrChatMsgInfoEmpty = 5223,
  ErrChatNoShareChannel = 5224,
  ErrChatIllegalShareType = 5225,
  ErrChatIllegalHolderType = 5226,
  ErrChatNoSupportShareType = 5227,
  ErrChatShareTpeNoChatId = 5228,
  ErrChatShareNoFishRank = 5229,
  ErrChatLevelLimit = 5230,
  ErrChatNoFoundBlockListLimit = 5231,
  ErrTalentModTalentTagNotExist = 5301,
  ErrTextCheckForbidden = 5351,
  ErrTextCheckNoSceneType = 5352,
  ErrTextCheckIllegal = 5353,
  ErrTextCheckHttpError = 5354,
  ErrTextCheckTooManyItems = 5355,
  ErrConditionTimerOpen = 5401,
  ErrConditionOpenServer = 5402,
  ErrSkillDisable = 5700,
  ErrSkillIsCD = 5701,
  ErrSkillMaxPassiveCount = 5702,
  ErrSkillInit = 5703,
  ErrSkillInfo = 5704,
  ErrUseSkillFightResInsufficient = 5705,
  ErrUseSkillBuffNotEnough = 5706,
  ErrUseSkillItemInsufficient = 5707,
  ErrUseSkillAttrInsufficient = 5708,
  ErrUseSkillEnduranceInsufficient = 5709,
  ErrUseSkillStateChange = 5710,
  ErrUseSkillClientSkillUuid = 5711,
  ErrFightLogicConditionBlockInvalid = 5730,
  ErrFightLogicActionGroupInvalid = 5731,
  ErrFightLogicConditionNotMatch = 5732,
  ErrFightLogicRunDataInvalid = 5733,
  ErrSkillStageNotFind = 5734,
  ErrConditionCfgSize = 6000,
  ErrConditionDissatisfy = 6001,
  ErrConditionObjectIsNull = 6002,
  ErrConditionTypeNotFound = 6003,
  ErrConditionEntityDeath = 6004,
  ErrConditionUnionLevel = 6005,
  ErrConditionUnionMoney = 6006,
  ErrConditionNotMeet = 6007,
  ErrConditionNotInShapeShift = 6008,
  ErrSeasonAchievementNoExist = 6101,
  ErrSeasonAchievementNoFinish = 6102,
  ErrSeasonAchievementHasReceived = 6103,
  ErrSeasonAchievementPrevIdNoReceived = 6104,
  ErrSeasonAchievementPrevIdNoExist = 6105,
  ErrSeasonAchievementTargetConfigError = 6106,
  ErrSeasonRankHasMax = 6151,
  ErrSeasonRankHasReceived = 6152,
  ErrSeasonRankNoAchieve = 6153,
  ErrSeasonRankCurSeasonIdZero = 6154,
  ErrSeasonRankNoMeetCondition = 6155,
  ErrSeasonRankSeasonNoSame = 6156,
  ErrBattlePassBuyLevel = 6201,
  ErrBattlePassBuyMaterial = 6202,
  ErrBattlePassAwardGet = 6203,
  ErrBattlePassAwardNotUnlock = 6204,
  ErrBattlePassBuyWeekExpLimit = 6205,
  ErrBattlePassLevelError = 6206,
  ErrNoRefreshTimes = 6207,
  ErrTargetNotCompleted = 6208,
  ErrOnlinePeriodTooMore = 6251,
  ErrPersonalTagTooMore = 6252,
  ErrPersonalTagNotFound = 6253,
  ErrPersonalAvatarUnearned = 6254,
  ErrPersonalAvatarFrameUnearned = 6255,
  ErrPersonalCardStyleUnearned = 6256,
  ErrPersonalPhotoTooMore = 6257,
  ErrPersonalMedalUnearned = 6258,
  ErrPersonalTargetUnlock = 6259,
  ErrPersonalTargetAlreadyGet = 6260,
  ErrPersonalMedalInvalidSlot = 6261,
  ErrPersonalMedalDuplicateValue = 6262,
  ErrOnlinePeriodDuplicate = 6263,
  ErrPersonalTagDuplicate = 6264,
  ErrPersonalPhotoInvalidSlot = 6265,
  ErrPersonalPhotoDuplicateValue = 6266,
  ErrSeasonMedalNoMeetActiveCondition = 6301,
  ErrSeasonMedalNoMeetUpgradeCondition = 6302,
  ErrSeasonMedalActiveMeetNoEnough = 6303,
  ErrSeasonMedalUpgradeMeetNoEnough = 6304,
  ErrSeasonMedalIllegalNodeId = 6305,
  ErrSeasonMedalChooseNodeIdBeyondMax = 6306,
  ErrSeasonMedalHoleNoExist = 6307,
  ErrSeasonMedalHoleLock = 6308,
  ErrSeasonMedalNodeNoExist = 6309,
  ErrSeasonMedalHoleNoGet = 6310,
  ErrSeasonMedalMaxHoleLevel = 6311,
  ErrSeasonMedalCoreHoleLock = 6312,
  ErrSeasonMedalUpgradeMoneyNoEnough = 6313,
  ErrSeasonNoCoreHole = 6314,
  ErrSeasonNoNormalHole = 6315,
  ErrSeasonMedalNoUpgradeNormalHoleItem = 6316,
  ErrSceneLineNotExists = 6351,
  ErrSceneLineRefreshCd = 6352,
  ErrSceneLineNotSameScene = 6353,
  ErrSceneLineSameLine = 6354,
  ErrSceneLineInteracting = 6355,
  ErrSceneLineUserDead = 6356,
  ErrSceneLineFull = 6357,
  ErrSceneLineChangeCd = 6358,
  ErrSceneVersionRecycle = 6359,
  ErrSceneLineKick = 6360,
  ErrInstallSlotFailed = 6401,
  ErrUseSlotFailed = 6402,
  ErrUseSlotInCd = 6403,
  ErrInstatallSlotFailedInCombat = 6404,
  ErrSlotSkillUnLoad = 6405,
  ErrUseCfgSkillFailed = 6406,
  ErrResonanceNotExists = 6407,
  ErrResonanceUnLoad = 6408,
  ErrUseDodgeFailed = 6409,
  ErrUseFixedSkillFailed = 6410,
  ErrUseBlockedSkill = 6411,
  ErrInstallBlockedSkill = 6412,
  ErrExchangeNotFound = 6451,
  ErrExchangeNotEnough = 6452,
  ErrExchangeItemLimit = 6453,
  ErrExchangeStepRange = 6454,
  ErrExchangeItemFull = 6455,
  ErrExchangePackageFull = 6456,
  ErrExchangePriceItemNotFind = 6457,
  ErrExchangeBuyNumNotEnough = 6458,
  ErrExchangeBuyItemNotFound = 6459,
  ErrExchangeTakeFailDelayTime = 6460,
  ErrExchangeTakeFailSellNum = 6461,
  ErrExchangeTakeItemNotFound = 6462,
  ErrExchangeWithdrawNoMoney = 6463,
  ErrExchangeDepositNotEnough = 6464,
  ErrExchangeItemNotBindOrCooldownNotExpire = 6465,
  ErrExchangeInCd = 6466,
  ErrExchangeBuyCurrencyNoEnough = 6467,
  ErrExchangeItemDelayTimeOver = 6468,
  ErrExchangeItemIsNotWithdraw = 6469,
  ErrExchangeBuyItemLimit = 6470,
  ErrExchangeItemIsNotNoticeShopItem = 6471,
  ErrExchangeItemIsPreBuyAlready = 6472,
  ErrExchangeItemNotPublic = 6473,
  ErrExchangeSaleRankExist = 6474,
  ErrExchangeSaleItemFull = 6475,
  ErrExchangeSaleDiamondNotEnough = 6476,
  ErrExchangeSaleItemNotExists = 6477,
  ErrExchangeBuySaleCurrencyNoEnough = 6478,
  ErrExchangeDiamondNotEnough = 6479,
  ErrExchangeSaleTakeOffCd = 6480,
  ErrExchangeSaleRateInvalid = 6481,
  ErrExchangePreItemFull = 6482,
  ErrExchangeSaleNumInvalid = 6483,
  ErrExchangeCareItemAlready = 6484,
  ErrExchangePriceRange = 6485,
  ErrExchangeRequestLimit = 6486,
  ErrExchangeItemBanned = 6487,
  ErrExchangePriceNotLow = 6488,
  ErrExchangeItemNotFind = 6489,
  ErrExchangeItemExistMinPrice = 6490,
  ErrExchangeNoticeItemMin = 6491,
  ErrExchangePreBuyUserFull = 6492,
  ErrModHoleNotUnlock = 6501,
  ErrModNotExist = 6502,
  ErrModSimilarRepeated = 6503,
  ErrModTypeLimitExceeded = 6504,
  ErrModPartNotExist = 6505,
  ErrModPartEnhanceLimit = 6506,
  ErrModInUse = 6507,
  ErrModAlreadyInstalled = 6508,
  ErrModInitConfigNotExist = 6509,
  ErrModPartOverflow = 6510,
  ErrModCanNotLink = 6511,
  ErrModDecomposeOverflow = 6512,
  ErrFishingNotUseBait = 6551,
  ErrFishingRandomFailed = 6552,
  ErrFishingAlreadyGetFishItem = 6553,
  ErrFishingGetFishIdWrong = 6554,
  ErrFishingNotGet = 6555,
  ErrFishingNotResearchYet = 6556,
  ErrFishingNotUseRod = 6557,
  ErrFishingNoSeat = 6558,
  ErrFishingCantResearch = 6559,
  ErrFishDrawnLevelAward = 6560,
  ErrFishCannotDrawLevelAward = 6561,
  ErrFishDrawnNoLevelAward = 6562,
  ErrFreightNoRefreshGoods = 6601,
  ErrFreightBeyondMaxValue = 6602,
  ErrFreightDownMinValue = 6603,
  ErrFreightHasSetOff = 6604,
  ErrFreightNoSetOff = 6605,
  ErrFreightHasReward = 6606,
  ErrFreightIllegalGoodsId = 6607,
  ErrFreightItemNoEnough = 6608,
  ErrFreightNoUpSetOffTime = 6609,
  ErrFreightNoUpRewardTime = 6610,
  ErrFreightAutoSetOff = 6611,
  ErrTrialRoadAwardNotFinished = 6651,
  ErrTrialRoadAwardRoomGet = 6652,
  ErrNotCanRide = 6701,
  ErrCombatStateNotRide = 6702,
  ErrAlreadyRide = 6703,
  ErrRideNotEnough = 6704,
  ErrCreateVehicleActorFailed = 6705,
  ErrNotVehicleOwner = 6706,
  ErrVehicleHasController = 6707,
  ErrVehicleNoSeat = 6708,
  ErrVehicleHasSeat = 6709,
  ErrNotRideVehicle = 6710,
  ErrVehicleNotExits = 6711,
  ErrInvalidRidePropertyType = 6712,
  ErrRideApplyTargetUserNotExist = 6713,
  ErrRideConfigNotFind = 6714,
  ErrRideNotUnlock = 6715,
  ErrRideNotFind = 6716,
  ErrInvalidRideType = 6717,
  ErrRideApplyAlreadyExist = 6718,
  ErrRideApplyNotRideVehicle = 6719,
  ErrRideApplyVehicleNotSeat = 6720,
  ErrRideAlReadyRide = 6721,
  ErrRideApplyTargetTooFar = 6722,
  ErrRideNotTake = 6723,
  ErrRideInteracting = 6724,
  ErrShapeshiftNotRide = 6725,
  ErrFishingNotRide = 6726,
  ErrRideStateReject = 6727,
  ErrRideTypeNotSupport = 6728,
  ErrRideNotControl = 6729,
  ErrRideNotFunction = 6730,
  ErrRideSkinNotSupport = 6731,
  ErrRideSkinNotUnlock = 6732,
  ErrRideSkinDataAddFailed = 6733,
  ErrRideSkinNotSkin = 6734,
  ErrRideSkinAlreadyActivate = 6735,
  ErrWarehouseHas = 7000,
  ErrWarehouseNoHas = 7001,
  ErrWarehouseNoMem = 7002,
  ErrWarehouseNoPresident = 7003,
  ErrWarehouseNoHasItem = 7004,
  ErrWarehouseItemNoDeposit = 7005,
  ErrWarehouseGridPosNoExist = 7006,
  ErrWarehouseGridPosItemNoEnough = 7007,
  ErrWarehouseNoInviteSelf = 7008,
  ErrWarehouseInviteesHas = 7009,
  ErrWarehouseMemBeyondMax = 7010,
  ErrWarehouseGridBeyondMax = 7011,
  ErrWarehouseNoSelf = 7012,
  ErrWarehouseIsMem = 7013,
  ErrWarehouseNoExist = 7014,
  ErrWarehouseDepositBeyondMax = 7015,
  ErrWarehouseTakeOutBeyondMax = 7016,
  ErrWarehouseItemIdNotSame = 7017,
  ErrWarehouseParams = 7018,
  ErrWarehouseNoKickSelf = 7019,
  ErrWarehousePresidentNoExit = 7020,
  ErrGashaDrawCount = 7021,
  ErrGashaDrawLimit = 7022,
  ErrGashaInvalidWishId = 7023,
  EErGashaWishRepeated = 7026,
  EErGashaWishCountNoEnough = 7027,
  ErrWarehouseAuthority = 7028,
  ErrEquipCantDecompose = 7051,
  ErrEquipNotRecastRecord = 7052,
  ErrEquipOnCantUsedRecastConsume = 7053,
  ErrEquipWeaponNotEqualProfession = 7054,
  ErrEquipSlotRefineBlessNotFit = 7055,
  ErrEquipNotRecast = 7056,
  ErrEquipEnchantItemMismatch = 7057,
  ErrEquipEnchantAlreadyEnchanted = 7058,
  ErrEquipAnyItemMismatch = 7059,
  ErrEquipSlotRefineBlessNumTooMuch = 7060,
  ErrEquipNameGroupNoMatch = 7061,
  ErrEquipPerfectionNoMatch = 7062,
  ErrEquipNotBreak = 7063,
  ErrEquipPutOnIng = 7064,
  ErrEquipDecomposeOverflow = 7065,
  ErrUserIsMatching = 7101,
  ErrUserNotInMatching = 7102,
  ErrUseNotWaitReady = 7103,
  ErrDungeonCantMatch = 7104,
  ErrMatchQueueFull = 7105,
  ErrCommonAwardCantReceive = 7151,
  ErrCommonAwardHasReceived = 7152,
  ErrCraftEnergyNotEnough = 7201,
  ErrCraftEnergyFull = 7202,
  ErrRecommendPlayNotOpen = 7250,
  ErrWeeklyTowerNoStart = 7251,
  ErrWeeklyTowerHasEnd = 7252,
  ErrWeeklyNoMeetProcessAward = 7253,
  ErrWeeklyHasRewardProcessAward = 7254,
  ErrWeeklyNoLayerStageAward = 7255,
  ErrWeekOnlyCurSeasonAward = 7256,
  ErrWeeklyTowerCannotEnterLayer = 7257,
  ErrWeeklyTowerBoxHasOpen = 7258,
  ErrWeeklyTowerNoBox = 7259,
  ErrWeeklyTowerNoStageAward = 7260,
  ErrWeeklyTowerNoTowerDungeon = 7261,
  ErrWeeklyTowerLayerNotSatisfy = 7262,
  ErrFunctionNoAward = 7271,
  ErrFunctionHasDrawn = 7272,
  ErrTLogIllegalExportArea = 7281,
  ErrPayOrderFail = 7300,
  ErrPayCostNotEnough = 7301,
  ErrPayCantBuy = 7302,
  ErrPayCantExplore = 7303,
  ErrActivityNotFind = 7350,
  ErrActivityOffline = 7351,
  ErrActivityNotOpen = 7352,
  ErrActivityRewardNotFound = 7353,
  ErrActivityConditionNotFinish = 7354,
  ErrActivityAlreadyObtain = 7355,
  ErrActivityNotUnlock = 7356,
  ErrEmojiConfigError = 7401,
  ErrEmojiAlreadyUnlock = 7402,
  ErrEmojiUnlockItemError = 7403,
  ErrEmojiUnlockItemErrorItemNotEnough = 7404,
  ErrEmojiUnlock = 7405,
  ErrGlobalConditionNotFound = 7406,
  ErrGlobalConditionNotLuckyValue = 7407,
  ErrPathFindingCant = 7412,
  ErrPathFindingDataError = 7413,
  ErrPathFindingEndPosError = 7414,
  ErrPathFindingStartPosError = 7415,
  ErrPathFindingNoPath = 7416,
  ErrSignNotOpen = 7421,
  ErrSignNotSigned = 7422,
  ErrSignAlreadySigned = 7423,
  ErrSignTimeError = 7424,
  CdKeyInvalid = 7501,
  CdKeyDuplicate = 7502,
  CdKeyExpired = 7503,
  CdKeyNotFound = 7504,
  CdKeyNotActivated = 7505,
  CdKeyPlayerLevelTooLow = 7506,
  CdKeyTakeLimitReached = 7507,
  CdKeyGroupNotFound = 7508,
  ErrTokenBucketLimit = 9998,
  ErrUnknown = 9999,
  UNRECOGNIZED = -1,
}

export function eErrorCodeFromJSON(object: any): EErrorCode {
  switch (object) {
    case 0:
    case "ErrSuccess":
      return EErrorCode.ErrSuccess;
    case 101:
    case "ErrNoRecord":
      return EErrorCode.ErrNoRecord;
    case 102:
    case "ErrExceptionCancel":
      return EErrorCode.ErrExceptionCancel;
    case 103:
    case "ErrDBException":
      return EErrorCode.ErrDBException;
    case 104:
    case "ErrDBSeqException":
      return EErrorCode.ErrDBSeqException;
    case 105:
    case "ErrDBSceneException":
      return EErrorCode.ErrDBSceneException;
    case 106:
    case "ErrDBTokenException":
      return EErrorCode.ErrDBTokenException;
    case 201:
    case "ErrCancelled":
      return EErrorCode.ErrCancelled;
    case 202:
    case "ErrUnknownRpc":
      return EErrorCode.ErrUnknownRpc;
    case 203:
    case "ErrInvalidArgument":
      return EErrorCode.ErrInvalidArgument;
    case 204:
    case "ErrDeadlineExceeded":
      return EErrorCode.ErrDeadlineExceeded;
    case 205:
    case "ErrNotFound":
      return EErrorCode.ErrNotFound;
    case 206:
    case "ErrAlreadyExists":
      return EErrorCode.ErrAlreadyExists;
    case 207:
    case "ErrPermissionDenied":
      return EErrorCode.ErrPermissionDenied;
    case 208:
    case "ErrResourceExhausted":
      return EErrorCode.ErrResourceExhausted;
    case 209:
    case "ErrFailedPrecondition":
      return EErrorCode.ErrFailedPrecondition;
    case 210:
    case "ErrAborted":
      return EErrorCode.ErrAborted;
    case 211:
    case "ErrOutOfRange":
      return EErrorCode.ErrOutOfRange;
    case 212:
    case "ErrUnimplemented":
      return EErrorCode.ErrUnimplemented;
    case 213:
    case "ErrInternal":
      return EErrorCode.ErrInternal;
    case 214:
    case "ErrUnavailable":
      return EErrorCode.ErrUnavailable;
    case 215:
    case "ErrDataLoss":
      return EErrorCode.ErrDataLoss;
    case 216:
    case "ErrUnauthenticated":
      return EErrorCode.ErrUnauthenticated;
    case 999:
    case "ErrSystemMax":
      return EErrorCode.ErrSystemMax;
    case 1000:
    case "ErrDBError":
      return EErrorCode.ErrDBError;
    case 1001:
    case "ErrCreateOpenInfo":
      return EErrorCode.ErrCreateOpenInfo;
    case 1002:
    case "ErrCreateAccountInfo":
      return EErrorCode.ErrCreateAccountInfo;
    case 1003:
    case "ErrCreateCharInfo":
      return EErrorCode.ErrCreateCharInfo;
    case 1004:
    case "ErrCreateAccountToken":
      return EErrorCode.ErrCreateAccountToken;
    case 1005:
    case "ErrGetOpenInfo":
      return EErrorCode.ErrGetOpenInfo;
    case 1006:
    case "ErrGetAccountInfo":
      return EErrorCode.ErrGetAccountInfo;
    case 1007:
    case "ErrGetCharInfo":
      return EErrorCode.ErrGetCharInfo;
    case 1008:
    case "ErrGetAccountToken":
      return EErrorCode.ErrGetAccountToken;
    case 1009:
    case "ErrLoginInQueue":
      return EErrorCode.ErrLoginInQueue;
    case 1010:
    case "ErrOtherLogin":
      return EErrorCode.ErrOtherLogin;
    case 1011:
    case "ErrServerError":
      return EErrorCode.ErrServerError;
    case 1012:
    case "ErrNoAccountInfo":
      return EErrorCode.ErrNoAccountInfo;
    case 1013:
    case "ErrNoCharInfo":
      return EErrorCode.ErrNoCharInfo;
    case 1014:
    case "ErrTokenExpired":
      return EErrorCode.ErrTokenExpired;
    case 1015:
    case "ErrUpdateTokenFail":
      return EErrorCode.ErrUpdateTokenFail;
    case 1016:
    case "ErrRegIntoSceneError":
      return EErrorCode.ErrRegIntoSceneError;
    case 1017:
    case "ErrLoginTypeErr":
      return EErrorCode.ErrLoginTypeErr;
    case 1018:
    case "ErrChangeMapErr":
      return EErrorCode.ErrChangeMapErr;
    case 1019:
    case "ErrLoginPlatformErr":
      return EErrorCode.ErrLoginPlatformErr;
    case 1020:
    case "ErrVersionErr":
      return EErrorCode.ErrVersionErr;
    case 1021:
    case "ErrDelayOffLineKickOff":
      return EErrorCode.ErrDelayOffLineKickOff;
    case 1022:
    case "ErrServiceLanguageError":
      return EErrorCode.ErrServiceLanguageError;
    case 1023:
    case "NoEnterScene":
      return EErrorCode.NoEnterScene;
    case 1024:
    case "ModIDNotOpen":
      return EErrorCode.ModIDNotOpen;
    case 1025:
    case "ErrFaceData":
      return EErrorCode.ErrFaceData;
    case 1026:
    case "ErrInitProfession":
      return EErrorCode.ErrInitProfession;
    case 1027:
    case "ErrSceneCloseKickoff":
      return EErrorCode.ErrSceneCloseKickoff;
    case 1028:
    case "ErrLoginReconnectKick":
      return EErrorCode.ErrLoginReconnectKick;
    case 1029:
    case "ErrLoginErrorResume":
      return EErrorCode.ErrLoginErrorResume;
    case 1030:
    case "ErrRepeatedLogin":
      return EErrorCode.ErrRepeatedLogin;
    case 1031:
    case "ErrRestrictLogin":
      return EErrorCode.ErrRestrictLogin;
    case 1032:
    case "ErrRestrictBlack":
      return EErrorCode.ErrRestrictBlack;
    case 1033:
    case "ErrSdkVerifyFail":
      return EErrorCode.ErrSdkVerifyFail;
    case 1034:
    case "ErrSdkTokenExpired":
      return EErrorCode.ErrSdkTokenExpired;
    case 1035:
    case "ErrServerNotOpen":
      return EErrorCode.ErrServerNotOpen;
    case 1036:
    case "ErrServerEndOpen":
      return EErrorCode.ErrServerEndOpen;
    case 1037:
    case "ErrNormalKick":
      return EErrorCode.ErrNormalKick;
    case 1038:
    case "ErrServerBusy":
      return EErrorCode.ErrServerBusy;
    case 1039:
    case "ErrServerClose":
      return EErrorCode.ErrServerClose;
    case 1040:
    case "ErrExitGame":
      return EErrorCode.ErrExitGame;
    case 1041:
    case "ErrHopeKick":
      return EErrorCode.ErrHopeKick;
    case 1042:
    case "ErrClientVersionError":
      return EErrorCode.ErrClientVersionError;
    case 1043:
    case "ErrInvalidDeviceId":
      return EErrorCode.ErrInvalidDeviceId;
    case 1044:
    case "ErrInvalidSystemType":
      return EErrorCode.ErrInvalidSystemType;
    case 1045:
    case "ErrDeleteChar":
      return EErrorCode.ErrDeleteChar;
    case 1046:
    case "ErrCancelDeleteChar":
      return EErrorCode.ErrCancelDeleteChar;
    case 1047:
    case "ErrCancelDeleteCharIsDelete":
      return EErrorCode.ErrCancelDeleteCharIsDelete;
    case 1048:
    case "ErrIntoSceneOwnerFail":
      return EErrorCode.ErrIntoSceneOwnerFail;
    case 1049:
    case "ErrLoginNoEnoughToken":
      return EErrorCode.ErrLoginNoEnoughToken;
    case 1050:
    case "ErrSceneQueueUp":
      return EErrorCode.ErrSceneQueueUp;
    case 1051:
    case "ErrProtocolVersionErr":
      return EErrorCode.ErrProtocolVersionErr;
    case 1052:
    case "ErrConfigVersionErr":
      return EErrorCode.ErrConfigVersionErr;
    case 1053:
    case "ErrStateEventFailed":
      return EErrorCode.ErrStateEventFailed;
    case 1054:
    case "ErrSelectCharDoing":
      return EErrorCode.ErrSelectCharDoing;
    case 1055:
    case "ErrSelectCharDeleted":
      return EErrorCode.ErrSelectCharDeleted;
    case 1056:
    case "ErrLoginChannelMax":
      return EErrorCode.ErrLoginChannelMax;
    case 1057:
    case "ErrDeleteAccountKick":
      return EErrorCode.ErrDeleteAccountKick;
    case 1058:
    case "ErrIsDeleteAccount":
      return EErrorCode.ErrIsDeleteAccount;
    case 1059:
    case "ErrIsVersionKick":
      return EErrorCode.ErrIsVersionKick;
    case 1060:
    case "ErrNotQQChnnel":
      return EErrorCode.ErrNotQQChnnel;
    case 1061:
    case "ErrIncorrectLaunchPlatform":
      return EErrorCode.ErrIncorrectLaunchPlatform;
    case 1062:
    case "ErrConditionWrong":
      return EErrorCode.ErrConditionWrong;
    case 1063:
    case "ErrNotSupportLoginType":
      return EErrorCode.ErrNotSupportLoginType;
    case 2001:
    case "ErrSceneNotExist":
      return EErrorCode.ErrSceneNotExist;
    case 2002:
    case "ErrUserNotExist":
      return EErrorCode.ErrUserNotExist;
    case 2003:
    case "ErrComponentNotExist":
      return EErrorCode.ErrComponentNotExist;
    case 2004:
    case "ErrSceneConfigNotExist":
      return EErrorCode.ErrSceneConfigNotExist;
    case 2005:
    case "ErrServiceNotExist":
      return EErrorCode.ErrServiceNotExist;
    case 2006:
    case "ErrDataContainerNotExist":
      return EErrorCode.ErrDataContainerNotExist;
    case 2007:
    case "ErrAsynchronousReturn":
      return EErrorCode.ErrAsynchronousReturn;
    case 2008:
    case "ErrConfigNotExist":
      return EErrorCode.ErrConfigNotExist;
    case 2009:
    case "ErrNotUser":
      return EErrorCode.ErrNotUser;
    case 2010:
    case "ErrConfigError":
      return EErrorCode.ErrConfigError;
    case 2011:
    case "ErrActorNotExist":
      return EErrorCode.ErrActorNotExist;
    case 2012:
    case "ErrCutSceneAlreadyPlayed":
      return EErrorCode.ErrCutSceneAlreadyPlayed;
    case 2020:
    case "ErrFunctionUnlock":
      return EErrorCode.ErrFunctionUnlock;
    case 2021:
    case "ErrFunctionClosed":
      return EErrorCode.ErrFunctionClosed;
    case 2022:
    case "ErrUserPlayerNotFurniturePackage":
      return EErrorCode.ErrUserPlayerNotFurniturePackage;
    case 2200:
    case "ErrSysInnerError":
      return EErrorCode.ErrSysInnerError;
    case 2201:
    case "ErrSysWebClientNull":
      return EErrorCode.ErrSysWebClientNull;
    case 2202:
    case "ErrSysWebRequestTimeOut":
      return EErrorCode.ErrSysWebRequestTimeOut;
    case 2203:
    case "ErrSysWebReturnError":
      return EErrorCode.ErrSysWebReturnError;
    case 2204:
    case "ErrRequestTooFrequently":
      return EErrorCode.ErrRequestTooFrequently;
    case 2251:
    case "ErrArgStringTooLong":
      return EErrorCode.ErrArgStringTooLong;
    case 2252:
    case "ErrArgStringEmpty":
      return EErrorCode.ErrArgStringEmpty;
    case 2253:
    case "ErrArgArrayTooBig":
      return EErrorCode.ErrArgArrayTooBig;
    case 2254:
    case "ErrArgArrayEmpty":
      return EErrorCode.ErrArgArrayEmpty;
    case 2255:
    case "ErrArgMapTooBig":
      return EErrorCode.ErrArgMapTooBig;
    case 2256:
    case "ErrArgMapEmpty":
      return EErrorCode.ErrArgMapEmpty;
    case 2300:
    case "ErrItemNotExist":
      return EErrorCode.ErrItemNotExist;
    case 2301:
    case "ErrPackageNotExist":
      return EErrorCode.ErrPackageNotExist;
    case 2302:
    case "ErrPackageFull":
      return EErrorCode.ErrPackageFull;
    case 2303:
    case "ErrItemExpireTime":
      return EErrorCode.ErrItemExpireTime;
    case 2304:
    case "ErrItemPackageGridNotEnough":
      return EErrorCode.ErrItemPackageGridNotEnough;
    case 2305:
    case "ErrItemUUIDError":
      return EErrorCode.ErrItemUUIDError;
    case 2306:
    case "ErrItemNotEnough":
      return EErrorCode.ErrItemNotEnough;
    case 2307:
    case "ErrOptTypeError":
      return EErrorCode.ErrOptTypeError;
    case 2308:
    case "ErrItemInCoolDown":
      return EErrorCode.ErrItemInCoolDown;
    case 2309:
    case "ErrItemNotUse":
      return EErrorCode.ErrItemNotUse;
    case 2310:
    case "ErrItemEffectTypeError":
      return EErrorCode.ErrItemEffectTypeError;
    case 2311:
    case "ErrItemParamError":
      return EErrorCode.ErrItemParamError;
    case 2312:
    case "ErrItemAddBuffError":
      return EErrorCode.ErrItemAddBuffError;
    case 2313:
    case "ErrItemAdd":
      return EErrorCode.ErrItemAdd;
    case 2314:
    case "ErrUseItemState":
      return EErrorCode.ErrUseItemState;
    case 2315:
    case "ErrBatchUse":
      return EErrorCode.ErrBatchUse;
    case 2316:
    case "ErrFullSendMail":
      return EErrorCode.ErrFullSendMail;
    case 2317:
    case "ErrItemNumZero":
      return EErrorCode.ErrItemNumZero;
    case 2318:
    case "ErrItemSelectAwardIllegalNum":
      return EErrorCode.ErrItemSelectAwardIllegalNum;
    case 2319:
    case "ErrItemSelectAwardIllegalPos":
      return EErrorCode.ErrItemSelectAwardIllegalPos;
    case 2320:
    case "ErrItemSelectLimit":
      return EErrorCode.ErrItemSelectLimit;
    case 2321:
    case "ErrItemPeriodGainExceeded":
      return EErrorCode.ErrItemPeriodGainExceeded;
    case 2322:
    case "ErrItemNoRecycle":
      return EErrorCode.ErrItemNoRecycle;
    case 2323:
    case "ErrItemRecycleBeyondMaxGrid":
      return EErrorCode.ErrItemRecycleBeyondMaxGrid;
    case 2324:
    case "ErrItemRecycleBeyondMaxNum":
      return EErrorCode.ErrItemRecycleBeyondMaxNum;
    case 2325:
    case "ErrItemRecycleIdNoMatchItemId":
      return EErrorCode.ErrItemRecycleIdNoMatchItemId;
    case 2326:
    case "ErrItemRecycleIllegalId":
      return EErrorCode.ErrItemRecycleIllegalId;
    case 2327:
    case "ErrItemLimitCount":
      return EErrorCode.ErrItemLimitCount;
    case 2328:
    case "ErrItemFriendPontExceeded":
      return EErrorCode.ErrItemFriendPontExceeded;
    case 2329:
    case "ErrItemToySingleEntUseExceeded":
      return EErrorCode.ErrItemToySingleEntUseExceeded;
    case 2330:
    case "ErrItemToySceneUseExceeded":
      return EErrorCode.ErrItemToySceneUseExceeded;
    case 2331:
    case "ErrItemToyUseInDisableArea":
      return EErrorCode.ErrItemToyUseInDisableArea;
    case 2332:
    case "ErrItemToySingleCellUseExceeded":
      return EErrorCode.ErrItemToySingleCellUseExceeded;
    case 2333:
    case "ErrItemToyCantUse":
      return EErrorCode.ErrItemToyCantUse;
    case 2334:
    case "ErrItemLifeProfessionExceeded":
      return EErrorCode.ErrItemLifeProfessionExceeded;
    case 2380:
    case "ErrMonthlyCardNotExists":
      return EErrorCode.ErrMonthlyCardNotExists;
    case 2381:
    case "ErrMonthlyCardDataError":
      return EErrorCode.ErrMonthlyCardDataError;
    case 2382:
    case "ErrMonthlyCardDayAwardReceived":
      return EErrorCode.ErrMonthlyCardDayAwardReceived;
    case 2383:
    case "ErrMonthlyCardLimitCount":
      return EErrorCode.ErrMonthlyCardLimitCount;
    case 2400:
    case "ErrCommunityNoHome":
      return EErrorCode.ErrCommunityNoHome;
    case 2401:
    case "ErrNotHouseOwner":
      return EErrorCode.ErrNotHouseOwner;
    case 2402:
    case "ErrHomeLandExisted":
      return EErrorCode.ErrHomeLandExisted;
    case 2403:
    case "ErrHomeLandContentWrongful":
      return EErrorCode.ErrHomeLandContentWrongful;
    case 2404:
    case "ErrHouseLivetogetherCD":
      return EErrorCode.ErrHouseLivetogetherCD;
    case 2405:
    case "ErrHomeLandNotExisted":
      return EErrorCode.ErrHomeLandNotExisted;
    case 2406:
    case "ErrHomeLandNotInScene":
      return EErrorCode.ErrHomeLandNotInScene;
    case 2407:
    case "ErrHomeLandIsInvitation":
      return EErrorCode.ErrHomeLandIsInvitation;
    case 2408:
    case "ErrHomeLandInsufficientAuthority":
      return EErrorCode.ErrHomeLandInsufficientAuthority;
    case 2409:
    case "ErrHomeLandTransferRequestPending":
      return EErrorCode.ErrHomeLandTransferRequestPending;
    case 2410:
    case "ErrHomeLandTransferRequestTimeout":
      return EErrorCode.ErrHomeLandTransferRequestTimeout;
    case 2411:
    case "ErrHomeLandTransferCD":
      return EErrorCode.ErrHomeLandTransferCD;
    case 2412:
    case "ErrHomelandTargetIsHasHome":
      return EErrorCode.ErrHomelandTargetIsHasHome;
    case 2413:
    case "ErrHomelandTargetIsOwner":
      return EErrorCode.ErrHomelandTargetIsOwner;
    case 2414:
    case "ErrHomelandNotOwnerCannotOperate":
      return EErrorCode.ErrHomelandNotOwnerCannotOperate;
    case 2415:
    case "ErrHomeLandHasHouse":
      return EErrorCode.ErrHomeLandHasHouse;
    case 2416:
    case "ErrHomeLandContentTooLong":
      return EErrorCode.ErrHomeLandContentTooLong;
    case 2417:
    case "ErrHomeLandClutterNotExist":
      return EErrorCode.ErrHomeLandClutterNotExist;
    case 2418:
    case "ErrHouseNameOrStatementCD":
      return EErrorCode.ErrHouseNameOrStatementCD;
    case 2419:
    case "ErrHouseIntroductionStatementCD":
      return EErrorCode.ErrHouseIntroductionStatementCD;
    case 2420:
    case "ErrCommunityBuildInvalidRecipeId":
      return EErrorCode.ErrCommunityBuildInvalidRecipeId;
    case 2421:
    case "ErrCommunityBuildRecipeIsUnlock":
      return EErrorCode.ErrCommunityBuildRecipeIsUnlock;
    case 2422:
    case "ErrCommunityBuildMax":
      return EErrorCode.ErrCommunityBuildMax;
    case 2423:
    case "ErrCommunityBuildNoAuthority":
      return EErrorCode.ErrCommunityBuildNoAuthority;
    case 2424:
    case "ErrCommunityNotBuildCannotCancel":
      return EErrorCode.ErrCommunityNotBuildCannotCancel;
    case 2425:
    case "ErrCommunityBuildNotSelfCannotCancel":
      return EErrorCode.ErrCommunityBuildNotSelfCannotCancel;
    case 2426:
    case "ErrCommunityNotBuildCannotAccelerate":
      return EErrorCode.ErrCommunityNotBuildCannotAccelerate;
    case 2427:
    case "ErrCommunityBuildNotSelfCannotAccelerate":
      return EErrorCode.ErrCommunityBuildNotSelfCannotAccelerate;
    case 2428:
    case "ErrCommunityBuildCannotAccelerate":
      return EErrorCode.ErrCommunityBuildCannotAccelerate;
    case 2429:
    case "ErrCommunityBuildAlreadyAccelerate":
      return EErrorCode.ErrCommunityBuildAlreadyAccelerate;
    case 2430:
    case "ErrCommunityBuildInDungeon":
      return EErrorCode.ErrCommunityBuildInDungeon;
    case 2431:
    case "ErrCommunityBuildRecipeIsLock":
      return EErrorCode.ErrCommunityBuildRecipeIsLock;
    case 2432:
    case "ErrCommunityBuildRecipeNotItemUnlock":
      return EErrorCode.ErrCommunityBuildRecipeNotItemUnlock;
    case 2433:
    case "ErrCommunityBuildInvalidCount":
      return EErrorCode.ErrCommunityBuildInvalidCount;
    case 2434:
    case "ErrCommunityNotBuildCannotReceive":
      return EErrorCode.ErrCommunityNotBuildCannotReceive;
    case 2435:
    case "ErrCommunityCanNotBuild":
      return EErrorCode.ErrCommunityCanNotBuild;
    case 2436:
    case "ErrHomeLandCohabitantLimit":
      return EErrorCode.ErrHomeLandCohabitantLimit;
    case 2437:
    case "ErrHomeLandRootNotQuitCohabitant":
      return EErrorCode.ErrHomeLandRootNotQuitCohabitant;
    case 2438:
    case "ErrHomeLandNotOwnerCannotQuitCohabitant":
      return EErrorCode.ErrHomeLandNotOwnerCannotQuitCohabitant;
    case 2439:
    case "ErrHomeLandCohabitantIsExiting":
      return EErrorCode.ErrHomeLandCohabitantIsExiting;
    case 2440:
    case "ErrHomeLandCohabitantNotExists":
      return EErrorCode.ErrHomeLandCohabitantNotExists;
    case 2441:
    case "ErrHomeLandCohabitantExitRequestExists":
      return EErrorCode.ErrHomeLandCohabitantExitRequestExists;
    case 2442:
    case "ErrHomeLandCohabitantDismiss":
      return EErrorCode.ErrHomeLandCohabitantDismiss;
    case 2443:
    case "ErrHomeLandNotInvitation":
      return EErrorCode.ErrHomeLandNotInvitation;
    case 2444:
    case "ErrHomeLandCohabitantInvitationTimeout":
      return EErrorCode.ErrHomeLandCohabitantInvitationTimeout;
    case 2445:
    case "ErrHomeLandCohabitantNotFriend":
      return EErrorCode.ErrHomeLandCohabitantNotFriend;
    case 2446:
    case "ErrHomeLandCohabitantFriendLevel":
      return EErrorCode.ErrHomeLandCohabitantFriendLevel;
    case 2447:
    case "ErrHomeLandCohabitantLevel":
      return EErrorCode.ErrHomeLandCohabitantLevel;
    case 2448:
    case "ErrHomeLandInviteCohabitantNotOwner":
      return EErrorCode.ErrHomeLandInviteCohabitantNotOwner;
    case 2451:
    case "ErrCommunityWarehouseGridFull":
      return EErrorCode.ErrCommunityWarehouseGridFull;
    case 2452:
    case "ErrCommunityWarehouseNoAuthority":
      return EErrorCode.ErrCommunityWarehouseNoAuthority;
    case 2453:
    case "ErrCommunityWarehouseGridPosItemNoEnough":
      return EErrorCode.ErrCommunityWarehouseGridPosItemNoEnough;
    case 2454:
    case "ErrHomeLandInsufficientFurniture":
      return EErrorCode.ErrHomeLandInsufficientFurniture;
    case 2455:
    case "ErrCommunityWarehouseTakeOutCountLimit":
      return EErrorCode.ErrCommunityWarehouseTakeOutCountLimit;
    case 2456:
    case "ErrHomeLandTaskNotExist":
      return EErrorCode.ErrHomeLandTaskNotExist;
    case 2457:
    case "ErrHomeLandTaskTimeNotEnough":
      return EErrorCode.ErrHomeLandTaskTimeNotEnough;
    case 2458:
    case "ErrHomeLandTaskAlreadyFinished":
      return EErrorCode.ErrHomeLandTaskAlreadyFinished;
    case 2459:
    case "ErrHomeLandTaskItemNotEnough":
      return EErrorCode.ErrHomeLandTaskItemNotEnough;
    case 2461:
    case "ErrHomeLandCurLevelError":
      return EErrorCode.ErrHomeLandCurLevelError;
    case 2462:
    case "ErrHomeLandExpNotEnough":
      return EErrorCode.ErrHomeLandExpNotEnough;
    case 2463:
    case "ErrHomeLandAlreadyMaxLevel":
      return EErrorCode.ErrHomeLandAlreadyMaxLevel;
    case 2464:
    case "ErrHomeLandLevelLocked":
      return EErrorCode.ErrHomeLandLevelLocked;
    case 2465:
    case "ErrHomeLandLevelConfigError":
      return EErrorCode.ErrHomeLandLevelConfigError;
    case 2466:
    case "ErrCommunityEditorNotEditable":
      return EErrorCode.ErrCommunityEditorNotEditable;
    case 2467:
    case "ErrCommunityEditorNotFurniture":
      return EErrorCode.ErrCommunityEditorNotFurniture;
    case 2468:
    case "ErrCommunityEditorNotOutdoor":
      return EErrorCode.ErrCommunityEditorNotOutdoor;
    case 2469:
    case "ErrCommunityEditorNotIndoor":
      return EErrorCode.ErrCommunityEditorNotIndoor;
    case 2470:
    case "ErrCommunityEditorOverMax":
      return EErrorCode.ErrCommunityEditorOverMax;
    case 2471:
    case "ErrCommunityEditorOverTypeMax":
      return EErrorCode.ErrCommunityEditorOverTypeMax;
    case 2472:
    case "ErrCommunityEditorFurnitureNotEnough":
      return EErrorCode.ErrCommunityEditorFurnitureNotEnough;
    case 2473:
    case "ErrCommunityEditorFurnitureNotExist":
      return EErrorCode.ErrCommunityEditorFurnitureNotExist;
    case 2474:
    case "ErrCommunityEditorOverMaxGroup":
      return EErrorCode.ErrCommunityEditorOverMaxGroup;
    case 2475:
    case "ErrCommunityEditorNoStructure":
      return EErrorCode.ErrCommunityEditorNoStructure;
    case 2476:
    case "ErrCommunityEditorGroupMaxStructure":
      return EErrorCode.ErrCommunityEditorGroupMaxStructure;
    case 2477:
    case "ErrCommunityEditorStructureInGroup":
      return EErrorCode.ErrCommunityEditorStructureInGroup;
    case 2478:
    case "ErrCommunityEditorGroupNotExist":
      return EErrorCode.ErrCommunityEditorGroupNotExist;
    case 2479:
    case "ErrCommunityEditorAlreadyExist":
      return EErrorCode.ErrCommunityEditorAlreadyExist;
    case 2481:
    case "ErrHomeLandSellItemNotExist":
      return EErrorCode.ErrHomeLandSellItemNotExist;
    case 2482:
    case "ErrHomeLandLeftNumNotEnough":
      return EErrorCode.ErrHomeLandLeftNumNotEnough;
    case 2483:
    case "ErrHomeLandSellShopLocked":
      return EErrorCode.ErrHomeLandSellShopLocked;
    case 2486:
    case "ErrHomeLandSeedExist":
      return EErrorCode.ErrHomeLandSeedExist;
    case 2487:
    case "ErrHomeLandItemNotOwner":
      return EErrorCode.ErrHomeLandItemNotOwner;
    case 2488:
    case "ErrHomeLandSeedStateError":
      return EErrorCode.ErrHomeLandSeedStateError;
    case 2489:
    case "ErrHomeLandNoSeed":
      return EErrorCode.ErrHomeLandNoSeed;
    case 2490:
    case "ErrHomeLandNoWater":
      return EErrorCode.ErrHomeLandNoWater;
    case 2491:
    case "ErrHomeLandFertilizerMaxNumLimit":
      return EErrorCode.ErrHomeLandFertilizerMaxNumLimit;
    case 2492:
    case "ErrHomeLandNotFertilize":
      return EErrorCode.ErrHomeLandNotFertilize;
    case 2493:
    case "ErrHomeLandNotPollen":
      return EErrorCode.ErrHomeLandNotPollen;
    case 2494:
    case "ErrHomeLandAlreadyPollen":
      return EErrorCode.ErrHomeLandAlreadyPollen;
    case 2495:
    case "ErrHomeLandNotHarvest":
      return EErrorCode.ErrHomeLandNotHarvest;
    case 2496:
    case "ErrHomeLandPickUpSinglePlayerLimit":
      return EErrorCode.ErrHomeLandPickUpSinglePlayerLimit;
    case 2497:
    case "ErrHomeLandPickUpTotalLimit":
      return EErrorCode.ErrHomeLandPickUpTotalLimit;
    case 2498:
    case "ErrHomeLandPickUpFlowerNotFinished":
      return EErrorCode.ErrHomeLandPickUpFlowerNotFinished;
    case 2499:
    case "ErrHomeLandPickUpOwner":
      return EErrorCode.ErrHomeLandPickUpOwner;
    case 2500:
    case "ErrHomeLandGainNotOwner":
      return EErrorCode.ErrHomeLandGainNotOwner;
    case 2501:
    case "ErrHomeLandItemFullGrid":
      return EErrorCode.ErrHomeLandItemFullGrid;
    case 2502:
    case "ErrHomeLandFurnitureFull":
      return EErrorCode.ErrHomeLandFurnitureFull;
    case 2503:
    case "ErrCommunityWarehouseNotBindOrCooldown":
      return EErrorCode.ErrCommunityWarehouseNotBindOrCooldown;
    case 2571:
    case "ErrComposeItemNotEnough":
      return EErrorCode.ErrComposeItemNotEnough;
    case 2572:
    case "ErrComposeFailed":
      return EErrorCode.ErrComposeFailed;
    case 2573:
    case "ErrRedemptionItemNotExist":
      return EErrorCode.ErrRedemptionItemNotExist;
    case 2574:
    case "ErrRedemptionItemMaxCount":
      return EErrorCode.ErrRedemptionItemMaxCount;
    case 2575:
    case "ErrRedemptionItemNotEnough":
      return EErrorCode.ErrRedemptionItemNotEnough;
    case 2576:
    case "ErrRedemptionItemGender":
      return EErrorCode.ErrRedemptionItemGender;
    case 2600:
    case "ErrAwardConfigNotFound":
      return EErrorCode.ErrAwardConfigNotFound;
    case 2601:
    case "ErrAwardConfigWeightError":
      return EErrorCode.ErrAwardConfigWeightError;
    case 2602:
    case "ErrAwardConfigLimitAndContentNotMatch":
      return EErrorCode.ErrAwardConfigLimitAndContentNotMatch;
    case 2603:
    case "ErrAwardConfigContentSizeError":
      return EErrorCode.ErrAwardConfigContentSizeError;
    case 2604:
    case "ErrAwardConfigContentRatesSizeError":
      return EErrorCode.ErrAwardConfigContentRatesSizeError;
    case 2605:
    case "ErrAwardConfigContentWeightSizeError":
      return EErrorCode.ErrAwardConfigContentWeightSizeError;
    case 2606:
    case "ErrAwardConfigGroupContentEmpty":
      return EErrorCode.ErrAwardConfigGroupContentEmpty;
    case 2607:
    case "ErrAwardConfigGroupNumEmpty":
      return EErrorCode.ErrAwardConfigGroupNumEmpty;
    case 2608:
    case "ErrAwardConfigGroupContentNoMatchGroupNum":
      return EErrorCode.ErrAwardConfigGroupContentNoMatchGroupNum;
    case 2609:
    case "ErrAwardConfigNoRandomDrop":
      return EErrorCode.ErrAwardConfigNoRandomDrop;
    case 2610:
    case "ErrAwardConfigNoSelectAward":
      return EErrorCode.ErrAwardConfigNoSelectAward;
    case 2611:
    case "ErrAwardConfigSelfSelectContentNoItem":
      return EErrorCode.ErrAwardConfigSelfSelectContentNoItem;
    case 2612:
    case "ErrAwardConfigWeightRateMustOne":
      return EErrorCode.ErrAwardConfigWeightRateMustOne;
    case 2613:
    case "ErrAwardConfigGroupContentRandomNoMatch":
      return EErrorCode.ErrAwardConfigGroupContentRandomNoMatch;
    case 2614:
    case "ErrAwardConfigGroupContentError":
      return EErrorCode.ErrAwardConfigGroupContentError;
    case 2615:
    case "ErrAwardConfigPackageContentRandomNoMatch":
      return EErrorCode.ErrAwardConfigPackageContentRandomNoMatch;
    case 2616:
    case "ErrAwardConfigLevelUpPackConfigPackageNoMatch":
      return EErrorCode.ErrAwardConfigLevelUpPackConfigPackageNoMatch;
    case 2617:
    case "ErrAwardConfigProItemRuleNoMatch":
      return EErrorCode.ErrAwardConfigProItemRuleNoMatch;
    case 2618:
    case "ErrAwardConfigPackageContentEmpty":
      return EErrorCode.ErrAwardConfigPackageContentEmpty;
    case 2619:
    case "ErrAwardConfigDropContentSize":
      return EErrorCode.ErrAwardConfigDropContentSize;
    case 2620:
    case "ErrAwardConfigDropContentNum":
      return EErrorCode.ErrAwardConfigDropContentNum;
    case 2621:
    case "ErrAwardConfigGroupRateEmpty":
      return EErrorCode.ErrAwardConfigGroupRateEmpty;
    case 2622:
    case "ErrAwardConfigGroupWeightEmpty":
      return EErrorCode.ErrAwardConfigGroupWeightEmpty;
    case 2623:
    case "ErrAwardInnerError":
      return EErrorCode.ErrAwardInnerError;
    case 2624:
    case "ErrAwardIllegalRandomType":
      return EErrorCode.ErrAwardIllegalRandomType;
    case 2625:
    case "ErrAwardConditionNoMeet":
      return EErrorCode.ErrAwardConditionNoMeet;
    case 2626:
    case "ErrAwardRandomTypeNone":
      return EErrorCode.ErrAwardRandomTypeNone;
    case 2627:
    case "ErrAwardRandomTypeNoMatch":
      return EErrorCode.ErrAwardRandomTypeNoMatch;
    case 2628:
    case "ErrAwardActorIsNull":
      return EErrorCode.ErrAwardActorIsNull;
    case 2629:
    case "ErrCounterUpToLimit":
      return EErrorCode.ErrCounterUpToLimit;
    case 2700:
    case "ErrEquipWashAttrNotExist":
      return EErrorCode.ErrEquipWashAttrNotExist;
    case 2701:
    case "ErrNotEquipInCombat":
      return EErrorCode.ErrNotEquipInCombat;
    case 2702:
    case "ErrEquipPart":
      return EErrorCode.ErrEquipPart;
    case 2750:
    case "ErrComposeItemNotExist":
      return EErrorCode.ErrComposeItemNotExist;
    case 2800:
    case "ErrPickupDropItemDistance":
      return EErrorCode.ErrPickupDropItemDistance;
    case 2801:
    case "ErrPickupDropItemPackageFull":
      return EErrorCode.ErrPickupDropItemPackageFull;
    case 2802:
    case "ErrPickupDropItemNoAuthority":
      return EErrorCode.ErrPickupDropItemNoAuthority;
    case 2851:
    case "ErrLayerActorExist":
      return EErrorCode.ErrLayerActorExist;
    case 2900:
    case "ErrTeamCreateHas":
      return EErrorCode.ErrTeamCreateHas;
    case 2901:
    case "ErrTeamIllTarget":
      return EErrorCode.ErrTeamIllTarget;
    case 2902:
    case "ErrTeamCreateTryLater":
      return EErrorCode.ErrTeamCreateTryLater;
    case 2903:
    case "ErrTeamGetNo":
      return EErrorCode.ErrTeamGetNo;
    case 2904:
    case "ErrTeamListEmpty":
      return EErrorCode.ErrTeamListEmpty;
    case 2905:
    case "ErrTeamInner":
      return EErrorCode.ErrTeamInner;
    case 2906:
    case "ErrTeamNoLeader":
      return EErrorCode.ErrTeamNoLeader;
    case 2907:
    case "ErrTeamInMatch":
      return EErrorCode.ErrTeamInMatch;
    case 2908:
    case "ErrTeamCustomizeTarget":
      return EErrorCode.ErrTeamCustomizeTarget;
    case 2909:
    case "ErrTeamNoOwn":
      return EErrorCode.ErrTeamNoOwn;
    case 2910:
    case "ErrTeamTickSelf":
      return EErrorCode.ErrTeamTickSelf;
    case 2911:
    case "ErrTeamNoMem":
      return EErrorCode.ErrTeamNoMem;
    case 2912:
    case "ErrTeamApplyingLeader":
      return EErrorCode.ErrTeamApplyingLeader;
    case 2913:
    case "ErrTeamHasBeLeader":
      return EErrorCode.ErrTeamHasBeLeader;
    case 2914:
    case "ErrTeamNoTransferSelf":
      return EErrorCode.ErrTeamNoTransferSelf;
    case 2915:
    case "ErrTeamNoLeaderTransfer":
      return EErrorCode.ErrTeamNoLeaderTransfer;
    case 2916:
    case "ErrTeamHasOwnTeam":
      return EErrorCode.ErrTeamHasOwnTeam;
    case 2917:
    case "ErrTeamNoExist":
      return EErrorCode.ErrTeamNoExist;
    case 2918:
    case "ErrTeamApplyInCD":
      return EErrorCode.ErrTeamApplyInCD;
    case 2919:
    case "ErrTeamApplyExpire":
      return EErrorCode.ErrTeamApplyExpire;
    case 2920:
    case "ErrTeamJoinOther":
      return EErrorCode.ErrTeamJoinOther;
    case 2921:
    case "ErrTeamMemMax":
      return EErrorCode.ErrTeamMemMax;
    case 2924:
    case "ErrTeamNoInvited":
      return EErrorCode.ErrTeamNoInvited;
    case 2925:
    case "ErrTeamIsMatching":
      return EErrorCode.ErrTeamIsMatching;
    case 2926:
    case "ErrTeamIllegalTag":
      return EErrorCode.ErrTeamIllegalTag;
    case 2927:
    case "ErrTeamNoMatching":
      return EErrorCode.ErrTeamNoMatching;
    case 2928:
    case "ErrTeamIllegalActivity":
      return EErrorCode.ErrTeamIllegalActivity;
    case 2929:
    case "ErrTeamInActivity":
      return EErrorCode.ErrTeamInActivity;
    case 2930:
    case "ErrTeamNoMeetCondition":
      return EErrorCode.ErrTeamNoMeetCondition;
    case 2931:
    case "ErrTeamWaitVoting":
      return EErrorCode.ErrTeamWaitVoting;
    case 2932:
    case "ErrTeamDoingActivity":
      return EErrorCode.ErrTeamDoingActivity;
    case 2933:
    case "ErrTeamNoInVoting":
      return EErrorCode.ErrTeamNoInVoting;
    case 2934:
    case "ErrTeamVoteEnd":
      return EErrorCode.ErrTeamVoteEnd;
    case 2935:
    case "ErrTeamHasVoted":
      return EErrorCode.ErrTeamHasVoted;
    case 2936:
    case "ErrTeamInviteCD":
      return EErrorCode.ErrTeamInviteCD;
    case 2937:
    case "ErrTeamApplyLeadCD":
      return EErrorCode.ErrTeamApplyLeadCD;
    case 2938:
    case "ErrTeamMoreMaxWorlds":
      return EErrorCode.ErrTeamMoreMaxWorlds;
    case 2939:
    case "ErrTeamValidApplyInfo":
      return EErrorCode.ErrTeamValidApplyInfo;
    case 2940:
    case "ErrTeamInMatchCancelCD":
      return EErrorCode.ErrTeamInMatchCancelCD;
    case 2941:
    case "ErrTeamMatchFinished":
      return EErrorCode.ErrTeamMatchFinished;
    case 2942:
    case "ErrTeamMatchWaitSec":
      return EErrorCode.ErrTeamMatchWaitSec;
    case 2943:
    case "ErrTeamMemWorldFull":
      return EErrorCode.ErrTeamMemWorldFull;
    case 2944:
    case "ErrTeamMemNotLeader":
      return EErrorCode.ErrTeamMemNotLeader;
    case 2945:
    case "ErrTeamLeaderNotStaticScene":
      return EErrorCode.ErrTeamLeaderNotStaticScene;
    case 2946:
    case "ErrTeamLeaderCallDoing":
      return EErrorCode.ErrTeamLeaderCallDoing;
    case 2947:
    case "ErrTeamIllegalCallOperator":
      return EErrorCode.ErrTeamIllegalCallOperator;
    case 2948:
    case "ErrTeamLeaderIllegalCallOperator":
      return EErrorCode.ErrTeamLeaderIllegalCallOperator;
    case 2949:
    case "ErrTeamNoMemCall":
      return EErrorCode.ErrTeamNoMemCall;
    case 2950:
    case "ErrTeamLeaderCallEnd":
      return EErrorCode.ErrTeamLeaderCallEnd;
    case 2951:
    case "ErrTeamSameScene":
      return EErrorCode.ErrTeamSameScene;
    case 2952:
    case "ErrTeamNotSameScene":
      return EErrorCode.ErrTeamNotSameScene;
    case 2953:
    case "ErrTeamMemTooMore":
      return EErrorCode.ErrTeamMemTooMore;
    case 2954:
    case "ErrTeamMemInDungeon":
      return EErrorCode.ErrTeamMemInDungeon;
    case 2955:
    case "ErrTeamMemTooLess":
      return EErrorCode.ErrTeamMemTooLess;
    case 2956:
    case "ErrTeamIllegalInviteType":
      return EErrorCode.ErrTeamIllegalInviteType;
    case 2957:
    case "ErrTeamMemberNotInScene":
      return EErrorCode.ErrTeamMemberNotInScene;
    case 2958:
    case "ErrTeamLeaderReadyCheckTimeNotReady":
      return EErrorCode.ErrTeamLeaderReadyCheckTimeNotReady;
    case 2959:
    case "ErrTeamExistDungeonCheck":
      return EErrorCode.ErrTeamExistDungeonCheck;
    case 2960:
    case "ErrTeamTargetMatchTalentLimit":
      return EErrorCode.ErrTeamTargetMatchTalentLimit;
    case 2961:
    case "ErrTeamEditGroupNotAllowed":
      return EErrorCode.ErrTeamEditGroupNotAllowed;
    case 2962:
    case "ErrTeamGroupNotExist":
      return EErrorCode.ErrTeamGroupNotExist;
    case 2963:
    case "ErrTeamTargetNoMatchMemberType":
      return EErrorCode.ErrTeamTargetNoMatchMemberType;
    case 2964:
    case "ErrTeamMemberInDungeon":
      return EErrorCode.ErrTeamMemberInDungeon;
    case 3000:
    case "ErrDecomposeItemNotExist":
      return EErrorCode.ErrDecomposeItemNotExist;
    case 3001:
    case "ErrDecomposeItemNotEnough":
      return EErrorCode.ErrDecomposeItemNotEnough;
    case 3002:
    case "ErrRefineEnergyNotEnough":
      return EErrorCode.ErrRefineEnergyNotEnough;
    case 3003:
    case "ErrRefineItemMaxCount":
      return EErrorCode.ErrRefineItemMaxCount;
    case 3004:
    case "ErrRefineItemNotExist":
      return EErrorCode.ErrRefineItemNotExist;
    case 3005:
    case "ErrRefineItemColumnNotUnlock":
      return EErrorCode.ErrRefineItemColumnNotUnlock;
    case 3006:
    case "ErrRefineItemColumnUnlock":
      return EErrorCode.ErrRefineItemColumnUnlock;
    case 3007:
    case "ErrRefineItemExist":
      return EErrorCode.ErrRefineItemExist;
    case 3008:
    case "ErrEnergyLimitMax":
      return EErrorCode.ErrEnergyLimitMax;
    case 3009:
    case "ErrRefineItemColumnNotEmpty":
      return EErrorCode.ErrRefineItemColumnNotEmpty;
    case 3056:
    case "ErrProfessionNotExist":
      return EErrorCode.ErrProfessionNotExist;
    case 3058:
    case "ErrModSlotNotUnlock":
      return EErrorCode.ErrModSlotNotUnlock;
    case 3065:
    case "ErrChangeProfessionStateFail":
      return EErrorCode.ErrChangeProfessionStateFail;
    case 3066:
    case "ErrChangeProfessionCDFail":
      return EErrorCode.ErrChangeProfessionCDFail;
    case 3071:
    case "ErrProfessionSkinNotActive":
      return EErrorCode.ErrProfessionSkinNotActive;
    case 3072:
    case "ErrProfessionSkinActive":
      return EErrorCode.ErrProfessionSkinActive;
    case 3073:
    case "ErrProfessionNotUseSkin":
      return EErrorCode.ErrProfessionNotUseSkin;
    case 3074:
    case "ErrProfessionSkillSkinActive":
      return EErrorCode.ErrProfessionSkillSkinActive;
    case 3075:
    case "ErrProfessionSkillSkinNotActive":
      return EErrorCode.ErrProfessionSkillSkinNotActive;
    case 3076:
    case "ErrProfessionSkillNotActive":
      return EErrorCode.ErrProfessionSkillNotActive;
    case 3101:
    case "ErrCharOffline":
      return EErrorCode.ErrCharOffline;
    case 3102:
    case "ErrUserDataBaseError":
      return EErrorCode.ErrUserDataBaseError;
    case 3103:
    case "ErrCharGetFail":
      return EErrorCode.ErrCharGetFail;
    case 3200:
    case "ErrAlreadyAlive":
      return EErrorCode.ErrAlreadyAlive;
    case 3201:
    case "ErrReviveParam":
      return EErrorCode.ErrReviveParam;
    case 3202:
    case "ErrStateIllegal":
      return EErrorCode.ErrStateIllegal;
    case 3203:
    case "ErrStateNoChange":
      return EErrorCode.ErrStateNoChange;
    case 3204:
    case "ErrReviveConsumeNotEnough":
      return EErrorCode.ErrReviveConsumeNotEnough;
    case 3205:
    case "ErrReviveByOtherForbid":
      return EErrorCode.ErrReviveByOtherForbid;
    case 3206:
    case "ErrReviveTimeNotArrived":
      return EErrorCode.ErrReviveTimeNotArrived;
    case 3207:
    case "ErrReviveBossBattle":
      return EErrorCode.ErrReviveBossBattle;
    case 3208:
    case "ErrReviveCountLimit":
      return EErrorCode.ErrReviveCountLimit;
    case 3209:
    case "ErrReviveInDeadTp":
      return EErrorCode.ErrReviveInDeadTp;
    case 3301:
    case "ErrDungeonPlayTypeError":
      return EErrorCode.ErrDungeonPlayTypeError;
    case 3302:
    case "ErrDungeonNotExist":
      return EErrorCode.ErrDungeonNotExist;
    case 3303:
    case "ErrDungeonCreateError":
      return EErrorCode.ErrDungeonCreateError;
    case 3304:
    case "ErrCantChangeDungeon":
      return EErrorCode.ErrCantChangeDungeon;
    case 3305:
    case "ErrDungeonLock":
      return EErrorCode.ErrDungeonLock;
    case 3306:
    case "ErrPioneerFail":
      return EErrorCode.ErrPioneerFail;
    case 3307:
    case "ErrAwardFail":
      return EErrorCode.ErrAwardFail;
    case 3308:
    case "ErrGsNotEnough":
      return EErrorCode.ErrGsNotEnough;
    case 3309:
    case "ErrQuestNotCompleted":
      return EErrorCode.ErrQuestNotCompleted;
    case 3310:
    case "ErrDungeonNotClear":
      return EErrorCode.ErrDungeonNotClear;
    case 3311:
    case "ErrConditionNotExist":
      return EErrorCode.ErrConditionNotExist;
    case 3312:
    case "ErrAwardReceived":
      return EErrorCode.ErrAwardReceived;
    case 3313:
    case "ErrCantRepeatedPlay":
      return EErrorCode.ErrCantRepeatedPlay;
    case 3314:
    case "ErrNeedPassPreRoom":
      return EErrorCode.ErrNeedPassPreRoom;
    case 3315:
    case "ErrDungeonEnterCountLimit":
      return EErrorCode.ErrDungeonEnterCountLimit;
    case 3316:
    case "ErrDungeonScoreError":
      return EErrorCode.ErrDungeonScoreError;
    case 3317:
    case "ErrDungeonRepeatedVote":
      return EErrorCode.ErrDungeonRepeatedVote;
    case 3318:
    case "ErrDungeonChallengeAwardState":
      return EErrorCode.ErrDungeonChallengeAwardState;
    case 3319:
    case "ErrDungeonChallengeAffixNotFound":
      return EErrorCode.ErrDungeonChallengeAffixNotFound;
    case 3320:
    case "ErrDungeonStateNotActive":
      return EErrorCode.ErrDungeonStateNotActive;
    case 3321:
    case "ErrDungeonCantVoteSelf":
      return EErrorCode.ErrDungeonCantVoteSelf;
    case 3322:
    case "ErrDungeonPlayerNotEnough":
      return EErrorCode.ErrDungeonPlayerNotEnough;
    case 3323:
    case "ErrDungeonPlayerFull":
      return EErrorCode.ErrDungeonPlayerFull;
    case 3324:
    case "ErrDungeonCantHeroKey":
      return EErrorCode.ErrDungeonCantHeroKey;
    case 3325:
    case "ErrDungeonNotSettlement":
      return EErrorCode.ErrDungeonNotSettlement;
    case 3326:
    case "ErrDungeonNotFindRollItem":
      return EErrorCode.ErrDungeonNotFindRollItem;
    case 3327:
    case "ErrDungeonCantRoll":
      return EErrorCode.ErrDungeonCantRoll;
    case 3328:
    case "ErrDungeonRollFinish":
      return EErrorCode.ErrDungeonRollFinish;
    case 3329:
    case "ErrDungeonSelectError":
      return EErrorCode.ErrDungeonSelectError;
    case 3330:
    case "ErrDungeonAiModeError":
      return EErrorCode.ErrDungeonAiModeError;
    case 3331:
    case "ErrDungeonTargetNotFinish":
      return EErrorCode.ErrDungeonTargetNotFinish;
    case 3332:
    case "ErrDungeonTargetBeAward":
      return EErrorCode.ErrDungeonTargetBeAward;
    case 3333:
    case "ErrDungeonSinglePlayerMore":
      return EErrorCode.ErrDungeonSinglePlayerMore;
    case 3334:
    case "ErrDungeonAiGroupNotEnough":
      return EErrorCode.ErrDungeonAiGroupNotEnough;
    case 3335:
    case "ErrDungeonNoPass":
      return EErrorCode.ErrDungeonNoPass;
    case 3336:
    case "ErrDungeonCloseSceneId":
      return EErrorCode.ErrDungeonCloseSceneId;
    case 3337:
    case "ErrDungeonEnterTypeError":
      return EErrorCode.ErrDungeonEnterTypeError;
    case 3338:
    case "ErrDungeonActorCount":
      return EErrorCode.ErrDungeonActorCount;
    case 3339:
    case "ErrDungeonDiffLocked":
      return EErrorCode.ErrDungeonDiffLocked;
    case 3340:
    case "ErrDungeonPreBattleVoteCd":
      return EErrorCode.ErrDungeonPreBattleVoteCd;
    case 3341:
    case "ErrDungeonBossInvalid":
      return EErrorCode.ErrDungeonBossInvalid;
    case 3342:
    case "ErrDungeonNoUser":
      return EErrorCode.ErrDungeonNoUser;
    case 3343:
    case "ErrDungeonUserInvalid":
      return EErrorCode.ErrDungeonUserInvalid;
    case 3344:
    case "ErrDungeonAwardualification":
      return EErrorCode.ErrDungeonAwardualification;
    case 3345:
    case "ErrDungeonAwardTriesLimit":
      return EErrorCode.ErrDungeonAwardTriesLimit;
    case 3401:
    case "ErrFashionIsLimit":
      return EErrorCode.ErrFashionIsLimit;
    case 3402:
    case "ErrFashionNotFound":
      return EErrorCode.ErrFashionNotFound;
    case 3403:
    case "ErrFashionSlotEmpty":
      return EErrorCode.ErrFashionSlotEmpty;
    case 3404:
    case "ErrFashionIDNotFound":
      return EErrorCode.ErrFashionIDNotFound;
    case 3405:
    case "ErrFashionLock":
      return EErrorCode.ErrFashionLock;
    case 3406:
    case "ErrFashCollectionAwardAlread":
      return EErrorCode.ErrFashCollectionAwardAlread;
    case 3407:
    case "ErrFashCollectionScoreNotEnough":
      return EErrorCode.ErrFashCollectionScoreNotEnough;
    case 3408:
    case "ErrFashCollectionAwardAlreadMonth":
      return EErrorCode.ErrFashCollectionAwardAlreadMonth;
    case 3409:
    case "ErrFashionAlreadUnlock":
      return EErrorCode.ErrFashionAlreadUnlock;
    case 3410:
    case "ErrFashionAdvanceNotExist":
      return EErrorCode.ErrFashionAdvanceNotExist;
    case 3411:
    case "ErrFashionBaseNotUnlock":
      return EErrorCode.ErrFashionBaseNotUnlock;
    case 3412:
    case "ErrFashionAdvanceAlreadyUnlock":
      return EErrorCode.ErrFashionAdvanceAlreadyUnlock;
    case 3501:
    case "ErrCameraNoExistAlbum":
      return EErrorCode.ErrCameraNoExistAlbum;
    case 3502:
    case "ErrCameraBeyondPhotoNum":
      return EErrorCode.ErrCameraBeyondPhotoNum;
    case 3503:
    case "ErrCameraBeyondAlumNum":
      return EErrorCode.ErrCameraBeyondAlumNum;
    case 3504:
    case "ErrCameraNoAccessRight":
      return EErrorCode.ErrCameraNoAccessRight;
    case 3505:
    case "ErrCameraNoExistPhoto":
      return EErrorCode.ErrCameraNoExistPhoto;
    case 3506:
    case "ErrCameraBeyondWordNum":
      return EErrorCode.ErrCameraBeyondWordNum;
    case 3507:
    case "ErrCameraPhotoNoInAlbum":
      return EErrorCode.ErrCameraPhotoNoInAlbum;
    case 3508:
    case "ErrCameraInnerError":
      return EErrorCode.ErrCameraInnerError;
    case 3509:
    case "ErrCameraIllegalRight":
      return EErrorCode.ErrCameraIllegalRight;
    case 3510:
    case "ErrCameraNoExistChar":
      return EErrorCode.ErrCameraNoExistChar;
    case 3511:
    case "ErrCameraNoDelCloudAlbum":
      return EErrorCode.ErrCameraNoDelCloudAlbum;
    case 3512:
    case "ErrCameraBeyondMaxURlLen":
      return EErrorCode.ErrCameraBeyondMaxURlLen;
    case 3513:
    case "ErrCameraBeyondMaxXMLLen":
      return EErrorCode.ErrCameraBeyondMaxXMLLen;
    case 3514:
    case "ErrCameraBeyondMaxNameLen":
      return EErrorCode.ErrCameraBeyondMaxNameLen;
    case 3515:
    case "ErrCameraIllegalUrl":
      return EErrorCode.ErrCameraIllegalUrl;
    case 3516:
    case "ErrCameraRenderInfoEmpty":
      return EErrorCode.ErrCameraRenderInfoEmpty;
    case 3517:
    case "ErrCameraBeyondPhotoMaxSize":
      return EErrorCode.ErrCameraBeyondPhotoMaxSize;
    case 3518:
    case "ErrCameraIllegalPictureType":
      return EErrorCode.ErrCameraIllegalPictureType;
    case 3519:
    case "ErrCameraTypeRepeated":
      return EErrorCode.ErrCameraTypeRepeated;
    case 3520:
    case "ErrCameraWithoutOriginal":
      return EErrorCode.ErrCameraWithoutOriginal;
    case 3521:
    case "ErrCameraWithoutThumbnailOrRender":
      return EErrorCode.ErrCameraWithoutThumbnailOrRender;
    case 3522:
    case "ErrCameraPhotoNameEmpty":
      return EErrorCode.ErrCameraPhotoNameEmpty;
    case 3523:
    case "ErrCameraPhotoNameOutMaxLen":
      return EErrorCode.ErrCameraPhotoNameOutMaxLen;
    case 3524:
    case "ErrCameraAlbumNameEmpty":
      return EErrorCode.ErrCameraAlbumNameEmpty;
    case 3525:
    case "ErrCameraPhotoHasDel":
      return EErrorCode.ErrCameraPhotoHasDel;
    case 3526:
    case "ErrCameraSysInnerError":
      return EErrorCode.ErrCameraSysInnerError;
    case 3527:
    case "ErrCameraIllegalPictureId":
      return EErrorCode.ErrCameraIllegalPictureId;
    case 3528:
    case "ErrCameraBeyondMaxExtraLen":
      return EErrorCode.ErrCameraBeyondMaxExtraLen;
    case 3529:
    case "ErrCameraNoIncludeOriginal":
      return EErrorCode.ErrCameraNoIncludeOriginal;
    case 3530:
    case "ErrCameraNoDealingPhoto":
      return EErrorCode.ErrCameraNoDealingPhoto;
    case 3531:
    case "ErrCameraNoDealingPhotoType":
      return EErrorCode.ErrCameraNoDealingPhotoType;
    case 3532:
    case "ErrCameraNoAnyAlbum":
      return EErrorCode.ErrCameraNoAnyAlbum;
    case 3533:
    case "ErrCameraNoPassReview":
      return EErrorCode.ErrCameraNoPassReview;
    case 3534:
    case "ErrCameraPhotoMissImage":
      return EErrorCode.ErrCameraPhotoMissImage;
    case 3535:
    case "ErrCameraWithoutThumbnail":
      return EErrorCode.ErrCameraWithoutThumbnail;
    case 3536:
    case "ErrCameraBeyondMaxUploadTimes":
      return EErrorCode.ErrCameraBeyondMaxUploadTimes;
    case 3601:
    case "ErrInvalidLifeProfessionId":
      return EErrorCode.ErrInvalidLifeProfessionId;
    case 3602:
    case "ErrLifeProfessionIsUnlock":
      return EErrorCode.ErrLifeProfessionIsUnlock;
    case 3603:
    case "ErrLifeProfessionMaxLevel":
      return EErrorCode.ErrLifeProfessionMaxLevel;
    case 3604:
    case "ErrLifeProfessionLevelNotEnough":
      return EErrorCode.ErrLifeProfessionLevelNotEnough;
    case 3605:
    case "ErrLifeProfessionLevelRewardGot":
      return EErrorCode.ErrLifeProfessionLevelRewardGot;
    case 3606:
    case "ErrInvalidLifeProfessionSpecializationId":
      return EErrorCode.ErrInvalidLifeProfessionSpecializationId;
    case 3607:
    case "ErrLifeProfessionSpecializationNotEnough":
      return EErrorCode.ErrLifeProfessionSpecializationNotEnough;
    case 3608:
    case "ErrLifeProfessionSpecializationUpgradeError":
      return EErrorCode.ErrLifeProfessionSpecializationUpgradeError;
    case 3609:
    case "ErrLifeProfessionPointNotEnough":
      return EErrorCode.ErrLifeProfessionPointNotEnough;
    case 3610:
    case "ErrInvalidLifeProfessionTargetId":
      return EErrorCode.ErrInvalidLifeProfessionTargetId;
    case 3611:
    case "ErrLifeProfessionTargetNotEnough":
      return EErrorCode.ErrLifeProfessionTargetNotEnough;
    case 3612:
    case "ErrLifeProfessionRewardCanNotGet":
      return EErrorCode.ErrLifeProfessionRewardCanNotGet;
    case 3613:
    case "ErrLifeProfessionEnergyChange":
      return EErrorCode.ErrLifeProfessionEnergyChange;
    case 3614:
    case "ErrLifeProfessionRecipeIsUnlock":
      return EErrorCode.ErrLifeProfessionRecipeIsUnlock;
    case 3615:
    case "ErrLifeProfessionRecipeNotExist":
      return EErrorCode.ErrLifeProfessionRecipeNotExist;
    case 3616:
    case "ErrLifeProfessionRecipeNotUnlock":
      return EErrorCode.ErrLifeProfessionRecipeNotUnlock;
    case 3617:
    case "ErrLifeProfessionMaxRDRecipeCount":
      return EErrorCode.ErrLifeProfessionMaxRDRecipeCount;
    case 3618:
    case "ErrLifeProfessionWorkingNotEnd":
      return EErrorCode.ErrLifeProfessionWorkingNotEnd;
    case 3619:
    case "ErrLifeProfessionAlreadyWorking":
      return EErrorCode.ErrLifeProfessionAlreadyWorking;
    case 3620:
    case "ErrLifeProfessionNotWorking":
      return EErrorCode.ErrLifeProfessionNotWorking;
    case 3621:
    case "ErrLifeProfessionWorkingIsEnd":
      return EErrorCode.ErrLifeProfessionWorkingIsEnd;
    case 3622:
    case "ErrLifeProfessionUnActiveSpecialization":
      return EErrorCode.ErrLifeProfessionUnActiveSpecialization;
    case 4001:
    case "ErrCurLevelConfigNotExist":
      return EErrorCode.ErrCurLevelConfigNotExist;
    case 4002:
    case "ErrNeedBreakthrough":
      return EErrorCode.ErrNeedBreakthrough;
    case 4003:
    case "ErrExperienceConfigNotExist":
      return EErrorCode.ErrExperienceConfigNotExist;
    case 4004:
    case "ErrExperienceMismatch":
      return EErrorCode.ErrExperienceMismatch;
    case 4005:
    case "ErrNotNeedToBreakthrough":
      return EErrorCode.ErrNotNeedToBreakthrough;
    case 4006:
    case "ErrConsumeConfigError":
      return EErrorCode.ErrConsumeConfigError;
    case 4007:
    case "ErrSkillNotExist":
      return EErrorCode.ErrSkillNotExist;
    case 4008:
    case "ErrSkillLevelMax":
      return EErrorCode.ErrSkillLevelMax;
    case 4009:
    case "ErrSkillLevelNotExist":
      return EErrorCode.ErrSkillLevelNotExist;
    case 4010:
    case "ErrSkillConfigError":
      return EErrorCode.ErrSkillConfigError;
    case 4011:
    case "ErrStarNotExist":
      return EErrorCode.ErrStarNotExist;
    case 4012:
    case "ErrMaxStar":
      return EErrorCode.ErrMaxStar;
    case 4013:
    case "ErrMaxLevel":
      return EErrorCode.ErrMaxLevel;
    case 4014:
    case "ErrSkillLevelNotEnough":
      return EErrorCode.ErrSkillLevelNotEnough;
    case 4051:
    case "ErrCanNotChangeActionState":
      return EErrorCode.ErrCanNotChangeActionState;
    case 4052:
    case "ErrActionNotExist":
      return EErrorCode.ErrActionNotExist;
    case 4053:
    case "ErrIsInteracting":
      return EErrorCode.ErrIsInteracting;
    case 4054:
    case "ErrState":
      return EErrorCode.ErrState;
    case 4055:
    case "ErrRequestExpired":
      return EErrorCode.ErrRequestExpired;
    case 4071:
    case "ErrStateSetFailed":
      return EErrorCode.ErrStateSetFailed;
    case 4072:
    case "ErrCollectIdError":
      return EErrorCode.ErrCollectIdError;
    case 4073:
    case "ErrCollectStateFailed":
      return EErrorCode.ErrCollectStateFailed;
    case 4074:
    case "ErrCollectActorErr":
      return EErrorCode.ErrCollectActorErr;
    case 4075:
    case "ErrCollectOutRange":
      return EErrorCode.ErrCollectOutRange;
    case 4076:
    case "ErrCollectConditionEquip":
      return EErrorCode.ErrCollectConditionEquip;
    case 4077:
    case "ErrCollectConditionQuest":
      return EErrorCode.ErrCollectConditionQuest;
    case 4078:
    case "ErrAlreadyCollected":
      return EErrorCode.ErrAlreadyCollected;
    case 4101:
    case "ErrMailGetFailed":
      return EErrorCode.ErrMailGetFailed;
    case 4102:
    case "ErrMailIllegality":
      return EErrorCode.ErrMailIllegality;
    case 4103:
    case "ErrMailIsGet":
      return EErrorCode.ErrMailIsGet;
    case 4104:
    case "ErrMailIsDel":
      return EErrorCode.ErrMailIsDel;
    case 4105:
    case "ErrMailAcceptorEmpty":
      return EErrorCode.ErrMailAcceptorEmpty;
    case 4106:
    case "ErrMailTokenInvalid":
      return EErrorCode.ErrMailTokenInvalid;
    case 4201:
    case "ErrUnRegisterType":
      return EErrorCode.ErrUnRegisterType;
    case 4202:
    case "ErrIndexNotFound":
      return EErrorCode.ErrIndexNotFound;
    case 4203:
    case "ErrCantOpenTreasureBox":
      return EErrorCode.ErrCantOpenTreasureBox;
    case 4204:
    case "ErrPersonalStateEnd":
      return EErrorCode.ErrPersonalStateEnd;
    case 4205:
    case "ErrPersonalObjectStatus":
      return EErrorCode.ErrPersonalObjectStatus;
    case 4301:
    case "ErrExp":
      return EErrorCode.ErrExp;
    case 4302:
    case "ErrLevel":
      return EErrorCode.ErrLevel;
    case 4303:
    case "ErrAward":
      return EErrorCode.ErrAward;
    case 4304:
    case "ErrReceivedLevelAward":
      return EErrorCode.ErrReceivedLevelAward;
    case 4305:
    case "ErrLevelNotEnough":
      return EErrorCode.ErrLevelNotEnough;
    case 4306:
    case "ErrRoleLevelNoRewards":
      return EErrorCode.ErrRoleLevelNoRewards;
    case 4401:
    case "ErrUnionNotHaveLimit":
      return EErrorCode.ErrUnionNotHaveLimit;
    case 4402:
    case "ErrUnionIsNotMember":
      return EErrorCode.ErrUnionIsNotMember;
    case 4403:
    case "ErrUnionOfficialNotExits":
      return EErrorCode.ErrUnionOfficialNotExits;
    case 4404:
    case "ErrUnionOfficialTooMany":
      return EErrorCode.ErrUnionOfficialTooMany;
    case 4405:
    case "ErrUnionHas":
      return EErrorCode.ErrUnionHas;
    case 4406:
    case "ErrUnionReqCd":
      return EErrorCode.ErrUnionReqCd;
    case 4407:
    case "ErrUnionReqHas":
      return EErrorCode.ErrUnionReqHas;
    case 4408:
    case "ErrUnionFull":
      return EErrorCode.ErrUnionFull;
    case 4409:
    case "ErrUnionFailed":
      return EErrorCode.ErrUnionFailed;
    case 4410:
    case "ErrUnionNameWrongful":
      return EErrorCode.ErrUnionNameWrongful;
    case 4411:
    case "ErrUnionNameUsed":
      return EErrorCode.ErrUnionNameUsed;
    case 4412:
    case "ErrUnionNameOccupied":
      return EErrorCode.ErrUnionNameOccupied;
    case 4415:
    case "ErrApplyMax":
      return EErrorCode.ErrApplyMax;
    case 4416:
    case "ErrUnionChangeNameCD":
      return EErrorCode.ErrUnionChangeNameCD;
    case 4417:
    case "ErrUnionNameSizeError":
      return EErrorCode.ErrUnionNameSizeError;
    case 4418:
    case "ErrDeclarationSize":
      return EErrorCode.ErrDeclarationSize;
    case 4419:
    case "ErrDeclarationError":
      return EErrorCode.ErrDeclarationError;
    case 4420:
    case "ErrOfficialNameRepeat":
      return EErrorCode.ErrOfficialNameRepeat;
    case 4421:
    case "ErrDeclarationCd":
      return EErrorCode.ErrDeclarationCd;
    case 4422:
    case "ErrUnionInfoCd":
      return EErrorCode.ErrUnionInfoCd;
    case 4423:
    case "ErrUnionNotExist":
      return EErrorCode.ErrUnionNotExist;
    case 4424:
    case "ErrUnionIllegalConditionType":
      return EErrorCode.ErrUnionIllegalConditionType;
    case 4425:
    case "ErrUnionRecruitSloganTooLong":
      return EErrorCode.ErrUnionRecruitSloganTooLong;
    case 4426:
    case "ErrUnionRecruitDescriptionTooLong":
      return EErrorCode.ErrUnionRecruitDescriptionTooLong;
    case 4427:
    case "ErrUnionCreateTooOften":
      return EErrorCode.ErrUnionCreateTooOften;
    case 4428:
    case "ErrUnionTagNoExist":
      return EErrorCode.ErrUnionTagNoExist;
    case 4429:
    case "ErrUnionIconTooMuch":
      return EErrorCode.ErrUnionIconTooMuch;
    case 4430:
    case "ErrUnionGetListCd":
      return EErrorCode.ErrUnionGetListCd;
    case 4431:
    case "ErrUnionBatchSearchUnionIdsTooMuch":
      return EErrorCode.ErrUnionBatchSearchUnionIdsTooMuch;
    case 4432:
    case "ErrUnionBatchSearchCd":
      return EErrorCode.ErrUnionBatchSearchCd;
    case 4433:
    case "ErrUnionGetCollectedIdsCd":
      return EErrorCode.ErrUnionGetCollectedIdsCd;
    case 4434:
    case "ErrUnionBeyondMaxCollectedNum":
      return EErrorCode.ErrUnionBeyondMaxCollectedNum;
    case 4435:
    case "ErrUnionIdHasCollected":
      return EErrorCode.ErrUnionIdHasCollected;
    case 4436:
    case "ErrUnionIdNoCollected":
      return EErrorCode.ErrUnionIdNoCollected;
    case 4437:
    case "ErrUnionActiveValueNotEnough":
      return EErrorCode.ErrUnionActiveValueNotEnough;
    case 4438:
    case "ErrUnionIllegalActiveId":
      return EErrorCode.ErrUnionIllegalActiveId;
    case 4439:
    case "ErrUnionTooShortForAwards":
      return EErrorCode.ErrUnionTooShortForAwards;
    case 4440:
    case "ErrUnionHasActiveAwards":
      return EErrorCode.ErrUnionHasActiveAwards;
    case 4441:
    case "ErrUnionNoJoin":
      return EErrorCode.ErrUnionNoJoin;
    case 4442:
    case "ErrUnionOnlyEnterSelf":
      return EErrorCode.ErrUnionOnlyEnterSelf;
    case 4443:
    case "ErrUnionNoUnlockScene":
      return EErrorCode.ErrUnionNoUnlockScene;
    case 4444:
    case "ErrUnionBuildingMaxLevel":
      return EErrorCode.ErrUnionBuildingMaxLevel;
    case 4445:
    case "ErrUnionBuildingUpgrading":
      return EErrorCode.ErrUnionBuildingUpgrading;
    case 4446:
    case "ErrUnionBuildingUpgradeNoFinish":
      return EErrorCode.ErrUnionBuildingUpgradeNoFinish;
    case 4447:
    case "ErrUnionPrefixBuildNoMeet":
      return EErrorCode.ErrUnionPrefixBuildNoMeet;
    case 4448:
    case "ErrUnionExperienceNoEnough":
      return EErrorCode.ErrUnionExperienceNoEnough;
    case 4449:
    case "ErrUnionMoneyNoEnough":
      return EErrorCode.ErrUnionMoneyNoEnough;
    case 4450:
    case "ErrUnionBuildingNoUpgrading":
      return EErrorCode.ErrUnionBuildingNoUpgrading;
    case 4451:
    case "ErrUnionSpeedUpItemNoEnough":
      return EErrorCode.ErrUnionSpeedUpItemNoEnough;
    case 4452:
    case "ErrUnionSpeedUpTimesOut":
      return EErrorCode.ErrUnionSpeedUpTimesOut;
    case 4453:
    case "ErrUnionTryLater":
      return EErrorCode.ErrUnionTryLater;
    case 4454:
    case "ErrUnionSpeedUpLevelError":
      return EErrorCode.ErrUnionSpeedUpLevelError;
    case 4455:
    case "ErrUnionUpgradeHasCompleted":
      return EErrorCode.ErrUnionUpgradeHasCompleted;
    case 4456:
    case "ErrUnionIllegalBuildIdLv":
      return EErrorCode.ErrUnionIllegalBuildIdLv;
    case 4457:
    case "ErrUnionBeyMaxCount":
      return EErrorCode.ErrUnionBeyMaxCount;
    case 4458:
    case "ErrUnionUserNoApply":
      return EErrorCode.ErrUnionUserNoApply;
    case 4459:
    case "ErrUnionNoOneKeyNoMuch":
      return EErrorCode.ErrUnionNoOneKeyNoMuch;
    case 4460:
    case "ErrUnionActivityNotStart":
      return EErrorCode.ErrUnionActivityNotStart;
    case 4461:
    case "ErrUnionActivityNotProgress":
      return EErrorCode.ErrUnionActivityNotProgress;
    case 4462:
    case "ErrUnionActivityAwardGet":
      return EErrorCode.ErrUnionActivityAwardGet;
    case 4463:
    case "ErrUnionActivityNotEnjoy":
      return EErrorCode.ErrUnionActivityNotEnjoy;
    case 4464:
    case "ErrUnionCreateTimeTooShort":
      return EErrorCode.ErrUnionCreateTimeTooShort;
    case 4465:
    case "ErrUnionFunctionLock":
      return EErrorCode.ErrUnionFunctionLock;
    case 4466:
    case "ErrUnionEScreenLock":
      return EErrorCode.ErrUnionEScreenLock;
    case 4467:
    case "ErrUnionEScreenPositionLock":
      return EErrorCode.ErrUnionEScreenPositionLock;
    case 4468:
    case "ErrUnionEScreenNoSet":
      return EErrorCode.ErrUnionEScreenNoSet;
    case 4469:
    case "ErrUnionEScreenPositionNoSet":
      return EErrorCode.ErrUnionEScreenPositionNoSet;
    case 4470:
    case "ErrUnionEffectGridLock":
      return EErrorCode.ErrUnionEffectGridLock;
    case 4471:
    case "ErrUnionEffectIdLock":
      return EErrorCode.ErrUnionEffectIdLock;
    case 4472:
    case "ErrUnionEffectPosNoSet":
      return EErrorCode.ErrUnionEffectPosNoSet;
    case 4473:
    case "ErrUnionEffectPosHasEnd":
      return EErrorCode.ErrUnionEffectPosHasEnd;
    case 4474:
    case "ErrUnionCrowFuncHasEnd":
      return EErrorCode.ErrUnionCrowFuncHasEnd;
    case 4475:
    case "ErrUnionCrowFuncPosHasUsed":
      return EErrorCode.ErrUnionCrowFuncPosHasUsed;
    case 4476:
    case "ErrUnionCrowFuncHasJoined":
      return EErrorCode.ErrUnionCrowFuncHasJoined;
    case 4477:
    case "ErrUnionCrowFuncNoBegin":
      return EErrorCode.ErrUnionCrowFuncNoBegin;
    case 4478:
    case "ErrUnionNoFinishBaseBuilding":
      return EErrorCode.ErrUnionNoFinishBaseBuilding;
    case 4479:
    case "ErrUnionCrowFuncIllegalFuncPos":
      return EErrorCode.ErrUnionCrowFuncIllegalFuncPos;
    case 4480:
    case "ErrUnionEScreenBeyondMaxTimes":
      return EErrorCode.ErrUnionEScreenBeyondMaxTimes;
    case 4481:
    case "ErrUnionTargetFunctionLock":
      return EErrorCode.ErrUnionTargetFunctionLock;
    case 4482:
    case "ErrUnionNoMeet":
      return EErrorCode.ErrUnionNoMeet;
    case 4483:
    case "ErrUnionActivityAwardCd":
      return EErrorCode.ErrUnionActivityAwardCd;
    case 4484:
    case "ErrUnionManagerNoKicked":
      return EErrorCode.ErrUnionManagerNoKicked;
    case 4485:
    case "ErrUnionDanceNoBegin":
      return EErrorCode.ErrUnionDanceNoBegin;
    case 4486:
    case "ErrUnionDanceEnd":
      return EErrorCode.ErrUnionDanceEnd;
    case 4487:
    case "ErrUnionDanceDrawnBox":
      return EErrorCode.ErrUnionDanceDrawnBox;
    case 4488:
    case "ErrUnionDanceBoxDrawn":
      return EErrorCode.ErrUnionDanceBoxDrawn;
    case 4489:
    case "ErrUnionDanceNoDanceId":
      return EErrorCode.ErrUnionDanceNoDanceId;
    case 4490:
    case "ErrUnionNoJoinDance":
      return EErrorCode.ErrUnionNoJoinDance;
    case 4491:
    case "ErrUnionDanceNoDancing":
      return EErrorCode.ErrUnionDanceNoDancing;
    case 4492:
    case "ErrUnionRejectInvite":
      return EErrorCode.ErrUnionRejectInvite;
    case 4493:
    case "ErrUnionActivityHuntEnd":
      return EErrorCode.ErrUnionActivityHuntEnd;
    case 4494:
    case "ErrUnionApplyListFull":
      return EErrorCode.ErrUnionApplyListFull;
    case 4495:
    case "ErrUionApplyListExist":
      return EErrorCode.ErrUionApplyListExist;
    case 4496:
    case "ErrUnionGroupIvalid":
      return EErrorCode.ErrUnionGroupIvalid;
    case 4501:
    case "ErrRepeatedRequest":
      return EErrorCode.ErrRepeatedRequest;
    case 4502:
    case "ErrHasBeenBlackened":
      return EErrorCode.ErrHasBeenBlackened;
    case 4503:
    case "ErrNotFoundCharInfo":
      return EErrorCode.ErrNotFoundCharInfo;
    case 4504:
    case "ErrInner":
      return EErrorCode.ErrInner;
    case 4505:
    case "ErrParam":
      return EErrorCode.ErrParam;
    case 4506:
    case "ErrSetShowPicture":
      return EErrorCode.ErrSetShowPicture;
    case 4507:
    case "ErrSetSignature":
      return EErrorCode.ErrSetSignature;
    case 4508:
    case "ErrSetHobbyMark":
      return EErrorCode.ErrSetHobbyMark;
    case 4509:
    case "ErrSetTimeMark":
      return EErrorCode.ErrSetTimeMark;
    case 4510:
    case "ErrSetRemind":
      return EErrorCode.ErrSetRemind;
    case 4511:
    case "ErrSetTop":
      return EErrorCode.ErrSetTop;
    case 4512:
    case "ErrAddFriend":
      return EErrorCode.ErrAddFriend;
    case 4513:
    case "ErrSetProcessed":
      return EErrorCode.ErrSetProcessed;
    case 4514:
    case "ErrSetRemark":
      return EErrorCode.ErrSetRemark;
    case 4515:
    case "ErrDeleteFriend":
      return EErrorCode.ErrDeleteFriend;
    case 4516:
    case "ErrNotFoundGroup":
      return EErrorCode.ErrNotFoundGroup;
    case 4517:
    case "ErrNotExistInGroup":
      return EErrorCode.ErrNotExistInGroup;
    case 4518:
    case "ErrChangeGroup":
      return EErrorCode.ErrChangeGroup;
    case 4519:
    case "ErrPersonalState":
      return EErrorCode.ErrPersonalState;
    case 4520:
    case "ErrOtherFriendMax":
      return EErrorCode.ErrOtherFriendMax;
    case 4521:
    case "ErrCurFriendMax":
      return EErrorCode.ErrCurFriendMax;
    case 4522:
    case "ErrConfig":
      return EErrorCode.ErrConfig;
    case 4523:
    case "ErrAlreadyFriend":
      return EErrorCode.ErrAlreadyFriend;
    case 4524:
    case "ErrSearchSelf":
      return EErrorCode.ErrSearchSelf;
    case 4525:
    case "ErrSuggestionCd":
      return EErrorCode.ErrSuggestionCd;
    case 4526:
    case "ErrGroupMax":
      return EErrorCode.ErrGroupMax;
    case 4527:
    case "ErrGroupNotExist":
      return EErrorCode.ErrGroupNotExist;
    case 4528:
    case "ErrGroupNameEmpty":
      return EErrorCode.ErrGroupNameEmpty;
    case 4529:
    case "ErrIllegalCharacter":
      return EErrorCode.ErrIllegalCharacter;
    case 4530:
    case "ErrStringMax":
      return EErrorCode.ErrStringMax;
    case 4531:
    case "ErrOtherApplicationMax":
      return EErrorCode.ErrOtherApplicationMax;
    case 4532:
    case "ErrFriendlinessAwardHasRecord":
      return EErrorCode.ErrFriendlinessAwardHasRecord;
    case 4533:
    case "ErrFriendlinessLevelLowAwardLevel":
      return EErrorCode.ErrFriendlinessLevelLowAwardLevel;
    case 4534:
    case "ErrFriendBeyondAllFriendNum":
      return EErrorCode.ErrFriendBeyondAllFriendNum;
    case 4535:
    case "ErrFriendIsNoUserFriend":
      return EErrorCode.ErrFriendIsNoUserFriend;
    case 4536:
    case "ErrFriendlinessIllegalAwardLevel":
      return EErrorCode.ErrFriendlinessIllegalAwardLevel;
    case 4537:
    case "ErrFriendlinessLevelAwardIsEmpty":
      return EErrorCode.ErrFriendlinessLevelAwardIsEmpty;
    case 4538:
    case "ErrFriendBeBlackenedByTarget":
      return EErrorCode.ErrFriendBeBlackenedByTarget;
    case 4539:
    case "ErrFriendApplyEachOther":
      return EErrorCode.ErrFriendApplyEachOther;
    case 4540:
    case "ErrFriendCallBySmallerCharId":
      return EErrorCode.ErrFriendCallBySmallerCharId;
    case 4541:
    case "ErrFriendCallByBiggerCharId":
      return EErrorCode.ErrFriendCallByBiggerCharId;
    case 4542:
    case "ErrFriendBeBlackenedBySmaller":
      return EErrorCode.ErrFriendBeBlackenedBySmaller;
    case 4543:
    case "ErrFriendBeBlackenedByBigger":
      return EErrorCode.ErrFriendBeBlackenedByBigger;
    case 4544:
    case "ErrFriendNoApply":
      return EErrorCode.ErrFriendNoApply;
    case 4545:
    case "ErrFriendApplySelf":
      return EErrorCode.ErrFriendApplySelf;
    case 4546:
    case "ErrUserNameFormat":
      return EErrorCode.ErrUserNameFormat;
    case 4547:
    case "ErrFriendGetBaseTooOften":
      return EErrorCode.ErrFriendGetBaseTooOften;
    case 4548:
    case "ErrFriendOnlyGetSelfBaseInfo":
      return EErrorCode.ErrFriendOnlyGetSelfBaseInfo;
    case 4601:
    case "ErrActorGetFailed":
      return EErrorCode.ErrActorGetFailed;
    case 4602:
    case "ErrPivotIsActive":
      return EErrorCode.ErrPivotIsActive;
    case 4603:
    case "ErrPivotIsNotActive":
      return EErrorCode.ErrPivotIsNotActive;
    case 4604:
    case "ErrBreakPointIsGet":
      return EErrorCode.ErrBreakPointIsGet;
    case 4605:
    case "ErrActorIsNotPivot":
      return EErrorCode.ErrActorIsNotPivot;
    case 4606:
    case "ErrActorIsNotBreakPoint":
      return EErrorCode.ErrActorIsNotBreakPoint;
    case 4607:
    case "ErrActorIsBreakPointNotFull":
      return EErrorCode.ErrActorIsBreakPointNotFull;
    case 4608:
    case "ErrPivotRewardIsGiven":
      return EErrorCode.ErrPivotRewardIsGiven;
    case 4609:
    case "ErrNotInsight":
      return EErrorCode.ErrNotInsight;
    case 4651:
    case "ErrLearnSkillFail":
      return EErrorCode.ErrLearnSkillFail;
    case 4652:
    case "ErrRemoveSkillFail":
      return EErrorCode.ErrRemoveSkillFail;
    case 4653:
    case "ErrUpdateSkillFail":
      return EErrorCode.ErrUpdateSkillFail;
    case 4654:
    case "ErrSkillOperatorType":
      return EErrorCode.ErrSkillOperatorType;
    case 4655:
    case "ErrContainerOperator":
      return EErrorCode.ErrContainerOperator;
    case 4656:
    case "ErrExchangeFail":
      return EErrorCode.ErrExchangeFail;
    case 4657:
    case "ErrExchangeFailInCombat":
      return EErrorCode.ErrExchangeFailInCombat;
    case 4671:
    case "ErrAvatarBeyondMaxPictureSize":
      return EErrorCode.ErrAvatarBeyondMaxPictureSize;
    case 4672:
    case "ErrGetTokenFailed":
      return EErrorCode.ErrGetTokenFailed;
    case 4673:
    case "ErrPictureVerifyFailed":
      return EErrorCode.ErrPictureVerifyFailed;
    case 4674:
    case "ErrPictureIllegalType":
      return EErrorCode.ErrPictureIllegalType;
    case 4675:
    case "ErrPictureErrorInfo":
      return EErrorCode.ErrPictureErrorInfo;
    case 4676:
    case "ErrPictureSizeInconsistent":
      return EErrorCode.ErrPictureSizeInconsistent;
    case 4677:
    case "ErrPictureFuncTypeIllegal":
      return EErrorCode.ErrPictureFuncTypeIllegal;
    case 4678:
    case "ErrPictureCallBackJudgeIllegal":
      return EErrorCode.ErrPictureCallBackJudgeIllegal;
    case 4679:
    case "ErrPictureVerifyNoPass":
      return EErrorCode.ErrPictureVerifyNoPass;
    case 4680:
    case "ErrPictureVerifyBackParamIllegal":
      return EErrorCode.ErrPictureVerifyBackParamIllegal;
    case 4681:
    case "ErrPictureCallBackParamIllegal":
      return EErrorCode.ErrPictureCallBackParamIllegal;
    case 4682:
    case "ErrPictureIllegalId":
      return EErrorCode.ErrPictureIllegalId;
    case 4683:
    case "ErrPictureCosErrors":
      return EErrorCode.ErrPictureCosErrors;
    case 4684:
    case "ErrPictureInnerSysErr":
      return EErrorCode.ErrPictureInnerSysErr;
    case 4685:
    case "ErrPictureNoSetEnvCosSecretId":
      return EErrorCode.ErrPictureNoSetEnvCosSecretId;
    case 4686:
    case "ErrPictureNoSetEnvCosSecretKey":
      return EErrorCode.ErrPictureNoSetEnvCosSecretKey;
    case 4687:
    case "ErrPictureCheckInMachineLocked":
      return EErrorCode.ErrPictureCheckInMachineLocked;
    case 4688:
    case "ErrPictureNoTryOutItem":
      return EErrorCode.ErrPictureNoTryOutItem;
    case 4689:
    case "ErrPictureNoUploadItem":
      return EErrorCode.ErrPictureNoUploadItem;
    case 4690:
    case "ErrPictureNoUnion":
      return EErrorCode.ErrPictureNoUnion;
    case 4701:
    case "ErrNameSizeError":
      return EErrorCode.ErrNameSizeError;
    case 4702:
    case "ErrSensitiveContent":
      return EErrorCode.ErrSensitiveContent;
    case 4703:
    case "ErrChangeNameFail":
      return EErrorCode.ErrChangeNameFail;
    case 4704:
    case "ErrChangeNameCardNotEnough":
      return EErrorCode.ErrChangeNameCardNotEnough;
    case 4705:
    case "ErrChangeSameName":
      return EErrorCode.ErrChangeSameName;
    case 4706:
    case "ErrCheckMuteWordsFailed":
      return EErrorCode.ErrCheckMuteWordsFailed;
    case 4708:
    case "ErrCheckMuteWordsEmpty":
      return EErrorCode.ErrCheckMuteWordsEmpty;
    case 4711:
    case "ErrChangeShowIdFail":
      return EErrorCode.ErrChangeShowIdFail;
    case 4712:
    case "ErrChangeShowIdDuplicated":
      return EErrorCode.ErrChangeShowIdDuplicated;
    case 4713:
    case "ErrChangeShowIdCardNotEnough":
      return EErrorCode.ErrChangeShowIdCardNotEnough;
    case 4721:
    case "ErrFaceItemLock":
      return EErrorCode.ErrFaceItemLock;
    case 4722:
    case "ErrFaceItemGender":
      return EErrorCode.ErrFaceItemGender;
    case 4723:
    case "ErrFaceNoUploading":
      return EErrorCode.ErrFaceNoUploading;
    case 4724:
    case "ErrFaceNoSupportFileSuffix":
      return EErrorCode.ErrFaceNoSupportFileSuffix;
    case 4725:
    case "ErrFaceFileSuffixEmpty":
      return EErrorCode.ErrFaceFileSuffixEmpty;
    case 4726:
    case "ErrFaceIllegalCosKey":
      return EErrorCode.ErrFaceIllegalCosKey;
    case 4727:
    case "ErrFaceParseSuffixFailed":
      return EErrorCode.ErrFaceParseSuffixFailed;
    case 4728:
    case "ErrFaceParseShortGuidFailed":
      return EErrorCode.ErrFaceParseShortGuidFailed;
    case 4751:
    case "ErrProficiencyNeedUnlock":
      return EErrorCode.ErrProficiencyNeedUnlock;
    case 4752:
    case "ErrProficiencyUnlock":
      return EErrorCode.ErrProficiencyUnlock;
    case 4753:
    case "ErrUnlockItemNotEnough":
      return EErrorCode.ErrUnlockItemNotEnough;
    case 4771:
    case "ErrTaskNotFinish":
      return EErrorCode.ErrTaskNotFinish;
    case 4772:
    case "ErrStickerAwardIsGet":
      return EErrorCode.ErrStickerAwardIsGet;
    case 4773:
    case "ErrBookAwardIsGet":
      return EErrorCode.ErrBookAwardIsGet;
    case 4791:
    case "ErrInCd":
      return EErrorCode.ErrInCd;
    case 4801:
    case "ErrMoneyNotEnough":
      return EErrorCode.ErrMoneyNotEnough;
    case 4802:
    case "ErrShopItemCantBuy":
      return EErrorCode.ErrShopItemCantBuy;
    case 4803:
    case "ErrShopBuyBusy":
      return EErrorCode.ErrShopBuyBusy;
    case 4804:
    case "ErrPaymentConfigNotFound":
      return EErrorCode.ErrPaymentConfigNotFound;
    case 4806:
    case "ErrRefreshShopCountExceed":
      return EErrorCode.ErrRefreshShopCountExceed;
    case 4807:
    case "ErrShopCouponNotEnough":
      return EErrorCode.ErrShopCouponNotEnough;
    case 4808:
    case "ErrShopCouponLimitNum":
      return EErrorCode.ErrShopCouponLimitNum;
    case 4809:
    case "ErrShopCantBuyNoPrice":
      return EErrorCode.ErrShopCantBuyNoPrice;
    case 4901:
    case "ErrNotFoundMonster":
      return EErrorCode.ErrNotFoundMonster;
    case 4902:
    case "ErrNotMonster":
      return EErrorCode.ErrNotMonster;
    case 4903:
    case "ErrMonsterUnlockExist":
      return EErrorCode.ErrMonsterUnlockExist;
    case 4904:
    case "ErrMonsterAwardIsGet":
      return EErrorCode.ErrMonsterAwardIsGet;
    case 4905:
    case "ErrMonsterTargetNotFinish":
      return EErrorCode.ErrMonsterTargetNotFinish;
    case 4906:
    case "ErrDropTypeNotSupport":
      return EErrorCode.ErrDropTypeNotSupport;
    case 4907:
    case "ErrCounterNotEnough":
      return EErrorCode.ErrCounterNotEnough;
    case 4908:
    case "ErrDropItemAlreadyPicked":
      return EErrorCode.ErrDropItemAlreadyPicked;
    case 4941:
    case "ErrInteractionDoing":
      return EErrorCode.ErrInteractionDoing;
    case 4942:
    case "ErrInteractionCondition":
      return EErrorCode.ErrInteractionCondition;
    case 4943:
    case "ErrInteractionNotMore":
      return EErrorCode.ErrInteractionNotMore;
    case 4944:
    case "ErrInteractionExistPos":
      return EErrorCode.ErrInteractionExistPos;
    case 4945:
    case "ErrInteractionNotExist":
      return EErrorCode.ErrInteractionNotExist;
    case 4946:
    case "ErrInteractionEntityNotExist":
      return EErrorCode.ErrInteractionEntityNotExist;
    case 4947:
    case "ErrInteractionHandleNotExist":
      return EErrorCode.ErrInteractionHandleNotExist;
    case 4948:
    case "ErrInteractionType":
      return EErrorCode.ErrInteractionType;
    case 4949:
    case "ErrInteractionBan":
      return EErrorCode.ErrInteractionBan;
    case 4950:
    case "ErrInteractionConfig":
      return EErrorCode.ErrInteractionConfig;
    case 4951:
    case "ErrInteractionNotOneself":
      return EErrorCode.ErrInteractionNotOneself;
    case 4952:
    case "ErrInteractionDistance":
      return EErrorCode.ErrInteractionDistance;
    case 4953:
    case "ErrInteractionNotDoing":
      return EErrorCode.ErrInteractionNotDoing;
    case 4961:
    case "ErrShowPieceIllegalPieceType":
      return EErrorCode.ErrShowPieceIllegalPieceType;
    case 4962:
    case "ErrShowPieceIllegalPieceId":
      return EErrorCode.ErrShowPieceIllegalPieceId;
    case 4963:
    case "ErrShowPieceNoInOftenUseList":
      return EErrorCode.ErrShowPieceNoInOftenUseList;
    case 4964:
    case "ErrShowPieceNoUnlockList":
      return EErrorCode.ErrShowPieceNoUnlockList;
    case 4965:
    case "ErrShowPieceRoulettePositionNoSet":
      return EErrorCode.ErrShowPieceRoulettePositionNoSet;
    case 4966:
    case "ErrShowPieceBeyondOftenUseMaxLen":
      return EErrorCode.ErrShowPieceBeyondOftenUseMaxLen;
    case 4967:
    case "ErrShowPieceBeyondOftenRoulettePositionNum":
      return EErrorCode.ErrShowPieceBeyondOftenRoulettePositionNum;
    case 4968:
    case "ErrShowPieceNoCommonPiece":
      return EErrorCode.ErrShowPieceNoCommonPiece;
    case 4969:
    case "ErrShowPieceNoTakeOn":
      return EErrorCode.ErrShowPieceNoTakeOn;
    case 5001:
    case "ErrProfessionActivated":
      return EErrorCode.ErrProfessionActivated;
    case 5002:
    case "ErrProfessionNotHas":
      return EErrorCode.ErrProfessionNotHas;
    case 5003:
    case "ErrProfessionSlotErr":
      return EErrorCode.ErrProfessionSlotErr;
    case 5004:
    case "ErrProfessionRemoveErr":
      return EErrorCode.ErrProfessionRemoveErr;
    case 5005:
    case "ErrProfessionChangePlanFail":
      return EErrorCode.ErrProfessionChangePlanFail;
    case 5006:
    case "ErrProfessionStarConfigNotExist":
      return EErrorCode.ErrProfessionStarConfigNotExist;
    case 5007:
    case "ErrProfessionStarNodeUnlock":
      return EErrorCode.ErrProfessionStarNodeUnlock;
    case 5008:
    case "ErrProfessionStarNodeNotUnlock":
      return EErrorCode.ErrProfessionStarNodeNotUnlock;
    case 5009:
    case "ErrProfessionReplaceSkillNotExist":
      return EErrorCode.ErrProfessionReplaceSkillNotExist;
    case 5010:
    case "ErrProfessionUpgradeNotGreaterCurLevel":
      return EErrorCode.ErrProfessionUpgradeNotGreaterCurLevel;
    case 5011:
    case "ErrProfessionProfessionBeForged":
      return EErrorCode.ErrProfessionProfessionBeForged;
    case 5012:
    case "ErrProfessionSlotTwoNotUnlock":
      return EErrorCode.ErrProfessionSlotTwoNotUnlock;
    case 5013:
    case "ErrProfessionSkillAlreadyActive":
      return EErrorCode.ErrProfessionSkillAlreadyActive;
    case 5014:
    case "ErrProfessionSkillRemodelLevelWrong":
      return EErrorCode.ErrProfessionSkillRemodelLevelWrong;
    case 5015:
    case "ErrAoyiSkillAlreadyActive":
      return EErrorCode.ErrAoyiSkillAlreadyActive;
    case 5016:
    case "ErrAoyiSkillRemodelConfigNotExist":
      return EErrorCode.ErrAoyiSkillRemodelConfigNotExist;
    case 5017:
    case "ErrAoyiSkillRemodelLevelWrong":
      return EErrorCode.ErrAoyiSkillRemodelLevelWrong;
    case 5018:
    case "ErrProfessionEquipInCombat":
      return EErrorCode.ErrProfessionEquipInCombat;
    case 5019:
    case "ErrProfessionSwitchInCombat":
      return EErrorCode.ErrProfessionSwitchInCombat;
    case 5020:
    case "ErrProfessionDungeonNotAllowSwitch":
      return EErrorCode.ErrProfessionDungeonNotAllowSwitch;
    case 5021:
    case "ErrAoYiDecomposeOverflow":
      return EErrorCode.ErrAoYiDecomposeOverflow;
    case 5101:
    case "ErrTalentIllegalTalentPoolId":
      return EErrorCode.ErrTalentIllegalTalentPoolId;
    case 5102:
    case "ErrTalentBeyondCurTalentMaxPlanNum":
      return EErrorCode.ErrTalentBeyondCurTalentMaxPlanNum;
    case 5108:
    case "ErrTalentPoolNoActive":
      return EErrorCode.ErrTalentPoolNoActive;
    case 5109:
    case "ErrTalentPlanNoActive":
      return EErrorCode.ErrTalentPlanNoActive;
    case 5110:
    case "ErrTalentIllegalTalentId":
      return EErrorCode.ErrTalentIllegalTalentId;
    case 5111:
    case "ErrTalentTalentHasUnlocked":
      return EErrorCode.ErrTalentTalentHasUnlocked;
    case 5112:
    case "ErrTalentTalentNoUnlocked":
      return EErrorCode.ErrTalentTalentNoUnlocked;
    case 5113:
    case "ErrTalentChangeLvPassiveTalentMoreThanInPool":
      return EErrorCode.ErrTalentChangeLvPassiveTalentMoreThanInPool;
    case 5114:
    case "ErrTalentRepeatedTalentId":
      return EErrorCode.ErrTalentRepeatedTalentId;
    case 5115:
    case "ErrTalentNoPoolPassiveTalent":
      return EErrorCode.ErrTalentNoPoolPassiveTalent;
    case 5116:
    case "ErrTalentTalentPointsNoEnough":
      return EErrorCode.ErrTalentTalentPointsNoEnough;
    case 5118:
    case "ErrTalentPassiveTalentListNoEmpty":
      return EErrorCode.ErrTalentPassiveTalentListNoEmpty;
    case 5119:
    case "ErrTalentIllegalTalentLevel":
      return EErrorCode.ErrTalentIllegalTalentLevel;
    case 5120:
    case "ErrTalentNoMeetUpgradeCondition":
      return EErrorCode.ErrTalentNoMeetUpgradeCondition;
    case 5121:
    case "ErrTalentNoSupportDownLevelNow":
      return EErrorCode.ErrTalentNoSupportDownLevelNow;
    case 5122:
    case "ErrTalentNoMeetPrevTalentLv":
      return EErrorCode.ErrTalentNoMeetPrevTalentLv;
    case 5123:
    case "ErrTalentNoMeetPrevTalentPoint":
      return EErrorCode.ErrTalentNoMeetPrevTalentPoint;
    case 5124:
    case "ErrTalentTreeNodeBDExclusive":
      return EErrorCode.ErrTalentTreeNodeBDExclusive;
    case 5125:
    case "ErrTalentTotalTalentPointNotEnough":
      return EErrorCode.ErrTalentTotalTalentPointNotEnough;
    case 5126:
    case "ErrTalentPreTalentNodeNotActivated":
      return EErrorCode.ErrTalentPreTalentNodeNotActivated;
    case 5127:
    case "ErrTalentResetTalentInCombat":
      return EErrorCode.ErrTalentResetTalentInCombat;
    case 5128:
    case "ErrTalentActiveTalentInCombat":
      return EErrorCode.ErrTalentActiveTalentInCombat;
    case 5151:
    case "ErrCookBookNotExist":
      return EErrorCode.ErrCookBookNotExist;
    case 5152:
    case "ErrCookFoodNotEnough":
      return EErrorCode.ErrCookFoodNotEnough;
    case 5153:
    case "ErrCookTypeMore":
      return EErrorCode.ErrCookTypeMore;
    case 5154:
    case "ErrCookCountMore":
      return EErrorCode.ErrCookCountMore;
    case 5155:
    case "ErrCookHasBook":
      return EErrorCode.ErrCookHasBook;
    case 5156:
    case "ErrCookMaterialNotMatch":
      return EErrorCode.ErrCookMaterialNotMatch;
    case 5201:
    case "ErrChatIllegalPrivateChatTarget":
      return EErrorCode.ErrChatIllegalPrivateChatTarget;
    case 5202:
    case "ErrChatInTargetBlockList":
      return EErrorCode.ErrChatInTargetBlockList;
    case 5203:
    case "ErrChatSendMsgBeyondMaxWords":
      return EErrorCode.ErrChatSendMsgBeyondMaxWords;
    case 5204:
    case "ErrChatWorldChannelIdIsZero":
      return EErrorCode.ErrChatWorldChannelIdIsZero;
    case 5205:
    case "ErrChatWorldChannelIdBeyondMaxId":
      return EErrorCode.ErrChatWorldChannelIdBeyondMaxId;
    case 5206:
    case "ErrChatIllegalChannelType":
      return EErrorCode.ErrChatIllegalChannelType;
    case 5207:
    case "ErrChatIllegalMsgType":
      return EErrorCode.ErrChatIllegalMsgType;
    case 5208:
    case "ErrChatNoInGoalChannel":
      return EErrorCode.ErrChatNoInGoalChannel;
    case 5209:
    case "ErrChatNeedConfigIdNotZero":
      return EErrorCode.ErrChatNeedConfigIdNotZero;
    case 5210:
    case "ErrChatNeedMsgTextNotEmpty":
      return EErrorCode.ErrChatNeedMsgTextNotEmpty;
    case 5211:
    case "ErrChatSendCdNoEnd":
      return EErrorCode.ErrChatSendCdNoEnd;
    case 5212:
    case "ErrChatRecordListIsEmpty":
      return EErrorCode.ErrChatRecordListIsEmpty;
    case 5213:
    case "ErrChatTargetNotInPrivateList":
      return EErrorCode.ErrChatTargetNotInPrivateList;
    case 5214:
    case "ErrChatMsgIdMoreThanMaxReadMsgId":
      return EErrorCode.ErrChatMsgIdMoreThanMaxReadMsgId;
    case 5215:
    case "ErrChatBeyondBlockListLimit":
      return EErrorCode.ErrChatBeyondBlockListLimit;
    case 5216:
    case "ErrChatWorldChannelIdBeyondMaxNum":
      return EErrorCode.ErrChatWorldChannelIdBeyondMaxNum;
    case 5217:
    case "ErrChatBeyondMaxRecordId":
      return EErrorCode.ErrChatBeyondMaxRecordId;
    case 5218:
    case "ErrChatNoCreatePrivateSession":
      return EErrorCode.ErrChatNoCreatePrivateSession;
    case 5219:
    case "ErrChatPrivateSessionHasExit":
      return EErrorCode.ErrChatPrivateSessionHasExit;
    case 5220:
    case "ErrChatBeBan":
      return EErrorCode.ErrChatBeBan;
    case 5221:
    case "ErrChatFileIdTooLong":
      return EErrorCode.ErrChatFileIdTooLong;
    case 5222:
    case "ErrChatFileIdEmpty":
      return EErrorCode.ErrChatFileIdEmpty;
    case 5223:
    case "ErrChatMsgInfoEmpty":
      return EErrorCode.ErrChatMsgInfoEmpty;
    case 5224:
    case "ErrChatNoShareChannel":
      return EErrorCode.ErrChatNoShareChannel;
    case 5225:
    case "ErrChatIllegalShareType":
      return EErrorCode.ErrChatIllegalShareType;
    case 5226:
    case "ErrChatIllegalHolderType":
      return EErrorCode.ErrChatIllegalHolderType;
    case 5227:
    case "ErrChatNoSupportShareType":
      return EErrorCode.ErrChatNoSupportShareType;
    case 5228:
    case "ErrChatShareTpeNoChatId":
      return EErrorCode.ErrChatShareTpeNoChatId;
    case 5229:
    case "ErrChatShareNoFishRank":
      return EErrorCode.ErrChatShareNoFishRank;
    case 5230:
    case "ErrChatLevelLimit":
      return EErrorCode.ErrChatLevelLimit;
    case 5231:
    case "ErrChatNoFoundBlockListLimit":
      return EErrorCode.ErrChatNoFoundBlockListLimit;
    case 5301:
    case "ErrTalentModTalentTagNotExist":
      return EErrorCode.ErrTalentModTalentTagNotExist;
    case 5351:
    case "ErrTextCheckForbidden":
      return EErrorCode.ErrTextCheckForbidden;
    case 5352:
    case "ErrTextCheckNoSceneType":
      return EErrorCode.ErrTextCheckNoSceneType;
    case 5353:
    case "ErrTextCheckIllegal":
      return EErrorCode.ErrTextCheckIllegal;
    case 5354:
    case "ErrTextCheckHttpError":
      return EErrorCode.ErrTextCheckHttpError;
    case 5355:
    case "ErrTextCheckTooManyItems":
      return EErrorCode.ErrTextCheckTooManyItems;
    case 5401:
    case "ErrConditionTimerOpen":
      return EErrorCode.ErrConditionTimerOpen;
    case 5402:
    case "ErrConditionOpenServer":
      return EErrorCode.ErrConditionOpenServer;
    case 5700:
    case "ErrSkillDisable":
      return EErrorCode.ErrSkillDisable;
    case 5701:
    case "ErrSkillIsCD":
      return EErrorCode.ErrSkillIsCD;
    case 5702:
    case "ErrSkillMaxPassiveCount":
      return EErrorCode.ErrSkillMaxPassiveCount;
    case 5703:
    case "ErrSkillInit":
      return EErrorCode.ErrSkillInit;
    case 5704:
    case "ErrSkillInfo":
      return EErrorCode.ErrSkillInfo;
    case 5705:
    case "ErrUseSkillFightResInsufficient":
      return EErrorCode.ErrUseSkillFightResInsufficient;
    case 5706:
    case "ErrUseSkillBuffNotEnough":
      return EErrorCode.ErrUseSkillBuffNotEnough;
    case 5707:
    case "ErrUseSkillItemInsufficient":
      return EErrorCode.ErrUseSkillItemInsufficient;
    case 5708:
    case "ErrUseSkillAttrInsufficient":
      return EErrorCode.ErrUseSkillAttrInsufficient;
    case 5709:
    case "ErrUseSkillEnduranceInsufficient":
      return EErrorCode.ErrUseSkillEnduranceInsufficient;
    case 5710:
    case "ErrUseSkillStateChange":
      return EErrorCode.ErrUseSkillStateChange;
    case 5711:
    case "ErrUseSkillClientSkillUuid":
      return EErrorCode.ErrUseSkillClientSkillUuid;
    case 5730:
    case "ErrFightLogicConditionBlockInvalid":
      return EErrorCode.ErrFightLogicConditionBlockInvalid;
    case 5731:
    case "ErrFightLogicActionGroupInvalid":
      return EErrorCode.ErrFightLogicActionGroupInvalid;
    case 5732:
    case "ErrFightLogicConditionNotMatch":
      return EErrorCode.ErrFightLogicConditionNotMatch;
    case 5733:
    case "ErrFightLogicRunDataInvalid":
      return EErrorCode.ErrFightLogicRunDataInvalid;
    case 5734:
    case "ErrSkillStageNotFind":
      return EErrorCode.ErrSkillStageNotFind;
    case 6000:
    case "ErrConditionCfgSize":
      return EErrorCode.ErrConditionCfgSize;
    case 6001:
    case "ErrConditionDissatisfy":
      return EErrorCode.ErrConditionDissatisfy;
    case 6002:
    case "ErrConditionObjectIsNull":
      return EErrorCode.ErrConditionObjectIsNull;
    case 6003:
    case "ErrConditionTypeNotFound":
      return EErrorCode.ErrConditionTypeNotFound;
    case 6004:
    case "ErrConditionEntityDeath":
      return EErrorCode.ErrConditionEntityDeath;
    case 6005:
    case "ErrConditionUnionLevel":
      return EErrorCode.ErrConditionUnionLevel;
    case 6006:
    case "ErrConditionUnionMoney":
      return EErrorCode.ErrConditionUnionMoney;
    case 6007:
    case "ErrConditionNotMeet":
      return EErrorCode.ErrConditionNotMeet;
    case 6008:
    case "ErrConditionNotInShapeShift":
      return EErrorCode.ErrConditionNotInShapeShift;
    case 6101:
    case "ErrSeasonAchievementNoExist":
      return EErrorCode.ErrSeasonAchievementNoExist;
    case 6102:
    case "ErrSeasonAchievementNoFinish":
      return EErrorCode.ErrSeasonAchievementNoFinish;
    case 6103:
    case "ErrSeasonAchievementHasReceived":
      return EErrorCode.ErrSeasonAchievementHasReceived;
    case 6104:
    case "ErrSeasonAchievementPrevIdNoReceived":
      return EErrorCode.ErrSeasonAchievementPrevIdNoReceived;
    case 6105:
    case "ErrSeasonAchievementPrevIdNoExist":
      return EErrorCode.ErrSeasonAchievementPrevIdNoExist;
    case 6106:
    case "ErrSeasonAchievementTargetConfigError":
      return EErrorCode.ErrSeasonAchievementTargetConfigError;
    case 6151:
    case "ErrSeasonRankHasMax":
      return EErrorCode.ErrSeasonRankHasMax;
    case 6152:
    case "ErrSeasonRankHasReceived":
      return EErrorCode.ErrSeasonRankHasReceived;
    case 6153:
    case "ErrSeasonRankNoAchieve":
      return EErrorCode.ErrSeasonRankNoAchieve;
    case 6154:
    case "ErrSeasonRankCurSeasonIdZero":
      return EErrorCode.ErrSeasonRankCurSeasonIdZero;
    case 6155:
    case "ErrSeasonRankNoMeetCondition":
      return EErrorCode.ErrSeasonRankNoMeetCondition;
    case 6156:
    case "ErrSeasonRankSeasonNoSame":
      return EErrorCode.ErrSeasonRankSeasonNoSame;
    case 6201:
    case "ErrBattlePassBuyLevel":
      return EErrorCode.ErrBattlePassBuyLevel;
    case 6202:
    case "ErrBattlePassBuyMaterial":
      return EErrorCode.ErrBattlePassBuyMaterial;
    case 6203:
    case "ErrBattlePassAwardGet":
      return EErrorCode.ErrBattlePassAwardGet;
    case 6204:
    case "ErrBattlePassAwardNotUnlock":
      return EErrorCode.ErrBattlePassAwardNotUnlock;
    case 6205:
    case "ErrBattlePassBuyWeekExpLimit":
      return EErrorCode.ErrBattlePassBuyWeekExpLimit;
    case 6206:
    case "ErrBattlePassLevelError":
      return EErrorCode.ErrBattlePassLevelError;
    case 6207:
    case "ErrNoRefreshTimes":
      return EErrorCode.ErrNoRefreshTimes;
    case 6208:
    case "ErrTargetNotCompleted":
      return EErrorCode.ErrTargetNotCompleted;
    case 6251:
    case "ErrOnlinePeriodTooMore":
      return EErrorCode.ErrOnlinePeriodTooMore;
    case 6252:
    case "ErrPersonalTagTooMore":
      return EErrorCode.ErrPersonalTagTooMore;
    case 6253:
    case "ErrPersonalTagNotFound":
      return EErrorCode.ErrPersonalTagNotFound;
    case 6254:
    case "ErrPersonalAvatarUnearned":
      return EErrorCode.ErrPersonalAvatarUnearned;
    case 6255:
    case "ErrPersonalAvatarFrameUnearned":
      return EErrorCode.ErrPersonalAvatarFrameUnearned;
    case 6256:
    case "ErrPersonalCardStyleUnearned":
      return EErrorCode.ErrPersonalCardStyleUnearned;
    case 6257:
    case "ErrPersonalPhotoTooMore":
      return EErrorCode.ErrPersonalPhotoTooMore;
    case 6258:
    case "ErrPersonalMedalUnearned":
      return EErrorCode.ErrPersonalMedalUnearned;
    case 6259:
    case "ErrPersonalTargetUnlock":
      return EErrorCode.ErrPersonalTargetUnlock;
    case 6260:
    case "ErrPersonalTargetAlreadyGet":
      return EErrorCode.ErrPersonalTargetAlreadyGet;
    case 6261:
    case "ErrPersonalMedalInvalidSlot":
      return EErrorCode.ErrPersonalMedalInvalidSlot;
    case 6262:
    case "ErrPersonalMedalDuplicateValue":
      return EErrorCode.ErrPersonalMedalDuplicateValue;
    case 6263:
    case "ErrOnlinePeriodDuplicate":
      return EErrorCode.ErrOnlinePeriodDuplicate;
    case 6264:
    case "ErrPersonalTagDuplicate":
      return EErrorCode.ErrPersonalTagDuplicate;
    case 6265:
    case "ErrPersonalPhotoInvalidSlot":
      return EErrorCode.ErrPersonalPhotoInvalidSlot;
    case 6266:
    case "ErrPersonalPhotoDuplicateValue":
      return EErrorCode.ErrPersonalPhotoDuplicateValue;
    case 6301:
    case "ErrSeasonMedalNoMeetActiveCondition":
      return EErrorCode.ErrSeasonMedalNoMeetActiveCondition;
    case 6302:
    case "ErrSeasonMedalNoMeetUpgradeCondition":
      return EErrorCode.ErrSeasonMedalNoMeetUpgradeCondition;
    case 6303:
    case "ErrSeasonMedalActiveMeetNoEnough":
      return EErrorCode.ErrSeasonMedalActiveMeetNoEnough;
    case 6304:
    case "ErrSeasonMedalUpgradeMeetNoEnough":
      return EErrorCode.ErrSeasonMedalUpgradeMeetNoEnough;
    case 6305:
    case "ErrSeasonMedalIllegalNodeId":
      return EErrorCode.ErrSeasonMedalIllegalNodeId;
    case 6306:
    case "ErrSeasonMedalChooseNodeIdBeyondMax":
      return EErrorCode.ErrSeasonMedalChooseNodeIdBeyondMax;
    case 6307:
    case "ErrSeasonMedalHoleNoExist":
      return EErrorCode.ErrSeasonMedalHoleNoExist;
    case 6308:
    case "ErrSeasonMedalHoleLock":
      return EErrorCode.ErrSeasonMedalHoleLock;
    case 6309:
    case "ErrSeasonMedalNodeNoExist":
      return EErrorCode.ErrSeasonMedalNodeNoExist;
    case 6310:
    case "ErrSeasonMedalHoleNoGet":
      return EErrorCode.ErrSeasonMedalHoleNoGet;
    case 6311:
    case "ErrSeasonMedalMaxHoleLevel":
      return EErrorCode.ErrSeasonMedalMaxHoleLevel;
    case 6312:
    case "ErrSeasonMedalCoreHoleLock":
      return EErrorCode.ErrSeasonMedalCoreHoleLock;
    case 6313:
    case "ErrSeasonMedalUpgradeMoneyNoEnough":
      return EErrorCode.ErrSeasonMedalUpgradeMoneyNoEnough;
    case 6314:
    case "ErrSeasonNoCoreHole":
      return EErrorCode.ErrSeasonNoCoreHole;
    case 6315:
    case "ErrSeasonNoNormalHole":
      return EErrorCode.ErrSeasonNoNormalHole;
    case 6316:
    case "ErrSeasonMedalNoUpgradeNormalHoleItem":
      return EErrorCode.ErrSeasonMedalNoUpgradeNormalHoleItem;
    case 6351:
    case "ErrSceneLineNotExists":
      return EErrorCode.ErrSceneLineNotExists;
    case 6352:
    case "ErrSceneLineRefreshCd":
      return EErrorCode.ErrSceneLineRefreshCd;
    case 6353:
    case "ErrSceneLineNotSameScene":
      return EErrorCode.ErrSceneLineNotSameScene;
    case 6354:
    case "ErrSceneLineSameLine":
      return EErrorCode.ErrSceneLineSameLine;
    case 6355:
    case "ErrSceneLineInteracting":
      return EErrorCode.ErrSceneLineInteracting;
    case 6356:
    case "ErrSceneLineUserDead":
      return EErrorCode.ErrSceneLineUserDead;
    case 6357:
    case "ErrSceneLineFull":
      return EErrorCode.ErrSceneLineFull;
    case 6358:
    case "ErrSceneLineChangeCd":
      return EErrorCode.ErrSceneLineChangeCd;
    case 6359:
    case "ErrSceneVersionRecycle":
      return EErrorCode.ErrSceneVersionRecycle;
    case 6360:
    case "ErrSceneLineKick":
      return EErrorCode.ErrSceneLineKick;
    case 6401:
    case "ErrInstallSlotFailed":
      return EErrorCode.ErrInstallSlotFailed;
    case 6402:
    case "ErrUseSlotFailed":
      return EErrorCode.ErrUseSlotFailed;
    case 6403:
    case "ErrUseSlotInCd":
      return EErrorCode.ErrUseSlotInCd;
    case 6404:
    case "ErrInstatallSlotFailedInCombat":
      return EErrorCode.ErrInstatallSlotFailedInCombat;
    case 6405:
    case "ErrSlotSkillUnLoad":
      return EErrorCode.ErrSlotSkillUnLoad;
    case 6406:
    case "ErrUseCfgSkillFailed":
      return EErrorCode.ErrUseCfgSkillFailed;
    case 6407:
    case "ErrResonanceNotExists":
      return EErrorCode.ErrResonanceNotExists;
    case 6408:
    case "ErrResonanceUnLoad":
      return EErrorCode.ErrResonanceUnLoad;
    case 6409:
    case "ErrUseDodgeFailed":
      return EErrorCode.ErrUseDodgeFailed;
    case 6410:
    case "ErrUseFixedSkillFailed":
      return EErrorCode.ErrUseFixedSkillFailed;
    case 6411:
    case "ErrUseBlockedSkill":
      return EErrorCode.ErrUseBlockedSkill;
    case 6412:
    case "ErrInstallBlockedSkill":
      return EErrorCode.ErrInstallBlockedSkill;
    case 6451:
    case "ErrExchangeNotFound":
      return EErrorCode.ErrExchangeNotFound;
    case 6452:
    case "ErrExchangeNotEnough":
      return EErrorCode.ErrExchangeNotEnough;
    case 6453:
    case "ErrExchangeItemLimit":
      return EErrorCode.ErrExchangeItemLimit;
    case 6454:
    case "ErrExchangeStepRange":
      return EErrorCode.ErrExchangeStepRange;
    case 6455:
    case "ErrExchangeItemFull":
      return EErrorCode.ErrExchangeItemFull;
    case 6456:
    case "ErrExchangePackageFull":
      return EErrorCode.ErrExchangePackageFull;
    case 6457:
    case "ErrExchangePriceItemNotFind":
      return EErrorCode.ErrExchangePriceItemNotFind;
    case 6458:
    case "ErrExchangeBuyNumNotEnough":
      return EErrorCode.ErrExchangeBuyNumNotEnough;
    case 6459:
    case "ErrExchangeBuyItemNotFound":
      return EErrorCode.ErrExchangeBuyItemNotFound;
    case 6460:
    case "ErrExchangeTakeFailDelayTime":
      return EErrorCode.ErrExchangeTakeFailDelayTime;
    case 6461:
    case "ErrExchangeTakeFailSellNum":
      return EErrorCode.ErrExchangeTakeFailSellNum;
    case 6462:
    case "ErrExchangeTakeItemNotFound":
      return EErrorCode.ErrExchangeTakeItemNotFound;
    case 6463:
    case "ErrExchangeWithdrawNoMoney":
      return EErrorCode.ErrExchangeWithdrawNoMoney;
    case 6464:
    case "ErrExchangeDepositNotEnough":
      return EErrorCode.ErrExchangeDepositNotEnough;
    case 6465:
    case "ErrExchangeItemNotBindOrCooldownNotExpire":
      return EErrorCode.ErrExchangeItemNotBindOrCooldownNotExpire;
    case 6466:
    case "ErrExchangeInCd":
      return EErrorCode.ErrExchangeInCd;
    case 6467:
    case "ErrExchangeBuyCurrencyNoEnough":
      return EErrorCode.ErrExchangeBuyCurrencyNoEnough;
    case 6468:
    case "ErrExchangeItemDelayTimeOver":
      return EErrorCode.ErrExchangeItemDelayTimeOver;
    case 6469:
    case "ErrExchangeItemIsNotWithdraw":
      return EErrorCode.ErrExchangeItemIsNotWithdraw;
    case 6470:
    case "ErrExchangeBuyItemLimit":
      return EErrorCode.ErrExchangeBuyItemLimit;
    case 6471:
    case "ErrExchangeItemIsNotNoticeShopItem":
      return EErrorCode.ErrExchangeItemIsNotNoticeShopItem;
    case 6472:
    case "ErrExchangeItemIsPreBuyAlready":
      return EErrorCode.ErrExchangeItemIsPreBuyAlready;
    case 6473:
    case "ErrExchangeItemNotPublic":
      return EErrorCode.ErrExchangeItemNotPublic;
    case 6474:
    case "ErrExchangeSaleRankExist":
      return EErrorCode.ErrExchangeSaleRankExist;
    case 6475:
    case "ErrExchangeSaleItemFull":
      return EErrorCode.ErrExchangeSaleItemFull;
    case 6476:
    case "ErrExchangeSaleDiamondNotEnough":
      return EErrorCode.ErrExchangeSaleDiamondNotEnough;
    case 6477:
    case "ErrExchangeSaleItemNotExists":
      return EErrorCode.ErrExchangeSaleItemNotExists;
    case 6478:
    case "ErrExchangeBuySaleCurrencyNoEnough":
      return EErrorCode.ErrExchangeBuySaleCurrencyNoEnough;
    case 6479:
    case "ErrExchangeDiamondNotEnough":
      return EErrorCode.ErrExchangeDiamondNotEnough;
    case 6480:
    case "ErrExchangeSaleTakeOffCd":
      return EErrorCode.ErrExchangeSaleTakeOffCd;
    case 6481:
    case "ErrExchangeSaleRateInvalid":
      return EErrorCode.ErrExchangeSaleRateInvalid;
    case 6482:
    case "ErrExchangePreItemFull":
      return EErrorCode.ErrExchangePreItemFull;
    case 6483:
    case "ErrExchangeSaleNumInvalid":
      return EErrorCode.ErrExchangeSaleNumInvalid;
    case 6484:
    case "ErrExchangeCareItemAlready":
      return EErrorCode.ErrExchangeCareItemAlready;
    case 6485:
    case "ErrExchangePriceRange":
      return EErrorCode.ErrExchangePriceRange;
    case 6486:
    case "ErrExchangeRequestLimit":
      return EErrorCode.ErrExchangeRequestLimit;
    case 6487:
    case "ErrExchangeItemBanned":
      return EErrorCode.ErrExchangeItemBanned;
    case 6488:
    case "ErrExchangePriceNotLow":
      return EErrorCode.ErrExchangePriceNotLow;
    case 6489:
    case "ErrExchangeItemNotFind":
      return EErrorCode.ErrExchangeItemNotFind;
    case 6490:
    case "ErrExchangeItemExistMinPrice":
      return EErrorCode.ErrExchangeItemExistMinPrice;
    case 6491:
    case "ErrExchangeNoticeItemMin":
      return EErrorCode.ErrExchangeNoticeItemMin;
    case 6492:
    case "ErrExchangePreBuyUserFull":
      return EErrorCode.ErrExchangePreBuyUserFull;
    case 6501:
    case "ErrModHoleNotUnlock":
      return EErrorCode.ErrModHoleNotUnlock;
    case 6502:
    case "ErrModNotExist":
      return EErrorCode.ErrModNotExist;
    case 6503:
    case "ErrModSimilarRepeated":
      return EErrorCode.ErrModSimilarRepeated;
    case 6504:
    case "ErrModTypeLimitExceeded":
      return EErrorCode.ErrModTypeLimitExceeded;
    case 6505:
    case "ErrModPartNotExist":
      return EErrorCode.ErrModPartNotExist;
    case 6506:
    case "ErrModPartEnhanceLimit":
      return EErrorCode.ErrModPartEnhanceLimit;
    case 6507:
    case "ErrModInUse":
      return EErrorCode.ErrModInUse;
    case 6508:
    case "ErrModAlreadyInstalled":
      return EErrorCode.ErrModAlreadyInstalled;
    case 6509:
    case "ErrModInitConfigNotExist":
      return EErrorCode.ErrModInitConfigNotExist;
    case 6510:
    case "ErrModPartOverflow":
      return EErrorCode.ErrModPartOverflow;
    case 6511:
    case "ErrModCanNotLink":
      return EErrorCode.ErrModCanNotLink;
    case 6512:
    case "ErrModDecomposeOverflow":
      return EErrorCode.ErrModDecomposeOverflow;
    case 6551:
    case "ErrFishingNotUseBait":
      return EErrorCode.ErrFishingNotUseBait;
    case 6552:
    case "ErrFishingRandomFailed":
      return EErrorCode.ErrFishingRandomFailed;
    case 6553:
    case "ErrFishingAlreadyGetFishItem":
      return EErrorCode.ErrFishingAlreadyGetFishItem;
    case 6554:
    case "ErrFishingGetFishIdWrong":
      return EErrorCode.ErrFishingGetFishIdWrong;
    case 6555:
    case "ErrFishingNotGet":
      return EErrorCode.ErrFishingNotGet;
    case 6556:
    case "ErrFishingNotResearchYet":
      return EErrorCode.ErrFishingNotResearchYet;
    case 6557:
    case "ErrFishingNotUseRod":
      return EErrorCode.ErrFishingNotUseRod;
    case 6558:
    case "ErrFishingNoSeat":
      return EErrorCode.ErrFishingNoSeat;
    case 6559:
    case "ErrFishingCantResearch":
      return EErrorCode.ErrFishingCantResearch;
    case 6560:
    case "ErrFishDrawnLevelAward":
      return EErrorCode.ErrFishDrawnLevelAward;
    case 6561:
    case "ErrFishCannotDrawLevelAward":
      return EErrorCode.ErrFishCannotDrawLevelAward;
    case 6562:
    case "ErrFishDrawnNoLevelAward":
      return EErrorCode.ErrFishDrawnNoLevelAward;
    case 6601:
    case "ErrFreightNoRefreshGoods":
      return EErrorCode.ErrFreightNoRefreshGoods;
    case 6602:
    case "ErrFreightBeyondMaxValue":
      return EErrorCode.ErrFreightBeyondMaxValue;
    case 6603:
    case "ErrFreightDownMinValue":
      return EErrorCode.ErrFreightDownMinValue;
    case 6604:
    case "ErrFreightHasSetOff":
      return EErrorCode.ErrFreightHasSetOff;
    case 6605:
    case "ErrFreightNoSetOff":
      return EErrorCode.ErrFreightNoSetOff;
    case 6606:
    case "ErrFreightHasReward":
      return EErrorCode.ErrFreightHasReward;
    case 6607:
    case "ErrFreightIllegalGoodsId":
      return EErrorCode.ErrFreightIllegalGoodsId;
    case 6608:
    case "ErrFreightItemNoEnough":
      return EErrorCode.ErrFreightItemNoEnough;
    case 6609:
    case "ErrFreightNoUpSetOffTime":
      return EErrorCode.ErrFreightNoUpSetOffTime;
    case 6610:
    case "ErrFreightNoUpRewardTime":
      return EErrorCode.ErrFreightNoUpRewardTime;
    case 6611:
    case "ErrFreightAutoSetOff":
      return EErrorCode.ErrFreightAutoSetOff;
    case 6651:
    case "ErrTrialRoadAwardNotFinished":
      return EErrorCode.ErrTrialRoadAwardNotFinished;
    case 6652:
    case "ErrTrialRoadAwardRoomGet":
      return EErrorCode.ErrTrialRoadAwardRoomGet;
    case 6701:
    case "ErrNotCanRide":
      return EErrorCode.ErrNotCanRide;
    case 6702:
    case "ErrCombatStateNotRide":
      return EErrorCode.ErrCombatStateNotRide;
    case 6703:
    case "ErrAlreadyRide":
      return EErrorCode.ErrAlreadyRide;
    case 6704:
    case "ErrRideNotEnough":
      return EErrorCode.ErrRideNotEnough;
    case 6705:
    case "ErrCreateVehicleActorFailed":
      return EErrorCode.ErrCreateVehicleActorFailed;
    case 6706:
    case "ErrNotVehicleOwner":
      return EErrorCode.ErrNotVehicleOwner;
    case 6707:
    case "ErrVehicleHasController":
      return EErrorCode.ErrVehicleHasController;
    case 6708:
    case "ErrVehicleNoSeat":
      return EErrorCode.ErrVehicleNoSeat;
    case 6709:
    case "ErrVehicleHasSeat":
      return EErrorCode.ErrVehicleHasSeat;
    case 6710:
    case "ErrNotRideVehicle":
      return EErrorCode.ErrNotRideVehicle;
    case 6711:
    case "ErrVehicleNotExits":
      return EErrorCode.ErrVehicleNotExits;
    case 6712:
    case "ErrInvalidRidePropertyType":
      return EErrorCode.ErrInvalidRidePropertyType;
    case 6713:
    case "ErrRideApplyTargetUserNotExist":
      return EErrorCode.ErrRideApplyTargetUserNotExist;
    case 6714:
    case "ErrRideConfigNotFind":
      return EErrorCode.ErrRideConfigNotFind;
    case 6715:
    case "ErrRideNotUnlock":
      return EErrorCode.ErrRideNotUnlock;
    case 6716:
    case "ErrRideNotFind":
      return EErrorCode.ErrRideNotFind;
    case 6717:
    case "ErrInvalidRideType":
      return EErrorCode.ErrInvalidRideType;
    case 6718:
    case "ErrRideApplyAlreadyExist":
      return EErrorCode.ErrRideApplyAlreadyExist;
    case 6719:
    case "ErrRideApplyNotRideVehicle":
      return EErrorCode.ErrRideApplyNotRideVehicle;
    case 6720:
    case "ErrRideApplyVehicleNotSeat":
      return EErrorCode.ErrRideApplyVehicleNotSeat;
    case 6721:
    case "ErrRideAlReadyRide":
      return EErrorCode.ErrRideAlReadyRide;
    case 6722:
    case "ErrRideApplyTargetTooFar":
      return EErrorCode.ErrRideApplyTargetTooFar;
    case 6723:
    case "ErrRideNotTake":
      return EErrorCode.ErrRideNotTake;
    case 6724:
    case "ErrRideInteracting":
      return EErrorCode.ErrRideInteracting;
    case 6725:
    case "ErrShapeshiftNotRide":
      return EErrorCode.ErrShapeshiftNotRide;
    case 6726:
    case "ErrFishingNotRide":
      return EErrorCode.ErrFishingNotRide;
    case 6727:
    case "ErrRideStateReject":
      return EErrorCode.ErrRideStateReject;
    case 6728:
    case "ErrRideTypeNotSupport":
      return EErrorCode.ErrRideTypeNotSupport;
    case 6729:
    case "ErrRideNotControl":
      return EErrorCode.ErrRideNotControl;
    case 6730:
    case "ErrRideNotFunction":
      return EErrorCode.ErrRideNotFunction;
    case 6731:
    case "ErrRideSkinNotSupport":
      return EErrorCode.ErrRideSkinNotSupport;
    case 6732:
    case "ErrRideSkinNotUnlock":
      return EErrorCode.ErrRideSkinNotUnlock;
    case 6733:
    case "ErrRideSkinDataAddFailed":
      return EErrorCode.ErrRideSkinDataAddFailed;
    case 6734:
    case "ErrRideSkinNotSkin":
      return EErrorCode.ErrRideSkinNotSkin;
    case 6735:
    case "ErrRideSkinAlreadyActivate":
      return EErrorCode.ErrRideSkinAlreadyActivate;
    case 7000:
    case "ErrWarehouseHas":
      return EErrorCode.ErrWarehouseHas;
    case 7001:
    case "ErrWarehouseNoHas":
      return EErrorCode.ErrWarehouseNoHas;
    case 7002:
    case "ErrWarehouseNoMem":
      return EErrorCode.ErrWarehouseNoMem;
    case 7003:
    case "ErrWarehouseNoPresident":
      return EErrorCode.ErrWarehouseNoPresident;
    case 7004:
    case "ErrWarehouseNoHasItem":
      return EErrorCode.ErrWarehouseNoHasItem;
    case 7005:
    case "ErrWarehouseItemNoDeposit":
      return EErrorCode.ErrWarehouseItemNoDeposit;
    case 7006:
    case "ErrWarehouseGridPosNoExist":
      return EErrorCode.ErrWarehouseGridPosNoExist;
    case 7007:
    case "ErrWarehouseGridPosItemNoEnough":
      return EErrorCode.ErrWarehouseGridPosItemNoEnough;
    case 7008:
    case "ErrWarehouseNoInviteSelf":
      return EErrorCode.ErrWarehouseNoInviteSelf;
    case 7009:
    case "ErrWarehouseInviteesHas":
      return EErrorCode.ErrWarehouseInviteesHas;
    case 7010:
    case "ErrWarehouseMemBeyondMax":
      return EErrorCode.ErrWarehouseMemBeyondMax;
    case 7011:
    case "ErrWarehouseGridBeyondMax":
      return EErrorCode.ErrWarehouseGridBeyondMax;
    case 7012:
    case "ErrWarehouseNoSelf":
      return EErrorCode.ErrWarehouseNoSelf;
    case 7013:
    case "ErrWarehouseIsMem":
      return EErrorCode.ErrWarehouseIsMem;
    case 7014:
    case "ErrWarehouseNoExist":
      return EErrorCode.ErrWarehouseNoExist;
    case 7015:
    case "ErrWarehouseDepositBeyondMax":
      return EErrorCode.ErrWarehouseDepositBeyondMax;
    case 7016:
    case "ErrWarehouseTakeOutBeyondMax":
      return EErrorCode.ErrWarehouseTakeOutBeyondMax;
    case 7017:
    case "ErrWarehouseItemIdNotSame":
      return EErrorCode.ErrWarehouseItemIdNotSame;
    case 7018:
    case "ErrWarehouseParams":
      return EErrorCode.ErrWarehouseParams;
    case 7019:
    case "ErrWarehouseNoKickSelf":
      return EErrorCode.ErrWarehouseNoKickSelf;
    case 7020:
    case "ErrWarehousePresidentNoExit":
      return EErrorCode.ErrWarehousePresidentNoExit;
    case 7021:
    case "ErrGashaDrawCount":
      return EErrorCode.ErrGashaDrawCount;
    case 7022:
    case "ErrGashaDrawLimit":
      return EErrorCode.ErrGashaDrawLimit;
    case 7023:
    case "ErrGashaInvalidWishId":
      return EErrorCode.ErrGashaInvalidWishId;
    case 7026:
    case "EErGashaWishRepeated":
      return EErrorCode.EErGashaWishRepeated;
    case 7027:
    case "EErGashaWishCountNoEnough":
      return EErrorCode.EErGashaWishCountNoEnough;
    case 7028:
    case "ErrWarehouseAuthority":
      return EErrorCode.ErrWarehouseAuthority;
    case 7051:
    case "ErrEquipCantDecompose":
      return EErrorCode.ErrEquipCantDecompose;
    case 7052:
    case "ErrEquipNotRecastRecord":
      return EErrorCode.ErrEquipNotRecastRecord;
    case 7053:
    case "ErrEquipOnCantUsedRecastConsume":
      return EErrorCode.ErrEquipOnCantUsedRecastConsume;
    case 7054:
    case "ErrEquipWeaponNotEqualProfession":
      return EErrorCode.ErrEquipWeaponNotEqualProfession;
    case 7055:
    case "ErrEquipSlotRefineBlessNotFit":
      return EErrorCode.ErrEquipSlotRefineBlessNotFit;
    case 7056:
    case "ErrEquipNotRecast":
      return EErrorCode.ErrEquipNotRecast;
    case 7057:
    case "ErrEquipEnchantItemMismatch":
      return EErrorCode.ErrEquipEnchantItemMismatch;
    case 7058:
    case "ErrEquipEnchantAlreadyEnchanted":
      return EErrorCode.ErrEquipEnchantAlreadyEnchanted;
    case 7059:
    case "ErrEquipAnyItemMismatch":
      return EErrorCode.ErrEquipAnyItemMismatch;
    case 7060:
    case "ErrEquipSlotRefineBlessNumTooMuch":
      return EErrorCode.ErrEquipSlotRefineBlessNumTooMuch;
    case 7061:
    case "ErrEquipNameGroupNoMatch":
      return EErrorCode.ErrEquipNameGroupNoMatch;
    case 7062:
    case "ErrEquipPerfectionNoMatch":
      return EErrorCode.ErrEquipPerfectionNoMatch;
    case 7063:
    case "ErrEquipNotBreak":
      return EErrorCode.ErrEquipNotBreak;
    case 7064:
    case "ErrEquipPutOnIng":
      return EErrorCode.ErrEquipPutOnIng;
    case 7065:
    case "ErrEquipDecomposeOverflow":
      return EErrorCode.ErrEquipDecomposeOverflow;
    case 7101:
    case "ErrUserIsMatching":
      return EErrorCode.ErrUserIsMatching;
    case 7102:
    case "ErrUserNotInMatching":
      return EErrorCode.ErrUserNotInMatching;
    case 7103:
    case "ErrUseNotWaitReady":
      return EErrorCode.ErrUseNotWaitReady;
    case 7104:
    case "ErrDungeonCantMatch":
      return EErrorCode.ErrDungeonCantMatch;
    case 7105:
    case "ErrMatchQueueFull":
      return EErrorCode.ErrMatchQueueFull;
    case 7151:
    case "ErrCommonAwardCantReceive":
      return EErrorCode.ErrCommonAwardCantReceive;
    case 7152:
    case "ErrCommonAwardHasReceived":
      return EErrorCode.ErrCommonAwardHasReceived;
    case 7201:
    case "ErrCraftEnergyNotEnough":
      return EErrorCode.ErrCraftEnergyNotEnough;
    case 7202:
    case "ErrCraftEnergyFull":
      return EErrorCode.ErrCraftEnergyFull;
    case 7250:
    case "ErrRecommendPlayNotOpen":
      return EErrorCode.ErrRecommendPlayNotOpen;
    case 7251:
    case "ErrWeeklyTowerNoStart":
      return EErrorCode.ErrWeeklyTowerNoStart;
    case 7252:
    case "ErrWeeklyTowerHasEnd":
      return EErrorCode.ErrWeeklyTowerHasEnd;
    case 7253:
    case "ErrWeeklyNoMeetProcessAward":
      return EErrorCode.ErrWeeklyNoMeetProcessAward;
    case 7254:
    case "ErrWeeklyHasRewardProcessAward":
      return EErrorCode.ErrWeeklyHasRewardProcessAward;
    case 7255:
    case "ErrWeeklyNoLayerStageAward":
      return EErrorCode.ErrWeeklyNoLayerStageAward;
    case 7256:
    case "ErrWeekOnlyCurSeasonAward":
      return EErrorCode.ErrWeekOnlyCurSeasonAward;
    case 7257:
    case "ErrWeeklyTowerCannotEnterLayer":
      return EErrorCode.ErrWeeklyTowerCannotEnterLayer;
    case 7258:
    case "ErrWeeklyTowerBoxHasOpen":
      return EErrorCode.ErrWeeklyTowerBoxHasOpen;
    case 7259:
    case "ErrWeeklyTowerNoBox":
      return EErrorCode.ErrWeeklyTowerNoBox;
    case 7260:
    case "ErrWeeklyTowerNoStageAward":
      return EErrorCode.ErrWeeklyTowerNoStageAward;
    case 7261:
    case "ErrWeeklyTowerNoTowerDungeon":
      return EErrorCode.ErrWeeklyTowerNoTowerDungeon;
    case 7262:
    case "ErrWeeklyTowerLayerNotSatisfy":
      return EErrorCode.ErrWeeklyTowerLayerNotSatisfy;
    case 7271:
    case "ErrFunctionNoAward":
      return EErrorCode.ErrFunctionNoAward;
    case 7272:
    case "ErrFunctionHasDrawn":
      return EErrorCode.ErrFunctionHasDrawn;
    case 7281:
    case "ErrTLogIllegalExportArea":
      return EErrorCode.ErrTLogIllegalExportArea;
    case 7300:
    case "ErrPayOrderFail":
      return EErrorCode.ErrPayOrderFail;
    case 7301:
    case "ErrPayCostNotEnough":
      return EErrorCode.ErrPayCostNotEnough;
    case 7302:
    case "ErrPayCantBuy":
      return EErrorCode.ErrPayCantBuy;
    case 7303:
    case "ErrPayCantExplore":
      return EErrorCode.ErrPayCantExplore;
    case 7350:
    case "ErrActivityNotFind":
      return EErrorCode.ErrActivityNotFind;
    case 7351:
    case "ErrActivityOffline":
      return EErrorCode.ErrActivityOffline;
    case 7352:
    case "ErrActivityNotOpen":
      return EErrorCode.ErrActivityNotOpen;
    case 7353:
    case "ErrActivityRewardNotFound":
      return EErrorCode.ErrActivityRewardNotFound;
    case 7354:
    case "ErrActivityConditionNotFinish":
      return EErrorCode.ErrActivityConditionNotFinish;
    case 7355:
    case "ErrActivityAlreadyObtain":
      return EErrorCode.ErrActivityAlreadyObtain;
    case 7356:
    case "ErrActivityNotUnlock":
      return EErrorCode.ErrActivityNotUnlock;
    case 7401:
    case "ErrEmojiConfigError":
      return EErrorCode.ErrEmojiConfigError;
    case 7402:
    case "ErrEmojiAlreadyUnlock":
      return EErrorCode.ErrEmojiAlreadyUnlock;
    case 7403:
    case "ErrEmojiUnlockItemError":
      return EErrorCode.ErrEmojiUnlockItemError;
    case 7404:
    case "ErrEmojiUnlockItemErrorItemNotEnough":
      return EErrorCode.ErrEmojiUnlockItemErrorItemNotEnough;
    case 7405:
    case "ErrEmojiUnlock":
      return EErrorCode.ErrEmojiUnlock;
    case 7406:
    case "ErrGlobalConditionNotFound":
      return EErrorCode.ErrGlobalConditionNotFound;
    case 7407:
    case "ErrGlobalConditionNotLuckyValue":
      return EErrorCode.ErrGlobalConditionNotLuckyValue;
    case 7412:
    case "ErrPathFindingCant":
      return EErrorCode.ErrPathFindingCant;
    case 7413:
    case "ErrPathFindingDataError":
      return EErrorCode.ErrPathFindingDataError;
    case 7414:
    case "ErrPathFindingEndPosError":
      return EErrorCode.ErrPathFindingEndPosError;
    case 7415:
    case "ErrPathFindingStartPosError":
      return EErrorCode.ErrPathFindingStartPosError;
    case 7416:
    case "ErrPathFindingNoPath":
      return EErrorCode.ErrPathFindingNoPath;
    case 7421:
    case "ErrSignNotOpen":
      return EErrorCode.ErrSignNotOpen;
    case 7422:
    case "ErrSignNotSigned":
      return EErrorCode.ErrSignNotSigned;
    case 7423:
    case "ErrSignAlreadySigned":
      return EErrorCode.ErrSignAlreadySigned;
    case 7424:
    case "ErrSignTimeError":
      return EErrorCode.ErrSignTimeError;
    case 7501:
    case "CdKeyInvalid":
      return EErrorCode.CdKeyInvalid;
    case 7502:
    case "CdKeyDuplicate":
      return EErrorCode.CdKeyDuplicate;
    case 7503:
    case "CdKeyExpired":
      return EErrorCode.CdKeyExpired;
    case 7504:
    case "CdKeyNotFound":
      return EErrorCode.CdKeyNotFound;
    case 7505:
    case "CdKeyNotActivated":
      return EErrorCode.CdKeyNotActivated;
    case 7506:
    case "CdKeyPlayerLevelTooLow":
      return EErrorCode.CdKeyPlayerLevelTooLow;
    case 7507:
    case "CdKeyTakeLimitReached":
      return EErrorCode.CdKeyTakeLimitReached;
    case 7508:
    case "CdKeyGroupNotFound":
      return EErrorCode.CdKeyGroupNotFound;
    case 9998:
    case "ErrTokenBucketLimit":
      return EErrorCode.ErrTokenBucketLimit;
    case 9999:
    case "ErrUnknown":
      return EErrorCode.ErrUnknown;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EErrorCode.UNRECOGNIZED;
  }
}

export function eErrorCodeToJSON(object: EErrorCode): string {
  switch (object) {
    case EErrorCode.ErrSuccess:
      return "ErrSuccess";
    case EErrorCode.ErrNoRecord:
      return "ErrNoRecord";
    case EErrorCode.ErrExceptionCancel:
      return "ErrExceptionCancel";
    case EErrorCode.ErrDBException:
      return "ErrDBException";
    case EErrorCode.ErrDBSeqException:
      return "ErrDBSeqException";
    case EErrorCode.ErrDBSceneException:
      return "ErrDBSceneException";
    case EErrorCode.ErrDBTokenException:
      return "ErrDBTokenException";
    case EErrorCode.ErrCancelled:
      return "ErrCancelled";
    case EErrorCode.ErrUnknownRpc:
      return "ErrUnknownRpc";
    case EErrorCode.ErrInvalidArgument:
      return "ErrInvalidArgument";
    case EErrorCode.ErrDeadlineExceeded:
      return "ErrDeadlineExceeded";
    case EErrorCode.ErrNotFound:
      return "ErrNotFound";
    case EErrorCode.ErrAlreadyExists:
      return "ErrAlreadyExists";
    case EErrorCode.ErrPermissionDenied:
      return "ErrPermissionDenied";
    case EErrorCode.ErrResourceExhausted:
      return "ErrResourceExhausted";
    case EErrorCode.ErrFailedPrecondition:
      return "ErrFailedPrecondition";
    case EErrorCode.ErrAborted:
      return "ErrAborted";
    case EErrorCode.ErrOutOfRange:
      return "ErrOutOfRange";
    case EErrorCode.ErrUnimplemented:
      return "ErrUnimplemented";
    case EErrorCode.ErrInternal:
      return "ErrInternal";
    case EErrorCode.ErrUnavailable:
      return "ErrUnavailable";
    case EErrorCode.ErrDataLoss:
      return "ErrDataLoss";
    case EErrorCode.ErrUnauthenticated:
      return "ErrUnauthenticated";
    case EErrorCode.ErrSystemMax:
      return "ErrSystemMax";
    case EErrorCode.ErrDBError:
      return "ErrDBError";
    case EErrorCode.ErrCreateOpenInfo:
      return "ErrCreateOpenInfo";
    case EErrorCode.ErrCreateAccountInfo:
      return "ErrCreateAccountInfo";
    case EErrorCode.ErrCreateCharInfo:
      return "ErrCreateCharInfo";
    case EErrorCode.ErrCreateAccountToken:
      return "ErrCreateAccountToken";
    case EErrorCode.ErrGetOpenInfo:
      return "ErrGetOpenInfo";
    case EErrorCode.ErrGetAccountInfo:
      return "ErrGetAccountInfo";
    case EErrorCode.ErrGetCharInfo:
      return "ErrGetCharInfo";
    case EErrorCode.ErrGetAccountToken:
      return "ErrGetAccountToken";
    case EErrorCode.ErrLoginInQueue:
      return "ErrLoginInQueue";
    case EErrorCode.ErrOtherLogin:
      return "ErrOtherLogin";
    case EErrorCode.ErrServerError:
      return "ErrServerError";
    case EErrorCode.ErrNoAccountInfo:
      return "ErrNoAccountInfo";
    case EErrorCode.ErrNoCharInfo:
      return "ErrNoCharInfo";
    case EErrorCode.ErrTokenExpired:
      return "ErrTokenExpired";
    case EErrorCode.ErrUpdateTokenFail:
      return "ErrUpdateTokenFail";
    case EErrorCode.ErrRegIntoSceneError:
      return "ErrRegIntoSceneError";
    case EErrorCode.ErrLoginTypeErr:
      return "ErrLoginTypeErr";
    case EErrorCode.ErrChangeMapErr:
      return "ErrChangeMapErr";
    case EErrorCode.ErrLoginPlatformErr:
      return "ErrLoginPlatformErr";
    case EErrorCode.ErrVersionErr:
      return "ErrVersionErr";
    case EErrorCode.ErrDelayOffLineKickOff:
      return "ErrDelayOffLineKickOff";
    case EErrorCode.ErrServiceLanguageError:
      return "ErrServiceLanguageError";
    case EErrorCode.NoEnterScene:
      return "NoEnterScene";
    case EErrorCode.ModIDNotOpen:
      return "ModIDNotOpen";
    case EErrorCode.ErrFaceData:
      return "ErrFaceData";
    case EErrorCode.ErrInitProfession:
      return "ErrInitProfession";
    case EErrorCode.ErrSceneCloseKickoff:
      return "ErrSceneCloseKickoff";
    case EErrorCode.ErrLoginReconnectKick:
      return "ErrLoginReconnectKick";
    case EErrorCode.ErrLoginErrorResume:
      return "ErrLoginErrorResume";
    case EErrorCode.ErrRepeatedLogin:
      return "ErrRepeatedLogin";
    case EErrorCode.ErrRestrictLogin:
      return "ErrRestrictLogin";
    case EErrorCode.ErrRestrictBlack:
      return "ErrRestrictBlack";
    case EErrorCode.ErrSdkVerifyFail:
      return "ErrSdkVerifyFail";
    case EErrorCode.ErrSdkTokenExpired:
      return "ErrSdkTokenExpired";
    case EErrorCode.ErrServerNotOpen:
      return "ErrServerNotOpen";
    case EErrorCode.ErrServerEndOpen:
      return "ErrServerEndOpen";
    case EErrorCode.ErrNormalKick:
      return "ErrNormalKick";
    case EErrorCode.ErrServerBusy:
      return "ErrServerBusy";
    case EErrorCode.ErrServerClose:
      return "ErrServerClose";
    case EErrorCode.ErrExitGame:
      return "ErrExitGame";
    case EErrorCode.ErrHopeKick:
      return "ErrHopeKick";
    case EErrorCode.ErrClientVersionError:
      return "ErrClientVersionError";
    case EErrorCode.ErrInvalidDeviceId:
      return "ErrInvalidDeviceId";
    case EErrorCode.ErrInvalidSystemType:
      return "ErrInvalidSystemType";
    case EErrorCode.ErrDeleteChar:
      return "ErrDeleteChar";
    case EErrorCode.ErrCancelDeleteChar:
      return "ErrCancelDeleteChar";
    case EErrorCode.ErrCancelDeleteCharIsDelete:
      return "ErrCancelDeleteCharIsDelete";
    case EErrorCode.ErrIntoSceneOwnerFail:
      return "ErrIntoSceneOwnerFail";
    case EErrorCode.ErrLoginNoEnoughToken:
      return "ErrLoginNoEnoughToken";
    case EErrorCode.ErrSceneQueueUp:
      return "ErrSceneQueueUp";
    case EErrorCode.ErrProtocolVersionErr:
      return "ErrProtocolVersionErr";
    case EErrorCode.ErrConfigVersionErr:
      return "ErrConfigVersionErr";
    case EErrorCode.ErrStateEventFailed:
      return "ErrStateEventFailed";
    case EErrorCode.ErrSelectCharDoing:
      return "ErrSelectCharDoing";
    case EErrorCode.ErrSelectCharDeleted:
      return "ErrSelectCharDeleted";
    case EErrorCode.ErrLoginChannelMax:
      return "ErrLoginChannelMax";
    case EErrorCode.ErrDeleteAccountKick:
      return "ErrDeleteAccountKick";
    case EErrorCode.ErrIsDeleteAccount:
      return "ErrIsDeleteAccount";
    case EErrorCode.ErrIsVersionKick:
      return "ErrIsVersionKick";
    case EErrorCode.ErrNotQQChnnel:
      return "ErrNotQQChnnel";
    case EErrorCode.ErrIncorrectLaunchPlatform:
      return "ErrIncorrectLaunchPlatform";
    case EErrorCode.ErrConditionWrong:
      return "ErrConditionWrong";
    case EErrorCode.ErrNotSupportLoginType:
      return "ErrNotSupportLoginType";
    case EErrorCode.ErrSceneNotExist:
      return "ErrSceneNotExist";
    case EErrorCode.ErrUserNotExist:
      return "ErrUserNotExist";
    case EErrorCode.ErrComponentNotExist:
      return "ErrComponentNotExist";
    case EErrorCode.ErrSceneConfigNotExist:
      return "ErrSceneConfigNotExist";
    case EErrorCode.ErrServiceNotExist:
      return "ErrServiceNotExist";
    case EErrorCode.ErrDataContainerNotExist:
      return "ErrDataContainerNotExist";
    case EErrorCode.ErrAsynchronousReturn:
      return "ErrAsynchronousReturn";
    case EErrorCode.ErrConfigNotExist:
      return "ErrConfigNotExist";
    case EErrorCode.ErrNotUser:
      return "ErrNotUser";
    case EErrorCode.ErrConfigError:
      return "ErrConfigError";
    case EErrorCode.ErrActorNotExist:
      return "ErrActorNotExist";
    case EErrorCode.ErrCutSceneAlreadyPlayed:
      return "ErrCutSceneAlreadyPlayed";
    case EErrorCode.ErrFunctionUnlock:
      return "ErrFunctionUnlock";
    case EErrorCode.ErrFunctionClosed:
      return "ErrFunctionClosed";
    case EErrorCode.ErrUserPlayerNotFurniturePackage:
      return "ErrUserPlayerNotFurniturePackage";
    case EErrorCode.ErrSysInnerError:
      return "ErrSysInnerError";
    case EErrorCode.ErrSysWebClientNull:
      return "ErrSysWebClientNull";
    case EErrorCode.ErrSysWebRequestTimeOut:
      return "ErrSysWebRequestTimeOut";
    case EErrorCode.ErrSysWebReturnError:
      return "ErrSysWebReturnError";
    case EErrorCode.ErrRequestTooFrequently:
      return "ErrRequestTooFrequently";
    case EErrorCode.ErrArgStringTooLong:
      return "ErrArgStringTooLong";
    case EErrorCode.ErrArgStringEmpty:
      return "ErrArgStringEmpty";
    case EErrorCode.ErrArgArrayTooBig:
      return "ErrArgArrayTooBig";
    case EErrorCode.ErrArgArrayEmpty:
      return "ErrArgArrayEmpty";
    case EErrorCode.ErrArgMapTooBig:
      return "ErrArgMapTooBig";
    case EErrorCode.ErrArgMapEmpty:
      return "ErrArgMapEmpty";
    case EErrorCode.ErrItemNotExist:
      return "ErrItemNotExist";
    case EErrorCode.ErrPackageNotExist:
      return "ErrPackageNotExist";
    case EErrorCode.ErrPackageFull:
      return "ErrPackageFull";
    case EErrorCode.ErrItemExpireTime:
      return "ErrItemExpireTime";
    case EErrorCode.ErrItemPackageGridNotEnough:
      return "ErrItemPackageGridNotEnough";
    case EErrorCode.ErrItemUUIDError:
      return "ErrItemUUIDError";
    case EErrorCode.ErrItemNotEnough:
      return "ErrItemNotEnough";
    case EErrorCode.ErrOptTypeError:
      return "ErrOptTypeError";
    case EErrorCode.ErrItemInCoolDown:
      return "ErrItemInCoolDown";
    case EErrorCode.ErrItemNotUse:
      return "ErrItemNotUse";
    case EErrorCode.ErrItemEffectTypeError:
      return "ErrItemEffectTypeError";
    case EErrorCode.ErrItemParamError:
      return "ErrItemParamError";
    case EErrorCode.ErrItemAddBuffError:
      return "ErrItemAddBuffError";
    case EErrorCode.ErrItemAdd:
      return "ErrItemAdd";
    case EErrorCode.ErrUseItemState:
      return "ErrUseItemState";
    case EErrorCode.ErrBatchUse:
      return "ErrBatchUse";
    case EErrorCode.ErrFullSendMail:
      return "ErrFullSendMail";
    case EErrorCode.ErrItemNumZero:
      return "ErrItemNumZero";
    case EErrorCode.ErrItemSelectAwardIllegalNum:
      return "ErrItemSelectAwardIllegalNum";
    case EErrorCode.ErrItemSelectAwardIllegalPos:
      return "ErrItemSelectAwardIllegalPos";
    case EErrorCode.ErrItemSelectLimit:
      return "ErrItemSelectLimit";
    case EErrorCode.ErrItemPeriodGainExceeded:
      return "ErrItemPeriodGainExceeded";
    case EErrorCode.ErrItemNoRecycle:
      return "ErrItemNoRecycle";
    case EErrorCode.ErrItemRecycleBeyondMaxGrid:
      return "ErrItemRecycleBeyondMaxGrid";
    case EErrorCode.ErrItemRecycleBeyondMaxNum:
      return "ErrItemRecycleBeyondMaxNum";
    case EErrorCode.ErrItemRecycleIdNoMatchItemId:
      return "ErrItemRecycleIdNoMatchItemId";
    case EErrorCode.ErrItemRecycleIllegalId:
      return "ErrItemRecycleIllegalId";
    case EErrorCode.ErrItemLimitCount:
      return "ErrItemLimitCount";
    case EErrorCode.ErrItemFriendPontExceeded:
      return "ErrItemFriendPontExceeded";
    case EErrorCode.ErrItemToySingleEntUseExceeded:
      return "ErrItemToySingleEntUseExceeded";
    case EErrorCode.ErrItemToySceneUseExceeded:
      return "ErrItemToySceneUseExceeded";
    case EErrorCode.ErrItemToyUseInDisableArea:
      return "ErrItemToyUseInDisableArea";
    case EErrorCode.ErrItemToySingleCellUseExceeded:
      return "ErrItemToySingleCellUseExceeded";
    case EErrorCode.ErrItemToyCantUse:
      return "ErrItemToyCantUse";
    case EErrorCode.ErrItemLifeProfessionExceeded:
      return "ErrItemLifeProfessionExceeded";
    case EErrorCode.ErrMonthlyCardNotExists:
      return "ErrMonthlyCardNotExists";
    case EErrorCode.ErrMonthlyCardDataError:
      return "ErrMonthlyCardDataError";
    case EErrorCode.ErrMonthlyCardDayAwardReceived:
      return "ErrMonthlyCardDayAwardReceived";
    case EErrorCode.ErrMonthlyCardLimitCount:
      return "ErrMonthlyCardLimitCount";
    case EErrorCode.ErrCommunityNoHome:
      return "ErrCommunityNoHome";
    case EErrorCode.ErrNotHouseOwner:
      return "ErrNotHouseOwner";
    case EErrorCode.ErrHomeLandExisted:
      return "ErrHomeLandExisted";
    case EErrorCode.ErrHomeLandContentWrongful:
      return "ErrHomeLandContentWrongful";
    case EErrorCode.ErrHouseLivetogetherCD:
      return "ErrHouseLivetogetherCD";
    case EErrorCode.ErrHomeLandNotExisted:
      return "ErrHomeLandNotExisted";
    case EErrorCode.ErrHomeLandNotInScene:
      return "ErrHomeLandNotInScene";
    case EErrorCode.ErrHomeLandIsInvitation:
      return "ErrHomeLandIsInvitation";
    case EErrorCode.ErrHomeLandInsufficientAuthority:
      return "ErrHomeLandInsufficientAuthority";
    case EErrorCode.ErrHomeLandTransferRequestPending:
      return "ErrHomeLandTransferRequestPending";
    case EErrorCode.ErrHomeLandTransferRequestTimeout:
      return "ErrHomeLandTransferRequestTimeout";
    case EErrorCode.ErrHomeLandTransferCD:
      return "ErrHomeLandTransferCD";
    case EErrorCode.ErrHomelandTargetIsHasHome:
      return "ErrHomelandTargetIsHasHome";
    case EErrorCode.ErrHomelandTargetIsOwner:
      return "ErrHomelandTargetIsOwner";
    case EErrorCode.ErrHomelandNotOwnerCannotOperate:
      return "ErrHomelandNotOwnerCannotOperate";
    case EErrorCode.ErrHomeLandHasHouse:
      return "ErrHomeLandHasHouse";
    case EErrorCode.ErrHomeLandContentTooLong:
      return "ErrHomeLandContentTooLong";
    case EErrorCode.ErrHomeLandClutterNotExist:
      return "ErrHomeLandClutterNotExist";
    case EErrorCode.ErrHouseNameOrStatementCD:
      return "ErrHouseNameOrStatementCD";
    case EErrorCode.ErrHouseIntroductionStatementCD:
      return "ErrHouseIntroductionStatementCD";
    case EErrorCode.ErrCommunityBuildInvalidRecipeId:
      return "ErrCommunityBuildInvalidRecipeId";
    case EErrorCode.ErrCommunityBuildRecipeIsUnlock:
      return "ErrCommunityBuildRecipeIsUnlock";
    case EErrorCode.ErrCommunityBuildMax:
      return "ErrCommunityBuildMax";
    case EErrorCode.ErrCommunityBuildNoAuthority:
      return "ErrCommunityBuildNoAuthority";
    case EErrorCode.ErrCommunityNotBuildCannotCancel:
      return "ErrCommunityNotBuildCannotCancel";
    case EErrorCode.ErrCommunityBuildNotSelfCannotCancel:
      return "ErrCommunityBuildNotSelfCannotCancel";
    case EErrorCode.ErrCommunityNotBuildCannotAccelerate:
      return "ErrCommunityNotBuildCannotAccelerate";
    case EErrorCode.ErrCommunityBuildNotSelfCannotAccelerate:
      return "ErrCommunityBuildNotSelfCannotAccelerate";
    case EErrorCode.ErrCommunityBuildCannotAccelerate:
      return "ErrCommunityBuildCannotAccelerate";
    case EErrorCode.ErrCommunityBuildAlreadyAccelerate:
      return "ErrCommunityBuildAlreadyAccelerate";
    case EErrorCode.ErrCommunityBuildInDungeon:
      return "ErrCommunityBuildInDungeon";
    case EErrorCode.ErrCommunityBuildRecipeIsLock:
      return "ErrCommunityBuildRecipeIsLock";
    case EErrorCode.ErrCommunityBuildRecipeNotItemUnlock:
      return "ErrCommunityBuildRecipeNotItemUnlock";
    case EErrorCode.ErrCommunityBuildInvalidCount:
      return "ErrCommunityBuildInvalidCount";
    case EErrorCode.ErrCommunityNotBuildCannotReceive:
      return "ErrCommunityNotBuildCannotReceive";
    case EErrorCode.ErrCommunityCanNotBuild:
      return "ErrCommunityCanNotBuild";
    case EErrorCode.ErrHomeLandCohabitantLimit:
      return "ErrHomeLandCohabitantLimit";
    case EErrorCode.ErrHomeLandRootNotQuitCohabitant:
      return "ErrHomeLandRootNotQuitCohabitant";
    case EErrorCode.ErrHomeLandNotOwnerCannotQuitCohabitant:
      return "ErrHomeLandNotOwnerCannotQuitCohabitant";
    case EErrorCode.ErrHomeLandCohabitantIsExiting:
      return "ErrHomeLandCohabitantIsExiting";
    case EErrorCode.ErrHomeLandCohabitantNotExists:
      return "ErrHomeLandCohabitantNotExists";
    case EErrorCode.ErrHomeLandCohabitantExitRequestExists:
      return "ErrHomeLandCohabitantExitRequestExists";
    case EErrorCode.ErrHomeLandCohabitantDismiss:
      return "ErrHomeLandCohabitantDismiss";
    case EErrorCode.ErrHomeLandNotInvitation:
      return "ErrHomeLandNotInvitation";
    case EErrorCode.ErrHomeLandCohabitantInvitationTimeout:
      return "ErrHomeLandCohabitantInvitationTimeout";
    case EErrorCode.ErrHomeLandCohabitantNotFriend:
      return "ErrHomeLandCohabitantNotFriend";
    case EErrorCode.ErrHomeLandCohabitantFriendLevel:
      return "ErrHomeLandCohabitantFriendLevel";
    case EErrorCode.ErrHomeLandCohabitantLevel:
      return "ErrHomeLandCohabitantLevel";
    case EErrorCode.ErrHomeLandInviteCohabitantNotOwner:
      return "ErrHomeLandInviteCohabitantNotOwner";
    case EErrorCode.ErrCommunityWarehouseGridFull:
      return "ErrCommunityWarehouseGridFull";
    case EErrorCode.ErrCommunityWarehouseNoAuthority:
      return "ErrCommunityWarehouseNoAuthority";
    case EErrorCode.ErrCommunityWarehouseGridPosItemNoEnough:
      return "ErrCommunityWarehouseGridPosItemNoEnough";
    case EErrorCode.ErrHomeLandInsufficientFurniture:
      return "ErrHomeLandInsufficientFurniture";
    case EErrorCode.ErrCommunityWarehouseTakeOutCountLimit:
      return "ErrCommunityWarehouseTakeOutCountLimit";
    case EErrorCode.ErrHomeLandTaskNotExist:
      return "ErrHomeLandTaskNotExist";
    case EErrorCode.ErrHomeLandTaskTimeNotEnough:
      return "ErrHomeLandTaskTimeNotEnough";
    case EErrorCode.ErrHomeLandTaskAlreadyFinished:
      return "ErrHomeLandTaskAlreadyFinished";
    case EErrorCode.ErrHomeLandTaskItemNotEnough:
      return "ErrHomeLandTaskItemNotEnough";
    case EErrorCode.ErrHomeLandCurLevelError:
      return "ErrHomeLandCurLevelError";
    case EErrorCode.ErrHomeLandExpNotEnough:
      return "ErrHomeLandExpNotEnough";
    case EErrorCode.ErrHomeLandAlreadyMaxLevel:
      return "ErrHomeLandAlreadyMaxLevel";
    case EErrorCode.ErrHomeLandLevelLocked:
      return "ErrHomeLandLevelLocked";
    case EErrorCode.ErrHomeLandLevelConfigError:
      return "ErrHomeLandLevelConfigError";
    case EErrorCode.ErrCommunityEditorNotEditable:
      return "ErrCommunityEditorNotEditable";
    case EErrorCode.ErrCommunityEditorNotFurniture:
      return "ErrCommunityEditorNotFurniture";
    case EErrorCode.ErrCommunityEditorNotOutdoor:
      return "ErrCommunityEditorNotOutdoor";
    case EErrorCode.ErrCommunityEditorNotIndoor:
      return "ErrCommunityEditorNotIndoor";
    case EErrorCode.ErrCommunityEditorOverMax:
      return "ErrCommunityEditorOverMax";
    case EErrorCode.ErrCommunityEditorOverTypeMax:
      return "ErrCommunityEditorOverTypeMax";
    case EErrorCode.ErrCommunityEditorFurnitureNotEnough:
      return "ErrCommunityEditorFurnitureNotEnough";
    case EErrorCode.ErrCommunityEditorFurnitureNotExist:
      return "ErrCommunityEditorFurnitureNotExist";
    case EErrorCode.ErrCommunityEditorOverMaxGroup:
      return "ErrCommunityEditorOverMaxGroup";
    case EErrorCode.ErrCommunityEditorNoStructure:
      return "ErrCommunityEditorNoStructure";
    case EErrorCode.ErrCommunityEditorGroupMaxStructure:
      return "ErrCommunityEditorGroupMaxStructure";
    case EErrorCode.ErrCommunityEditorStructureInGroup:
      return "ErrCommunityEditorStructureInGroup";
    case EErrorCode.ErrCommunityEditorGroupNotExist:
      return "ErrCommunityEditorGroupNotExist";
    case EErrorCode.ErrCommunityEditorAlreadyExist:
      return "ErrCommunityEditorAlreadyExist";
    case EErrorCode.ErrHomeLandSellItemNotExist:
      return "ErrHomeLandSellItemNotExist";
    case EErrorCode.ErrHomeLandLeftNumNotEnough:
      return "ErrHomeLandLeftNumNotEnough";
    case EErrorCode.ErrHomeLandSellShopLocked:
      return "ErrHomeLandSellShopLocked";
    case EErrorCode.ErrHomeLandSeedExist:
      return "ErrHomeLandSeedExist";
    case EErrorCode.ErrHomeLandItemNotOwner:
      return "ErrHomeLandItemNotOwner";
    case EErrorCode.ErrHomeLandSeedStateError:
      return "ErrHomeLandSeedStateError";
    case EErrorCode.ErrHomeLandNoSeed:
      return "ErrHomeLandNoSeed";
    case EErrorCode.ErrHomeLandNoWater:
      return "ErrHomeLandNoWater";
    case EErrorCode.ErrHomeLandFertilizerMaxNumLimit:
      return "ErrHomeLandFertilizerMaxNumLimit";
    case EErrorCode.ErrHomeLandNotFertilize:
      return "ErrHomeLandNotFertilize";
    case EErrorCode.ErrHomeLandNotPollen:
      return "ErrHomeLandNotPollen";
    case EErrorCode.ErrHomeLandAlreadyPollen:
      return "ErrHomeLandAlreadyPollen";
    case EErrorCode.ErrHomeLandNotHarvest:
      return "ErrHomeLandNotHarvest";
    case EErrorCode.ErrHomeLandPickUpSinglePlayerLimit:
      return "ErrHomeLandPickUpSinglePlayerLimit";
    case EErrorCode.ErrHomeLandPickUpTotalLimit:
      return "ErrHomeLandPickUpTotalLimit";
    case EErrorCode.ErrHomeLandPickUpFlowerNotFinished:
      return "ErrHomeLandPickUpFlowerNotFinished";
    case EErrorCode.ErrHomeLandPickUpOwner:
      return "ErrHomeLandPickUpOwner";
    case EErrorCode.ErrHomeLandGainNotOwner:
      return "ErrHomeLandGainNotOwner";
    case EErrorCode.ErrHomeLandItemFullGrid:
      return "ErrHomeLandItemFullGrid";
    case EErrorCode.ErrHomeLandFurnitureFull:
      return "ErrHomeLandFurnitureFull";
    case EErrorCode.ErrCommunityWarehouseNotBindOrCooldown:
      return "ErrCommunityWarehouseNotBindOrCooldown";
    case EErrorCode.ErrComposeItemNotEnough:
      return "ErrComposeItemNotEnough";
    case EErrorCode.ErrComposeFailed:
      return "ErrComposeFailed";
    case EErrorCode.ErrRedemptionItemNotExist:
      return "ErrRedemptionItemNotExist";
    case EErrorCode.ErrRedemptionItemMaxCount:
      return "ErrRedemptionItemMaxCount";
    case EErrorCode.ErrRedemptionItemNotEnough:
      return "ErrRedemptionItemNotEnough";
    case EErrorCode.ErrRedemptionItemGender:
      return "ErrRedemptionItemGender";
    case EErrorCode.ErrAwardConfigNotFound:
      return "ErrAwardConfigNotFound";
    case EErrorCode.ErrAwardConfigWeightError:
      return "ErrAwardConfigWeightError";
    case EErrorCode.ErrAwardConfigLimitAndContentNotMatch:
      return "ErrAwardConfigLimitAndContentNotMatch";
    case EErrorCode.ErrAwardConfigContentSizeError:
      return "ErrAwardConfigContentSizeError";
    case EErrorCode.ErrAwardConfigContentRatesSizeError:
      return "ErrAwardConfigContentRatesSizeError";
    case EErrorCode.ErrAwardConfigContentWeightSizeError:
      return "ErrAwardConfigContentWeightSizeError";
    case EErrorCode.ErrAwardConfigGroupContentEmpty:
      return "ErrAwardConfigGroupContentEmpty";
    case EErrorCode.ErrAwardConfigGroupNumEmpty:
      return "ErrAwardConfigGroupNumEmpty";
    case EErrorCode.ErrAwardConfigGroupContentNoMatchGroupNum:
      return "ErrAwardConfigGroupContentNoMatchGroupNum";
    case EErrorCode.ErrAwardConfigNoRandomDrop:
      return "ErrAwardConfigNoRandomDrop";
    case EErrorCode.ErrAwardConfigNoSelectAward:
      return "ErrAwardConfigNoSelectAward";
    case EErrorCode.ErrAwardConfigSelfSelectContentNoItem:
      return "ErrAwardConfigSelfSelectContentNoItem";
    case EErrorCode.ErrAwardConfigWeightRateMustOne:
      return "ErrAwardConfigWeightRateMustOne";
    case EErrorCode.ErrAwardConfigGroupContentRandomNoMatch:
      return "ErrAwardConfigGroupContentRandomNoMatch";
    case EErrorCode.ErrAwardConfigGroupContentError:
      return "ErrAwardConfigGroupContentError";
    case EErrorCode.ErrAwardConfigPackageContentRandomNoMatch:
      return "ErrAwardConfigPackageContentRandomNoMatch";
    case EErrorCode.ErrAwardConfigLevelUpPackConfigPackageNoMatch:
      return "ErrAwardConfigLevelUpPackConfigPackageNoMatch";
    case EErrorCode.ErrAwardConfigProItemRuleNoMatch:
      return "ErrAwardConfigProItemRuleNoMatch";
    case EErrorCode.ErrAwardConfigPackageContentEmpty:
      return "ErrAwardConfigPackageContentEmpty";
    case EErrorCode.ErrAwardConfigDropContentSize:
      return "ErrAwardConfigDropContentSize";
    case EErrorCode.ErrAwardConfigDropContentNum:
      return "ErrAwardConfigDropContentNum";
    case EErrorCode.ErrAwardConfigGroupRateEmpty:
      return "ErrAwardConfigGroupRateEmpty";
    case EErrorCode.ErrAwardConfigGroupWeightEmpty:
      return "ErrAwardConfigGroupWeightEmpty";
    case EErrorCode.ErrAwardInnerError:
      return "ErrAwardInnerError";
    case EErrorCode.ErrAwardIllegalRandomType:
      return "ErrAwardIllegalRandomType";
    case EErrorCode.ErrAwardConditionNoMeet:
      return "ErrAwardConditionNoMeet";
    case EErrorCode.ErrAwardRandomTypeNone:
      return "ErrAwardRandomTypeNone";
    case EErrorCode.ErrAwardRandomTypeNoMatch:
      return "ErrAwardRandomTypeNoMatch";
    case EErrorCode.ErrAwardActorIsNull:
      return "ErrAwardActorIsNull";
    case EErrorCode.ErrCounterUpToLimit:
      return "ErrCounterUpToLimit";
    case EErrorCode.ErrEquipWashAttrNotExist:
      return "ErrEquipWashAttrNotExist";
    case EErrorCode.ErrNotEquipInCombat:
      return "ErrNotEquipInCombat";
    case EErrorCode.ErrEquipPart:
      return "ErrEquipPart";
    case EErrorCode.ErrComposeItemNotExist:
      return "ErrComposeItemNotExist";
    case EErrorCode.ErrPickupDropItemDistance:
      return "ErrPickupDropItemDistance";
    case EErrorCode.ErrPickupDropItemPackageFull:
      return "ErrPickupDropItemPackageFull";
    case EErrorCode.ErrPickupDropItemNoAuthority:
      return "ErrPickupDropItemNoAuthority";
    case EErrorCode.ErrLayerActorExist:
      return "ErrLayerActorExist";
    case EErrorCode.ErrTeamCreateHas:
      return "ErrTeamCreateHas";
    case EErrorCode.ErrTeamIllTarget:
      return "ErrTeamIllTarget";
    case EErrorCode.ErrTeamCreateTryLater:
      return "ErrTeamCreateTryLater";
    case EErrorCode.ErrTeamGetNo:
      return "ErrTeamGetNo";
    case EErrorCode.ErrTeamListEmpty:
      return "ErrTeamListEmpty";
    case EErrorCode.ErrTeamInner:
      return "ErrTeamInner";
    case EErrorCode.ErrTeamNoLeader:
      return "ErrTeamNoLeader";
    case EErrorCode.ErrTeamInMatch:
      return "ErrTeamInMatch";
    case EErrorCode.ErrTeamCustomizeTarget:
      return "ErrTeamCustomizeTarget";
    case EErrorCode.ErrTeamNoOwn:
      return "ErrTeamNoOwn";
    case EErrorCode.ErrTeamTickSelf:
      return "ErrTeamTickSelf";
    case EErrorCode.ErrTeamNoMem:
      return "ErrTeamNoMem";
    case EErrorCode.ErrTeamApplyingLeader:
      return "ErrTeamApplyingLeader";
    case EErrorCode.ErrTeamHasBeLeader:
      return "ErrTeamHasBeLeader";
    case EErrorCode.ErrTeamNoTransferSelf:
      return "ErrTeamNoTransferSelf";
    case EErrorCode.ErrTeamNoLeaderTransfer:
      return "ErrTeamNoLeaderTransfer";
    case EErrorCode.ErrTeamHasOwnTeam:
      return "ErrTeamHasOwnTeam";
    case EErrorCode.ErrTeamNoExist:
      return "ErrTeamNoExist";
    case EErrorCode.ErrTeamApplyInCD:
      return "ErrTeamApplyInCD";
    case EErrorCode.ErrTeamApplyExpire:
      return "ErrTeamApplyExpire";
    case EErrorCode.ErrTeamJoinOther:
      return "ErrTeamJoinOther";
    case EErrorCode.ErrTeamMemMax:
      return "ErrTeamMemMax";
    case EErrorCode.ErrTeamNoInvited:
      return "ErrTeamNoInvited";
    case EErrorCode.ErrTeamIsMatching:
      return "ErrTeamIsMatching";
    case EErrorCode.ErrTeamIllegalTag:
      return "ErrTeamIllegalTag";
    case EErrorCode.ErrTeamNoMatching:
      return "ErrTeamNoMatching";
    case EErrorCode.ErrTeamIllegalActivity:
      return "ErrTeamIllegalActivity";
    case EErrorCode.ErrTeamInActivity:
      return "ErrTeamInActivity";
    case EErrorCode.ErrTeamNoMeetCondition:
      return "ErrTeamNoMeetCondition";
    case EErrorCode.ErrTeamWaitVoting:
      return "ErrTeamWaitVoting";
    case EErrorCode.ErrTeamDoingActivity:
      return "ErrTeamDoingActivity";
    case EErrorCode.ErrTeamNoInVoting:
      return "ErrTeamNoInVoting";
    case EErrorCode.ErrTeamVoteEnd:
      return "ErrTeamVoteEnd";
    case EErrorCode.ErrTeamHasVoted:
      return "ErrTeamHasVoted";
    case EErrorCode.ErrTeamInviteCD:
      return "ErrTeamInviteCD";
    case EErrorCode.ErrTeamApplyLeadCD:
      return "ErrTeamApplyLeadCD";
    case EErrorCode.ErrTeamMoreMaxWorlds:
      return "ErrTeamMoreMaxWorlds";
    case EErrorCode.ErrTeamValidApplyInfo:
      return "ErrTeamValidApplyInfo";
    case EErrorCode.ErrTeamInMatchCancelCD:
      return "ErrTeamInMatchCancelCD";
    case EErrorCode.ErrTeamMatchFinished:
      return "ErrTeamMatchFinished";
    case EErrorCode.ErrTeamMatchWaitSec:
      return "ErrTeamMatchWaitSec";
    case EErrorCode.ErrTeamMemWorldFull:
      return "ErrTeamMemWorldFull";
    case EErrorCode.ErrTeamMemNotLeader:
      return "ErrTeamMemNotLeader";
    case EErrorCode.ErrTeamLeaderNotStaticScene:
      return "ErrTeamLeaderNotStaticScene";
    case EErrorCode.ErrTeamLeaderCallDoing:
      return "ErrTeamLeaderCallDoing";
    case EErrorCode.ErrTeamIllegalCallOperator:
      return "ErrTeamIllegalCallOperator";
    case EErrorCode.ErrTeamLeaderIllegalCallOperator:
      return "ErrTeamLeaderIllegalCallOperator";
    case EErrorCode.ErrTeamNoMemCall:
      return "ErrTeamNoMemCall";
    case EErrorCode.ErrTeamLeaderCallEnd:
      return "ErrTeamLeaderCallEnd";
    case EErrorCode.ErrTeamSameScene:
      return "ErrTeamSameScene";
    case EErrorCode.ErrTeamNotSameScene:
      return "ErrTeamNotSameScene";
    case EErrorCode.ErrTeamMemTooMore:
      return "ErrTeamMemTooMore";
    case EErrorCode.ErrTeamMemInDungeon:
      return "ErrTeamMemInDungeon";
    case EErrorCode.ErrTeamMemTooLess:
      return "ErrTeamMemTooLess";
    case EErrorCode.ErrTeamIllegalInviteType:
      return "ErrTeamIllegalInviteType";
    case EErrorCode.ErrTeamMemberNotInScene:
      return "ErrTeamMemberNotInScene";
    case EErrorCode.ErrTeamLeaderReadyCheckTimeNotReady:
      return "ErrTeamLeaderReadyCheckTimeNotReady";
    case EErrorCode.ErrTeamExistDungeonCheck:
      return "ErrTeamExistDungeonCheck";
    case EErrorCode.ErrTeamTargetMatchTalentLimit:
      return "ErrTeamTargetMatchTalentLimit";
    case EErrorCode.ErrTeamEditGroupNotAllowed:
      return "ErrTeamEditGroupNotAllowed";
    case EErrorCode.ErrTeamGroupNotExist:
      return "ErrTeamGroupNotExist";
    case EErrorCode.ErrTeamTargetNoMatchMemberType:
      return "ErrTeamTargetNoMatchMemberType";
    case EErrorCode.ErrTeamMemberInDungeon:
      return "ErrTeamMemberInDungeon";
    case EErrorCode.ErrDecomposeItemNotExist:
      return "ErrDecomposeItemNotExist";
    case EErrorCode.ErrDecomposeItemNotEnough:
      return "ErrDecomposeItemNotEnough";
    case EErrorCode.ErrRefineEnergyNotEnough:
      return "ErrRefineEnergyNotEnough";
    case EErrorCode.ErrRefineItemMaxCount:
      return "ErrRefineItemMaxCount";
    case EErrorCode.ErrRefineItemNotExist:
      return "ErrRefineItemNotExist";
    case EErrorCode.ErrRefineItemColumnNotUnlock:
      return "ErrRefineItemColumnNotUnlock";
    case EErrorCode.ErrRefineItemColumnUnlock:
      return "ErrRefineItemColumnUnlock";
    case EErrorCode.ErrRefineItemExist:
      return "ErrRefineItemExist";
    case EErrorCode.ErrEnergyLimitMax:
      return "ErrEnergyLimitMax";
    case EErrorCode.ErrRefineItemColumnNotEmpty:
      return "ErrRefineItemColumnNotEmpty";
    case EErrorCode.ErrProfessionNotExist:
      return "ErrProfessionNotExist";
    case EErrorCode.ErrModSlotNotUnlock:
      return "ErrModSlotNotUnlock";
    case EErrorCode.ErrChangeProfessionStateFail:
      return "ErrChangeProfessionStateFail";
    case EErrorCode.ErrChangeProfessionCDFail:
      return "ErrChangeProfessionCDFail";
    case EErrorCode.ErrProfessionSkinNotActive:
      return "ErrProfessionSkinNotActive";
    case EErrorCode.ErrProfessionSkinActive:
      return "ErrProfessionSkinActive";
    case EErrorCode.ErrProfessionNotUseSkin:
      return "ErrProfessionNotUseSkin";
    case EErrorCode.ErrProfessionSkillSkinActive:
      return "ErrProfessionSkillSkinActive";
    case EErrorCode.ErrProfessionSkillSkinNotActive:
      return "ErrProfessionSkillSkinNotActive";
    case EErrorCode.ErrProfessionSkillNotActive:
      return "ErrProfessionSkillNotActive";
    case EErrorCode.ErrCharOffline:
      return "ErrCharOffline";
    case EErrorCode.ErrUserDataBaseError:
      return "ErrUserDataBaseError";
    case EErrorCode.ErrCharGetFail:
      return "ErrCharGetFail";
    case EErrorCode.ErrAlreadyAlive:
      return "ErrAlreadyAlive";
    case EErrorCode.ErrReviveParam:
      return "ErrReviveParam";
    case EErrorCode.ErrStateIllegal:
      return "ErrStateIllegal";
    case EErrorCode.ErrStateNoChange:
      return "ErrStateNoChange";
    case EErrorCode.ErrReviveConsumeNotEnough:
      return "ErrReviveConsumeNotEnough";
    case EErrorCode.ErrReviveByOtherForbid:
      return "ErrReviveByOtherForbid";
    case EErrorCode.ErrReviveTimeNotArrived:
      return "ErrReviveTimeNotArrived";
    case EErrorCode.ErrReviveBossBattle:
      return "ErrReviveBossBattle";
    case EErrorCode.ErrReviveCountLimit:
      return "ErrReviveCountLimit";
    case EErrorCode.ErrReviveInDeadTp:
      return "ErrReviveInDeadTp";
    case EErrorCode.ErrDungeonPlayTypeError:
      return "ErrDungeonPlayTypeError";
    case EErrorCode.ErrDungeonNotExist:
      return "ErrDungeonNotExist";
    case EErrorCode.ErrDungeonCreateError:
      return "ErrDungeonCreateError";
    case EErrorCode.ErrCantChangeDungeon:
      return "ErrCantChangeDungeon";
    case EErrorCode.ErrDungeonLock:
      return "ErrDungeonLock";
    case EErrorCode.ErrPioneerFail:
      return "ErrPioneerFail";
    case EErrorCode.ErrAwardFail:
      return "ErrAwardFail";
    case EErrorCode.ErrGsNotEnough:
      return "ErrGsNotEnough";
    case EErrorCode.ErrQuestNotCompleted:
      return "ErrQuestNotCompleted";
    case EErrorCode.ErrDungeonNotClear:
      return "ErrDungeonNotClear";
    case EErrorCode.ErrConditionNotExist:
      return "ErrConditionNotExist";
    case EErrorCode.ErrAwardReceived:
      return "ErrAwardReceived";
    case EErrorCode.ErrCantRepeatedPlay:
      return "ErrCantRepeatedPlay";
    case EErrorCode.ErrNeedPassPreRoom:
      return "ErrNeedPassPreRoom";
    case EErrorCode.ErrDungeonEnterCountLimit:
      return "ErrDungeonEnterCountLimit";
    case EErrorCode.ErrDungeonScoreError:
      return "ErrDungeonScoreError";
    case EErrorCode.ErrDungeonRepeatedVote:
      return "ErrDungeonRepeatedVote";
    case EErrorCode.ErrDungeonChallengeAwardState:
      return "ErrDungeonChallengeAwardState";
    case EErrorCode.ErrDungeonChallengeAffixNotFound:
      return "ErrDungeonChallengeAffixNotFound";
    case EErrorCode.ErrDungeonStateNotActive:
      return "ErrDungeonStateNotActive";
    case EErrorCode.ErrDungeonCantVoteSelf:
      return "ErrDungeonCantVoteSelf";
    case EErrorCode.ErrDungeonPlayerNotEnough:
      return "ErrDungeonPlayerNotEnough";
    case EErrorCode.ErrDungeonPlayerFull:
      return "ErrDungeonPlayerFull";
    case EErrorCode.ErrDungeonCantHeroKey:
      return "ErrDungeonCantHeroKey";
    case EErrorCode.ErrDungeonNotSettlement:
      return "ErrDungeonNotSettlement";
    case EErrorCode.ErrDungeonNotFindRollItem:
      return "ErrDungeonNotFindRollItem";
    case EErrorCode.ErrDungeonCantRoll:
      return "ErrDungeonCantRoll";
    case EErrorCode.ErrDungeonRollFinish:
      return "ErrDungeonRollFinish";
    case EErrorCode.ErrDungeonSelectError:
      return "ErrDungeonSelectError";
    case EErrorCode.ErrDungeonAiModeError:
      return "ErrDungeonAiModeError";
    case EErrorCode.ErrDungeonTargetNotFinish:
      return "ErrDungeonTargetNotFinish";
    case EErrorCode.ErrDungeonTargetBeAward:
      return "ErrDungeonTargetBeAward";
    case EErrorCode.ErrDungeonSinglePlayerMore:
      return "ErrDungeonSinglePlayerMore";
    case EErrorCode.ErrDungeonAiGroupNotEnough:
      return "ErrDungeonAiGroupNotEnough";
    case EErrorCode.ErrDungeonNoPass:
      return "ErrDungeonNoPass";
    case EErrorCode.ErrDungeonCloseSceneId:
      return "ErrDungeonCloseSceneId";
    case EErrorCode.ErrDungeonEnterTypeError:
      return "ErrDungeonEnterTypeError";
    case EErrorCode.ErrDungeonActorCount:
      return "ErrDungeonActorCount";
    case EErrorCode.ErrDungeonDiffLocked:
      return "ErrDungeonDiffLocked";
    case EErrorCode.ErrDungeonPreBattleVoteCd:
      return "ErrDungeonPreBattleVoteCd";
    case EErrorCode.ErrDungeonBossInvalid:
      return "ErrDungeonBossInvalid";
    case EErrorCode.ErrDungeonNoUser:
      return "ErrDungeonNoUser";
    case EErrorCode.ErrDungeonUserInvalid:
      return "ErrDungeonUserInvalid";
    case EErrorCode.ErrDungeonAwardualification:
      return "ErrDungeonAwardualification";
    case EErrorCode.ErrDungeonAwardTriesLimit:
      return "ErrDungeonAwardTriesLimit";
    case EErrorCode.ErrFashionIsLimit:
      return "ErrFashionIsLimit";
    case EErrorCode.ErrFashionNotFound:
      return "ErrFashionNotFound";
    case EErrorCode.ErrFashionSlotEmpty:
      return "ErrFashionSlotEmpty";
    case EErrorCode.ErrFashionIDNotFound:
      return "ErrFashionIDNotFound";
    case EErrorCode.ErrFashionLock:
      return "ErrFashionLock";
    case EErrorCode.ErrFashCollectionAwardAlread:
      return "ErrFashCollectionAwardAlread";
    case EErrorCode.ErrFashCollectionScoreNotEnough:
      return "ErrFashCollectionScoreNotEnough";
    case EErrorCode.ErrFashCollectionAwardAlreadMonth:
      return "ErrFashCollectionAwardAlreadMonth";
    case EErrorCode.ErrFashionAlreadUnlock:
      return "ErrFashionAlreadUnlock";
    case EErrorCode.ErrFashionAdvanceNotExist:
      return "ErrFashionAdvanceNotExist";
    case EErrorCode.ErrFashionBaseNotUnlock:
      return "ErrFashionBaseNotUnlock";
    case EErrorCode.ErrFashionAdvanceAlreadyUnlock:
      return "ErrFashionAdvanceAlreadyUnlock";
    case EErrorCode.ErrCameraNoExistAlbum:
      return "ErrCameraNoExistAlbum";
    case EErrorCode.ErrCameraBeyondPhotoNum:
      return "ErrCameraBeyondPhotoNum";
    case EErrorCode.ErrCameraBeyondAlumNum:
      return "ErrCameraBeyondAlumNum";
    case EErrorCode.ErrCameraNoAccessRight:
      return "ErrCameraNoAccessRight";
    case EErrorCode.ErrCameraNoExistPhoto:
      return "ErrCameraNoExistPhoto";
    case EErrorCode.ErrCameraBeyondWordNum:
      return "ErrCameraBeyondWordNum";
    case EErrorCode.ErrCameraPhotoNoInAlbum:
      return "ErrCameraPhotoNoInAlbum";
    case EErrorCode.ErrCameraInnerError:
      return "ErrCameraInnerError";
    case EErrorCode.ErrCameraIllegalRight:
      return "ErrCameraIllegalRight";
    case EErrorCode.ErrCameraNoExistChar:
      return "ErrCameraNoExistChar";
    case EErrorCode.ErrCameraNoDelCloudAlbum:
      return "ErrCameraNoDelCloudAlbum";
    case EErrorCode.ErrCameraBeyondMaxURlLen:
      return "ErrCameraBeyondMaxURlLen";
    case EErrorCode.ErrCameraBeyondMaxXMLLen:
      return "ErrCameraBeyondMaxXMLLen";
    case EErrorCode.ErrCameraBeyondMaxNameLen:
      return "ErrCameraBeyondMaxNameLen";
    case EErrorCode.ErrCameraIllegalUrl:
      return "ErrCameraIllegalUrl";
    case EErrorCode.ErrCameraRenderInfoEmpty:
      return "ErrCameraRenderInfoEmpty";
    case EErrorCode.ErrCameraBeyondPhotoMaxSize:
      return "ErrCameraBeyondPhotoMaxSize";
    case EErrorCode.ErrCameraIllegalPictureType:
      return "ErrCameraIllegalPictureType";
    case EErrorCode.ErrCameraTypeRepeated:
      return "ErrCameraTypeRepeated";
    case EErrorCode.ErrCameraWithoutOriginal:
      return "ErrCameraWithoutOriginal";
    case EErrorCode.ErrCameraWithoutThumbnailOrRender:
      return "ErrCameraWithoutThumbnailOrRender";
    case EErrorCode.ErrCameraPhotoNameEmpty:
      return "ErrCameraPhotoNameEmpty";
    case EErrorCode.ErrCameraPhotoNameOutMaxLen:
      return "ErrCameraPhotoNameOutMaxLen";
    case EErrorCode.ErrCameraAlbumNameEmpty:
      return "ErrCameraAlbumNameEmpty";
    case EErrorCode.ErrCameraPhotoHasDel:
      return "ErrCameraPhotoHasDel";
    case EErrorCode.ErrCameraSysInnerError:
      return "ErrCameraSysInnerError";
    case EErrorCode.ErrCameraIllegalPictureId:
      return "ErrCameraIllegalPictureId";
    case EErrorCode.ErrCameraBeyondMaxExtraLen:
      return "ErrCameraBeyondMaxExtraLen";
    case EErrorCode.ErrCameraNoIncludeOriginal:
      return "ErrCameraNoIncludeOriginal";
    case EErrorCode.ErrCameraNoDealingPhoto:
      return "ErrCameraNoDealingPhoto";
    case EErrorCode.ErrCameraNoDealingPhotoType:
      return "ErrCameraNoDealingPhotoType";
    case EErrorCode.ErrCameraNoAnyAlbum:
      return "ErrCameraNoAnyAlbum";
    case EErrorCode.ErrCameraNoPassReview:
      return "ErrCameraNoPassReview";
    case EErrorCode.ErrCameraPhotoMissImage:
      return "ErrCameraPhotoMissImage";
    case EErrorCode.ErrCameraWithoutThumbnail:
      return "ErrCameraWithoutThumbnail";
    case EErrorCode.ErrCameraBeyondMaxUploadTimes:
      return "ErrCameraBeyondMaxUploadTimes";
    case EErrorCode.ErrInvalidLifeProfessionId:
      return "ErrInvalidLifeProfessionId";
    case EErrorCode.ErrLifeProfessionIsUnlock:
      return "ErrLifeProfessionIsUnlock";
    case EErrorCode.ErrLifeProfessionMaxLevel:
      return "ErrLifeProfessionMaxLevel";
    case EErrorCode.ErrLifeProfessionLevelNotEnough:
      return "ErrLifeProfessionLevelNotEnough";
    case EErrorCode.ErrLifeProfessionLevelRewardGot:
      return "ErrLifeProfessionLevelRewardGot";
    case EErrorCode.ErrInvalidLifeProfessionSpecializationId:
      return "ErrInvalidLifeProfessionSpecializationId";
    case EErrorCode.ErrLifeProfessionSpecializationNotEnough:
      return "ErrLifeProfessionSpecializationNotEnough";
    case EErrorCode.ErrLifeProfessionSpecializationUpgradeError:
      return "ErrLifeProfessionSpecializationUpgradeError";
    case EErrorCode.ErrLifeProfessionPointNotEnough:
      return "ErrLifeProfessionPointNotEnough";
    case EErrorCode.ErrInvalidLifeProfessionTargetId:
      return "ErrInvalidLifeProfessionTargetId";
    case EErrorCode.ErrLifeProfessionTargetNotEnough:
      return "ErrLifeProfessionTargetNotEnough";
    case EErrorCode.ErrLifeProfessionRewardCanNotGet:
      return "ErrLifeProfessionRewardCanNotGet";
    case EErrorCode.ErrLifeProfessionEnergyChange:
      return "ErrLifeProfessionEnergyChange";
    case EErrorCode.ErrLifeProfessionRecipeIsUnlock:
      return "ErrLifeProfessionRecipeIsUnlock";
    case EErrorCode.ErrLifeProfessionRecipeNotExist:
      return "ErrLifeProfessionRecipeNotExist";
    case EErrorCode.ErrLifeProfessionRecipeNotUnlock:
      return "ErrLifeProfessionRecipeNotUnlock";
    case EErrorCode.ErrLifeProfessionMaxRDRecipeCount:
      return "ErrLifeProfessionMaxRDRecipeCount";
    case EErrorCode.ErrLifeProfessionWorkingNotEnd:
      return "ErrLifeProfessionWorkingNotEnd";
    case EErrorCode.ErrLifeProfessionAlreadyWorking:
      return "ErrLifeProfessionAlreadyWorking";
    case EErrorCode.ErrLifeProfessionNotWorking:
      return "ErrLifeProfessionNotWorking";
    case EErrorCode.ErrLifeProfessionWorkingIsEnd:
      return "ErrLifeProfessionWorkingIsEnd";
    case EErrorCode.ErrLifeProfessionUnActiveSpecialization:
      return "ErrLifeProfessionUnActiveSpecialization";
    case EErrorCode.ErrCurLevelConfigNotExist:
      return "ErrCurLevelConfigNotExist";
    case EErrorCode.ErrNeedBreakthrough:
      return "ErrNeedBreakthrough";
    case EErrorCode.ErrExperienceConfigNotExist:
      return "ErrExperienceConfigNotExist";
    case EErrorCode.ErrExperienceMismatch:
      return "ErrExperienceMismatch";
    case EErrorCode.ErrNotNeedToBreakthrough:
      return "ErrNotNeedToBreakthrough";
    case EErrorCode.ErrConsumeConfigError:
      return "ErrConsumeConfigError";
    case EErrorCode.ErrSkillNotExist:
      return "ErrSkillNotExist";
    case EErrorCode.ErrSkillLevelMax:
      return "ErrSkillLevelMax";
    case EErrorCode.ErrSkillLevelNotExist:
      return "ErrSkillLevelNotExist";
    case EErrorCode.ErrSkillConfigError:
      return "ErrSkillConfigError";
    case EErrorCode.ErrStarNotExist:
      return "ErrStarNotExist";
    case EErrorCode.ErrMaxStar:
      return "ErrMaxStar";
    case EErrorCode.ErrMaxLevel:
      return "ErrMaxLevel";
    case EErrorCode.ErrSkillLevelNotEnough:
      return "ErrSkillLevelNotEnough";
    case EErrorCode.ErrCanNotChangeActionState:
      return "ErrCanNotChangeActionState";
    case EErrorCode.ErrActionNotExist:
      return "ErrActionNotExist";
    case EErrorCode.ErrIsInteracting:
      return "ErrIsInteracting";
    case EErrorCode.ErrState:
      return "ErrState";
    case EErrorCode.ErrRequestExpired:
      return "ErrRequestExpired";
    case EErrorCode.ErrStateSetFailed:
      return "ErrStateSetFailed";
    case EErrorCode.ErrCollectIdError:
      return "ErrCollectIdError";
    case EErrorCode.ErrCollectStateFailed:
      return "ErrCollectStateFailed";
    case EErrorCode.ErrCollectActorErr:
      return "ErrCollectActorErr";
    case EErrorCode.ErrCollectOutRange:
      return "ErrCollectOutRange";
    case EErrorCode.ErrCollectConditionEquip:
      return "ErrCollectConditionEquip";
    case EErrorCode.ErrCollectConditionQuest:
      return "ErrCollectConditionQuest";
    case EErrorCode.ErrAlreadyCollected:
      return "ErrAlreadyCollected";
    case EErrorCode.ErrMailGetFailed:
      return "ErrMailGetFailed";
    case EErrorCode.ErrMailIllegality:
      return "ErrMailIllegality";
    case EErrorCode.ErrMailIsGet:
      return "ErrMailIsGet";
    case EErrorCode.ErrMailIsDel:
      return "ErrMailIsDel";
    case EErrorCode.ErrMailAcceptorEmpty:
      return "ErrMailAcceptorEmpty";
    case EErrorCode.ErrMailTokenInvalid:
      return "ErrMailTokenInvalid";
    case EErrorCode.ErrUnRegisterType:
      return "ErrUnRegisterType";
    case EErrorCode.ErrIndexNotFound:
      return "ErrIndexNotFound";
    case EErrorCode.ErrCantOpenTreasureBox:
      return "ErrCantOpenTreasureBox";
    case EErrorCode.ErrPersonalStateEnd:
      return "ErrPersonalStateEnd";
    case EErrorCode.ErrPersonalObjectStatus:
      return "ErrPersonalObjectStatus";
    case EErrorCode.ErrExp:
      return "ErrExp";
    case EErrorCode.ErrLevel:
      return "ErrLevel";
    case EErrorCode.ErrAward:
      return "ErrAward";
    case EErrorCode.ErrReceivedLevelAward:
      return "ErrReceivedLevelAward";
    case EErrorCode.ErrLevelNotEnough:
      return "ErrLevelNotEnough";
    case EErrorCode.ErrRoleLevelNoRewards:
      return "ErrRoleLevelNoRewards";
    case EErrorCode.ErrUnionNotHaveLimit:
      return "ErrUnionNotHaveLimit";
    case EErrorCode.ErrUnionIsNotMember:
      return "ErrUnionIsNotMember";
    case EErrorCode.ErrUnionOfficialNotExits:
      return "ErrUnionOfficialNotExits";
    case EErrorCode.ErrUnionOfficialTooMany:
      return "ErrUnionOfficialTooMany";
    case EErrorCode.ErrUnionHas:
      return "ErrUnionHas";
    case EErrorCode.ErrUnionReqCd:
      return "ErrUnionReqCd";
    case EErrorCode.ErrUnionReqHas:
      return "ErrUnionReqHas";
    case EErrorCode.ErrUnionFull:
      return "ErrUnionFull";
    case EErrorCode.ErrUnionFailed:
      return "ErrUnionFailed";
    case EErrorCode.ErrUnionNameWrongful:
      return "ErrUnionNameWrongful";
    case EErrorCode.ErrUnionNameUsed:
      return "ErrUnionNameUsed";
    case EErrorCode.ErrUnionNameOccupied:
      return "ErrUnionNameOccupied";
    case EErrorCode.ErrApplyMax:
      return "ErrApplyMax";
    case EErrorCode.ErrUnionChangeNameCD:
      return "ErrUnionChangeNameCD";
    case EErrorCode.ErrUnionNameSizeError:
      return "ErrUnionNameSizeError";
    case EErrorCode.ErrDeclarationSize:
      return "ErrDeclarationSize";
    case EErrorCode.ErrDeclarationError:
      return "ErrDeclarationError";
    case EErrorCode.ErrOfficialNameRepeat:
      return "ErrOfficialNameRepeat";
    case EErrorCode.ErrDeclarationCd:
      return "ErrDeclarationCd";
    case EErrorCode.ErrUnionInfoCd:
      return "ErrUnionInfoCd";
    case EErrorCode.ErrUnionNotExist:
      return "ErrUnionNotExist";
    case EErrorCode.ErrUnionIllegalConditionType:
      return "ErrUnionIllegalConditionType";
    case EErrorCode.ErrUnionRecruitSloganTooLong:
      return "ErrUnionRecruitSloganTooLong";
    case EErrorCode.ErrUnionRecruitDescriptionTooLong:
      return "ErrUnionRecruitDescriptionTooLong";
    case EErrorCode.ErrUnionCreateTooOften:
      return "ErrUnionCreateTooOften";
    case EErrorCode.ErrUnionTagNoExist:
      return "ErrUnionTagNoExist";
    case EErrorCode.ErrUnionIconTooMuch:
      return "ErrUnionIconTooMuch";
    case EErrorCode.ErrUnionGetListCd:
      return "ErrUnionGetListCd";
    case EErrorCode.ErrUnionBatchSearchUnionIdsTooMuch:
      return "ErrUnionBatchSearchUnionIdsTooMuch";
    case EErrorCode.ErrUnionBatchSearchCd:
      return "ErrUnionBatchSearchCd";
    case EErrorCode.ErrUnionGetCollectedIdsCd:
      return "ErrUnionGetCollectedIdsCd";
    case EErrorCode.ErrUnionBeyondMaxCollectedNum:
      return "ErrUnionBeyondMaxCollectedNum";
    case EErrorCode.ErrUnionIdHasCollected:
      return "ErrUnionIdHasCollected";
    case EErrorCode.ErrUnionIdNoCollected:
      return "ErrUnionIdNoCollected";
    case EErrorCode.ErrUnionActiveValueNotEnough:
      return "ErrUnionActiveValueNotEnough";
    case EErrorCode.ErrUnionIllegalActiveId:
      return "ErrUnionIllegalActiveId";
    case EErrorCode.ErrUnionTooShortForAwards:
      return "ErrUnionTooShortForAwards";
    case EErrorCode.ErrUnionHasActiveAwards:
      return "ErrUnionHasActiveAwards";
    case EErrorCode.ErrUnionNoJoin:
      return "ErrUnionNoJoin";
    case EErrorCode.ErrUnionOnlyEnterSelf:
      return "ErrUnionOnlyEnterSelf";
    case EErrorCode.ErrUnionNoUnlockScene:
      return "ErrUnionNoUnlockScene";
    case EErrorCode.ErrUnionBuildingMaxLevel:
      return "ErrUnionBuildingMaxLevel";
    case EErrorCode.ErrUnionBuildingUpgrading:
      return "ErrUnionBuildingUpgrading";
    case EErrorCode.ErrUnionBuildingUpgradeNoFinish:
      return "ErrUnionBuildingUpgradeNoFinish";
    case EErrorCode.ErrUnionPrefixBuildNoMeet:
      return "ErrUnionPrefixBuildNoMeet";
    case EErrorCode.ErrUnionExperienceNoEnough:
      return "ErrUnionExperienceNoEnough";
    case EErrorCode.ErrUnionMoneyNoEnough:
      return "ErrUnionMoneyNoEnough";
    case EErrorCode.ErrUnionBuildingNoUpgrading:
      return "ErrUnionBuildingNoUpgrading";
    case EErrorCode.ErrUnionSpeedUpItemNoEnough:
      return "ErrUnionSpeedUpItemNoEnough";
    case EErrorCode.ErrUnionSpeedUpTimesOut:
      return "ErrUnionSpeedUpTimesOut";
    case EErrorCode.ErrUnionTryLater:
      return "ErrUnionTryLater";
    case EErrorCode.ErrUnionSpeedUpLevelError:
      return "ErrUnionSpeedUpLevelError";
    case EErrorCode.ErrUnionUpgradeHasCompleted:
      return "ErrUnionUpgradeHasCompleted";
    case EErrorCode.ErrUnionIllegalBuildIdLv:
      return "ErrUnionIllegalBuildIdLv";
    case EErrorCode.ErrUnionBeyMaxCount:
      return "ErrUnionBeyMaxCount";
    case EErrorCode.ErrUnionUserNoApply:
      return "ErrUnionUserNoApply";
    case EErrorCode.ErrUnionNoOneKeyNoMuch:
      return "ErrUnionNoOneKeyNoMuch";
    case EErrorCode.ErrUnionActivityNotStart:
      return "ErrUnionActivityNotStart";
    case EErrorCode.ErrUnionActivityNotProgress:
      return "ErrUnionActivityNotProgress";
    case EErrorCode.ErrUnionActivityAwardGet:
      return "ErrUnionActivityAwardGet";
    case EErrorCode.ErrUnionActivityNotEnjoy:
      return "ErrUnionActivityNotEnjoy";
    case EErrorCode.ErrUnionCreateTimeTooShort:
      return "ErrUnionCreateTimeTooShort";
    case EErrorCode.ErrUnionFunctionLock:
      return "ErrUnionFunctionLock";
    case EErrorCode.ErrUnionEScreenLock:
      return "ErrUnionEScreenLock";
    case EErrorCode.ErrUnionEScreenPositionLock:
      return "ErrUnionEScreenPositionLock";
    case EErrorCode.ErrUnionEScreenNoSet:
      return "ErrUnionEScreenNoSet";
    case EErrorCode.ErrUnionEScreenPositionNoSet:
      return "ErrUnionEScreenPositionNoSet";
    case EErrorCode.ErrUnionEffectGridLock:
      return "ErrUnionEffectGridLock";
    case EErrorCode.ErrUnionEffectIdLock:
      return "ErrUnionEffectIdLock";
    case EErrorCode.ErrUnionEffectPosNoSet:
      return "ErrUnionEffectPosNoSet";
    case EErrorCode.ErrUnionEffectPosHasEnd:
      return "ErrUnionEffectPosHasEnd";
    case EErrorCode.ErrUnionCrowFuncHasEnd:
      return "ErrUnionCrowFuncHasEnd";
    case EErrorCode.ErrUnionCrowFuncPosHasUsed:
      return "ErrUnionCrowFuncPosHasUsed";
    case EErrorCode.ErrUnionCrowFuncHasJoined:
      return "ErrUnionCrowFuncHasJoined";
    case EErrorCode.ErrUnionCrowFuncNoBegin:
      return "ErrUnionCrowFuncNoBegin";
    case EErrorCode.ErrUnionNoFinishBaseBuilding:
      return "ErrUnionNoFinishBaseBuilding";
    case EErrorCode.ErrUnionCrowFuncIllegalFuncPos:
      return "ErrUnionCrowFuncIllegalFuncPos";
    case EErrorCode.ErrUnionEScreenBeyondMaxTimes:
      return "ErrUnionEScreenBeyondMaxTimes";
    case EErrorCode.ErrUnionTargetFunctionLock:
      return "ErrUnionTargetFunctionLock";
    case EErrorCode.ErrUnionNoMeet:
      return "ErrUnionNoMeet";
    case EErrorCode.ErrUnionActivityAwardCd:
      return "ErrUnionActivityAwardCd";
    case EErrorCode.ErrUnionManagerNoKicked:
      return "ErrUnionManagerNoKicked";
    case EErrorCode.ErrUnionDanceNoBegin:
      return "ErrUnionDanceNoBegin";
    case EErrorCode.ErrUnionDanceEnd:
      return "ErrUnionDanceEnd";
    case EErrorCode.ErrUnionDanceDrawnBox:
      return "ErrUnionDanceDrawnBox";
    case EErrorCode.ErrUnionDanceBoxDrawn:
      return "ErrUnionDanceBoxDrawn";
    case EErrorCode.ErrUnionDanceNoDanceId:
      return "ErrUnionDanceNoDanceId";
    case EErrorCode.ErrUnionNoJoinDance:
      return "ErrUnionNoJoinDance";
    case EErrorCode.ErrUnionDanceNoDancing:
      return "ErrUnionDanceNoDancing";
    case EErrorCode.ErrUnionRejectInvite:
      return "ErrUnionRejectInvite";
    case EErrorCode.ErrUnionActivityHuntEnd:
      return "ErrUnionActivityHuntEnd";
    case EErrorCode.ErrUnionApplyListFull:
      return "ErrUnionApplyListFull";
    case EErrorCode.ErrUionApplyListExist:
      return "ErrUionApplyListExist";
    case EErrorCode.ErrUnionGroupIvalid:
      return "ErrUnionGroupIvalid";
    case EErrorCode.ErrRepeatedRequest:
      return "ErrRepeatedRequest";
    case EErrorCode.ErrHasBeenBlackened:
      return "ErrHasBeenBlackened";
    case EErrorCode.ErrNotFoundCharInfo:
      return "ErrNotFoundCharInfo";
    case EErrorCode.ErrInner:
      return "ErrInner";
    case EErrorCode.ErrParam:
      return "ErrParam";
    case EErrorCode.ErrSetShowPicture:
      return "ErrSetShowPicture";
    case EErrorCode.ErrSetSignature:
      return "ErrSetSignature";
    case EErrorCode.ErrSetHobbyMark:
      return "ErrSetHobbyMark";
    case EErrorCode.ErrSetTimeMark:
      return "ErrSetTimeMark";
    case EErrorCode.ErrSetRemind:
      return "ErrSetRemind";
    case EErrorCode.ErrSetTop:
      return "ErrSetTop";
    case EErrorCode.ErrAddFriend:
      return "ErrAddFriend";
    case EErrorCode.ErrSetProcessed:
      return "ErrSetProcessed";
    case EErrorCode.ErrSetRemark:
      return "ErrSetRemark";
    case EErrorCode.ErrDeleteFriend:
      return "ErrDeleteFriend";
    case EErrorCode.ErrNotFoundGroup:
      return "ErrNotFoundGroup";
    case EErrorCode.ErrNotExistInGroup:
      return "ErrNotExistInGroup";
    case EErrorCode.ErrChangeGroup:
      return "ErrChangeGroup";
    case EErrorCode.ErrPersonalState:
      return "ErrPersonalState";
    case EErrorCode.ErrOtherFriendMax:
      return "ErrOtherFriendMax";
    case EErrorCode.ErrCurFriendMax:
      return "ErrCurFriendMax";
    case EErrorCode.ErrConfig:
      return "ErrConfig";
    case EErrorCode.ErrAlreadyFriend:
      return "ErrAlreadyFriend";
    case EErrorCode.ErrSearchSelf:
      return "ErrSearchSelf";
    case EErrorCode.ErrSuggestionCd:
      return "ErrSuggestionCd";
    case EErrorCode.ErrGroupMax:
      return "ErrGroupMax";
    case EErrorCode.ErrGroupNotExist:
      return "ErrGroupNotExist";
    case EErrorCode.ErrGroupNameEmpty:
      return "ErrGroupNameEmpty";
    case EErrorCode.ErrIllegalCharacter:
      return "ErrIllegalCharacter";
    case EErrorCode.ErrStringMax:
      return "ErrStringMax";
    case EErrorCode.ErrOtherApplicationMax:
      return "ErrOtherApplicationMax";
    case EErrorCode.ErrFriendlinessAwardHasRecord:
      return "ErrFriendlinessAwardHasRecord";
    case EErrorCode.ErrFriendlinessLevelLowAwardLevel:
      return "ErrFriendlinessLevelLowAwardLevel";
    case EErrorCode.ErrFriendBeyondAllFriendNum:
      return "ErrFriendBeyondAllFriendNum";
    case EErrorCode.ErrFriendIsNoUserFriend:
      return "ErrFriendIsNoUserFriend";
    case EErrorCode.ErrFriendlinessIllegalAwardLevel:
      return "ErrFriendlinessIllegalAwardLevel";
    case EErrorCode.ErrFriendlinessLevelAwardIsEmpty:
      return "ErrFriendlinessLevelAwardIsEmpty";
    case EErrorCode.ErrFriendBeBlackenedByTarget:
      return "ErrFriendBeBlackenedByTarget";
    case EErrorCode.ErrFriendApplyEachOther:
      return "ErrFriendApplyEachOther";
    case EErrorCode.ErrFriendCallBySmallerCharId:
      return "ErrFriendCallBySmallerCharId";
    case EErrorCode.ErrFriendCallByBiggerCharId:
      return "ErrFriendCallByBiggerCharId";
    case EErrorCode.ErrFriendBeBlackenedBySmaller:
      return "ErrFriendBeBlackenedBySmaller";
    case EErrorCode.ErrFriendBeBlackenedByBigger:
      return "ErrFriendBeBlackenedByBigger";
    case EErrorCode.ErrFriendNoApply:
      return "ErrFriendNoApply";
    case EErrorCode.ErrFriendApplySelf:
      return "ErrFriendApplySelf";
    case EErrorCode.ErrUserNameFormat:
      return "ErrUserNameFormat";
    case EErrorCode.ErrFriendGetBaseTooOften:
      return "ErrFriendGetBaseTooOften";
    case EErrorCode.ErrFriendOnlyGetSelfBaseInfo:
      return "ErrFriendOnlyGetSelfBaseInfo";
    case EErrorCode.ErrActorGetFailed:
      return "ErrActorGetFailed";
    case EErrorCode.ErrPivotIsActive:
      return "ErrPivotIsActive";
    case EErrorCode.ErrPivotIsNotActive:
      return "ErrPivotIsNotActive";
    case EErrorCode.ErrBreakPointIsGet:
      return "ErrBreakPointIsGet";
    case EErrorCode.ErrActorIsNotPivot:
      return "ErrActorIsNotPivot";
    case EErrorCode.ErrActorIsNotBreakPoint:
      return "ErrActorIsNotBreakPoint";
    case EErrorCode.ErrActorIsBreakPointNotFull:
      return "ErrActorIsBreakPointNotFull";
    case EErrorCode.ErrPivotRewardIsGiven:
      return "ErrPivotRewardIsGiven";
    case EErrorCode.ErrNotInsight:
      return "ErrNotInsight";
    case EErrorCode.ErrLearnSkillFail:
      return "ErrLearnSkillFail";
    case EErrorCode.ErrRemoveSkillFail:
      return "ErrRemoveSkillFail";
    case EErrorCode.ErrUpdateSkillFail:
      return "ErrUpdateSkillFail";
    case EErrorCode.ErrSkillOperatorType:
      return "ErrSkillOperatorType";
    case EErrorCode.ErrContainerOperator:
      return "ErrContainerOperator";
    case EErrorCode.ErrExchangeFail:
      return "ErrExchangeFail";
    case EErrorCode.ErrExchangeFailInCombat:
      return "ErrExchangeFailInCombat";
    case EErrorCode.ErrAvatarBeyondMaxPictureSize:
      return "ErrAvatarBeyondMaxPictureSize";
    case EErrorCode.ErrGetTokenFailed:
      return "ErrGetTokenFailed";
    case EErrorCode.ErrPictureVerifyFailed:
      return "ErrPictureVerifyFailed";
    case EErrorCode.ErrPictureIllegalType:
      return "ErrPictureIllegalType";
    case EErrorCode.ErrPictureErrorInfo:
      return "ErrPictureErrorInfo";
    case EErrorCode.ErrPictureSizeInconsistent:
      return "ErrPictureSizeInconsistent";
    case EErrorCode.ErrPictureFuncTypeIllegal:
      return "ErrPictureFuncTypeIllegal";
    case EErrorCode.ErrPictureCallBackJudgeIllegal:
      return "ErrPictureCallBackJudgeIllegal";
    case EErrorCode.ErrPictureVerifyNoPass:
      return "ErrPictureVerifyNoPass";
    case EErrorCode.ErrPictureVerifyBackParamIllegal:
      return "ErrPictureVerifyBackParamIllegal";
    case EErrorCode.ErrPictureCallBackParamIllegal:
      return "ErrPictureCallBackParamIllegal";
    case EErrorCode.ErrPictureIllegalId:
      return "ErrPictureIllegalId";
    case EErrorCode.ErrPictureCosErrors:
      return "ErrPictureCosErrors";
    case EErrorCode.ErrPictureInnerSysErr:
      return "ErrPictureInnerSysErr";
    case EErrorCode.ErrPictureNoSetEnvCosSecretId:
      return "ErrPictureNoSetEnvCosSecretId";
    case EErrorCode.ErrPictureNoSetEnvCosSecretKey:
      return "ErrPictureNoSetEnvCosSecretKey";
    case EErrorCode.ErrPictureCheckInMachineLocked:
      return "ErrPictureCheckInMachineLocked";
    case EErrorCode.ErrPictureNoTryOutItem:
      return "ErrPictureNoTryOutItem";
    case EErrorCode.ErrPictureNoUploadItem:
      return "ErrPictureNoUploadItem";
    case EErrorCode.ErrPictureNoUnion:
      return "ErrPictureNoUnion";
    case EErrorCode.ErrNameSizeError:
      return "ErrNameSizeError";
    case EErrorCode.ErrSensitiveContent:
      return "ErrSensitiveContent";
    case EErrorCode.ErrChangeNameFail:
      return "ErrChangeNameFail";
    case EErrorCode.ErrChangeNameCardNotEnough:
      return "ErrChangeNameCardNotEnough";
    case EErrorCode.ErrChangeSameName:
      return "ErrChangeSameName";
    case EErrorCode.ErrCheckMuteWordsFailed:
      return "ErrCheckMuteWordsFailed";
    case EErrorCode.ErrCheckMuteWordsEmpty:
      return "ErrCheckMuteWordsEmpty";
    case EErrorCode.ErrChangeShowIdFail:
      return "ErrChangeShowIdFail";
    case EErrorCode.ErrChangeShowIdDuplicated:
      return "ErrChangeShowIdDuplicated";
    case EErrorCode.ErrChangeShowIdCardNotEnough:
      return "ErrChangeShowIdCardNotEnough";
    case EErrorCode.ErrFaceItemLock:
      return "ErrFaceItemLock";
    case EErrorCode.ErrFaceItemGender:
      return "ErrFaceItemGender";
    case EErrorCode.ErrFaceNoUploading:
      return "ErrFaceNoUploading";
    case EErrorCode.ErrFaceNoSupportFileSuffix:
      return "ErrFaceNoSupportFileSuffix";
    case EErrorCode.ErrFaceFileSuffixEmpty:
      return "ErrFaceFileSuffixEmpty";
    case EErrorCode.ErrFaceIllegalCosKey:
      return "ErrFaceIllegalCosKey";
    case EErrorCode.ErrFaceParseSuffixFailed:
      return "ErrFaceParseSuffixFailed";
    case EErrorCode.ErrFaceParseShortGuidFailed:
      return "ErrFaceParseShortGuidFailed";
    case EErrorCode.ErrProficiencyNeedUnlock:
      return "ErrProficiencyNeedUnlock";
    case EErrorCode.ErrProficiencyUnlock:
      return "ErrProficiencyUnlock";
    case EErrorCode.ErrUnlockItemNotEnough:
      return "ErrUnlockItemNotEnough";
    case EErrorCode.ErrTaskNotFinish:
      return "ErrTaskNotFinish";
    case EErrorCode.ErrStickerAwardIsGet:
      return "ErrStickerAwardIsGet";
    case EErrorCode.ErrBookAwardIsGet:
      return "ErrBookAwardIsGet";
    case EErrorCode.ErrInCd:
      return "ErrInCd";
    case EErrorCode.ErrMoneyNotEnough:
      return "ErrMoneyNotEnough";
    case EErrorCode.ErrShopItemCantBuy:
      return "ErrShopItemCantBuy";
    case EErrorCode.ErrShopBuyBusy:
      return "ErrShopBuyBusy";
    case EErrorCode.ErrPaymentConfigNotFound:
      return "ErrPaymentConfigNotFound";
    case EErrorCode.ErrRefreshShopCountExceed:
      return "ErrRefreshShopCountExceed";
    case EErrorCode.ErrShopCouponNotEnough:
      return "ErrShopCouponNotEnough";
    case EErrorCode.ErrShopCouponLimitNum:
      return "ErrShopCouponLimitNum";
    case EErrorCode.ErrShopCantBuyNoPrice:
      return "ErrShopCantBuyNoPrice";
    case EErrorCode.ErrNotFoundMonster:
      return "ErrNotFoundMonster";
    case EErrorCode.ErrNotMonster:
      return "ErrNotMonster";
    case EErrorCode.ErrMonsterUnlockExist:
      return "ErrMonsterUnlockExist";
    case EErrorCode.ErrMonsterAwardIsGet:
      return "ErrMonsterAwardIsGet";
    case EErrorCode.ErrMonsterTargetNotFinish:
      return "ErrMonsterTargetNotFinish";
    case EErrorCode.ErrDropTypeNotSupport:
      return "ErrDropTypeNotSupport";
    case EErrorCode.ErrCounterNotEnough:
      return "ErrCounterNotEnough";
    case EErrorCode.ErrDropItemAlreadyPicked:
      return "ErrDropItemAlreadyPicked";
    case EErrorCode.ErrInteractionDoing:
      return "ErrInteractionDoing";
    case EErrorCode.ErrInteractionCondition:
      return "ErrInteractionCondition";
    case EErrorCode.ErrInteractionNotMore:
      return "ErrInteractionNotMore";
    case EErrorCode.ErrInteractionExistPos:
      return "ErrInteractionExistPos";
    case EErrorCode.ErrInteractionNotExist:
      return "ErrInteractionNotExist";
    case EErrorCode.ErrInteractionEntityNotExist:
      return "ErrInteractionEntityNotExist";
    case EErrorCode.ErrInteractionHandleNotExist:
      return "ErrInteractionHandleNotExist";
    case EErrorCode.ErrInteractionType:
      return "ErrInteractionType";
    case EErrorCode.ErrInteractionBan:
      return "ErrInteractionBan";
    case EErrorCode.ErrInteractionConfig:
      return "ErrInteractionConfig";
    case EErrorCode.ErrInteractionNotOneself:
      return "ErrInteractionNotOneself";
    case EErrorCode.ErrInteractionDistance:
      return "ErrInteractionDistance";
    case EErrorCode.ErrInteractionNotDoing:
      return "ErrInteractionNotDoing";
    case EErrorCode.ErrShowPieceIllegalPieceType:
      return "ErrShowPieceIllegalPieceType";
    case EErrorCode.ErrShowPieceIllegalPieceId:
      return "ErrShowPieceIllegalPieceId";
    case EErrorCode.ErrShowPieceNoInOftenUseList:
      return "ErrShowPieceNoInOftenUseList";
    case EErrorCode.ErrShowPieceNoUnlockList:
      return "ErrShowPieceNoUnlockList";
    case EErrorCode.ErrShowPieceRoulettePositionNoSet:
      return "ErrShowPieceRoulettePositionNoSet";
    case EErrorCode.ErrShowPieceBeyondOftenUseMaxLen:
      return "ErrShowPieceBeyondOftenUseMaxLen";
    case EErrorCode.ErrShowPieceBeyondOftenRoulettePositionNum:
      return "ErrShowPieceBeyondOftenRoulettePositionNum";
    case EErrorCode.ErrShowPieceNoCommonPiece:
      return "ErrShowPieceNoCommonPiece";
    case EErrorCode.ErrShowPieceNoTakeOn:
      return "ErrShowPieceNoTakeOn";
    case EErrorCode.ErrProfessionActivated:
      return "ErrProfessionActivated";
    case EErrorCode.ErrProfessionNotHas:
      return "ErrProfessionNotHas";
    case EErrorCode.ErrProfessionSlotErr:
      return "ErrProfessionSlotErr";
    case EErrorCode.ErrProfessionRemoveErr:
      return "ErrProfessionRemoveErr";
    case EErrorCode.ErrProfessionChangePlanFail:
      return "ErrProfessionChangePlanFail";
    case EErrorCode.ErrProfessionStarConfigNotExist:
      return "ErrProfessionStarConfigNotExist";
    case EErrorCode.ErrProfessionStarNodeUnlock:
      return "ErrProfessionStarNodeUnlock";
    case EErrorCode.ErrProfessionStarNodeNotUnlock:
      return "ErrProfessionStarNodeNotUnlock";
    case EErrorCode.ErrProfessionReplaceSkillNotExist:
      return "ErrProfessionReplaceSkillNotExist";
    case EErrorCode.ErrProfessionUpgradeNotGreaterCurLevel:
      return "ErrProfessionUpgradeNotGreaterCurLevel";
    case EErrorCode.ErrProfessionProfessionBeForged:
      return "ErrProfessionProfessionBeForged";
    case EErrorCode.ErrProfessionSlotTwoNotUnlock:
      return "ErrProfessionSlotTwoNotUnlock";
    case EErrorCode.ErrProfessionSkillAlreadyActive:
      return "ErrProfessionSkillAlreadyActive";
    case EErrorCode.ErrProfessionSkillRemodelLevelWrong:
      return "ErrProfessionSkillRemodelLevelWrong";
    case EErrorCode.ErrAoyiSkillAlreadyActive:
      return "ErrAoyiSkillAlreadyActive";
    case EErrorCode.ErrAoyiSkillRemodelConfigNotExist:
      return "ErrAoyiSkillRemodelConfigNotExist";
    case EErrorCode.ErrAoyiSkillRemodelLevelWrong:
      return "ErrAoyiSkillRemodelLevelWrong";
    case EErrorCode.ErrProfessionEquipInCombat:
      return "ErrProfessionEquipInCombat";
    case EErrorCode.ErrProfessionSwitchInCombat:
      return "ErrProfessionSwitchInCombat";
    case EErrorCode.ErrProfessionDungeonNotAllowSwitch:
      return "ErrProfessionDungeonNotAllowSwitch";
    case EErrorCode.ErrAoYiDecomposeOverflow:
      return "ErrAoYiDecomposeOverflow";
    case EErrorCode.ErrTalentIllegalTalentPoolId:
      return "ErrTalentIllegalTalentPoolId";
    case EErrorCode.ErrTalentBeyondCurTalentMaxPlanNum:
      return "ErrTalentBeyondCurTalentMaxPlanNum";
    case EErrorCode.ErrTalentPoolNoActive:
      return "ErrTalentPoolNoActive";
    case EErrorCode.ErrTalentPlanNoActive:
      return "ErrTalentPlanNoActive";
    case EErrorCode.ErrTalentIllegalTalentId:
      return "ErrTalentIllegalTalentId";
    case EErrorCode.ErrTalentTalentHasUnlocked:
      return "ErrTalentTalentHasUnlocked";
    case EErrorCode.ErrTalentTalentNoUnlocked:
      return "ErrTalentTalentNoUnlocked";
    case EErrorCode.ErrTalentChangeLvPassiveTalentMoreThanInPool:
      return "ErrTalentChangeLvPassiveTalentMoreThanInPool";
    case EErrorCode.ErrTalentRepeatedTalentId:
      return "ErrTalentRepeatedTalentId";
    case EErrorCode.ErrTalentNoPoolPassiveTalent:
      return "ErrTalentNoPoolPassiveTalent";
    case EErrorCode.ErrTalentTalentPointsNoEnough:
      return "ErrTalentTalentPointsNoEnough";
    case EErrorCode.ErrTalentPassiveTalentListNoEmpty:
      return "ErrTalentPassiveTalentListNoEmpty";
    case EErrorCode.ErrTalentIllegalTalentLevel:
      return "ErrTalentIllegalTalentLevel";
    case EErrorCode.ErrTalentNoMeetUpgradeCondition:
      return "ErrTalentNoMeetUpgradeCondition";
    case EErrorCode.ErrTalentNoSupportDownLevelNow:
      return "ErrTalentNoSupportDownLevelNow";
    case EErrorCode.ErrTalentNoMeetPrevTalentLv:
      return "ErrTalentNoMeetPrevTalentLv";
    case EErrorCode.ErrTalentNoMeetPrevTalentPoint:
      return "ErrTalentNoMeetPrevTalentPoint";
    case EErrorCode.ErrTalentTreeNodeBDExclusive:
      return "ErrTalentTreeNodeBDExclusive";
    case EErrorCode.ErrTalentTotalTalentPointNotEnough:
      return "ErrTalentTotalTalentPointNotEnough";
    case EErrorCode.ErrTalentPreTalentNodeNotActivated:
      return "ErrTalentPreTalentNodeNotActivated";
    case EErrorCode.ErrTalentResetTalentInCombat:
      return "ErrTalentResetTalentInCombat";
    case EErrorCode.ErrTalentActiveTalentInCombat:
      return "ErrTalentActiveTalentInCombat";
    case EErrorCode.ErrCookBookNotExist:
      return "ErrCookBookNotExist";
    case EErrorCode.ErrCookFoodNotEnough:
      return "ErrCookFoodNotEnough";
    case EErrorCode.ErrCookTypeMore:
      return "ErrCookTypeMore";
    case EErrorCode.ErrCookCountMore:
      return "ErrCookCountMore";
    case EErrorCode.ErrCookHasBook:
      return "ErrCookHasBook";
    case EErrorCode.ErrCookMaterialNotMatch:
      return "ErrCookMaterialNotMatch";
    case EErrorCode.ErrChatIllegalPrivateChatTarget:
      return "ErrChatIllegalPrivateChatTarget";
    case EErrorCode.ErrChatInTargetBlockList:
      return "ErrChatInTargetBlockList";
    case EErrorCode.ErrChatSendMsgBeyondMaxWords:
      return "ErrChatSendMsgBeyondMaxWords";
    case EErrorCode.ErrChatWorldChannelIdIsZero:
      return "ErrChatWorldChannelIdIsZero";
    case EErrorCode.ErrChatWorldChannelIdBeyondMaxId:
      return "ErrChatWorldChannelIdBeyondMaxId";
    case EErrorCode.ErrChatIllegalChannelType:
      return "ErrChatIllegalChannelType";
    case EErrorCode.ErrChatIllegalMsgType:
      return "ErrChatIllegalMsgType";
    case EErrorCode.ErrChatNoInGoalChannel:
      return "ErrChatNoInGoalChannel";
    case EErrorCode.ErrChatNeedConfigIdNotZero:
      return "ErrChatNeedConfigIdNotZero";
    case EErrorCode.ErrChatNeedMsgTextNotEmpty:
      return "ErrChatNeedMsgTextNotEmpty";
    case EErrorCode.ErrChatSendCdNoEnd:
      return "ErrChatSendCdNoEnd";
    case EErrorCode.ErrChatRecordListIsEmpty:
      return "ErrChatRecordListIsEmpty";
    case EErrorCode.ErrChatTargetNotInPrivateList:
      return "ErrChatTargetNotInPrivateList";
    case EErrorCode.ErrChatMsgIdMoreThanMaxReadMsgId:
      return "ErrChatMsgIdMoreThanMaxReadMsgId";
    case EErrorCode.ErrChatBeyondBlockListLimit:
      return "ErrChatBeyondBlockListLimit";
    case EErrorCode.ErrChatWorldChannelIdBeyondMaxNum:
      return "ErrChatWorldChannelIdBeyondMaxNum";
    case EErrorCode.ErrChatBeyondMaxRecordId:
      return "ErrChatBeyondMaxRecordId";
    case EErrorCode.ErrChatNoCreatePrivateSession:
      return "ErrChatNoCreatePrivateSession";
    case EErrorCode.ErrChatPrivateSessionHasExit:
      return "ErrChatPrivateSessionHasExit";
    case EErrorCode.ErrChatBeBan:
      return "ErrChatBeBan";
    case EErrorCode.ErrChatFileIdTooLong:
      return "ErrChatFileIdTooLong";
    case EErrorCode.ErrChatFileIdEmpty:
      return "ErrChatFileIdEmpty";
    case EErrorCode.ErrChatMsgInfoEmpty:
      return "ErrChatMsgInfoEmpty";
    case EErrorCode.ErrChatNoShareChannel:
      return "ErrChatNoShareChannel";
    case EErrorCode.ErrChatIllegalShareType:
      return "ErrChatIllegalShareType";
    case EErrorCode.ErrChatIllegalHolderType:
      return "ErrChatIllegalHolderType";
    case EErrorCode.ErrChatNoSupportShareType:
      return "ErrChatNoSupportShareType";
    case EErrorCode.ErrChatShareTpeNoChatId:
      return "ErrChatShareTpeNoChatId";
    case EErrorCode.ErrChatShareNoFishRank:
      return "ErrChatShareNoFishRank";
    case EErrorCode.ErrChatLevelLimit:
      return "ErrChatLevelLimit";
    case EErrorCode.ErrChatNoFoundBlockListLimit:
      return "ErrChatNoFoundBlockListLimit";
    case EErrorCode.ErrTalentModTalentTagNotExist:
      return "ErrTalentModTalentTagNotExist";
    case EErrorCode.ErrTextCheckForbidden:
      return "ErrTextCheckForbidden";
    case EErrorCode.ErrTextCheckNoSceneType:
      return "ErrTextCheckNoSceneType";
    case EErrorCode.ErrTextCheckIllegal:
      return "ErrTextCheckIllegal";
    case EErrorCode.ErrTextCheckHttpError:
      return "ErrTextCheckHttpError";
    case EErrorCode.ErrTextCheckTooManyItems:
      return "ErrTextCheckTooManyItems";
    case EErrorCode.ErrConditionTimerOpen:
      return "ErrConditionTimerOpen";
    case EErrorCode.ErrConditionOpenServer:
      return "ErrConditionOpenServer";
    case EErrorCode.ErrSkillDisable:
      return "ErrSkillDisable";
    case EErrorCode.ErrSkillIsCD:
      return "ErrSkillIsCD";
    case EErrorCode.ErrSkillMaxPassiveCount:
      return "ErrSkillMaxPassiveCount";
    case EErrorCode.ErrSkillInit:
      return "ErrSkillInit";
    case EErrorCode.ErrSkillInfo:
      return "ErrSkillInfo";
    case EErrorCode.ErrUseSkillFightResInsufficient:
      return "ErrUseSkillFightResInsufficient";
    case EErrorCode.ErrUseSkillBuffNotEnough:
      return "ErrUseSkillBuffNotEnough";
    case EErrorCode.ErrUseSkillItemInsufficient:
      return "ErrUseSkillItemInsufficient";
    case EErrorCode.ErrUseSkillAttrInsufficient:
      return "ErrUseSkillAttrInsufficient";
    case EErrorCode.ErrUseSkillEnduranceInsufficient:
      return "ErrUseSkillEnduranceInsufficient";
    case EErrorCode.ErrUseSkillStateChange:
      return "ErrUseSkillStateChange";
    case EErrorCode.ErrUseSkillClientSkillUuid:
      return "ErrUseSkillClientSkillUuid";
    case EErrorCode.ErrFightLogicConditionBlockInvalid:
      return "ErrFightLogicConditionBlockInvalid";
    case EErrorCode.ErrFightLogicActionGroupInvalid:
      return "ErrFightLogicActionGroupInvalid";
    case EErrorCode.ErrFightLogicConditionNotMatch:
      return "ErrFightLogicConditionNotMatch";
    case EErrorCode.ErrFightLogicRunDataInvalid:
      return "ErrFightLogicRunDataInvalid";
    case EErrorCode.ErrSkillStageNotFind:
      return "ErrSkillStageNotFind";
    case EErrorCode.ErrConditionCfgSize:
      return "ErrConditionCfgSize";
    case EErrorCode.ErrConditionDissatisfy:
      return "ErrConditionDissatisfy";
    case EErrorCode.ErrConditionObjectIsNull:
      return "ErrConditionObjectIsNull";
    case EErrorCode.ErrConditionTypeNotFound:
      return "ErrConditionTypeNotFound";
    case EErrorCode.ErrConditionEntityDeath:
      return "ErrConditionEntityDeath";
    case EErrorCode.ErrConditionUnionLevel:
      return "ErrConditionUnionLevel";
    case EErrorCode.ErrConditionUnionMoney:
      return "ErrConditionUnionMoney";
    case EErrorCode.ErrConditionNotMeet:
      return "ErrConditionNotMeet";
    case EErrorCode.ErrConditionNotInShapeShift:
      return "ErrConditionNotInShapeShift";
    case EErrorCode.ErrSeasonAchievementNoExist:
      return "ErrSeasonAchievementNoExist";
    case EErrorCode.ErrSeasonAchievementNoFinish:
      return "ErrSeasonAchievementNoFinish";
    case EErrorCode.ErrSeasonAchievementHasReceived:
      return "ErrSeasonAchievementHasReceived";
    case EErrorCode.ErrSeasonAchievementPrevIdNoReceived:
      return "ErrSeasonAchievementPrevIdNoReceived";
    case EErrorCode.ErrSeasonAchievementPrevIdNoExist:
      return "ErrSeasonAchievementPrevIdNoExist";
    case EErrorCode.ErrSeasonAchievementTargetConfigError:
      return "ErrSeasonAchievementTargetConfigError";
    case EErrorCode.ErrSeasonRankHasMax:
      return "ErrSeasonRankHasMax";
    case EErrorCode.ErrSeasonRankHasReceived:
      return "ErrSeasonRankHasReceived";
    case EErrorCode.ErrSeasonRankNoAchieve:
      return "ErrSeasonRankNoAchieve";
    case EErrorCode.ErrSeasonRankCurSeasonIdZero:
      return "ErrSeasonRankCurSeasonIdZero";
    case EErrorCode.ErrSeasonRankNoMeetCondition:
      return "ErrSeasonRankNoMeetCondition";
    case EErrorCode.ErrSeasonRankSeasonNoSame:
      return "ErrSeasonRankSeasonNoSame";
    case EErrorCode.ErrBattlePassBuyLevel:
      return "ErrBattlePassBuyLevel";
    case EErrorCode.ErrBattlePassBuyMaterial:
      return "ErrBattlePassBuyMaterial";
    case EErrorCode.ErrBattlePassAwardGet:
      return "ErrBattlePassAwardGet";
    case EErrorCode.ErrBattlePassAwardNotUnlock:
      return "ErrBattlePassAwardNotUnlock";
    case EErrorCode.ErrBattlePassBuyWeekExpLimit:
      return "ErrBattlePassBuyWeekExpLimit";
    case EErrorCode.ErrBattlePassLevelError:
      return "ErrBattlePassLevelError";
    case EErrorCode.ErrNoRefreshTimes:
      return "ErrNoRefreshTimes";
    case EErrorCode.ErrTargetNotCompleted:
      return "ErrTargetNotCompleted";
    case EErrorCode.ErrOnlinePeriodTooMore:
      return "ErrOnlinePeriodTooMore";
    case EErrorCode.ErrPersonalTagTooMore:
      return "ErrPersonalTagTooMore";
    case EErrorCode.ErrPersonalTagNotFound:
      return "ErrPersonalTagNotFound";
    case EErrorCode.ErrPersonalAvatarUnearned:
      return "ErrPersonalAvatarUnearned";
    case EErrorCode.ErrPersonalAvatarFrameUnearned:
      return "ErrPersonalAvatarFrameUnearned";
    case EErrorCode.ErrPersonalCardStyleUnearned:
      return "ErrPersonalCardStyleUnearned";
    case EErrorCode.ErrPersonalPhotoTooMore:
      return "ErrPersonalPhotoTooMore";
    case EErrorCode.ErrPersonalMedalUnearned:
      return "ErrPersonalMedalUnearned";
    case EErrorCode.ErrPersonalTargetUnlock:
      return "ErrPersonalTargetUnlock";
    case EErrorCode.ErrPersonalTargetAlreadyGet:
      return "ErrPersonalTargetAlreadyGet";
    case EErrorCode.ErrPersonalMedalInvalidSlot:
      return "ErrPersonalMedalInvalidSlot";
    case EErrorCode.ErrPersonalMedalDuplicateValue:
      return "ErrPersonalMedalDuplicateValue";
    case EErrorCode.ErrOnlinePeriodDuplicate:
      return "ErrOnlinePeriodDuplicate";
    case EErrorCode.ErrPersonalTagDuplicate:
      return "ErrPersonalTagDuplicate";
    case EErrorCode.ErrPersonalPhotoInvalidSlot:
      return "ErrPersonalPhotoInvalidSlot";
    case EErrorCode.ErrPersonalPhotoDuplicateValue:
      return "ErrPersonalPhotoDuplicateValue";
    case EErrorCode.ErrSeasonMedalNoMeetActiveCondition:
      return "ErrSeasonMedalNoMeetActiveCondition";
    case EErrorCode.ErrSeasonMedalNoMeetUpgradeCondition:
      return "ErrSeasonMedalNoMeetUpgradeCondition";
    case EErrorCode.ErrSeasonMedalActiveMeetNoEnough:
      return "ErrSeasonMedalActiveMeetNoEnough";
    case EErrorCode.ErrSeasonMedalUpgradeMeetNoEnough:
      return "ErrSeasonMedalUpgradeMeetNoEnough";
    case EErrorCode.ErrSeasonMedalIllegalNodeId:
      return "ErrSeasonMedalIllegalNodeId";
    case EErrorCode.ErrSeasonMedalChooseNodeIdBeyondMax:
      return "ErrSeasonMedalChooseNodeIdBeyondMax";
    case EErrorCode.ErrSeasonMedalHoleNoExist:
      return "ErrSeasonMedalHoleNoExist";
    case EErrorCode.ErrSeasonMedalHoleLock:
      return "ErrSeasonMedalHoleLock";
    case EErrorCode.ErrSeasonMedalNodeNoExist:
      return "ErrSeasonMedalNodeNoExist";
    case EErrorCode.ErrSeasonMedalHoleNoGet:
      return "ErrSeasonMedalHoleNoGet";
    case EErrorCode.ErrSeasonMedalMaxHoleLevel:
      return "ErrSeasonMedalMaxHoleLevel";
    case EErrorCode.ErrSeasonMedalCoreHoleLock:
      return "ErrSeasonMedalCoreHoleLock";
    case EErrorCode.ErrSeasonMedalUpgradeMoneyNoEnough:
      return "ErrSeasonMedalUpgradeMoneyNoEnough";
    case EErrorCode.ErrSeasonNoCoreHole:
      return "ErrSeasonNoCoreHole";
    case EErrorCode.ErrSeasonNoNormalHole:
      return "ErrSeasonNoNormalHole";
    case EErrorCode.ErrSeasonMedalNoUpgradeNormalHoleItem:
      return "ErrSeasonMedalNoUpgradeNormalHoleItem";
    case EErrorCode.ErrSceneLineNotExists:
      return "ErrSceneLineNotExists";
    case EErrorCode.ErrSceneLineRefreshCd:
      return "ErrSceneLineRefreshCd";
    case EErrorCode.ErrSceneLineNotSameScene:
      return "ErrSceneLineNotSameScene";
    case EErrorCode.ErrSceneLineSameLine:
      return "ErrSceneLineSameLine";
    case EErrorCode.ErrSceneLineInteracting:
      return "ErrSceneLineInteracting";
    case EErrorCode.ErrSceneLineUserDead:
      return "ErrSceneLineUserDead";
    case EErrorCode.ErrSceneLineFull:
      return "ErrSceneLineFull";
    case EErrorCode.ErrSceneLineChangeCd:
      return "ErrSceneLineChangeCd";
    case EErrorCode.ErrSceneVersionRecycle:
      return "ErrSceneVersionRecycle";
    case EErrorCode.ErrSceneLineKick:
      return "ErrSceneLineKick";
    case EErrorCode.ErrInstallSlotFailed:
      return "ErrInstallSlotFailed";
    case EErrorCode.ErrUseSlotFailed:
      return "ErrUseSlotFailed";
    case EErrorCode.ErrUseSlotInCd:
      return "ErrUseSlotInCd";
    case EErrorCode.ErrInstatallSlotFailedInCombat:
      return "ErrInstatallSlotFailedInCombat";
    case EErrorCode.ErrSlotSkillUnLoad:
      return "ErrSlotSkillUnLoad";
    case EErrorCode.ErrUseCfgSkillFailed:
      return "ErrUseCfgSkillFailed";
    case EErrorCode.ErrResonanceNotExists:
      return "ErrResonanceNotExists";
    case EErrorCode.ErrResonanceUnLoad:
      return "ErrResonanceUnLoad";
    case EErrorCode.ErrUseDodgeFailed:
      return "ErrUseDodgeFailed";
    case EErrorCode.ErrUseFixedSkillFailed:
      return "ErrUseFixedSkillFailed";
    case EErrorCode.ErrUseBlockedSkill:
      return "ErrUseBlockedSkill";
    case EErrorCode.ErrInstallBlockedSkill:
      return "ErrInstallBlockedSkill";
    case EErrorCode.ErrExchangeNotFound:
      return "ErrExchangeNotFound";
    case EErrorCode.ErrExchangeNotEnough:
      return "ErrExchangeNotEnough";
    case EErrorCode.ErrExchangeItemLimit:
      return "ErrExchangeItemLimit";
    case EErrorCode.ErrExchangeStepRange:
      return "ErrExchangeStepRange";
    case EErrorCode.ErrExchangeItemFull:
      return "ErrExchangeItemFull";
    case EErrorCode.ErrExchangePackageFull:
      return "ErrExchangePackageFull";
    case EErrorCode.ErrExchangePriceItemNotFind:
      return "ErrExchangePriceItemNotFind";
    case EErrorCode.ErrExchangeBuyNumNotEnough:
      return "ErrExchangeBuyNumNotEnough";
    case EErrorCode.ErrExchangeBuyItemNotFound:
      return "ErrExchangeBuyItemNotFound";
    case EErrorCode.ErrExchangeTakeFailDelayTime:
      return "ErrExchangeTakeFailDelayTime";
    case EErrorCode.ErrExchangeTakeFailSellNum:
      return "ErrExchangeTakeFailSellNum";
    case EErrorCode.ErrExchangeTakeItemNotFound:
      return "ErrExchangeTakeItemNotFound";
    case EErrorCode.ErrExchangeWithdrawNoMoney:
      return "ErrExchangeWithdrawNoMoney";
    case EErrorCode.ErrExchangeDepositNotEnough:
      return "ErrExchangeDepositNotEnough";
    case EErrorCode.ErrExchangeItemNotBindOrCooldownNotExpire:
      return "ErrExchangeItemNotBindOrCooldownNotExpire";
    case EErrorCode.ErrExchangeInCd:
      return "ErrExchangeInCd";
    case EErrorCode.ErrExchangeBuyCurrencyNoEnough:
      return "ErrExchangeBuyCurrencyNoEnough";
    case EErrorCode.ErrExchangeItemDelayTimeOver:
      return "ErrExchangeItemDelayTimeOver";
    case EErrorCode.ErrExchangeItemIsNotWithdraw:
      return "ErrExchangeItemIsNotWithdraw";
    case EErrorCode.ErrExchangeBuyItemLimit:
      return "ErrExchangeBuyItemLimit";
    case EErrorCode.ErrExchangeItemIsNotNoticeShopItem:
      return "ErrExchangeItemIsNotNoticeShopItem";
    case EErrorCode.ErrExchangeItemIsPreBuyAlready:
      return "ErrExchangeItemIsPreBuyAlready";
    case EErrorCode.ErrExchangeItemNotPublic:
      return "ErrExchangeItemNotPublic";
    case EErrorCode.ErrExchangeSaleRankExist:
      return "ErrExchangeSaleRankExist";
    case EErrorCode.ErrExchangeSaleItemFull:
      return "ErrExchangeSaleItemFull";
    case EErrorCode.ErrExchangeSaleDiamondNotEnough:
      return "ErrExchangeSaleDiamondNotEnough";
    case EErrorCode.ErrExchangeSaleItemNotExists:
      return "ErrExchangeSaleItemNotExists";
    case EErrorCode.ErrExchangeBuySaleCurrencyNoEnough:
      return "ErrExchangeBuySaleCurrencyNoEnough";
    case EErrorCode.ErrExchangeDiamondNotEnough:
      return "ErrExchangeDiamondNotEnough";
    case EErrorCode.ErrExchangeSaleTakeOffCd:
      return "ErrExchangeSaleTakeOffCd";
    case EErrorCode.ErrExchangeSaleRateInvalid:
      return "ErrExchangeSaleRateInvalid";
    case EErrorCode.ErrExchangePreItemFull:
      return "ErrExchangePreItemFull";
    case EErrorCode.ErrExchangeSaleNumInvalid:
      return "ErrExchangeSaleNumInvalid";
    case EErrorCode.ErrExchangeCareItemAlready:
      return "ErrExchangeCareItemAlready";
    case EErrorCode.ErrExchangePriceRange:
      return "ErrExchangePriceRange";
    case EErrorCode.ErrExchangeRequestLimit:
      return "ErrExchangeRequestLimit";
    case EErrorCode.ErrExchangeItemBanned:
      return "ErrExchangeItemBanned";
    case EErrorCode.ErrExchangePriceNotLow:
      return "ErrExchangePriceNotLow";
    case EErrorCode.ErrExchangeItemNotFind:
      return "ErrExchangeItemNotFind";
    case EErrorCode.ErrExchangeItemExistMinPrice:
      return "ErrExchangeItemExistMinPrice";
    case EErrorCode.ErrExchangeNoticeItemMin:
      return "ErrExchangeNoticeItemMin";
    case EErrorCode.ErrExchangePreBuyUserFull:
      return "ErrExchangePreBuyUserFull";
    case EErrorCode.ErrModHoleNotUnlock:
      return "ErrModHoleNotUnlock";
    case EErrorCode.ErrModNotExist:
      return "ErrModNotExist";
    case EErrorCode.ErrModSimilarRepeated:
      return "ErrModSimilarRepeated";
    case EErrorCode.ErrModTypeLimitExceeded:
      return "ErrModTypeLimitExceeded";
    case EErrorCode.ErrModPartNotExist:
      return "ErrModPartNotExist";
    case EErrorCode.ErrModPartEnhanceLimit:
      return "ErrModPartEnhanceLimit";
    case EErrorCode.ErrModInUse:
      return "ErrModInUse";
    case EErrorCode.ErrModAlreadyInstalled:
      return "ErrModAlreadyInstalled";
    case EErrorCode.ErrModInitConfigNotExist:
      return "ErrModInitConfigNotExist";
    case EErrorCode.ErrModPartOverflow:
      return "ErrModPartOverflow";
    case EErrorCode.ErrModCanNotLink:
      return "ErrModCanNotLink";
    case EErrorCode.ErrModDecomposeOverflow:
      return "ErrModDecomposeOverflow";
    case EErrorCode.ErrFishingNotUseBait:
      return "ErrFishingNotUseBait";
    case EErrorCode.ErrFishingRandomFailed:
      return "ErrFishingRandomFailed";
    case EErrorCode.ErrFishingAlreadyGetFishItem:
      return "ErrFishingAlreadyGetFishItem";
    case EErrorCode.ErrFishingGetFishIdWrong:
      return "ErrFishingGetFishIdWrong";
    case EErrorCode.ErrFishingNotGet:
      return "ErrFishingNotGet";
    case EErrorCode.ErrFishingNotResearchYet:
      return "ErrFishingNotResearchYet";
    case EErrorCode.ErrFishingNotUseRod:
      return "ErrFishingNotUseRod";
    case EErrorCode.ErrFishingNoSeat:
      return "ErrFishingNoSeat";
    case EErrorCode.ErrFishingCantResearch:
      return "ErrFishingCantResearch";
    case EErrorCode.ErrFishDrawnLevelAward:
      return "ErrFishDrawnLevelAward";
    case EErrorCode.ErrFishCannotDrawLevelAward:
      return "ErrFishCannotDrawLevelAward";
    case EErrorCode.ErrFishDrawnNoLevelAward:
      return "ErrFishDrawnNoLevelAward";
    case EErrorCode.ErrFreightNoRefreshGoods:
      return "ErrFreightNoRefreshGoods";
    case EErrorCode.ErrFreightBeyondMaxValue:
      return "ErrFreightBeyondMaxValue";
    case EErrorCode.ErrFreightDownMinValue:
      return "ErrFreightDownMinValue";
    case EErrorCode.ErrFreightHasSetOff:
      return "ErrFreightHasSetOff";
    case EErrorCode.ErrFreightNoSetOff:
      return "ErrFreightNoSetOff";
    case EErrorCode.ErrFreightHasReward:
      return "ErrFreightHasReward";
    case EErrorCode.ErrFreightIllegalGoodsId:
      return "ErrFreightIllegalGoodsId";
    case EErrorCode.ErrFreightItemNoEnough:
      return "ErrFreightItemNoEnough";
    case EErrorCode.ErrFreightNoUpSetOffTime:
      return "ErrFreightNoUpSetOffTime";
    case EErrorCode.ErrFreightNoUpRewardTime:
      return "ErrFreightNoUpRewardTime";
    case EErrorCode.ErrFreightAutoSetOff:
      return "ErrFreightAutoSetOff";
    case EErrorCode.ErrTrialRoadAwardNotFinished:
      return "ErrTrialRoadAwardNotFinished";
    case EErrorCode.ErrTrialRoadAwardRoomGet:
      return "ErrTrialRoadAwardRoomGet";
    case EErrorCode.ErrNotCanRide:
      return "ErrNotCanRide";
    case EErrorCode.ErrCombatStateNotRide:
      return "ErrCombatStateNotRide";
    case EErrorCode.ErrAlreadyRide:
      return "ErrAlreadyRide";
    case EErrorCode.ErrRideNotEnough:
      return "ErrRideNotEnough";
    case EErrorCode.ErrCreateVehicleActorFailed:
      return "ErrCreateVehicleActorFailed";
    case EErrorCode.ErrNotVehicleOwner:
      return "ErrNotVehicleOwner";
    case EErrorCode.ErrVehicleHasController:
      return "ErrVehicleHasController";
    case EErrorCode.ErrVehicleNoSeat:
      return "ErrVehicleNoSeat";
    case EErrorCode.ErrVehicleHasSeat:
      return "ErrVehicleHasSeat";
    case EErrorCode.ErrNotRideVehicle:
      return "ErrNotRideVehicle";
    case EErrorCode.ErrVehicleNotExits:
      return "ErrVehicleNotExits";
    case EErrorCode.ErrInvalidRidePropertyType:
      return "ErrInvalidRidePropertyType";
    case EErrorCode.ErrRideApplyTargetUserNotExist:
      return "ErrRideApplyTargetUserNotExist";
    case EErrorCode.ErrRideConfigNotFind:
      return "ErrRideConfigNotFind";
    case EErrorCode.ErrRideNotUnlock:
      return "ErrRideNotUnlock";
    case EErrorCode.ErrRideNotFind:
      return "ErrRideNotFind";
    case EErrorCode.ErrInvalidRideType:
      return "ErrInvalidRideType";
    case EErrorCode.ErrRideApplyAlreadyExist:
      return "ErrRideApplyAlreadyExist";
    case EErrorCode.ErrRideApplyNotRideVehicle:
      return "ErrRideApplyNotRideVehicle";
    case EErrorCode.ErrRideApplyVehicleNotSeat:
      return "ErrRideApplyVehicleNotSeat";
    case EErrorCode.ErrRideAlReadyRide:
      return "ErrRideAlReadyRide";
    case EErrorCode.ErrRideApplyTargetTooFar:
      return "ErrRideApplyTargetTooFar";
    case EErrorCode.ErrRideNotTake:
      return "ErrRideNotTake";
    case EErrorCode.ErrRideInteracting:
      return "ErrRideInteracting";
    case EErrorCode.ErrShapeshiftNotRide:
      return "ErrShapeshiftNotRide";
    case EErrorCode.ErrFishingNotRide:
      return "ErrFishingNotRide";
    case EErrorCode.ErrRideStateReject:
      return "ErrRideStateReject";
    case EErrorCode.ErrRideTypeNotSupport:
      return "ErrRideTypeNotSupport";
    case EErrorCode.ErrRideNotControl:
      return "ErrRideNotControl";
    case EErrorCode.ErrRideNotFunction:
      return "ErrRideNotFunction";
    case EErrorCode.ErrRideSkinNotSupport:
      return "ErrRideSkinNotSupport";
    case EErrorCode.ErrRideSkinNotUnlock:
      return "ErrRideSkinNotUnlock";
    case EErrorCode.ErrRideSkinDataAddFailed:
      return "ErrRideSkinDataAddFailed";
    case EErrorCode.ErrRideSkinNotSkin:
      return "ErrRideSkinNotSkin";
    case EErrorCode.ErrRideSkinAlreadyActivate:
      return "ErrRideSkinAlreadyActivate";
    case EErrorCode.ErrWarehouseHas:
      return "ErrWarehouseHas";
    case EErrorCode.ErrWarehouseNoHas:
      return "ErrWarehouseNoHas";
    case EErrorCode.ErrWarehouseNoMem:
      return "ErrWarehouseNoMem";
    case EErrorCode.ErrWarehouseNoPresident:
      return "ErrWarehouseNoPresident";
    case EErrorCode.ErrWarehouseNoHasItem:
      return "ErrWarehouseNoHasItem";
    case EErrorCode.ErrWarehouseItemNoDeposit:
      return "ErrWarehouseItemNoDeposit";
    case EErrorCode.ErrWarehouseGridPosNoExist:
      return "ErrWarehouseGridPosNoExist";
    case EErrorCode.ErrWarehouseGridPosItemNoEnough:
      return "ErrWarehouseGridPosItemNoEnough";
    case EErrorCode.ErrWarehouseNoInviteSelf:
      return "ErrWarehouseNoInviteSelf";
    case EErrorCode.ErrWarehouseInviteesHas:
      return "ErrWarehouseInviteesHas";
    case EErrorCode.ErrWarehouseMemBeyondMax:
      return "ErrWarehouseMemBeyondMax";
    case EErrorCode.ErrWarehouseGridBeyondMax:
      return "ErrWarehouseGridBeyondMax";
    case EErrorCode.ErrWarehouseNoSelf:
      return "ErrWarehouseNoSelf";
    case EErrorCode.ErrWarehouseIsMem:
      return "ErrWarehouseIsMem";
    case EErrorCode.ErrWarehouseNoExist:
      return "ErrWarehouseNoExist";
    case EErrorCode.ErrWarehouseDepositBeyondMax:
      return "ErrWarehouseDepositBeyondMax";
    case EErrorCode.ErrWarehouseTakeOutBeyondMax:
      return "ErrWarehouseTakeOutBeyondMax";
    case EErrorCode.ErrWarehouseItemIdNotSame:
      return "ErrWarehouseItemIdNotSame";
    case EErrorCode.ErrWarehouseParams:
      return "ErrWarehouseParams";
    case EErrorCode.ErrWarehouseNoKickSelf:
      return "ErrWarehouseNoKickSelf";
    case EErrorCode.ErrWarehousePresidentNoExit:
      return "ErrWarehousePresidentNoExit";
    case EErrorCode.ErrGashaDrawCount:
      return "ErrGashaDrawCount";
    case EErrorCode.ErrGashaDrawLimit:
      return "ErrGashaDrawLimit";
    case EErrorCode.ErrGashaInvalidWishId:
      return "ErrGashaInvalidWishId";
    case EErrorCode.EErGashaWishRepeated:
      return "EErGashaWishRepeated";
    case EErrorCode.EErGashaWishCountNoEnough:
      return "EErGashaWishCountNoEnough";
    case EErrorCode.ErrWarehouseAuthority:
      return "ErrWarehouseAuthority";
    case EErrorCode.ErrEquipCantDecompose:
      return "ErrEquipCantDecompose";
    case EErrorCode.ErrEquipNotRecastRecord:
      return "ErrEquipNotRecastRecord";
    case EErrorCode.ErrEquipOnCantUsedRecastConsume:
      return "ErrEquipOnCantUsedRecastConsume";
    case EErrorCode.ErrEquipWeaponNotEqualProfession:
      return "ErrEquipWeaponNotEqualProfession";
    case EErrorCode.ErrEquipSlotRefineBlessNotFit:
      return "ErrEquipSlotRefineBlessNotFit";
    case EErrorCode.ErrEquipNotRecast:
      return "ErrEquipNotRecast";
    case EErrorCode.ErrEquipEnchantItemMismatch:
      return "ErrEquipEnchantItemMismatch";
    case EErrorCode.ErrEquipEnchantAlreadyEnchanted:
      return "ErrEquipEnchantAlreadyEnchanted";
    case EErrorCode.ErrEquipAnyItemMismatch:
      return "ErrEquipAnyItemMismatch";
    case EErrorCode.ErrEquipSlotRefineBlessNumTooMuch:
      return "ErrEquipSlotRefineBlessNumTooMuch";
    case EErrorCode.ErrEquipNameGroupNoMatch:
      return "ErrEquipNameGroupNoMatch";
    case EErrorCode.ErrEquipPerfectionNoMatch:
      return "ErrEquipPerfectionNoMatch";
    case EErrorCode.ErrEquipNotBreak:
      return "ErrEquipNotBreak";
    case EErrorCode.ErrEquipPutOnIng:
      return "ErrEquipPutOnIng";
    case EErrorCode.ErrEquipDecomposeOverflow:
      return "ErrEquipDecomposeOverflow";
    case EErrorCode.ErrUserIsMatching:
      return "ErrUserIsMatching";
    case EErrorCode.ErrUserNotInMatching:
      return "ErrUserNotInMatching";
    case EErrorCode.ErrUseNotWaitReady:
      return "ErrUseNotWaitReady";
    case EErrorCode.ErrDungeonCantMatch:
      return "ErrDungeonCantMatch";
    case EErrorCode.ErrMatchQueueFull:
      return "ErrMatchQueueFull";
    case EErrorCode.ErrCommonAwardCantReceive:
      return "ErrCommonAwardCantReceive";
    case EErrorCode.ErrCommonAwardHasReceived:
      return "ErrCommonAwardHasReceived";
    case EErrorCode.ErrCraftEnergyNotEnough:
      return "ErrCraftEnergyNotEnough";
    case EErrorCode.ErrCraftEnergyFull:
      return "ErrCraftEnergyFull";
    case EErrorCode.ErrRecommendPlayNotOpen:
      return "ErrRecommendPlayNotOpen";
    case EErrorCode.ErrWeeklyTowerNoStart:
      return "ErrWeeklyTowerNoStart";
    case EErrorCode.ErrWeeklyTowerHasEnd:
      return "ErrWeeklyTowerHasEnd";
    case EErrorCode.ErrWeeklyNoMeetProcessAward:
      return "ErrWeeklyNoMeetProcessAward";
    case EErrorCode.ErrWeeklyHasRewardProcessAward:
      return "ErrWeeklyHasRewardProcessAward";
    case EErrorCode.ErrWeeklyNoLayerStageAward:
      return "ErrWeeklyNoLayerStageAward";
    case EErrorCode.ErrWeekOnlyCurSeasonAward:
      return "ErrWeekOnlyCurSeasonAward";
    case EErrorCode.ErrWeeklyTowerCannotEnterLayer:
      return "ErrWeeklyTowerCannotEnterLayer";
    case EErrorCode.ErrWeeklyTowerBoxHasOpen:
      return "ErrWeeklyTowerBoxHasOpen";
    case EErrorCode.ErrWeeklyTowerNoBox:
      return "ErrWeeklyTowerNoBox";
    case EErrorCode.ErrWeeklyTowerNoStageAward:
      return "ErrWeeklyTowerNoStageAward";
    case EErrorCode.ErrWeeklyTowerNoTowerDungeon:
      return "ErrWeeklyTowerNoTowerDungeon";
    case EErrorCode.ErrWeeklyTowerLayerNotSatisfy:
      return "ErrWeeklyTowerLayerNotSatisfy";
    case EErrorCode.ErrFunctionNoAward:
      return "ErrFunctionNoAward";
    case EErrorCode.ErrFunctionHasDrawn:
      return "ErrFunctionHasDrawn";
    case EErrorCode.ErrTLogIllegalExportArea:
      return "ErrTLogIllegalExportArea";
    case EErrorCode.ErrPayOrderFail:
      return "ErrPayOrderFail";
    case EErrorCode.ErrPayCostNotEnough:
      return "ErrPayCostNotEnough";
    case EErrorCode.ErrPayCantBuy:
      return "ErrPayCantBuy";
    case EErrorCode.ErrPayCantExplore:
      return "ErrPayCantExplore";
    case EErrorCode.ErrActivityNotFind:
      return "ErrActivityNotFind";
    case EErrorCode.ErrActivityOffline:
      return "ErrActivityOffline";
    case EErrorCode.ErrActivityNotOpen:
      return "ErrActivityNotOpen";
    case EErrorCode.ErrActivityRewardNotFound:
      return "ErrActivityRewardNotFound";
    case EErrorCode.ErrActivityConditionNotFinish:
      return "ErrActivityConditionNotFinish";
    case EErrorCode.ErrActivityAlreadyObtain:
      return "ErrActivityAlreadyObtain";
    case EErrorCode.ErrActivityNotUnlock:
      return "ErrActivityNotUnlock";
    case EErrorCode.ErrEmojiConfigError:
      return "ErrEmojiConfigError";
    case EErrorCode.ErrEmojiAlreadyUnlock:
      return "ErrEmojiAlreadyUnlock";
    case EErrorCode.ErrEmojiUnlockItemError:
      return "ErrEmojiUnlockItemError";
    case EErrorCode.ErrEmojiUnlockItemErrorItemNotEnough:
      return "ErrEmojiUnlockItemErrorItemNotEnough";
    case EErrorCode.ErrEmojiUnlock:
      return "ErrEmojiUnlock";
    case EErrorCode.ErrGlobalConditionNotFound:
      return "ErrGlobalConditionNotFound";
    case EErrorCode.ErrGlobalConditionNotLuckyValue:
      return "ErrGlobalConditionNotLuckyValue";
    case EErrorCode.ErrPathFindingCant:
      return "ErrPathFindingCant";
    case EErrorCode.ErrPathFindingDataError:
      return "ErrPathFindingDataError";
    case EErrorCode.ErrPathFindingEndPosError:
      return "ErrPathFindingEndPosError";
    case EErrorCode.ErrPathFindingStartPosError:
      return "ErrPathFindingStartPosError";
    case EErrorCode.ErrPathFindingNoPath:
      return "ErrPathFindingNoPath";
    case EErrorCode.ErrSignNotOpen:
      return "ErrSignNotOpen";
    case EErrorCode.ErrSignNotSigned:
      return "ErrSignNotSigned";
    case EErrorCode.ErrSignAlreadySigned:
      return "ErrSignAlreadySigned";
    case EErrorCode.ErrSignTimeError:
      return "ErrSignTimeError";
    case EErrorCode.CdKeyInvalid:
      return "CdKeyInvalid";
    case EErrorCode.CdKeyDuplicate:
      return "CdKeyDuplicate";
    case EErrorCode.CdKeyExpired:
      return "CdKeyExpired";
    case EErrorCode.CdKeyNotFound:
      return "CdKeyNotFound";
    case EErrorCode.CdKeyNotActivated:
      return "CdKeyNotActivated";
    case EErrorCode.CdKeyPlayerLevelTooLow:
      return "CdKeyPlayerLevelTooLow";
    case EErrorCode.CdKeyTakeLimitReached:
      return "CdKeyTakeLimitReached";
    case EErrorCode.CdKeyGroupNotFound:
      return "CdKeyGroupNotFound";
    case EErrorCode.ErrTokenBucketLimit:
      return "ErrTokenBucketLimit";
    case EErrorCode.ErrUnknown:
      return "ErrUnknown";
    case EErrorCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
