<script setup lang="ts">
import { useCloned } from '@vueuse/core'
import {ref} from "vue";

const template = ref({ fruit: 'banana', drink: 'water' })

const { cloned, sync } = useCloned(template.value)
</script>

<template>
  <h2>Use Cloned</h2>
  <input v-model="template.fruit" type="text">
  <pre>{{ template }}</pre>

  <input v-model="cloned.fruit" type="text">
  <input v-model="cloned.drink" type="text">

  <button @click="sync()">
    reset
  </button>
</template>
