
export default (state = [], action) => {
	switch (action.type) {
		case 'SET_USERS_COLLECTION_DATA':
			return [ ...action.payload ];

		default:
			return [ ...state ];
	}
}