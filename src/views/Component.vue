<template lang='pug'>
h1(v-text='component')
component(:is='component') hi
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    Button
  },
  props: {
    component: {
      type: String,
      default: 'Button'
    }
  }
})
</script>
