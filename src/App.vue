<template lang='pug'>
#app
  NavHeader(v-bind='navHeaderProps')
  router-view
</template>

<script>
import { defineComponent } from 'vue'
import { NavHeader } from '@/components'
import 'destyle.css'

export default defineComponent({
  components: {
    NavHeader
  },
  data() {
    return {
      navHeaderProps: {
        title: { name: 'Bois', to: '/' },
        subtitle: 'Chill components',
        links: [
          { name: 'GitHub', href: 'https://github.com/replygirl/bois' }
        ]
      }
    }
  }
})
</script>

<style lang='stylus'>
:root
  --bois-background-color-page cornsilk
  background-color $cbp

#app
  font-family 'IBM Plex Mono', monospace

main
  padding $g4 $g2
  > * + *
    margin-top $g4
</style>
