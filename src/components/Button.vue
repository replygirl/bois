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

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
  color: red;
}
</style>
