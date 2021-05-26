<template>
  <div class="tooltip">
    <div>{{ title }}</div>
    <div>{{ description }}</div>
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
    }
  }
})
</script>

<style scoped lang="scss">
@import '../../../scss/_variables.scss';
@import './style';
</style>
