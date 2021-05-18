<template>
  <div class="nav">
    <div class="nav__list">
      <ul>
        <li class="nav__item">
          <router-link to="/">
            <div class="icon__overview">
              <div class="icon icon__overview-img"></div>
            </div>
            <div class="nav__item-detail">Tổng quan</div>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/report">
            <div class="icon__report">
              <div class="icon icon__report-img"></div>
            </div>
            <div class="nav__item-detail">Báo cáo</div>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/by">
            <div class="icon__by">
              <div class="icon icon__by-img"></div>
            </div>
            <div class="nav__item-detail">Mua hàng</div>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/customers">
            <div class="icon__list-customer">
              <div class="icon icon__list-customer-img"></div>
            </div>
            <div class="nav__item-detail">Danh mục khách hàng</div>
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/setting">
            <div class="icon__setting">
              <div class="icon icon__setting-img"></div>
            </div>
            <div class="nav__item-detail">Thiết lập hệ thống</div>
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
  width: 226px;
  height: calc(100vh - 48px);
  border-right: 1px solid #E9EBEE;

  &__list {
    .icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;

      &__overview {
        padding: 12px 10px 12px 16px;
        &-img {
          background-image: url('../../assets/icon/dashboard.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 20px;
          height: 20px;
        }
      }

      &__report {
        padding: 12px 10px 12px 16px;
        &-img {
          background-image: url('../../assets/icon/report.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 20px;
          height: 20px;
        }
      }

      &__by {
        padding: 12px 10px 12px 16px;
        &-img {
          background-image: url('../../assets/icon/dashboard.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 20px;
          height: 20px;
        }
      }

      &__list-customer {
        padding: 12px 10px 12px 16px;
        &-img {
          background-image: url('../../assets/icon/dic-employee.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 20px;
          height: 20px;
        }
      }

      &__setting {
        padding: 12px 10px 12px 16px;
        &-img {
          background-image: url('../../assets/icon/setting.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  &__item {
    cursor: pointer;
    height: 44px;

    &-detail {
      font-family: $font-family-label;
      color: $color-label;
    }

    &:hover {
      background-color: $color-light-gray;
      .nav__item-detail {
        color: $color-black;
      }
    }

    a {
      display: flex;
      align-items: center;
    }
  }
}

.router-link-exact-active {
  background-color: $color-green-default;
  .nav__item-detail {
    color: #fff !important;
  }
}
</style>
