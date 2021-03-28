<template>
  <div class="window-header">
    <controls></controls>
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

<style>
.window-header {
  -webkit-app-region: drag;
}
</style>