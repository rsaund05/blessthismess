import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from './src/screens/Dashboard';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import Account from './src/screens/Account';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{

			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				name="Details"
				component={Details}
				options={{ title: 'Details Page' }} 
			/>
		</Stack.Navigator>
	);
  }
  
  const SettingsStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Settings"
			screenOptions={{

			}}
		>
			<Stack.Screen
				name="Settings"
				component={Settings}
			/>
			<Stack.Screen
				name="Details"
				component={Details}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
			/>
		</Stack.Navigator>
	);
  }

const AccountStack = () => {
	return (
		<Stack.Navigator 
			initialRouteName="Account"
			screenOptions={{

			}}
		>
			<Stack.Screen 
				name="Account"
				component={Account}
			/>
		</Stack.Navigator>
	);
}
  
function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Feed"
				tabBarOptions={{
				
			}}>
				<Tab.Screen
					name="HomeStack"
					component={HomeStack}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={size}
						/>
						),
					}}  
				/>
				<Tab.Screen 
					name="AccountStack"
					component={AccountStack}
					options={{
						tabBarLabel: 'Account',
						tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="account-details"
							color={color}
							size={size}
						/>
						),
					}}
				/>
				<Tab.Screen
					name="SettingsStack"
					component={SettingsStack}
					options={{
						tabBarLabel: 'Settings',
						tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="tune"
							color={color}
							size={size}
						/>
						),
					}} 
				/>
			</Tab.Navigator>
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
