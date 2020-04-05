<template lang='pug'>
header.bois-nav-header
  router-link(:to='title.to' v-text='title.name')
  span(v-if='subtitle' v-text='subtitle')
  Nav.squish(v-if='links' v-bind='{ links }')
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { AOrRouterLink, Nav } from '@/components'
import { NamedLinkable, NamedRouterLinkable } from '@/types'
import 'destyle.css'

export default defineComponent({
  components: {
    AOrRouterLink,
    Nav
  },
  props: {
    title: {
      type: Object as () => NamedRouterLinkable,
      required: true
    },
    subtitle: String,
    links: Array as () => NamedLinkable[]
  },
  methods: {
    isUrl(link: string): boolean {
      return /(https?:)?\/\/.*/.test(link)
    }
  }
})
</script>

<style scoped lang='stylus'>
header
  background-color $cbp
  border-bottom 1px solid $c
  flexed(alignItems: center)
  padding $g2
  > :nth-last-child(2)
    flex 1

a
  font-weight $fwh

span
  font-style italic
</style>
