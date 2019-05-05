
export default (stateName = '', payload = {}) => (dispatch) => {
	dispatch({
		type: `UPDATE_${stateName}_PROPS`,
		payload
	})
}