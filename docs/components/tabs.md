---
title: 'Tabs - 标签'
---
# 标签
## 预览
&nbsp;
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>

## 使用方法
此组件的 <span style='color:#3eaf7c;background-color:#F8F8F8'>g-tabs</span>,<span style='color:#3eaf7c;background-color:#F8F8F8'>g-tabs-item</span>,<span style='color:#3eaf7c;background-color:#F8F8F8'>g-tabs-pane</span> 必须有一一对应的 name。
```vue
<template>
  <div class="tabs-wrapper">
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name='tab1'>
          <g-icon name="setting"></g-icon>
          Tab1
        </g-tabs-item>
        <g-tabs-item name='tab2'>Tab2</g-tabs-item>
        <g-tabs-item name='tab3'>Tab3</g-tabs-item>
        <g-tabs-item name='tab4'>Tab4</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
        <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
        <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
        <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
  export default {
    data() { return { selectedTab: 'tab1' } }
  }
</script>
```

## 选项
1. 默认高亮状态\
<span style='color:#3eaf7c;background-color:#F8F8F8'>g-tabs</span> 需要设置<span style='color:#3eaf7c;background-color:#F8F8F8'> selected </span>属性来确定默认标签。  
你可以：`:selected.sync="selectedTab"`,其中 <span style='color:#3eaf7c;background-color:#F8F8F8'>selectedTab </span>是你需要传递的默认值。  
并且该标签的子组件应该是 <span style='color:#3eaf7c;background-color:#F8F8F8'>g-tabs-head</span> 和 <span style='color:#3eaf7c;background-color:#F8F8F8'>g-tabs-body</span>，否则你会得到一个警告。
2. disabled 状态\
 <span style='color:#3eaf7c;background-color:#F8F8F8'>disabled</span> 属性用于 <span style='color:#3eaf7c;background-color:#F8F8F8'>g-tabs-item</span> 标签，可以设置该标签的不可用状态。