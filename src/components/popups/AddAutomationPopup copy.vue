<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { useAutomationsStore } from '@/stores/automations'
const emit = defineEmits<{
  (e: 'close'): void
}>()
const automationName = ref('')
const automationDescription = ref('')
const automationCode = ref('')
const automationsStore = useAutomationsStore()

function submitAutomation() {
  console.log("submitAutomation")
  automationsStore.setAutomation(automationName.value, automationDescription.value, automationCode.value)
  emit('close')
}
</script>
<template>
  <div
    @click="$emit('close')"
    class="absolute right-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-black opacity-20"
  />
  <div class="absolute left-9 top-28">
    <div class="popup dark:border-light-100 bg-base-light-100 p-5 text-black dark:bg-base-dark rounded">
      <h2 class="text-base dark:text-accent">Add m8:</h2>
      <div class="mx-2 my-1">
        <p class="my-1 text-xs dark:text-accent">Name</p>
        <input
          v-model="automationName"
          class="h-5 w-full rounded p-3 dark:border dark:border-accent dark:text-accent"
          type="text"
          placeholder="Name your automation..."
        />
      </div>
      <div class="mx-2 my-1">
        <p class="my-1 text-xs dark:text-accent">Description</p>
        <textarea
          v-model="automationDescription"
          class="h-10 w-full resize-none rounded p-1 dark:border dark:border-accent dark:text-accent"
          placeholder='Describe what does it do...'
        />
      </div>
      <div class="mx-2 my-1">
        <p class="my-1 text-xs dark:text-accent">Code</p>
        <textarea
          v-model="automationCode"
          class="h-10 w-full rounded p-1 dark:border dark:border-accent dark:text-accent"
          placeholder='Write the code you want to execute...'
        />
      </div>
      <div class="mx-2 my-4">
        <button @click="submitAutomation" class="flex justify-center items-center rounded-lg bg-accent dark:bg-base-light-200 w-full h-4 hover:opacity-90"><img class="h-3 w-3" src="@/assets/plus.svg"></button>
      </div>
    </div>
  </div>
</template>
