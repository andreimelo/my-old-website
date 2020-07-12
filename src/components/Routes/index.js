import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import NotFound from '../../pages/404';

function Routes(){
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default Routes;
