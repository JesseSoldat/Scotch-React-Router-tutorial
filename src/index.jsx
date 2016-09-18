import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from './common/Main.jsx';
import Home from './common/Home.jsx';
import About from './common/About.jsx';
import Car from './car/Car.jsx';


render(
<Router history={browserHistory}>
	<Route path="/" component={Main}>
		<IndexRoute component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/car" component={Car}/>
	</Route>


</Router>, 


document.getElementById('container')

);