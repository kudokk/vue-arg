<template>
  <div class="warikan">
    <h1 class="warikan__title">割り勘計算機</h1>
    <p class="warikan__inputArea">
      <label>合計</label>
      <input class="warikan__input" v-model.number="totalPrice" type="number">円　÷　
      <label>人数</label>
      <input class="warikan__input" v-model.number="people" type="number">人
    </p>
    <span>一人当たり…</span>
    <p class="warikan__unitPrice">{{ unitPrice }} <span>円</span></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalPrice: null,
      people: null
    }
  },

  computed: {
    unitPrice () {
      if (!this.totalPrice || !this.people) {
        return
      }
      return this.totalPrice / this.people
    }
  },
}
</script>

<style lang="scss">
  .warikan {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin: 40px auto 20px;
    width: 600px;

    &__title {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }

    &__input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
      margin-right: 8px;
    }

    &__inputArea {
      margin-bottom: 10px;
    }

    &__unitPrice {
      text-align: right;
    }
  }
</style>