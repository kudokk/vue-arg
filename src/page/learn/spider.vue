<template>
  <div>
    <div class="title">
      <a href="https://qiita.com/i-ryo/items/baa50cf0a6647fe8bd2e" class="title__link">こちら</a>を参考に学習
    </div>
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

<style lang="sass" scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
}
</style>
