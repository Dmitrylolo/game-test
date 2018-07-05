import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = props => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	const { label, value, onChangeText, placeholder, secureTextEntry } = props;

	return (
		<View style={containerStyle}>
			{label && (
				<View>
					<Text style={labelStyle}>{label}</Text>
				</View>
			)}
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				placeholderTextColor="grey"
				{...props}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 8,
		fontSize: 18,
		flex: 2,
		backgroundColor: 'lightgrey',
		height: 38,
		borderRadius: 5
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20
	},
	containerStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10
	}
};

export { Input };
