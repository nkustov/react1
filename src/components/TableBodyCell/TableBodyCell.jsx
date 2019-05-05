import React from 'react';
// import './styles.css';

class TableBodyCell extends React.PureComponent {
	render = () => {
		const { children = [] } = this.props;
		return <td className="table-body-cell__container">
			{children}
		</td>
	}
}

export default TableBodyCell;