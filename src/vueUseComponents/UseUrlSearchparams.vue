<script setup lang="ts">
import { useUrlSearchParams } from '@vueuse/core'

const params = useUrlSearchParams('history')
params.foo = 'bar'
params.vueuse = 'awesome'
</script>

<template>
  <h2>Use Url Search Params</h2>
  <div>
    <ul class="!m-0">
      <li v-for="key in Object.keys(params)" :key="key">
        {{ key }}={{ params[key] }}
      </li>
    </ul>
  </div>
</template>
