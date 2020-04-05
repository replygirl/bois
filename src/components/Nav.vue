<template lang='pug'>
nav.bois-nav
  slot
  ul
    li(v-for='l in links' :key='l.name')
      AOrRouterLink(:linkable='l' v-text='l.name')
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { AOrRouterLink } from '@/components'
import { NamedLinkable } from '@/types'

export default defineComponent({
  components: {
    AOrRouterLink
  },
  props: {
    links: {
      type: Array as () => NamedLinkable[],
      required: true
    }
  }
})
</script>

<style lang='stylus'>
nav
  flexed-column()

ul
  flexed(flexWrap: wrap, hGap: $g)

  li
    /.squish &:not(:last-child)
      margin-right -1px
    a
      button()
      display inline-block
</style>
