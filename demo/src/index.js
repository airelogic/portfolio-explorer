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
    const portfolioTheme = {
        item: '#a2d729',
        itemLead: '#261447',
        area: '#3c91e6',
        logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4wICg0MDM1YTRmYjQ5LCAyMDIwLTA1LTAxKSIKICAgaGVpZ2h0PSI0MDQuODg2MjYiCiAgIHdpZHRoPSI0MzguMTYyNzgiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkFpcmVMb2dpYyBDb2dfRnVsbENvbG91ci5zdmciCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHZpZXdCb3g9IjAgMCA0MzguMTYyNzggNDA0Ljg4NjI1IgogICB5PSIwcHgiCiAgIHg9IjBweCIKICAgaWQ9IkxheWVyXzEiCiAgIHZlcnNpb249IjEuMSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTMxIj48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMjkiPgoJCgoJCQoJCQoJCQoJCQoJCQoJCQoJCQoJCQoJCQoJCQoJPC9kZWZzPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iTGF5ZXJfMSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii0xMiIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii0xMiIKICAgaW5rc2NhcGU6Y3k9IjIwMi40NTAwMSIKICAgaW5rc2NhcGU6Y3g9Ijc1MC4wMDY1MSIKICAgaW5rc2NhcGU6em9vbT0iMS4wNzYiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaWQ9Im5hbWVkdmlldzI3IgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMDUwIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjM4NDAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIiAvPgo8c3R5bGUKICAgaWQ9InN0eWxlMiIKICAgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiM3M0VGMzc7fQoJLnN0MXtmaWxsOiMyNTE0MzA7fQo8L3N0eWxlPgo8cGF0aAogICBpZD0icGF0aDQiCiAgIGQ9Im0gMzc5LjIwNjUxLDE3MS44IGMgLTEzLjksLTU5LjYgNzEuMSwtMjMgMTAuNywtOTQuMSAtNjAuNCwtNzEuMSAtNDMuNSwxNy42IC0xMDAuMywtMTEuMiAtNTYuOCwtMjguOCAyNS42LC02Ni41IC03MS4yLC02Ni41IC05Ni44LDAgLTE1LjIsNDMuMiAtNzEuNiw2Ni41IC01Ni4zOTk5OTcsMjMuMyAtMzkuNSwtNjAgLTk5Ljc5OTk5NywxMS4yIC02MC4zLDcxLjIgMjQuNiwzNi4zIDEwLjYsOTQuMSAtMTQsNTcuOCAtNzQuNiwtOC4zIC01My4wMDAwMDAyLDgwLjQgMjEuNjAwMDAwMiw4OC43IDQ1LjgwMDAwMDIsMiA4NS4yMDAwMDAyLDUxLjEgMzkuMzk5OTk3LDQ5LjEgLTUzLjMsNDkuNyAzNC4wOTk5OTcsODkuMiA4Ny40LDM5LjUgMzIuNSwtMzQuMSA5NS4yLC0zMC44IDYyLjcsMy4zIDgsNzAuMiA5NS4yLDMwLjggODcuMiwtMzkuNCAtNS4zLC00NC4xIDM0LjEsLTg5LjIgMzkuNCwtNDUuMSA2My40LDM3LjkgODUuMiwtNTEuMSAyMS43LC04OSAtNDAuNCwtMjEuMiAtNTQuNCwtODAuNCB6IG0gLTEzOS44LDE2Ni42IGMgLTU2LjEsLTAuOSAtMTAwLjgsLTQ3LjIgLTk5LjgsLTEwMy4yIDAuOSwtNTYuMSA0Ny4yLC0xMDAuOCAxMDMuMiwtOTkuOCA1NS40LDAuOSA5OS44LDQ2LjEgOTkuOSwxMDEuNSAtMC40LDU2LjUgLTQ2LjQsMTAxLjkgLTEwMi45LDEwMS42IC0wLjEsLTAuMSAtMC4zLC0wLjEgLTAuNCwtMC4xIHoiCiAgIGNsYXNzPSJzdDAiIC8+Cjwvc3ZnPgo='
    };
    return <React.Fragment>
      <label htmlFor="dataSource">Select data source</label>
      <select id="dataSource" name="dataSource" value={this.state.dataSource} onChange={this.handleInputChange}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
      </select>
      <PortfolioExplorer portfolio={this.state.data} title={this.state.data.portfolio} portfolioTheme={portfolioTheme} areaonclick={this.demoAreaOnClick} portfoliogrouponclick={this.demoPortfolioGroupOnClick} portfoliooversightonclick={this.demoOversightOnClick}/>
    </React.Fragment>
  }
}

render(<Demo/>, document.querySelector('#demo'))
