<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useBase64 } from '@vueuse/core'

const text = ref('')
const file = ref() as Ref<File>
const image = ref() as Ref<HTMLImageElement>

const { base64: textBase64 } = useBase64(text)
const { base64: fileBase64 } = useBase64(file)
const { base64: imageBase64 } = useBase64(image)
const { base64: bufferBase64 } = useBase64(new ArrayBuffer(8))

function onFileInput(e: Event) {
  file.value = (e.target as HTMLInputElement).files![0]
}
</script>

<template>
  <h2>Use Base 64</h2>
  <div class="mb-5">
    <div class="row">
      <div class="col-md-6">
        <span>Text Input</span>
        <textarea v-model="text" type="text" placeholder="Type something..." />
      </div>
      <div class="col-md-6">
        <span>Base64</span>
        <textarea :value="textBase64" readonly />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div>Buffer Input</div>
        <pre>new ArrayBuffer(1024)</pre>
      </div>
      <div class="col-md-6">
        <div>Base64</div>
        <textarea :value="bufferBase64" readonly />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div>File Input</div>
        <div>
          <input type="file" @input="onFileInput">
        </div>
      </div>
      <div class="col-md-6">
        <div>Base64</div>
        <textarea :value="fileBase64" readonly />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div>Image Input</div>
        <img
            ref="image"
            class="rounded mt-2"
            src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        >
      </div>
      <div class="col-md-6">
        <div>Base64</div>
        <textarea :value="imageBase64" readonly />
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  min-width: 0 !important;
  width: 100%;
}
</style>
