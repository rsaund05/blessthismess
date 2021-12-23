import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
			/>
		</Stack.Navigator>
	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		alignItems: 'center',
		justifyContent: 'center',
  	},
});

export default App;
