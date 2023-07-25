<script setup lang="ts">
import { useGeolocation } from '@vueuse/core'

const { coords, locatedAt, error, resume, pause } = useGeolocation()
</script>

<template>
  <h2>Use Geolocation</h2>
  <div>
    <pre lang="json">{{
        JSON.stringify(
            {
              coords: {
                accuracy: coords.accuracy,
                latitude: coords.latitude,
                longitude: coords.longitude,
                altitude: coords.altitude,
                altitudeAccuracy: coords.altitudeAccuracy,
                heading: coords.heading,
                speed: coords.speed,
              },
              locatedAt,
              error: error ? error.message : error,
            },
            null,
            2,
        )
      }}</pre>
    <button @click="pause" class="btn btn-outline-primary">
      Pause watch
    </button>
    <button @click="resume" class="btn btn-primary">
      Start watch
    </button>
  </div>
</template>
