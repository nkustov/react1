import React from 'react';
import { Link } from 'react-router-dom';

class MediaRoute extends React.PureComponent {
	render = () => {
		return <>
			<h1>Media</h1>
			<Link to="users">Users</Link>
		</>
	}
}

export default MediaRoute;