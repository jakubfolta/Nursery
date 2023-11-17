import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const options = {
  plugins: {
    overscroll: { effect: 'glow' }
  }
};

Scrollbar.use(OverscrollPlugin);
Scrollbar.init(document.querySelector('#my-scrollbar') as HTMLElement, options);


const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);