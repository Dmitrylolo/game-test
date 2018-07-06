import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<SafeAreaView style={styles.safeArea}>
					<Navigation />
				</SafeAreaView>
			</Provider>
		);
	}
}

const styles = {
	safeArea: {
		flex: 1
	}
};
