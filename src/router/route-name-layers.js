import { ROUTE_NAMES } from '@/router/names.js'

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

export const ROUTE_NAME_LAYERS = Object.freeze({
  // トップの階層に属するルート名
  LEARN: (() => {
    const obj = {}
    obj[ROUTE_NAMES.SPIDER] = spiderArray
    return obj
  })()
})
