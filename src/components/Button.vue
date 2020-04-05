<template lang='pug'>
button.bois-button(@click='onClick')
  slot
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import 'destyle.css'

export default defineComponent({
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
})
</script>

<style scoped lang='stylus'>
button
  button()
</style>
