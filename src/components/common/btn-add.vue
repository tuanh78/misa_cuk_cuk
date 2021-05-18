<template>
  <div class="btn-add">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn-add {
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  color: $color-white;
  background-color: $color-green-default;
  cursor: pointer;
  transition: all 0.5s;
  height: 40px;

  &:hover {
    background-color: $color-green-hover;
  }

  &:active {
    background-color: $color-green-primary;
  }
}
</style>
