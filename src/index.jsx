import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';


import Home from './common/Home.jsx';
import About from './common/About.jsx';
import Car from './car/Car.jsx';





render(
<Router history={hashHistory}>
	<Route path="/" component={Home}/>
	<Route path="/about" component={About}/>
	<Route path="/car" component={Car}/>


</Router>, 


document.getElementById('container')

);