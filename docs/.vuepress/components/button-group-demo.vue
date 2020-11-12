<template>
  <div class="group-wrapper">
    <g-button-group>
      <g-button>默认按钮</g-button>
      <g-button>默认按钮</g-button>
      <g-button>默认按钮</g-button>
    </g-button-group>
  </div>
</template>

<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/Button'

  export default {
    name: 'button-group-demo',
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    }
  }
</script>

<style lang="scss" scoped>
  .group-wrapper {
    padding-top: 10px;
  }
</style>