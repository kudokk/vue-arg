<template>
  <div class="tileButton" @click="onClicked">
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
  },

  methods: {
    onClicked () {
      this.$emit('emit-on-click')
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