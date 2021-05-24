<template>
  <div class="customer-ctn">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-if="isShow">
        <div
          id="draggable-container"
          class="add-customer"
          @keydown.27="isShowPopup = true"
          ref="draggableContainer"
          @mousedown="dragMouseDown"
        >
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
                  <input
                    v-model="customer.customerCode"
                    ref="code"
                    type="text"
                    class="customer-code"
                    @keypress="[RemoveInvalid('customer-code'), errors.customerCode = false]"
                  />
                  <transition
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                  >
                    <div
                      v-if="customer.customerCode !== ''"
                      class="icon-remove-text"
                      @click="customer.customerCode = ''"
                    ></div>
                  </transition>
                  <tooltip :isShow="errors.customerCode" title="Mã khách hàng" description="Không được để trống"></tooltip>
                </div>
                <div class="input-item input-style-common">
                  <label>Họ và tên (<span>*</span>)</label>
                  <input v-model="customer.fullName" type="text" class="fullname" @keypress="[RemoveInvalid('fullname'), errors.fullName = false]"/>
                  <transition
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                  >
                    <div
                      v-if="customer.fullName !== ''"
                      class="icon-remove-text"
                      @click="customer.fullName = ''"
                    ></div>
                  </transition>
                  <tooltip :isShow="errors.fullName" title="Tên khách hàng" description="Không được để trống"></tooltip>
                </div>
                <div class="input-item input-style-common">
                  <label>Mã thẻ thành viên</label>
                  <input v-model="customer.memberCardCode" type="text" />
                  <transition
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                  >
                    <div
                      v-if="customer.memberCardCode !== ''"
                      class="icon-remove-text"
                      @click="customer.memberCardCode = ''"
                    ></div>
                  </transition>
                </div>
                <div class="input-item input-style-common">
                  <label>Nhóm khách hàng</label>
                  <filter-option @updateValue="UpdateCustomerGroup" :optionValues="customerGroups"></filter-option>
                </div>
                <div class="input-item input-style-common">
                  <label>Ngày sinh</label>
                  <v-datepicker @updateDate="UpdateDateOfBirth"></v-datepicker>
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
                    <label
                      class="form__label-radio form__radio-label"
                      for="nam"
                    >
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
                    <label
                      class="form__label-radio form__radio-label"
                      for="khac"
                    >
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
                      v-if="customer.email !== ''"
                      class="icon-remove-text icon-remove-custom"
                      @click="customer.email = ''"
                    ></div>
                  </transition>
                </div>
                <div class="input-style-common input-style-info">
                  <label>Số điện thoại (<span>*</span>)</label>
                  <input v-model="customer.phoneNumber" type="text" @keypress="[RemoveInvalid('phone-number'), errors.phoneNumber = false]" class="phone-number" />
                  <transition
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                  >
                    <div
                      v-if="customer.phoneNumber !== ''"
                      class="icon-remove-text icon-remove-custom"
                      @click="customer.phoneNumber = ''"
                    ></div>
                  </transition>
                  <tooltip :isShow="errors.phoneNumber" title="Số điện thoại" description="Không được để trống"></tooltip>
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
                      v-if="customer.companyName !== ''"
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
                      v-if="customer.companyTaxCode !== ''"
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
                    v-if="customer.address !== ''"
                    class="icon-remove-text icon-remove-custom"
                    @click="customer.address = ''"
                  ></div>
                </transition>
              </div>
            </div>
          </div>

          <div class="btn">
            <div class="btn-delete" @click="HiddenPopupAndForm">Hủy</div>

            <div class="btn-save" @click="AddCustomer">
              <div class="icon-save"></div>
              Lưu
            </div>
          </div>
          <div class="btn-close" @click="CloseFormAdd"></div>
        </div>
        <warning-add-customer
          :isShow="isShowPopup"
          :HiddenPopup="HiddenPopup"
          :HiddenPopupAndForm="HiddenPopupAndForm"
        ></warning-add-customer>
        <div class="mask" @click="CloseFormAdd"></div>
      </div>
    </transition>
    <success-notification></success-notification>
  </div>
</template>

<script>
import axios from 'axios'
import WarningAddCustomer from '../warning-popup-add-customer.vue'
import VDatepicker from '../../../components/common/datepicker/v-datepicker'
import FilterOption from '../../../components/common/filter-option/filter-option.vue'
import SuccessNotification from '../../../components/common/success-notification/success-notification'
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
      customer: {
        customerCode: '',
        fullName: '',
        memberCardCode: '',
        customerGroupId: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companyTaxCode: '',
        address: ''
      },
      customerGroups: [],
      errors: {
        customerCode: false,
        phoneNumber: false,
        fullName: false
      }
    }
  },
  components: {
    WarningAddCustomer,
    VDatepicker,
    FilterOption,
    SuccessNotification,
    Tooltip
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
  created () {
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
      this.customer = {
        customerCode: '',
        fullName: '',
        memberCardCode: '',
        customerGroupId: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companyTaxCode: '',
        address: ''
      }
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
    AddCustomer () {
      for (const key in this.customer) {
        if (key === 'customerCode' && this.customer[key] === '') {
          this.$el.querySelector('.customer-code').classList.add('invalid-value')
          this.errors.customerCode = true
          return
        }
        if (key === 'fullName' && this.customer[key] === '') {
          this.$el.querySelector('.fullname').classList.add('invalid-value')
          this.errors.fullName = true
          return
        }
        if (key === 'phoneNumber' && this.customer[key] === '') {
          this.$el.querySelector('.phone-number').classList.add('invalid-value')
          this.errors.phoneNumber = true
          return
        }
      }
      axios.post('https://localhost:44389/api/v1/Customers', this.customer)
        .then((result) => {
          if (result.status === 201) {
            this.$notify({ group: 'success', text: 'Thêm khách hàng thành công !' })
            this.customer = {
              customerCode: '',
              fullName: '',
              memberCardCode: '',
              customerGroupId: '',
              dateOfBirth: '',
              gender: '',
              email: '',
              phoneNumber: '',
              companyName: '',
              companyTaxCode: '',
              address: ''
            }
            this.HiddenForm()
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    UpdateCustomerGroup (value) {
      this.customer.customerGroupId = value
    },
    CloseFormAdd () {
      for (const key in this.customer) {
        if (this.customer[key]) {
          this.isShowPopup = true
          return
        }
      }
      this.HiddenForm()
      this.customer = {
        customerCode: '',
        fullName: '',
        memberCardCode: '',
        customerGroupId: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        companyTaxCode: '',
        address: ''
      }
    },
    RemoveInvalid (className) {
      this.$el.querySelector(`.${className}`).classList.remove('invalid-value')
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
