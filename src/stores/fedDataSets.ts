import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { makeCall } from '@/services/dashboard'
import type { IDataSet } from '@/models/dataSets'
import { mockedDataSets } from '@/services/mocks/data-sets.mock'

export const useFedDataSetsStore = defineStore('fedDataSets', () => {
  const ministriesDataSet = ref<IDataSet[]>([])

  const fetchAllDataSets = async () => {
    try {
      ministriesDataSet.value = await makeCall('dataSets')
    } catch (exc) {
      // For the time being use the mock data on any sort of API error
      ministriesDataSet.value = mockedDataSets
    }
  }

  const filteredministriesDataSet = (term: string) => {
    if (!term) return ministriesDataSet.value
    return ministriesDataSet.value.filter(({ department }) =>
      department.toLowerCase().includes(term.toLowerCase())
    )
  }

  const ministryWithHighestDataSet = computed(() => {
    const copy = [...ministriesDataSet.value]
    return copy.sort((a, b) => b.datasets - a.datasets)[0]
  })

  return {
    ministriesDataSet,
    fetchAllDataSets,
    filteredministriesDataSet,
    ministryWithHighestDataSet
  }
})
