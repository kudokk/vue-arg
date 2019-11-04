<template>
  <div id="app">
    <TodoList />
    <Meigen />
  </div>
</template>

<script>
import TodoList from '@/organism/todoList'
import Meigen from '@/organism/meigen'

export default {
  components: {
    TodoList,
    Meigen
  }
}
</script>

<style lang="scss">
  @import "@/style/reset"
</style>