<template>
  <div class="sakeNomi">
    <h1 class="sakeNomi__title">{{ title }}</h1>
    <ul class="sakeNomi__list">
        <li v-for="(value, index) in sake" class="sakeNomi__item">
        {{ index +1 }}月は、<span class="sakeNomi__monthlyValue">{{ value }}</span> 酒が飲めるぞ
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: '',
      sake: []
    }
  },

  async created () {
    await axios.get('/json/sakeNomi.json')
      .then(response => {
        const res = response.data
        this.title = res.title
        this.sake = res.sake
      })
  }
}
</script>

<style lang="scss">
  .sakeNomi {
    margin: 40px auto 20px;
    width: 600px;

    &__title {
      font-size: 20px;
      margin-bottom: 20px;
    }
    
    &__item {
      margin-bottom: 10px;
    }

    &__monthlyValue {
      font-weight: bold;
    }
  }
</style>
