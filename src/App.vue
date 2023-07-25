<template>
  <aside>
    <nav>
      <router-link :to="{ name: 'showListState' }" class="nav__item nav__item_home">State</router-link>
      <router-link :to="{ name: 'showListElements' }" class="nav__item nav__item_home">Elements</router-link>
      <router-link :to="{ name: 'showListBrowser' }" class="nav__item nav__item_home">Browser</router-link>
      <router-link :to="{ name: 'showListSensors' }" class="nav__item nav__item_home">Sensors</router-link>
      <router-link :to="{ name: 'showListNetwork' }" class="nav__item nav__item_home">Network</router-link>
      <router-link :to="{ name: 'showListAnimation' }" class="nav__item nav__item_home">Animate</router-link>
      <router-link :to="{ name: 'showListComponents' }" class="nav__item nav__item_home">Components</router-link>
      <router-link :to="{ name: 'showListWatch' }" class="nav__item nav__item_home">Watch</router-link>
      <router-link :to="{ name: 'showListReactivity' }" class="nav__item nav__item_home">Reactivity</router-link>
      <router-link :to="{ name: 'showListArray' }" class="nav__item nav__item_home">Array</router-link>
      <router-link :to="{ name: 'showListTime' }" class="nav__item nav__item_home">Time</router-link>
      <router-link :to="{ name: 'showListUtilities' }" class="nav__item nav__item_home">Utilities</router-link>
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
