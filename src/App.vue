<template>
  <div id="app">
    <the-header></the-header>
    <div class="content">
      <the-navbar></the-navbar>
      <div class="content-detail">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <success-notification></success-notification>
  </div>
</template>

<script>
import TheNavbar from './components/layout/the-navbar.vue'
import TheHeader from './components/layout/the-header.vue'
import SuccessNotification from './components/common/success-notification/success-notification.vue'
export default {
  components: {
    TheNavbar,
    TheHeader,
    SuccessNotification
  }
}
</script>
<style lang="scss">
@import './scss/_variables.scss';

* {
  margin: 0 ;
  padding: 0;
  box-sizing: border-box !important;
}

body {
  font-family: 'Google Sans', sans-serif !important;
  font-size: 13px !important;
}

ul {
  li {
    list-style-type: none;
  }
}

a {
  text-decoration: none;
}

.content {
  display: flex;

  &-detail {
    width: calc(100% - 226px);
  }
}

@font-face {
  font-family: 'Google Sans';
  src: url('./assets/font/GoogleSans-Regular.otf');
}

@font-face {
  font-family: 'Google Sans Medium';
  src: url('./assets/font/GoogleSans-Medium.otf');
}

@font-face {
  font-family: 'Google Sans Bold';
  src: url('./assets/font/GoogleSans-Bold.otf');
}

@font-face {
  font-family: 'Google Sans Light';
  src: url('./assets/font/GoogleSans-Light.otf');
}

@font-face {
  font-family: 'Google Sans Italic';
  src: url('./assets/font/GoogleSans-Italic.otf');
}

.q-field__control {
  height: 40px !important;
}

.q-field__marginal {
  height: 40px;
}

.custom-datepicker {
  padding: 0 16px;
}
.custom-datepicker:focus-visible {
  border-color: $color-green-default !important;
}

.vdpClearInput {
  right: 25px !important;
}

.q-field--filled .q-field__control, .q-field--filled .q-field__control:before {
  background-color: $color-white !important;
}

.q-field__control {
  border: 1px solid #BBBBBB;
  border-radius: 4px;
  padding-left: 16px
}

.q-field__native {
  padding-left: 16px !important;
}

.q-btn-item {
  margin-right: 10px;
}

.font-family-bold {
  font-family: $font-family-title2;
}

.color-icon-warning-add {
  color: $color-warning-add;
}

.color-icon-warning-delete {
  color: $color-error;
}

.warning-btn-delete-customer {
  background-color: $color-error;

  &:hover {
    background-color: $color-pink;
  }
}

.warning-btn-add-customer {
  background-color: $color-green-default;

  &:hover {
    background-color: $color-green-hover;
  }
}
</style>
