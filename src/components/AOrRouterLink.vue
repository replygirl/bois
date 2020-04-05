<template lang='pug'>
a.bois-a(v-if='isUrl' :href='linkable.href')
  slot
router-link.bois-router-link(v-else :to='linkable.to')
  slot
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { Linkable } from '@/types'
import 'destyle.css'

export default defineComponent({
  props: {
    linkable: {
      type: Object as () => Linkable,
      required: true
    }
  },
  setup({ linkable }) {
    return {
      isUrl: computed(() => !!linkable.href)
    }
  }
})
</script>

<style scoped lang='stylus'>
</style>
