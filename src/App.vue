<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
</script>

<template>
  <div class="wrapper">
    <div class="mx-4 my-4">
      <NavbarItem />
      <RouterView />
    </div>
  </div>
</template>

<style>
.wrapper {
  margin: auto 0;
  min-height: 600px;
  min-width: 375px;
}

html.dark {
  color-scheme: dark;
}

body {
  @apply bg-base-light-100 text-black dark:bg-base-dark;
}
</style>
