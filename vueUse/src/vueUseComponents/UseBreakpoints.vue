<template>
  <h2>Use Breakpoints</h2>
  <div class="font-mono">
    <div> Current breakpoints: {{ current }} </div>
    <div> xs(&lt;{{ smWidth }}px): {{ xs }}</div>
    <div> xs(&lt;={{ smWidth }}px): {{ xse }}</div>
    <div> sm: {{ sm }}</div>
    <div> md: {{ md }}</div>
    <div> lg: {{ lg }}</div>
    <div> xl: {{ xl }}</div>
    <div>2xl: {{ xxl }}</div>
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const smWidth = breakpointsTailwind.sm

const current = breakpoints.current()
const xs = breakpoints.smaller('sm')
const xse = breakpoints.smallerOrEqual('sm')
const sm = breakpoints.between('sm', 'md')
const md = breakpoints.between('md', 'lg')
const lg = breakpoints.between('lg', 'xl')
const xl = breakpoints.between('xl', '2xl')
const xxl = breakpoints['2xl']
</script>

<style scoped>

</style>
