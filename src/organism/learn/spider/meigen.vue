<template>
  <div class="meigen">
    <div class="meigen__titleWrap">
      <h2 class="meigen__title">「北斗の拳」名言集</h2>
      <p class="meigen__subTitle">見たい名言をクリック！</p>
    </div>
    <MeigenButtonList
      :nameClassActiveList="meigenButtonObject"
      @emit-on-click="selectName" />

  <ul class="meigen__descList">
    <li v-for="meigen in isActiveMeigenList"
      :key="meigen.name"
      v-if="meigen.classActive"
      class="meigen__desc">
      {{ meigen.name }}  「{{ meigen.desc }}」
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
        { name: 'ラオウ', desc: '我が人生、一片の悔いなし！', classActive: false},
        { name: 'トキ', desc: '愛するがゆえに見守る愛もある', classActive: false},
        { name: 'ジャギ', desc: '俺の名前を言ってみろ！', classActive: false},
        { name: 'ケンシロウ', desc: 'お前はもう、死んでいる', classActive: false},
        { name: 'モヒカン', desc: 'あべし！', classActive: false}
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
    },

    isActiveMeigenList () {
      return this.meigens.filter((it) => it.classActive)
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
    &__titleWrap {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__title {
      font-size: 20px;
      margin-bottom: 10px;
    }

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

    &__descList {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    &__desc {
      font-size: 18px;
      width: 500px;

      &:not(:last-of-type) {
        margin-bottom: 5px;
      }
    }
  }
</style>
