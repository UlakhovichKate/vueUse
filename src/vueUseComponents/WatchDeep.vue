<template>
  <h2>Watch Deep</h2>
  <p>{{ nestedObject.foo.bar.deep }}</p>
</template>

<script setup>
import {useTimeoutFn, watchDeep} from '@vueuse/core'
import {ref} from "vue";

const nestedObject = ref({ foo: { bar: { deep: 5 } } })

watchDeep(nestedObject, (obj) => {
  console.log('updated')
})

const { start, isPending } = useTimeoutFn(() => {
  nestedObject.value.foo.bar.deep = 10
}, 3000)
</script>

<style scoped>

</style>
