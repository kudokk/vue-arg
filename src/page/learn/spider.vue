<template>
  <div>
    <TodoList/>
    <Meigen />
    <Linda />
    <Warikan />
    <Sengokuquiz />
    <TonnyRoom />
    <SakeNomi />
  </div>
</template>

<script>
import TodoList from '@/organism/learn/spider/todoList'
import Meigen from '@/organism/learn/spider/meigen'
import Linda from '@/organism/learn/spider/linda'
import Warikan from '@/organism/learn/spider/warikan'
import Sengokuquiz from '@/organism/learn/spider/sengokuquiz'
import TonnyRoom from '@/organism/learn/spider/tonnyRoom'
import SakeNomi from '@/organism/learn/spider/sakeNomi'

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
