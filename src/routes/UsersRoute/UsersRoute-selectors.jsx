import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
// import { bindActionCreators } from 'redux';
import Toolbar from 'components/Toolbar';
import UsersTable from 'components/UsersTable';
// import setDataCollection from 'actions/setDataCollection.js';

const displayConfigData = createSelector(
	(store) => ({
		creatingUserAllowFlag: store.configData.creatingUserAllowFlag,
		selectAllUsersFlag: store.configData.selectAllUsersFlag,
		deletingAllUsersFlag: store.configData.deletingAllUsersFlag
	}),
	(configData) => ({ ...configData })
);

const styles = () => ({
	btn: {
		backgroundColor: 'transparent',
		margin: 2,
		padding: 8,
		border: '1px solid grey',
		cursor: 'pointer',
		'&:hover': {
			color: '#FFF',
			backgroundColor: 'grey'
		}
	}
});

class UsersRoute extends React.PureComponent {
	commonCheckbox = null;
	checkboxNodes = {};

	// handleSwitchSelectAll = (e) => {
	// 	const currentStateFlag = e.target.checked === undefined ? 
	// 		(() => {
	// 			const commonCheckboxNewState = !this.commonCheckbox.checked;
	// 			this.commonCheckbox.checked = commonCheckboxNewState;
	// 			return commonCheckboxNewState;
	// 		})() :
	// 		e.target.checked;
	// 	let id;
	// 	for (id in this.checkboxNodes) {
	// 		if (this.checkboxNodes[id]) {
	// 			this.checkboxNodes[id].checked = currentStateFlag;
	// 		}
	// 	}
	// }

	// handleDeleteSelectedRows = () => {
	// 	const { data, setTableData } = this.props;
	// 	let id;
	// 	let idsForDelete = [];
	// 	let newCheckboxeNodes = {};

	// 	for (id in this.checkboxNodes) {
	// 		if (this.checkboxNodes[id]) {
	// 			if (this.checkboxNodes[id].checked === true) {
	// 				this.checkboxNodes[id].checked = false;
	// 				idsForDelete.push(Number(id));
	// 			}
	// 			else {
	// 				newCheckboxeNodes[id] = this.checkboxNodes[id];
	// 			}
	// 		}
	// 	}
	// 	this.checkboxNodes = { ...newCheckboxeNodes };
	// 	setTableData('USERS', data.filter((item) => idsForDelete.indexOf(Number(item.id)) === -1));
	// }

	render = () => {
		const { classes, ...props } = this.props;
		console.log('!!!')
		return <>
			<Toolbar title="Users" titleColor="red">
				{props.creatingUserAllowFlag &&
					<button className={classes.btn}>
						Создать пользователя
					</button>}
				{props.selectAllUsersFlag &&
					<button
						className={classes.btn} 
						onClick={this.handleSwitchSelectAll}>
						Выделить всех
					</button>}
				{props.deletingAllUsersFlag &&
					<button 
						className={classes.btn}
						onClick={this.handleDeleteSelectedRows}>
						Удалить выделенных
					</button>}
			</Toolbar>
			<UsersTable />
		</>
	}
}

const mapStateToProps = (store) => ({
	...displayConfigData(store)
});

export default connect(mapStateToProps)(withStyles(styles)(UsersRoute));