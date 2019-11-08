<template>
  <div id="app" class="page">
    <AppHeader />
    <AppMain />
  </div>
</template>

<script>
import AppHeader from '@/organism/appHeader'
import AppMain from '@/page/appMain'

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style lang="scss">
  @import "@/style/reset";

  .page {
    padding-top: 50px;
  }
</style>