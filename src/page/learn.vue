<template>
  <div>
    <Meigen />
    <Linda />
    <Warikan />
    <Sengokuquiz />
    <TonnyRoom />
    <SakeNomi />
  </div>
</template>

<script>
import TodoList from '@/organism/todoList'
import Meigen from '@/organism/meigen'
import Linda from '@/organism/linda'
import Warikan from '@/organism/warikan'
import Sengokuquiz from '@/organism/Sengokuquiz'
import TonnyRoom from '@/organism/tonnyRoom'
import SakeNomi from '@/organism/sakeNomi'

export default {
  components: {
    TodoList,
    Meigen,
    Linda,
    Warikan,
    Sengokuquiz,
    TonnyRoom,
    SakeNomi
  }
}
</script>
