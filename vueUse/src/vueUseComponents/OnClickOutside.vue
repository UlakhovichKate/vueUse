<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const modal = ref(false)

const ignoreElRef = ref()

const onClickOutsideHandler = [
  (ev) => {
    console.log(ev)
    modal.value = false
  },
  { ignore: [ignoreElRef] }
]

</script>

<template>
  <h2>On Click Outside</h2>
  <button class="btn" @click="modal = true">
    Open Modal
  </button>

  <div class="btn" ref="ignoreElRef">
    click outside ignore element
  </div>

  <div class="el-modal" v-if="modal" v-on-click-outside="onClickOutsideHandler">
    Hello World
  </div>
</template>

<style>
.el-modal {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7fa998;
}
</style>
