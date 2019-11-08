<template>
  <div id="app" class="page">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/organism/appHeader'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  @import "@/style/reset";

  .page {
    padding-top: 50px;
  }
</style>