<template>
    <h2>Create Shared Composable</h2>
    <div>
        {{ x }} - {{ y }}
    </div>
</template>

<script setup>
  import { createSharedComposable, useMouse } from '@vueuse/core'

  const useSharedMouse = createSharedComposable(useMouse)
  const { x, y } = useSharedMouse()

</script>

<style scoped>

</style>