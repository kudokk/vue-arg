import { ROUTE_NAMES } from '@/router/names.js'

const carrerArray = (() => {
  return [
    ROUTE_NAMES.COMPANY,
    ROUTE_NAMES.TECH
  ]
})()

const spiderArray = (() => {
  return [
    ROUTE_NAMES.TODOLIST,
    ROUTE_NAMES.MEIGEN,
    ROUTE_NAMES.LINDA,
    ROUTE_NAMES.WARIKAN,
    ROUTE_NAMES.SENGOKU,
    ROUTE_NAMES.TONNY,
    ROUTE_NAMES.SAKENOMI
  ]
})()

const reactiveArray = (() => {
  return [
    ROUTE_NAMES.VUESYSTEM,
    ROUTE_NAMES.DEFINEPROPERTY,
    ROUTE_NAMES.DEEPCOPY
  ]
})()

export const ROUTE_NAME_LAYERS = Object.freeze({
  // トップの階層に属するルート名
  PROFILE: (() => {
    return { [ROUTE_NAMES.CARRER]: carrerArray }
  })(),

  LEARN: (() => {
    return {
      [ROUTE_NAMES.SPIDER]: spiderArray,
      [ROUTE_NAMES.REACTIVE]: reactiveArray
    }
  })()
})
