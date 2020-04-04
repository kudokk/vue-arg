<template>
  <div>
    VueのReactiveシステムについての実験場所
    <VueSystem></VueSystem>
    <DefineProperty></DefineProperty>
    <DeepCopy></DeepCopy>
  </div>
</template>

<script>
import VueSystem from '@/organism/learn/reactive/vueSystem'
import DefineProperty from '@/organism/learn/reactive/DefineProperty'
import DeepCopy from '@/organism/learn/reactive/DeepCopy'

export default {
  components: {
    VueSystem,
    DefineProperty,
    DeepCopy
  }
}
</script>