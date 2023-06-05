<script setup lang="ts"></script>

<template>
  <div class="flex w-full justify-center">
    <NuxtLink :to="{ name: 'nested-id', params: { id: 1 } }">
      Bug report
    </NuxtLink>
  </div>
</template>
