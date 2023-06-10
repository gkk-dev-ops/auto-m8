<script setup lang="ts">
import AddAutomationPopup from './popups/AddAutomationPopup.vue'
import { RouterLink } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark()
const isAddPopUpVisible = ref(false)
const toggleDark = useToggle(isDark)

function openAddAutomationPopup() {
  isAddPopUpVisible.value = !isAddPopUpVisible.value
}
</script>
<template>
  <AddAutomationPopup @close="openAddAutomationPopup" v-if="isAddPopUpVisible" />
  <div class="flex flex-col">
    <div class="flex flex-row justify-between">
      <div class="mb-4"><h1 class="text-2xl dark:text-accent">AUTO M8</h1></div>
      <div class="flex flex-row gap-2">
        <div
          @click="toggleDark()"
          class="
            flex
            h-7
            hover:opacity-80
            w-7
            cursor-pointer
            justify-center
            rounded-lg
            bg-accent
            align-middle
            dark:bg-base-light-200
          "
        >
          <img class="w-4" src="../assets/sun.svg" />
        </div>
        <div
          @click="openAddAutomationPopup"
          class="
            flex
            h-7
            w-7
            hover:opacity-80
            cursor-pointer
            justify-center
            rounded-lg
            bg-accent
            align-middle
            dark:bg-base-light-200
          "
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
