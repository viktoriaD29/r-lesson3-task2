import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import SearchField from './Search.jsx';

const rootElement = document.querySelector('#root');

const element = (<SearchField name="Bob" />)

ReactDOM.render(element, rootElement);
