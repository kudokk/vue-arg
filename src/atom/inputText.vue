<template>
  <div>
    <label>{{ title }}</label>
    <input type="text" :value="value" :placeholder="placeholder" @input="input" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    value: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      default: 'テキストを入力'
    }
  },

  methods: {
    input (ev) {
      this.$emit('input', ev.target.value)
    }
  }
}
</script>