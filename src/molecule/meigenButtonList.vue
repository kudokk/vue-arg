<template>
  <div class="meigen__buttonList">
    <RectButton
      v-for="(it, index) in nameClassActiveList"
      class="meigen__button"
      :class="{ active: it.classActive }"
      :text="it.name"
      @emit-on-click="clicked(index)" />
  </div>
</template>

<script>
import RectButton from '@/atom/rectButton'

export default {
  components: {
    RectButton
  },

  props: {
    nameClassActiveList: {
      type: Array,
      required: true
    }
  },

  methods: {
    clicked (index) {
      this.$emit('emit-on-click', index)
    }
  }
}
</script>
