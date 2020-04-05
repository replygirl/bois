<template lang='pug'>
button.bois-button(@click='onClick')
  slot
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import 'destyle.css'

export default defineComponent({
  onClick() {
    this.$emit('click')
  }
})
</script>

<style scoped lang='stylus'>
button
  border 1px solid $c
  color $c
  cursor pointer
  font-size inherit
  line-height inherit
  padding 10px
  transition all 75ms ease-out

  @media (hover: hover)
    &:hover
      transform translate($nd, $nd)
      box-shadow $d $d $c
</style>
