<template>
  <h2>Use To Number</h2>
  <div>String is: '{{ str }}', typeof is: {{ typeofstr }}</div>
  <div>Typeof after useToNumber: {{ result }}</div>
</template>

<script setup>
import { useToNumber } from '@vueuse/core'
import {ref} from "vue";

const str = ref('123')
const number = useToNumber(str)

number.value // 123

const result = ref('');
result.value = typeof number.value;

const typeofstr = ref('');
typeofstr.value = typeof str.value;
</script>

<style scoped>

</style>
