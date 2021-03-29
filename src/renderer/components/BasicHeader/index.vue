<template>
  <div class="window-header">
    <div class="logo">大花园</div>
    <div class="controls-wrapper">
      <controls></controls>
    </div>
  </div>
</template>

<script>
import controls from "./controls";
export default {
  components: {
    controls,
  },
};
</script>

<style lang="less">
.window-header {
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  color: #fff;
  background-color: #070709;
  .logo {
    padding: 0 5px;
  }
  .controls-wrapper {
    height: 100%;
    flex-shrink: 0;
  }
}
</style>