<template>
  <main>
    <create-global-state></create-global-state>
    <create-injection-state></create-injection-state>
    <create-shared-composable></create-shared-composable>
    <use-async-state></use-async-state>
    <use-debounced-ref-history></use-debounced-ref-history>
    <use-last-changed></use-last-changed>
  </main>
</template>

<script setup>
  import createGlobalState from './vueUseComponents/CreateGlobalState.vue'
  import CreateInjectionState from './vueUseComponents/CreateInjectionState.vue'
  import CreateSharedComposable from './vueUseComponents/CreateSharedComposable.vue'
  import UseAsyncState from './vueUseComponents/UseAsyncState.vue'
  import UseDebouncedRefHistory from './vueUseComponents/UseDebouncedRefHistory.vue'
  import UseLastChanged from './vueUseComponents/UseLastChanged.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
