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
@import '../../scss/_variables.scss';
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
    background-color: #e84393;
    border-color: #e84393;
  }

  &:active {
    background-color: #fd79a8;
    border-color: #fd79a8;
  }
}

</style>
