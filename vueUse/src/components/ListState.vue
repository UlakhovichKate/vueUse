<template>
  <create-global-state/>
  <create-injection-state/>
  <create-shared-composable/>
  <use-async-state/>
  <use-debounced-ref-history/>
  <use-manual-ref-history/>
  <use-ref-history/>
  <use-last-changed/>
  <use-storage/>
  <use-session-storage/>
</template>

<script setup>
import createGlobalState from '../vueUseComponents/CreateGlobalState.vue'
import CreateInjectionState from '../vueUseComponents/CreateInjectionState.vue'
import CreateSharedComposable from '../vueUseComponents/CreateSharedComposable.vue'
import UseAsyncState from '../vueUseComponents/UseAsyncState.vue'
import UseDebouncedRefHistory from '../vueUseComponents/UseDebouncedRefHistory.vue'
import UseLastChanged from '../vueUseComponents/UseLastChanged.vue'
import UseStorage from '../vueUseComponents/UseStorage.vue'
import UseSessionStorage from '../vueUseComponents/UseSessionStorage.vue'
import UseRefHistory from '../vueUseComponents/UseRefHistory.vue'
import UseManualRefHistory from '../vueUseComponents/UseManualRefHistory.vue'
</script>

<style scoped>

</style>
