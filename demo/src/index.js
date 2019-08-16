import React, {Component} from 'react'
import {render} from 'react-dom'
import PortfolioExplorer from '../../src/PortfolioExplorer';

const PORTFOLIO = [
  {title: 'Lorem', scale: 1},
  {title: 'Ipsum ', scale: 2},
  {title: 'Dolor', scale: 3},
  {title: 'Sit', scale: 4},
  {title: 'Amet', scale: 5},
  {title: 'Consectetur', scale: 6},
  {title: 'Adipiscing ', scale: 7},
  {title: 'Elit', scale: 8},
  {title: 'Sed', scale: 9},
  {title: 'Eiusmod', scale: 10},
  {title: 'Reprehenderit', scale: 11},
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
