import React, { FC } from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { Button } from './'

export default {
  component: Button,
  title: 'Button',
}

export const Simple: FC = () => (
  <Button
    disabled={boolean('Disabled', false)}
    kind={select('Kind', ['contained', 'outlined', 'text'], 'contained')}
    size={select('Size', ['small', 'medium', 'large'], 'medium')}
    tier={select('Tier', ['primary', 'secondary'], 'primary')}
  >
    Simple
  </Button>
)
