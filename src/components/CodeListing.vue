<template>
  <pre
    e
    class="p-4 bg-gray-800 text-white rounded-md overflow-auto w-full"
    v-html="highlightedCode"
  ></pre>
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

    return {
      highlightedCode
    }
  }
}
</script>
