<template>
<div>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
  <div class="tooltip" v-if="isShow">
    <div>{{ title }}</div>
    <div>{{ description }}</div>
  </div>
  </transition>
</div>
</template>
<script>
export default ({
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="scss">
@import '../../../scss/_variables.scss';
.tooltip {
  background-color: $color-error;
  position: absolute;
  top: -27px;
  left: 45%;
  border-radius: 8px;
  padding: 5px 12px;
  transform: translateX(-50%);
  text-align: center;
  color: $color-white;

  &:after {
  display: block;
  width: 0px;
  height: 0px;
  content:"";
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-top: 8px solid $color-error;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  }
  div {
    white-space: nowrap;
  }
}
</style>
