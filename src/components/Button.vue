<template>
  <button class='button is-primary' @click='onClick'>
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  onClick() {
    this.$emit('click')
  }
})
</script>

<style scoped lang='stylus'>
button
  border 1px solid v(color)
  color v(color)
  cursor pointer
  font-size inherit
  line-height inherit
  padding 10px
</style>
