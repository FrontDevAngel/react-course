import React from 'react';
import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.getElementById('app');

// ReactDom.render(<PrimeraApp saludo="Hola, soy Ángel" />, divRoot);
ReactDom.render(<CounterApp />, divRoot);
