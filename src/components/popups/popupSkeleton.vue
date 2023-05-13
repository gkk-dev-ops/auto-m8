<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>
<template>
  <div
    class="absolute right-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-black opacity-20"
  />
  <div class="absolute left-9 top-28">
    <div
      class="popup dark:border-light-100 rounded bg-base-light-100 p-5 text-black dark:bg-base-dark"
    >
      <img
        v-if="isDark.valueOf()"
        class="ml-auto w-4 cursor-pointer"
        src="@/assets/close-accent.svg"
        @click="$emit('close')"
      />
      <img
        v-else
        class="ml-auto w-4 cursor-pointer"
        src="@/assets/close.svg"
        @click="$emit('close')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.popup {
  width: 320px;
  height: 270px;
}
</style>
