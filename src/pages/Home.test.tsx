import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Home from "./Home"

describe('Home render', function () {
   it('should render home page', function () {
       let container = document.createElement('div');
       document.body.appendChild(container);
       act(() => {
           ReactDOM.render(<Home/>, container);
       })
       const header = container.querySelector('h2');
       expect(header?.textContent).toBe(" Welcome to guess the TV game ")
   });
});