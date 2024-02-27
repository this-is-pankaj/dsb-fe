<template>
  <div class="page">
    <h1 class="page--title">Dashboard</h1>
    <div class="page__filters">

    </div>
    <div class="page__content">
      {{ dataSets }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { makeCall } from '@/services/dashboard';
const dataSets = ref([]);

onMounted(async () => {
 dataSets.value = await makeCall('dataSets')
})
</script>

<style scoped lang="postcss">
.page {
  &--title {
    @apply text-3xl font-bold text-center;
  }
}
</style>

