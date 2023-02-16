<template>
  <div class="layout">
    <app-header />
    <navbar :navbars="navbars"/>
    <slot></slot>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "@/store/home";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { navbars } = storeToRefs(homeStore);
homeStore.fetchHomeInfoData("oppo");
</script>

<style lang="scss" scoped>

</style>