<template>
  <div class="customer">
    <div class="heading">
        <h2 class="heading-detail">Danh sách khách hàng</h2>
      <btn-add @click.native="isShowCustomerAdd = true">
        <div class="icon-add"></div>
        <div class="icon-detail">Thêm khách hàng</div>
      </btn-add>
    </div>
    <div class="tools">
      <input-search searchDetail="Tìm kiếm theo mã, tên KH"></input-search>
      <btn-reload></btn-reload>
    </div>
    <div class="main-content">
      <table class="table">
        <thead>
          <tr>
            <th class="col col-customer-code col-customer-code-custom">Mã khách hàng</th>
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
              <div class="btn-option-ctn">
                <div class="btn-style-common btn-update">Sửa</div>
              </div>
              <div class="btn-option-ctn">
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
            <td class="col col-customer-option">Tùy chọn</td>
          </tr>
        </tbody>
      </table>
    </div>
    <add-customer key="add" :isShow="isShowCustomerAdd" :HiddenForm="HiddenFormAddCustomer"></add-customer>
  </div>
</template>

<script>
import BtnAdd from '../components/common/btn-add.vue'
import BtnReload from '../components/common/btn-reload.vue'
import InputSearch from '../components/common/input-search.vue'
import AddCustomer from '../pages/customer/add-customer.vue'

export default {
  data () {
    return {
      isShowCustomerAdd: false
    }
  },
  components: {
    BtnAdd,
    BtnReload,
    InputSearch,
    AddCustomer
  },
  methods: {
    HiddenFormAddCustomer () {
      this.isShowCustomerAdd = false
    }
  }
}
</script>
,
    InputSearch
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
      display: block;
      white-space: nowrap;
      border-collapse: collapse;

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
        font-size: 13px;
        border-bottom: 1px solid #cacaca;
        padding: 10px;
        background-color: white;
      }

      .col {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        &-customer-code {
          padding-right: 20px;
          width: 15%;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 3;

          &-custom {
            z-index: 4;
          }
        }

        &-customer-name {
          width: 15%;
        }

        &-customer-gender {
          width: 10%;
        }

        &-customer-date-of-birth {
          width: 15%;
        }

        &-customer-group {
          width: 15%;
        }

        &-customer-phone {
          width: 15%;
        }

        &-customer-email {
          width: 15%;
        }

        &-customer-address {
          width: 20%;
        }

        &-customer-money {
          width: 15%;
        }
        &-customer-member-code {
          width: 20%;
        }

        &-customer-option {
          width: 20%;
          position: sticky;
          right: 0;
          top: 0;

          &-custom {
            .btn-option-ctn {
              border-radius: 4px;
              display: inline-block;
              font-size: 13px;
              font-weight: normal;
              text-align: center;
              transition: all 0.3s ease;
            }
          }
        }
      }
    }
  }
}
</style>
