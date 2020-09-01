import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './'

it('renders correctly', (): void => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('joins default class with className prop', (): void => {
  const { root } = renderer.create(<Button className='button' />)

  expect(root.findByType('button').props.className).toEqual('uc-button button')
})

it('sets CSS vars with props', (): void => {
  const { root } = renderer.create(
    <Button fontSize={2} backgroundColor='#d36ac2' style={{ margin: 20 }} />
  )
  const { style } = root.findByType('button').props

  expect(style).toEqual({
    '--uc-font-size': '2rem',
    '--uc-background-color': '#d36ac2',
    margin: 20,
  })
})
