<template>
  <div class="aside-wrap">
    <div style="height:30px;width:320px"></div>
    <a-menu
        :default-selected-keys="['dashboard']"
        :style="{ width: '100%' }"
        @menu-item-click="onClickMenuItem"
      >
        <a-menu-item key="dashboard">
          <IconHome></IconHome>
          仪表盘
        </a-menu-item>
        <a-menu-item key="0_2">
          <IconCalendar></IconCalendar>
          文章管理
        </a-menu-item>
        <a-menu-item key="0_3">
          <IconCalendar></IconCalendar>
          评论管理
        </a-menu-item>
        <a-sub-menu key="1">
          <template #title>
            <IconCalendar></IconCalendar> 标签管理
          </template>
          <a-menu-item key="1_1">Menu 1</a-menu-item>
          <a-menu-item key="1_2">Menu 2</a-menu-item>
          <a-sub-menu key="2" title="Navigation 2">
            <a-menu-item key="2_1">Menu 1</a-menu-item>
            <a-menu-item key="2_2">Menu 2</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="2">
          <template #title>
            <IconCalendar></IconCalendar> 用户管理
          </template>
          <a-menu-item key="1_1">Menu 1</a-menu-item>
          <a-menu-item key="1_2">Menu 2</a-menu-item>
          <a-sub-menu key="2" title="Navigation 2">
            <a-menu-item key="2_1">Menu 1</a-menu-item>
            <a-menu-item key="2_2">Menu 2</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="3">
          <template #title>
            <IconCalendar></IconCalendar> 操作日志
          </template>
          <a-menu-item key="4_1">登陆日志</a-menu-item>
          <a-menu-item key="4_2">Menu 2</a-menu-item>
          <a-menu-item key="4_3">Menu 3</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="4">
          <template #title>
            <IconCalendar></IconCalendar> 配置管理
          </template>
          <a-menu-item key="4_1">Menu 1</a-menu-item>
          <a-menu-item key="4_2">Menu 2</a-menu-item>
          <a-menu-item key="4_3">Menu 3</a-menu-item>
        </a-sub-menu>
      </a-menu>
  </div>
</template>
<script setup>
import { ref } from 'vue'
</script>
<style scoped>
.aside-wrap{
  width: 320px;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  background-color: #FFF;
  border:1px solid #F2F2F4;
}
</style>
