import React from 'react';
import './styles.css';

class Table extends React.PureComponent {
	render = () => {
		const { children = [] } = this.props;
		return <table className="table__container">
			{children}	
		</table>
	}
}

export default Table;