<template>
  <div class="wrapper">
    <g-layout>
      <g-header> header</g-header>
      <g-layout>
        <g-sider> sider</g-sider>
        <g-content> content</g-content>
      </g-layout>
      <g-footer> footer</g-footer>
    </g-layout>
    <br>
    <g-layout>
      <g-header> header</g-header>
      <g-content> content</g-content>
      <g-footer> footer</g-footer>
    </g-layout>
    <br>
    <g-layout>
      <g-header> header</g-header>
      <g-layout>
        <g-sider> sider</g-sider>
        <g-layout>
          <g-content> content</g-content>
          <g-footer> footer</g-footer>
        </g-layout>
      </g-layout>
    </g-layout>
  </div>
</template>

<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Sider from '../../../src/sider'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'

  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-sider': Sider,
      'g-content': Content,
      'g-footer': Footer
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  $background: #3eaf7c;
  .wrapper {
    > .layout {
      height: 30vh;

      > .header {
        height: 3em;
        background: $background;
      }

      > .content {
        background: lighten($background, 40%);
      }

      > .layout {
        height: 6em;

        > .sider {
          width: 3em;
          background: lighten($background, 15%);
        }

        > .content {
          background: lighten($background, 40%);
        }

        > .layout {
          > .content {
            background: lighten($background, 40%);
          }

          > .footer {
            background: $background;
          }
        }
      }

      > .footer {
        background: $background;
      }
    }
  }
</style>