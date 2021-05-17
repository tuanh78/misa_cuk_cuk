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
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <table v-else class="table">
        <thead>
          <tr>
            <th class="col col-customer-code col-customer-code-custom">
              <input type="text">
              <div>abc</div>
            </th>
            <th class="col col-customer-name">Họ và tên</th>
            <th class="col col-customer-gender">Giới tính</th>
            <th class="col col-customer-date-of-birth">Ngày sinh</th>
            <th class="col col-customer-group">Nhóm khách hàng</th>
            <th class="col col-customer-phone">Điện thoại</th>
            <th class="col col-customer-email">Email</th>
            <th class="col col-customer-address">Địa chỉ</th>
            <th class="col col-customer-money">Số tiền nợ</th>
            <th class="col col-customer-member-code">Mã thẻ thành viên</th>
            <th class="col col-customer-option">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="col col-customer-code">Mã khách hàng</th>
            <td class="col col-customer-name">Họ và tên</td>
            <td class="col col-customer-gender">Giới tính</td>
            <td class="col col-customer-date-of-birth">Ngày sinh</td>
            <td class="col col-customer-group">Nhóm khách hàng</td>
            <td class="col col-customer-phone">Điện tdoại</td>
            <td class="col col-customer-email">Email</td>
            <td class="col col-customer-address">Địa chỉ</td>
            <td class="col col-customer-money">Số tiền nợ</td>
            <td class="col col-customer-member-code">Mã tdẻ tdành viên</td>
            <td class="col col-customer-option col-customer-option-custom">
              <div class="btn-option-ctn" @click="isShowEditCustomer = true">
                <div class="btn-style-common btn-update">Sửa</div>
              </div>
              <div class="btn-option-ctn" @click="isShowPopupDeleteCustomer = true">
                <div class="btn-style-common btn-delete">Xóa</div>
              </div>
            </td>
          </tr>
          <tr>
            <th class="col col-customer-code">Mã khách hàng</th>
            <td class="col col-customer-name">Họ và tên</td>
            <td class="col col-customer-gender">Giới tính</td>
            <td class="col col-customer-date-of-birth">Ngày sinh</td>
            <td class="col col-customer-group">Nhóm khách hàng</td>
            <td class="col col-customer-phone">Điện tdoại</td>
            <td class="col col-customer-email">Email</td>
            <td class="col col-customer-address">Địa chỉ</td>
            <td class="col col-customer-money">Số tiền nợ</td>
            <td class="col col-customer-member-code">Mã tdẻ tdành viên</td>
            <td class="col col-customer-option col-customer-option-custom">
              <div class="btn-option-ctn" @click="isShowEditCustomer = true">
                <div class="btn-style-common btn-update">Sửa</div>
              </div>
              <div class="btn-option-ctn" @click="isShowPopupDeleteCustomer = true">
                <div class="btn-style-common btn-delete">Xóa</div>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <add-customer
      key="add"
      :isShow="isShowAddCustomer"
      :HiddenForm="HiddenFormAddCustomer"
    ></add-customer>
    <edit-customer :isShow="isShowEditCustomer" :HiddenForm="HiddenFormEditCustomer"></edit-customer>
    <popup-delete-customer :isShow="isShowPopupDeleteCustomer" :HiddenPopup="HiddenPopupDeleteCustomer"></popup-delete-customer>
  </div>
</template>

<script>
import BtnAdd from '../components/common/btn-add.vue'
import BtnReload from '../components/common/btn-reload.vue'
import InputSearch from '../components/common/input-search.vue'
import AddCustomer from '../pages/customer/add-customer.vue'
import EditCustomer from '../pages/customer/edit-customer.vue'
import PopupDeleteCustomer from '../pages/customer/warning-popup-delete-customer'

export default {
  data () {
    return {
      isShowAddCustomer: false,
      isShowEditCustomer: false,
      isShowPopupDeleteCustomer: false,
      isShowReload: false
    }
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
  height: calc(100vh - 108px);
  padding: 10px;

  .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    &-detail {
      font-family: "Google Sans Light";
    }
    .icon-add {
      background-image: url("../assets/icon/add.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  .tools {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .main-content {
    overflow: auto;
    width: 100%;
    height: calc(100% - 86px);
    position: relative;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #f90;
      background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
      );
    }

    .table {
      white-space: nowrap;
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid #cacaca;
      }

      thead {
        tr {
          th {
            position: sticky;
            top: 0;
            z-index: 3;
          }
        }
      }
      thead,
      tbody {
        tr {
          th {
            text-align: left;
          }
        }
      }

      th,
      td {
        font-size: 12px;
        padding: 10px;
        background-color: white;
      }

      tbody {
        tr {
          td.col-customer-option {
            position: sticky;
            top: 0;
            right: 0;
          }
        }
      }

      .col {
        overflow: hidden;
        text-overflow: ellipsis;
        &-customer-code {
          min-width: 200px;
          padding-right: 20px;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 3;

          &-custom {
            z-index: 4;
          }
        }

        &-customer-name {
          min-width: 200px;
        }

        &-customer-gender {
          min-width: 250px;
        }

        &-customer-date-of-birth {
          min-width: 300px;
        }

        &-customer-group {
          min-width: 400px;
        }

        &-customer-phone {
          min-width: 200px;
        }

        &-customer-email {
          min-width: 250px;
        }

        &-customer-address {
          min-width: 300px;
        }

        &-customer-money {
          min-width: 300px;
        }
        &-customer-member-code {
          min-width: 200px;
        }

        &-customer-option {
          display: flex;
          min-width: 200px;
          position: sticky;
          border-left: 1px solid #e9ebee;
          right: 0;
          top: 0px;

          &-custom {
            .btn-option-ctn {
              border-radius: 4px;
              display: inline-block;
              font-size: 13px;
              font-weight: normal;
              text-align: center;
              transition: all 0.3s ease;

              .btn-style-common {
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.5s;
              }
            }

            .btn-update {
              background-color: #0075ff;
              color: #fff;
              margin-right: 10px;

              &:hover {
                background-color: #004faa;
              }
            }

            .btn-delete {
              background-color: #f65454;
              color: #fff;

              &:hover {
                background-color: #f30909;
              }
            }
          }
        }
      }
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
</style>
