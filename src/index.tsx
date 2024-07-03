import React from 'react';
import ReactDOM from 'react-dom/client';
import Bio from './components/Bio'
import './index.css'
import reportWebVitals from './reportWebVitals';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Comic from "./components/Comic"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Bio />
      <Projects />
      <Skills />
      <Comic />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
