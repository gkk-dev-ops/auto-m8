<template>
  <img
    src="@/assets/copy.svg"
    class="absolute right-8 top-16 z-10 cursor-pointer rounded p-1 hover:bg-base-light-200/60 hover:opacity-80"
    @click="copyCode"
  />
  <pre
    class="w-full overflow-auto rounded-md bg-gray-800 p-4 pt-8 text-white"
    v-html="highlightedCode"
  />
</template>
<script setup lang="ts">
import { ref, watch, onMounted, defineProps } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})
const highlightedCode = ref<string>('')

const highlightCode = () => {
  highlightedCode.value = Prism.highlight(props.code, Prism.languages.javascript, 'javascript')
}

watch(() => props.code, highlightCode, { immediate: true })

onMounted(highlightCode)
function copyCode() {
  navigator.clipboard.writeText(props.code)
}
</script>
