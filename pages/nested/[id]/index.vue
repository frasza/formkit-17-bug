<script setup lang="ts">
</script>

<template>
  <div>
    <NuxtLink :to="{ name: 'nested-id-error', params: { id: 1 } }">
      Reproduction: Go to Error tab, select input and click back on Test tab
    </NuxtLink>
  </div>
</template>
