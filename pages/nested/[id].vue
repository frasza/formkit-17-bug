<script setup lang="ts">
const route = useRoute()

const tabs = [
  {
    name: 'Test',
    route: 'nested-id',
  },
  {
    name: 'Error',
    route: 'nested-id-error',
  },
]
</script>

<template>
  <div class="flex h-full">
    <div class="flex w-full rounded-lg">
      <TabGroup as="div" class="flex grow flex-col gap-4">
        <TabList class="flex flex-wrap justify-between gap-2 text-sm font-medium">
          <div class="flex flex-wrap justify-between gap-2 text-sm font-medium">
            <Tab v-for="tab in tabs" :key="tab.name">
              <NuxtLink
                class="-mb-px inline-block border-b-2 p-4"
                :class="{
                  'border-primary': tab.route === route.name,
                  'border-transparent hover:border-gray-300':
                    tab.route !== route.name,
                }"
                :to="{ name: tab.route, params: { id: route.params.id } }"
              >
                {{ tab.name }}
              </NuxtLink>
            </Tab>
          </div>
        </TabList>
        <div class="flex grow overflow-y-auto">
          <NuxtPage />
        </div>
      </TabGroup>
    </div>
  </div>
</template>
