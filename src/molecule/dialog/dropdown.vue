<template>
  <div class="dropdown">
    <ul class="dropdown__list">
      <li v-for="item in list" class="dropdown__item">
        <TileButton 
          class="dropdown__button"
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
    list: {
      type: Array,
      required: true
    }
  },

  methods: {
    clicked (ev, item) {
      this.$emit('emit-on-click', item)
    }
  }
}
</script>

<style lang="scss">
  .dropdown {
    text-align: left;

    &__list {
      background-color: #eee;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
    }

    &__item {
      &:not(:last-of-type) {
        border-bottom: 1px solid #ccc;
      }
    }

    &__button {
      margin-left: 12px;
    }
  }
</style>