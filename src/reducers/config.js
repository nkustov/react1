
export default (state = {
	creatingUserAllowFlag: true,
	selectAllUsersFlag: true,
	deletingAllUsersFlag: true,
	rowsTableLimit: 10
}, action) => {
	switch (action.type) {
		case 'UPDATE_CONFIG_PROPS':
			return { ...state, ...action.payload };

		default:
			return { ...state };
	}
}