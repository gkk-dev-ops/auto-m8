<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  msg: string
}>()

function tmp() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs: chrome.tabs.Tab[]) {
    // `tabs` is an array of Tab objects representing the currently active tabs
    const activeTab = tabs[0]
    console.log(activeTab)

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id ?? 0 },
      func: () => console.log('Hello world!')
    })
  })
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <button @click="tmp">Click me</button>
  </div>
</template>
