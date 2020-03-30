<template>
  <section class="profileCard" @click="test()">
    <div class="profileCard__term">{{ carrerObject.term }}</div>
    <div class="profileCard__label">
      <StickyLabel>
        <div class="profileCard__company">社名: {{ carrerObject.companyName }}</div>
        <div class="profileCard__jobName">職種: {{ carrerObject.jobName }}</div>
      </StickyLabel>
    </div>
    <ClothBox class="profileCard__descArea">
      <div class="profileCard__descTitle">
        <div v-for="skillTitle in carrerObject.skillTitle" :key="skillTitle">
          {{ skillTitle }}
        </div>
        </div>
        <div class="profileCard__descWrap">
          <div v-for="skill in carrerObject.skillArray" :key="skill.header" class="profileCard__desc">
            <span class="profileCard__descHeader">{{ skill.header }}:</span><span>{{ skill.desc }}</span>
          </div>
        </div>
    </ClothBox>
  </section>
</template>

<script>
import ClothBox from '@/atom/box/clothBox'
import StickyLabel from '@/atom/label/stickyLabel'
// 定数を外部ファイルから読み込むことも可能
import BSkillArray from '@/consts/profile/BSkillArray'

export default {
  components: {
    ClothBox,
    StickyLabel
  },

  props: {
    carrerObject: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      BSkillArray
    }
  },

  methods: {
    test() {
      console.log(this.BSkillArray)
    }
  }
}
</script>

<style lang="sass" scoped>
.profileCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  text-align: left;
  margin-top: 60px;
  margin-bottom: 60px;
  position: relative;
  &::after {
    background-color: #eee;
    display: block;
    content: '';
    position: absolute;
    top: .6rem;
    height: 2px;
    width: 100%;
  }
  &__term {
    background-color: white;
    position: relative;
    z-index: 1;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
  }
  &__label {
    width: 100%;
  }
  &__descArea {
    margin-top: 20px;
    width: 100%;
  }
  &__descTitle {
    margin-bottom: 10px;
  }
  &__desc {
    margin-top: 5px;
    margin-left: 10px;
    display: flex;
  }
  &__descHeader {
    min-width: 180px;
  }
}
</style>
