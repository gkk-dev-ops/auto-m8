<script setup lang="ts">
import { ref } from 'vue'
import AutomationTile from '../components/AutomationTile.vue'
import { useAutomationsStore } from '@/stores/automations'
const automationsStore = useAutomationsStore()
const automationsCount = ref(automationsStore.amountOfAutomations)
</script>
<template>
  <div v-if="!automationsCount">
    <p class="t-no-automations my-4 text-sm dark:text-base-light-200">
      No automations currently available...
    </p>
  </div>
  <div v-else class="mx-5 my-4 flex flex-col gap-2">
    <div v-for="automation in automationsStore.automations" :key="automation.name">
      <AutomationTile :automationItem="automation"></AutomationTile>
    </div>
  </div>
</template>
