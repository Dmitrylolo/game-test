import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Input from '../components/Input';
import Buttom from '../components/Button';

class LobbyScreen extends Component {
	state = {};

	componentDidMount() {
		console.log('SignInScreen did mount, state:', this.state);
	}

	render() {
		return (
			<View>
				<Text>LobbyScreen</Text>
			</View>
		);
	}
}

export default LobbyScreen;
