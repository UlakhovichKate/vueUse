<script setup lang="ts">
import { useMounted } from '@vueuse/core'
import { useTimeoutFn } from '@vueuse/core'
import {ref} from "vue";

const isMounted = ref(null);

const { start, isPending } = useTimeoutFn(() => {
  isMounted.value = useMounted()
}, 3000);

</script>

<template>
  <h2>Use Mounted</h2>
  <p>Wait 3 sec</p>
  <div>{{ isMounted ? 'mounted' : 'unmounted' }}</div>
</template>
