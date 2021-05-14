<template>
  <div class="customer">
    <div class="heading">
      <h2 class="heading-detail">Danh sách khách hàng</h2>
      <btn-add>
        <div class="icon-add"></div>
        <div class="icon-detail">Thêm khách hàng</div>
      </btn-add>
    </div>
    <div class="tools">
      <input-search></input-search>
      <btn-reload></btn-reload>
    </div>
    <div class="main-content">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Mã khách hàng</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Nhóm khách hàng</th>
            <th scope="col">Điện thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Số tiền nợ</th>
            <th scope="col">Mã thẻ thành viên</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </div>
    <add-customer v-if="isShowCustomerAdd"></add-customer>
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
  }
}
</script>
,
    InputSearch
<style lang="scss" scoped>
.customer {
  height: calc(100% - 56px);
  padding: 20px;

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
    overflow-y: scroll;
    height: calc(100% - 161px);
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 10px;
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
      width: 100%;
      border-collapse: collapse;
      position: relative;

      thead {
        tr {
          th {
            position: sticky;
            top: 0;
            left: 0;
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
    }
  }
}
</style>
