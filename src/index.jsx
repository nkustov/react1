import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider} from 'react-jss';
import App from './App.jsx';

const theme = {
	palette: {
		dark: '#000',
		light: '#FFF',
		primary: 'red',
		secondary: 'blue'
	},

	btn: {
		backgroundColor: 'transparent',
		margin: 2,
		padding: 8,
		border: '1px solid grey',
		cursor: 'pointer',
		'&:hover': {
			color: '#FFF',
			backgroundColor: 'grey'
		}
	}
};

ReactDOM.render(<ThemeProvider theme={theme}>
	<BrowserRouter>
	<App />
</BrowserRouter>
</ThemeProvider>, document.getElementById('root'));