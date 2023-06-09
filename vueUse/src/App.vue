<template>
  <aside>
    <nav>
      <router-link :to="{ name: 'showListState' }" class="nav__item nav__item_home">State</router-link>
      <router-link :to="{ name: 'showListComponents' }" class="nav__item nav__item_home">Components</router-link>
      <router-link :to="{ name: 'showListBrowser' }" class="nav__item nav__item_home">Browser</router-link>
      <router-link :to="{ name: 'showListSensors' }" class="nav__item nav__item_home">Sensors</router-link>
    </nav>
  </aside>
  <div>
    <router-view />
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
