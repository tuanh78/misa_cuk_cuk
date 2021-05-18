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
      <input-search searchDetail="Tìm kiếm theo mã, tên KH"></input-search>
      <btn-reload @click.native="ShowReloadPage"></btn-reload>
    </div>
    <div class="main-content">
      <div v-if="isShowReload" class="reload-ctn">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <table v-else class="table-customer">
        <thead>
          <tr class="border-bottom">
            <th class="input-ctn"></th>
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
              <div class="cntr">
                <label for="cbx" class="label-cbx">
                  <input id="cbx" type="checkbox" class="invisible" />
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
import BtnAdd from '../components/common/btn-add.vue'
import BtnReload from '../components/common/btn-reload.vue'
import InputSearch from '../components/common/input-search.vue'
import AddCustomer from '../pages/customer/add-customer.vue'
import EditCustomer from '../pages/customer/edit-customer.vue'
import PopupDeleteCustomer from '../pages/customer/warning-popup-delete-customer'
const axios = require('axios')

export default {
  data () {
    return {
      customers: null,
      isShowAddCustomer: false,
      isShowEditCustomer: false,
      isShowPopupDeleteCustomer: false,
      isShowReload: false
    }
  },
  created: async function () {
    const res = await axios.get('http://localhost:2986/api/v1/Customers')
    this.customers = res.data
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
    ShowReloadPage () {
      this.isShowReload = true
      setTimeout(() => {
        this.isShowReload = false
      }, 1500)
    }
  }
}
</script>
<style lang="scss" scoped>
.customer {
  height: calc(100vh - 104px);
  padding: 12px;

  .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    &-detail {
      font-family: $font-family-title;
      font-size: $font-size-title;
    }
    .icon-add {
      background-image: url("../assets/icon/add.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  .tools {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .main-content {
    overflow: auto;
    height: calc(100% - 100px);
    .table-customer {
      display: block;
      width: 100%;
      border-collapse: collapse;

      tr {
        cursor: pointer;
        transition: all 0.3s;
      }

      tr:hover {
        background-color: $color-extra-light-gray;
      }

      th,
      td {
        text-align: left;
        padding: 15px 0;
      }

      .border-bottom {
        th,
        td {
          border-bottom: 1px solid $color-light-gray;
        }
      }

      .input-ctn {
        min-width: 50px;
      }

      .number {
        min-width: 40px;
      }

      .customer-code {
        min-width: 150px;
      }

      .fullname {
        min-width: 150px;
      }

      .gender {
        min-width: 100px;
      }

      .date-of-birth {
        min-width: 150px;
      }

      .customer-group {
        min-width: 200px;
      }

      .phone-number {
        min-width: 200px;
      }

      .email {
        min-width: 250px;
      }

      .address {
        min-width: 250px;
      }

      .money-debt {
        min-width: 150px;
      }

      .customer-card-code {
        min-width: 150px;
      }

    }

    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px $color-extra-light-gray;
      background-color: $color-light-gray;
    }

    &::-webkit-scrollbar
    {
      width: 10px;
      height: 10px;
      background-color: $color-extra-light-gray;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: $color-gray;
    }
  }
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 95%;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.reload-ctn {
  background-color: rgba(44, 130, 201, 0.5);
  width: 100%;
  height: 100%;
}

// checkbox
body {
    font-family: Avenir;
    font-size: 16px;
}

.label-cbx {
    user-select: none;
    cursor: pointer;
    margin-bottom: 0;
}

.label-cbx input:checked + .checkbox {
    border-color: #20C2E0;
}

.label-cbx input:checked + .checkbox svg path {
    fill: #20C2E0;
}

.label-cbx input:checked + .checkbox svg polyline {
    stroke-dashoffset: 0;
}

.label-cbx:hover .checkbox svg path {
    stroke-dashoffset: 0;
}

.label-cbx .checkbox {
    position: relative;
    top: 2px;
    float: left;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    border: 2px solid #C8CCD4;
    border-radius: 3px;
}

.label-cbx .checkbox svg {
    position: absolute;
    top: -2px;
    left: -2px;
}

.label-cbx .checkbox svg path {
    fill: none;
    stroke: #20C2E0;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 71px;
    stroke-dashoffset: 71px;
    transition: all .6s ease;
}

.label-cbx .checkbox svg polyline {
    fill: none;
    stroke: #FFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 18px;
    stroke-dashoffset: 18px;
    transition: all .3s ease;
}

.label-cbx > span {
    pointer-events: none;
    vertical-align: middle;
}

.cntr {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
}

.invisible {
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    opacity: 0;
}

</style>
