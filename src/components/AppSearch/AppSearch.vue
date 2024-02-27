<template>
  <div class="search">
    <input type="search" :placeholder="placeholder" class="search--field" @input="startSearch" data-test="search--input-field"/>
  </div>
</template>

<script setup lang="ts">
interface SearchProps {
  placeholder?: string;
}
withDefaults(defineProps<SearchProps>(), {
  placeholder: 'Search'
})

const $emit = defineEmits(['search'])

const startSearch = (event) => {
  const searchTerm = event.target.value
  $emit('search', searchTerm)
}
</script>

<style scoped lang="postcss" >
.search {
  &--field {
    @apply w-full p-2 rounded shadow;
  }
}
</style>