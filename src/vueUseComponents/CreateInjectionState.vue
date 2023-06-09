<script setup lang="ts">
    import RootComponent from './../components/RootComponent.vue'
    import CountComponent from './../components/CountComponent.vue'
    import ButtonComponent from './../components/ButtonComponent.vue'
</script>

<template>
    <h2>Create injection state</h2>
    <div>
        <RootComponent>
            <ButtonComponent />
            <CountComponent />
        </RootComponent>
    </div>
</template>