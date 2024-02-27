<template>
  <header class="header">
    <img alt="DSB Logo" class="header--logo" src="@/assets/logo.svg" data-test="app-header-logo"/>
    <div class="navigation">
      <app-nav-bar :links="links"></app-nav-bar>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavLink } from '@/models/common'
import AppNavBar from '@/components/AppNavBar/AppNavBar.vue';

const links: NavLink[]  = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'About',
    path: '/about'
  }
]
</script>

<style scoped lang="postcss">
.header {
  @apply px-5 py-4 md:px-10 flex justify-between items-center shadow-md;

  &--logo {
    @apply w-12 h-12;
  }
}
</style>
