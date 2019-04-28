import React from 'react';

class PostItem extends React.Component {
	render = () => {
		const { title = '', description = '' } = this.props;

		return <>
			<h1>{title}</h1>
			<p>{description}</p>
		</>
	}
}

export default PostItem;