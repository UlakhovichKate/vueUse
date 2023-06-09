<script setup lang="ts">
import type { Ref } from 'vue'
import { reactive, ref } from 'vue'
import { useFileSystemAccess } from '@vueuse/core'

const dataType = ref('Text') as Ref<'Text' | 'ArrayBuffer' | 'Blob'>
const res = useFileSystemAccess({
  dataType,
  types: [{
    description: 'text',
    accept: {
      'text/plain': ['.txt', '.html'],
    },
  }],
  excludeAcceptAllOption: true,
})

const content = res.data
const str = JSON.stringify(reactive({
  isSupported: res.isSupported,
  file: res.file,
  fileName: res.fileName,
  fileMIME: res.fileMIME,
  fileSize: res.fileSize,
  fileLastModified: res.fileLastModified,
}))

async function onSave() {
  await res.save()
}
</script>

<template>
  <h2>Use File System Access</h2>
  <div>
    <div class="">
      <button class="btn btn-primary" @click="res.open()">
        Open
      </button>
      <button class="btn btn-secondary" @click="res.create()">
        New file
      </button>
      <button class="btn btn-danger" :disabled="!res.file.value" @click="onSave">
        Save
      </button>
      <button class="btn btn-dark" :disabled="!res.file.value" @click="res.saveAs()">
        Save as
      </button>

      <div class="m-3">
        <div text-xs op50>
          DataType
        </div>
        <select v-model="dataType" class="outline-none w-30 px2 py1 text-sm border-1">
          <option value="Text">
            Text
          </option>
          <option value="ArrayBuffer">
            ArrayBuffer
          </option>
          <option value="Blob">
            Blob
          </option>
        </select>
      </div>
    </div>

    <pre class="code-block">{{ str }}</pre>

    <div v-if="content">
      <div>Content</div>
      <textarea
          v-if="typeof content === 'string'"
          v-model="content" rows="20" cols="40"
      />
      <span v-else>{{ content }}</span>
    </div>
  </div>
</template>
