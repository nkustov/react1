import React from 'react';
import './styles.css';

class Toolbar extends React.PureComponent {
	render = () => {
		const { title = '', children = [] } = this.props;
		return <div className="toolbar__cotainer">
			<h1>{title}</h1>
			<div>
				{children}
			</div>
		</div>
	}
}

export default Toolbar;