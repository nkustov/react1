import React from 'react';
import './styles.css';

class TableHead extends React.PureComponent {
	render = () => {
		const { children = [] } = this.props;
		return <thead className="table-head__container">
			<tr>{children}</tr>
		</thead>
	}
}

export default TableHead;