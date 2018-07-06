import axios from 'axios';

import { LOGIN_SUCCESS, LOGIN_FAIL, LOADING } from './types';

import api from '../api';

export const onLogin = (userName, password) => async dispatch => {
	try {
		dispatch({ type: LOADING, payload: true });
		const {
			data: { token, user }
		} = await axios.post(api.auth.signin, {
			userName,
			password
		});
		dispatch({ type: LOGIN_SUCCESS, user, token });
		dispatch({ type: LOADING, payload: false });
	} catch ({ response }) {
		dispatch({
			type: LOGIN_FAIL,
			error: `Login fail. Status: ${response.status}`
		});
		dispatch({ type: LOADING, payload: false });
	}
};

export const onRegister = registerData => async dispatch => {
	try {
		dispatch({ type: LOADING, payload: true });
		const { auth_token: token, user } = await axios.post(api.auth.signup, {
			...registerData
		});
		dispatch({ type: LOGIN_SUCCESS, user, token });
		dispatch({ type: LOADING, payload: false });
	} catch ({ response }) {
		dispatch({
			type: LOGIN_FAIL,
			error: `Login fail. Status: ${response.status}`
		});
		dispatch({ type: LOADING, payload: false });
	}
};
