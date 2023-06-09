<template>
  <div class="page page_not-found">
    <div class="page__content-wrapper">
      <div class="content">
        <div class="content__title">Page not found</div>
        <button type="button" @click="$router.back()">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.page {
  display: grid;
  flex: 1 1;
  place-content: center;
}

.content {
  overflow: hidden;
  position: relative;
  display: grid;
  row-gap: 1.4375rem;
  align-content: center;
  justify-items: center;
  min-width: 39.4375rem;
  min-height: 11.5625rem;
  background: #ffffff;
  border-radius: 1.25rem;
}
</style>
