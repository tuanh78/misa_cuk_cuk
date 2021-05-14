<template>
  <div class="search">
    <div class="search-input">
      <div class="icon-search"></div>
      <input type="text" :placeholder="searchDetail">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchDetail: {
      type: Text,
      default: 'Tìm kiếm theo mã, Tên KH'
    }
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  border: 1px solid #cacaca;
  border-radius: 5px;
  padding: 10px;
  .icon-search {
    background-image: url('../../assets/icon/search.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 15px;
    height: 15px;
    margin-right: 4px;
  }

  input {
    border: none;
    outline: none;
    font-family: 'Google Sans Italic';
    font-size: 12px;

    &::placeholder {
      color: #bbbbbb;
    }
  }
}
</style>
