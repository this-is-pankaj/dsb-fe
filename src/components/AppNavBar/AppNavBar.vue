<template>
  <nav class="navbar">
    <ul class="navbar--list">
      <li v-for="link in links" :key="link.path" class="navbar--item">
        <router-link :to="link.path" class="navbar--link" active-class="active">{{ link.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { NavLink } from '@/models/common'

interface AppNavbarProps {
  links: NavLink[]
}

defineProps<AppNavbarProps>()
</script>

<style scoped lang="postcss">
.navbar {
  &--list {
    @apply flex gap-4 flex-col md:flex-row;
  }

  &--link {
    @apply text-gray-700;

    &.active {
      @apply text-green-500;
    }
  }
}
</style>
