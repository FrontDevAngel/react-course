import React from 'react';
import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import "./index.css";

const divRoot = document.getElementById('app');

ReactDom.render(<CounterApp value={23} />, divRoot);

