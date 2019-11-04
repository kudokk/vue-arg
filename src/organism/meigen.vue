<template>
  <div class="meigen">
    <h2 class="meigen__title">「北斗の拳」名言集</h2>
    <p class="meigen__subTitle">見たい名言をクリック！</p>
    <MeigenButtonList
      :nameClassActiveList="meigenButtonObject"
      @emit-on-click="selectName" />

  <ul class="meigen__descList">
    <li v-for="meigen in meigens"
      class="meigen__desc"
      v-bind:class='{ active: meigen.classActive }'>
      {{ meigen.desc }}
    </li>
  </ul>
  </div>
</template>

<script>
import MeigenButtonList from '@/molecule/meigenButtonList'

export default {
  components: {
    MeigenButtonList
  },

  data() {
    return {
      meigens: [
        { name: 'ラオウ', desc: 'ラオウ「我が人生、一片の悔いなし！」', classActive: false},
        { name: 'トキ', desc: 'トキ「愛するがゆえに見守る愛もある」', classActive: false},
        { name: 'ジャギ', desc: 'ジャギ「俺の名前を言ってみろ！」', classActive: false},
        { name: 'ケンシロウ', desc: 'ケンシロウ「お前はもう、死んでいる」', classActive: false},
        { name: 'モヒカン', desc: 'モヒカン「あべし！」', classActive: false}
      ]
    }
  },

  computed: {
    meigenButtonObject () {
      return this.meigens.map((it) => {
        return {
          name: it.name,
          classActive: it.classActive 
        }
      })
    }
  },

  methods: {
    selectName (index) {
      this.meigens[index].classActive = !this.meigens[index].classActive
    }
  }
}
</script>

<style lang="scss">
  .meigen {
    &__buttonList {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    &__button {
      cursor: pointer;

      &:hover {
        background-color: #eee;
      }

      &:not(:last-of-type) {
        margin-right: 10px;
      }

      &.active {
        color: red;
      }
    }
  }
</style>
