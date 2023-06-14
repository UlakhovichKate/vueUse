<script setup lang="ts">
import { provide, ref } from 'vue'
import Receiver, { ArrayKey } from './demoReceiver.vue'

const array = ref([{ key: 1, value: '1' }, { key: 2, value: '2' }, { key: 3, value: '3' }])

provide(ArrayKey, array)
</script>

<template>
  <h2>Computed Inject</h2>
  <div class="d-flex">
    <div class="col-6">
      <div>
        Array
      </div>
      <pre>{{ array }}</pre>
    </div>
    <Receiver />
  </div>
</template>
