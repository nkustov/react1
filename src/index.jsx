import React from 'react';
import ReactDOM from 'react-dom';

import PostItem from 'components/PostItem';

const posts = [{
	id: 1,
	title: 'post 1',
	description: 'text 1'
}, {
	id: 2,
	title: 'post 2',
	description: 'text 2'
}, {
	id: 3,
	title: 'post 3',
	description: 'text 3'
}];

ReactDOM.render(<React.Fragment>
	{posts.map((item, i) => {
		return <PostItem key={i} { ...item } />
	})}
</React.Fragment>, document.getElementById('root'));

// import { BrowserRouter, Switch } from 'react-router-dom';

// import App from './App.jsx';

// import { ThemeProvider } from 'react-jss';
// import theme from 'theme.js';

// import { Provider } from 'react-redux';
// import store from './store.js';

// import 'static/css/fontawesome-pro-5.7.2/css/all.min.css';

// render (<ThemeProvider theme={theme}>
// 	<BrowserRouter>
// 		<Provider store={store()}>
// 			<Switch>
// 				<App />
// 			</Switch>
// 		</Provider>
// 	</BrowserRouter>
// </ThemeProvider>, document.getElementById('root'));