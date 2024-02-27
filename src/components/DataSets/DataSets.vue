<template>
  <div class="data-sets">
    <data-card class="data-sets--card" v-for="data in list" :key="data.department" :data="data" :highlight="data.department === highlightItem">
    </data-card>
  </div>
</template>

<script setup lang="ts">
import DataCard from '@/components/DataCard/DataCard.vue';
import type { IDataSet } from '@/models/dataSets';
interface DataSetsProps {
  list: IDataSet[];
  highlightItem?: string;
}
withDefaults(defineProps<DataSetsProps>(), {
  highlightItem: ''
})
</script>

<style scoped lang="postcss">
.data-sets {
  @apply flex flex-col gap-4 md:flex-row flex-wrap justify-center;

  &--card {
    @apply w-80;
  }
}
</style>
