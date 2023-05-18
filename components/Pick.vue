<script setup lang="ts">
const props = defineProps({
  context: {
    type: Object,
    required: true,
  },
})

const items: Ref<Array<Record<string | number, unknown>>> = toRef(props.context, 'items')
const valueKey = ref<number | string>(props.context.valueKey || 'value')
const selectedItem = ref<Record<string | number, unknown>>()

function selectItem(item: Record<string | number, unknown>) {
  props.context?.node.input(item[valueKey.value])
}

async function handleScroll(e: Event) {
  const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLInputElement
  if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
    props.context?.node.emit('scrollToBottom')
  }
}

watch(items, () => {
  // Select value by default if provided when using input
  if (items.value && items.value.length > 0 && props.context.value) {
    const itemValue = items.value.find(
      item => item[valueKey.value] === props.context.value,
    )

    if (!itemValue) {
      return
    }

    selectedItem.value = itemValue
  }
})
</script>

<template>
  <Listbox v-model="selectedItem" as="div" :disabled="context.disabled">
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full cursor-default rounded-md border border-gray-200 bg-white py-3 pl-1 pr-10 text-left focus:border-transparent focus:outline focus:outline-2 focus:outline-primary disabled:bg-gray-100 dark:border-gray-700 dark:bg-dark-secondary/20 dark:disabled:bg-gray-800/40 sm:text-sm"
      >
        <span class="flex items-start">
          <span class="ml-3 block truncate">
            <component :is="context.slots.selection" v-bind="selectedItem" />
          </span>
        </span>
        <span
          v-if="!context.disabled"
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <Icon name="tabler:chevron-down" size="20" color="#9ca3af" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-dark-secondary sm:text-sm"
          @scroll="handleScroll"
        >
          <ListboxOption
            v-for="(item, index) in items"
            :key="index"
            v-slot="{ active, selected }"
            :value="item"
            as="template"
            @click="selectItem(item)"
          >
            <li
              class="relative cursor-default select-none rounded-md py-2 pl-3 pr-9 dark:text-white" :class="[
                active ? 'bg-primary text-white' : 'text-default',
              ]"
            >
              <div class="flex items-center">
                <span
                  class="ml-3 block truncate" :class="[
                    selected ? 'font-semibold' : 'font-normal',
                  ]"
                >
                  <component :is="context.slots.option" v-bind="item" />
                </span>
              </div>

              <span
                v-if="selected"
                class="absolute inset-y-0 right-0 flex items-center pr-4" :class="[
                  active ? 'text-white' : 'text-primary',
                ]"
              >
                <Icon name="tabler:check" size="20" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
