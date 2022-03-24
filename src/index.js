import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './companyPage/app';
// import LatihanReact from './latihanReact/latihan'

// setInterval(function(){
//   ReactDOM.render(
//     <LatihanReact />,
//     document.getElementById('root')
//   );
// }, 1000) mengatur set interval pada jam

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
