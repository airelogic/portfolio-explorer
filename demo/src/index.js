import React, {Component} from 'react'
import {render} from 'react-dom'

import PortfolioExplorer from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Portfolio Explorer Demo</h1>
      <PortfolioExplorer/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
