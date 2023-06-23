<template>
  <h2>Use Array Find Last</h2>
  <p>list: {{ list }}</p>
  <p>last one: {{ positive }}</p>

  <h2>Use Array Reduce</h2>
  <p>Sum: {{ sum }}</p>

  <h2>Use Array Uniq</h2>
  <p>listUniq: {{ listUniq }}</p>
  <p>Result: {{ result }}</p>
</template>

<script setup>
import { useArrayFindLast } from '@vueuse/core'
import { ref } from 'vue';
import { useArrayReduce } from '@vueuse/core'
import { useArrayUnique } from '@vueuse/core'

const item1 = ref(0)
const item2 = ref(1)
const item3 = ref(1)
const item4 = ref(2)
const item5 = ref(3)
const listUniq = [item1, item2, item3, item4, item5]
const result = useArrayUnique(listUniq)
// result.value: [0, 1, 2, 3]
item5.value = 1
// result.value: [0, 1, 2]

const sum = useArrayReduce([ref(1), ref(2), ref(3)], (sum, val) => sum + val)
// sum.value: 6

const list = [ref(1), ref(-1), ref(2)]
const positive = useArrayFindLast(list, val => val > 0)
// positive.value: 2
</script>

<style scoped>

</style>
