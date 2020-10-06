import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import App from './components/App/App';
import createBrowserHistory from 'history/createBrowserHistory';
import Jokes from './components/Jokes/Jokes';
const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/jokes' component={Jokes} />
		</Switch>
	</Router>,
	document.getElementById('App')
);
