<template>
  <div>
    VueのReactiveシステムについての実験場所
    <VueSystem></VueSystem>
    <DefineProperty></DefineProperty>
  </div>
</template>

<script>
import VueSystem from '@/organism/learn/reactive/vueSystem'
import DefineProperty from '@/organism/learn/reactive/DefineProperty'

export default {
  components: {
    VueSystem,
    DefineProperty
  }
}
</script>