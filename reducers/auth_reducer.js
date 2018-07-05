import { LOGIN_SUCCESS, LOGIN_FAIL, LOADING } from '../actions/types';

const INITIAL_STATE = {
	user: {},
	token: '',
	terms: false,
	loading: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action) {
		case LOGIN_SUCCESS:
			return {
				user: action.user,
				token: action.token
			};
		case LOGIN_FAIL:
			return {
				user: null,
				token: null,
				error: action.error
			};
		case LOADING:
			return {
				loading: action.payload
			};
		default:
			return state;
	}
};
