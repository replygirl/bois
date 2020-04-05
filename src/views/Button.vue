<template lang='pug'>
Component(name='Button')
  Button hi
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { Component } from '@/layouts'
import { Button } from '@/components'

export default defineComponent({
  components: {
    Component,
    Button
  }
})
</script>
