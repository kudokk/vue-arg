<template>
  <div id="app">
    <TodoList />
    <Meigen />
    <Linda />
    <Warikan />
    <Sengokuquiz />
    <TonnyRoom />
  </div>
</template>

<script>
import TodoList from '@/organism/todoList'
import Meigen from '@/organism/meigen'
import Linda from '@/organism/linda'
import Warikan from '@/organism/warikan'
import Sengokuquiz from '@/organism/Sengokuquiz'
import TonnyRoom from '@/organism/tonnyRoom'

export default {
  components: {
    TodoList,
    Meigen,
    Linda,
    Warikan,
    Sengokuquiz,
    TonnyRoom
  }
}
</script>

<style lang="scss">
  @import "@/style/reset"
</style>