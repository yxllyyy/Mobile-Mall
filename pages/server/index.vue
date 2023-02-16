<template>
  <div class="server">
      <h2>server</h2>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
export interface IProps {
 title: string;
}

const props = withDefaults(defineProps(), {
  title: ""
})
</script>

<style lang="scss" scoped>
.server {}
</style>