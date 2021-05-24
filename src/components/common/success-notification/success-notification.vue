<template>
  <notifications group="success" position="top right" class="success-notify" animation-type="velocity">
      <template slot="body" slot-scope="props">
        <div class="custom-notify">
            <font-awesome-icon class="icon-style" icon="check-circle"></font-awesome-icon>
            <a class="close" @click="props.close">
              <font-awesome-icon icon="times"></font-awesome-icon>
            </a>
            <div v-html="props.item.text">
            </div>
        </div>
      </template>
    </notifications>
</template>

<style scoped lang="scss">
@import '../../../scss/_variables.scss';
@import './style';
</style>
