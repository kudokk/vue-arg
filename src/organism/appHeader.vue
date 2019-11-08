<template>
  <div class="appHeader">
    <div class="appHeader__left">
      <div class="logo">
        <img class="logo__img" src="img/logo.png" height="30px" width="30px">
      </div>
      <span class="appHeader__title">kk</span>
    </div>
    <div class="link">
      <ul class="link__list">
        <li v-for="link in links" class="link__item">
          <a href="#" class="link__text">{{ link }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        'profile',
        'learn'
      ]
    }
  }
}
</script>

<style lang="scss">
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
    &__list {
      display: flex;
      margin-right: 100px;
    }

    &__item {
      margin-right: 80px;
    }

    &__text {
      cursor: pointer;
      color: #000;
      font-size: 18px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>