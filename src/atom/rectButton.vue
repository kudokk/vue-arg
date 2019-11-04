<template>
  <button class="rectButton" @click="clicked">
    {{ text }}
  </button>
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
    clicked () {
      this.$emit('emit-on-click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .rectButton {
    border-radius: 5px;
    font-size: 14px;
    padding: 10px;
    min-width: 80px;
  }
</style>