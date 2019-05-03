import React from 'react';
import { Link } from 'react-router-dom';

class PostsRoute extends React.PureComponent {
	render = () => {
		return <>
			<h1>Posts</h1>
			<Link to="media">Media</Link>
		</>
	}
}

export default PostsRoute;