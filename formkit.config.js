import { generateClasses } from '@formkit/themes'
import { createInput } from '@formkit/vue'
import Pick from '@/components/Pick.vue'

export default {
  inputs: {
    pick: createInput(Pick, {
      props: ['items', 'valueKey'],
    }),
  },
  config: {
    classes: generateClasses({
      'pick': {
        label: 'block mb-1 text-sm font-bold',
      },
      'family:text': {
        label: 'font-bold',
        inner: 'w-full',
        input:
          'w-full py-2.5 px-4 border border-gray-200 rounded-md',
      },
    }),
  },
}
