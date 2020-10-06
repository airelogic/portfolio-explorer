import React, {Component} from 'react'
import {render} from 'react-dom'
import PortfolioExplorer from '../../src/PortfolioExplorer';
import exampleDataA from './exampleDataA.json';
import exampleDataB from './exampleDataB.json';
import exampleDataC from './exampleDataC.json';

class Demo extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data: exampleDataA,
          dataSource: "A"
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.demoAreaOnClick = this.demoAreaOnClick.bind(this);
      this.demoPortfolioGroupOnClick = this.demoPortfolioGroupOnClick.bind(this);
      this.demoOversightOnClick = this.demoOversightOnClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const aorb = target.value;
    this.setState({
        dataSource: aorb,
        data: aorb == "A" ? exampleDataA :  (aorb == "B" ? exampleDataB : exampleDataC)
    });
}

demoAreaOnClick(areaId) {
  console.log('Area clicked: ' + areaId);
}

demoOversightOnClick(id) {
  console.log('Portfolio oversight clicked: ' + id);
}

demoPortfolioGroupOnClick(portfolioGroupId) {
  console.log('Portfolio Group clicked: ' + portfolioGroupId);
}

  render() {    
    const portfolioColours = {
        item: '#a2d729',
        itemLead: '#261447',
        area: '#d80032'
    };
    return <React.Fragment>
      <label htmlFor="dataSource">Select data source</label>
      <select id="dataSource" name="dataSource" value={this.state.dataSource} onChange={this.handleInputChange}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
      </select>
      <PortfolioExplorer portfolio={this.state.data} title={this.state.data.portfolio} portfolioColours={portfolioColours} areaonclick={this.demoAreaOnClick} portfoliogrouponclick={this.demoPortfolioGroupOnClick} portfoliooversightonclick={this.demoOversightOnClick}/>
    </React.Fragment>
  }
}

render(<Demo/>, document.querySelector('#demo'))
