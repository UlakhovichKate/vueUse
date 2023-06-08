<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const { files, open, reset, onChange } = useFileDialog()
onChange((files) => {
  /** do something with files */
})
</script>

<template>
  <h2>Use File Dialog</h2>
  <button class="btn btn-primary" @click="open()">
    Choose files
  </button>
  <button class="btn btn-outline-primary" type="button" :disabled="!files" @click="reset()">
    Reset
  </button>
  <template v-if="files">
    <p>You have selected: <b>{{ files.length }} files</b></p>
    <li v-for="file of files" :key="file.name">
      {{ file.name }}
    </li>
  </template>
</template>
