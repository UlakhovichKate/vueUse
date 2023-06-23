<template>
  <h2>Use Array Difference</h2>
  <p>list 1: {{ list1 }}</p>
  <p>list 2: {{ list2 }}</p>
  <p>result: {{ result }}</p>
</template>

<script setup>
import { useArrayDifference } from '@vueuse/core'
import { ref } from 'vue';

const list1 = ref([0, 1, 2, 3, 4, 5])
const list2 = ref([4, 5, 6])
const result = useArrayDifference(list1, list2)
// result.value: [0, 1, 2, 3]
list2.value = [0, 1, 2]
// result.value: [3, 4, 5]
</script>

<style scoped>

</style>
