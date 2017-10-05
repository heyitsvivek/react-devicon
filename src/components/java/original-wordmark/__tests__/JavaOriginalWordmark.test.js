import React from 'react'
import renderer from 'react-test-renderer'
import JavaOriginalWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<JavaOriginalWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
