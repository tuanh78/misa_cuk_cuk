<template>
  <div id="app">
    <the-header></the-header>
    <div class="content">
      <the-navbar></the-navbar>
      <div class="content-detail">
        <router-view></router-view>
        <the-navigation></the-navigation>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/layout/the-navbar.vue'
import TheHeader from './components/layout/the-header.vue'
import TheNavigation from './components/layout/the-navigation.vue'
export default {
  components: {
    TheNavbar,
    TheHeader,
    TheNavigation
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Google Sans', sans-serif;
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
    width: 88%;
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
</style>
