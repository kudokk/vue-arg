<template>
  <div>
    <a href="https://qiita.com/anqooqie/items/ab3fed5d269d278cdd2b">[JavaScript] オブジェクト/Mapのキーの列挙順は保証されるのか</a>
    <ol>
      <li>0〜2(32乗)−2の整数として解釈可能な文字列であるプロパティを、整数として解釈した場合の昇順で列挙する</li>
      <li>0〜2(32乗)−2の整数として解釈できない文字列であるプロパティを、挿入順に列挙する</li>
      <li>シンボルであるプロパティを、挿入順に列挙する</li>
    </ol>
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