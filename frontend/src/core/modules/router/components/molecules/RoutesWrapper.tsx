import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../atoms/PrivateRoute";


export interface RouterWrapperProps {
  children?: React.ReactNode | React.ReactNode[];
}

const RouterWrapper = ({children}: RouterWrapperProps) => {
  const newChildren: any = []
  React.Children.forEach(children, (element) => {
    if (!React.isValidElement(element)) {
      return;
    }

    if (element && element.type === Route) {
      newChildren.push(element);
    } else if (element.type === PrivateRoute) {
      newChildren.push(element); // TODO: Call element
    }
  });
  
  return newChildren;
}

export default RouterWrapper;