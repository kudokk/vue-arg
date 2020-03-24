<template>
  <div class="sengokuquiz">
    <h2 class="sengokuquiz__title">戦国時代クイズ</h2>
    <p class="sengokuquiz__desc">龍造寺四天王の一人で主君・龍造寺隆信から「百人並みの武勇を有する」と賞され、それにちなんだ姓を賜った武将の名前は？</p>
    <input class="sengokuquiz__input" v-model.lazy="input" placeholder="武将名" />
    <!-- @changeイベント, methodsで受け取るでも可能 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer: '百武賢兼',
      input: ''
    }
  },

  watch: {
    input () {
      const judgment = this.input.indexOf(this.answer)
    }
  }
}
</script>

<style lang="scss">
  .sengokuquiz {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    margin: 0 auto 20px;
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
</style>
