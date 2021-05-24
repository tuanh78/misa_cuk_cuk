<template>
  <div class="navi">
    <div class="total-item">
      <p>
        Hiển thị
        <span class="number-item"
          >{{ recordStart }}-{{ recordEnd }}/{{ totalRecord }} </span
        >
        <span>Khách</span> hàng
      </p>
    </div>
    <div class="navi-list">
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="currentPageIndex"
          :max="totalPage"
          :max-pages="7"
          round
          boundary-links
          direction-links
          color="black"
          active-color="green"
          active-text-color="white"
        ></q-pagination>
      </div>
    </div>
    <div class="total-item">
      <p>
        <span class="number-item">{{ pageSize }} </span>
        <span>Khách</span> hàng/trang
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      currentPageIndex: 1,
      totalPage: 1
    }
  },
  created () {
    axios.get('https://localhost:44389/api/v1/Customers/total-record')
      .then((result) => {
        this.totalPage = Math.ceil(result.data / this.pageSize)
      }).catch((err) => {
        console.log(err)
      })
  },
  props: {
    pageIndex: {
      type: Number
    },
    pageSize: {
      type: Number
    },
    totalRecord: {
      type: Number
    },
    recordStart: {
      type: Number
    },
    recordEnd: {
      type: Number
    }
  },
  methods: {
    GetCustomers (pageIndex) {
      this.$emit('getCustomers', pageIndex)
    },
    LoadFirstPage () {
      this.$emit('loadFirstPage')
    },
    LoadLastPage () {
      this.$emit('loadLastPage')
    },
    LoadPrevPage () {
      this.$emit('loadPrevPage')
    },
    LoadNextPage () {
      this.$emit('loadNextPage')
    }
  },
  watch: {
    currentPageIndex (newValue, oldValue) {
      this.$emit('loadPage', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/_variables.scss";
@import "./style";
</style>
