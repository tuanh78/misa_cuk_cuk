<template>
  <div class="customer-ctn">
    <div>
      <div
        id="draggable-container"
        class="add-customer"
        @keydown.27="isShowPopup = true"
        ref="draggableContainer"
        @mousedown="dragMouseDown"
      >
        <h3 class="add-title">Sửa thông tin khách hàng</h3>

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
            <div class="user-info-common">
              <div class="input-item input-style-common">
                <label>Mã khách hàng (<span>*</span>)</label>
                <input
                  v-model="customer.customerCode"
                  ref="customerCode"
                  type="text"
                  @keypress="
                    [
                      RemoveInvalid('customerCode'),
                      (errors.customerCode = false),
                    ]
                  "
                />
                <transition-group
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div key="remove"
                    v-if="customer.customerCode"
                    class="icon-remove-text"
                    @click="customer.customerCode = ''"
                  ></div>
                  <tooltip key="empty"
                    v-if="errors.customerCode"
                    title="Mã khách hàng"
                    description="Không được để trống"
                  ></tooltip>
                </transition-group>
              </div>
              <div class="input-item input-style-common">
                <label>Họ và tên (<span>*</span>)</label>
                <input
                  v-model="customer.fullName"
                  type="text"
                  ref="fullName"
                  @keypress="
                    [RemoveInvalid('fullName'), (errors.fullName = false)]
                  "
                />
                <transition-group
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div key="remove"
                    v-if="customer.fullName"
                    class="icon-remove-text"
                    @click="customer.fullName = ''"
                  ></div>
                  <tooltip key="empty"
                    v-if="errors.fullName"
                    title="Tên khách hàng"
                    description="Không được để trống"
                  ></tooltip>
                </transition-group>
              </div>
              <div class="input-item input-style-common">
                <label>Mã thẻ thành viên</label>
                <input v-model="customer.memberCardCode" type="text" />
                <transition
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div
                    v-if="customer.memberCardCode"
                    class="icon-remove-text"
                    @click="customer.memberCardCode = ''"
                  ></div>
                </transition>
              </div>
              <div class="input-item input-style-common">
                <label>Nhóm khách hàng</label>
                <filter-option
                  @updateValue="UpdateCustomerGroup"
                  :optionValues="customerGroups"
                  :selectedOption="selectedCustomerGroup"
                ></filter-option>
              </div>
              <div class="input-item input-style-common">
                <label>Ngày sinh</label>
                <v-datepicker :originalDate="customer.dateOfBirth" @updateDate="UpdateDateOfBirth"></v-datepicker>
              </div>
              <div class="input-item input-style-common input-gender">
                <label class="gender-title">Giới tính</label>
                <div class="gender-item">
                  <input
                    v-model="customer.gender"
                    value="0"
                    type="radio"
                    name="gender"
                    id="nam"
                    class="form__radio-input"
                  />
                  <label class="form__label-radio form__radio-label" for="nam">
                    <span class="form__radio-button"></span> Nam
                  </label>
                </div>
                <div class="gender-item">
                  <input
                    v-model="customer.gender"
                    value="1"
                    type="radio"
                    name="gender"
                    id="nu"
                    class="form__radio-input"
                  />
                  <label class="form__label-radio form__radio-label" for="nu">
                    <span class="form__radio-button"></span> Nữ
                  </label>
                </div>
                <div class="gender-item">
                  <input
                    v-model="customer.gender"
                    value="2"
                    type="radio"
                    name="gender"
                    id="khac"
                    class="form__radio-input"
                  />
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
                <input v-model="customer.email" type="text" />
                <transition
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div
                    v-if="customer.email"
                    class="icon-remove-text icon-remove-custom"
                    @click="customer.email = ''"
                  ></div>
                </transition>
              </div>
              <div class="input-style-common input-style-info">
                <label>Số điện thoại (<span>*</span>)</label>
                <input
                  v-model="customer.phoneNumber"
                  type="text"
                  ref="phoneNumber"
                  @keypress="
                    [
                      RemoveInvalid('phoneNumber'),
                      (errors.phoneNumber = false),
                    ]
                  "
                />
                <transition-group
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div key="remove"
                    v-if="customer.phoneNumber"
                    class="icon-remove-text icon-remove-custom"
                    @click="customer.phoneNumber = ''"
                  ></div>
                  <tooltip key="empty"
                    v-if="errors.phoneNumber"
                    title="Số điện thoại"
                    description="Không được để trống"
                  ></tooltip>
                </transition-group>
              </div>
            </div>

            <div class="input-info-item">
              <div class="input-style-common input-style-info">
                <label>Tên công ty</label>
                <input v-model="customer.companyName" type="text" />
                <transition
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div
                    v-if="customer.companyName"
                    class="icon-remove-text icon-remove-custom"
                    @click="customer.companyName = ''"
                  ></div>
                </transition>
              </div>
              <div class="input-style-common input-style-info">
                <label>Mã số thuế</label>
                <input v-model="customer.companyTaxCode" type="text" />
                <transition
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
                >
                  <div
                    v-if="customer.companyTaxCode"
                    class="icon-remove-text icon-remove-custom"
                    @click="customer.companyTaxCode = ''"
                  ></div>
                </transition>
              </div>
            </div>
            <div class="input-style-common input-style-info">
              <label>Địa chỉ</label>
              <input v-model="customer.address" type="text" />
              <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  v-if="customer.address"
                  class="icon-remove-text icon-remove-custom"
                  @click="customer.address = ''"
                ></div>
              </transition>
            </div>
          </div>
        </div>

        <div class="btn">
          <div class="btn-delete" @click="HiddenPopupAndForm">Hủy</div>

          <div class="btn-save" @click="UpdateCustomer">
            <div class="icon-save"></div>
            Lưu
          </div>
        </div>
        <div class="btn-close" @click="CloseFormUpdate"></div>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <popup-warning-customer
          v-if="isShowPopup"
          :HiddenPopup="HiddenPopup"
          :HiddenPopupAndForm="HiddenPopupAndForm"
          icon="exclamation-triangle"
          colorIcon="color-icon-warning-add"
          title="Đóng Form thêm khách hàng"
          description='Bạn có chắc muốn đóng form sửa <span class="font-family-bold">"Khách hàng"</span> hay không?'
          textBtnLeft="Tiếp tục nhập"
          textBtnRight="Đóng"
          bgColorBtnRight="warning-btn-add-customer"
        ></popup-warning-customer>
      </transition>
      <div class="mask" @click="CloseFormUpdate"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PopupWarningCustomer from '../popup-warning-customer/popup-waring-customer'
import VDatepicker from '../../../components/common/datepicker/v-datepicker'
import FilterOption from '../../../components/common/filter-option/filter-option.vue'
import Tooltip from '../../../components/common/tooltip/tooltip.vue'

export default {
  data () {
    return {
      isShowPopup: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      },
      customer: null,
      customerGroups: [],
      errors: {
        customerCode: false,
        phoneNumber: false,
        fullName: false
      },
      selectedCustomerGroup: {
        label: this.originalCustomer.customerGroupName,
        value: this.originalCustomer.customerGroupId
      }
    }
  },
  components: {
    PopupWarningCustomer,
    VDatepicker,
    FilterOption,
    Tooltip
  },
  props: {
    HiddenForm: {
      type: Function
    },
    originalCustomer: {
      type: Object
    }
  },
  created () {
    this.customer = Object.assign({}, this.originalCustomer)
    axios
      .get('https://localhost:44389/api/v1/CustomerGroup')
      .then((res) => {
        this.customerGroups = res.data.map(function (value, index) {
          return {
            label: value.customerGroupName,
            value: value.customerGroupId
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    HiddenPopup () {
      this.isShowPopup = false
    },
    HiddenPopupAndForm () {
      this.HiddenForm()
      this.customer = Object.assign({}, this.originalCustomer)
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
      this.$refs.draggableContainer.style.top =
        this.$refs.draggableContainer.offsetTop -
        this.positions.movementY +
        'px'
      this.$refs.draggableContainer.style.left =
        this.$refs.draggableContainer.offsetLeft -
        this.positions.movementX +
        'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    },

    SelectOption (customerGroupId) {
      this.customer.customerGroupId = customerGroupId
    },
    UpdateDateOfBirth (date) {
      this.customer.dateOfBirth = date
    },
    UpdateCustomer () {
      for (const key in this.customer) {
        if (key === 'customerCode' || key === 'fullName' || key === 'phoneNumber') {
          if (this.customer[key] === '' || this.customer[key] === null) {
            this.$refs[key]
              .classList.add('invalid-value')
            this.errors[key] = true
            return
          }
        }
      }
      axios
        .put(`https://localhost:44389/api/v1/Customers/${this.customer.customerId}`, this.customer)
        .then((result) => {
          if (result.status === 200) {
            this.$notify({
              group: 'success',
              text: 'Sửa khách hàng thành công !'
            })
            this.HiddenForm()
            this.$emit('reloadData')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    UpdateCustomerGroup (value) {
      this.customer.customerGroupId = value
    },
    CloseFormUpdate () {
      for (const key in this.customer) {
        if (key === 'gender' && this.customer.gender !== null) {
          this.customer.gender = parseInt(this.customer.gender)
        }
        if (this.customer[key] !== this.originalCustomer[key]) {
          this.isShowPopup = true
          return
        }
      }
      this.HiddenForm()
    },
    RemoveInvalid (inputName) {
      this.$refs[inputName].classList.remove('invalid-value')
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
@import "../../../scss/_variables.scss";
@import "./style";
</style>
