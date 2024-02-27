<template>
  <div :class="{'data-card': true, highlight: highlight }" :title="data.description || data.department">
    <div class="data-card__header">
      <h2 class="data-card__header--department">{{ data.department }}</h2>
    </div>
    <p class="data-card--dataset-count">{{ data.datasets }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IDataSet } from '@/models/dataSets';

interface DataCardProps {
  data: IDataSet;
  highlight?: boolean;
}

withDefaults(defineProps<DataCardProps>(), {
  highlight: false
});
</script>

<style scoped lang="postcss">
.data-card {
  @apply bg-white shadow-md p-4 flex flex-row gap-4 md:flex-col items-center;

  &.highlight {
    @apply bg-yellow-200
  }

  &__header {
    &--department {
      @apply text-xl font-bold;
    }
  }

  &--dataset-count {
    @apply text-2xl text-center;
  }
}
</style>
