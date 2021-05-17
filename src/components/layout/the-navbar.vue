<template>
  <div class="nav">
    <div class="nav__list">
      <ul>
        <li class="nav__item">
          <router-link to="/">
            <div class="icon icon__overview"></div>
            Tổng quan
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/report">
            <div class="icon icon__report"></div>
            Báo cáo
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/by">
            <div class="icon icon__by"></div>
            Mua hàng
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/customers">
            <div class="icon icon__list-customer"></div>
            Danh mục khách hàng
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/setting">
            <div class="icon icon__setting"></div>
            Thiết lập hệ thống
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 16%;
  height: calc(100vh - 52px);
  border-right: 2px solid #E9EBEE;
  border-bottom: 2px solid #E9EBEE;

  &__list {
    .icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;

      &__overview {
        background-image: url('../../assets/icon/dashboard.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
      }

      &__report {
        background-image: url('../../assets/icon/report.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
      }

      &__by {
        background-image: url('../../assets/icon/dashboard.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
      }

      &__list-customer {
        background-image: url('../../assets/icon/dic-employee.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
      }

      &__setting {
        background-image: url('../../assets/icon/setting.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
      }
    }
  }

  &__item {
    cursor: pointer;

    &:hover {
      background-color: #e5e5e5;
      a {
        color: #000;
      }
    }

    a {
      display: flex;
      color: #515252;
      padding: 12px 15px;
      font-weight: normal;
      font-size: 13px;
    }
  }
}

.router-link-exact-active {
  background-color: #019160;
  color: #fff !important;
}
</style>
