<template>
  <div class="header-ctn">
    <div class="header__left">
      <div class="btn-menu">
        <div class="btn-menu-icon"></div>
      </div>
      <div class="logo"></div>
    </div>
    <div class="header__right">
      <div class="heading">
        <span>Nhà hàng <span>biển đông</span></span>
        <font-awesome-icon class="angle-down-custom" icon="angle-down" />
      </div>

      <div class="user">
        <div class="user__avt">
          <div class="user__avt-img"></div>
        </div>
        <div class="user__name">
          <div class="user__name-detail">Nguyễn Văn Mạnh</div>
        </div>
        <div class="user__icon">
          <div class="user__icon-img"></div>
        </div>
      </div>
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
@import '../../scss/_variables.scss';
.header {
  &-ctn {
    display: flex;
  }

  &__left {
    display: flex;
    align-items: center;
    width: 226px;
    border-right: 1px solid $color-extra-light-gray;
    .btn-menu {
      padding: 12px 10px 12px 16px;
      &-icon {
        background-image: url('../../assets/img/toggle.png');
        background-size: cover;
        background-position: left;
        background-repeat: no-repeat;
        width: 24px;
        height: 24px;
      }
    }

    .logo {
      background-image: url('../../assets/cukcuk-logo.png');
      background-size: contain;
      background-position: left;
      background-repeat: no-repeat;
      width: calc(70% - 16px);
      height: 24px;
    }
  }

  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 226px);
    border-bottom: 1px solid $color-extra-light-gray;

    .heading {
      font-family: "Google Sans Bold", sans-serif;
      font-size: $font-size-title2;
      display: flex;
      align-items: center;
      & > span {
        padding: 0px 10px 0px 16px;
        span {
          text-transform: capitalize;
        }
      }

      .angle-down-custom {
        width: 16px;
        height: 16px;
      }
    }

    .user {
      display: flex;
      align-items: center;

      &__avt {
        padding: 0 16px;
        &-img {
          background-image: url('../../assets/icon/avatar-default.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 30px;
          height: 30px;
        }
      }

      &__name {
        padding-right: 16px;
      }

      &__icon {
        padding-right: 16px;
        &-img {
          background-image: url('../../assets/icon/option.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
