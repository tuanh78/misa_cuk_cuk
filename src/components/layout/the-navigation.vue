<template>
  <div class="navi">
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navi {
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #E9EBEE;

  .btn {
    border-radius: 5px;
    transition: all 0.5s;
  }

  .btn:hover {
    background-color: #019160;
  }

  &-left {
    display: flex;
    margin-right: 20px;
    .btn-first-page {
      background-image: url('../../assets/icon/btn-firstpage.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 20px;
      height: 20px;
      margin-right: 25px;
      cursor: pointer;
    }

    .btn-prev-page {
      background-image: url('../../assets/icon/btn-prev-page.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  &-list-page {
    ul {
      display: flex;

      li {
        width: 25px;
        height: 25px;
        line-height: 25px;
        font-size: 13px;
        border-radius: 50%;
        background-color: #E9EBEE;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;
      }

      li:hover {
        background-color: #019160;
        color: #fff;
      }

      li:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  &-right {
    display: flex;
      margin-left: 20px;
    .btn-last-page {
      background-image: url('../../assets/icon/btn-lastpage.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 20px;
      height: 20px;
      margin-left: 25px;
      cursor: pointer;
    }

    .btn-next-page {
      background-image: url('../../assets/icon/btn-next-page.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
