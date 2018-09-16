import React, {Component} from 'react'
import {render} from 'react-dom'

import { CoolButton } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-cool-button Demo</h1>
      <CoolButton>Cool</CoolButton>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
