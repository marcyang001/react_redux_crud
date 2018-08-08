
const postReducer = (state = [], action) => {

	switch (action.type) {
		case 'ADD_POST':
			return state.concat([action.data]);
		// using ES6 default parameter syntax to add that.
		default:
		// one other thing to note is that a reducer must 
		// always have the default clause inside the switch statement
			return state;
	}
}

export default postReducer;

