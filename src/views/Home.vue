<template lang='pug'>
Nav(v-bind='{ title, links }')
main
  p the bois are ui components
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { Nav } from '@/components'

export default defineComponent({
  components: {
    Nav
  },
  data() {
    return {
      title: { name: 'Bois', to: '/' },
      links: [
        { name: 'GitHub', href: 'https://github.com/replygirl/bois' }
      ]
    }
  }
})
</script>

<style scoped lang='stylus'>
main
  padding $g4 $g2
</style>
