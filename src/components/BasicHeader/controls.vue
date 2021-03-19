<template>
  <div>
    <div class="controls-item" @click="setFrame('min')">最小化</div>
    <div class="controls-item" @click="setFrame('plus')">全屏</div>
    <div class="controls-item" @click="setFrame('close')">关闭</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.currentWindow = this.$electron.remote.getCurrentWindow();
    this.isMax = this.currentWindow.isMaximized();
  },
  methods: {
    setFrame(action) {
      switch (action) {
        case "min":
          this.$electron.ipcRenderer.send("window-min");
          break;
        case "plus":
          this.$electron.ipcRenderer.send("window-max");
          break;
        case "close":
          this.$electron.ipcRenderer.send("window-close");
          break;
        case "mini":
          this.$electron.ipcRenderer.send("toggle-mini", {
            value: true,
            storeState: this.$store.state,
          });
          break;
      }
      this.isMax = this.currentWindow.isMaximized();
    },
  },
};
</script>

<style lang="less">
.controls-item {
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
}
</style>