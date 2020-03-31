<template>
  <div class="appHeader">
    <div class="appHeader__left">
      <div class="logo">
        <img class="logo__img" src="/img/logo.png" height="30px" width="30px">
      </div>
      <span class="appHeader__title">kk</span>
    </div>
    <ul class="link">
      <li v-for="link in links" class="link__item">
        <div class="link__dropdownWrapper"
          @mouseover="openDropdown(link)"
          @mouseleave="closeDropdown(link)">
          <a class="link__text"
            @click="transition(link)">
            {{ link }}
          </a>
          <transition name="slide-fade">
            <HasStepDropdown
              v-if="isDropdownActive(link)"
              @mouseover="openDropdown(link)"
              class="link__dropdown"
              :stepMap="getDropdownList(link)"
              @emit-on-click="clicked" />
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ROUTE_NAMES } from '@/router/names'
import { ROUTE_NAME_LAYERS } from '@/router/route-name-layers'

import HasStepDropdown from '@/molecule/dialog/HasStepDropdown'

export default {
  components: {
    HasStepDropdown
  },

  data () {
    return {
      links: [
        ROUTE_NAMES.PROFILE,
        ROUTE_NAMES.LEARN
      ],
      dropdownList: (() => {
        const obj = {}
        obj[ROUTE_NAMES.LEARN] = ROUTE_NAME_LAYERS.LEARN
        obj[ROUTE_NAMES.PROFILE] = ROUTE_NAME_LAYERS.PROFILE
        return obj
      })(),
      dropdownActive: (() => {
        const LEARN = ROUTE_NAMES.LEARN
        const PROFILE = ROUTE_NAMES.PROFILE
        const obj = {}
        obj[LEARN] = true
        obj[PROFILE] = true
        return obj
      })()
    }
  },

  methods: {
    transition (link) {
      this.$router.push({name: link})
    },

    openDropdown (link) {
      this.dropdownActive[link] = true
    },

    closeDropdown (link) {
      this.dropdownActive[link] = false
    },

    isDropdownActive (link) {
      return this.dropdownActive[link]
    },

    getDropdownList (link) {
      return this.dropdownList[link]
    },

    clicked (item) {
      this.$router.push({name: item})
    }
  }
}
</script>

<style lang="scss" scoped>
.appHeader {
  background-color: #41B883;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  z-index: 3;

  &__left {
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
  }
}

.logo {
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 30px;
  margin-left: 80px;
}

.link {
  display: flex;
  margin-right: 100px;
  height: 100%;
  width: 200px;

  &__item {
    display: flex;
    position: relative;
    width: 100px;
  }

  &__dropdownWrapper {
    position: absolute;
  }

  &__text {
    cursor: pointer;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-decoration: none;
    height: 50px;
    width: 100px;

    &:hover {
      text-decoration: underline;
      background-color: rgba(255, 255, 255, .5)
    }
  }
}

.slide-fade {
  &-enter-active {
    transition: all .3s ease;
  }

  &-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  &-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  &-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>