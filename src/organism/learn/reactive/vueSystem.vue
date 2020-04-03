<template>
  <div>
    参照<a href="https://jp.vuejs.org/v2/guide/reactivity.html">Vue.js公式: リアクティブの探求</a>
    <section>
      <h2>変更の追跡方法</h2>
      <p>JavaScript オブジェクトを data オプションとして Vue インスタンスに渡すとき、<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a>を使用して getter/setter に変換</p>
    </section>
    <section>
      <h2>リアクティブプロパティの宣言</h2>
      <p>Vue では新しいルートレベルのリアクティブなプロパティを動的に追加することはできないため、インスタンスの初期化時に前もってdataプロパティを宣言する必要がある。</p>
    </section>
    <section>
      <h2>実ソースから見るリアクティブシステム</h2>
      <a href="https://github.com/vuejs/vue/blob/eb9168cfc1816b53ddb1eccd6310173a37803897/src/core/instance/state.js#L116">initData関数</a>内のobserver(data, true /* asRootData */)が、defineReactive関数を使用している。
      <div>
        const data = { message: 'Hello, World' };
        defineRaactive(data, 'message', 'Hello, World');
      </div>
      defineReactive関数は、Object.definePropertyメソッドを使って、第1引数のオブジェクトに、第2引数の名前のプロパティを設定している
    </section>
  </div>
</template>

<script>
export default {
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