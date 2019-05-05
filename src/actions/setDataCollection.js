
export default (stateName = '', data = []) => (dispatch) => {
	dispatch({
		type: `SET_${stateName}_COLLECTION_DATA`,
		payload: data
	});
};