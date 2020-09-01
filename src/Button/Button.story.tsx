import React, { FC } from 'react'
import { number, color } from '@storybook/addon-knobs'
import { Button } from './'

const sizeOptions = {
  range: true,
  min: 0.125,
  max: 4,
  step: 0.005,
}

export default {
  component: Button,
  title: 'Button',
}

export const basic: FC = () => <Button>Basic</Button>

export const custom: FC = () => (
  <Button
    fontSize={number('Size', 1, sizeOptions)}
    backgroundColor={color('Color', '#d36ac2')}
  >
    Custom
  </Button>
)
