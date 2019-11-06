<template>
  <div class="tonny">
    <h1 class="tonny__title">トニーの部屋</h1>
    <p>「あなたのお名前なんて〜の？」</p>
    <input type="text" class="tonny__input" v-model="name" placeholder="お名前">
    <transition>
      <p v-if="name">「{{ name }}と申します！」</p>
    </transition>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .tonny {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    margin: 40px auto 20px;
    width: 600px;

    &__title {
      font-size: 20px;
      margin-bottom: 20px;
    }

    &__input {
      font-size: 14px;
      margin-top: 10px;
      height: 50px;
    }
  }

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: 1s;
}
</style>