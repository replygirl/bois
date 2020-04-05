<template lang='pug'>
Component(:name='$options.name')
  Nav(v-bind='{ title, links }')
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { Component } from '@/layouts'
import { Nav } from '@/components'

export default defineComponent({
  name: 'Nav',
  components: {
    Component,
    Nav
  },
  data() {
    return {
      title: {
        name: 'Bois',
        to: '/'
      },
      links: [
        {
          name: 'Buttons',
          to: '/components/button'
        },
        {
          name: 'Google',
          href: 'https://google.com'
        }
      ]
    }
  }
})
</script>
