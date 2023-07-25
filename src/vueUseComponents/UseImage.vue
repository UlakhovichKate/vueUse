<script setup>
import { useImage } from '@vueuse/core'
import {ref} from "@vue/reactivity";

const avatarUrl = ref('#')
const { isLoading, error } = useImage(ref({ src: avatarUrl.value }), { delay: 5000 })
avatarUrl.value = 'https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

</script>

<template>
  <div>
    <h2>Use Image</h2>
    <span v-if="isLoading">Loading</span>
    <img class="w-50" v-else :src="avatarUrl">
  </div>
</template>
