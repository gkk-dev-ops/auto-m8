<template>
  <div class="flex flex-col gap-4 rounded">
    <p class="mt-4 text-base dark:text-base-light-200">Export</p>
    <button
      :disabled="!automationsStore.automations.length"
      @click="downloadAutomations"
      @keypress="downloadAutomations"
      class="mx-auto h-6 w-72 rounded-lg bg-base-light-200 px-4 text-sm dark:bg-accent dark:text-base-light-200"
      :class="{
        'opacity-40': !automationsStore.automations.length,
        'hover:opacity-80': automationsStore.automations.length
      }"
    >
      {{
        automationsStore.automations.length
          ? 'Export your automations'
          : 'Currently no automations to export'
      }}
    </button>
  </div>
  <div class="flex flex-col gap-4 rounded">
    <p class="mt-4 text-base dark:text-base-light-200">Import</p>
    <p v-if="importingError" class="mt-4 text-xs opacity-40 dark:text-red-600">
      {{ importingError }}
    </p>
    <input
      type="file"
      @change="handleFileUpload"
      class="mx-auto dark:text-base-light-200 file:dark:text-base-light-200"
      accept=".json"
    />
  </div>
  <div class="mt-8">
    <p class="text-sm italic dark:text-base-light-200">
      More options will be available in next version...
    </p>
  </div>
</template>
<script setup lang="ts">
import { useAutomationsStore } from '@/stores/automations'
import { ref } from 'vue'
import type { automationItem } from '@/types/types'
const automationsStore = useAutomationsStore()
const importingError = ref('')

handleFileUpload
function downloadAutomations() {
  const data = JSON.stringify(automationsStore.automations)
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'automations.json')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function handleFileUpload(event: Event): void {
  const fileInput: HTMLInputElement = event.target as HTMLInputElement
  const file: File | undefined = fileInput.files?.[0]

  if (file) {
    const reader: FileReader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const content = e.target?.result
      if (content && typeof content === 'string') {
        try {
          const automations: automationItem[] = JSON.parse(content)
          automations.forEach((automation) => {
            automationsStore.setAutomation(automation)
          })
        } catch (error) {
          importingError.value = 'Error parsing JSON file'
        }
      }
    }
    reader.readAsText(file)
  }
}
</script>
