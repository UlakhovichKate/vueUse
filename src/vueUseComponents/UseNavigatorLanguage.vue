<script setup lang="ts">
import { useNavigatorLanguage } from '@vueuse/core'

const { isSupported, language } = useNavigatorLanguage()
</script>

<template>
  <h2>Use Navigator Language</h2>
  <p>
    Supported: {{ isSupported }}
  </p>
  <p class="mb-2">
    Navigator Language:
  </p>
  <div v-if="isSupported">
    <code class="mr-2">{{ language }}</code>
  </div>
  <div v-else>
    The Navigator.language API is not supported in your browser.
  </div>
</template>
