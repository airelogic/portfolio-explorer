import React, { Component, createRef, useContext, useRef, useState } from 'react';


interface IPortfolioContext {
  mousePosition: { x: number, y: number }
}

export const PortfolioContext = React.createContext<IPortfolioContext | undefined>(undefined);


export const PortfolioContextProvider : React.FC<{ children?: JSX.Element }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const ref = createRef<HTMLDivElement>();

  const contextValue : IPortfolioContext = {
    mousePosition
  };

  const onMouseMove : EventListener = (e: Event) => {
    if((e as MouseEvent).pageX !== undefined) {
      const mouseEvent = e as MouseEvent;
      setMousePosition({ x: mouseEvent.pageX, y: mouseEvent.pageY });
    }
  }
  
  const trackMousePosition = () => {
    if(ref.current) {
      ref.current.addEventListener("mousemove", onMouseMove)
    }
  }

  const untrackMousePosition = () => {
    if(ref.current) {
      ref.current.removeEventListener("mousemove", onMouseMove)
    }
  }

  return (
    <PortfolioContext.Provider value={contextValue}>
      <div onMouseEnter={trackMousePosition} onMouseLeave={untrackMousePosition} ref={ref}>
        {children}
      </div>
    </PortfolioContext.Provider>
  );
}


export const usePortfolioContext = () : IPortfolioContext => {
  const context = useContext(PortfolioContext);

  if(!context) {
    throw new Error(`${PortfolioContext.displayName} has not been registered`);
  }

  return context;
}