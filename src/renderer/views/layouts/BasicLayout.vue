<template>
  <div>
    <basic-header></basic-header>
    <router-view/>
  </div>
</template>

<script>
import BasicHeader from "../../components/BasicHeader";

export default {
  components: {
    BasicHeader,
  },
};
</script>

<style>
</style>