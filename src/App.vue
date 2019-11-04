<template>
  <div id="app">
    <TodoList />
    <Meigen />
    <Linda />
  </div>
</template>

<script>
import TodoList from '@/organism/todoList'
import Meigen from '@/organism/meigen'
import Linda from '@/organism/linda'

export default {
  components: {
    TodoList,
    Meigen,
    Linda
  }
}
</script>

<style lang="scss">
  @import "@/style/reset"
</style>