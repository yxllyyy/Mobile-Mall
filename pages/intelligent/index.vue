<template>
  <div class="intelligent">
      <h2>intelligent</h2>
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
.intelligent {}
</style>