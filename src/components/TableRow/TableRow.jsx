import React from 'react';
import './styles.css';

class TableRow extends React.PureComponent {
	render = () => {
		const { children = [], onClick } = this.props;
		return <tr 
			onClick={onClick}
			className="table-row__container">{children}</tr>
	}
}

export default TableRow;