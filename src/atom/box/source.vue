<template>
  <div class="source">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="sass">
.source {
  background-color: #eee;
  font-size: 14px;
  line-height: 1.5;
  padding: 20px;
  &--inline {
    display: inline-block;
    padding: 0 5px;
  }
}
</style>