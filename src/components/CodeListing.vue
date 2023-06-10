<template>
    <img src="@/assets/copy.svg" class="absolute p-1 top-16 right-8 cursor-pointer rounded hover:opacity-80 hover:bg-base-light-200/60 z-10" @click="copyCode">
    <pre
    class="p-4 pt-8 bg-gray-800 text-white rounded-md overflow-auto w-full"
    v-html="highlightedCode"
    />
</template>

<script lang="ts">
import { ref, watch, onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'

export default {
  props: {
    code: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const highlightedCode = ref<string>('')

    const highlightCode = () => {
      highlightedCode.value = Prism.highlight(props.code, Prism.languages.javascript, 'javascript')
    }

    watch(() => props.code, highlightCode, { immediate: true })

    onMounted(highlightCode)
    function copyCode() {
    navigator.clipboard.writeText(props.code)
    }
    return {
      highlightedCode, copyCode
    }
  }
}
</script>
