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
  padding: 10px;
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
    background-color: #1abc9c;
    border-color: #1abc9c;
  }
}

</style>
