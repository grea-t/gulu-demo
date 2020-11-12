<template>
  <div class="response-wrapper">
    <img src="../response.gif" alt="响应式效果">
  </div>
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'g-col': Col,
      'g-row': Row
    },
  }
</script>

<style lang="scss" scoped>
  .response-wrapper { padding-top: 10px; }
</style>