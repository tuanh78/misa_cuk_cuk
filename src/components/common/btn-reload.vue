<template>
  <div class="btn-reload">
    <div class="icon-reload"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.btn-reload {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  border: 1px solid #cacaca;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
  .icon-reload {
      background-image: url('../../assets/icon/refresh.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 20px;
      height: 20px;
  }
  &:hover {
    background-color: $color-blue;
    border-color: $color-blue;
  }

  &:active {
    background-color: $color-light-blue;
    border-color: $color-light-blue;
  }
}

</style>
