<template>
  <div class="linda">
    <div class="linda__titleWrap">
      <h1 class="linda__title">Love Song</h1>
      <InputText 
        v-model="name"
        title="あなたの愛する人の名前を入れましょう。"
        class="linda__input"
        placeholder="名前" />
      <h2>{{ name }} {{ name }}</h2>
    </div>
    <LindaLyric
      :name="name" />
    <div class="linda__comment">※愛する人にこのラブソングを送りましょう。</div>
  </div>
</template>

<script>
import LindaLyric from '@/atom/lindaLyric'
import InputText from '@/atom/inputText'

export default {
  components: {
    LindaLyric,
    InputText
  },

  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .linda {
    margin: 0 auto 20px;
    width: 600px;

    &__titleWrap {
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    &__desc {
      margin-bottom: 10px;
    }

    &__input {
      height: 20px;
      width: 100%;
    }

    &__lyric {
      line-height: 1.4;
      padding-bottom: 10px;
    }

    &__comment {
      border-top: 1px solid #eee;
      font-size: 14px;
      padding-top: 10px;
    }
  }
</style>