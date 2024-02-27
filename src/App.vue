<template>
  <app-header></app-header>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
</script>

<style scoped lang="postcss">
.main {
  @apply px-5 py-10 md:px-10;
}
</style>
