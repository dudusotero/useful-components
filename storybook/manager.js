import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

const theme = create({
  brandUrl: 'https://dudusotero.github.io/useful-components/',
})

addons.setConfig({
  theme,
})
