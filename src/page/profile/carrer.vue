<template>
  <div>
    <Company />
    <Tech />
  </div>
</template>

<script>
import Company from '@/organism/profile/company'
import Tech from '@/organism/profile/tech'

export default {
  components: {
    Company,
    Tech
  }
}
</script>