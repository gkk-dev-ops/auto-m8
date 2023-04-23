<template>
  <div
    @click="$emit('close')"
    class="absolute right-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-black opacity-20"
  />
  <div class="absolute left-9 top-28">
    <div class="popup dark:border-light-100 bg-base-light-100 p-5 text-black dark:bg-base-dark rounded">
        <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.popup {
  width: 320px;
  height: 270px;
}
</style>
