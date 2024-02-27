<template>
  <div class="data-sets">
    <data-card class="data-sets--card" v-for="data in dataSets" :key="data.department" :data="data">
    </data-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { makeCall } from '@/services/dashboard';
import type { IDataSet } from '@/models/dataSets';
import DataCard from '@/components/DataCard/DataCard.vue';

const dataSets = ref<IDataSet[]>([]);
onMounted(async () => {
  dataSets.value = await makeCall('dataSets')
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
