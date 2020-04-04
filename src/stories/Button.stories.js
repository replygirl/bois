import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '../components/Button.vue'

export default {
  component: Button,
  title: 'Button'
}

export const withText = () => ({
  components: { Button },
  template: '<Button @click="action">Hello Button</Button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <Button onClick={linkTo('Button', 'With Some Emoji')}>With JSX</Button>;
  }
})

export const withSomeEmoji = () => ({
  components: { Button },
  template: '<Button>😀 😎 👍 💯</Button>'
})
