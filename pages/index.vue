<script setup lang="ts"></script>

<template>
  <div class="flex w-full justify-center">
    <NuxtLink class="mt-10 text-xl text-red-800" :to="{ name: 'nested-id', params: { id: 1 } }">
      Go to the Bug section
    </NuxtLink>
  </div>
</template>
