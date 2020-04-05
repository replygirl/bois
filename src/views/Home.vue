<template lang='pug'>
.hello
  h1(v-text='msg || "hi"')
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  props: {
    msg: String
  }
})
</script>
