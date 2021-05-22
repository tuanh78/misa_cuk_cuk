<template>
  <div class="navi">
    <div class="total-item">
      <p>Hiển thị <span class="number-item">1-10/1000</span> <span>Khách</span> hàng</p>
    </div>
    <div class="navi-list">
      <div class="navi-left">
        <div class="btn btn-first-page"></div>
        <div class="btn btn-prev-page"></div>
      </div>
      <div class="navi-list-page">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div class=navi-right>
        <div class="btn btn-next-page"></div>
        <div class="btn btn-last-page"></div>
      </div>
    </div>
    <div class="total-item">
      <p><span class="number-item">10</span> <span>Khách</span> hàng/trang</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables.scss';
@import './style'
</style>
