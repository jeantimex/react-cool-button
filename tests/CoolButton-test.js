import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { CoolButton } from 'src/'

describe('CoolButton', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('should render the CoolButton', () => {
    render(<CoolButton>Cool</CoolButton>, node, () => {
      expect(node.innerHTML).toContain('Cool')
    })
  })
})
