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
      <a href="https://qiita.com/anqooqie/items/ab3fed5d269d278cdd2b">[JavaScript] オブジェクト/Mapのキーの列挙順は保証されるのか</a>
      <ol>
        <li>0〜2(32乗)−2の整数として解釈可能な文字列であるプロパティを、整数として解釈した場合の昇順で列挙する</li>
        <li>0〜2(32乗)−2の整数として解釈できない文字列であるプロパティを、挿入順に列挙する</li>
        <li>シンボルであるプロパティを、挿入順に列挙する</li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testOrderNumber: {
        1: 'test1',
        21: 'test21',
        10: 'test10',
        9: 'test9'
      },
      testOrderStringNumber: {
        '1': 'test1',
        '21': 'test21',
        '10': 'test10',
        '9': 'test9'
      },
      testOrderSetStringNumber: {}
    }
  },

  created() {
    console.log('---- this.testOrderNumber ----')
    this.consoleOrder(this.testOrderNumber)
    console.log('---- this.testOrderStringNumber ----')
    this.consoleOrder(this.testOrderStringNumber)
    console.log('---- this.testOrderSetStringNumber ----')
    const testArray = [1, 21, 10, 9]
    testArray.forEach(testNum => {
      this.$set(this.testOrderSetStringNumber, testNum, `test${testNum}`)
    })
    this.consoleOrder(this.testOrderSetStringNumber)
  },

  methods: {
    consoleOrder(testObject) {
      console.log(testObject)
      Object.getOwnPropertyNames(testObject).forEach(testOrder => console.log(testOrder))
      Object.keys(testObject).forEach(testOrder => console.log(testOrder))
      Object.values(testObject).forEach(testOrder => console.log(testOrder))
    }
  }
}
</script>