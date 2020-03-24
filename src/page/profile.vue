<template>
  <div>
    <Carrer />
  </div>
</template>

<script>
import Carrer from '@/page/profile/carrer'

export default {
  components: {
    Carrer
  },
  created () {
    console.log('a')
  },
  beforeRouteEnter (to, form, next) {
    console.log('component:beforeRouteEnter');
    console.log('---------');
    next();
  },
  beforeRouteUpdate (to, form, next) {
    console.log('component:beforeRouteUpdate');
    next();
  },
  beforeRouteLeave (to, form, next) {
    console.log('component:beforeRouteLeave');
    next();
  }
}
</script>
