<template lang='pug'>
Component(:name='$options.name')
  NavHeader(v-bind='navHeaderProps')
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { Component } from '@/layouts'
import { NavHeader } from '@/components'

export default defineComponent({
  name: 'NavHeader',
  components: {
    Component,
    NavHeader
  },
  data() {
    return {
      navHeaderProps: {
        title: { name: 'Bois', to: '/' },
        subtitle: 'Chill components',
        links: [
          { name: 'Buttons', to: '/components/button' },
          { name: 'Google', href: 'https://google.com' }
        ]
      }
    }
  }
})
</script>
