<template>
  <div>
    <div class="controls-item" @click="setFrame('min')">最小化</div>
    <div class="controls-item" @click="setFrame('unmax')" v-if="isMax">缩小</div>
    <div class="controls-item" @click="setFrame('max')" v-else>全屏</div>
    <div class="controls-item" @click="setFrame('close')">关闭</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMax: false
    };
  },
  created() {
  },
  methods: {
    setFrame(action) {
      switch (action) {
        case "min":
          this.$electron.ipcRenderer.send("window-min");
          break;
        case "max":
          this.$electron.ipcRenderer.send("window-max", this.isMax);
          this.isMax = true
          break;
        case "unmax":
          this.$electron.ipcRenderer.send("window-max", this.isMax);
          this.isMax = false
          break;
        case "close":
          this.$electron.ipcRenderer.send("window-close");
          break;
      }
    },
  },
};
</script>

<style lang="less">
.controls-item {
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  -webkit-app-region: no-drag;
}
</style>