<template>
  <div class="page">
    <h1 class="page--title">Dashboard</h1>
    <div class="page__filters">
      <div class="search-section">
        <app-search @search="searchDataSets"></app-search>
      </div>
    </div>
    <div class="page__content">
      <p>Below are the list of all departments and the number of datasets shared by them till date.</p>
      <p class="mb-4">Showing {{ dataSetsList.length }} of {{ ministriesDataSet.length }}</p>
      <data-sets :list="dataSetsList" :highlight-item="ministryWithHighestDataSet?.department"></data-sets>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataSets from '@/components/DataSets/DataSets.vue';
import AppSearch from '@/components/AppSearch/AppSearch.vue';
import { computed, onMounted, ref } from 'vue';
import { useFedDataSetsStore } from '@/stores/fedDataSets';
import { storeToRefs } from 'pinia';


const { fetchAllDataSets, filteredministriesDataSet } = useFedDataSetsStore()
const { ministriesDataSet, ministryWithHighestDataSet } = storeToRefs(useFedDataSetsStore())
const searchText = ref('')

const dataSetsList = computed(() => {
  return searchText.value ? filteredministriesDataSet(searchText.value) : ministriesDataSet.value
})

const searchDataSets = (searchTerm: string) => {
  searchText.value = searchTerm
}

onMounted(() => {
  fetchAllDataSets()
})
</script>

<style scoped lang="postcss">
.page {
  &--title {
    @apply text-3xl font-bold text-center;
  }

  &__filters {
    @apply my-4;

    .search-section {
      @apply max-w-60 mx-auto;
    }
  }

  &__content {
    @apply mt-4;
  }
}
</style>

