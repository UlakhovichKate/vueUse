<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<template>
  <h2>Use Textarea Autosize</h2>
  <div>
    <p>Type, the textarea will grow:</p>
    <textarea
        ref="textarea"
        v-model="input"
        class="resize-none"
        placeholder="What's on your mind?"
    />
  </div>
</template>

<style>
.resize-none {
  resize: none;
  overflow: hidden;
}
</style>
