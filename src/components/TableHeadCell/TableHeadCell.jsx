import React from 'react';
import './styles.css';

class TableHeadCell extends React.PureComponent {
	render = () => {
		const { children = [] } = this.props;
		return <td className="table-head-cell__container">
			{children}
		</td>
	}
}

export default TableHeadCell;