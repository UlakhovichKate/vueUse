<script setup>
import { createReusableTemplate } from '@vueuse/core'

let data = 'First line';
let anotherData = 'Second line';
let something = 'Third line';

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <h2>Create Reusable Template</h2>
  <DefineTemplate v-slot="{ data, msg, anything }">
    <div>{{ data }} passed from usage. {{ msg }}</div>
  </DefineTemplate>

  <ReuseTemplate :data="data" msg="The first usage" />
  <ReuseTemplate :data="anotherData" msg="The second usage" />
  <ReuseTemplate v-bind="{ data: something, msg: 'The third' }" />
</template>
