<template>
  <div class="warning" v-if="isShow">
    <div class="warning-content">
      <div class="warning-detail">
        <h3>Xóa khách hàng</h3>
        <div class="warning-info">
          <div class="warning-icon">
            <font-awesome-icon icon="exclamation-triangle" />
          </div>
          <p>Bạn có chắc muốn xóa <span>"<span>Khách</span> hàng"</span> hay không?</p>
        </div>
        <div class="btn-exit" @click="HiddenPopup"></div>
      </div>
      <div class="warning-btn">
        <div class="btn btn-delete" @click="HiddenPopupAndForm">Xóa</div>
        <div class="btn btn-continue" @click="HiddenPopup">Hủy</div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    HiddenPopup: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
.warning {
  position: relative;
  z-index: 7;

  &-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  z-index: 8;
  overflow: hidden;
  }

  &-detail {
    padding: 24px;

    h3 {
      font-size: 15px;
      font-family: 'Google Sans Bold';
      margin-bottom: 24px;
      span {
        text-transform: capitalize;
      }
    }

    .btn-exit {
      background-image: url('../../assets/icon/x.svg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 15px;
      right: 15px;
      transition: all 0.5s;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #cacaca;
      }
    }
  }

  &-icon {
    background-color: #E9EBEE;
    padding: 10px;
    border-radius: 50%;
    color: #f39c12;
    margin-right: 10px;
  }

  &-info {
    display: flex;
    align-items: center;

    p {
      font-size: 13px;

      span {
        font-family: "Google Sans Bold", sans-serif;

        span {
          text-transform: capitalize;
        }
      }
    }
  }

  &-btn {
    background-color: #E9EBEE;
    padding: 10px 24px;
    display: flex;
    flex-direction: row-reverse;

    .btn {
      font-size: 13px;
      padding: 11px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.5s;
    }

    .btn-continue {
      margin-right: 16px;

      &:hover {
        background-color: #BBBBBB;
      }
    }

    .btn-delete {
      background-color: #F65454;
      color: white;

      &:hover {
        background-color: #ec0d0d;
      }
    }
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(127, 140, 141, 0.5);
  z-index: 7;
}
</style>
