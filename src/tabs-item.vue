<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsItem',
    inject:['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>