<template lang='pug'>
h1(v-text='name')
slot
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String
  }
})
</script>
