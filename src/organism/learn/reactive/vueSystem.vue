<template>
  <div class="article">
    <a href="https://jp.vuejs.org/v2/guide/reactivity.html">Vue.js公式: リアクティブの探求</a>
    <section class="article__section">
      <h2 class="article__title">変更の追跡方法</h2>
      <p class="article__desc">JavaScript オブジェクトを data オプションとして Vue インスタンスに渡すとき、<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a>を使用して getter/setter に変換</p>
    </section>
    <section class="article__section">
      <h2 class="article__title">リアクティブプロパティの宣言</h2>
      <p class="article__desc">Vue では新しいルートレベルのリアクティブなプロパティを動的に追加することはできないため、インスタンスの初期化時に前もってdataプロパティを宣言する必要がある。</p>
    </section>
    <section class="article__section">
      <h2 class="article__title">実ソースから見るリアクティブシステム</h2>
      <div class="article__desc">
        <a href="https://github.com/vuejs/vue/blob/eb9168cfc1816b53ddb1eccd6310173a37803897/src/core/instance/state.js#L116">initData関数</a>
        <span>内の<Source class="source--inline">observer(data, true /* asRootData */)</Source>が、defineReactive関数を使用している。</span>
      </div>
      <Source>
        <div>const data = { message: 'Hello, World' }</div>
        <div>defineRaactive(data, 'message', 'Hello, World')</div>
      </Source>
      <div class="article__desc">
        defineReactive関数は、Object.definePropertyメソッドを使って、第1引数のオブジェクトに、第2引数の名前のプロパティを設定している
      </div>
    </section>
  </div>
</template>

<script>
import Source from '@/atom/box/source'

export default {
  components: {
    Source
  },

  data() {
    return {
      observeTest: {
        nestObj: { value: '', label: '' },
        nestArray: [{ id: 1, name: "No1" }, {id: 2, name: "No2"}]
      }
    }
  },

  created() {
    console.log('---- this.observeTest ----')
    console.log(this.observeTest)
  }
}
</script>

<style lang="sass">
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  &__section {
    margin-top: 20px;
    width: 80%;
  }
  &__title {
    font-size: 18px;
  }
  &__desc {
    margin-top: 10px;
    margin-bottom: 1px;
  }
}
</style>