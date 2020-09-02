import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './'
import { defaultProps } from './Button.types'

it('renders correctly', (): void => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Button className='button' />)

  expect(root.findByType('button').props.className).toEqual(
    'artio-button button'
  )
})

it('check the default values', (): void => {
  const { root } = renderer.create(<Button />)
  const buttonProps = root.findByType('button').props

  expect([
    buttonProps['data-kind'],
    buttonProps['data-size'],
    buttonProps['data-tier'],
  ]).toEqual([defaultProps.kind, defaultProps.size, defaultProps.tier])
})
