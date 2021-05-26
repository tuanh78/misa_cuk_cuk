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
      <input-search
        @updateSearch="SearchCustomers"
        searchPlaceHolder="Tìm kiếm theo mã, tên KH"
      ></input-search>
      <div class="group-btn">
        <transition
          enter-active-class="animate__animated animate__zoomIn"
          leave-active-class="animate__animated animate__zoomOut"
        >
          <div
            v-if="customersDelete.length !== 0"
            @click="DeleteMutipleCustomer"
            class="btn-delete-multiple"
          >
            xóa
          </div>
        </transition>
        <btn-reload @click.native="ReloadPage"></btn-reload>
      </div>
    </div>
    <div class="main-content-ctn">
      <div v-if="isShowReload" class="reload-ctn"></div>
      <div class="main-content">
        <table class="table-customer">
          <thead>
            <tr class="border-bottom">
              <th class="input-icon-ctn input-ctn input-check input-check-top">
                <div class="cntr">
                  <label for="input-heading" class="label-cbx">
                    <input
                      @click="SelectAllCustomer"
                      id="input-heading"
                      type="checkbox"
                      class="invisible top-checkbox"
                    />
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
              <th class="tool-remove">Công cụ</th>
            </tr>
          </thead>
          <tbody>
            <tr
              @dblclick="(counter += 1), ShowFormEdit(customer)"
              class="border-bottom"
              v-for="(customer, index) in customers"
              :key="index"
            >
              <th class="input-icon-ctn input-ctn input-check">
                <div class="cntr title-border-bottom">
                  <label :for="customer.customerId" class="label-cbx">
                    <input
                      :id="customer.customerId"
                      v-model="customersDelete"
                      :value="customer.customerId"
                      type="checkbox"
                      class="invisible sub-check"
                    />
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
              <td class="fullname">{{ customer.fullName }}</td>
              <td class="gender">
                <span>{{ customer.genderName }}</span>
              </td>
              <td class="date-of-birtd">{{ customer.dateOfBirth }}</td>
              <td class="customer-group">{{ customer.customerGroupName }}</td>
              <td class="phone-number">{{ customer.phoneNumber }}</td>
              <td class="email">{{ customer.email }}</td>
              <td class="address">{{ customer.address }}</td>
              <td class="money-debt">Số tiền nợ</td>
              <td class="customer-card-code">{{ customer.memberCardCode }}</td>
              <td class="tool-remove">
                <div
                  class="btn-delete"
                  @click="DeleteCustomer(customer.customerId)"
                >
                  Xóa
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <the-navigation
      :pageSize="pageSize"
      :pageIndex="currentPageIndex"
      :recordStart="customerStart"
      :recordEnd="customerEnd"
      :totalRecord="totalCustomers"
      @loadPage="GetCustomersPageIndex"
      @loadFirstPage="GetCustomersFirstPage"
      @loadLastPage="GetCustomersLastPage"
      @loadPrevPage="GetCustomersPrevPage"
      @loadNextPage="GetCustomersNextPage"
    ></the-navigation>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <add-customer
        key="add"
        v-if="isShowAddCustomer"
        :HiddenForm="HiddenFormAddCustomer"
      ></add-customer>
      <edit-customer
        v-if="isShowEditCustomer"
        :originalCustomer="customerEdit"
        :HiddenForm="HiddenFormEditCustomer"
        @reloadData="ReloadPage"
      ></edit-customer>
    </transition>
  </div>
</template>

<script>
import BtnAdd from '../../components/common/btn-add.vue'
import BtnReload from '../../components/common/btn-reload.vue'
import InputSearch from '../../components/common/input-search/input-search.vue'
import AddCustomer from '../../pages/customer/add-customer/add-customer.vue'
import EditCustomer from '../../pages/customer/edit-customer/edit-customer.vue'
import TheNavigation from '../../components/layout/navigation/the-navigation'
import axios from 'axios'
import moment from 'moment'
import { ConstantValue } from '../../constant/common'
export default {
  data () {
    return {
      customers: null,
      isShowAddCustomer: false,
      isShowEditCustomer: false,
      isShowPopupDeleteCustomer: false,
      isShowReload: true,
      customerEdit: {},
      totalCustomers: 0,
      totalPage: 0,
      currentPageIndex: 1,
      pageSize: ConstantValue.Page_Size_Customer,
      customerStart: 1,
      customerEnd: 1,
      counter: 0,
      stringPass: '',
      customersDelete: []
    }
  },
  created: async function () {
    const res = await axios.get(
      `https://localhost:44389/api/v1/Customers/paging?pageIndex=1&pageSize=${this.pageSize}`
    )
    const resTotalCustomer = await axios.get(
      'https://localhost:44389/api/v1/Customers/total-record'
    )
    this.customers = await res.data.map((customer) => {
      customer.dateOfBirth = moment(customer.dateOfBirth).format('YYYY-MM-DD')
      return customer
    })
    this.totalCustomers = resTotalCustomer.data
    this.totalPage = Math.ceil((this.totalCustomers * 1.0) / this.pageSize)
    this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
    this.customerEnd = this.customerStart + this.pageSize - 1
    if (this.customerEnd > this.totalCustomers) {
      this.customerEnd = this.totalCustomers
    }
    this.isShowReload = false
  },
  updated () {
    const listDateOfBirth = this.$el.querySelectorAll('.date-of-birtd')
    Array.from(listDateOfBirth).forEach((item, index) => {
      if (this.customers[index].dateOfBirth !== null) {
        item.innerHTML = moment(this.customers[index].dateOfBirth).format(
          'DD-MM-YYYY'
        )
      }
    })
  },
  components: {
    BtnAdd,
    BtnReload,
    InputSearch,
    AddCustomer,
    EditCustomer,
    TheNavigation
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
      axios
        .get(
          `https://localhost:44389/api/v1/Customers/paging?pageIndex=${this.currentPageIndex}&pageSize=${this.pageSize}`
        )
        .then((res) => {
          this.customers = res.data
          this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
          this.customerEnd = this.customerStart + this.pageSize - 1
          if (this.customerEnd > this.totalCustomers) {
            this.customerEnd = this.totalCustomers
          }
          this.isShowReload = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ShowFormEdit (customer) {
      this.customerEdit = customer
      this.isShowEditCustomer = true
    },
    ReloadPage () {
      this.isShowReload = true
      this.LoadData()
    },
    SearchCustomers (value) {
      this.isShowReload = true
      axios
        .get(
          `https://localhost:44389/api/v1/Customers/paging?pageIndex=1&pageSize=${this.pageSize}&filter=${value}`
        )
        .then((result) => {
          this.customers = result.data
          this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
          this.customerEnd = this.customerStart + this.pageSize - 1
          if (this.customerEnd > this.totalCustomers) {
            this.customerEnd = this.totalCustomers
          }
          this.isShowReload = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GetCustomersPageIndex (pageIndex) {
      this.isShowReload = true
      this.currentPageIndex = pageIndex
      axios
        .get(
          `https://localhost:44389/api/v1/Customers/paging?pageIndex=${pageIndex}&pageSize=${this.pageSize}`
        )
        .then((result) => {
          this.customers = result.data
          this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
          this.customerEnd = this.customerStart + this.pageSize - 1
          if (this.customerEnd > this.totalCustomers) {
            this.customerEnd = this.totalCustomers
          }
          this.isShowReload = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GetCustomersFirstPage () {
      this.isShowReload = true
      this.currentPageIndex = 1
      axios
        .get(
          `https://localhost:44389/api/v1/Customers/paging?pageIndex=1&pageSize=${this.pageSize}`
        )
        .then((result) => {
          this.customers = result.data
          this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
          this.customerEnd = this.customerStart + this.pageSize - 1
          if (this.customerEnd > this.totalCustomers) {
            this.customerEnd = this.totalCustomers
          }
          this.isShowReload = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GetCustomersLastPage () {
      this.isShowReload = true
      this.currentPageIndex = this.totalPage
      axios
        .get(
          `https://localhost:44389/api/v1/Customers/paging?pageIndex=${this.totalPage}&pageSize=${this.pageSize}`
        )
        .then((result) => {
          this.customers = result.data
          this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
          this.customerEnd = this.customerStart + this.pageSize - 1
          if (this.customerEnd > this.totalCustomers) {
            this.customerEnd = this.totalCustomers
          }
          this.isShowReload = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GetCustomersPrevPage () {
      this.isShowReload = true
      if (this.currentPageIndex > 1) {
        --this.currentPageIndex
      }
      axios
        .get(
          `https://localhost:44389/api/v1/Customers/paging?pageIndex=${this.currentPageIndex}&pageSize=${this.pageSize}`
        )
        .then((result) => {
          this.customers = result.data
          this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
          this.customerEnd = this.customerStart + this.pageSize - 1
          if (this.customerEnd > this.totalCustomers) {
            this.customerEnd = this.totalCustomers
          }
          this.isShowReload = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GetCustomersNextPage () {
      this.isShowReload = true
      if (this.currentPageIndex < this.totalPage) {
        ++this.currentPageIndex
      }
      axios
        .get(
          `https://localhost:44389/api/v1/Customers/paging?pageIndex=${this.currentPageIndex}&pageSize=${this.pageSize}`
        )
        .then((result) => {
          this.customers = result.data
          this.customerStart = (this.currentPageIndex - 1) * this.pageSize + 1
          this.customerEnd = this.customerStart + this.pageSize - 1
          if (this.customerEnd > this.totalCustomers) {
            this.customerEnd = this.totalCustomers
          }
          this.isShowReload = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    DeleteCustomer (customerId) {
      axios
        .delete(`https://localhost:44389/api/v1/Customers/${customerId}`)
        .then((result) => {
          if (result.status === 200 && result.data === 1) {
            this.$notify({
              group: 'success',
              text: 'Xóa khách hàng thành công !'
            })
            this.ReloadPage()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    SelectAllCustomer (event) {
      const checkBoxCustomers = this.$el.querySelectorAll('.sub-check')
      const arrBoxCustomers = Array.from(checkBoxCustomers)
      if (event.target.checked) {
        arrBoxCustomers.forEach((element) => {
          element.checked = true
          this.customersDelete = this.customers.map(
            (customer) => customer.customerId
          )
        })
      } else {
        arrBoxCustomers.forEach((element) => {
          element.checked = false
          this.customersDelete = []
        })
      }
    },
    DeleteMutipleCustomer () {
      axios
        .delete('https://localhost:44389/api/v1/Customers/multiple-records', {
          data: this.customersDelete
        })
        .then((result) => {
          if (result.status === 200) {
            if (result.data > 1) {
              this.$notify({
                group: 'success',
                text: 'Xóa nhiều khách hàng thành công !'
              })
            } else {
              this.$notify({
                group: 'success',
                text: 'Xóa khách hàng thành công !'
              })
            }
            this.ReloadPage()
            if (this.$el.querySelector('.top-checkbox').checked) {
              this.$el.querySelector('.top-checkbox').checked = false
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/_variables.scss";
@import "./style.scss";
</style>
