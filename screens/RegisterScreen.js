import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import * as actions from '../actions';

class RegisterScreen extends Component {
	state = {
		confirmPassword: '',
		registerData: {
			userName: '',
			password: '',
			firstName: '',
			lastName: '',
			country: '',
			email: '',
			address: '',
			city: '',
			zip: '',
			state: '',
			phone: '',
			birthDay: '',
			ethereumAddress: ''
		}
	};

	componentDidMount() {
		console.log('SignInScreen did mount, state:', this.state);
	}

	onRegister = () => {
		const { registerData } = this.state;
		this.props.onRegister(registerData);
	};

	onChangeTextValue = (key, value) => {
		this.setState({
			registerData: { ...this.state.registerData, [key]: value }
		});
	};

	renderError = () => {
		if (this.props.error) {
			return <Text>this.props.error</Text>;
		}
		return null;
	};

	render() {
		const {
			userName,
			password,
			confirmPassword,
			firstName,
			lastName,
			country,
			email,
			address,
			city,
			zip,
			state,
			phone,
			birthDay,
			ethereumAddress
		} = this.state.registerData;

		return (
			<ScrollView style={styles.container}>
				<View style={styles.inputContainer}>
					<Input
						placeholder="ETH Address"
						onChangeText={value =>
							this.onChangeTextValue('ethereumAddress', value)
						}
						value={ethereumAddress}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Input
						placeholder="Username"
						onChangeText={value => this.onChangeTextValue('userName', value)}
						value={userName}
					/>
					<Input
						placeholder="Password"
						onChangeText={value => this.onChangeTextValue('password', value)}
						secureTextEntry
						value={password}
					/>
					<Input
						placeholder="Confirm Password"
						onChangeText={value =>
							this.onChangeTextValue('confirmPassword', value)
						}
						secureTextEntry
						value={confirmPassword}
					/>
				</View>
				<View style={[styles.inputContainer, { borderBottomWidth: 0 }]}>
					<Input
						placeholder="First Name"
						onChangeText={value => this.onChangeTextValue('firstName', value)}
						value={firstName}
					/>
					<Input
						placeholder="Last Name"
						onChangeText={value => this.onChangeTextValue('lastName', value)}
						secureTextEntry
						value={lastName}
					/>
					<Input
						placeholder="E-mail"
						onChangeText={value => this.onChangeTextValue('email', value)}
						secureTextEntry
						value={email}
						keyboardType="email-address"
					/>
					<Input
						placeholder="Country"
						onChangeText={value => this.onChangeTextValue('country', value)}
						secureTextEntry
						value={country}
					/>
					<Input
						placeholder="Date of Birth"
						onChangeText={value => this.onChangeTextValue('birthDay', value)}
						secureTextEntry
						value={birthDay}
					/>
					<Input
						placeholder="Phone Number"
						onChangeText={value => this.onChangeTextValue('phone', value)}
						secureTextEntry
						value={phone}
						keyboardType="phone-pad"
					/>
					<Input
						placeholder="City"
						onChangeText={value => this.onChangeTextValue('city', value)}
						secureTextEntry
						value={city}
					/>
					<Input
						placeholder="Zip Code"
						onChangeText={value => this.onChangeTextValue('zip', value)}
						secureTextEntry
						value={zip}
						keyboardType="numeric"
					/>
					<Input
						placeholder="State"
						onChangeText={value => this.onChangeTextValue('state', value)}
						secureTextEntry
						value={state}
					/>
					<Input
						placeholder="Address"
						onChangeText={value => this.onChangeTextValue('address', value)}
						secureTextEntry
						value={address}
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
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ auth: { loading, error, user, token } }) => {
	return { loading, error, user, token };
};

export default connect(
	mapStateToProps,
	actions
)(RegisterScreen);

const styles = {
	container: {
		flex: 1,
		padding: 20
	},
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: 'grey',
		marginTop: 7
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	}
};
