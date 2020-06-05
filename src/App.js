import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import './App.css';

function App() {
	return (
		<div className={App}>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/menu' component={Menu} />
				<Route exact path='/about' component={About} />
				<Route component={Home} />
			</Switch>
		</div>
	);
}

export default App;
