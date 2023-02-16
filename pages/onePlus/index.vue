<template>
  <div class="onePlus">
      <h2>onePlus</h2>
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
.onePlus {}
</style>