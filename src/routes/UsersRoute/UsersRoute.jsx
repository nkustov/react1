import React from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toolbar from 'components/Toolbar';
import Table from 'components/Table';
import TableHead from 'components/TableHead';
import TableHeadCell from 'components/TableHeadCell';
import TableRow from 'components/TableRow';
import TableBodyCell from 'components/TableBodyCell';
import setDataCollection from 'actions/setDataCollection.js';
import Dialog from 'components/Dialog';

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
	},
	form: {
		marginTop: 12,
		'& input': {
			width: 'calc(100% - 20px)',
			marginBottom: 12
		}
	}
});

class UsersRoute extends React.PureComponent {
	commonCheckbox = null;
	checkboxNodes = {};

	state = {
		displayDialogFlag: false,
		currentNameValue: 'Default',
		currentUserData: {}
	};

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

	handleSwitchSelectAll = (e) => {
		const currentStateFlag = e.target.checked === undefined ? 
			(() => {
				const commonCheckboxNewState = !this.commonCheckbox.checked;
				this.commonCheckbox.checked = commonCheckboxNewState;
				return commonCheckboxNewState;
			})() :
			e.target.checked;
		let id;
		for (id in this.checkboxNodes) {
			if (this.checkboxNodes[id]) {
				this.checkboxNodes[id].checked = currentStateFlag;
			}
		}
	}

	handleDeleteSelectedRows = () => {
		const { data, setTableData } = this.props;
		let id;
		let idsForDelete = [];
		let newCheckboxeNodes = {};

		for (id in this.checkboxNodes) {
			if (this.checkboxNodes[id]) {
				if (this.checkboxNodes[id].checked === true) {
					this.checkboxNodes[id].checked = false;
					idsForDelete.push(Number(id));
				}
				else {
					newCheckboxeNodes[id] = this.checkboxNodes[id];
				}
			}
		}
		this.checkboxNodes = { ...newCheckboxeNodes };
		setTableData('USERS', data.filter((item) => idsForDelete.indexOf(Number(item.id)) === -1));
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let el;
		let postData = {};
		let allow = true;
		for (el in e.target.elements) {
			if (e.target.elements[el].localName === 'input') {
				if (e.target.elements[el].value) {
					postData[e.target.elements[el].name] = e.target.elements[el].value
					e.target.elements[el].style.border = '1px solid transparent';
				}
				else {
					allow = false;
					e.target.elements[el].style.border = '1px solid red';
				}
			}
		}
		if (allow) {
			const { data, setTableData } = this.props;
			data.push({
				id: data[data.length - 1].id + 1,
				...postData
			});
			setTableData('USERS', [ ...data ]);
			this.setState({ 
				displayDialogFlag: false 
			});
		}
	}

	render = () => {
		const { displayDialogFlag, currentNameValue, currentUserData } = this.state;
		const { classes, data = [] } = this.props;
		return <>
			<Toolbar title="Users" titleColor="red">
				<button 
					className={classes.btn}
					onClick={() => this.setState({
						displayDialogFlag: true
					})}>
					Создать пользователя
				</button>
				<button
					className={classes.btn} 
					onClick={this.handleSwitchSelectAll}>
					Выделить всех
				</button>
				<button 
					className={classes.btn}
					onClick={this.handleDeleteSelectedRows}>
					Удалить выделенных
				</button>
			</Toolbar>

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
						<TableRow 
							key={i} 
							onClick={() => this.setState({
								currentUserData: item,
								displayDialogFlag: true
							})}>
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
			<Dialog	
				open={displayDialogFlag}
				title="Создать пользователя">
				<form 
					className={classes.form}
					onSubmit={this.handleSubmit}>
					<div>
						<input
							type="text"
							name="name"
							placeholder="Type name ..."
							defaultValue={currentUserData.name || ''} />
					</div>
					<div>
						<input
							type="text"
							name="surname"
							placeholder="Type surnaame ..."
							defaultValue={currentUserData.surname || ''} />
					</div>
					<div>
						<input
							type="email"
							name="email"
							placeholder="Type email ..."
							defaultValue={currentUserData.email || ''} />
					</div>
					<div>
						<input
							type="text"
							name="phone"
							placeholder="Type phone ..."
							defaultValue={currentUserData.phone || ''} />
					</div>
					<div>
						<input
							type="text"
							name="city"
							placeholder="Type city ..."
							defaultValue={currentUserData.city || ''} />
					</div>
					<button className={classes.btn}>
						Создать
					</button>
					<button 
						className={classes.btn}
						onClick={() => this.setState({
							displayDialogFlag: false,
							currentUserData: {}
						})}>
						Отменить
					</button>
				</form>
			</Dialog>
		</>
	}
}

const mapStateToProps = (store) => ({
	data: store.usersData
});

const mapActionsToProps = (dispatch) => ({
	setTableData: bindActionCreators(setDataCollection, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(UsersRoute));