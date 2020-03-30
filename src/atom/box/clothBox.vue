<template>
  <div class="clothBox">
    <div class="clothBox__inner">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.clothBox {
  background-color: #c6e9d9;
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: dashed white;
    padding: 10px 10px 20px;
    margin: 20px;
  }
}
</style>
