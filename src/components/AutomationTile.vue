<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { cutAtLength } from '@/utils/strings'
import { useAutomationsStore } from '@/stores/automations'
import popupSkeleton from './popups/popupSkeleton.vue'
import CodeListing from './CodeListing.vue'

const props = defineProps({
  automationItem: {
    type: Object,
    required: true
  }
})
const isRunningScript = ref(false)
const automationsStore = useAutomationsStore()
const showCode = ref(false)
const showDescription = ref(false)
function toogleCode() {
  showCode.value = !showCode.value
}
function toogleDescription() {
  showDescription.value = !showDescription.value
}

function injectCode() {
  isRunningScript.value = true
  const code = props.automationItem.code.toString()
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: chrome.tabs.Tab[]) {
    const activeTab = tabs[0]
    chrome.tabs.executeScript(activeTab.id ?? 0, { code: code }, scriptResult)
  })
}
function scriptResult(results: any[]) {
  console.info('results: ', results)
  isRunningScript.value = false
}
</script>
<template>
  <div
    class="
      flex
      h-11
      w-80
      flex-row
      items-center
      justify-between
      rounded
      bg-base-light-200
      px-4
      dark:bg-accent
    "
  >
    <div>
      <div
        class="
          max-w-36
          flex
          h-7
          items-center
          rounded-lg
          bg-accent
          p-2
          text-center
          dark:bg-base-light-200
        "
      >
        <p>{{ cutAtLength(props.automationItem.name, 21) }}</p>
      </div>
    </div>
    <div class="flex flex-row gap-2">
      <div
        @click="injectCode"
        class="
          flex
          h-7
          w-7
          items-center
          cursor-pointer
          justify-center
          rounded-lg
          hover:opacity-80
          bg-accent
          align-middle
          dark:bg-base-light-200
        "
      >
        <img v-if="!isRunningScript" class="w-4" src="../assets/car.svg" />
        <img v-else class="w-4 h-4 animate-spin" src="../assets/spinner.svg" />
      </div>
      <div
        @click="toogleDescription"
        class="
          flex
          h-7
          w-7
          cursor-pointer
          justify-center
          rounded-lg
          hover:opacity-80
          bg-accent
          align-middle
          dark:bg-base-light-200
        "
      >
        <img class="w-4" src="../assets/info.svg" />
      </div>
      <div
        @click="toogleCode"
        class="
          flex
          h-7
          w-7
          cursor-pointer
          justify-center
          rounded-lg
          hover:opacity-80
          bg-accent
          align-middle
          dark:bg-base-light-200
        "
      >
        <img class="w-4" src="../assets/code.svg" />
      </div>
      <div
        @click="automationsStore.removeAutomation(props.automationItem.name)"
        class="
          flex
          h-7
          w-7
          cursor-pointer
          justify-center
          rounded-lg
          hover:opacity-80
          bg-accent
          align-middle
          dark:bg-base-light-200
        "
      >
        <img class="w-4" src="../assets/trash.svg" />
      </div>
    </div>

    <popupSkeleton v-if="showCode" @close="toogleCode">
      <p class="text-2xl dark:text-accent">Automation code</p>
      <code-Listing class="mt-4" :code="props.automationItem.code"></code-Listing>
    </popupSkeleton>
    <popupSkeleton v-if="showDescription" @close="toogleDescription">
      <p class="text-2xl dark:text-accent">Automation description</p>
      <p class="mt-4 dark:text-accent">{{ props.automationItem.description }}</p>
    </popupSkeleton>
  </div>
</template>
