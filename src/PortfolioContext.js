import React, { Component } from 'react';


export const PortfolioContext = React.createContext();

export class PortfolioProvider extends Component {
  state = {
    x : 0,
    y: 0
  }

  render() {
    return (
      <PortfolioContext.Provider value={
        {
          state: this.state,
          onHoverMove: (e) => {
              this.setState({ x: e.pageX, y: e.pageY});
          }          
        }
      }>
      {this.props.children}
      </PortfolioContext.Provider>
    )
  }
}