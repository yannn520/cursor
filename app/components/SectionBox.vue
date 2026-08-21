<template>
  <section class="overflow-hidden rounded-2xl bg-neutral-50/50 p-8">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>

</style>
