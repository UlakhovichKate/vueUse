<script setup>
import { useImage } from '@vueuse/core'
import {ref} from "@vue/reactivity";

const avatarUrl = ref('#')
const { isLoading } = useImage({ src: avatarUrl.value })

setTimeout(() => {
  avatarUrl.value = 'https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}, 5000);
</script>

<template>
  <div>
    <h2>Use Image</h2>
    <span v-if="isLoading">Loading</span>
    <img class="img-thumbnail" v-else :src="avatarUrl">
  </div>
</template>
