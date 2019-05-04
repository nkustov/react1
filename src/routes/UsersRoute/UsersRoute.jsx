import React from 'react';
import withStyles from 'react-jss';
import Toolbar from 'components/Toolbar';
import Table from 'components/Table';
import TableHead from 'components/TableHead';
import TableHeadCell from 'components/TableHeadCell';
import TableRow from 'components/TableRow';
import TableBodyCell from 'components/TableBodyCell';

const styles = ({ btn }) => ({
	btn
});

class UsersRoute extends React.PureComponent {
	state = {
		data: [{
			id: 1,
			name: 'Name1',
			surname: 'Surname1',
			email: 'email1@mail.com',
			phone: '+30000000000',
			city: 'City1',	
		}, {
			id: 2,
			name: 'Name2',
			surname: 'Surname2',
			email: 'email2@mail.com',
			phone: '+30000000000',
			city: 'City2',
		}, {
			id: 3,
			name: 'Name3',
			surname: 'Surname3',
			email: 'email3@mail.com',
			phone: '+30000000000',
			city: 'City3',
			checked: true
		}, {
			id: 4,
			name: 'Name4',
			surname: 'Surname4',
			email: 'email4@mail.com',
			phone: '+30000000000',
			city: 'City4',
		}, {
			id: 5,
			name: 'Name3',
			surname: 'Surname3',
			email: 'email3@mail.com',
			phone: '+30000000000',
			city: 'City3',
		}, {
			id: 6,
			name: 'Name4',
			surname: 'Surname4',
			email: 'email4@mail.com',
			phone: '+30000000000',
			city: 'City4',
		}]
	}

	commonCheckbox = null;
	checkboxNodes = {};

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
		const { data } = this.state;
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
		this.setState({
			data: data.filter((item) => idsForDelete.indexOf(item.id) === -1)
		});
	}

	render = () => {
		const { data } = this.state;
		const {classes} = this.props;
		return <>
			<Toolbar title="Users" titleColor="red">
				<button className={classes.btn}>
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

export default withStyles(styles)(UsersRoute);