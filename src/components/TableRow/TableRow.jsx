import React from 'react';
import './styles.css';

class TableRow extends React.PureComponent {
	render = () => {
		const { children = [] } = this.props;
		return <tr className="table-row__container">{children}</tr>
	}
}

export default TableRow;