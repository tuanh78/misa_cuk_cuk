<template>
  <div class="header-ctn">
    <div class="header__left">
      <div class="btn-menu"></div>
      <div class="logo"></div>
    </div>
    <div class="header__right">
      <div class="heading">
        <span>Nhà hàng <span>biển đông</span></span>
        <font-awesome-icon icon="angle-down" />
      </div>

      <div class="user">
        <div class="user__avt"></div>
        <div class="user__name">Nguyễn Văn Mạnh</div>
        <div class="user__icon"></div>
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
.header {
  &-ctn {
    display: flex;
  }

  &__left {
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 16px;
    width: 12%;
    border-right: 2px solid rgb(187, 187, 187);
    .btn-menu {
      background-image: url('../../assets/img/toggle.png');
      background-size: contain;
      background-position: center;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    .logo {
      background-image: url('../../assets/cukcuk-logo.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 100px;
      height: 30px;
    }
  }

  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 16px;
    flex-grow: 1;
    border-bottom: 2px solid rgb(202, 202, 202);

    .heading {
      span {
        margin-right: 10px;
        span {
          text-transform: capitalize;
        }
      }
    }

    .user {
      display: flex;
      align-items: center;

      &__avt {
        background-image: url('../../assets/icon/avatar-default.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 40px;
        height: 40px;
        margin-right: 16px;
      }

      &__name {
        margin-right: 16px;
      }

      &__icon {
        background-image: url('../../assets/icon/option.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
