// import Vue from 'vue'
// import Router from 'vue-router'
// import { ROUTE_NAMES } from '@/router/names.js'
// import helper from '@/router/helper.js'

// // pages
// import Summary from '@/pages/Summary.vue'
// import CampaignCreatePage from '@/pages/campaign/CreatePage.vue'
// import StructCreatePage from '@/pages/struct/CreatePage.vue'
// import AdCreatePage from '@/pages/ad/CreatePage.vue'
// import CampaignDetailPage from '@/pages/campaign/DetailPage.vue'
// import AdDetailPage from '@/pages/ad/DetailPage.vue'
// import StructDetailPage from '@/pages/struct/DetailPage.vue'
// import ErrorPage from '@/pages/ErrorPage.vue'
// // campaign components
// import CampaignList from '@/components/campaign/List.vue'
// // struct components
// import StructList from '@/components/struct/List.vue'
// // ad components
// import AdList from '@/components/ad/List.vue'
// // targeting components
// import PlacementTargetingList from '@/components/targeting/placement/List.vue'
// import PlacementTargetingCreate from '@/components/targeting/placement/Create.vue'
// import PlacementTargetingDetail from '@/components/targeting/placement/Detail.vue'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: ROUTE_NAMES.ROOT,
//       beforeEnter: (to, from, next) => {
//         helper.navGuardIndexAndRoot(to, from, next)
//       }
//     },
//     {
//       path: '/index',
//       name: ROUTE_NAMES.INDEX,
//       beforeEnter: (to, from, next) => {
//         helper.navGuardIndexAndRoot(to, from, next)
//       }
//     },

//     // すべての階層
//     {
//       path: '/',
//       component: Summary,
//       children: [
//         {
//           path: 'campaigns',
//           name: ROUTE_NAMES.CAMPAIGNS,
//           component: CampaignList
//         },
//         {
//           path: 'structs',
//           name: ROUTE_NAMES.STRUCTS,
//           component: StructList
//         },
//         {
//           path: 'ads',
//           name: ROUTE_NAMES.ADS,
//           component: AdList
//         }
//       ]
//     },

//     // キャンペーンの階層
//     {
//       path: '/campaigns/:campaignId(\\d+)',
//       component: Summary,
//       children: [
//         {
//           path: 'structs',
//           name: ROUTE_NAMES.CAMPAIGN_STRUCTS,
//           component: StructList
//         },
//         {
//           path: 'ads',
//           name: ROUTE_NAMES.CAMPAIGN_ADS,
//           component: AdList
//         }
//       ]
//     },

//     // ストラクトの階層
//     {
//       path: '/structs/:structId(\\d+)',
//       component: Summary,
//       children: [
//         {
//           path: 'ads',
//           name: ROUTE_NAMES.STRUCT_ADS,
//           component: AdList
//         }
//       ]
//     },

//     // キャンペーンの作成画面
//     {
//       path: '/campaigns/create',
//       name: ROUTE_NAMES.CAMPAIGN_CREATE,
//       component: CampaignCreatePage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'campaign', 'add')
//       }
//     },

//     // ストラクトの作成画面(すべてのストラクトから)
//     {
//       path: '/structs/create',
//       name: ROUTE_NAMES.STRUCT_CREATE,
//       component: StructCreatePage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'struct', 'add')
//       }
//     },

//     // ストラクトの作成画面(キャンペーン詳細から)
//     {
//       path: '/campaigns/:campaignId(\\d+)/structs/create',
//       name: ROUTE_NAMES.CAMPAIGN_STRUCT_CREATE,
//       component: StructCreatePage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'struct', 'add')
//       }
//     },

//     // 広告の作成画面(すべての広告から)
//     {
//       path: '/ads/create',
//       name: ROUTE_NAMES.AD_CREATE,
//       component: AdCreatePage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'ad', 'add')
//       }
//     },

//     // 広告の作成画面(キャンペーン詳細から)
//     {
//       path: '/campaigns/:campaignId(\\d+)/ads/create',
//       name: ROUTE_NAMES.CAMPAIGN_AD_CREATE,
//       component: AdCreatePage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'ad', 'add')
//       }
//     },

//     // 広告の作成画面(ストラクト詳細から)
//     {
//       path: '/structs/:structId(\\d+)/ads/create',
//       name: ROUTE_NAMES.STRUCT_AD_CREATE,
//       component: AdCreatePage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'ad', 'add')
//       }
//     },

//     // キャンペーンの詳細画面
//     {
//       path: '/campaigns/:campaignId(\\d+)/detail',
//       name: ROUTE_NAMES.CAMPAIGN_DETAIL,
//       component: CampaignDetailPage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'campaign', 'show')
//       }
//     },

//     // ストラクトの詳細画面(すべてのストラクトから)
//     {
//       path: '/structs/:structId(\\d+)/detail',
//       name: ROUTE_NAMES.STRUCT_DETAIL,
//       component: StructDetailPage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'struct', 'show')
//       }
//     },

//     // ストラクトの詳細画面(キャンペーンの階層から)
//     {
//       path: '/campaigns/:campaignId(\\d+)/structs/:structId(\\d+)/detail',
//       name: ROUTE_NAMES.CAMPAIGN_STRUCT_DETAIL,
//       component: StructDetailPage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'struct', 'show')
//       }
//     },

//     // 広告の詳細画面(すべての広告から)
//     {
//       path: '/ads/:adId(\\d+)/detail',
//       name: ROUTE_NAMES.AD_DETAIL,
//       component: AdDetailPage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'ad', 'show')
//       }
//     },

//     // 広告の詳細画面(キャンペーンの階層から)
//     {
//       path: '/campaigns/:campaignId(\\d+)/ads/:adId(\\d+)/detail',
//       name: ROUTE_NAMES.CAMPAIGN_AD_DETAIL,
//       component: AdDetailPage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'ad', 'show')
//       }
//     },

//     // 広告の詳細画面(ストラクトの階層から)
//     {
//       path: '/structs/:structId(\\d+)/ads/:adId(\\d+)/detail',
//       name: ROUTE_NAMES.STRUCT_AD_DETAIL,
//       component: AdDetailPage,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'ad', 'show')
//       }
//     },

//     // プレースメントターゲティング一覧
//     {
//       path: '/targetings/placement',
//       name: ROUTE_NAMES.PLACEMENT_TARGETINGS,
//       component: PlacementTargetingList
//     },

//     // プレースメントターゲティング作成
//     {
//       path: '/targetings/placement/create',
//       name: ROUTE_NAMES.PLACEMENT_TARGETING_CREATE,
//       component: PlacementTargetingCreate,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'placement_targeting', 'add')
//       }
//     },

//     // プレースメントターゲティング詳細
//     {
//       path: '/targetings/placement/:placementTargetingId(\\d+)/detail',
//       name: ROUTE_NAMES.PLACEMENT_TARGETING_DETAIL,
//       component: PlacementTargetingDetail,
//       beforeEnter: (to, from, next) => {
//         helper.authCheck(to, from, next, 'placement_targeting', 'show')
//       }
//     },

//     // エラーページ
//     {
//       path: '/error/:statusCode(\\d+)',
//       name: ROUTE_NAMES.ERROR,
//       component: ErrorPage
//     }
//   ]
// })
