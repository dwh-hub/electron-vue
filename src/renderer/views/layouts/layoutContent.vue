<template>
  <div>
    <button @click="showUpdateWindow">弹出更新窗口</button>
  </div>
</template>

<script>
import windows from "@/main/windows"
export default {
  methods: {
    showUpdateWindow() {
      windows.createUpdateWindow()
    },
  },
};
</script>

<style>
</style>