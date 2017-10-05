import React from 'react'
import renderer from 'react-test-renderer'
import ChromePlainWordmark from '../index.js'

it('renders correctly', () => {
  const tree = renderer.create(<ChromePlainWordmark />).toJSON()
  expect(tree).toMatchSnapshot()
})
