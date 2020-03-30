<template>
  <div class="company">
    <ProfileCard
      v-for="carrer in carrerArray"
      :key="carrer"
      :carrerObject="carrer"
    ></ProfileCard>
  </div>
</template>

<script>
import ProfileCard from '@/molecule/profileCard'
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
  components: {
    ProfileCard
  },

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
      carrerArray: [
        {
          term: '2017年04月: 新卒入社',
          companyName: '株式会社ぐるなび',
          jobName: 'フロントエンドエンジニア',
          skillTitle: ['複数サービスのフロントエンドを担当。主にSP版検索結果画面を担当', 'HTML, CSS, jQueryによる基本的なマークアップとVue.jsによるSPA開発を行う'],
          skillArray: [...GSkillArray]
        },
        {
          term: '2019年08月: 中途入社',
          companyName: '株式会社BlueStar',
          jobName: 'フロントエンドエンジニア',
          skillTitle: ['広告配信プラットフォームサービスのフロントエンドを担当。', 'UI設計とVue.jsによるSPA開発に専念。'],
          skillArray: [...BSkillArray]
        }
      ]
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
</style>

