<template>
  <div class="gutter-wrapper">
    <g-row gutter="30">
      <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
    </g-row>
    <g-row gutter="20">
      <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
    </g-row>
    <g-row gutter="10">
      <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
      <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
    </g-row>
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
  *{
    box-sizing: border-box;
  }
  .gutter-wrapper {
    padding-top: 10px;

    .item {
      text-align: center;
      color: white;

      > span {
        display: block;
        background: #3eaf7c;
      }
    }
  }
</style>