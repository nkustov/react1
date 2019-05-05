import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from 'components/Table';
import TableHead from 'components/TableHead';
import TableHeadCell from 'components/TableHeadCell';
import TableRow from 'components/TableRow';
import TableBodyCell from 'components/TableBodyCell';
import setDataCollection from 'actions/setDataCollection.js';
import updateProps from 'actions/updateProps.js';

class UsersTable extends React.PureComponent {
	checkboxNodes = [];

	componentDidMount = () => {
		(async () => {
			const { setTableData } = this.props;
			const response = await fetch('http://localhost:3002/users', {
				mode: 'cors'
			});
			const data = await response.json();
			setTableData('USERS', data);
		})();
	}

	render = () => {
		const { data = [] } = this.props;
		return <>
			<button onClick={() => {
				const { updateProps } = this.props;
				updateProps('CONFIG', { rowsTableLimit: 20 });
			}}>
				Изменить лимит на 20
			</button>
			<Table>
				<TableHead>
				{[
					'ID',
					'Name',
					'Surname',
					'Email',
					'Phone',
					'City'
				].map((item, i) => (
					<TableHeadCell key={i}>
						{item === 'ID' ? 
							<input 
								ref={(node) => this.commonCheckbox = node}
								type="checkbox"
								onChange={this.handleSwitchSelectAll} /> :
							<b>{item}</b>}
					</TableHeadCell>
				))}
				</TableHead>
				<tbody>
					{data.map((item, i) => (
						<TableRow key={i}>
						{(() => {
							let row = [];
							let key;
							let ii = 0;
							for (key in item) {
								if (key !== 'checked') {
									row.push(
										<TableBodyCell key={ii}>
											{key === 'id' ?
												<input 
													ref={(node) => this.checkboxNodes[item.id] = node}
													type="checkbox" 
													name={`row_${item.id}`} /> :
													item[key]}
										</TableBodyCell>);
								}
								ii++;
							}
							return row;
						})()}
						</TableRow>
					))}
				</tbody>
			</Table>
		</>
	}
}

const mapStateToProps = (store) => ({
	data: store.usersData,
	configData: store.configData
});

const mapActionsToProps = (dispatch) => ({
	setTableData: bindActionCreators(setDataCollection, dispatch),
	updateProps: bindActionCreators(updateProps, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(UsersTable);