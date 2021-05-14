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
  padding: 12px 16px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  font-weight: normal;
  background-color: #019160;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #2FBE8E;
  }
}
</style>
