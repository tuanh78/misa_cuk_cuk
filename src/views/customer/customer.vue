<template>
  <div class="customer">
    <div class="heading">
      <h2 class="heading-detail">Danh sách khách hàng</h2>
      <btn-add @click.native="isShowAddCustomer = true">
        <div class="icon-add"></div>
        <div class="icon-detail">Thêm khách hàng</div>
      </btn-add>
    </div>
    <div class="tools">
      <input-search searchPlaceHolder="Tìm kiếm theo mã, tên KH"></input-search>
      <btn-reload @click.native="ShowReloadPage"></btn-reload>
    </div>
    <div class="main-content-ctn">
      <div v-if="isShowReload" class="reload-ctn"></div>
      <div class="main-content">
        <table class="table-customer">
          <thead>
            <tr class="border-bottom">
              <th class="input-icon-ctn input-ctn">
                <div class="cntr">
                  <label for="input-heading" class="label-cbx">
                    <input id="input-heading" type="checkbox" class="invisible" />
                    <div class="checkbox">
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <path
                          d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"
                        ></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                      </svg>
                    </div>
                  </label>
                </div>
              </th>
              <th class="number">#</th>
              <th class="customer-code">Mã khách hàng</th>
              <th class="fullname">Họ và tên</th>
              <th class="gender">Giới tính</th>
              <th class="date-of-birth">Ngày sinh</th>
              <th class="customer-group">Nhóm khách hàng</th>
              <th class="phone-number">Điện thoại</th>
              <th class="email">Email</th>
              <th class="address">Địa chỉ</th>
              <th class="money-debt">Số tiền nợ</th>
              <th class="customer-card-code">Mã thẻ thành viên</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-bottom" v-for="(customer, index) in customers" :key="index">
              <th class="input-icon-ctn input-ctn">
                <div class="cntr title-border-bottom">
                  <label :for="customer.CustomerId" class="label-cbx">
                    <input :id="customer.CustomerId" type="checkbox" class="invisible" />
                    <div class="checkbox">
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <path
                          d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"
                        ></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                      </svg>
                    </div>
                  </label>
                </div>
              </th>
              <td class="number">{{ index }}</td>
              <td class="customer-code">{{ customer.customerCode }}</td>
              <td class="fullname">{{ customer.fullName}}</td>
              <td class="gender">
                <span v-if="customer.gender == 0">Nam</span>
                <span v-else-if="customer.gender == 1">Nữ</span>
                <span v-else>Khác</span>
              </td>
              <td class="date-of-birtd">{{ customer.dateOfBirth }}</td>
              <td class="customer-group">{{ customer.dateOfBirth }}</td>
              <td class="phone-number">{{ customer.phoneNumber }}</td>
              <td class="email">{{ customer.email }}</td>
              <td class="address">{{customer.address}}</td>
              <td class="money-debt">Số tiền nợ</td>
              <td class="customer-card-code">{{ customer.memberCardCode}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <add-customer
      key="add"
      :isShow="isShowAddCustomer"
      :HiddenForm="HiddenFormAddCustomer"
    ></add-customer>
    <edit-customer
      :isShow="isShowEditCustomer"
      :HiddenForm="HiddenFormEditCustomer"
    ></edit-customer>
    <popup-delete-customer
      :isShow="isShowPopupDeleteCustomer"
      :HiddenPopup="HiddenPopupDeleteCustomer"
    ></popup-delete-customer>
  </div>
</template>

<script>
import BtnAdd from '../../components/common/btn-add.vue'
import BtnReload from '../../components/common/btn-reload.vue'
import InputSearch from '../../components/common/input-search/input-search.vue'
import AddCustomer from '../../pages/customer/add-customer/add-customer.vue'
import EditCustomer from '../../pages/customer/edit-customer.vue'
import PopupDeleteCustomer from '../../pages/customer/warning-popup-delete-customer'
import axios from 'axios'
export default {
  data () {
    return {
      customers: null,
      isShowAddCustomer: false,
      isShowEditCustomer: false,
      isShowPopupDeleteCustomer: false,
      isShowReload: true
    }
  },
  created: async function () {
    const res = await axios.get('https://localhost:44389/api/v1/Customers')
    this.customers = res.data
    this.isShowReload = false
  },
  components: {
    BtnAdd,
    BtnReload,
    InputSearch,
    AddCustomer,
    EditCustomer,
    PopupDeleteCustomer
  },
  methods: {
    HiddenFormAddCustomer () {
      this.isShowAddCustomer = false
    },
    HiddenFormEditCustomer () {
      this.isShowEditCustomer = false
    },
    HiddenPopupDeleteCustomer () {
      this.isShowPopupDeleteCustomer = false
    },
    LoadData () {
      axios.get('https://localhost:44389/api/v1/Customers')
        .then((res) => {
          this.customers = res.data
          this.isShowReload = false
        }).catch((err) => {
          console.log(err)
        })
    },
    ShowReloadPage () {
      this.isShowReload = true
      this.LoadData()
    }
  }
}
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
