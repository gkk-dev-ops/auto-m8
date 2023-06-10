<template>
  <div class="flex flex-col rounded gap-4">
    <p class="text-base mt-4 dark:text-base-light-200">Export</p>
    <button
      :disabled="!automationsStore.automations.length"
      @click="downloadAutomations"
      @keypress="downloadAutomations"
      class="
      mx-auto
      text-sm dark:text-base-light-200
      h-6
      w-72
      rounded-lg
      bg-base-light-200
      px-4
      dark:bg-accent
    "
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
  <div class="flex flex-col rounded gap-4">
    <p class="text-base mt-4 dark:text-base-light-200">Import</p>
    <p v-if="importingError" class="text-xs mt-4 dark:text-red-600 opacity-40">{{ importingError }}</p>
    <input type="file" @change="handleFileUpload" class="dark:text-base-light-200 file:dark:text-base-light-200 mx-auto" accept=".json" />
  </div>
  <div class="mt-8">
    <p class="italic text-sm dark:text-base-light-200">
      More options will be available in next version...
    </p>
  </div>
</template>
<script setup lang="ts">
import { useAutomationsStore } from '@/stores/automations'
import { ref } from 'vue';
import type { automationItem } from '@/types/types';
const automationsStore = useAutomationsStore()
const importingError = ref('')

handleFileUpload
function downloadAutomations() {
  const data = JSON.stringify(automationsStore.automations);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'automations.json');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handleFileUpload(event: Event): void {
  const fileInput: HTMLInputElement = event.target as HTMLInputElement;
  const file: File | undefined = fileInput.files?.[0];

  if (file) {
    const reader: FileReader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const content = e.target?.result;
      if (content && typeof content === 'string') {
        try {
          const automations: automationItem[] = JSON.parse(content);
          automations.forEach((automation) => {
            automationsStore.setAutomation(automation);
          });
        } catch (error) {
          importingError.value = 'Error parsing JSON file';
        }
      }
    };
    reader.readAsText(file);
  }
}</script>
