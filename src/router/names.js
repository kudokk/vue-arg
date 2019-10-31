/* eslint key-spacing: [
  "error",
  {
    "align": {
      "beforeColon": false,
      "afterColon": true,
      "on": "value"
    }
  }
] */

export const ROUTE_NAMES = Object.freeze({
  ROOT:                                'root',
  INDEX:                               'index',
  // すべてのキャンペーン
  CAMPAIGNS:                           'campaigns',
  STRUCTS:                             'structs',
  ADS:                                 'ads',
  // キャンペーンの階層
  CAMPAIGN_STRUCTS:                    'campaignStructs',
  CAMPAIGN_ADS:                        'campaignAds',
  // ストラクトの階層
  STRUCT_ADS:                          'structAds',
  // キャンペーン詳細
  CAMPAIGN_DETAIL:                     'campaignDetail',
  // キャンペーン作成
  CAMPAIGN_CREATE:                     'campaignCreate',
  // ストラクト詳細
  STRUCT_DETAIL:                       'structDetail',
  CAMPAIGN_STRUCT_DETAIL:              'campaignStructDetail',
  // ストラクト作成
  STRUCT_CREATE:                       'structCreate',
  CAMPAIGN_STRUCT_CREATE:              'campaignStructCreate',
  // 広告詳細
  AD_DETAIL:                           'adDetail',
  CAMPAIGN_AD_DETAIL:                  'campaignAdDetail',
  STRUCT_AD_DETAIL:                    'structAdDetail',
  // アド作成
  AD_CREATE:                           'adCreate',
  CAMPAIGN_AD_CREATE:                  'campaignAdCreate',
  STRUCT_AD_CREATE:                    'structAdCreate',
  // アド一括作成
  AD_CREATE_MULTIPLE:                  'adCreateMultiple',
  CAMPAIGN_AD_CREATE_MULTIPLE:         'campaignAdCreateMultiple',
  STRUCT_AD_CREATE_MULTIPLE:           'structAdCreateMultiple',
  // プレースメントターゲティング
  PLACEMENT_TARGETINGS:                'placementTargetings',
  PLACEMENT_TARGETING_CREATE:          'placementTargetingCreate',
  PLACEMENT_TARGETING_DETAIL:          'placementTargetingDetail',
  // エラーページ
  ERROR:                               'error'
})
