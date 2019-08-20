import React, {Component} from 'react'
import {render} from 'react-dom'
import PortfolioExplorer from '../../src/PortfolioExplorer';
import data from './exampleData.json';

class Demo extends Component {
  render() {    
    return <React.Fragment>
      <PortfolioExplorer portfolio={data} title={data.portfolio} />
    </React.Fragment>
  }
}

render(<Demo/>, document.querySelector('#demo'))
