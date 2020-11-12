<template>
  <div class="input-wrapper">
    <g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="错误信息"></g-input>
    <br>
    <g-input v-model="value"></g-input>
    <br>
    <span>value:{{value}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    data() {
      return {value: '双向绑定'}
    },
    components: {'g-input': Input}
  }
</script>

<style lang="scss" scoped>
  .input-wrapper {
    padding-top: 14px;
  }
</style>