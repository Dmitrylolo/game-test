import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Input from '../components/Input';
import Buttom from '../components/Button';

class CreateTableScreen extends Component {
	state = {};

	componentDidMount() {
		console.log('SignInScreen did mount, state:', this.state);
	}

	render() {
		return (
			<View>
				<Text>CreateTableScreen</Text>
			</View>
		);
	}
}

export default CreateTableScreen;
