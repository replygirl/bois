<template lang='pug'>
main
  p the bois are ui components
  Nav(:links='componentRoutes')
    p: i Check em out:
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Nav } from '@/components'

import type { RouteRecord } from 'vue-router'
import type { Named, NamedRouterLinkable } from '@/types'

export default defineComponent({
  components: {
    Nav
  },
  setup() {
    const componentRoutes = useRouter()
      .getRoutes()
      .filter(({ path }: RouteRecord) => path.startsWith('/components/'))
      .map(({ name, path }: Named<RouteRecord>): NamedRouterLinkable => ({ name, to: path }))

    return {
      componentRoutes
    }
  }
})
</script>
