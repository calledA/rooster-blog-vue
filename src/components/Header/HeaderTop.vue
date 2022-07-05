<template>
  <div class="top">
    <div class="title">
      <span style="font-size: 55px; color: #7366ff">R</span>
      <span style="font-size: 45px">ooster</span>
    </div>
    <div class="top-header">
      <a-badge :max-count="10" :count="0" dot :dotStyle="{ width: '10px', height: '10px' }" style="position:absolute;right:110px;margin-top: 30px;">
      <a-avatar shape="square">
        <span>
          <IconNotification />
        </span>
      </a-avatar>
    </a-badge>
      <a-avatar @click="toast" :style="{ backgroundColor: '#14C9C9',position:'absolute',right:'50px',marginTop:'30px' }">
        <IconUser />
        <template #trigger-icon>
          <IconEdit />
        </template>
      </a-avatar>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
</script>
<style scoped>
.top {
  height: 100px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgb(89 102 122 / 10%) !important;
  justify-content: flex-start;
}
.title {
  width: 320px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  box-shadow: 0 0 20px rgb(89 102 122 / 10%) !important;
}
.top-header {
  width: calc(100% - 320px);
  height: 100px;
  position: relative;
}
</style>
