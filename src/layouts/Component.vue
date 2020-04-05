<template lang='pug'>
main
  h1(v-text='name')
  section.slot: slot
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { H1 } from '@/components'

export default defineComponent({
  components: {
    H1
  },
  props: {
    name: String
  }
})
</script>

<style lang='stylus'>
.slot
  box($g4)
  background repeating-linear-gradient(
    -45deg,
    $cbp,
    $cbp 10px,
    $cb 10px,
    $cb 20px
  )
</style>
