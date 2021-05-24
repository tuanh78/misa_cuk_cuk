<template>
    <div class="search-input">
      <div class="icon-search"></div>
      <input v-model="search" @keyup="SearchValue" class="input-detail" type="text" :placeholder="searchPlaceHolder" onfocus="this.placeholder = ''" :onblur="'this.placeholder = ' + '\'' + searchPlaceHolder + '\''"/>
      <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div v-if="search !== ''" class="icon-remove-text" @click="search = ''"></div>
      </transition>
    </div>
</template>

<script>
var debounce = require('lodash.debounce')
export default {
  data () {
    return {
      search: ''
    }
  },
  components: {
  },
  props: {
    searchPlaceHolder: {
      type: String
    }
  },
  methods: {
    SearchValue: debounce(function () {
      this.$emit('updateSearch', this.search)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/_variables.scss';
@import './style.scss';
</style>
