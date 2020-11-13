<template>
  <svg class="g-icon" aria-hidden="true" v-if="name">
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>
<script>
  import './svg'

  export default {
    name: 'GuluIcon',
    props: ["name"]
  };
</script>
<style lang="scss" scoped>
  .g-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
</style>