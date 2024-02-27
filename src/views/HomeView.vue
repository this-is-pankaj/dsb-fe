<template>
  <div class="page">
    <h1 class="page--title">Dashboard</h1>
    <div class="page__filters">
    </div>
    <div class="page__content">
      <p class="mb-4">Below are the list of all departments and the number of datasets shared by them till date.</p>
      <data-sets></data-sets>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataSets from '@/components/DataSets/DataSets.vue';
</script>

<style scoped lang="postcss">
.page {
  &--title {
    @apply text-3xl font-bold text-center;
  }

  &__content {
    @apply mt-4;
  }
}
</style>

