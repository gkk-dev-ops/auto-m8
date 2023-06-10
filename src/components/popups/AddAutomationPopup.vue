<script setup lang="ts">
import { defineEmits, reactive } from 'vue'
import { useAutomationsStore } from '@/stores/automations'
import popupSkeleton from './popupSkeleton.vue'
import type {automationItem} from '@/types/types'

const emit = defineEmits<{
  (e: 'close'): void
}>()
const automationsStore = useAutomationsStore()
const automation: automationItem = reactive({
  name: '',
  description: '',
  code: ''
})

function submitAutomation() {
  Object.values(automation).includes('')
    ? alert('Please fill all the fields')
    : automationsStore.setAutomation(automation)
  emit('close')
}
</script>
<template>
  <popupSkeleton @close="$emit('close')">
    <div class="mx-2 mb-1">
      <p class="text-base dark:text-accent mb-4">Add m8:</p>
      <p class="my-1 text-xs dark:text-accent">Name</p>
      <input
        v-model="automation.name"
        class="h-5 w-full rounded p-3 dark:border dark:border-accent dark:text-accent"
        type="text"
        placeholder="Name your automation..."
      />
    </div>
    <div class="mx-2 my-1">
      <p class="my-1 text-xs dark:text-accent">Description</p>
      <textarea
        v-model="automation.description"
        class="h-10 w-full resize-none rounded p-1 dark:border dark:border-accent dark:text-accent"
        placeholder="Describe what does it do..."
      />
    </div>
    <div class="mx-2 my-1">
      <p class="my-1 text-xs dark:text-accent">Code</p>
      <textarea
        v-model="automation.code"
        class="h-10 min-h-10 max-h-52 w-full rounded p-1 dark:border dark:border-accent dark:text-accent"
        placeholder="Write the code you want to execute..."
      />
    </div>
    <div class="mx-2 my-4">
      <button
        @click="submitAutomation"
        class="flex h-4 w-full items-center justify-center rounded-lg bg-accent hover:opacity-90 dark:bg-base-light-200"
      >
        <img class="h-3 w-3" src="@/assets/plus.svg" />
      </button>
    </div>
  </popupSkeleton>
</template>
