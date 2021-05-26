<template>
  <div class="warning">
    <div class="warning-content">
      <div class="warning-detail">
        <h3 v-html="title"></h3>
        <div class="warning-info">
          <div class="warning-icon">
            <font-awesome-icon :class="colorIcon" :icon="icon" />
          </div>
          <p v-html="description"></p>
        </div>
        <div class="btn-exit" @click="HiddenPopup"></div>
      </div>
      <div class="warning-btn">
        <div :class="['btn btn-close', bgColorBtnRight]" @click="HiddenPopupAndForm">{{ textBtnRight }}</div>
        <div class="btn btn-continue" @click="HiddenPopup">{{ textBtnLeft }}</div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    HiddenPopup: {
      type: Function
    },
    HiddenPopupAndForm: {
      type: Function
    },
    icon: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    colorIcon: {
      type: String
    },
    textBtnLeft: {
      type: String
    },
    textBtnRight: {
      type: String
    },
    bgColorBtnRight: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style';
</style>
