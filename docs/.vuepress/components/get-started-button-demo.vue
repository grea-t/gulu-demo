<template>
  <div>
    <g-button>默认按钮</g-button>
  </div>
</template>

<script>
  import Button from '../../../src/button.vue'

  export default {
    components: {
      'g-button': Button
    },
  }
</script>
<style lang="scss" scoped>
  div{
    padding-top: 10px;
  }
</style>