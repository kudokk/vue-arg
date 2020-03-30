<template>
  <div class="company">
    <section class="profileCard">
      <div class="profileCard__term">2017年04月: 新卒入社</div>
      <div class="profileCard__label">
        <div class="profileCard__labelInner">
          <div>
            <div class="profileCard__company">社名: 株式会社ぐるなび</div>
            <div class="profileCard__jobName">職種: フロントエンドエンジニア</div>
          </div>
        </div>
      </div>
      <div class="profileCard__descArea">
        <div class="profileCard__descTitle">複数サービスのフロントエンドを担当。主にSP版検索結果画面を担当</div>
        <div class="profileCard__descTitle">HTML, CSS, jQueryによる基本的なマークアップとVue.jsによるSPA開発を行う</div>
        <div v-for="skill in GSkillArray" :key="skill.header" class="profileCard__desc">
          <span class="profileCard__descHeader">{{ skill.header }}:</span><span>{{ skill.desc }}</span>
        </div>
      </div>
    </section>
    <section class="profileCard" @click="test()">
      <div class="profileCard__term">2019年08月: 中途入社</div>
      <div class="profileCard__label">
        <div class="profileCard__labelInner">
          <div>
            <div class="profileCard__company">社名: 株式会社BlueStar</div>
            <div class="profileCard__jobName">職種: フロントエンドエンジニア</div>
          </div>
        </div>
      </div>
      <div class="profileCard__descArea">
        <div class="profileCard__descTitle">広告配信プラットフォームサービスのフロントエンドを担当。</div>
        <div class="profileCard__descTitle">UI設計とVue.jsによるSPA開発に専念。</div>
        <div v-for="skill in BSkillArray" :key="skill.header" class="profileCard__desc">
          <span class="profileCard__descHeader">{{ skill.header }}:</span><span>{{ skill.desc }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// 定数を外部ファイルから読み込むことも可能
import BSkillArray from '@/consts/profile/BSkillArray'

// script内に定数定義する方法もある
const GSkillList = {
  HTML: 'HTML',
  CSS: 'CSS',
  JAVASCRIPT: 'Javscript',
  BUILD_TOOLS: 'Build Tools',
  SEO: 'SEO',
}

export default {
  data () {
    // return前に定数定義する方法もある
    const GSkillArray = [
      { header: GSkillList.HTML, desc: 'pug, ejs' },
      { header: GSkillList.CSS, desc: 'SASS, CSS命名規則, MindBEMding(BEM) CSS設計: SMACSS' },
      { header: GSkillList.JAVASCRIPT, desc: 'JS: Vanilla.js(ES5, ES6), jQuery, Vue.js' },
      { header: GSkillList.BUILD_TOOLS, desc: 'Grunt, Gulp, Webpack' },
      { header: GSkillList.SEO, desc: 'セマンティックな記述, 構造化データ, AMP' }
    ]
    return {
      GSkillArray,
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
.company {
  width: 80%;
  margin: 0 auto;
  line-height: 1.2;
}
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
  &__labelInner {
    background-color: #c6e9d9;
    display: flex;
    align-items: center;
    height: 60px;
    width: 400px;
    &::before {
      background-color: #41B883;
      content: '';
      display: block;
      margin-right: 10px;
      height: 100%;
      width: 10px;
    }
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

