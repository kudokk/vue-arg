<template>
  <div class="tileButton">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .tileButton {
    color: #000;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
      opacity: .5;
    } 
  }
</style>