<template>
  <div class="stickyLabel">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.stickyLabel {
  background-color: #c6e9d9;
  display: flex;
  align-items: center;
  height: 60px;
  width: 400px;
  &::before {
    background-color: #41B883;
    content: '';
    display: block;
    margin-right: 10px;
    height: 100%;
    width: 10px;
  }
}
</style>
