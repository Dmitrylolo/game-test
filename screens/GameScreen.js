import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Input from '../components/Input';
import Buttom from '../components/Button';

class GameScreen extends Component {
	state = {};

	componentDidMount() {
		console.log('SignInScreen did mount, state:', this.state);
	}

	render() {
		return (
			<View>
				<Text>GameScreen</Text>
			</View>
		);
	}
}

export default GameScreen;
