import { ref, type Ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { automationItem } from '@/types/types'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useAutomationsStore = defineStore('automations', () => {
  const automations: Ref<Array<automationItem>> = ref([])
  const amountOfAutomations = computed(() => automations.value.length)
  function setAutomation(name: string, description: string, code: string) {
    automations.value.push({ name, description, code })
  }
  function removeAutomation(name: string) {
    automations.value = automations.value.filter((n) => {
      return n.name !== name
    })
  }

  return { automations, amountOfAutomations, setAutomation, removeAutomation }
})
