import React, {Component} from 'react'
import {render} from 'react-dom'
import PortfolioExplorer from '../../src/PortfolioExplorer';

const PORTFOLIO = [
  {title: 'AAA', scale: '$49.99', stocked: true, name: 'Football'},
  {title: 'BBB', scale: '$49.99', stocked: true, name: 'Football'},
  {title: 'CCC', scale: '$49.99', stocked: true, name: 'Football'},
  {title: 'DDD', scale: '$49.99', stocked: true, name: 'Football'},
  {title: 'EEE', scale: '$49.99', stocked: true, name: 'Football'},
  {title: 'FFF', scale: '$49.99', stocked: true, name: 'Football'},
  {title: 'GGG', scale: '$49.99', stocked: true, name: 'Football'},
];

class Demo extends Component {
  render() {    
    return <div>
      <h1>Portfolio Explorer Demo</h1>
      <PortfolioExplorer portfolio={PORTFOLIO} title="My great portfolio" />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
