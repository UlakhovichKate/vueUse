<script setup lang="ts">
import { refAutoReset } from '@vueuse/core'

const message = refAutoReset('Default message', 1000)

function setMessage() {
  message.value = 'Changed'
}
</script>

<template>
  <h2>Ref Auto Reset</h2>
  <div>
    <button @click="setMessage()" class="btn btn-primary">
      Change Message
    </button>
    <p>
      {{ message }}
    </p>
  </div>
</template>
