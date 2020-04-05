<template lang='pug'>
nav.bois-nav
  router-link(:to='title.to')
    h1(v-text='title.name')
  ul(v-if='links')
    li(v-for='l in links' :key='l.name')
      AOrRouterLink(:linkable='l' v-text='l.name')
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { AOrRouterLink } from '@/components'
import { NamedLinkable, NamedRouterLinkable } from '@/types'
import 'destyle.css'

export default defineComponent({
  components: {
    AOrRouterLink
  },
  props: {
    title: {
      type: Object as () => NamedRouterLinkable,
      required: true
    },
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
nav
  border-bottom 1px solid $c
  display flex
  align-items center
  padding $g2
  > a
    flex 1

ul
  margin-left $g2
  display flex

li
  + li
    margin-left -1px
  a
    button()
    display inline-block
</style>
