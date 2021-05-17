<template>
  <div class="customer-ctn">
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <div v-if="isShow">
        <div id="draggable-container" class="add-customer" @keydown.27="isShowPopup = true" ref="draggableContainer" @mousedown="dragMouseDown">
          <h3 class="add-title">Thông tin khách hàng</h3>

          <div class="input-group">
            <div class="input-group-common">
              <div class="avatar">
                <div class="avatar-img">
                  <input type="file" id="avatar" hidden />
                  <label class="img-avt"></label>
                </div>
                <p class="avatar-detail">
                  Vui lòng chọn ảnh có định dạng
                  <span>.jpg, .jpeg, .png, .gif.</span>
                </p>
              </div>
              <div class="user-info-comon">
                <div class="input-item input-style-common">
                  <label>Mã khách hàng (<span>*</span>)</label>
                  <input ref="code" type="text" class="invalid-value"/>
                </div>
                <div class="input-item input-style-common">
                  <label>Họ và tên (<span>*</span>)</label>
                  <input type="text" />
                </div>
                <div class="input-item input-style-common">
                  <label>Mã thẻ thành viên</label>
                  <input type="text" />
                </div>
                <div class="input-item input-style-common">
                  <label>Nhóm khách hàng</label>
                  <input type="text" />
                </div>
                <div class="input-item input-style-common">
                  <label>Ngày sinh</label>
                  <input type="text" />
                </div>
                <div class="input-item input-style-common input-gender">
                  <label class="gender-title">Giới tính</label>
                  <div class="gender-item">
                    <input type="radio" name="size" id="nam" class="form__radio-input">
                    <label class="form__label-radio form__radio-label" for="nam">
                      <span class="form__radio-button"></span> Nam
                    </label>
                  </div>
                  <div class="gender-item">
                    <input type="radio" name="size" id="nu" class="form__radio-input">
                    <label class="form__label-radio form__radio-label" for="nu">
                      <span class="form__radio-button"></span> Nữ
                    </label>
                  </div>
                  <div class="gender-item">
                    <input type="radio" name="size" id="khac" class="form__radio-input">
                    <label class="form__label-radio form__radio-label" for="khac">
                      <span class="form__radio-button"></span> Khác
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-group-detail">
              <div class="input-info-item">
                <div class="input-style-common input-style-info">
                  <label>Email</label>
                  <input type="text" />
                </div>
                <div class="input-style-common input-style-info">
                  <label>Số điện thoại (<span>*</span>)</label>
                  <input type="text" />
                </div>
              </div>

              <div class="input-info-item">
                <div class="input-style-common input-style-info">
                  <label>Tên công ty</label>
                  <input type="text" />
                </div>
                <div class="input-style-common input-style-info">
                  <label>Mã số thuế</label>
                  <input type="text" />
                </div>
              </div>
              <div class="input-style-common input-style-info">
                <label>Địa chỉ</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div class="btn">
            <div class="btn-delete" @click="isShowPopup = true">
              Hủy
            </div>

            <div class="btn-save">
              <div class="icon-save"></div>
              Lưu
            </div>
          </div>
          <div class="btn-close" @click="isShowPopup = true"></div>
        </div>
        <warning-add-customer :isShow="isShowPopup" :HiddenPopup="HiddenPopup" :HiddenPopupAndForm="HiddenPopupAndForm"></warning-add-customer>
        <div class="mask"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import WarningAddCustomer from './warning-popup-customer.vue'

export default {
  data () {
    return {
      isShowPopup: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      }
    }
  },
  components: {
    WarningAddCustomer
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    HiddenForm: {
      type: Function
    }
  },
  methods: {
    HiddenPopup () {
      this.isShowPopup = false
    },
    HiddenPopupAndForm () {
      this.HiddenForm()
      this.isShowPopup = false
    },
    dragMouseDown: function (event) {
      // event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    }
  },
  watch: {
    isShow () {
      this.$nextTick(() => {
        if (this.$refs.code) {
          this.$refs.code.focus()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.customer-ctn {
  position: relative;
  z-index: 6;
}
.add-customer {
  position: fixed;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  z-index: 6;

  .add-title {
    text-transform: uppercase;
    font-family: "Google Sans Bold";
    padding: 20px 20px 15px 20px;
  }
}

.input-group {
  padding: 0 20px;
  &-common {
    display: flex;
    margin-bottom: 20px;
  }
  .avatar {
     width: 200px;
     margin-right: 30px;
    .img-avt {
      background-image: url(/img/default-avatar.d40830f2.jpg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      display: block;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 1px solid #bbbbbb;
      margin-right: 20px;
    }

    &-detail {
      font-size: 13px;
      text-align: center;
      span {
        font-family: 'Google Sans Bold';
      }
    }
  }

  .user-info-comon {
    display: flex;
    flex-wrap: wrap;

    .input-item {
      width: 50%;
      display: flex;
      flex-direction: column;

      input {
        width: 90%;
      }
    }

    .input-gender {
      flex-direction: row;
      flex-wrap: wrap;

      .gender-item {
        display: flex;
        width: 33%;
        padding-bottom: 0px;
      }

      .gender-title {
        width: 100%;
        margin-bottom: 0;
      }
    }
  }
}

.input-style-common {
  label {
    font-size: 13px;
    margin-bottom: 5px;
    span {
      color: red;
    }
  }
  input {
    border: 1px solid #cacaca;
    padding: 10px;
    outline: none;
    border-radius: 4px
  }

  input:focus {
    border: 1px solid #01b075;
  }
  input.invalid-value {
  border: 1px solid #F65454;
}
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(127, 140, 141, 0.5);
  z-index: 5;
}

.form__radio-input {
  display: none;
}

.form__label-radio {
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  padding-left: 1.5rem;
  line-height: 100%;
}

.form__radio-button {
  height: 20px;
  width: 20px;
  border: 2px solid #55c57a;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -0.2rem;
}
.form__radio-button::after {
  content: "";
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #55c57a;
  opacity: 0;
  transition: opacity 0.2s;
}

.input-style-info {
  display: flex;
  flex-direction: column;
}

.input-info-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div.input-style-info:first-child {
    width: 70%;
  }

  div.input-style-info:nth-child(2) {
    width: 29%;
  }
}
.form__radio-input:checked ~ .form__label-radio .form__radio-button::after {
  opacity: 1;
}

.btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;

  &-delete {
    padding: 10px;
    border-radius: 4px;
    margin-right: 20px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: #cacaca;
    }
  }

  &-save {
    padding: 10px 16px;
    background-color: #01B075;
    border-radius: 4px;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    transition: all 0.5s;

    &:hover {
      background-color: #2FBE8E;
    }

    .icon-save {
      background-image: url('../../assets/icon/add.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
}

.btn-close {
  background-image: url('../../assets/icon/x.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.5s;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cacaca;
  }
}

// #draggable-container {
//   position: absolute;
//   z-index: 9;
// }
// #draggable-header {
//   z-index: 10;
// }

</style>
