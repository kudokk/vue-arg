<template>
  <div class="dropdown">
    <ul v-for="(item, index) in keyList" class="dropdown__list">
      <li class="dropdown__item">
        <TileButton 
          class="dropdown__button"
          :text="item"
          @emit-on-click="clicked($event, item)" />
      </li>
      <li v-for="item in childList(index)" class="dropdown__item">
        <TileButton 
          class="dropdown__button dropdown__button--child"
          :text="item"
          @emit-on-click="clicked($event, item)" />
      </li>
    </ul>
  </div>
</template>

<script>
import TileButton from '@/atom/button/tileButton'

export default {
  components: {
    TileButton
  },

  props: {
    stepMap: {
      type: Object,
      required: true
    }
  },

  computed: {
    keyList() {
      return Object.keys(this.stepMap)
    }
  },

  methods: {
    clicked(ev, item) {
      this.$emit('emit-on-click', item)
    },
    childList(index) {
      return this.stepMap[Object.keys(this.stepMap)[index]]
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  text-align: left;

  &__list {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }

  &__button {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;
    padding-right: 12px;
    white-space: nowrap;
    width: 150px;

    &--child {
      padding-left: 24px;
    }
  }
}
</style>