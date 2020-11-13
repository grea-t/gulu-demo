---
title: 'Popover - 弹出层'
---
# 弹出层
## 预览
&nbsp;
<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>
## 使用方法
```vue
<template>
  <div class="popover-wrapper">
    <g-popover position="bottom">
      <template slot="content">
        popover中的内容
      </template>
      <g-button>下方显示内容</g-button>
    </g-popover>
    <g-popover>
      <template slot="content">
        popover中的内容
      </template>
      <g-button>点击显示</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <template slot="content">
        popover中的内容
      </template>
      <g-button>hover显示内容</g-button>
    </g-popover>
  </div>
</template>
```
## 选项
 Popover 组件支两个选项： <span style='color:#3eaf7c;background-color:#F8F8F8'> position </span> 用于设置显示位置； <span style='color:#3eaf7c;background-color:#F8F8F8'> trigger </span> 用于设置触发事件
#### 1. position
<span style='color:#3eaf7c;background-color:#F8F8F8'> position </span> 默认为 <span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>，可选择的参数为 
<span style='color:#3eaf7c;background-color:#F8F8F8'> top </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> left </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> right </span>,<span style='color:#3eaf7c;background-color:#F8F8F8'> bottom </span>,分别设置 popover 显示的方位。
#### 2. trigger
<span style='color:#3eaf7c;background-color:#F8F8F8'> trigger </span> 默认为<span style='color:#3eaf7c;background-color:#F8F8F8'> click </span>,,用于设置触发 popover 显示的事件。 除此之外还支持<span style='color:#3eaf7c;background-color:#F8F8F8'> hover </span>