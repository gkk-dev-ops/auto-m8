<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

function openAddAutomationPopup() {
  console.log('openAddAutomationPopup')
}
</script>
npm i @vueuse/core
<template>
  <div class="flex flex-col">
    <div class="flex flex-row justify-between">
      <div><h1 class="text-2xl dark:text-accent">AUTO M8</h1></div>
      <div class="flex flex-row gap-2">
        <div
          @click="toggleDark()"
          class="flex h-7 w-7 cursor-pointer justify-center rounded-xl bg-accent align-middle dark:bg-base-light-200"
        >
          <img class="w-4" src="../assets/sun.svg" />
        </div>
        <div
          @click="openAddAutomationPopup"
          class="flex h-7 w-7 cursor-pointer justify-center rounded-xl bg-accent align-middle dark:bg-base-light-200"
        >
          <img class="w-4" src="../assets/plus.svg" />
        </div>
      </div>
    </div>
    <div class="my-1 flex flex-row gap-2">
      <RouterLink class="text-xs dark:text-base-light-200" :active-class="'underline'" to="/"
        >Dashboard</RouterLink
      >
      <RouterLink
        class="text-xs dark:text-base-light-200"
        :active-class="'underline'"
        to="/settings"
        >Settings</RouterLink
      >
    </div>
  </div>
</template>
