<template>
  <h2>Is Defined</h2>
  {{ result }}
</template>

<script setup>
import { isDefined } from '@vueuse/core'
import {ref} from "vue";


const example = ref(Math.random() ? 'example' : undefined) // Ref<string | undefined>
let result = ref([]);

result.value = isDefined(example) ? example : 'not defined'
</script>

<style scoped>

</style>
