<script setup lang="ts"></script>

<template>
  <div class="flex w-full justify-center">
    <div class="w-96">
      <FormKit
        type="pick"
        name="status"
        label="Status"
        :items="[
          { value: 'good', label: 'Good' },
          { value: 'bad', label: 'Bad' },
        ]"
        validation="required"
      >
        <template #selection="{ label }">
          <span v-if="label">{{ label }}</span>
          <span v-else>Select</span>
        </template>
        <template #option="{ label }">
          <span>{{ label }}</span>
        </template>
      </FormKit>
    </div>
  </div>
</template>
