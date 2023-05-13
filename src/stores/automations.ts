import { ref, type Ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { automationItem } from '@/types/types'

export const useAutomationsStore = defineStore('automations', () => {
  const automationsStorage = localStorage.getItem('automations')
  let parsedAutomationsStorage: Array<automationItem> = []
  if (automationsStorage) {
    parsedAutomationsStorage = JSON.parse(automationsStorage)
  }
  const automations: Ref<Array<automationItem>> = ref(parsedAutomationsStorage)
  const amountOfAutomations = computed(() => automations.value.length)

  function setAutomation(name: string, description: string, code: string) {
    automations.value.push({ name, description, code })
    localStorage.setItem('automations', JSON.stringify(automations.value))
  }

  function removeAutomation(name: string) {
    automations.value = automations.value.filter((n) => {
      return n.name !== name
    })
    localStorage.setItem('automations', JSON.stringify(automations.value))
  }

  return { automations, amountOfAutomations, setAutomation, removeAutomation }
})
