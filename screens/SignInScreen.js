import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

//import * as actions from '../actions';

class SignInScreen extends Component {
	state = {
		userName: '',
		password: ''
	};

	componentDidMount() {
		console.log('SignInScreen did mount, state:', this.state);
	}

	onLoginPress = () => {
		const { userName, password } = this.state;
		this.props.onLogin(userName, password);
	};

	onSignUpPress = () => {
		this.props.navigation.navigate('signUp');
	};

	onUsernameChange = userName => {
		this.setState({ userName });
	};

	onPasswordChange = password => {
		this.setState({ password });
	};

	renderError = () => {
		if (this.props.error) {
			return <Text>this.props.error</Text>;
		}
		return null;
	};

	render() {
		const { userName, password } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<Text>SIGN IN</Text>

					<Input
						placeholder="Username"
						onChangeText={this.onUsernameChange}
						value={userName}
					/>
					<Input
						placeholder="Password"
						onChangeText={this.onPasswordChange}
						secureTextEntry
						value={password}
					/>
				</View>
				<View
					style={{
						flex: 3,
						alignContent: 'center',
						justifyContent: 'space-around'
					}}
				>
					{this.renderError()}
					<View style={styles.buttonContainer}>
						<Button onPress={this.onLoginPress}>LOGIN</Button>
					</View>
					<View style={styles.bottomTextContainer}>
						<Text style={styles.bottomText}>Dont have an account?</Text>
						<TouchableOpacity onPress={this.onSignUpPress}>
							<Text style={styles.bottomText}>Sign up!</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ auth: { user, token, error, loading } }) => {
	return { user, token, error, loading };
};

export default connect(
	mapStateToProps,
	null
)(SignInScreen);

const styles = {
	container: {
		flex: 1,
		padding: 20
	},
	inputContainer: {
		flex: 3,
		justifyContent: 'flex-end',
		alignItems: 'flex-start'
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	bottomTextContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	}
};
