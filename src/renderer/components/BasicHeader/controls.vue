<template>
  <div class="controls">
    <div class="controls-item" @click="setFrame('min')">最小化</div>
    <div class="controls-item" @click="setFrame('unmax')" v-if="isMax">
      缩小
    </div>
    <div class="controls-item" @click="setFrame('max')" v-else>全屏</div>
    <div class="controls-item controls-close" @click="setFrame('close')">
      关闭
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMax: false,
    };
  },
  created() {},
  methods: {
    setFrame(action) {
      switch (action) {
        case "min":
          this.$electron.ipcRenderer.send("window-min");
          break;
        case "max":
          this.$electron.ipcRenderer.send("window-max", this.isMax);
          this.isMax = true;
          break;
        case "unmax":
          this.$electron.ipcRenderer.send("window-max", this.isMax);
          this.isMax = false;
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
.controls {
  height: 100%;
  display: flex;
  align-items: center;
  .controls-item {
    cursor: pointer;
    padding: 0 5px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 15px;
    -webkit-app-region: no-drag;
    color: #fff;
    &:hover {
      background-color: #1f1f21;
    }
    &.controls-close:hover {
      background-color: #e81123;
    }
  }
}
</style>