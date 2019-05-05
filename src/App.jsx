import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

	getAsyncRouteComponent = (name = '') => {
		const Route = Loadable({
			loader: () => import(`./routes/${name}Route`),
			loading: () => null
		});
		return <Route />
	}

	render = () => {
		return <Switch>
			<Route path="/users">
				{this.getAsyncRouteComponent('Users')}
			</Route>

			<Route path="/posts">
				{this.getAsyncRouteComponent('Posts')}
			</Route>

			<Route path="/media">
				{this.getAsyncRouteComponent('Media')}
			</Route>
		</Switch>
	}
}

export default App;